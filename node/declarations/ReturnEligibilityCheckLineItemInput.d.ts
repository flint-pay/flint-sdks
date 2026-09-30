
import type { BundleComponentInput } from './BundleComponentInput.js';
import type { ImageInput } from './ImageInput.js';
import type { OrderLineItemModifierInput } from './OrderLineItemModifierInput.js';
import type { ReturnLineItemEligibilityInput } from './ReturnLineItemEligibilityInput.js';
import type { ReturnReasonSummaryInput } from './ReturnReasonSummaryInput.js';
import type { SelectedProductOptionInput } from './SelectedProductOptionInput.js';

export type ReturnEligibilityCheckLineItemInput = { "bundle_components": Array<BundleComponentInput>; "bundle_id"?: string; "description"?: string; "eligibility": ReturnLineItemEligibilityInput; "fulfillment_id": string; "image"?: ImageInput; "is_self_service_enabled": boolean; "modifiers": Array<OrderLineItemModifierInput>; "name": string; "order_line_item_id": string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "requested_quantity"?: string; "selected_options": Array<SelectedProductOptionInput>; "sku"?: string; /** maxItems: 20. */ "suggested_return_reasons": Array<ReturnReasonSummaryInput>; "variant_id"?: string; };
