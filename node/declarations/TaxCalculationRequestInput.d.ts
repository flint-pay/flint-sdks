
import type { TaxComponentRequestInput } from './TaxComponentRequestInput.js';

export type TaxCalculationRequestInput = { /** minItems: 1. */ "components": Array<TaxComponentRequestInput>; "price_mode": "additive" | "inclusive"; };
