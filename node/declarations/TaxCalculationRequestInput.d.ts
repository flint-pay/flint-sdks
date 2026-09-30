
import type { TaxComponentRequestInput } from './TaxComponentRequestInput.js';

export type TaxCalculationRequestInput = ({ /** minItems: 1. */ "components"?: Array<TaxComponentRequestInput>; "mode": "automatic" | "external"; "price_mode": "additive" | "inclusive"; }) & ((({ "mode"?: "automatic"; }) & ({ "components"?: never })) | ({ "mode"?: "external"; "components": unknown; }));
