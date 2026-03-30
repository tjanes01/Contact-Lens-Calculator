// ============================================================
//  data.js  —  Contact Lens Calculator Configuration
//  Holypic / ChatBot AI — Eye Care Cost Calculator
// ============================================================

// ── CSV Column Mapping ──────────────────────────────────────
// These are the EXACT column header names the app expects
// in your uploaded CSV file. If your CSV columns are named
// differently, update the values on the RIGHT side below.
// ============================================================

const CSV_COLUMNS = {
  lens:             "Lens",
  brand:            "Brand",
  type:             "Type",
  bc:               "BC",
  diam:             "Diam",
  modality:         "Modality",
  costPerBox:       "CostPerBox",
  price12Mo:        "Price12Mo",
  price9Mo:         "Price9Mo",
  price6Mo:         "Price6Mo",
  price3Mo:         "Price3Mo",
  boxes12Mo:        "Boxes12Mo",
  boxes9Mo:         "Boxes9Mo",
  boxes6Mo:         "Boxes6Mo",
  boxes3Mo:         "Boxes3Mo",
  rebateNew:        "RebateNew",
  rebateExisting:   "RebateExisting",
  competitorPrice:  "CompetitorPrice"
};

// ── Supply Duration Labels ──────────────────────────────────
// These are the display names shown on the calculator buttons
// for each supply duration option.
// ============================================================

const SUPPLY_LABELS = {
  "12Mo": "12 Months",
  "9Mo":  "9 Months",
  "6Mo":  "6 Months",
  "3Mo":  "3 Months"
};

// ── Competitor Name ─────────────────────────────────────────
// Change this to whatever competitor name you want displayed
// on the results screen.
// ============================================================

const COMPETITOR_NAME = "1-800 Contacts";

// ── Clinic Name ─────────────────────────────────────────────
// Your clinic/company name shown in the results and header
// ============================================================

const CLINIC_NAME = "Our Office";

// ── Currency Formatter ──────────────────────────────────────
// Formats numbers as US dollars — no need to change this
// ============================================================

function formatCurrency(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return "$0.00";
  return new Intl.NumberFormat("en-US", {
    style:                 "currency",
    currency:              "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

// ── CSV Parser ──────────────────────────────────────────────
// Reads the uploaded CSV file and converts it into data
// the calculator can use. Handles commas inside quotes too.
// ============================================================

function parseCSV(csvText) {
  const lines  = csvText.trim().split(/\r?\n/);
  const headers = parseCSVLine(lines<a href="" class="citation-link" target="_blank" style="vertical-align: super; font-size: 0.8em; margin-left: 3px;">[0]</a>);
  const records = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue; // skip empty rows

    const values = parseCSVLine(line);
    const record = {};

    headers.forEach((header, index) => {
      record[header.trim()] = (values[index] || "").trim();
    });

    records.push(record);
  }

  return records;
}

// Handles CSV lines that may contain commas inside quoted fields
function parseCSVLine(line) {
  const result = [];
  let current  = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      // Toggle quote mode
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      // End of a field
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current); // push the last field
  return result;
}

// ── Data Validator ──────────────────────────────────────────
// Checks that the uploaded CSV has all the required columns
// Returns an object: { valid: true/false, missing: [...] }
// ============================================================

function validateCSVHeaders(headers) {
  const required = Object.values(CSV_COLUMNS);
  const missing  = [];

  required.forEach(col => {
    if (!headers.includes(col)) {
      missing.push(col);
    }
  });

  return {
    valid:   missing.length === 0,
    missing: missing
  };
}

// ── Data Normalizer ─────────────────────────────────────────
// Converts raw CSV row data into clean typed values
// (numbers become actual numbers, not text strings)
// ============================================================

function normalizeLensRecord(raw) {
  return {
    lens:            raw[CSV_COLUMNS.lens]            || "",
    brand:           raw[CSV_COLUMNS.brand]           || "",
    type:            raw[CSV_COLUMNS.type]            || "",
    bc:              raw[CSV_COLUMNS.bc]              || "",
    diam:            raw[CSV_COLUMNS.diam]            || "",
    modality:        raw[CSV_COLUMNS.modality]        || "",
    costPerBox:      parseFloat(raw[CSV_COLUMNS.costPerBox])      || 0,
    price12Mo:       parseFloat(raw[CSV_COLUMNS.price12Mo])       || 0,
    price9Mo:        parseFloat(raw[CSV_COLUMNS.price9Mo])        || 0,
    price6Mo:        parseFloat(raw[CSV_COLUMNS.price6Mo])        || 0,
    price3Mo:        parseFloat(raw[CSV_COLUMNS.price3Mo])        || 0,
    boxes12Mo:       parseInt(raw[CSV_COLUMNS.boxes12Mo])         || 0,
    boxes9Mo:        parseInt(raw[CSV_COLUMNS.boxes9Mo])          || 0,
    boxes6Mo:        parseInt(raw[CSV_COLUMNS.boxes6Mo])          || 0,
    boxes3Mo:        parseInt(raw[CSV_COLUMNS.boxes3Mo])          || 0,
    rebateNew:       parseFloat(raw[CSV_COLUMNS.rebateNew])       || 0,
    rebateExisting:  parseFloat(raw[CSV_COLUMNS.rebateExisting])  || 0,
    competitorPrice: parseFloat(raw[CSV_COLUMNS.competitorPrice]) || 0
  };
}

// ── Unique Value Extractor ──────────────────────────────────
// Pulls out unique sorted values from a list of lens records
// Used to populate the dropdown menus in the calculator
// ============================================================

function getUniqueSorted(records, field) {
  const values = records.map(r => r[field]).filter(v => v !== "" && v !== null);
  return [...new Set(values)].sort();
}

// ── Lens Filter ─────────────────────────────────────────────
// Filters the full lens list down based on selections made
// (brand, lens name, bc, diam)
// ============================================================

function filterLenses(allLenses, filters = {}) {
  return allLenses.filter(lens => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value || value === "") return true; // no filter applied
      return lens[key] === value;
    });
  });
}

