
import type { BundleComponent } from './BundleComponent.js';
import type { CategoryReference } from './CategoryReference.js';
import type { Image } from './Image.js';
import type { LineItemInventorySnapshot } from './LineItemInventorySnapshot.js';
import type { MoneyValue } from './MoneyValue.js';
import type { OrderCalculatedLineItemTax } from './OrderCalculatedLineItemTax.js';
import type { OrderLineItemModifier } from './OrderLineItemModifier.js';
import type { SelectedProductOption } from './SelectedProductOption.js';
import type { SignedMoney } from './SignedMoney.js';

export type OrderLineItem = { "base_subtotal_money": MoneyValue; "bundle_components"?: Array<BundleComponent>; "bundle_id"?: string; "categories"?: Array<CategoryReference>; "description"?: string; "discount_money": MoneyValue; "image"?: Image; "inventory_snapshot"?: LineItemInventorySnapshot; "metadata"?: Record<string, string>; "modifier_total_money": MoneyValue; "modifiers"?: Array<OrderLineItemModifier>; "name": string; "order_line_item_id": string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "refunded_money": MoneyValue; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "refunded_quantity": string; "selected_options"?: Array<SelectedProductOption>; "sku"?: string; "source_type"?: "variant" | "bundle" | (string & {}); "subtotal_money": MoneyValue; "tax"?: OrderCalculatedLineItemTax; "tax_money": MoneyValue; "total_money": SignedMoney; "unit_price_money": MoneyValue; "variant_id"?: string; /** Version to send as expected_version when replacing modifiers on this line item. Checkout-session reads return the checkout modifier version. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "version": string; };
