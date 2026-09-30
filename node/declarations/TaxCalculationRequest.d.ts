
import type { TaxComponentRequest } from './TaxComponentRequest.js';

export type TaxCalculationRequest = ({ /** minItems: 1. */ "components"?: Array<TaxComponentRequest>; "mode": "automatic" | "external" | (string & {}); "price_mode": "additive" | "inclusive" | (string & {}); }) & ((({ "mode"?: "automatic" | (string & {}); })) | ({ "mode"?: "external" | (string & {}); "components": unknown; }) | (object));
