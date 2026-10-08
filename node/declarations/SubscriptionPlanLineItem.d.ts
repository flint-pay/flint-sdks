
import type { BundleComponent } from './BundleComponent.js';
import type { CategoryReference } from './CategoryReference.js';
import type { Image } from './Image.js';
import type { MoneyValue } from './MoneyValue.js';
import type { OrderLineItemModifier } from './OrderLineItemModifier.js';
import type { OrderLineItemTax } from './OrderLineItemTax.js';
import type { SelectedProductOption } from './SelectedProductOption.js';
import type { SubscriptionPlanSwapVariant } from './SubscriptionPlanSwapVariant.js';

export type SubscriptionPlanLineItem = ({ "bundle_components"?: Array<BundleComponent>; "bundle_id"?: string; "categories"?: Array<CategoryReference>; "description"?: string; "image"?: Image; "modifiers"?: Array<OrderLineItemModifier>; "name"?: string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "quantity": number; "selected_options"?: Array<SelectedProductOption>; "sku"?: string; "subscription_plan_line_item_id": string; /** maxItems: 25. */ "swap_variant_ids": Array<string>; /** Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: 25. */ "swap_variants"?: Array<SubscriptionPlanSwapVariant>; "tax"?: OrderLineItemTax; "unit_price_money"?: MoneyValue; "variant_id"?: string; }) & ((({ "variant_id": unknown; })) | (({ "bundle_id": unknown; })) | (({ "name": unknown; "unit_price_money": unknown; })) | (object));
