
import type { BundleComponentInput } from './BundleComponentInput.js';
import type { CategoryReferenceInput } from './CategoryReferenceInput.js';
import type { ImageInput } from './ImageInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { OrderLineItemModifierInput } from './OrderLineItemModifierInput.js';
import type { SelectedProductOptionInput } from './SelectedProductOptionInput.js';
import type { SignedMoneyInput } from './SignedMoneyInput.js';

export type InvoiceLineItemInput = { "base_subtotal_money": MoneyValueInput; "bundle_components"?: Array<BundleComponentInput>; "bundle_id"?: string; "categories"?: Array<CategoryReferenceInput>; "description"?: string; "discount_money": MoneyValueInput; "image"?: ImageInput; "invoice_line_item_id": string; "modifier_total_money": MoneyValueInput; "modifiers"?: Array<OrderLineItemModifierInput>; "name": string; "order_line_item_id"?: string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "selected_options"?: Array<SelectedProductOptionInput>; "sku"?: string; "source_type"?: "variant" | "bundle"; "subtotal_money": MoneyValueInput; "tax_money": MoneyValueInput; "total_money": SignedMoneyInput; "unit_price_money": MoneyValueInput; "variant_id"?: string; };
