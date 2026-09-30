
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ReturnReplacementLineItemRequestInput = ({ "bundle_id"?: string; "description"?: string; "name"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "sku"?: string; "unit_price_money"?: MoneyValueInput; "variant_id"?: string; }) & ((({ "variant_id": unknown; }) & (({ "bundle_id"?: never }) & ({ "name"?: never }))) | (({ "bundle_id": unknown; }) & (({ "variant_id"?: never }) & ({ "name"?: never }))) | (({ "name": unknown; }) & (({ "variant_id"?: never }) & ({ "bundle_id"?: never }))));
