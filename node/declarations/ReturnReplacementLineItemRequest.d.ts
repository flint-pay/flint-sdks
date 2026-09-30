
import type { MoneyValue } from './MoneyValue.js';

export type ReturnReplacementLineItemRequest = ({ "bundle_id"?: string; "description"?: string; "name"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "sku"?: string; "unit_price_money"?: MoneyValue; "variant_id"?: string; }) & ((({ "variant_id": unknown; })) | (({ "bundle_id": unknown; })) | (({ "name": unknown; })) | (object));
