
import type { BundleComponent } from './BundleComponent.js';
import type { CategoryReference } from './CategoryReference.js';
import type { MoneyValue } from './MoneyValue.js';
import type { OrderLineItemModifier } from './OrderLineItemModifier.js';
import type { OrderLineItemTax } from './OrderLineItemTax.js';
import type { SelectedProductOption } from './SelectedProductOption.js';

export type SubscriptionPlanLineItem = ({ "bundle_components"?: Array<BundleComponent>; "bundle_id"?: string; "categories"?: Array<CategoryReference>; "description"?: string; "image"?: { "alt"?: string; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; /** Format: int32. */ "height": number; "url": string; /** Format: int32. */ "width": number; }; "modifiers"?: Array<OrderLineItemModifier>; "name"?: string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "quantity": number; "selected_options"?: Array<SelectedProductOption>; "sku"?: string; "subscription_plan_line_item_id": string; "tax"?: OrderLineItemTax; "unit_price_money"?: MoneyValue; "variant_id"?: string; }) & ((({ "variant_id": unknown; })) | (({ "bundle_id": unknown; })) | (({ "name": unknown; "unit_price_money": unknown; })) | (object));
