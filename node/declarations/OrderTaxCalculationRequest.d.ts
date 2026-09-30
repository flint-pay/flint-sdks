
import type { OrderTaxComponentRequest } from './OrderTaxComponentRequest.js';

export type OrderTaxCalculationRequest = ({ "components"?: Array<OrderTaxComponentRequest>; "mode": "automatic" | "external" | (string & {}); "price_mode": "additive" | "inclusive" | (string & {}); }) & (({ "mode": "automatic" | (string & {}); "price_mode": "additive" | "inclusive" | (string & {}); }) | (({ "components"?: Array<OrderTaxComponentRequest>; "mode": "external" | (string & {}); "price_mode": "additive" | "inclusive" | (string & {}); }) & (({ /** maxItems: 0. */ "components"?: unknown; }) | ({ /** minItems: 1. */ "components": unknown; "price_mode"?: "additive" | (string & {}); }) | (object))) | (object));
