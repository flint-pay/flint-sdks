
import type { OrderDraftTaxComponentRequestInput } from './OrderDraftTaxComponentRequestInput.js';

export type OrderDraftLineItemTaxCalculationRequestInput = { /** minItems: 1. */ "components": Array<OrderDraftTaxComponentRequestInput>; "price_mode": "additive" | "inclusive"; };