// ── Calculation Engine ──────────────────────────────────────
// Core math function — takes lens data + inputs, returns
// all the numbers needed for the results display
// ============================================================

function calculateCost(params) {
  const {
    lensOD,           // lens record for Right Eye
    lensOS,           // lens record for Left Eye
    supplyKey,        // "12Mo", "9Mo", "6Mo", or "3Mo"
    insurance,        // dollar amount of insurance coverage
    insuranceEye,     // "both", "OD", or "OS"
    patientType       // "new" or "existing"
  } = params;

  // ── Price keys based on supply selection
  const priceKey  = `price${supplyKey}`;
  const boxesKey  = `boxes${supplyKey}`;

  // ── Raw prices per eye (before insurance/rebate)
  const rawPriceOD = lensOD ? (lensOD[priceKey] || 0) : 0;
  const rawPriceOS = lensOS ? (lensOS[priceKey] || 0) : 0;
  const rawTotal   = rawPriceOD + rawPriceOS;

  // ── Boxes per eye
  const boxesOD = lensOD ? (lensOD[boxesKey] || 0) : 0;
  const boxesOS = lensOS ? (lensOS[boxesKey] || 0) : 0;

  // ── Insurance split logic
  let insuranceOD = 0;
  let insuranceOS = 0;
  const ins = parseFloat(insurance) || 0;

  if (insuranceEye === "both") {
    // Split evenly between both eyes
    insuranceOD = ins / 2;
    insuranceOS = ins / 2;
  } else if (insuranceEye === "OD") {
    insuranceOD = ins;
  } else if (insuranceEye === "OS") {
    insuranceOS = ins;
  }

  // Cap insurance so it never exceeds the lens price
  insuranceOD = Math.min(insuranceOD, rawPriceOD);
  insuranceOS = Math.min(insuranceOS, rawPriceOS);
  const totalInsurance = insuranceOD + insuranceOS;

  // ── Rebates (from vendor — NOT deducted from amount due today)
  const rebateKey = patientType === "new" ? "rebateNew" : "rebateExisting";
  const rebateOD  = lensOD ? (lensOD[rebateKey] || 0) : 0;
  const rebateOS  = lensOS ? (lensOS[rebateKey] || 0) : 0;
  const totalRebate = rebateOD + rebateOS;

  // ── Amount due TODAY (after insurance, before rebate)
  const amountDueOD = Math.max(0, rawPriceOD - insuranceOD);
  const amountDueOS = Math.max(0, rawPriceOS - insuranceOS);
  const amountDueToday = amountDueOD + amountDueOS;

  // ── True net cost (after insurance AND after rebate)
  const totalAfterAll = Math.max(0, amountDueToday - totalRebate);

  // ── Price per box
  const pricePerBoxOD = lensOD ? (lensOD.costPerBox || 0) : 0;
  const pricePerBoxOS = lensOS ? (lensOS.costPerBox || 0) : 0;

  // ── Competitor price comparison
  const compPriceOD = lensOD ? (lensOD.competitorPrice || 0) : 0;
  const compPriceOS = lensOS ? (lensOS.competitorPrice || 0) : 0;

  // Competitor total: multiply per-box price by number of boxes
  const compTotalOD = compPriceOD * boxesOD;
  const compTotalOS = compPriceOS * boxesOS;
  const compTotal   = compTotalOD + compTotalOS;

  // Savings vs competitor (using our net cost after ins + rebate)
  const savingsVsComp = compTotal - totalAfterAll;

  return {
    // Raw prices
    rawPriceOD,
    rawPriceOS,
    rawTotal,

    // Boxes
    boxesOD,
    boxesOS,
    totalBoxes: boxesOD + boxesOS,

    // Insurance
    insuranceOD,
    insuranceOS,
    totalInsurance,

    // Rebates
    rebateOD,
    rebateOS,
    totalRebate,

    // Key output numbers
    amountDueOD,
    amountDueOS,
    amountDueToday,     // ← what patient pays at desk
    totalAfterAll,      // ← true net cost (inc. rebate)

    // Per box
    pricePerBoxOD,
    pricePerBoxOS,

    // Competitor
    compTotalOD,
    compTotalOS,
    compTotal,
    savingsVsComp,

    // Pass-through for display
    supplyKey,
    patientType
  };
}

