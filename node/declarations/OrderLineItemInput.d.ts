
import type { BundleComponentInput } from './BundleComponentInput.js';
import type { CategoryReferenceInput } from './CategoryReferenceInput.js';
import type { ImageInput } from './ImageInput.js';
import type { LineItemInventorySnapshotInput } from './LineItemInventorySnapshotInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { OrderCalculatedLineItemTaxInput } from './OrderCalculatedLineItemTaxInput.js';
import type { OrderLineItemModifierInput } from './OrderLineItemModifierInput.js';
import type { SelectedProductOptionInput } from './SelectedProductOptionInput.js';
import type { SignedMoneyInput } from './SignedMoneyInput.js';

export type OrderLineItemInput = { "base_subtotal_money": MoneyValueInput; "bundle_components"?: Array<BundleComponentInput>; "bundle_id"?: string; "categories"?: Array<CategoryReferenceInput>; "description"?: string; "discount_money": MoneyValueInput; "gift_card_purchase"?: never; "image"?: ImageInput; "inventory_snapshot"?: LineItemInventorySnapshotInput; "metadata"?: Record<string, string>; "modifier_total_money": MoneyValueInput; "modifiers"?: Array<OrderLineItemModifierInput>; "name": string; "order_line_item_id": string; "product_id"?: string; /** Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. */ "purchased_gift_cards"?: never; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "refunded_money": MoneyValueInput; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "refunded_quantity": string; "selected_options"?: Array<SelectedProductOptionInput>; "sku"?: string; "source_type"?: "variant" | "bundle"; "subtotal_money": MoneyValueInput; "tax"?: OrderCalculatedLineItemTaxInput; "tax_money": MoneyValueInput; "total_money": SignedMoneyInput; "unit_price_money": MoneyValueInput; "variant_id"?: string; /** Version to send as expected_version when changing gift_card_recipient or replacing modifiers. Checkout-session reads return the checkout modifier version for modifier choices. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "version": string; };
