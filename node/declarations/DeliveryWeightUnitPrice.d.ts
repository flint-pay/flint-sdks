
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryWeightUnitPrice = { "currency_options": Record<string, MoneyValue>; /** Weight unit used by unit_quantity. */ "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {}); /** Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "unit_quantity": string; };
