
import type { OrderDraftTaxComponentRequest } from './OrderDraftTaxComponentRequest.js';

export type OrderDraftLineItemTaxCalculationRequest = { /** minItems: 1. */ "components": Array<OrderDraftTaxComponentRequest>; "price_mode": "additive" | "inclusive" | (string & {}); };
