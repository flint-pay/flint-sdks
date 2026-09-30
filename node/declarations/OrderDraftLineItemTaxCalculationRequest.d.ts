
import type { OrderDraftTaxComponentRequest } from './OrderDraftTaxComponentRequest.js';

export type OrderDraftLineItemTaxCalculationRequest = ({ /** minItems: 1. */ "components"?: Array<OrderDraftTaxComponentRequest>; "mode": "automatic" | "external" | (string & {}); "price_mode": "additive" | "inclusive" | (string & {}); }) & ((({ "mode"?: "automatic" | (string & {}); })) | ({ "mode"?: "external" | (string & {}); "components": unknown; }) | (object));
