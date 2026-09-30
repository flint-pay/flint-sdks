
import type { OrderDraftTaxComponentRequestInput } from './OrderDraftTaxComponentRequestInput.js';

export type OrderDraftLineItemTaxCalculationRequestInput = ({ /** minItems: 1. */ "components"?: Array<OrderDraftTaxComponentRequestInput>; "mode": "automatic" | "external"; "price_mode": "additive" | "inclusive"; }) & ((({ "mode"?: "automatic"; }) & ({ "components"?: never })) | ({ "mode"?: "external"; "components": unknown; }));
