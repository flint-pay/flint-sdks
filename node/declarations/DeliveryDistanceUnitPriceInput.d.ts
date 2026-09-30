
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryDistanceUnitPriceInput = { "currency_options": Record<string, MoneyValueInput>; /** Distance unit used by unit_quantity. */ "unit": "meter" | "kilometer" | "mile"; /** Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "unit_quantity": string; };
