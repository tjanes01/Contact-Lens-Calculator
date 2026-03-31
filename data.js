// ============================================================
//  data.js — Contact Lens Calculator Data File
//  ADMIN ONLY — Update this file 1-2 times per year
//  Last Updated field will show on the calculator
// ============================================================

// ── UPDATE THIS DATE every time you make changes ──────────
const LAST_UPDATED = "March 2026";

// ── YOUR CLINIC NAME (shows in results) ───────────────────
const CLINIC_NAME = "Our Eye Care";

// ── COMPETITOR NAME (shows in comparison section) ─────────
const COMPETITOR_NAME = "1-800 Contacts";

// ── ADMIN PASSWORD ────────────────────────────────────────
// This is used on the admin.html page
// Change this to a password only YOU know
const ADMIN_PASSWORD = "EyeCare2026!";

// ============================================================
//  LENS DATA
//  This is where all your lens pricing lives.
//  Each lens is one block between the { } curly brackets.
//  Fields you need to fill in for each lens:
//
//  lens            = Full lens product name
//  brand           = Manufacturer brand name
//  type            = "Daily" or "Monthly"
//  bc              = Base Curve (example: "8.4")
//  diam            = Diameter (example: "14.0")
//  modality        = Pack description
//  costPerBox      = Your price per box (number only)
//  price12Mo       = Your price for 12 month supply
//  price9Mo        = Your price for 9 month supply
//  price6Mo        = Your price for 6 month supply
//  price3Mo        = Your price for 3 month supply
//  boxes12Mo       = Number of boxes for 12 months
//  boxes9Mo        = Number of boxes for 9 months
//  boxes6Mo        = Number of boxes for 6 months
//  boxes3Mo        = Number of boxes for 3 months
//  rebateNew       = Rebate amount for new customers
//  rebateExisting  = Rebate amount for existing customers
//  competitorPrice = Competitor price per box
// ============================================================

