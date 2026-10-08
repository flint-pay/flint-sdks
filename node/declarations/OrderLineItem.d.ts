
import type { BundleComponent } from './BundleComponent.js';
import type { CategoryReference } from './CategoryReference.js';
import type { GiftCardPurchaseSnapshot } from './GiftCardPurchaseSnapshot.js';
import type { Image } from './Image.js';
import type { LineItemInventoryDemand } from './LineItemInventoryDemand.js';
import type { MoneyValue } from './MoneyValue.js';
import type { OrderCalculatedLineItemTax } from './OrderCalculatedLineItemTax.js';
import type { OrderLineItemModifier } from './OrderLineItemModifier.js';
import type { OrderLineSubscriptionOfferSummary } from './OrderLineSubscriptionOfferSummary.js';
import type { PurchasedGiftCard } from './PurchasedGiftCard.js';
import type { SelectedProductOption } from './SelectedProductOption.js';
import type { SignedMoney } from './SignedMoney.js';
import type { SubscribedLine } from './SubscribedLine.js';

export type OrderLineItem = { "base_subtotal_money": MoneyValue; "bundle_components"?: Array<BundleComponent>; "bundle_id"?: string; "categories"?: Array<CategoryReference>; "description"?: string; "discount_money": MoneyValue; "gift_card_purchase"?: GiftCardPurchaseSnapshot; "image"?: Image; "inventory_snapshot"?: (({ "demands": Array<LineItemInventoryDemand>; "inventory_tracking": "not_tracked" | "tracked" | (string & {}); }) | (null)); "metadata"?: Record<string, string>; "modifier_total_money": MoneyValue; "modifiers"?: Array<OrderLineItemModifier>; "name": string; "order_line_item_id": string; "product_id"?: string; /** Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. */ "purchased_gift_cards"?: Array<PurchasedGiftCard>; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "refunded_money": MoneyValue; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "refunded_quantity": string; "selected_options"?: Array<SelectedProductOption>; "sku"?: string; "source_type"?: "variant" | "bundle" | (string & {}); /** Recurring offer and cadence frozen for this line at signup. */ "subscription"?: SubscribedLine; /** Subscription created for this line after the order is paid. */ "subscription_id"?: string; /** Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. */ "subscription_offer"?: OrderLineSubscriptionOfferSummary; "subtotal_money": MoneyValue; "tax"?: OrderCalculatedLineItemTax; "tax_money": MoneyValue; "total_money": SignedMoney; "unit_price_money": MoneyValue; "variant_id"?: string; /** Version to send as expected_version when changing gift_card_recipient or replacing modifiers. Checkout-session reads return the checkout modifier version for modifier choices. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "version": string; };
