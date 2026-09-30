
import type { OrderTaxComponentRequestInput } from './OrderTaxComponentRequestInput.js';

export type OrderTaxCalculationRequestInput = ({ "components"?: Array<OrderTaxComponentRequestInput>; "mode": "automatic" | "external"; "price_mode": "additive" | "inclusive"; }) & (({ "mode": "automatic"; "price_mode": "additive" | "inclusive"; }) | (({ "components"?: Array<OrderTaxComponentRequestInput>; "mode": "external"; "price_mode": "additive" | "inclusive"; }) & (({ /** maxItems: 0. */ "components"?: unknown; }) | ({ /** minItems: 1. */ "components": unknown; "price_mode"?: "additive"; }))));