// ── Talking Points Generator ────────────────────────────────
// Creates the "sales script" bullet points shown to front
// desk staff to help them explain value to the patient
// ============================================================

function generateTalkingPoints(calcResult, lensOD, lensOS) {
  const points = [];
  const {
    totalRebate,
    savingsVsComp,
    amountDueToday,
    totalAfterAll,
    patientType,
    totalInsurance
  } = calcResult;

  // Insurance talking point
  if (totalInsurance > 0) {
    points.push(
      `Their insurance is saving them ${formatCurrency(totalInsurance)} off the retail price today.`
    );
  }

  // Rebate talking point
  if (totalRebate > 0) {
    points.push(
      `They will receive a ${formatCurrency(totalRebate)} rebate directly from the manufacturer — ` +
      `making their true out-of-pocket cost only ${formatCurrency(totalAfterAll)}.`
    );
  }

  // Competitor comparison talking point
  if (savingsVsComp > 0) {
    points.push(
      `Compared to ${COMPETITOR_NAME}, they are saving ${formatCurrency(savingsVsComp)} ` +
      `when you factor in their insurance and rebate.`
    );
  } else if (savingsVsComp < 0) {
    points.push(
      `${COMPETITOR_NAME} may appear cheaper online, but patients lose their ` +
      `insurance benefit and manufacturer rebate when buying elsewhere.`
    );
  }

  // Convenience talking point
  points.push(
    `Buying through us means professional fitting, easy reorders, and ` +
    `support from your eye care team — not a call center.`
  );

  // New patient rebate reminder
  if (patientType === "new" && totalRebate > 0) {
    points.push(
      `As a new patient, they qualify for the higher ${formatCurrency(totalRebate)} ` +
      `new customer rebate from the manufacturer.`
    );
  }

  return points;
}

