
import type { BundleComponentInput } from './BundleComponentInput.js';
import type { CategoryReferenceInput } from './CategoryReferenceInput.js';
import type { ImageInput } from './ImageInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { OrderLineItemModifierInput } from './OrderLineItemModifierInput.js';
import type { SelectedProductOptionInput } from './SelectedProductOptionInput.js';

export type SubscriptionLineItemInput = { "base_subtotal_money": MoneyValueInput; "bundle_components"?: Array<BundleComponentInput>; "bundle_id"?: string; "categories"?: Array<CategoryReferenceInput>; "description"?: string; "image"?: ImageInput; "modifier_total_money": MoneyValueInput; "modifiers"?: Array<OrderLineItemModifierInput>; "name": string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "quantity": number; "selected_options"?: Array<SelectedProductOptionInput>; "sku"?: string; "source_type"?: "variant" | "bundle"; "subscription_line_item_id"?: string; "subtotal_money": MoneyValueInput; "unit_price_money": MoneyValueInput; "variant_id"?: string; };
