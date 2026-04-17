import { body, validationResult } from "express-validator";

function validateRequest(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Validation error", errors: errors.array() });
  }

  next();
}

export const createProductValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("priceAmount").isNumeric().withMessage("Price amount must be a number"),
  body("priceCurrency").notEmpty().withMessage("Price currency is required"),
  body("category")
    .optional()
    .isIn(["male", "female", "unisex"])
    .withMessage("Category must be male, female, or unisex"),
  body("sizes").optional().custom((value) => {
    if (typeof value === 'string') {
        try { JSON.parse(value); return true; } catch (e) { return false; }
    }
    return Array.isArray(value);
  }).withMessage("Sizes must be an array or a JSON string representing an array"),
  body("colors").optional().custom((value) => {
    if (typeof value === 'string') {
        try { JSON.parse(value); return true; } catch (e) { return false; }
    }
    return Array.isArray(value);
  }).withMessage("Colors must be an array or a JSON string representing an array"),
  validateRequest,
];