// ── Column Guide Data ───────────────────────────────────────
// Used to display the CSV format guide table in the UI
// ============================================================

const COLUMN_GUIDE = [
  { name: "Lens",             desc: "Full lens product name",              example: "Acuvue Oasys"         },
  { name: "Brand",            desc: "Manufacturer / brand name",           example: "Johnson & Johnson"     },
  { name: "Type",             desc: "Daily or Monthly",                    example: "Monthly"               },
  { name: "BC",               desc: "Base Curve value",                    example: "8.4"                   },
  { name: "Diam",             desc: "Diameter value",                      example: "14.0"                  },
  { name: "Modality",         desc: "Pack description",                    example: "6 Pk - Monthly"        },
  { name: "CostPerBox",       desc: "Your cost per box (no $ sign)",       example: "45.00"                 },
  { name: "Price12Mo",        desc: "Your price for 12-month supply",      example: "480.00"                },
  { name: "Price9Mo",         desc: "Your price for 9-month supply",       example: "370.00"                },
  { name: "Price6Mo",         desc: "Your price for 6-month supply",       example: "250.00"                },
  { name: "Price3Mo",         desc: "Your price for 3-month supply",       example: "130.00"                },
  { name: "Boxes12Mo",        desc: "Number of boxes for 12 months",       example: "8"                     },
  { name: "Boxes9Mo",         desc: "Number of boxes for 9 months",        example: "6"                     },
  { name: "Boxes6Mo",         desc: "Number of boxes for 6 months",        example: "4"                     },
  { name: "Boxes3Mo",         desc: "Number of boxes for 3 months",        example: "2"                     },
  { name: "RebateNew",        desc: "Rebate amount for new customers",      example: "100.00"                },
  { name: "RebateExisting",   desc: "Rebate amount for existing customers", example: "50.00"                 },
  { name: "CompetitorPrice",  desc: "Competitor price per box (1-800 etc)", example: "52.00"                }
];

// ── Sample CSV Generator ────────────────────────────────────
// Creates and downloads a sample CSV file so your team
// has a template to fill in with real lens data
// ============================================================

function downloadSampleCSV() {
  const headers = Object.values(CSV_COLUMNS).join(",");

  const sampleRows = [
    "Acuvue Oasys,Johnson & Johnson,Monthly,8.4,14.0,6 Pk - Monthly,45.00,480.00,370.00,250.00,130.00,8,6,4,2,100.00,50.00,52.00",
    "Acuvue Oasys,Johnson & Johnson,Monthly,8.8,14.0,6 Pk - Monthly,45.00,480.00,370.00,250.00,130.00,8,6,4,2,100.00,50.00,52.00",
    "Dailies Total 1,Alcon,Daily,8.5,14.1,Dailies - 90 Pack,65.00,520.00,400.00,270.00,140.00,4,3,2,1,120.00,60.00,71.00",
    "Dailies Total 1,Alcon,Daily,8.5,14.1,Dailies - 90 Pack,65.00,520.00,400.00,270.00,140.00,4,3,2,1,120.00,60.00,71.00",
    "Biofinity,CooperVision,Monthly,8.6,14.0,6 Pk - Monthly,38.00,420.00,320.00,220.00,115.00,8,6,4,2,80.00,40.00,44.00",
    "Biofinity,CooperVision,Monthly,8.6,14.0,6 Pk - Monthly,38.00,420.00,320.00,220.00,115.00,8,6,4,2,80.00,40.00,44.00",
    "MyDay,CooperVision,Daily,8.4,14.2,Dailies - 90 Pack,58.00,500.00,385.00,260.00,135.00,4,3,2,1,90.00,45.00,63.00",
    "Precision1,Alcon,Daily,8.3,14.2,Dailies - 90 Pack,48.00,440.00,340.00,230.00,120.00,4,3,2,1,85.00,40.00,54.00"
  ];

  const csvContent = [headers, ...sampleRows].join("\n");
  const blob       = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url        = URL.createObjectURL(blob);
  const link       = document.createElement("a");

  link.setAttribute("href", url);
  link.setAttribute("download", "sample_lens_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
