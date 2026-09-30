
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryWeightUnitPriceInput = { "currency_options": Record<string, MoneyValueInput>; /** Weight unit used by unit_quantity. */ "unit": "gram" | "kilogram" | "ounce" | "pound"; /** Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "unit_quantity": string; };
