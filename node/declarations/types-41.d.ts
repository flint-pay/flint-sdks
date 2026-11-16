import type { MoneyValue, OrderCalculatedLineItemTax, Order, MoneyValueInput } from './types-39.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-38.js';
import type {
    PartnerWebhookEnvelope,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentErrorSummary
} from './types-44.js';
import type { WebhookOrder, Weight } from './types-70.js';
import type { BundleComponent } from './types-1.js';
import type { CatalogPricing, CategoryReference } from './types-5.js';
import type { Dimensions } from './types-23.js';
import type { GiftCardPurchaseSnapshot } from './types-27.js';
import type { Image } from './types-28.js';
import type { LineItemInventorySnapshot } from './types-35.js';
import type { PurchasedGiftCard } from './types-52.js';
import type { SelectedProductOption, SettlementAmounts } from './types-59.js';
import type { SubscribedLine } from './types-60.js';
import type { TextModifierRequest, TextModifierRequestInput, TaxReverseCharge, TaxJurisdiction } from './types-65.js';
import type { TaxCalculationRequest, TaxCalculationRequestModelInput, TaxBreakdown } from './types-64.js';
import type { ResponseMeta } from './types-54.js';
import type { SubscriptionIntervalOption } from './types-62.js';
import type { PendingPaymentAction } from './types-49.js';
import type { PaymentSourceCredential, PaymentSourceCredentialInput } from './types-47.js';
import type { DeliveryChargeTaxCalculationRequest } from './types-17.js';
import type { OrderTaxExemption, OrderTaxLocation, OrderTaxJurisdictionRequestInput } from './types-42.js';
/** A gift card redemption applied to an order payment, with the amount, tip, and gift card. */
export type OrderGiftCardSettlement = {
    /**
     * The amount the redemption paid toward the order, not counting the tip. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ID of the gift card the redemption spent. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /** ID of the redemption that posted the spend. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". */
    "gift_card_redemption_id": string;
    /**
     * Last four characters of the code that paid. It stays the same if the gift card's code is
     * later replaced.
     */
    "last4": string;
    /**
     * The part of the redemption that paid a tip. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * Every physical item is handed to the buyer at this location when the order is paid. Replaces a
 * delivery selection.
 */
export type OrderHandover = {
    /**
     * Active location with a complete address where the buyer receives the goods. Tracked items
     * take stock from it, and automatic tax treats the sale as made there. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
/**
 * Every physical item is handed to the buyer at this location when the order is paid. Replaces a
 * delivery selection.
 */
export type OrderHandoverRequestInput = {
    /**
     * Active location with a complete address where the buyer receives the goods. minLength: 1.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
export type OrderInventoryExceptionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.inventory_exception_created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.inventory_exception_created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.inventory_exception_created";
});
/**
 * The `order.inventory_exception_created` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type OrderInventoryExceptionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `order.inventory_exception_created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type OrderInventoryExceptionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
});
export type OrderInventoryExceptionResolvedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.inventory_exception_resolved";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.inventory_exception_resolved";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.inventory_exception_resolved";
});
/**
 * The `order.inventory_exception_resolved` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type OrderInventoryExceptionResolvedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `order.inventory_exception_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type OrderInventoryExceptionResolvedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
});
/** An item purchased in an order. */
export type OrderLineItem = ({
    /**
     * Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "backordered_quantity": number;
    /**
     * Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * Components fixed when the bundle line was added. The line takes their shared taxability and
     * tax category; all component variants must share both stored values. An unset category equals
     * only another unset category. [] (Value): {@link BundleComponent}. An item included in a
     * bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Price source and applied quantity break frozen for a catalog variant line. Omitted for older
     * lines, custom lines, and bundles. The source of a catalog variant line's selected net unit
     * price.
     */
    "catalog_pricing"?: CatalogPricing;
    /**
     * Catalog categories of the item. [] (Value): {@link CategoryReference}. A reference to a
     * product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * Discount value allocated to this line item. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold
     * exists. Null when no hold exists yet, or when neither a future copied release_date nor the
     * inventory item supplies an applicable date. A future copied release_date takes precedence
     * even when physical stock covers every unit; otherwise the inventory item's expected ship
     * date applies only to backordered units when it is today or later in the merchant's timezone.
     * Past item dates are omitted and never frozen. The estimate may change before payment and
     * freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation
     * preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format:
     * date. Example: "2026-08-02".
     */
    "expected_ship_date": string | null;
    /**
     * Current quantities for each required fulfillment obligation: one entry for a single item or
     * one per bundle component that requires fulfillment. Quantities use line units for single
     * items and component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity +
     * removed_quantity. Omitted when the line needs no fulfillment or the order's obligations
     * cannot be computed, including older lines without recorded requirements. [] (Value): {@link
     * OrderLineItemFulfillmentQuantities}. Counts of how much of an order line item is assigned,
     * fulfilled, failed, canceled, removed, or still unassigned for fulfillment.
     */
    "fulfillment_quantities"?: Array<OrderLineItemFulfillmentQuantities>;
    /**
     * Fulfillment requirements fixed when the line item was created. direct describes a single
     * item; components describes each bundle component. Omitted for older line items without
     * recorded requirements. Fulfillment requirements for an order line item, given for a single
     * item or for each component of a bundle.
     */
    "fulfillment_requirements"?: OrderLineItemFulfillmentRequirements;
    /**
     * Gift card details for a gift card purchase line. The gift card purchase details saved on an
     * order line item: configuration, face value, price paid, and recipient.
     */
    "gift_card_purchase"?: GiftCardPurchaseSnapshot;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Whether the line tracks inventory, and the inventory demands fixed when the line was added.
     * `null` when no inventory snapshot was recorded for the line. anyOf[1] (Value): {@link
     * LineItemInventorySnapshot}. Whether an order line item tracks inventory, and the inventory
     * item quantities each unit demands. anyOf[2] (Value): null.
     */
    "inventory_snapshot": ((LineItemInventorySnapshot) | (null));
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Sum of the line item's modifier totals. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Modifiers selected on the line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /**
     * The edit that added this line. Null when the line was not added by an order edit. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id": string | null;
    /**
     * Order that owns this record or its referenced line item and charge. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Unique identifier for this order line item, prefixed `li_`. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * The `key` of the payment link line item this line was created from. Match order lines to the
     * link's line items with it instead of by name. Flint sets it when checkout starts and it
     * never changes; metadata updates don't affect it. `null` when the line didn't come from a
     * payment link line item: the order didn't come from a payment link, the line was added to the
     * order later, or the line came from a subscription plan through a subscription signup link.
     * minLength: 1. maxLength: 100.
     */
    "payment_link_line_item_key": string | null;
    /**
     * ID of the catalog product the item was sold from. Required whenever variant_id is present.
     * Absent on bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Product classification frozen on this line. Null when the line is unclassified. Custom lines
     * accept physical, digital, service, or fee; catalog lines use the product's type when added.
     * Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen
     * classification; void and reissue to change it. Value enum: "physical", "service", "fee",
     * "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /**
     * Masked card identities for fully funded units of this purchase line. Partial consideration
     * does not issue a card. [] (Value): {@link PurchasedGiftCard}. A gift card issued for one
     * unit of a purchased order line item, with its last four code characters and any card it
     * replaced.
     */
    "purchased_gift_cards": Array<PurchasedGiftCard>;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Amount of this line already refunded. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "refunded_quantity": number;
    /**
     * Future release date copied when the line was created, in YYYY-MM-DD format. Null when the
     * line is not a pre-order. Earlier fulfillment is permitted. Format: date. Example:
     * "2026-08-02".
     */
    "release_date": string | null;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units removed by
     * paid-order edits. For bundles, each removed line unit removes all of its component units.
     * The original quantity and pricing remain the sale record; refunds are tracked separately.
     * Format: int64.
     */
    "removed_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Recurring offer and cadence frozen for this line at signup. The subscription offer and
     * billing interval an order line was bought under, with the recurring amount.
     */
    "subscription"?: SubscribedLine;
    /**
     * Subscription created for this line after the order is paid. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /**
     * Applicable active offer for a one-time line, or the offer terms frozen for a subscribed
     * line. A subscription offer attached to an order line item, with its name, discount, and
     * billing interval options.
     */
    "subscription_offer"?: OrderLineSubscriptionOfferSummary;
    /**
     * Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * How tax was calculated for this line item. Tax settings for an order line item calculated by
     * Flint or supplied by you, including the line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Tax calculated for this line item, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discounts, plus tax that is not already included in the price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit before modifiers, discounts, and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "unit_weight"?: Weight;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
});
/**
 * Fulfillment requirements for one component of a bundle line item, with the component quantity
 * per unit.
 */
export type OrderLineItemFulfillmentComponent = {
    /**
     * ID of the bundle component these requirements apply to. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id": string;
    /**
     * Fulfillment requirements for this component. Whether an order line item requires
     * fulfillment, and the fulfillment types it allows.
     */
    "profile": OrderLineItemFulfillmentProfile;
    /**
     * Number of this component per unit of the order line item; fractional quantities are not
     * supported. Format: int64.
     */
    "quantity_per_line_item_unit": number;
};
/** Whether an order line item requires fulfillment, and the fulfillment types it allows. */
export type OrderLineItemFulfillmentProfile = {
    /**
     * Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". [] (Value): string. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /** Whether this item requires fulfillment. Value enum: "none", "required". */
    "requirement": "none" | "required" | (string & {});
};
/**
 * Counts of how much of an order line item is assigned, fulfilled, failed, canceled, removed, or
 * still unassigned for fulfillment.
 */
export type OrderLineItemFulfillmentQuantities = {
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by a
     * non-terminal fulfillment, including a fulfillment on hold. Format: int64.
     */
    "assigned_quantity": number;
    /**
     * ID of the bundle component these quantities describe. `null` when the line isn't a bundle
     * component. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id": string | null;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled
     * or no_show fulfillments. Format: int64.
     */
    "canceled_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by failed
     * fulfillments that kept their quantity. Failed fulfillments that released quantity own
     * nothing; their quantity becomes unassigned again. Format: int64.
     */
    "failed_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by completed
     * fulfillments. Format: int64.
     */
    "fulfilled_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity removed by
     * paid-order edits, in line units for a single item or component units for a bundle component.
     * Removed units cannot be assigned to a fulfillment. Format: int64.
     */
    "removed_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Original quantity requiring
     * fulfillment, in line units for a single item or component units for a bundle component.
     * Equals the sum of the other six quantity fields. Format: int64.
     */
    "required_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Required quantity still
     * available for assignment to a fulfillment, in any resolution mode. Includes quantity
     * released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be
     * assigned until that edit ends. Format: int64.
     */
    "unassigned_quantity": number;
};
/**
 * Fulfillment requirements for an order line item, given for a single item or for each component
 * of a bundle.
 */
export type OrderLineItemFulfillmentRequirements = {
    /**
     * Fulfillment requirements for each bundle component. Present for bundle lines. [] (Value):
     * {@link OrderLineItemFulfillmentComponent}. Fulfillment requirements for one component of a
     * bundle line item, with the component quantity per unit.
     */
    "components"?: Array<OrderLineItemFulfillmentComponent>;
    /**
     * Fulfillment requirements for a single item. Present for non-bundle lines. Whether an order
     * line item requires fulfillment, and the fulfillment types it allows.
     */
    "direct"?: OrderLineItemFulfillmentProfile;
};
/** A modifier selected on an order line item. */
export type OrderLineItemModifier = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Name of the modifier group recorded when this selection was added to the order line item. */
    "modifier_group_name": string;
    /**
     * Identifier of the selected catalog modifier. If its group is owned by a modifier set
     * (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Name of the selected modifier recorded on the order line item. */
    "name": string;
    /**
     * Stable identifier of the selected modifier on this order line item. Example:
     * "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Whether this selection appears in fulfillment details, recorded when selected. */
    "show_on_fulfillment": boolean;
    /** Whether this selection appears on buyer receipts, recorded when selected. */
    "show_on_receipt": boolean;
    /**
     * Whether the selection is a catalog list modifier or buyer-entered text. Value enum:
     * "catalog_modifier", "text".
     */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /**
     * Selected text group and buyer-entered value. Read an inline text group through its owning
     * modifier set. Text a buyer entered for a text modifier group on an order line item.
     */
    "text"?: TextModifierRequest;
    /** Buyer-entered text recorded for a text modifier selection. */
    "text_value"?: string;
    /**
     * Total price this selection adds to the line: `unit_price_delta_money` times the selection's
     * `quantity` times the line item's `quantity`. Always 0 for text selections. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Amount added to the item's unit price for each unit of this selection, recorded when
     * selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** The `catalog` variant of `OrderLineItemModifierInput`. */
export type OrderLineItemModifierInputCatalog = ({
    /**
     * Caller-owned metadata for this selection, returned on the order line item's modifier. Values
     * can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned,
     * and cannot be written through the public API. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text"?: TextModifierRequest;
    /** Selects the type branch. Value enum: "catalog". */
    "type": "catalog" | (string & {});
})
    & (({
    /** Selects the type branch. Value enum: "catalog". */
    "type": "catalog" | (string & {});
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
}));
/** The `catalog` variant of `OrderLineItemModifierInput`. */
export type OrderLineItemModifierInputCatalogRequestInput = ({
    /**
     * Caller-owned metadata for this selection, returned on the order line item's modifier. Values
     * can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned,
     * and cannot be written through the public API. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text"?: TextModifierRequestInput;
    /** Selects the type branch. Value enum: "catalog". */
    "type": "catalog";
})
    & (({
    /** Selects the type branch. Value enum: "catalog". */
    "type": ("catalog") & ("catalog");
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
})
    & ({
    "text"?: never;
}));
/** The `text` variant of `OrderLineItemModifierInput`. */
export type OrderLineItemModifierInputText = ({
    /**
     * Caller-owned metadata for this selection, returned on the order line item's modifier. Values
     * can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned,
     * and cannot be written through the public API. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text": TextModifierRequest;
    /** Selects the type branch. Value enum: "text". */
    "type": "text" | (string & {});
})
    & (({
    /** Selects the type branch. Value enum: "text". */
    "type": "text" | (string & {});
    /**
     * The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text": TextModifierRequest;
}));
/** The `text` variant of `OrderLineItemModifierInput`. */
export type OrderLineItemModifierInputTextRequestInput = ({
    /**
     * Caller-owned metadata for this selection, returned on the order line item's modifier. Values
     * can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned,
     * and cannot be written through the public API. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text": TextModifierRequestInput;
    /** Selects the type branch. Value enum: "text". */
    "type": "text";
})
    & (({
    /** Selects the type branch. Value enum: "text". */
    "type": ("text") & ("text");
    /**
     * The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text": TextModifierRequestInput;
})
    & (({
    "modifier_id"?: never;
}) & ({
    "quantity"?: never;
})));
/**
 * A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier,
 * with a quantity.
 */
export type OrderLineItemModifierRequest = ({
    /**
     * Caller-owned metadata for this selection, returned on the order line item's modifier. Values
     * can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned,
     * and cannot be written through the public API. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text"?: TextModifierRequest;
    /** Selects the type branch. Value enum: "catalog", "text". */
    "type": "catalog" | "text" | (string & {});
})
    & ((Exclude<OrderLineItemModifierInputCatalog & object, readonly unknown[]>)
    | (Exclude<OrderLineItemModifierInputText & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier,
 * with a quantity.
 */
export type OrderLineItemModifierRequestModelInput = ({
    /**
     * Caller-owned metadata for this selection, returned on the order line item's modifier. Values
     * can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned,
     * and cannot be written through the public API. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text"?: TextModifierRequestInput;
    /** Selects the type branch. Value enum: "catalog", "text". */
    "type": "catalog" | "text";
})
    & ((Exclude<OrderLineItemModifierInputCatalogRequestInput & object, readonly unknown[]>)
    | (Exclude<OrderLineItemModifierInputTextRequestInput & object, readonly unknown[]>));
/** A line item's tax category and whether it is taxable. */
export type OrderLineItemTax = {
    /**
     * Flint line-item tax category. A bundle line takes the stored category shared by all
     * component variants when added; all must also share taxability. Unset uses the merchant
     * default and equals only another unset category. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Whether the line is subject to tax. A bundle line takes the taxability shared by all
     * component variants when added; they must also share their stored tax category.
     */
    "taxable"?: boolean;
};
/** An externally calculated tax you assign to one order line item. */
export type OrderLineItemTaxAssignment = {
    /**
     * The tax you supply for this line item. Tax you calculated yourself for a line or charge:
     * whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequest;
    /**
     * ID of the order line item this tax applies to. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
};
/** An externally calculated tax you assign to one order line item. */
export type OrderLineItemTaxAssignmentInput = {
    /**
     * The tax you supply for this line item. Tax you calculated yourself for a line or charge:
     * whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequestModelInput;
    /**
     * ID of the order line item this tax applies to. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
};
/** A line item's tax category and whether it is taxable. */
export type OrderLineItemTaxRequestInput = {
    /**
     * Flint line-item tax category. A bundle line takes the stored category shared by all
     * component variants when added; all must also share taxability. Unset uses the merchant
     * default and equals only another unset category. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Whether the line is subject to tax. A bundle line takes the taxability shared by all
     * component variants when added; they must also share their stored tax category.
     */
    "taxable"?: boolean;
};
/** A page of `OrderLineItem` objects. */
export type OrderLineItemsListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * OrderLineItem}. An item purchased in an order.
     */
    "data": Array<OrderLineItem>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The discount a subscription offer gives, as a fixed amount or a percentage. */
export type OrderLineSubscriptionOfferDiscount = {
    /**
     * Fixed amount the promotion is set to take off, in the order's currency. Depending on the
     * promotion's allocation it can apply to each eligible unit, so a charge can take off more.
     * Present for an amount-off promotion, and absent for a percentage. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValue;
    /**
     * Percentage the promotion takes off each charge. Present for a percent-off promotion, and
     * absent for a fixed amount. multipleOf: 0.0001.
     */
    "percent_off"?: number;
};
/**
 * A subscription offer attached to an order line item, with its name, discount, and billing
 * interval options.
 */
export type OrderLineSubscriptionOfferSummary = {
    /**
     * Billing intervals the offer lists for the line. On a subscribed line they are the options
     * frozen when the buyer signed up. [] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose.
     * Prices of lines that ship are per delivery, and each option charges for all deliveries in
     * its period. Without a delivery cadence there is one delivery per period, so every option
     * bills the same line prices once per period. With a delivery cadence, a longer period bills
     * more deliveries of the lines that ship; other lines bill once per period. For a different
     * price per interval with no delivery cadence, create separate plans.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * The recurring discount the offer's promotion gives on every charge. Omitted when the offer
     * has no promotion or its discount can't be shown in the order's currency. The discount a
     * subscription offer gives, as a fixed amount or a percentage.
     */
    "discount"?: OrderLineSubscriptionOfferDiscount;
    /** Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. */
    "name": string;
    /**
     * ID of the subscription offer. On a one-time line it is the active offer that covers the
     * line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a
     * subscribed line it is the offer the buyer chose. Example:
     * "soffer_01KEZF7C00KAA9Y1X1KM70YFAA".
     */
    "subscription_offer_id": string;
};
/** A page of `Order` objects. */
export type OrderListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Order}. A customer's purchase and its payment and fulfillment progress.
     */
    "data": Array<Order>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type OrderPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.paid";
});
/**
 * The `order.paid` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.paid". */
    "event_type"?: "order.paid";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `order.paid` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.paid". */
    "event_type"?: "order.paid";
});
export type OrderPartiallyPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.partially_paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.partially_paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.partially_paid";
});
/**
 * The `order.partially_paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderPartiallyPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.partially_paid". */
    "event_type"?: "order.partially_paid";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `order.partially_paid` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderPartiallyPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.partially_paid". */
    "event_type"?: "order.partially_paid";
});
export type OrderPartiallyRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.partially_refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.partially_refunded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.partially_refunded";
});
/**
 * The `order.partially_refunded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type OrderPartiallyRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.partially_refunded". */
    "event_type"?: "order.partially_refunded";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `order.partially_refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderPartiallyRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.partially_refunded". */
    "event_type"?: "order.partially_refunded";
});
/** An attempt to pay an order. */
export type OrderPaymentAttempt = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * The outstanding balance this attempt was started to collect, fixed when it started. For an
     * order that gift cards partly cover, it includes the gift card part. Later changes to the
     * order's balance don't change it, and a resume request that sends
     * `expected_outstanding_money` is compared with this amount. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money": MoneyValue;
    /**
     * Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved
     * while the attempt is open and is taken from the card when the attempt succeeds. A failed or
     * canceled attempt releases it. Empty when no gift card is used. [] (Value): {@link
     * PaymentAttemptGiftCardRedemption}. A gift card redemption made as part of an order payment
     * attempt, with the amount, tip, and gift card.
     */
    "gift_card_redemptions": Array<PaymentAttemptGiftCardRedemption>;
    /**
     * Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress.
     */
    "is_resumable": boolean;
    /**
     * The concluded failure of a payment leg that failed this attempt. Absent for non-payment
     * failures. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Whether the attempt collects the order's balance, saves a payment method without charging
     * it, or settles the order without a processor payment. Value enum: "payment", "setup",
     * "settlement".
     */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    /**
     * The order this payment attempt collects money for or saves a payment method for. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Unique identifier for this order payment attempt, prefixed `opat_`. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "order_payment_attempt_id": string;
    /**
     * The payment intents this attempt collects through, each with its amount, status, tip, and
     * latest error. Empty for an attempt that collects no processor payment, such as a setup, or
     * an order that gift cards or return credit settle alone. [] (Value): {@link
     * PaymentAttemptPaymentIntent}. A payment intent used as one leg of an order payment attempt,
     * with its amount, status, tip, and latest error.
     */
    "payment_intents": Array<PaymentAttemptPaymentIntent>;
    /**
     * Reports only a checkout buyer's skipped save when the pay request sent save_payment_method:
     * true and the attempt paid without saving the payment method. A merchant save has no entry
     * here; read payment_source.card.payment_method_id on the payment intent. A card typed into
     * checkout and saved has no entry here; read payment_method_save on the checkout session for a
     * card waiting for confirmation. What became of the buyer's save_payment_method. The payment
     * does not depend on it.
     */
    "payment_method_save"?: OrderPaymentAttemptPaymentMethodSave;
    /**
     * Steps the buyer must finish in your client before the attempt can continue, such as
     * authentication. Empty when none is pending. Complete them, then resume the attempt. []
     * (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
     * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
     * standalone PaymentIntent through its confirm endpoint without a replacement credential.
     */
    "pending_actions": Array<PendingPaymentAction>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Where the attempt is in collecting payment or saving a payment method.
     * `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Value
     * enum: "processing", "requires_action", "requires_capture", "partially_succeeded",
     * "requires_retry", "finalizing", "succeeded", "failed", "expired", "canceled".
     */
    "status": "processing"
        | "requires_action"
        | "requires_capture"
        | "partially_succeeded"
        | "requires_retry"
        | "finalizing"
        | "succeeded"
        | "failed"
        | "expired"
        | "canceled"
        | (string & {});
    /**
     * Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an
     * unmapped non-payment reason report other. Canceled and expired attempts include a reason
     * only when it adds information beyond status. New values may be added. Value enum:
     * "authorization_canceled", "canceled_on_reader", "reader_unavailable",
     * "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source",
     * "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch",
     * "other", "payment_authorization_canceled", "payment_authorization_expired",
     * "payment_confirmation_rejected", "payment_link_capacity_claim_failed",
     * "payment_link_capacity_validation_failed", "payment_method_activation_pending",
     * "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable",
     * "payment_returned", "payment_source_binding_failed", "payment_source_conflict",
     * "payment_source_not_updatable", "payment_source_ownership_mismatch",
     * "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed",
     * "setup_result_incomplete", "tip_allocation_sync_failed",
     * "zero_balance_hold_acquisition_failed".
     */
    "status_reason"?: "authorization_canceled"
        | "canceled_on_reader"
        | "reader_unavailable"
        | "coupon_reservation_failed"
        | "gift_card_hold_acquisition_failed"
        | "invalid_payment_source"
        | "inventory_unavailable"
        | "order_changed_before_payment"
        | "order_payment_customer_mismatch"
        | "other"
        | "payment_authorization_canceled"
        | "payment_authorization_expired"
        | "payment_confirmation_rejected"
        | "payment_link_capacity_claim_failed"
        | "payment_link_capacity_validation_failed"
        | "payment_method_activation_pending"
        | "payment_method_required"
        | "payment_option_not_allowed"
        | "payment_option_unavailable"
        | "payment_returned"
        | "payment_source_binding_failed"
        | "payment_source_conflict"
        | "payment_source_not_updatable"
        | "payment_source_ownership_mismatch"
        | "resource_guarantee_failed"
        | "setup_action_unavailable"
        | "setup_hold_acquisition_failed"
        | "setup_result_incomplete"
        | "tip_allocation_sync_failed"
        | "zero_balance_hold_acquisition_failed"
        | (string & {});
    /**
     * Lifecycle actions accepted now. Cancel is available during collection until a payment leg
     * succeeds. Finalizing and terminal attempts list no actions. [] enum: "cancel". [] (Value):
     * string. Value enum: "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
};
/** A page of `OrderPaymentAttempt` objects. */
export type OrderPaymentAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * OrderPaymentAttempt}. An attempt to pay an order.
     */
    "data": Array<OrderPaymentAttempt>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** What became of the buyer's save_payment_method. The payment does not depend on it. */
export type OrderPaymentAttemptPaymentMethodSave = {
    /**
     * payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or
     * Affirm, and checkout saves only a card typed into it; save_payment_method_types on the
     * checkout session lists what it saves. other: a reason this API version does not name. The
     * values can grow. Value enum: "payment_method_not_saveable", "other".
     */
    "reason": "payment_method_not_saveable" | "other" | (string & {});
    /**
     * not_saved: the payment went ahead without saving the payment method. The values can grow.
     * Value enum: "not_saved".
     */
    "status": "not_saved" | (string & {});
};
/** A response containing `OrderPaymentAttempt` data. */
export type OrderPaymentAttemptResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An attempt to pay an
     * order.
     */
    "data": OrderPaymentAttempt;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Identifies a payment intent to confirm for an order, with an optional payment_source credential.
 * Omit payment_source to use the attached source.
 */
export type OrderPaymentIntentSelection = {
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Credential to confirm this payment intent. Omit it to use the source already attached. The
     * credential you provide to pay an order: a payment source token, a saved payment method ID,
     * or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredential;
};
/**
 * Identifies a payment intent to confirm for an order, with an optional payment_source credential.
 * Omit payment_source to use the attached source.
 */
export type OrderPaymentIntentSelectionInput = {
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Credential to confirm this payment intent. Omit it to use the source already attached. The
     * credential you provide to pay an order: a payment source token, a saved payment method ID,
     * or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredentialInput;
};
/**
 * Card options for the payment source selected on an order payment intent, including which digital
 * wallets to offer.
 */
export type OrderPaymentSourceCardSelection = {
    /**
     * Digital wallets to offer with card: apple_pay, google_pay, or both. Omit it or send an empty
     * list to offer card alone. [] (Value): string. minLength: 1.
     */
    "digital_wallets"?: Array<string>;
};
/**
 * Card options for the payment source selected on an order payment intent, including which digital
 * wallets to offer.
 */
export type OrderPaymentSourceCardSelectionInput = OrderPaymentSourceCardSelection;
/** The payment source options you choose when creating an order payment intent. */
export type OrderPaymentSourceSelection = {
    /**
     * Offer the card payment source. Its `digital_wallets` add Apple Pay or Google Pay to it. Card
     * options for the payment source selected on an order payment intent, including which digital
     * wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelection;
};
/** The payment source options you choose when creating an order payment intent. */
export type OrderPaymentSourceSelectionInput = {
    /**
     * Offer the card payment source. Its `digital_wallets` add Apple Pay or Google Pay to it. Card
     * options for the payment source selected on an order payment intent, including which digital
     * wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelectionInput;
};
export type OrderRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.refunded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.refunded";
});
/**
 * The `order.refunded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type OrderRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.refunded". */
    "event_type"?: "order.refunded";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `order.refunded` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.refunded". */
    "event_type"?: "order.refunded";
});
/** A response containing `Order` data. */
export type OrderResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's purchase
     * and its payment and fulfillment progress.
     */
    "data": Order;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A return credit applied to an order payment, with the amount and the return and resolution it
 * came from.
 */
export type OrderReturnCreditSettlement = {
    /**
     * The amount of the credit applied to this order. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the return that created this replacement order, the return the credit comes from.
     * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the return resolution that issued the credit. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
};
/**
 * The bill settlement amounts plus order overpayments, settled tips, debt discharged by final
 * capture, and value order edits removed. Money collected, returned, waived, and still owed on a
 * bill.
 */
export type OrderSettlementAmounts = ({
    /**
     * Principal lost to chargebacks on counted order payments. A later win removes that dispute
     * from this amount. Excludes dispute fees and does not reopen outstanding_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "dispute_lost_money": MoneyValue;
    /**
     * Principal of open chargebacks on counted order payments. Inquiries and disputes on
     * payment_returned payments contribute zero. Open disputes do not reduce net_collected_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "disputed_money": MoneyValue;
    /**
     * Money collected beyond what the order is owed and not yet refunded. Write-offs do not create
     * overpayments, and neither does value order edits removed: an edit's unrefunded_money reports
     * what it still owes the buyer. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "overpaid_money": MoneyValue;
    /**
     * Authorized money a final capture released instead of collecting, which the order no longer
     * owes. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "released_money": MoneyValue;
    /**
     * Value order edits removed from the order, which it no longer owes: removed units' value plus
     * each edit's charge_refunds[].amount_money, whether that value was refunded or applied to
     * lines the edit added. Not collected money, so it never changes paid_money or refunded_money.
     * outstanding_money is the total minus paid, written-off, released, and removed money, never
     * below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "removed_money": MoneyValue;
    /**
     * Portion of the collected money settled as tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "settled_tip_money": MoneyValue;
    /**
     * paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_collected_money": MoneyValue;
    /**
     * Money still owed on the bill, never below zero. Refunds return money already collected and
     * do not add to it. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Money collected toward the bill, net of reversed payments. Excludes written-off debt. On
     * orders, dispute losses do not reduce this amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Money returned to the buyer from what was collected toward the bill. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money
     * or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
})
    & (Exclude<SettlementAmounts & object, readonly unknown[]>);
/**
 * An order's tax state, including its mode, price mode, status, location, exemption, and tax
 * breakdowns.
 */
export type OrderTax = {
    /**
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected".
     */
    "automatic_profile"?: "standard" | "connected" | (string & {});
    /**
     * How you can give Flint a tax location while `status` is `requires_location`. `provided`
     * means send `tax.location`. [] (Value): string.
     */
    "available_location_inputs"?: Array<string>;
    /**
     * The tax calculation callback evaluation whose components the order's tax uses. Returned only
     * on a `callback` order after your callback has answered; absent while tax is
     * `requires_location` or `incomplete`, and on orders with nothing to tax. The tax calculation
     * callback evaluation an order's tax uses.
     */
    "callback_evaluation"?: OrderTaxCallbackEvaluation;
    /**
     * Where the order's external tax components come from: `provided` when you send them, or
     * `callback` when Flint asks your selected tax calculation callback. Returned only while tax
     * is enabled in external mode; absent for automatic tax and when tax is off. Value enum:
     * "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * The percentage tax template for checkout-generated delivery charges, including paid pickup.
     * Returned only when tax is enabled in external mode with `components_source` `provided` and a
     * template is set. Existing charges retain their own tax.calculation. A percentage tax
     * template for the delivery charges checkout generates, including paid pickup: whether the
     * charge includes the tax, and the tax components. Allowed only on orders that use external
     * tax.
     */
    "delivery_charge_calculation"?: DeliveryChargeTaxCalculationRequest;
    /** Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. */
    "enabled": boolean;
    /**
     * The exemption assessment recorded for this sale, when one exists. Frozen when tax commits;
     * older snapshots omit details that were never recorded. The exemption assessment recorded for
     * an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay
     * omitted.
     */
    "exemption"?: OrderTaxExemption;
    /**
     * The order's tax location, once one is established. Flint taxes items and charges without a
     * fulfillment destination of their own there. Omitted when every taxable item and charge is
     * taxed at its own fulfillment destination and those destinations differ, unless you provided
     * one. The location Flint uses to calculate tax on an order, with its address, address type,
     * and where the address came from.
     */
    "location"?: OrderTaxLocation;
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`).
     * Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent
     * retry of an earlier request omits it. Each line item and charge also states its own mode in
     * `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the
     * customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its
     * rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. anyOf[1]
     * (Value): {@link TaxReverseCharge}. The buyer accounts for the tax under the reverse charge.
     * Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2] (Value):
     * null.
     */
    "reverse_charge"?: ((TaxReverseCharge) | (null));
    /**
     * Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or
     * `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt",
     * "incomplete".
     */
    "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {});
    /**
     * Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate
     * every taxable line. Present only when tax is enabled in automatic mode. US destinations are
     * covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods,
     * software and saas are covered; services, professional_services, physical goods and taxable
     * charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect
     * with delivery supported_countries when collecting a shipping address. [] (Value): string.
     */
    "supported_countries"?: Array<string>;
    /**
     * One row per jurisdiction for each line item and charge, plus any flat order taxes. External
     * tax always produces rows. Automatic tax produces rows outside the US, one per national or
     * provincial tax; US automatic tax doesn't produce rows. [] (Value): {@link TaxBreakdown}. The
     * tax calculated for one jurisdiction on an order, line item, or charge, with the taxable
     * amount, rate or flat amount, and tax.
     */
    "tax_breakdowns"?: Array<TaxBreakdown>;
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomatic = {
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic".
     */
    "mode": "automatic" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomaticInput = {
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic".
     */
    "mode": "automatic";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternal = {
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequest}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "external".
     */
    "mode": "external" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternalInput = {
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequestInput}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback";
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "external".
     */
    "mode": "external";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequest = ({
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequest}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
})
    & ((Exclude<OrderTaxCalculationInputAutomatic & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequestInput = ({
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequestInput}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback";
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
})
    & ((Exclude<OrderTaxCalculationInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternalInput & object, readonly unknown[]>));
/** The tax calculation callback evaluation an order's tax uses. */
export type OrderTaxCallbackEvaluation = {
    /**
     * When Flint saved your callback's answer for the order's current inputs. A change that
     * recalculates tax with identical inputs after the 15-minute cache updates it; a payment that
     * confirms an unchanged answer doesn't. Payment calls your callback again when it is more than
     * 24 hours old. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "evaluated_at": string;
    /**
     * The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id`
     * and `webhook-id`. Identical inputs keep the same ID. Example:
     * "tce_01KEZF7C00Z61NNPEAF0CNSXP4".
     */
    "tax_calculation_evaluation_id": string;
};
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequest = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default:
     * "flat_amount". Value enum: "flat_amount".
     */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise Flint
     * fails with `INVALID_REQUEST` and an `INVALID_VALUE` detail on `flat_money`. The amount and
     * every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint
     * rejects an input or calculation above this ceiling with INVALID_REQUEST and detail
     * INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of an
     * externally supplied tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * The kind of tax this component collects. Default: "retail_delivery_fee". Value enum:
     * "retail_delivery_fee".
     */
    "tax_type"?: "retail_delivery_fee" | (string & {});
});
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequestInput = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default:
     * "flat_amount". Value enum: "flat_amount".
     */
    "calculation_type"?: "flat_amount";
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise Flint
     * fails with `INVALID_REQUEST` and an `INVALID_VALUE` detail on `flat_money`. The amount and
     * every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint
     * rejects an input or calculation above this ceiling with INVALID_REQUEST and detail
     * INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of an
     * externally supplied tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequestInput;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * The kind of tax this component collects. Default: "retail_delivery_fee". Value enum:
     * "retail_delivery_fee".
     */
    "tax_type"?: "retail_delivery_fee";
})
    & ({
    "percent"?: never;
});