const LENS_DATA = [

  // ── Johnson & Johnson ────────────────────────────────────
  {
    lens:            "Acuvue Oasys",
    brand:           "Johnson & Johnson",
    type:            "Monthly",
    bc:              "8.4",
    diam:            "14.0",
    modality:        "6 Pk - Monthly",
    costPerBox:      45.00,
    price12Mo:       480.00,
    price9Mo:        370.00,
    price6Mo:        250.00,
    price3Mo:        130.00,
    boxes12Mo:       8,
    boxes9Mo:        6,
    boxes6Mo:        4,
    boxes3Mo:        2,
    rebateNew:       100.00,
    rebateExisting:  50.00,
    competitorPrice: 52.00
  },
  {
    lens:            "Acuvue Oasys",
    brand:           "Johnson & Johnson",
    type:            "Monthly",
    bc:              "8.8",
    diam:            "14.0",
    modality:        "6 Pk - Monthly",
    costPerBox:      45.00,
    price12Mo:       480.00,
    price9Mo:        370.00,
    price6Mo:        250.00,
    price3Mo:        130.00,
    boxes12Mo:       8,
    boxes9Mo:        6,
    boxes6Mo:        4,
    boxes3Mo:        2,
    rebateNew:       100.00,
    rebateExisting:  50.00,
    competitorPrice: 52.00
  },
  {
    lens:            "Acuvue Oasys 1-Day",
    brand:           "Johnson & Johnson",
    type:            "Daily",
    bc:              "8.5",
    diam:            "14.3",
    modality:        "Dailies - 90 Pack",
    costPerBox:      55.00,
    price12Mo:       520.00,
    price9Mo:        400.00,
    price6Mo:        270.00,
    price3Mo:        140.00,
    boxes12Mo:       4,
    boxes9Mo:        3,
    boxes6Mo:        2,
    boxes3Mo:        1,
    rebateNew:       110.00,
    rebateExisting:  55.00,
    competitorPrice: 62.00
  },

  // ── Alcon ────────────────────────────────────────────────
  {
    lens:            "Dailies Total 1",
    brand:           "Alcon",
    type:            "Daily",
    bc:              "8.5",
    diam:            "14.1",
    modality:        "Dailies - 90 Pack",
    costPerBox:      65.00,
    price12Mo:       520.00,
    price9Mo:        400.00,
    price6Mo:        270.00,
    price3Mo:        140.00,
    boxes12Mo:       4,
    boxes9Mo:        3,
    boxes6Mo:        2,
    boxes3Mo:        1,
    rebateNew:       120.00,
    rebateExisting:  60.00,
    competitorPrice: 71.00
  },
  {
    lens:            "Precision1",
    brand:           "Alcon",
    type:            "Daily",
    bc:              "8.3",
    diam:            "14.2",
    modality:        "Dailies - 90 Pack",
    costPerBox:      48.00,
    price12Mo:       440.00,
    price9Mo:        340.00,
    price6Mo:        230.00,
    price3Mo:        120.00,
    boxes12Mo:       4,
    boxes9Mo:        3,
    boxes6Mo:        2,
    boxes3Mo:        1,
    rebateNew:       85.00,
    rebateExisting:  40.00,
    competitorPrice: 54.00
  },
  {
    lens:            "Air Optix Plus HydraGlyde",
    brand:           "Alcon",
    type:            "Monthly",
    bc:              "8.6",
    diam:            "14.2",
    modality:        "6 Pk - Monthly",
    costPerBox:      40.00,
    price12Mo:       420.00,
    price9Mo:        320.00,
    price6Mo:        215.00,
    price3Mo:        115.00,
    boxes12Mo:       8,
    boxes9Mo:        6,
    boxes6Mo:        4,
    boxes3Mo:        2,
    rebateNew:       90.00,
    rebateExisting:  45.00,
    competitorPrice: 47.00
  },

  // ── CooperVision ─────────────────────────────────────────
  {
    lens:            "Biofinity",
    brand:           "CooperVision",
    type:            "Monthly",
    bc:              "8.6",
    diam:            "14.0",
    modality:        "6 Pk - Monthly",
    costPerBox:      38.00,
    price12Mo:       420.00,
    price9Mo:        320.00,
    price6Mo:        220.00,
    price3Mo:        115.00,
    boxes12Mo:       8,
    boxes9Mo:        6,
    boxes6Mo:        4,
    boxes3Mo:        2,
    rebateNew:       80.00,
    rebateExisting:  40.00,
    competitorPrice: 44.00
  },
  {
    lens:            "MyDay",
    brand:           "CooperVision",
    type:            "Daily",
    bc:              "8.4",
    diam:            "14.2",
    modality:        "Dailies - 90 Pack",
    costPerBox:      58.00,
    price12Mo:       500.00,
    price9Mo:        385.00,
    price6Mo:        260.00,
    price3Mo:        135.00,
    boxes12Mo:       4,
    boxes9Mo:        3,
    boxes6Mo:        2,
    boxes3Mo:        1,
    rebateNew:       90.00,
    rebateExisting:  45.00,
    competitorPrice: 63.00
  },
  {
    lens:            "Clariti 1 Day",
    brand:           "CooperVision",
    type:            "Daily",
    bc:              "8.6",
    diam:            "14.1",
    modality:        "Dailies - 90 Pack",
    costPerBox:      42.00,
    price12Mo:       400.00,
    price9Mo:        310.00,
    price6Mo:        210.00,
    price3Mo:        110.00,
    boxes12Mo:       4,
    boxes9Mo:        3,
    boxes6Mo:        2,
    boxes3Mo:        1,
    rebateNew:       75.00,
    rebateExisting:  35.00,
    competitorPrice: 48.00
  }

  // ── ADD MORE LENSES HERE ──────────────────────────────────
  // Copy one of the blocks above (from the opening { to
  // the closing },) paste it below this comment and
  // fill in the new lens details.
  // Make sure every lens block except the LAST one
  // ends with a comma  },
  // The LAST lens in the list has no comma  }
  // ─────────────────────────────────────────────────────────

];

// ============================================================
//  DO NOT EDIT BELOW THIS LINE
//  The functions below power the calculator
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

function normalizeLensRecord(raw) {
  return {
    lens:            raw.lens            || "",
    brand:           raw.brand           || "",
    type:            raw.type            || "",
    bc:              String(raw.bc)      || "",
    diam:            String(raw.diam)    || "",
    modality:        raw.modality        || "",
    costPerBox:      parseFloat(raw.costPerBox)      || 0,
    price12Mo:       parseFloat(raw.price12Mo)       || 0,
    price9Mo:        parseFloat(raw.price9Mo)        || 0,
    price6Mo:        parseFloat(raw.price6Mo)        || 0,
    price3Mo:        parseFloat(raw.price3Mo)        || 0,
    boxes12Mo:       parseInt(raw.boxes12Mo)         || 0,
    boxes9Mo:        parseInt(raw.boxes9Mo)          || 0,
    boxes6Mo:        parseInt(raw.boxes6Mo)          || 0,
    boxes3Mo:        parseInt(raw.boxes3Mo)          || 0,
    rebateNew:       parseFloat(raw.rebateNew)       || 0,
    rebateExisting:  parseFloat(raw.rebateExisting)  || 0,
    competitorPrice: parseFloat(raw.competitorPrice) || 0
  };
}

