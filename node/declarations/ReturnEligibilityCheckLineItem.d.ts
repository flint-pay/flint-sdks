
import type { BundleComponent } from './BundleComponent.js';
import type { Image } from './Image.js';
import type { OrderLineItemModifier } from './OrderLineItemModifier.js';
import type { ReturnLineItemEligibility } from './ReturnLineItemEligibility.js';
import type { ReturnReasonSummary } from './ReturnReasonSummary.js';
import type { SelectedProductOption } from './SelectedProductOption.js';

export type ReturnEligibilityCheckLineItem = { "bundle_components": Array<BundleComponent>; "bundle_id"?: string; "description"?: string; "eligibility": ReturnLineItemEligibility; "fulfillment_id": string; "image"?: Image; "is_self_service_enabled": boolean; "modifiers": Array<OrderLineItemModifier>; "name": string; "order_line_item_id": string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "requested_quantity"?: string; "selected_options": Array<SelectedProductOption>; "sku"?: string; /** maxItems: 20. */ "suggested_return_reasons": Array<ReturnReasonSummary>; "variant_id"?: string; };
