
import type { TaxComponentRequest } from './TaxComponentRequest.js';

export type TaxCalculationRequest = { /** minItems: 1. */ "components": Array<TaxComponentRequest>; "price_mode": "additive" | "inclusive" | (string & {}); };