function getUniqueSorted(records, field) {
  const values = records.map(r => r[field]).filter(v => v !== "" && v !== null);
  return [...new Set(values)].sort();
}

function filterLenses(allLenses, filters = {}) {
  return allLenses.filter(lens => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value || value === "") return true;
      return lens[key] === value;
    });
  });
}

function calculateCost(params) {
  const {
    lensOD, lensOS, supplyKey,
    insurance, insuranceEye, patientType
  } = params;

  const priceKey = `price${supplyKey}`;
  const boxesKey = `boxes${supplyKey}`;

  const rawPriceOD = lensOD ? (lensOD[priceKey] || 0) : 0;
  const rawPriceOS = lensOS ? (lensOS[priceKey] || 0) : 0;
  const rawTotal   = rawPriceOD + rawPriceOS;

  const boxesOD = lensOD ? (lensOD[boxesKey] || 0) : 0;
  const boxesOS = lensOS ? (lensOS[boxesKey] || 0) : 0;

  let insuranceOD = 0;
  let insuranceOS = 0;
  const ins = parseFloat(insurance) || 0;

  if (insuranceEye === "both") {
    insuranceOD = ins / 2;
    insuranceOS = ins / 2;
  } else if (insuranceEye === "OD") {
    insuranceOD = ins;
  } else if (insuranceEye === "OS") {
    insuranceOS = ins;
  }

  insuranceOD = Math.min(insuranceOD, rawPriceOD);
  insuranceOS = Math.min(insuranceOS, rawPriceOS);
  const totalInsurance = insuranceOD + insuranceOS;

  const rebateKey   = patientType === "new" ? "rebateNew" : "rebateExisting";
  const rebateOD    = lensOD ? (lensOD[rebateKey] || 0) : 0;
  const rebateOS    = lensOS ? (lensOS[rebateKey] || 0) : 0;
  const totalRebate = rebateOD + rebateOS;

  const amountDueOD    = Math.max(0, rawPriceOD - insuranceOD);
  const amountDueOS    = Math.max(0, rawPriceOS - insuranceOS);
  const amountDueToday = amountDueOD + amountDueOS;
  const totalAfterAll  = Math.max(0, amountDueToday - totalRebate);

  const pricePerBoxOD = lensOD ? (lensOD.costPerBox || 0) : 0;
  const pricePerBoxOS = lensOS ? (lensOS.costPerBox || 0) : 0;

  const compPriceOD = lensOD ? (lensOD.competitorPrice || 0) : 0;
  const compPriceOS = lensOS ? (lensOS.competitorPrice || 0) : 0;
  const compTotalOD = compPriceOD * boxesOD;
  const compTotalOS = compPriceOS * boxesOS;
  const compTotal   = compTotalOD + compTotalOS;

  const savingsVsComp = compTotal - totalAfterAll;

  return {
    rawPriceOD, rawPriceOS, rawTotal,
    boxesOD, boxesOS,
    totalBoxes: boxesOD + boxesOS,
    insuranceOD, insuranceOS, totalInsurance,
    rebateOD, rebateOS, totalRebate,
    amountDueOD, amountDueOS,
    amountDueToday, totalAfterAll,
    pricePerBoxOD, pricePerBoxOS,
    compTotalOD, compTotalOS, compTotal,
    savingsVsComp,
    supplyKey, patientType
  };
}

function generateTalkingPoints(calcResult) {
  const points = [];
  const {
    totalRebate, savingsVsComp,
    totalAfterAll, patientType, totalInsurance
  } = calcResult;

  if (totalInsurance > 0) {
    points.push(
      `Their insurance is saving them ${formatCurrency(totalInsurance)} off the retail price today.`
    );
  }
  if (totalRebate > 0) {
    points.push(
      `They will receive a ${formatCurrency(totalRebate)} rebate directly from the ` +
      `manufacturer — making their true out-of-pocket cost only ${formatCurrency(totalAfterAll)}.`
    );
  }
  if (savingsVsComp > 0) {
    points.push(
      `Compared to ${COMPETITOR_NAME}, they are saving ` +
      `${formatCurrency(savingsVsComp)} when factoring in insurance and rebate.`
    );
  } else {
    points.push(
      `${COMPETITOR_NAME} may appear cheaper online, but patients lose their ` +
      `insurance benefit and manufacturer rebate when buying elsewhere.`
    );
  }
  points.push(
    `Buying through us means professional fitting support, easy reorders, ` +
    `and care from your eye care team — not a call center.`
  );
  if (patientType === "new" && totalRebate > 0) {
    points.push(
      `As a new patient they qualify for the higher ` +
      `${formatCurrency(totalRebate)} new customer rebate from the manufacturer.`
    );
  }
  return points;
}
