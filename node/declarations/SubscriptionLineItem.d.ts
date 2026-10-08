
import type { BundleComponent } from './BundleComponent.js';
import type { CategoryReference } from './CategoryReference.js';
import type { Image } from './Image.js';
import type { MoneyValue } from './MoneyValue.js';
import type { OrderLineItemModifier } from './OrderLineItemModifier.js';
import type { SelectedProductOption } from './SelectedProductOption.js';

export type SubscriptionLineItem = { "base_subtotal_money": MoneyValue; "bundle_components"?: Array<BundleComponent>; "bundle_id"?: string; "categories"?: Array<CategoryReference>; "description"?: string; "image"?: Image; "modifier_total_money": MoneyValue; "modifiers"?: Array<OrderLineItemModifier>; "name": string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "quantity": number; "selected_options"?: Array<SelectedProductOption>; "sku"?: string; "source_type"?: "variant" | "bundle" | (string & {}); "subscription_line_item_id"?: string; "subscription_offer_id"?: string; "subscription_plan_line_item_id"?: string; "subtotal_money": MoneyValue; "unit_price_money": MoneyValue; "variant_id"?: string; };
