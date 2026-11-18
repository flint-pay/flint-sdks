import type { PartnerWebhookEnvelope } from './types-50.js';
import type { WebhookOrderEdit, WebhookOrder, Weight, WeightPreviousAttributes } from './types-79.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-43.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type {
    OrderEdit,
    OrderEditChargeRefund,
    OrderEditChargeRefundPreviousAttributes,
    OrderAuthorizationAmountsPreviousAttributes,
    OrderChargePreviousAttributes,
    OrderDeliveryDestinationPreviousAttributes,
    OrderDeliverySummaryPreviousAttributes,
    OrderDiscountPreviousAttributes,
    OrderCalculatedLineItemTax,
    OrderCalculatedLineItemTaxPreviousAttributes
} from './types-45.js';
import type { ResponseMeta } from './types-62.js';
import type { CreateOrderLineItemRequest, CreateOrderLineItemRequestInput } from './types-11.js';
import type { RefundCharge, RefundDestinations, RefundChargeInput, RefundDestinationsInput } from './types-60.js';
import type { InputValue } from '../runtime.js';
import type { CheckoutBuyerContactPreviousAttributes } from './types-6.js';
import type { CustomFieldAnswerPreviousAttributes } from './types-16.js';
import type { DeferredPromotionPreviousAttributes } from './types-17.js';
import type {
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedPaymentIntentSummaryPreviousAttributes,
    ExpandedSubscriptionPlanSummaryPreviousAttributes
} from './types-26.js';
import type { ExpandedSubscriptionSummaryPreviousAttributes } from './types-27.js';
import type { FulfillmentPreviousAttributes } from './types-28.js';
import type { InventoryRoutingSourcePreviousAttributes } from './types-33.js';
import type {
    OrderReturnCreditSettlementPreviousAttributes,
    OrderSettlementAmountsPreviousAttributes,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferSummaryPreviousAttributes
} from './types-47.js';
import type { OrderTaxPreviousAttributes } from './types-48.js';
import type { PricingAmountsPreviousAttributes } from './types-56.js';
import type { TicketedEventPreviousAttributes, TipPreviousAttributes } from './types-75.js';
import type { BundleComponent, BundleComponentPreviousAttributes } from './types-1.js';
import type {
    CatalogPricing,
    CategoryReference,
    CatalogPricingPreviousAttributes,
    CategoryReferencePreviousAttributes
} from './types-5.js';
import type { Dimensions, DimensionsPreviousAttributes } from './types-25.js';
import type { GiftCardPurchaseSnapshot, GiftCardPurchaseSnapshotPreviousAttributes } from './types-30.js';
import type { Image, ImagePreviousAttributes } from './types-31.js';
import type { LineItemInventorySnapshot, LineItemInventorySnapshotPreviousAttributes } from './types-40.js';
import type { PurchasedGiftCard, PurchasedGiftCardPreviousAttributes } from './types-59.js';
import type { SelectedProductOption, SelectedProductOptionPreviousAttributes } from './types-67.js';
import type { SubscribedLine, SubscribedLinePreviousAttributes } from './types-68.js';
import type { TextModifierRequest, TextModifierRequestInput, TextModifierRequestPreviousAttributes } from './types-74.js';
import type { TaxCalculationRequest, TaxCalculationRequestModelInput } from './types-73.js';
/**
 * The `order_edit.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderEditCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order_edit.created". */
    "event_type"?: "order_edit.created";
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
 * The `order_edit.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderEditCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order_edit.created". */
    "event_type"?: "order_edit.created";
});
/** An order line added by the enclosing edit, with its value frozen at creation. */
export type OrderEditLineAddition = {
    /** The catalog bundle, for a bundle line. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** The line's name. */
    "name": string;
    /**
     * The order line reserved by this edit. While pending, the line isn't on the order yet.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * ID of the catalog product the item was sold from. Absent on bundle and custom lines.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Units to add. Format: int64.
     * minimum: 1.
     */
    "quantity": number;
    /** The line's SKU, when it has one. */
    "sku"?: string;
    /**
     * Unit price times quantity, including modifiers. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the line, calculated through the order's tax settings. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** The kind of line, as in the request. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * The unit price from the catalog, price list, customer pricing or request. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** The catalog variant, for a variant line. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
};
export type OrderEditLineAdditionPreviousAttributes = {
    /**
     * The catalog bundle, for a bundle line. anyOf[1] (Value): string. The catalog bundle, for a
     * bundle line. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Always zero: promotions aren't re-evaluated for added lines. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /** The line's name. anyOf[1] (Value): string. The line's name. anyOf[2] (Value): null. */
    "name"?: ((string) | (null));
    /**
     * The order line reserved by this edit. While pending, the line isn't on the order yet.
     * anyOf[1] (Value): string. The order line reserved by this edit. While pending, the line
     * isn't on the order yet. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * ID of the catalog product the item was sold from. Absent on bundle and custom lines.
     * anyOf[1] (Value): string. ID of the catalog product the item was sold from. Absent on bundle
     * and custom lines. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Units to add. anyOf[1]
     * (Value): integer. Whole-number quantity; fractional quantities are not supported. Units to
     * add. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * The line's SKU, when it has one. anyOf[1] (Value): string. The line's SKU, when it has one.
     * anyOf[2] (Value): null.
     */
    "sku"?: ((string) | (null));
    /**
     * Unit price times quantity, including modifiers. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Tax on the line, calculated through the order's tax settings. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * What the line costs: subtotal_money minus discount_money plus additive tax. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The kind of line, as in the request. Value enum: "variant", "bundle", "custom". anyOf[1]
     * (Value): string. The kind of line, as in the request. Value enum: "variant", "bundle",
     * "custom". anyOf[2] (Value): null.
     */
    "type"?: (("variant" | "bundle" | "custom" | (string & {})) | (null));
    /**
     * The unit price from the catalog, price list, customer pricing or request. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The catalog variant, for a variant line. anyOf[1] (Value): string. The catalog variant, for
     * a variant line. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     */
    "variant_id"?: ((string) | (null));
};
/**
 * Removed whole units of an order line and their refund amount frozen at creation. The enclosing
 * edit identifies the order.
 */
export type OrderEditLineRemoval = {
    /**
     * The original order line whose units were removed. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units removed,
     * without changing the original line quantity. Format: int64. minimum: 1.
     */
    "quantity": number;
    /**
     * The part of total_money refunded to the buyer, frozen when the edit was created. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * The value of these units, including their original discount and tax shares, frozen when the
     * edit was created. The order no longer owes it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
export type OrderEditLineRemovalPreviousAttributes = {
    /**
     * The original order line whose units were removed. anyOf[1] (Value): string. The original
     * order line whose units were removed. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2]
     * (Value): null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units removed,
     * without changing the original line quantity. anyOf[1] (Value): integer. Whole-number
     * quantity; fractional quantities are not supported. Whole line units removed, without
     * changing the original line quantity. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * The part of total_money refunded to the buyer, frozen when the edit was created. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The value of these units, including their original discount and tax shares, frozen when the
     * edit was created. The order no longer owes it. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/** A page of `OrderEdit` objects. */
export type OrderEditListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * OrderEdit}. Nested child of an order with frozen item changes, balance and refund amounts. A
     * pending edit changes the order only when its balance payment succeeds. Refund completion is
     * tracked on the refunds.
     */
    "data": Array<OrderEdit>;
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
/** A calculation against an order version. Previewing does not create an order edit. */
export type OrderEditPreview = {
    /**
     * The requested additions, in request order, priced and taxed. Empty when the request adds
     * nothing. [] (Value): {@link OrderEditPreviewAddition}. A line the preview would add, priced
     * and taxed as it would be added to the order.
     */
    "add_line_items": Array<OrderEditPreviewAddition>;
    /**
     * The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "added_total_money": MoneyValue;
    /**
     * What the added lines cost beyond the removed value and released charges. At most one of
     * refund_money and amount_due_money is above zero, and refund_money minus amount_due_money
     * equals removed_total_money plus the charges' amount_money minus added_total_money. An edit
     * with an amount due can't be committed yet. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_due_money": MoneyValue;
    /**
     * The order version this calculation read. Eligibility and the refundable amount can change
     * afterward, so calculate again before relying on it. Format: int64.
     */
    "based_on_order_version": number;
    /** When this preview was calculated. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "calculated_at": string;
    /**
     * The charges that would be released, with the value and refund for each. Empty when the
     * request lists no charges. [] (Value): {@link OrderEditChargeRefund}. The value an edit
     * releases from one order charge, and the part refunded to the buyer.
     */
    "charge_refunds": Array<OrderEditChargeRefund>;
    /**
     * The order whose unassigned units were evaluated. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Money that would go back to the buyer. The removed value and released charges pay for added
     * lines first, removals in request order and then charges, and the rest is refunded. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * The requested removals, in request order, each with its value and refund. [] (Value): {@link
     * OrderEditRemoval}. The units of one order line that the preview would remove, with their
     * refund.
     */
    "remove_line_items": Array<OrderEditRemoval>;
    /**
     * The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "removed_total_money": MoneyValue;
    /**
     * Signed noncash adjustment the edit would record: positive for a balance below the payment
     * minimum, negative when removing previously absorbed value. Included in the order's
     * written-off amount, never paid or refundable. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "small_balance_adjustment_money": MoneyValue;
};
/** A line the preview would add, priced and taxed as it would be added to the order. */
export type OrderEditPreviewAddition = {
    /** The catalog bundle, for a bundle line. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** The line's name. */
    "name": string;
    /**
     * ID of the catalog product the item was sold from. Absent on bundle and custom lines.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Units to add. Format: int64.
     * minimum: 1.
     */
    "quantity": number;
    /** The line's SKU, when it has one. */
    "sku"?: string;
    /**
     * Unit price times quantity, including modifiers. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the line, calculated through the order's tax settings. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** The kind of line, as in the request. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * The unit price from the catalog, price list, customer pricing or request. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** The catalog variant, for a variant line. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
};
/** Compute a paid-order removal without reserving quantities or refund capacity. */
export type OrderEditPreviewRequest = {
    /**
     * Lines to add after the removals, in the same shape as POST /v1/orders/{order_id}/line-items.
     * Only lines Flint can fulfill can be added: variant, bundle, and custom lines with a delivery
     * requirement. Added lines are priced and taxed as usual, without promotions, and don't join
     * the order's delivery selection. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreateOrderLineItemRequest}. A line item to add to an order: a catalog variant, a bundle, or
     * a custom item with a name and unit price.
     */
    "add_line_items"?: Array<CreateOrderLineItemRequest>;
    /**
     * Charges to release. Omitting amount_money releases the charge's remaining refundable amount.
     * Charges you don't list are unchanged. [] (Value): {@link RefundCharge}. An order charge to
     * refund when creating a refund, with an optional amount to refund.
     */
    "charge_refunds"?: Array<RefundCharge>;
    /**
     * Where each original payment is refunded to, with the same defaults as a refund. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * The paid order to edit. minLength: 1. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Reason for removing the items. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | (string & {});
    /**
     * Original line units to remove. Each line can appear only once. Send remove_line_items,
     * add_line_items, or both. minItems: 1. maxItems: 100. [] (Value): {@link
     * OrderEditRemovalRequest}. An order line and the whole units to take off it.
     */
    "remove_line_items"?: Array<OrderEditRemovalRequest>;
};
/** Compute a paid-order removal without reserving quantities or refund capacity. */
export type OrderEditPreviewRequestInput = {
    /**
     * Lines to add after the removals, in the same shape as POST /v1/orders/{order_id}/line-items.
     * Only lines Flint can fulfill can be added: variant, bundle, and custom lines with a delivery
     * requirement. Added lines are priced and taxed as usual, without promotions, and don't join
     * the order's delivery selection. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "add_line_items"?: Array<CreateOrderLineItemRequestInput>;
    /**
     * Charges to release. Omitting amount_money releases the charge's remaining refundable amount.
     * Charges you don't list are unchanged. [] (Value): {@link RefundChargeInput}. An order charge
     * to refund when creating a refund, with an optional amount to refund.
     */
    "charge_refunds"?: Array<RefundChargeInput>;
    /**
     * Where each original payment is refunded to, with the same defaults as a refund. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * The paid order to edit. minLength: 1. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Reason for removing the items. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock";
    /**
     * Original line units to remove. Each line can appear only once. Send remove_line_items,
     * add_line_items, or both. minItems: 1. maxItems: 100. [] (Value): {@link
     * OrderEditRemovalRequestInput}. An order line and the whole units to take off it.
     */
    "remove_line_items"?: Array<OrderEditRemovalRequestInput>;
};
/** The result of an order edit preview. */
export type OrderEditPreviewResponse = {
    /**
     * The calculated removal and its refund. A calculation against an order version. Previewing
     * does not create an order edit.
     */
    "data": OrderEditPreview;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type OrderEditPreviewsCreateParams = (InputValue<OrderEditPreviewRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/** The units of one order line that the preview would remove, with their refund. */
export type OrderEditRemoval = {
    /** The order line the units come off. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units requested
     * for removal, including all components of a bundle unit. Format: int64.
     */
    "quantity": number;
    /**
     * The part of total_money that would be refunded to the buyer. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units currently
     * unassigned across every fulfillment component, before this requested removal. Format: int64.
     */
    "removable_quantity": number;
    /**
     * The value of these units at the price the buyer paid, including their share of discounts and
     * tax. Original quantity and pricing remain unchanged. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/** An order line and the whole units to take off it. */
export type OrderEditRemovalRequest = {
    /**
     * An existing line on this order. minLength: 1. pattern: ^li_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units to remove,
     * including all components of a bundle unit. Format: int64. minimum: 1.
     */
    "quantity": number;
};
/** An order line and the whole units to take off it. */
export type OrderEditRemovalRequestInput = OrderEditRemovalRequest;
/** A response containing `OrderEdit` data. */
export type OrderEditResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Nested child of an order
     * with frozen item changes, balance and refund amounts. A pending edit changes the order only
     * when its balance payment succeeds. Refund completion is tracked on the refunds.
     */
    "data": OrderEdit;
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
export type OrderEditUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "reason"?: (("duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | (string & {}))
                | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "small_balance_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order_edit.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "reason"?: (("duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | (string & {}))
                | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "small_balance_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order_edit.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order_edit.updated";
});
/**
 * The `order_edit.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderEditUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.add_line_items (Optional): Array of {@link
     * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order, with
     * their quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their
     * quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineAdditionPreviousAttributes}. previous_attributes.add_line_items.anyOf[2]
     * (Value): null. previous_attributes.added_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
     * add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string. When the edit was
     * canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled.
     * `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link
     * OrderEditChargeRefundPreviousAttributes} or null. Charges released by this edit, frozen at
     * creation. Empty when no charges were released. previous_attributes.charge_refunds.anyOf[1]
     * (Value): Array of {@link OrderEditChargeRefundPreviousAttributes}. Charges released by this
     * edit, frozen at creation. Empty when no charges were released.
     * previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefundPreviousAttributes}. previous_attributes.charge_refunds.anyOf[2]
     * (Value): null. previous_attributes.completed_at (Optional): string or null. When the item
     * changes were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string. When the item changes were
     * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When Flint cancels the edit if the
     * balance isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent that
     * collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Reason for the edit and its
     * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[1] (Value): string. Reason for the edit and its refund.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. Refunds created for this edit. Empty when no refund is
     * needed or processing has not created it yet. previous_attributes.refund_ids.anyOf[1]
     * (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or
     * processing has not created it yet. previous_attributes.refund_ids.anyOf[1][] (Value):
     * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2]
     * (Value): null. previous_attributes.refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and released
     * charges pay for added lines. May be zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link
     * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
     * frozen at creation. previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at
     * creation. previous_attributes.remove_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineRemovalPreviousAttributes}. previous_attributes.remove_line_items.anyOf[2]
     * (Value): null. previous_attributes.removed_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The value of the removed units: the sum of
     * remove_line_items[].total_money. previous_attributes.removed_total_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.removed_total_money.anyOf[2]
     * (Value): null. previous_attributes.small_balance_adjustment_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Signed noncash adjustment: positive for an edit
     * balance below the payment minimum, negative when removing previously absorbed value.
     * Included in settlement_amounts.written_off_money, never paid or refundable.
     * previous_attributes.small_balance_adjustment_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.small_balance_adjustment_money.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Pending while waiting
     * for a balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[1] (Value): string.
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains cancel while pending and the payment is
     * neither processing nor succeeded. Contains retry when unrefunded_money is positive and no
     * linked refund is pending. Empty while Flint is still processing the original refund before
     * any linked refund exists; retry becomes available if that processing ends without a refund.
     * Independent of caller permissions. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Frozen refund money not covered by pending or succeeded allocations from refunds
     * linked to this edit. Failed allocations do not reduce it.
     * previous_attributes.unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.unrefunded_money.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The counter advances when status, payment_intent_id,
     * completed_at, canceled_at or cancellation_reason change.
     * previous_attributes.version.anyOf[1] (Value): integer. The counter advances when status,
     * payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. add_line_items (Optional): Array of {@link
         * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order,
         * with their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
         * their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}.
         * add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. What the added lines cost beyond the removed
         * value and released charges, tax included, frozen when the edit was created. Zero when
         * the edit had no balance. amount_due_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_due_money.anyOf[2] (Value): null. canceled_at
         * (Optional): string or null. When the edit was canceled. `null` when the edit is not
         * canceled. canceled_at.anyOf[1] (Value): string. When the edit was canceled. `null` when
         * the edit is not canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * canceled_at.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the edit was canceled. `null` when the edit is not canceled. Value enum:
         * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
         * cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled. `null` when the
         * edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[2] (Value): null. charge_refunds
         * (Optional): Array of {@link OrderEditChargeRefundPreviousAttributes} or null. Charges
         * released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1] (Value): Array of {@link
         * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
         * creation. Empty when no charges were released. charge_refunds.anyOf[1][] (Value): {@link
         * OrderEditChargeRefundPreviousAttributes}. charge_refunds.anyOf[2] (Value): null.
         * completed_at (Optional): string or null. When the item changes were applied to the
         * order. `null` when the edit is pending or canceled. completed_at.anyOf[1] (Value):
         * string. When the item changes were applied to the order. `null` when the edit is pending
         * or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the edit was created.
         * created_at.anyOf[1] (Value): string. When the edit was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When Flint cancels the edit if the balance isn't paid.
         * `null` when the edit never had a balance. expires_at.anyOf[1] (Value): string. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2]
         * (Value): null. order_edit_id (Optional): string or null. Stable ID of this order edit.
         * order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. The order
         * this edit belongs to. order_id.anyOf[1] (Value): string. The order this edit belongs to.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. The payment intent that collects
         * amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance,
         * and for a moment while Flint is still creating it. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent that collects amount_due_money. Confirm it to pay the
         * balance. `null` when the edit has no balance, and for a moment while Flint is still
         * creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2]
         * (Value): null. reason (Optional): string or null. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[1] (Value): string. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[2] (Value): null. refund_ids (Optional): Array of string or
         * null. Refunds created for this edit. Empty when no refund is needed or processing has
         * not created it yet. refund_ids.anyOf[1] (Value): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and
         * released charges pay for added lines. May be zero; an edit with no refund money creates
         * no refund. refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
         * frozen at creation. remove_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen
         * at creation. remove_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineRemovalPreviousAttributes}. remove_line_items.anyOf[2] (Value): null.
         * removed_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. The value
         * of the removed units: the sum of remove_line_items[].total_money.
         * removed_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * removed_total_money.anyOf[2] (Value): null. small_balance_adjustment_money (Optional):
         * {@link MoneyValuePreviousAttributes} or null. Signed noncash adjustment: positive for an
         * edit balance below the payment minimum, negative when removing previously absorbed
         * value. Included in settlement_amounts.written_off_money, never paid or refundable.
         * small_balance_adjustment_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * small_balance_adjustment_money.anyOf[2] (Value): null. status (Optional): string or
         * null. Pending while waiting for a balance payment, completed once the item changes are
         * applied, or canceled when it ends without changing the order. Refund processing has its
         * own status on each refund. Value enum: "pending", "completed", "canceled".
         * status.anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
         * once the item changes are applied, or canceled when it ends without changing the order.
         * Refund processing has its own status on each refund. Value enum: "pending", "completed",
         * "canceled". status.anyOf[2] (Value): null. supported_actions (Optional): Array of string
         * or null. Contains cancel while pending and the payment is neither processing nor
         * succeeded. Contains retry when unrefunded_money is positive and no linked refund is
         * pending. Empty while Flint is still processing the original refund before any linked
         * refund exists; retry becomes available if that processing ends without a refund.
         * Independent of caller permissions. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1] (Value): Array of string. Contains cancel while pending and
         * the payment is neither processing nor succeeded. Contains retry when unrefunded_money is
         * positive and no linked refund is pending. Empty while Flint is still processing the
         * original refund before any linked refund exists; retry becomes available if that
         * processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
         * "retry". supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. unrefunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Frozen refund money not covered by pending or
         * succeeded allocations from refunds linked to this edit. Failed allocations do not reduce
         * it. unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * unrefunded_money.anyOf[2] (Value): null. version (Optional): integer or null. The
         * counter advances when status, payment_intent_id, completed_at, canceled_at or
         * cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances when
         * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
             * their quantities and values frozen at creation. Empty when the edit added nothing.
             * anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string. When the edit was canceled. `null` when the edit is not canceled. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not
             * canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link
             * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
             * creation. Empty when no charges were released. anyOf[1][] (Value): {@link
             * OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string. When the item changes were applied to the order.
             * `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance
             * isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order
             * edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * The order this edit belongs to. anyOf[1] (Value): string. The order this edit
             * belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The payment intent that collects amount_due_money. Confirm it to pay the balance.
             * `null` when the edit has no balance, and for a moment while Flint is still creating
             * it. anyOf[1] (Value): string. The payment intent that collects amount_due_money.
             * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
             * while Flint is still creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value):
             * string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value):
             * null.
             */
            "reason"?: (("duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | (string & {}))
                | (null));
            /**
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit.
             * Empty when no refund is needed or processing has not created it yet. anyOf[1][]
             * (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemovalPreviousAttributes}. Removed units and their refund
             * amounts frozen at creation. anyOf[1][] (Value): {@link
             * OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Signed noncash adjustment: positive for an edit balance below the payment minimum,
             * negative when removing previously absorbed value. Included in
             * settlement_amounts.written_off_money, never paid or refundable. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "small_balance_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Pending while waiting for a balance payment, completed once the item changes are
             * applied, or canceled when it ends without changing the order. Refund processing has
             * its own status on each refund. Value enum: "pending", "completed", "canceled".
             * anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
             * once the item changes are applied, or canceled when it ends without changing the
             * order. Refund processing has its own status on each refund. Value enum: "pending",
             * "completed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            /**
             * Contains cancel while pending and the payment is neither processing nor succeeded.
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value):
             * Array of string. Contains cancel while pending and the payment is neither processing
             * nor succeeded. Contains retry when unrefunded_money is positive and no linked refund
             * is pending. Empty while Flint is still processing the original refund before any
             * linked refund exists; retry becomes available if that processing ends without a
             * refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][]
             * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The counter advances when status, payment_intent_id, completed_at, canceled_at or
             * cancellation_reason change. anyOf[1] (Value): integer. The counter advances when
             * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order_edit.updated". */
    "event_type"?: "order_edit.updated";
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
 * The `order_edit.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderEditUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.add_line_items (Optional): Array of {@link
     * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order, with
     * their quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their
     * quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineAdditionPreviousAttributes}. previous_attributes.add_line_items.anyOf[2]
     * (Value): null. previous_attributes.added_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
     * add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string. When the edit was
     * canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled.
     * `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link
     * OrderEditChargeRefundPreviousAttributes} or null. Charges released by this edit, frozen at
     * creation. Empty when no charges were released. previous_attributes.charge_refunds.anyOf[1]
     * (Value): Array of {@link OrderEditChargeRefundPreviousAttributes}. Charges released by this
     * edit, frozen at creation. Empty when no charges were released.
     * previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefundPreviousAttributes}. previous_attributes.charge_refunds.anyOf[2]
     * (Value): null. previous_attributes.completed_at (Optional): string or null. When the item
     * changes were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string. When the item changes were
     * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When Flint cancels the edit if the
     * balance isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent that
     * collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Reason for the edit and its
     * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[1] (Value): string. Reason for the edit and its refund.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. Refunds created for this edit. Empty when no refund is
     * needed or processing has not created it yet. previous_attributes.refund_ids.anyOf[1]
     * (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or
     * processing has not created it yet. previous_attributes.refund_ids.anyOf[1][] (Value):
     * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2]
     * (Value): null. previous_attributes.refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and released
     * charges pay for added lines. May be zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link
     * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
     * frozen at creation. previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at
     * creation. previous_attributes.remove_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineRemovalPreviousAttributes}. previous_attributes.remove_line_items.anyOf[2]
     * (Value): null. previous_attributes.removed_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The value of the removed units: the sum of
     * remove_line_items[].total_money. previous_attributes.removed_total_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.removed_total_money.anyOf[2]
     * (Value): null. previous_attributes.small_balance_adjustment_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Signed noncash adjustment: positive for an edit
     * balance below the payment minimum, negative when removing previously absorbed value.
     * Included in settlement_amounts.written_off_money, never paid or refundable.
     * previous_attributes.small_balance_adjustment_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.small_balance_adjustment_money.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Pending while waiting
     * for a balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[1] (Value): string.
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains cancel while pending and the payment is
     * neither processing nor succeeded. Contains retry when unrefunded_money is positive and no
     * linked refund is pending. Empty while Flint is still processing the original refund before
     * any linked refund exists; retry becomes available if that processing ends without a refund.
     * Independent of caller permissions. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Frozen refund money not covered by pending or succeeded allocations from refunds
     * linked to this edit. Failed allocations do not reduce it.
     * previous_attributes.unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.unrefunded_money.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The counter advances when status, payment_intent_id,
     * completed_at, canceled_at or cancellation_reason change.
     * previous_attributes.version.anyOf[1] (Value): integer. The counter advances when status,
     * payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. add_line_items (Optional): Array of {@link
         * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order,
         * with their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
         * their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}.
         * add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. What the added lines cost beyond the removed
         * value and released charges, tax included, frozen when the edit was created. Zero when
         * the edit had no balance. amount_due_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_due_money.anyOf[2] (Value): null. canceled_at
         * (Optional): string or null. When the edit was canceled. `null` when the edit is not
         * canceled. canceled_at.anyOf[1] (Value): string. When the edit was canceled. `null` when
         * the edit is not canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * canceled_at.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the edit was canceled. `null` when the edit is not canceled. Value enum:
         * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
         * cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled. `null` when the
         * edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[2] (Value): null. charge_refunds
         * (Optional): Array of {@link OrderEditChargeRefundPreviousAttributes} or null. Charges
         * released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1] (Value): Array of {@link
         * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
         * creation. Empty when no charges were released. charge_refunds.anyOf[1][] (Value): {@link
         * OrderEditChargeRefundPreviousAttributes}. charge_refunds.anyOf[2] (Value): null.
         * completed_at (Optional): string or null. When the item changes were applied to the
         * order. `null` when the edit is pending or canceled. completed_at.anyOf[1] (Value):
         * string. When the item changes were applied to the order. `null` when the edit is pending
         * or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the edit was created.
         * created_at.anyOf[1] (Value): string. When the edit was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When Flint cancels the edit if the balance isn't paid.
         * `null` when the edit never had a balance. expires_at.anyOf[1] (Value): string. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2]
         * (Value): null. order_edit_id (Optional): string or null. Stable ID of this order edit.
         * order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. The order
         * this edit belongs to. order_id.anyOf[1] (Value): string. The order this edit belongs to.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. The payment intent that collects
         * amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance,
         * and for a moment while Flint is still creating it. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent that collects amount_due_money. Confirm it to pay the
         * balance. `null` when the edit has no balance, and for a moment while Flint is still
         * creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2]
         * (Value): null. reason (Optional): string or null. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[1] (Value): string. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[2] (Value): null. refund_ids (Optional): Array of string or
         * null. Refunds created for this edit. Empty when no refund is needed or processing has
         * not created it yet. refund_ids.anyOf[1] (Value): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and
         * released charges pay for added lines. May be zero; an edit with no refund money creates
         * no refund. refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
         * frozen at creation. remove_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen
         * at creation. remove_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineRemovalPreviousAttributes}. remove_line_items.anyOf[2] (Value): null.
         * removed_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. The value
         * of the removed units: the sum of remove_line_items[].total_money.
         * removed_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * removed_total_money.anyOf[2] (Value): null. small_balance_adjustment_money (Optional):
         * {@link MoneyValuePreviousAttributes} or null. Signed noncash adjustment: positive for an
         * edit balance below the payment minimum, negative when removing previously absorbed
         * value. Included in settlement_amounts.written_off_money, never paid or refundable.
         * small_balance_adjustment_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * small_balance_adjustment_money.anyOf[2] (Value): null. status (Optional): string or
         * null. Pending while waiting for a balance payment, completed once the item changes are
         * applied, or canceled when it ends without changing the order. Refund processing has its
         * own status on each refund. Value enum: "pending", "completed", "canceled".
         * status.anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
         * once the item changes are applied, or canceled when it ends without changing the order.
         * Refund processing has its own status on each refund. Value enum: "pending", "completed",
         * "canceled". status.anyOf[2] (Value): null. supported_actions (Optional): Array of string
         * or null. Contains cancel while pending and the payment is neither processing nor
         * succeeded. Contains retry when unrefunded_money is positive and no linked refund is
         * pending. Empty while Flint is still processing the original refund before any linked
         * refund exists; retry becomes available if that processing ends without a refund.
         * Independent of caller permissions. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1] (Value): Array of string. Contains cancel while pending and
         * the payment is neither processing nor succeeded. Contains retry when unrefunded_money is
         * positive and no linked refund is pending. Empty while Flint is still processing the
         * original refund before any linked refund exists; retry becomes available if that
         * processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
         * "retry". supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. unrefunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Frozen refund money not covered by pending or
         * succeeded allocations from refunds linked to this edit. Failed allocations do not reduce
         * it. unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * unrefunded_money.anyOf[2] (Value): null. version (Optional): integer or null. The
         * counter advances when status, payment_intent_id, completed_at, canceled_at or
         * cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances when
         * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
             * their quantities and values frozen at creation. Empty when the edit added nothing.
             * anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string. When the edit was canceled. `null` when the edit is not canceled. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not
             * canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link
             * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
             * creation. Empty when no charges were released. anyOf[1][] (Value): {@link
             * OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string. When the item changes were applied to the order.
             * `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance
             * isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order
             * edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * The order this edit belongs to. anyOf[1] (Value): string. The order this edit
             * belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The payment intent that collects amount_due_money. Confirm it to pay the balance.
             * `null` when the edit has no balance, and for a moment while Flint is still creating
             * it. anyOf[1] (Value): string. The payment intent that collects amount_due_money.
             * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
             * while Flint is still creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value):
             * string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value):
             * null.
             */
            "reason"?: (("duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | (string & {}))
                | (null));
            /**
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit.
             * Empty when no refund is needed or processing has not created it yet. anyOf[1][]
             * (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemovalPreviousAttributes}. Removed units and their refund
             * amounts frozen at creation. anyOf[1][] (Value): {@link
             * OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Signed noncash adjustment: positive for an edit balance below the payment minimum,
             * negative when removing previously absorbed value. Included in
             * settlement_amounts.written_off_money, never paid or refundable. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "small_balance_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Pending while waiting for a balance payment, completed once the item changes are
             * applied, or canceled when it ends without changing the order. Refund processing has
             * its own status on each refund. Value enum: "pending", "completed", "canceled".
             * anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
             * once the item changes are applied, or canceled when it ends without changing the
             * order. Refund processing has its own status on each refund. Value enum: "pending",
             * "completed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            /**
             * Contains cancel while pending and the payment is neither processing nor succeeded.
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value):
             * Array of string. Contains cancel while pending and the payment is neither processing
             * nor succeeded. Contains retry when unrefunded_money is positive and no linked refund
             * is pending. Empty while Flint is still processing the original refund before any
             * linked refund exists; retry becomes available if that processing ends without a
             * refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][]
             * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The counter advances when status, payment_intent_id, completed_at, canceled_at or
             * cancellation_reason change. anyOf[1] (Value): integer. The counter advances when
             * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order_edit.updated". */
    "event_type"?: "order_edit.updated";
});
/** The amount of an order that a gift card covers. */
export type OrderGiftCardAllocation = {
    /**
     * The amount this gift card covers. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** ID of the gift card the amount is taken from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
};
/**
 * Accept the exact gift_card_estimate returned on the current order, including all selected cards
 * and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and
 * may use one processor payment intent for the processor_money remainder. The amount and every
 * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an
 * input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
 * responsible input field. Lower payment option limits can apply.
 */
export type OrderGiftCardAllocationAcceptance = {
    /**
     * Order balance allocated to the selected gift cards. Currency must be USD. Amount must be
     * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "gift_card_money": MoneyValue;
    /**
     * The gift cards the allocation draws from, each with the amount it covers. Copy them from the
     * order's `gift_card_estimate`. minItems: 1. maxItems: 20. [] (Value): object. [].amount_money
     * (Required): {@link MoneyValue}. Order balance allocated to this gift card. Currency must be
     * USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. [].gift_card_id (Required): string. ID of the
     * gift card the amount is taken from. minLength: 1. maxLength: 64. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_cards": Array<{
        /**
         * Order balance allocated to this gift card. Currency must be USD. Amount must be
         * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "amount_money": MoneyValue;
        /**
         * ID of the gift card the amount is taken from. minLength: 1. maxLength: 64. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG".
         */
        "gift_card_id": string;
    }>;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64. minimum: 1.
     */
    "order_version": number;
    /**
     * Order balance remaining for the payment processor. Currency must be USD. Amount must be
     * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "processor_money": MoneyValue;
};
/**
 * Accept the exact gift_card_estimate returned on the current order, including all selected cards
 * and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and
 * may use one processor payment intent for the processor_money remainder. The amount and every
 * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an
 * input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
 * responsible input field. Lower payment option limits can apply.
 */
export type OrderGiftCardAllocationAcceptanceInput = {
    /**
     * Order balance allocated to the selected gift cards. Currency must be USD. Amount must be
     * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "gift_card_money": MoneyValueInput;
    /**
     * The gift cards the allocation draws from, each with the amount it covers. Copy them from the
     * order's `gift_card_estimate`. minItems: 1. maxItems: 20. [] (Value): object. [].amount_money
     * (Required): {@link MoneyValueInput}. Order balance allocated to this gift card. Currency
     * must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. [].gift_card_id (Required): string. ID
     * of the gift card the amount is taken from. minLength: 1. maxLength: 64. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_cards": Array<{
        /**
         * Order balance allocated to this gift card. Currency must be USD. Amount must be
         * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "amount_money": MoneyValueInput;
        /**
         * ID of the gift card the amount is taken from. minLength: 1. maxLength: 64. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG".
         */
        "gift_card_id": string;
    }>;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64. minimum: 1.
     */
    "order_version": number;
    /**
     * Order balance remaining for the payment processor. Currency must be USD. Amount must be
     * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "processor_money": MoneyValueInput;
};
export type OrderGiftCardAllocationPreviousAttributes = {
    /**
     * The amount this gift card covers. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the gift card the amount is taken from. anyOf[1] (Value): string. ID of the gift card
     * the amount is taken from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     */
    "gift_card_id"?: ((string) | (null));
};
/**
 * An estimate of how an order total splits between gift cards and the payment processor, and
 * whether gift cards can pay it.
 */
export type OrderGiftCardEstimate = {
    /**
     * Whether this allocation can be used for payment. False when a selected card needs
     * authorization or the allocation cannot cover the balance while satisfying the processor
     * minimum.
     */
    "can_pay": boolean;
    /**
     * Order balance allocated to the selected gift cards. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "gift_card_money": MoneyValue;
    /**
     * The gift cards the estimate draws from, each with the amount it covers. [] (Value): {@link
     * OrderGiftCardAllocation}. The amount of an order that a gift card covers.
     */
    "gift_cards": Array<OrderGiftCardAllocation>;
    /** Whether this estimate reserves gift-card funds. Estimates currently return false. */
    "is_reserved": boolean;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64.
     */
    "order_version": number;
    /**
     * Order balance remaining for the payment processor. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "processor_money": MoneyValue;
};
export type OrderGiftCardEstimatePreviousAttributes = {
    /**
     * Whether this allocation can be used for payment. False when a selected card needs
     * authorization or the allocation cannot cover the balance while satisfying the processor
     * minimum. anyOf[1] (Value): boolean. Whether this allocation can be used for payment. False
     * when a selected card needs authorization or the allocation cannot cover the balance while
     * satisfying the processor minimum. anyOf[2] (Value): null.
     */
    "can_pay"?: ((boolean) | (null));
    /**
     * Order balance allocated to the selected gift cards. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "gift_card_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The gift cards the estimate draws from, each with the amount it covers. anyOf[1] (Value):
     * Array of {@link OrderGiftCardAllocationPreviousAttributes}. The gift cards the estimate
     * draws from, each with the amount it covers. anyOf[1][] (Value): {@link
     * OrderGiftCardAllocationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "gift_cards"?: ((Array<OrderGiftCardAllocationPreviousAttributes>) | (null));
    /**
     * Whether this estimate reserves gift-card funds. Estimates currently return false. anyOf[1]
     * (Value): boolean. Whether this estimate reserves gift-card funds. Estimates currently return
     * false. anyOf[2] (Value): null.
     */
    "is_reserved"?: ((boolean) | (null));
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. anyOf[1] (Value): integer. Order version used to calculate this gift card
     * allocation. Read the order again if its version changed. Format: int64. anyOf[2] (Value):
     * null.
     */
    "order_version"?: ((number) | (null));
    /**
     * Order balance remaining for the payment processor. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "processor_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/**
 * A gift card available to pay an order, with its available balance and the last four characters
 * of its code.
 */
export type OrderGiftCardSelection = {
    /**
     * The card's available balance. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "available_money": MoneyValue;
    /** ID of the gift card selected for the order. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    /** Whether the card's current code must be applied again before the order can use it. */
    "requires_authorization": boolean;
};
export type OrderGiftCardSelectionPreviousAttributes = {
    /**
     * The card's available balance. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "available_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the gift card selected for the order. anyOf[1] (Value): string. ID of the gift card
     * selected for the order. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     */
    "gift_card_id"?: ((string) | (null));
    /**
     * Last four characters of the card's current code. anyOf[1] (Value): string. Last four
     * characters of the card's current code. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * Whether the card's current code must be applied again before the order can use it. anyOf[1]
     * (Value): boolean. Whether the card's current code must be applied again before the order can
     * use it. anyOf[2] (Value): null.
     */
    "requires_authorization"?: ((boolean) | (null));
};
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
export type OrderGiftCardSettlementPreviousAttributes = {
    /**
     * The amount the redemption paid toward the order, not counting the tip. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * ID of the gift card the redemption spent. anyOf[1] (Value): string. ID of the gift card the
     * redemption spent. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     */
    "gift_card_id"?: ((string) | (null));
    /**
     * ID of the redemption that posted the spend. anyOf[1] (Value): string. ID of the redemption
     * that posted the spend. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". anyOf[2] (Value): null.
     */
    "gift_card_redemption_id"?: ((string) | (null));
    /**
     * Last four characters of the code that paid. It stays the same if the gift card's code is
     * later replaced. anyOf[1] (Value): string. Last four characters of the code that paid. It
     * stays the same if the gift card's code is later replaced. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * The part of the redemption that paid a tip. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValuePreviousAttributes) | (null));
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
export type OrderHandoverPreviousAttributes = {
    /**
     * Active location with a complete address where the buyer receives the goods. Tracked items
     * take stock from it, and automatic tax treats the sale as made there. anyOf[1] (Value):
     * string. Active location with a complete address where the buyer receives the goods. Tracked
     * items take stock from it, and automatic tax treats the sale as made there. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string) | (null));
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string) | (null));
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            "closed_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            "governing_delivery_selection_id"?: ((string) | (null));
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            "internal_note"?: ((string) | (null));
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            "inventory_exception_resolution_message"?: ((string) | (null));
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            "paid_at"?: ((string) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string) | (null));
            "prepayment_order_id"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number) | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.inventory_exception_created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string) | (null));
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string) | (null));
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            "closed_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            "governing_delivery_selection_id"?: ((string) | (null));
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            "internal_note"?: ((string) | (null));
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            "inventory_exception_resolution_message"?: ((string) | (null));
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            "paid_at"?: ((string) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string) | (null));
            "prepayment_order_id"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number) | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_payment_review_id (Optional): string or null. The earliest open
     * or resolving payment review on this order's counted payments. `null` when no review is open
     * or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for
     * buyer credentials. Always present with merchant credentials.
     * previous_attributes.active_payment_review_id.anyOf[1] (Value): string. The earliest open or
     * resolving payment review on this order's counted payments. `null` when no review is open or
     * resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for
     * buyer credentials. Always present with merchant credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.active_payment_review_id.anyOf[2]
     * (Value): null. previous_attributes.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and still
     * capturable on the order's payments. previous_attributes.authorization_amounts.anyOf[1]
     * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}.
     * previous_attributes.authorization_amounts.anyOf[2] (Value): null.
     * previous_attributes.buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes}
     * or null. Email and phone saved when payment started, from the pay request's buyer_contact or
     * the paying checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[1] (Value): {@link
     * CheckoutBuyerContactPreviousAttributes}. previous_attributes.buyer_contact.anyOf[2] (Value):
     * null. previous_attributes.buyer_note (Optional): string or null. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[1] (Value): string. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[2] (Value): null. previous_attributes.charges
     * (Optional): Array of {@link OrderChargePreviousAttributes} or null. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
     * fees, each with its applied amount, tax, and refunded amount.
     * previous_attributes.charges.anyOf[1][] (Value): {@link OrderChargePreviousAttributes}.
     * previous_attributes.charges.anyOf[2] (Value): null. previous_attributes.checkout_session_ids
     * (Optional): Array of string or null. IDs of the checkout sessions opened for this order.
     * previous_attributes.checkout_session_ids.anyOf[1] (Value): Array of string. IDs of the
     * checkout sessions opened for this order. previous_attributes.checkout_session_ids.anyOf[1][]
     * (Value): string. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_ids.anyOf[2] (Value): null.
     * previous_attributes.client_reference (Optional): string or null. The reference the payment
     * link URL or resolve request carried, such as your user ID. `null` when none was sent or
     * checkout did not start from a payment link. Returned only to merchant credentials; omitted
     * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of
     * identity. Always present with merchant credentials.
     * previous_attributes.client_reference.anyOf[1] (Value): string. The reference the payment
     * link URL or resolve request carried, such as your user ID. `null` when none was sent or
     * checkout did not start from a payment link. Returned only to merchant credentials; omitted
     * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of
     * identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
     * previous_attributes.client_reference.anyOf[2] (Value): null. previous_attributes.closed_at
     * (Optional): string or null. When the order closed. Present exactly when status is closed.
     * Set once at the transition and never changed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. When the order closed. Present exactly when status is closed. Set once at
     * the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.closed_at.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[1] (Value): string. Why the order closed. Present
     * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
     * other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[2] (Value): null.
     * previous_attributes.closed_reason_message (Optional): string or null. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[1] (Value): string. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.custom_field_answers (Optional): Array of {@link
     * CustomFieldAnswerPreviousAttributes} or null. The buyer's answers to the payment link's
     * custom fields, recorded when checkout started, in the order the link showed the fields. Each
     * answer keeps the field's key, label, and type from that moment, so later changes to the link
     * don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when
     * the order didn't come from a payment link, the link had no custom fields, or the buyer
     * answered none. Orders created before Flint recorded answers here also return an empty list
     * and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
     * the answers. Returned only to merchant credentials; omitted for buyer credentials. Always
     * present with merchant credentials. previous_attributes.custom_field_answers.anyOf[1]
     * (Value): Array of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the
     * payment link's custom fields, recorded when checkout started, in the order the link showed
     * the fields. Each answer keeps the field's key, label, and type from that moment, so later
     * changes to the link don't change it. Optional fields the buyer left blank are left out.
     * Read-only. Empty when the order didn't come from a payment link, the link had no custom
     * fields, or the buyer answered none. Orders created before Flint recorded answers here also
     * return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
     * the customer removes the answers. Returned only to merchant credentials; omitted for buyer
     * credentials. Always present with merchant credentials. maxItems: 20.
     * previous_attributes.custom_field_answers.anyOf[1][] (Value): {@link
     * CustomFieldAnswerPreviousAttributes}. previous_attributes.custom_field_answers.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer this
     * order belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deferred_promotions (Optional): Array of {@link
     * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription signup.
     * They attach when the subscription is provisioned and first discount its first charged cycle.
     * They do not discount this order and are separate from discounts and order totals. Always
     * present; empty when no promotions are deferred.
     * previous_attributes.deferred_promotions.anyOf[1] (Value): Array of {@link
     * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
     * attach when the subscription is provisioned and first discount its first charged cycle. They
     * do not discount this order and are separate from discounts and order totals. Always present;
     * empty when no promotions are deferred. previous_attributes.deferred_promotions.anyOf[1][]
     * (Value): {@link DeferredPromotionPreviousAttributes}.
     * previous_attributes.deferred_promotions.anyOf[2] (Value): null. previous_attributes.delivery
     * (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order.
     * previous_attributes.delivery.anyOf[1] (Value): {@link
     * OrderDeliverySummaryPreviousAttributes}. previous_attributes.delivery.anyOf[2] (Value):
     * null. previous_attributes.delivery_destination (Optional): {@link
     * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. previous_attributes.delivery_destination.anyOf[1] (Value):
     * {@link OrderDeliveryDestinationPreviousAttributes}.
     * previous_attributes.delivery_destination.anyOf[2] (Value): null.
     * previous_attributes.discounts (Optional): Array of {@link OrderDiscountPreviousAttributes}
     * or null. Discounts applied to the order, each with its amount, status, and the line items
     * and charges it covers. previous_attributes.discounts.anyOf[1] (Value): Array of {@link
     * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
     * status, and the line items and charges it covers. previous_attributes.discounts.anyOf[1][]
     * (Value): {@link OrderDiscountPreviousAttributes}. previous_attributes.discounts.anyOf[2]
     * (Value): null. previous_attributes.dispute_status (Optional): string or null. Aggregate
     * dispute state across the order's counted payment intents, excluding payment_returned. Always
     * returned to merchant credentials and omitted from buyer reads. Open states take precedence
     * in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
     * other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed;
     * none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[1] (Value): string. Aggregate dispute state across
     * the order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
     * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_status (Optional): string or null. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[1] (Value): string. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[2] (Value): null.
     * previous_attributes.fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
     * or null. Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1] (Value): Array of {@link
     * FulfillmentPreviousAttributes}. Fulfillments created for the order, each covering a set of
     * its line items. previous_attributes.fulfillments.anyOf[1][] (Value): {@link
     * FulfillmentPreviousAttributes}. previous_attributes.fulfillments.anyOf[2] (Value): null.
     * previous_attributes.gift_card_estimate (Optional): {@link
     * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
     * splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[1] (Value): {@link
     * OrderGiftCardEstimatePreviousAttributes}. previous_attributes.gift_card_estimate.anyOf[2]
     * (Value): null. previous_attributes.gift_card_settlements (Optional): Array of {@link
     * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1] (Value): Array of
     * {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1][] (Value): {@link
     * OrderGiftCardSettlementPreviousAttributes}.
     * previous_attributes.gift_card_settlements.anyOf[2] (Value): null.
     * previous_attributes.gift_card_tender_enabled (Optional): boolean or null. Whether gift cards
     * can pay for this order now. Gift cards pay only USD orders that still accept changes, are
     * not subscription purchases, and whose merchant has at least one gift card that is not closed
     * in this environment. Gift cards cannot fund gift card purchases; this is false when those
     * purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent
     * but open card still counts. previous_attributes.gift_card_tender_enabled.anyOf[1] (Value):
     * boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that
     * still accept changes, are not subscription purchases, and whose merchant has at least one
     * gift card that is not closed in this environment. Gift cards cannot fund gift card
     * purchases; this is false when those purchases leave no amount eligible for gift card tender.
     * Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[2] (Value): null.
     * previous_attributes.gift_cards (Optional): Array of {@link
     * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1] (Value): Array
     * of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1][] (Value):
     * {@link OrderGiftCardSelectionPreviousAttributes}. previous_attributes.gift_cards.anyOf[2]
     * (Value): null. previous_attributes.governing_delivery_selection_id (Optional): string or
     * null. ID of the delivery selection that governs this order, including pickup choices without
     * a delivery destination: the checkout's provisional selection before payment, and the
     * selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection.
     * previous_attributes.governing_delivery_selection_id.anyOf[1] (Value): string. ID of the
     * delivery selection that governs this order, including pickup choices without a delivery
     * destination: the checkout's provisional selection before payment, and the selection a
     * payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.governing_delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.handover (Optional): {@link OrderHandoverPreviousAttributes} or null.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. previous_attributes.handover.anyOf[1]
     * (Value): {@link OrderHandoverPreviousAttributes}. previous_attributes.handover.anyOf[2]
     * (Value): null. previous_attributes.internal_note (Optional): string or null. A note for your
     * team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[1] (Value): string.
     * A note for your team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[2]
     * (Value): null. previous_attributes.inventory_exception_reason (Optional): string or null.
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[1] (Value): string. Why inventory could
     * not be committed after payment. The cause remains after resolution. Omitted when no reason
     * was recorded. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_resolution_message (Optional): string or null. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[1] (Value): string. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_status (Optional): string or null. Whether an
     * inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[1] (Value): string. Whether
     * an inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. The reservation
     * holding stock for this order, when one exists.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. The reservation
     * holding stock for this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked demand is
     * routed. Required before an order containing tracked variants can hold stock.
     * previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice associated with this
     * order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding
     * an invoice preserves it. previous_attributes.invoice_id.anyOf[1] (Value): string. The
     * invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link OrderLineItemPreviousAttributes}
     * or null. Items the order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
     * fulfillment quantities. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * OrderLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. ID of the merchant this resource
     * belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant
     * this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Unique identifier for this order,
     * prefixed `ord_`. previous_attributes.order_id.anyOf[1] (Value): string. Unique identifier
     * for this order, prefixed `ord_`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable order number for receipts and merchant reference.
     * previous_attributes.order_number.anyOf[1] (Value): string. Human-readable order number for
     * receipts and merchant reference. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.origin (Optional): string or null. How the order was created. invoice
     * means a Quick Pay invoice created the order; attaching an invoice to an existing order
     * preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". previous_attributes.origin.anyOf[1] (Value): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". previous_attributes.origin.anyOf[2] (Value):
     * null. previous_attributes.paid_at (Optional): string or null. When `payment_status` became
     * `paid`, including a final capture that releases the remaining balance. Set once and never
     * changed, including after refunds. `null` when `payment_status` isn't `paid`, including an
     * order whose balance was written off without being paid. previous_attributes.paid_at.anyOf[1]
     * (Value): string. When `payment_status` became `paid`, including a final capture that
     * releases the remaining balance. Set once and never changed, including after refunds. `null`
     * when `payment_status` isn't `paid`, including an order whose balance was written off without
     * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_intent_ids
     * (Optional): Array of string or null. IDs of the payment intents created to collect this
     * order. previous_attributes.payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the
     * payment intents created to collect this order.
     * previous_attributes.payment_intent_ids.anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_ids.anyOf[2] (Value):
     * null. previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
     * `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1] (Value):
     * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included
     * when `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1][]
     * (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_status (Optional): string or null. Collection progress. An
     * invoice write-off also completes collection without receiving the written-off amount. Value
     * enum: "unpaid", "partially_paid", "paid". previous_attributes.payment_status.anyOf[1]
     * (Value): string. Collection progress. An invoice write-off also completes collection without
     * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * previous_attributes.payment_status.anyOf[2] (Value): null.
     * previous_attributes.pending_order_edit_id (Optional): string or null. The order edit waiting
     * for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials.
     * previous_attributes.pending_order_edit_id.anyOf[1] (Value): string. The order edit waiting
     * for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.pending_order_edit_id.anyOf[2]
     * (Value): null. previous_attributes.prepayment_order_id (Optional): string or null. Order
     * that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * previous_attributes.prepayment_order_id.anyOf[1] (Value): string. Order that paid for this
     * prepaid delivery. Null when this is not a prepaid delivery order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.prepayment_order_id.anyOf[2] (Value):
     * null. previous_attributes.pricing_amounts (Optional): {@link
     * PricingAmountsPreviousAttributes} or null. The order's money totals: subtotal, discounts,
     * charges, tax, requested tip, and total. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the refunds that name this order. This includes
     * refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`),
     * which never count toward `refund_status` or the order's refunded amounts.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that
     * name this order. This includes refunds Flint makes to return a payment it couldn't accept
     * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
     * refunded amounts. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.return_credit_settlements (Optional): Array of {@link
     * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
     * items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1]
     * (Value): Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
     * this order from items the buyer returned, such as an exchange's replacement order. Included
     * in settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1][]
     * (Value): {@link OrderReturnCreditSettlementPreviousAttributes}.
     * previous_attributes.return_credit_settlements.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. previous_attributes.return_resolution_id.anyOf[1] (Value): string. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * OrderSettlementAmountsPreviousAttributes} or null. How much of the order has been paid,
     * refunded, credited, written off, and settled as tips, and what is still outstanding.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * OrderSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Whether the order
     * still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and
     * metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription
     * (Optional): {@link ExpandedSubscriptionSummaryPreviousAttributes} or null. Subscription
     * summary included when `expand` names `subscription`; `null` when expanded and this order
     * does not bill a subscription. Present only when `expand` includes `subscription`; `null`
     * when expanded and there is no related subscription.
     * previous_attributes.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummaryPreviousAttributes}. previous_attributes.subscription.anyOf[2]
     * (Value): null. previous_attributes.subscription_cycle (Optional): integer or null. Charged
     * subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped
     * renewals do not advance the cycle. previous_attributes.subscription_cycle.anyOf[1] (Value):
     * integer. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
     * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * previous_attributes.subscription_cycle.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_changed_at (Optional): string or null. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it.
     * previous_attributes.subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     * previous_attributes.subscription_delivery_changed_at.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_number (Optional): integer or null. Position of
     * this delivery among the deliveries one charge paid for, starting at 2. Null when this is not
     * a prepaid delivery order. previous_attributes.subscription_delivery_number.anyOf[1] (Value):
     * integer. Position of this delivery among the deliveries one charge paid for, starting at 2.
     * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * previous_attributes.subscription_delivery_number.anyOf[2] (Value): null.
     * previous_attributes.subscription_id (Optional): string or null. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Plan summary included when
     * `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
     * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
     * expanded and there is no related subscription plan.
     * previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Includes close when closure is allowed, and pay while open without an active attempt and
     * with an outstanding balance or payment-method setup available. Always present with merchant
     * credentials. [] enum: "close", "pay", "resolve_inventory_exception".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link OrderTaxPreviousAttributes} or
     * null. The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. previous_attributes.tax.anyOf[1] (Value): {@link
     * OrderTaxPreviousAttributes}. previous_attributes.tax.anyOf[2] (Value): null.
     * previous_attributes.ticketed_event (Optional): {@link TicketedEventPreviousAttributes} or
     * null. Event and tickets this order sold through an event payment link. Absent on other
     * orders. previous_attributes.ticketed_event.anyOf[1] (Value): {@link
     * TicketedEventPreviousAttributes}. previous_attributes.ticketed_event.anyOf[2] (Value): null.
     * previous_attributes.tips (Optional): Array of {@link TipPreviousAttributes} or null. Tips on
     * the order, each with its requested, settled, and refunded amounts. A tip cleared before
     * payment stays listed as canceled. previous_attributes.tips.anyOf[1] (Value): Array of {@link
     * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and refunded
     * amounts. A tip cleared before payment stays listed as canceled.
     * previous_attributes.tips.anyOf[1][] (Value): {@link TipPreviousAttributes}.
     * previous_attributes.tips.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Order version for optimistic concurrency. Send this value as
     * the expected version when changing the order. Increases with every change to the order.
     * Ignore an order webhook snapshot whose version is lower than one you have already applied.
     * previous_attributes.version.anyOf[1] (Value): integer. Order version for optimistic
     * concurrency. Send this value as the expected version when changing the order. Increases with
     * every change to the order. Ignore an order webhook snapshot whose version is lower than one
     * you have already applied. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`,
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_payment_review_id (Optional): string or
         * null. The earliest open or resolving payment review on this order's counted payments.
         * `null` when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. active_payment_review_id.anyOf[1] (Value): string. The
         * earliest open or resolving payment review on this order's counted payments. `null` when
         * no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * active_payment_review_id.anyOf[2] (Value): null. authorization_amounts (Optional):
         * {@link OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and
         * still capturable on the order's payments. authorization_amounts.anyOf[1] (Value): {@link
         * OrderAuthorizationAmountsPreviousAttributes}. authorization_amounts.anyOf[2] (Value):
         * null. buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes} or null.
         * Email and phone saved when payment started, from the pay request's buyer_contact or the
         * paying checkout session's saved contact. It does not change the linked customer.
         * buyer_contact.anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}.
         * buyer_contact.anyOf[2] (Value): null. buyer_note (Optional): string or null. A note to
         * the buyer. buyer_note.anyOf[1] (Value): string. A note to the buyer. buyer_note.anyOf[2]
         * (Value): null. charges (Optional): Array of {@link OrderChargePreviousAttributes} or
         * null. Charges added to the order, such as delivery or service fees, each with its
         * applied amount, tax, and refunded amount. charges.anyOf[1] (Value): Array of {@link
         * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
         * fees, each with its applied amount, tax, and refunded amount. charges.anyOf[1][]
         * (Value): {@link OrderChargePreviousAttributes}. charges.anyOf[2] (Value): null.
         * checkout_session_ids (Optional): Array of string or null. IDs of the checkout sessions
         * opened for this order. checkout_session_ids.anyOf[1] (Value): Array of string. IDs of
         * the checkout sessions opened for this order. checkout_session_ids.anyOf[1][] (Value):
         * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_ids.anyOf[2] (Value):
         * null. client_reference (Optional): string or null. The reference the payment link URL or
         * resolve request carried, such as your user ID. `null` when none was sent or checkout did
         * not start from a payment link. Returned only to merchant credentials; omitted for buyer
         * credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity.
         * Always present with merchant credentials. client_reference.anyOf[1] (Value): string. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. Always present with merchant credentials.
         * minLength: 1. maxLength: 255. client_reference.anyOf[2] (Value): null. closed_at
         * (Optional): string or null. When the order closed. Present exactly when status is
         * closed. Set once at the transition and never changed. closed_at.anyOf[1] (Value):
         * string. When the order closed. Present exactly when status is closed. Set once at the
         * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * closed_at.anyOf[2] (Value): null. closed_reason (Optional): string or null. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[1] (Value): string. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[2] (Value): null.
         * closed_reason_message (Optional): string or null. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[1] (Value): string. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * custom_field_answers (Optional): Array of {@link CustomFieldAnswerPreviousAttributes} or
         * null. The buyer's answers to the payment link's custom fields, recorded when checkout
         * started, in the order the link showed the fields. Each answer keeps the field's key,
         * label, and type from that moment, so later changes to the link don't change it. Optional
         * fields the buyer left blank are left out. Read-only. Empty when the order didn't come
         * from a payment link, the link had no custom fields, or the buyer answered none. Orders
         * created before Flint recorded answers here also return an empty list and keep their
         * answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the
         * answers. Returned only to merchant credentials; omitted for buyer credentials. Always
         * present with merchant credentials. custom_field_answers.anyOf[1] (Value): Array of
         * {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment link's
         * custom fields, recorded when checkout started, in the order the link showed the fields.
         * Each answer keeps the field's key, label, and type from that moment, so later changes to
         * the link don't change it. Optional fields the buyer left blank are left out. Read-only.
         * Empty when the order didn't come from a payment link, the link had no custom fields, or
         * the buyer answered none. Orders created before Flint recorded answers here also return
         * an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the
         * customer removes the answers. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. maxItems: 20.
         * custom_field_answers.anyOf[1][] (Value): {@link CustomFieldAnswerPreviousAttributes}.
         * custom_field_answers.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary included when
         * `expand` names `customer`; `null` when expanded and no customer is linked. Present only
         * when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer this order belongs to. customer_id.anyOf[1] (Value): string. ID of the customer
         * this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2]
         * (Value): null. deferred_promotions (Optional): Array of {@link
         * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription
         * signup. They attach when the subscription is provisioned and first discount its first
         * charged cycle. They do not discount this order and are separate from discounts and order
         * totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1] (Value): Array of {@link
         * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
         * attach when the subscription is provisioned and first discount its first charged cycle.
         * They do not discount this order and are separate from discounts and order totals. Always
         * present; empty when no promotions are deferred. deferred_promotions.anyOf[1][] (Value):
         * {@link DeferredPromotionPreviousAttributes}. deferred_promotions.anyOf[2] (Value): null.
         * delivery (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method,
         * type and recipient of governing_delivery_selection_id. The address remains in
         * delivery_destination. Omitted when no shipment or local-delivery selection governs the
         * order. delivery.anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
         * delivery.anyOf[2] (Value): null. delivery_destination (Optional): {@link
         * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
         * destination committed for this order. Payment freezes this value; fulfillment recipient
         * changes do not replace it. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. delivery_destination.anyOf[1] (Value): {@link
         * OrderDeliveryDestinationPreviousAttributes}. delivery_destination.anyOf[2] (Value):
         * null. discounts (Optional): Array of {@link OrderDiscountPreviousAttributes} or null.
         * Discounts applied to the order, each with its amount, status, and the line items and
         * charges it covers. discounts.anyOf[1] (Value): Array of {@link
         * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
         * status, and the line items and charges it covers. discounts.anyOf[1][] (Value): {@link
         * OrderDiscountPreviousAttributes}. discounts.anyOf[2] (Value): null. dispute_status
         * (Optional): string or null. Aggregate dispute state across the order's counted payment
         * intents, excluding payment_returned. Always returned to merchant credentials and omitted
         * from buyer reads. Open states take precedence in this order: needs_response,
         * under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most
         * severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
         * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present
         * with merchant credentials. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". dispute_status.anyOf[1] (Value): string. Aggregate dispute
         * state across the order's counted payment intents, excluding payment_returned. Always
         * returned to merchant credentials and omitted from buyer reads. Open states take
         * precedence in this order: needs_response, under_review, inquiry_needs_response,
         * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
         * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
         * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. fulfillment_status (Optional): string or
         * null. Aggregate progress across the order's fulfillment quantities. Value enum:
         * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
         * "closed". fulfillment_status.anyOf[1] (Value): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillment_status.anyOf[2]
         * (Value): null. fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
         * or null. Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1] (Value): Array of {@link FulfillmentPreviousAttributes}.
         * Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1][] (Value): {@link FulfillmentPreviousAttributes}.
         * fulfillments.anyOf[2] (Value): null. gift_card_estimate (Optional): {@link
         * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
         * splits between gift cards and the payment processor. gift_card_estimate.anyOf[1]
         * (Value): {@link OrderGiftCardEstimatePreviousAttributes}. gift_card_estimate.anyOf[2]
         * (Value): null. gift_card_settlements (Optional): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to
         * the order's payments. gift_card_settlements.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
         * order's payments. gift_card_settlements.anyOf[1][] (Value): {@link
         * OrderGiftCardSettlementPreviousAttributes}. gift_card_settlements.anyOf[2] (Value):
         * null. gift_card_tender_enabled (Optional): boolean or null. Whether gift cards can pay
         * for this order now. Gift cards pay only USD orders that still accept changes, are not
         * subscription purchases, and whose merchant has at least one gift card that is not closed
         * in this environment. Gift cards cannot fund gift card purchases; this is false when
         * those purchases leave no amount eligible for gift card tender. Recomputed on each read;
         * a spent but open card still counts. gift_card_tender_enabled.anyOf[1] (Value): boolean.
         * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
         * accept changes, are not subscription purchases, and whose merchant has at least one gift
         * card that is not closed in this environment. Gift cards cannot fund gift card purchases;
         * this is false when those purchases leave no amount eligible for gift card tender.
         * Recomputed on each read; a spent but open card still counts.
         * gift_card_tender_enabled.anyOf[2] (Value): null. gift_cards (Optional): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the
         * order, with each card's available balance. gift_cards.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order, with
         * each card's available balance. gift_cards.anyOf[1][] (Value): {@link
         * OrderGiftCardSelectionPreviousAttributes}. gift_cards.anyOf[2] (Value): null.
         * governing_delivery_selection_id (Optional): string or null. ID of the delivery selection
         * that governs this order, including pickup choices without a delivery destination: the
         * checkout's provisional selection before payment, and the selection a payment committed
         * after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no
         * selection governs the order. While set, change the destination through the delivery
         * selection. governing_delivery_selection_id.anyOf[1] (Value): string. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". governing_delivery_selection_id.anyOf[2] (Value):
         * null. handover (Optional): {@link OrderHandoverPreviousAttributes} or null. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. handover.anyOf[1] (Value): {@link
         * OrderHandoverPreviousAttributes}. handover.anyOf[2] (Value): null. internal_note
         * (Optional): string or null. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[1] (Value): string. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[2] (Value): null. inventory_exception_reason (Optional): string or
         * null. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[1] (Value):
         * string. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[2] (Value): null.
         * inventory_exception_resolution_message (Optional): string or null. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[1] (Value): string. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[2] (Value): null.
         * inventory_exception_status (Optional): string or null. Whether an inventory problem
         * after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[1] (Value): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[2] (Value): null. inventory_reservation_id (Optional):
         * string or null. The reservation holding stock for this order, when one exists.
         * inventory_reservation_id.anyOf[1] (Value): string. The reservation holding stock for
         * this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_reservation_id.anyOf[2] (Value): null. inventory_routing_source (Optional):
         * {@link InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked
         * demand is routed. Required before an order containing tracked variants can hold stock.
         * inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. invoice_id (Optional): string or null. The invoice associated with this order.
         * Null when the order has no invoice. A replacement invoice replaces this ID; voiding an
         * invoice preserves it. invoice_id.anyOf[1] (Value): string. The invoice associated with
         * this order. Null when the order has no invoice. A replacement invoice replaces this ID;
         * voiding an invoice preserves it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * OrderLineItemPreviousAttributes} or null. Items the order sells, each with its pricing,
         * tax, and fulfillment quantities. line_items.anyOf[1] (Value): Array of {@link
         * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
         * fulfillment quantities. line_items.anyOf[1][] (Value): {@link
         * OrderLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. ID of the merchant this resource belongs to.
         * merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Unique identifier for this order, prefixed `ord_`. order_id.anyOf[1] (Value): string.
         * Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable order number for receipts and merchant
         * reference. order_number.anyOf[1] (Value): string. Human-readable order number for
         * receipts and merchant reference. order_number.anyOf[2] (Value): null. origin (Optional):
         * string or null. How the order was created. invoice means a Quick Pay invoice created the
         * order; attaching an invoice to an existing order preserves its origin. Value enum:
         * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
         * origin.anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
         * invoice created the order; attaching an invoice to an existing order preserves its
         * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
         * "subscription", "invoice". origin.anyOf[2] (Value): null. paid_at (Optional): string or
         * null. When `payment_status` became `paid`, including a final capture that releases the
         * remaining balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. paid_at.anyOf[1] (Value): string. When `payment_status` became `paid`,
         * including a final capture that releases the remaining balance. Set once and never
         * changed, including after refunds. `null` when `payment_status` isn't `paid`, including
         * an order whose balance was written off without being paid. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_intent_ids (Optional):
         * Array of string or null. IDs of the payment intents created to collect this order.
         * payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents created
         * to collect this order. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
         * `expand` names `payment_intents`. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included when `expand`
         * names `payment_intents`. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * payment_link_id (Optional): string or null. Payment link whose checkout created this
         * order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by
         * payment_link_id to list a link's orders. payment_link_id.anyOf[1] (Value): string.
         * Payment link whose checkout created this order. Absent for orders that did not come from
         * a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
         * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * payment_status (Optional): string or null. Collection progress. An invoice write-off
         * also completes collection without receiving the written-off amount. Value enum:
         * "unpaid", "partially_paid", "paid". payment_status.anyOf[1] (Value): string. Collection
         * progress. An invoice write-off also completes collection without receiving the
         * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
         * payment_status.anyOf[2] (Value): null. pending_order_edit_id (Optional): string or null.
         * The order edit waiting for its balance payment. While it is set, the units that edit
         * removes can't join a fulfillment and the order refuses another edit. `null` when there
         * is none. Omitted for buyer credentials. Always present with merchant credentials.
         * pending_order_edit_id.anyOf[1] (Value): string. The order edit waiting for its balance
         * payment. While it is set, the units that edit removes can't join a fulfillment and the
         * order refuses another edit. `null` when there is none. Omitted for buyer credentials.
         * Always present with merchant credentials. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * pending_order_edit_id.anyOf[2] (Value): null. prepayment_order_id (Optional): string or
         * null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. prepayment_order_id.anyOf[1] (Value): string. Order that paid for this
         * prepaid delivery. Null when this is not a prepaid delivery order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". prepayment_order_id.anyOf[2] (Value): null.
         * pricing_amounts (Optional): {@link PricingAmountsPreviousAttributes} or null. The
         * order's money totals: subtotal, discounts, charges, tax, requested tip, and total.
         * pricing_amounts.anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}.
         * pricing_amounts.anyOf[2] (Value): null. refund_ids (Optional): Array of string or null.
         * IDs of the refunds that name this order. This includes refunds Flint makes to return a
         * payment it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids.anyOf[1] (Value): Array of
         * string. IDs of the refunds that name this order. This includes refunds Flint makes to
         * return a payment it couldn't accept (`reason` `payment_returned`), which never count
         * toward `refund_status` or the order's refunded amounts. refund_ids.anyOf[1][] (Value):
         * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_ids.anyOf[2] (Value): null.
         * refund_status (Optional): string or null. Refund progress for collected money. Refunds
         * with `reason` `payment_returned` return money the order never received and don't count.
         * Value enum: "none", "partially_refunded", "refunded". refund_status.anyOf[1] (Value):
         * string. Refund progress for collected money. Refunds with `reason` `payment_returned`
         * return money the order never received and don't count. Value enum: "none",
         * "partially_refunded", "refunded". refund_status.anyOf[2] (Value): null.
         * return_credit_settlements (Optional): Array of {@link
         * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
         * items the buyer returned, such as an exchange's replacement order. Included in
         * settlement_amounts.paid_money. return_credit_settlements.anyOf[1] (Value): Array of
         * {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to this order from
         * items the buyer returned, such as an exchange's replacement order. Included in
         * settlement_amounts.paid_money. return_credit_settlements.anyOf[1][] (Value): {@link
         * OrderReturnCreditSettlementPreviousAttributes}. return_credit_settlements.anyOf[2]
         * (Value): null. return_resolution_id (Optional): string or null. ID of the return
         * resolution that created this order as a replacement. Omitted for orders a return did not
         * create. return_resolution_id.anyOf[1] (Value): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_id.anyOf[2] (Value):
         * null. settlement_amounts (Optional): {@link OrderSettlementAmountsPreviousAttributes} or
         * null. How much of the order has been paid, refunded, credited, written off, and settled
         * as tips, and what is still outstanding. settlement_amounts.anyOf[1] (Value): {@link
         * OrderSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2] (Value): null.
         * status (Optional): string or null. Whether the order still accepts changes and new
         * payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue
         * on a closed order. Value enum: "open", "closed". status.anyOf[1] (Value): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". status.anyOf[2] (Value): null. subscription (Optional): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes} or null. Subscription summary included
         * when `expand` names `subscription`; `null` when expanded and this order does not bill a
         * subscription. Present only when `expand` includes `subscription`; `null` when expanded
         * and there is no related subscription. subscription.anyOf[1] (Value): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes}. subscription.anyOf[2] (Value): null.
         * subscription_cycle (Optional): integer or null. Charged subscription cycle associated
         * with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance
         * the cycle. subscription_cycle.anyOf[1] (Value): integer. Charged subscription cycle
         * associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
         * not advance the cycle. Format: uint64. minimum: 0. subscription_cycle.anyOf[2] (Value):
         * null. subscription_delivery_changed_at (Optional): string or null. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it.
         * subscription_delivery_changed_at.anyOf[1] (Value): string. Time the subscriber changed
         * delivery after this paid renewal was prepared. The order keeps its committed destination
         * until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_changed_at.anyOf[2] (Value): null.
         * subscription_delivery_number (Optional): integer or null. Position of this delivery
         * among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid
         * delivery order. subscription_delivery_number.anyOf[1] (Value): integer. Position of this
         * delivery among the deliveries one charge paid for, starting at 2. Null when this is not
         * a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_delivery_number.anyOf[2] (Value): null. subscription_id (Optional): string
         * or null. ID of the subscription this order bills. Absent on an order that isn't from a
         * subscription. subscription_id.anyOf[1] (Value): string. ID of the subscription this
         * order bills. Absent on an order that isn't from a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes}
         * or null. Plan summary included when `expand` names `subscription_plan`; `null` when
         * expanded and this order does not bill a subscription plan. Present only when `expand`
         * includes `subscription_plan`; `null` when expanded and there is no related subscription
         * plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes}. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. ID of the subscription plan this
         * order bills. Absent on an order that isn't from a subscription.
         * subscription_plan_id.anyOf[1] (Value): string. ID of the subscription plan this order
         * bills. Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * now, independent of permissions. Includes close when closure is allowed, and pay while
         * open without an active attempt and with an outstanding balance or payment-method setup
         * available. Always present with merchant credentials. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions.anyOf[1] (Value): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. Always present with merchant credentials. []
         * enum: "close", "pay", "resolve_inventory_exception". supported_actions.anyOf[1][]
         * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
         * supported_actions.anyOf[2] (Value): null. tax (Optional): {@link
         * OrderTaxPreviousAttributes} or null. The order's tax state: whether tax is enabled, its
         * status, location, exemption, and per-jurisdiction rows. tax.anyOf[1] (Value): {@link
         * OrderTaxPreviousAttributes}. tax.anyOf[2] (Value): null. ticketed_event (Optional):
         * {@link TicketedEventPreviousAttributes} or null. Event and tickets this order sold
         * through an event payment link. Absent on other orders. ticketed_event.anyOf[1] (Value):
         * {@link TicketedEventPreviousAttributes}. ticketed_event.anyOf[2] (Value): null. tips
         * (Optional): Array of {@link TipPreviousAttributes} or null. Tips on the order, each with
         * its requested, settled, and refunded amounts. A tip cleared before payment stays listed
         * as canceled. tips.anyOf[1] (Value): Array of {@link TipPreviousAttributes}. Tips on the
         * order, each with its requested, settled, and refunded amounts. A tip cleared before
         * payment stays listed as canceled. tips.anyOf[1][] (Value): {@link
         * TipPreviousAttributes}. tips.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Order version for optimistic concurrency. Send this value
         * as the expected version when changing the order. Increases with every change to the
         * order. Ignore an order webhook snapshot whose version is lower than one you have already
         * applied. version.anyOf[1] (Value): integer. Order version for optimistic concurrency.
         * Send this value as the expected version when changing the order. Increases with every
         * change to the order. Ignore an order webhook snapshot whose version is lower than one
         * you have already applied. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. anyOf[1] (Value): string. The earliest open or
             * resolving payment review on this order's counted payments. `null` when no review is
             * open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open.
             * Omitted for buyer credentials. Always present with merchant credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "active_payment_review_id"?: ((string) | (null));
            /**
             * The amounts authorized and still capturable on the order's payments. anyOf[1]
             * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            /**
             * A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2]
             * (Value): null.
             */
            "buyer_note"?: ((string) | (null));
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1] (Value): Array of {@link
             * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or
             * service fees, each with its applied amount, tax, and refunded amount. anyOf[1][]
             * (Value): {@link OrderChargePreviousAttributes}. anyOf[2] (Value): null.
             */
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            /**
             * IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of
             * string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value):
             * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_ids"?: ((Array<string>) | (null));
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. Always present with merchant
             * credentials. anyOf[1] (Value): string. The reference the payment link URL or resolve
             * request carried, such as your user ID. `null` when none was sent or checkout did not
             * start from a payment link. Returned only to merchant credentials; omitted for buyer
             * credentials. Set by the buyer's browser, so treat it as a claim, not proof of
             * identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
             * anyOf[2] (Value): null.
             */
            "client_reference"?: ((string) | (null));
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. anyOf[1] (Value): string. When the order closed.
             * Present exactly when status is closed. Set once at the transition and never changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * Why the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why
             * the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
             */
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when
             * closing the order. System closures leave it absent. It is not shown to the buyer.
             * anyOf[2] (Value): null.
             */
            "closed_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array
             * of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment
             * link's custom fields, recorded when checkout started, in the order the link showed
             * the fields. Each answer keeps the field's key, label, and type from that moment, so
             * later changes to the link don't change it. Optional fields the buyer left blank are
             * left out. Read-only. Empty when the order didn't come from a payment link, the link
             * had no custom fields, or the buyer answered none. Orders created before Flint
             * recorded answers here also return an empty list and keep their answers in `metadata`
             * as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to
             * merchant credentials; omitted for buyer credentials. Always present with merchant
             * credentials. maxItems: 20. anyOf[1][] (Value): {@link
             * CustomFieldAnswerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the
             * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1] (Value): Array of {@link
             * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup.
             * They attach when the subscription is provisioned and first discount its first
             * charged cycle. They do not discount this order and are separate from discounts and
             * order totals. Always present; empty when no promotions are deferred. anyOf[1][]
             * (Value): {@link DeferredPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link OrderDeliveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. anyOf[1] (Value): Array of {@link
             * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its
             * amount, status, and the line items and charges it covers. anyOf[1][] (Value): {@link
             * OrderDiscountPreviousAttributes}. anyOf[2] (Value): null.
             */
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
             * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state
             * across the order's counted payment intents, excluding payment_returned. Always
             * returned to merchant credentials and omitted from buyer reads. Open states take
             * precedence in this order: needs_response, under_review, inquiry_needs_response,
             * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
             * prevented, inquiry_closed; none when no disputes count. List individual cases with
             * GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[2] (Value): null.
             */
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed". anyOf[1] (Value): string. Aggregate progress across the order's
             * fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
             * "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
             */
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            /**
             * Fulfillments created for the order, each covering a set of its line items. anyOf[1]
             * (Value): Array of {@link FulfillmentPreviousAttributes}. Fulfillments created for
             * the order, each covering a set of its line items. anyOf[1][] (Value): {@link
             * FulfillmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. anyOf[1] (Value): {@link OrderGiftCardEstimatePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            /**
             * The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array
             * of {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions
             * applied to the order's payments. anyOf[1][] (Value): {@link
             * OrderGiftCardSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Gift cards cannot fund
             * gift card purchases; this is false when those purchases leave no amount eligible for
             * gift card tender. Recomputed on each read; a spent but open card still counts.
             * anyOf[1] (Value): boolean. Whether gift cards can pay for this order now. Gift cards
             * pay only USD orders that still accept changes, are not subscription purchases, and
             * whose merchant has at least one gift card that is not closed in this environment.
             * Gift cards cannot fund gift card purchases; this is false when those purchases leave
             * no amount eligible for gift card tender. Recomputed on each read; a spent but open
             * card still counts. anyOf[2] (Value): null.
             */
            "gift_card_tender_enabled"?: ((boolean) | (null));
            /**
             * Gift cards available to pay the order, with each card's available balance. anyOf[1]
             * (Value): Array of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards
             * available to pay the order, with each card's available balance. anyOf[1][] (Value):
             * {@link OrderGiftCardSelectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. anyOf[1]
             * (Value): string. ID of the delivery selection that governs this order, including
             * pickup choices without a delivery destination: the checkout's provisional selection
             * before payment, and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "governing_delivery_selection_id"?: ((string) | (null));
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value):
             * {@link OrderHandoverPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            /**
             * A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for
             * your team. Buyer reads leave it out. anyOf[2] (Value): null.
             */
            "internal_note"?: ((string) | (null));
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could
             * not be committed after payment. The cause remains after resolution. Omitted when no
             * reason was recorded. Unrecognized reasons are returned as other; new values may be
             * added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
             * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
             * anyOf[2] (Value): null.
             */
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving
             * the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
             */
            "inventory_exception_resolution_message"?: ((string) | (null));
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory
             * problem after payment needs attention. Value enum: "paid_inventory_failed",
             * "resolved". anyOf[2] (Value): null.
             */
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            /**
             * The reservation holding stock for this order, when one exists. anyOf[1] (Value):
             * string. The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1]
             * (Value): string. The invoice associated with this order. Null when the order has no
             * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
             * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities.
             * anyOf[1] (Value): Array of {@link OrderLineItemPreviousAttributes}. Items the order
             * sells, each with its pricing, tax, and fulfillment quantities. anyOf[1][] (Value):
             * {@link OrderLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique
             * identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable order number for receipts and merchant reference. anyOf[1] (Value):
             * string. Human-readable order number for receipts and merchant reference. anyOf[2]
             * (Value): null.
             */
            "order_number"?: ((string) | (null));
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             * anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
             * invoice created the order; attaching an invoice to an existing order preserves its
             * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
             * "subscription", "invoice". anyOf[2] (Value): null.
             */
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. anyOf[1] (Value): string. When `payment_status` became `paid`,
             * including a final capture that releases the remaining balance. Set once and never
             * changed, including after refunds. `null` when `payment_status` isn't `paid`,
             * including an order whose balance was written off without being paid. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of
             * string. IDs of the payment intents created to collect this order. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value):
             * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents
             * included when `expand` names `payment_intents`. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. anyOf[1] (Value): string. Payment link whose checkout created this order.
             * Absent for orders that did not come from a payment link. Filter GET /v1/orders by
             * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             * anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             * anyOf[1] (Value): string. Collection progress. An invoice write-off also completes
             * collection without receiving the written-off amount. Value enum: "unpaid",
             * "partially_paid", "paid". anyOf[2] (Value): null.
             */
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            /**
             * The order edit waiting for its balance payment. While it is set, the units that edit
             * removes can't join a fulfillment and the order refuses another edit. `null` when
             * there is none. Omitted for buyer credentials. Always present with merchant
             * credentials. anyOf[1] (Value): string. The order edit waiting for its balance
             * payment. While it is set, the units that edit removes can't join a fulfillment and
             * the order refuses another edit. `null` when there is none. Omitted for buyer
             * credentials. Always present with merchant credentials. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "pending_order_edit_id"?: ((string) | (null));
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. anyOf[1] (Value): string. Order that paid for this prepaid delivery. Null
             * when this is not a prepaid delivery order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "prepayment_order_id"?: ((string) | (null));
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string.
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string.
             * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for
             * collected money. Refunds with `reason` `payment_returned` return money the order
             * never received and don't count. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value):
             * Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
             * this order from items the buyer returned, such as an exchange's replacement order.
             * Included in settlement_amounts.paid_money. anyOf[1][] (Value): {@link
             * OrderReturnCreditSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. anyOf[1] (Value): string. ID of the return
             * resolution that created this order as a replacement. Omitted for orders a return did
             * not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. anyOf[1] (Value): {@link
             * OrderSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts
             * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or
             * note edits continue on a closed order. Value enum: "open", "closed". anyOf[2]
             * (Value): null.
             */
            "status"?: (("open" | "closed" | (string & {})) | (null));
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer.
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "subscription_cycle"?: ((number) | (null));
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * anyOf[1] (Value): string. Time the subscriber changed delivery after this paid
             * renewal was prepared. The order keeps its committed destination until you correct it
             * or refund and replace it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_changed_at"?: ((string) | (null));
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. anyOf[1] (Value): integer. Position
             * of this delivery among the deliveries one charge paid for, starting at 2. Null when
             * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_number"?: ((number) | (null));
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription this order bills.
             * Absent on an order that isn't from a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan this order
             * bills. Absent on an order that isn't from a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. Always present with merchant
             * credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts now, independent of
             * permissions. Includes close when closure is allowed, and pay while open without an
             * active attempt and with an outstanding balance or payment-method setup available.
             * Always present with merchant credentials. [] enum: "close", "pay",
             * "resolve_inventory_exception". anyOf[1][] (Value): string. Value enum: "close",
             * "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. anyOf[1] (Value): {@link OrderTaxPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. anyOf[1] (Value): {@link TicketedEventPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@link
             * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and
             * refunded amounts. A tip cleared before payment stays listed as canceled. anyOf[1][]
             * (Value): {@link TipPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. anyOf[1]
             * (Value): integer. Order version for optimistic concurrency. Send this value as the
             * expected version when changing the order. Increases with every change to the order.
             * Ignore an order webhook snapshot whose version is lower than one you have already
             * applied. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_payment_review_id (Optional): string or null. The earliest open
     * or resolving payment review on this order's counted payments. `null` when no review is open
     * or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for
     * buyer credentials. Always present with merchant credentials.
     * previous_attributes.active_payment_review_id.anyOf[1] (Value): string. The earliest open or
     * resolving payment review on this order's counted payments. `null` when no review is open or
     * resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for
     * buyer credentials. Always present with merchant credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.active_payment_review_id.anyOf[2]
     * (Value): null. previous_attributes.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and still
     * capturable on the order's payments. previous_attributes.authorization_amounts.anyOf[1]
     * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}.
     * previous_attributes.authorization_amounts.anyOf[2] (Value): null.
     * previous_attributes.buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes}
     * or null. Email and phone saved when payment started, from the pay request's buyer_contact or
     * the paying checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[1] (Value): {@link
     * CheckoutBuyerContactPreviousAttributes}. previous_attributes.buyer_contact.anyOf[2] (Value):
     * null. previous_attributes.buyer_note (Optional): string or null. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[1] (Value): string. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[2] (Value): null. previous_attributes.charges
     * (Optional): Array of {@link OrderChargePreviousAttributes} or null. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
     * fees, each with its applied amount, tax, and refunded amount.
     * previous_attributes.charges.anyOf[1][] (Value): {@link OrderChargePreviousAttributes}.
     * previous_attributes.charges.anyOf[2] (Value): null. previous_attributes.checkout_session_ids
     * (Optional): Array of string or null. IDs of the checkout sessions opened for this order.
     * previous_attributes.checkout_session_ids.anyOf[1] (Value): Array of string. IDs of the
     * checkout sessions opened for this order. previous_attributes.checkout_session_ids.anyOf[1][]
     * (Value): string. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_ids.anyOf[2] (Value): null.
     * previous_attributes.client_reference (Optional): string or null. The reference the payment
     * link URL or resolve request carried, such as your user ID. `null` when none was sent or
     * checkout did not start from a payment link. Returned only to merchant credentials; omitted
     * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of
     * identity. Always present with merchant credentials.
     * previous_attributes.client_reference.anyOf[1] (Value): string. The reference the payment
     * link URL or resolve request carried, such as your user ID. `null` when none was sent or
     * checkout did not start from a payment link. Returned only to merchant credentials; omitted
     * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of
     * identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
     * previous_attributes.client_reference.anyOf[2] (Value): null. previous_attributes.closed_at
     * (Optional): string or null. When the order closed. Present exactly when status is closed.
     * Set once at the transition and never changed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. When the order closed. Present exactly when status is closed. Set once at
     * the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.closed_at.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[1] (Value): string. Why the order closed. Present
     * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
     * other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[2] (Value): null.
     * previous_attributes.closed_reason_message (Optional): string or null. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[1] (Value): string. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.custom_field_answers (Optional): Array of {@link
     * CustomFieldAnswerPreviousAttributes} or null. The buyer's answers to the payment link's
     * custom fields, recorded when checkout started, in the order the link showed the fields. Each
     * answer keeps the field's key, label, and type from that moment, so later changes to the link
     * don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when
     * the order didn't come from a payment link, the link had no custom fields, or the buyer
     * answered none. Orders created before Flint recorded answers here also return an empty list
     * and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
     * the answers. Returned only to merchant credentials; omitted for buyer credentials. Always
     * present with merchant credentials. previous_attributes.custom_field_answers.anyOf[1]
     * (Value): Array of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the
     * payment link's custom fields, recorded when checkout started, in the order the link showed
     * the fields. Each answer keeps the field's key, label, and type from that moment, so later
     * changes to the link don't change it. Optional fields the buyer left blank are left out.
     * Read-only. Empty when the order didn't come from a payment link, the link had no custom
     * fields, or the buyer answered none. Orders created before Flint recorded answers here also
     * return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
     * the customer removes the answers. Returned only to merchant credentials; omitted for buyer
     * credentials. Always present with merchant credentials. maxItems: 20.
     * previous_attributes.custom_field_answers.anyOf[1][] (Value): {@link
     * CustomFieldAnswerPreviousAttributes}. previous_attributes.custom_field_answers.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer this
     * order belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deferred_promotions (Optional): Array of {@link
     * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription signup.
     * They attach when the subscription is provisioned and first discount its first charged cycle.
     * They do not discount this order and are separate from discounts and order totals. Always
     * present; empty when no promotions are deferred.
     * previous_attributes.deferred_promotions.anyOf[1] (Value): Array of {@link
     * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
     * attach when the subscription is provisioned and first discount its first charged cycle. They
     * do not discount this order and are separate from discounts and order totals. Always present;
     * empty when no promotions are deferred. previous_attributes.deferred_promotions.anyOf[1][]
     * (Value): {@link DeferredPromotionPreviousAttributes}.
     * previous_attributes.deferred_promotions.anyOf[2] (Value): null. previous_attributes.delivery
     * (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order.
     * previous_attributes.delivery.anyOf[1] (Value): {@link
     * OrderDeliverySummaryPreviousAttributes}. previous_attributes.delivery.anyOf[2] (Value):
     * null. previous_attributes.delivery_destination (Optional): {@link
     * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. previous_attributes.delivery_destination.anyOf[1] (Value):
     * {@link OrderDeliveryDestinationPreviousAttributes}.
     * previous_attributes.delivery_destination.anyOf[2] (Value): null.
     * previous_attributes.discounts (Optional): Array of {@link OrderDiscountPreviousAttributes}
     * or null. Discounts applied to the order, each with its amount, status, and the line items
     * and charges it covers. previous_attributes.discounts.anyOf[1] (Value): Array of {@link
     * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
     * status, and the line items and charges it covers. previous_attributes.discounts.anyOf[1][]
     * (Value): {@link OrderDiscountPreviousAttributes}. previous_attributes.discounts.anyOf[2]
     * (Value): null. previous_attributes.dispute_status (Optional): string or null. Aggregate
     * dispute state across the order's counted payment intents, excluding payment_returned. Always
     * returned to merchant credentials and omitted from buyer reads. Open states take precedence
     * in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
     * other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed;
     * none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[1] (Value): string. Aggregate dispute state across
     * the order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
     * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_status (Optional): string or null. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[1] (Value): string. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[2] (Value): null.
     * previous_attributes.fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
     * or null. Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1] (Value): Array of {@link
     * FulfillmentPreviousAttributes}. Fulfillments created for the order, each covering a set of
     * its line items. previous_attributes.fulfillments.anyOf[1][] (Value): {@link
     * FulfillmentPreviousAttributes}. previous_attributes.fulfillments.anyOf[2] (Value): null.
     * previous_attributes.gift_card_estimate (Optional): {@link
     * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
     * splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[1] (Value): {@link
     * OrderGiftCardEstimatePreviousAttributes}. previous_attributes.gift_card_estimate.anyOf[2]
     * (Value): null. previous_attributes.gift_card_settlements (Optional): Array of {@link
     * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1] (Value): Array of
     * {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1][] (Value): {@link
     * OrderGiftCardSettlementPreviousAttributes}.
     * previous_attributes.gift_card_settlements.anyOf[2] (Value): null.
     * previous_attributes.gift_card_tender_enabled (Optional): boolean or null. Whether gift cards
     * can pay for this order now. Gift cards pay only USD orders that still accept changes, are
     * not subscription purchases, and whose merchant has at least one gift card that is not closed
     * in this environment. Gift cards cannot fund gift card purchases; this is false when those
     * purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent
     * but open card still counts. previous_attributes.gift_card_tender_enabled.anyOf[1] (Value):
     * boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that
     * still accept changes, are not subscription purchases, and whose merchant has at least one
     * gift card that is not closed in this environment. Gift cards cannot fund gift card
     * purchases; this is false when those purchases leave no amount eligible for gift card tender.
     * Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[2] (Value): null.
     * previous_attributes.gift_cards (Optional): Array of {@link
     * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1] (Value): Array
     * of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1][] (Value):
     * {@link OrderGiftCardSelectionPreviousAttributes}. previous_attributes.gift_cards.anyOf[2]
     * (Value): null. previous_attributes.governing_delivery_selection_id (Optional): string or
     * null. ID of the delivery selection that governs this order, including pickup choices without
     * a delivery destination: the checkout's provisional selection before payment, and the
     * selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection.
     * previous_attributes.governing_delivery_selection_id.anyOf[1] (Value): string. ID of the
     * delivery selection that governs this order, including pickup choices without a delivery
     * destination: the checkout's provisional selection before payment, and the selection a
     * payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.governing_delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.handover (Optional): {@link OrderHandoverPreviousAttributes} or null.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. previous_attributes.handover.anyOf[1]
     * (Value): {@link OrderHandoverPreviousAttributes}. previous_attributes.handover.anyOf[2]
     * (Value): null. previous_attributes.internal_note (Optional): string or null. A note for your
     * team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[1] (Value): string.
     * A note for your team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[2]
     * (Value): null. previous_attributes.inventory_exception_reason (Optional): string or null.
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[1] (Value): string. Why inventory could
     * not be committed after payment. The cause remains after resolution. Omitted when no reason
     * was recorded. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_resolution_message (Optional): string or null. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[1] (Value): string. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_status (Optional): string or null. Whether an
     * inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[1] (Value): string. Whether
     * an inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. The reservation
     * holding stock for this order, when one exists.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. The reservation
     * holding stock for this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked demand is
     * routed. Required before an order containing tracked variants can hold stock.
     * previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice associated with this
     * order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding
     * an invoice preserves it. previous_attributes.invoice_id.anyOf[1] (Value): string. The
     * invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link OrderLineItemPreviousAttributes}
     * or null. Items the order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
     * fulfillment quantities. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * OrderLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. ID of the merchant this resource
     * belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant
     * this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Unique identifier for this order,
     * prefixed `ord_`. previous_attributes.order_id.anyOf[1] (Value): string. Unique identifier
     * for this order, prefixed `ord_`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable order number for receipts and merchant reference.
     * previous_attributes.order_number.anyOf[1] (Value): string. Human-readable order number for
     * receipts and merchant reference. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.origin (Optional): string or null. How the order was created. invoice
     * means a Quick Pay invoice created the order; attaching an invoice to an existing order
     * preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". previous_attributes.origin.anyOf[1] (Value): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". previous_attributes.origin.anyOf[2] (Value):
     * null. previous_attributes.paid_at (Optional): string or null. When `payment_status` became
     * `paid`, including a final capture that releases the remaining balance. Set once and never
     * changed, including after refunds. `null` when `payment_status` isn't `paid`, including an
     * order whose balance was written off without being paid. previous_attributes.paid_at.anyOf[1]
     * (Value): string. When `payment_status` became `paid`, including a final capture that
     * releases the remaining balance. Set once and never changed, including after refunds. `null`
     * when `payment_status` isn't `paid`, including an order whose balance was written off without
     * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_intent_ids
     * (Optional): Array of string or null. IDs of the payment intents created to collect this
     * order. previous_attributes.payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the
     * payment intents created to collect this order.
     * previous_attributes.payment_intent_ids.anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_ids.anyOf[2] (Value):
     * null. previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
     * `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1] (Value):
     * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included
     * when `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1][]
     * (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_status (Optional): string or null. Collection progress. An
     * invoice write-off also completes collection without receiving the written-off amount. Value
     * enum: "unpaid", "partially_paid", "paid". previous_attributes.payment_status.anyOf[1]
     * (Value): string. Collection progress. An invoice write-off also completes collection without
     * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * previous_attributes.payment_status.anyOf[2] (Value): null.
     * previous_attributes.pending_order_edit_id (Optional): string or null. The order edit waiting
     * for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials.
     * previous_attributes.pending_order_edit_id.anyOf[1] (Value): string. The order edit waiting
     * for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.pending_order_edit_id.anyOf[2]
     * (Value): null. previous_attributes.prepayment_order_id (Optional): string or null. Order
     * that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * previous_attributes.prepayment_order_id.anyOf[1] (Value): string. Order that paid for this
     * prepaid delivery. Null when this is not a prepaid delivery order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.prepayment_order_id.anyOf[2] (Value):
     * null. previous_attributes.pricing_amounts (Optional): {@link
     * PricingAmountsPreviousAttributes} or null. The order's money totals: subtotal, discounts,
     * charges, tax, requested tip, and total. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the refunds that name this order. This includes
     * refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`),
     * which never count toward `refund_status` or the order's refunded amounts.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that
     * name this order. This includes refunds Flint makes to return a payment it couldn't accept
     * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
     * refunded amounts. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.return_credit_settlements (Optional): Array of {@link
     * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
     * items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1]
     * (Value): Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
     * this order from items the buyer returned, such as an exchange's replacement order. Included
     * in settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1][]
     * (Value): {@link OrderReturnCreditSettlementPreviousAttributes}.
     * previous_attributes.return_credit_settlements.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. previous_attributes.return_resolution_id.anyOf[1] (Value): string. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * OrderSettlementAmountsPreviousAttributes} or null. How much of the order has been paid,
     * refunded, credited, written off, and settled as tips, and what is still outstanding.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * OrderSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Whether the order
     * still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and
     * metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription
     * (Optional): {@link ExpandedSubscriptionSummaryPreviousAttributes} or null. Subscription
     * summary included when `expand` names `subscription`; `null` when expanded and this order
     * does not bill a subscription. Present only when `expand` includes `subscription`; `null`
     * when expanded and there is no related subscription.
     * previous_attributes.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummaryPreviousAttributes}. previous_attributes.subscription.anyOf[2]
     * (Value): null. previous_attributes.subscription_cycle (Optional): integer or null. Charged
     * subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped
     * renewals do not advance the cycle. previous_attributes.subscription_cycle.anyOf[1] (Value):
     * integer. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
     * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * previous_attributes.subscription_cycle.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_changed_at (Optional): string or null. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it.
     * previous_attributes.subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     * previous_attributes.subscription_delivery_changed_at.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_number (Optional): integer or null. Position of
     * this delivery among the deliveries one charge paid for, starting at 2. Null when this is not
     * a prepaid delivery order. previous_attributes.subscription_delivery_number.anyOf[1] (Value):
     * integer. Position of this delivery among the deliveries one charge paid for, starting at 2.
     * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * previous_attributes.subscription_delivery_number.anyOf[2] (Value): null.
     * previous_attributes.subscription_id (Optional): string or null. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Plan summary included when
     * `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
     * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
     * expanded and there is no related subscription plan.
     * previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Includes close when closure is allowed, and pay while open without an active attempt and
     * with an outstanding balance or payment-method setup available. Always present with merchant
     * credentials. [] enum: "close", "pay", "resolve_inventory_exception".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link OrderTaxPreviousAttributes} or
     * null. The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. previous_attributes.tax.anyOf[1] (Value): {@link
     * OrderTaxPreviousAttributes}. previous_attributes.tax.anyOf[2] (Value): null.
     * previous_attributes.ticketed_event (Optional): {@link TicketedEventPreviousAttributes} or
     * null. Event and tickets this order sold through an event payment link. Absent on other
     * orders. previous_attributes.ticketed_event.anyOf[1] (Value): {@link
     * TicketedEventPreviousAttributes}. previous_attributes.ticketed_event.anyOf[2] (Value): null.
     * previous_attributes.tips (Optional): Array of {@link TipPreviousAttributes} or null. Tips on
     * the order, each with its requested, settled, and refunded amounts. A tip cleared before
     * payment stays listed as canceled. previous_attributes.tips.anyOf[1] (Value): Array of {@link
     * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and refunded
     * amounts. A tip cleared before payment stays listed as canceled.
     * previous_attributes.tips.anyOf[1][] (Value): {@link TipPreviousAttributes}.
     * previous_attributes.tips.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Order version for optimistic concurrency. Send this value as
     * the expected version when changing the order. Increases with every change to the order.
     * Ignore an order webhook snapshot whose version is lower than one you have already applied.
     * previous_attributes.version.anyOf[1] (Value): integer. Order version for optimistic
     * concurrency. Send this value as the expected version when changing the order. Increases with
     * every change to the order. Ignore an order webhook snapshot whose version is lower than one
     * you have already applied. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`,
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_payment_review_id (Optional): string or
         * null. The earliest open or resolving payment review on this order's counted payments.
         * `null` when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. active_payment_review_id.anyOf[1] (Value): string. The
         * earliest open or resolving payment review on this order's counted payments. `null` when
         * no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * active_payment_review_id.anyOf[2] (Value): null. authorization_amounts (Optional):
         * {@link OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and
         * still capturable on the order's payments. authorization_amounts.anyOf[1] (Value): {@link
         * OrderAuthorizationAmountsPreviousAttributes}. authorization_amounts.anyOf[2] (Value):
         * null. buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes} or null.
         * Email and phone saved when payment started, from the pay request's buyer_contact or the
         * paying checkout session's saved contact. It does not change the linked customer.
         * buyer_contact.anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}.
         * buyer_contact.anyOf[2] (Value): null. buyer_note (Optional): string or null. A note to
         * the buyer. buyer_note.anyOf[1] (Value): string. A note to the buyer. buyer_note.anyOf[2]
         * (Value): null. charges (Optional): Array of {@link OrderChargePreviousAttributes} or
         * null. Charges added to the order, such as delivery or service fees, each with its
         * applied amount, tax, and refunded amount. charges.anyOf[1] (Value): Array of {@link
         * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
         * fees, each with its applied amount, tax, and refunded amount. charges.anyOf[1][]
         * (Value): {@link OrderChargePreviousAttributes}. charges.anyOf[2] (Value): null.
         * checkout_session_ids (Optional): Array of string or null. IDs of the checkout sessions
         * opened for this order. checkout_session_ids.anyOf[1] (Value): Array of string. IDs of
         * the checkout sessions opened for this order. checkout_session_ids.anyOf[1][] (Value):
         * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_ids.anyOf[2] (Value):
         * null. client_reference (Optional): string or null. The reference the payment link URL or
         * resolve request carried, such as your user ID. `null` when none was sent or checkout did
         * not start from a payment link. Returned only to merchant credentials; omitted for buyer
         * credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity.
         * Always present with merchant credentials. client_reference.anyOf[1] (Value): string. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. Always present with merchant credentials.
         * minLength: 1. maxLength: 255. client_reference.anyOf[2] (Value): null. closed_at
         * (Optional): string or null. When the order closed. Present exactly when status is
         * closed. Set once at the transition and never changed. closed_at.anyOf[1] (Value):
         * string. When the order closed. Present exactly when status is closed. Set once at the
         * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * closed_at.anyOf[2] (Value): null. closed_reason (Optional): string or null. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[1] (Value): string. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[2] (Value): null.
         * closed_reason_message (Optional): string or null. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[1] (Value): string. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * custom_field_answers (Optional): Array of {@link CustomFieldAnswerPreviousAttributes} or
         * null. The buyer's answers to the payment link's custom fields, recorded when checkout
         * started, in the order the link showed the fields. Each answer keeps the field's key,
         * label, and type from that moment, so later changes to the link don't change it. Optional
         * fields the buyer left blank are left out. Read-only. Empty when the order didn't come
         * from a payment link, the link had no custom fields, or the buyer answered none. Orders
         * created before Flint recorded answers here also return an empty list and keep their
         * answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the
         * answers. Returned only to merchant credentials; omitted for buyer credentials. Always
         * present with merchant credentials. custom_field_answers.anyOf[1] (Value): Array of
         * {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment link's
         * custom fields, recorded when checkout started, in the order the link showed the fields.
         * Each answer keeps the field's key, label, and type from that moment, so later changes to
         * the link don't change it. Optional fields the buyer left blank are left out. Read-only.
         * Empty when the order didn't come from a payment link, the link had no custom fields, or
         * the buyer answered none. Orders created before Flint recorded answers here also return
         * an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the
         * customer removes the answers. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. maxItems: 20.
         * custom_field_answers.anyOf[1][] (Value): {@link CustomFieldAnswerPreviousAttributes}.
         * custom_field_answers.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary included when
         * `expand` names `customer`; `null` when expanded and no customer is linked. Present only
         * when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer this order belongs to. customer_id.anyOf[1] (Value): string. ID of the customer
         * this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2]
         * (Value): null. deferred_promotions (Optional): Array of {@link
         * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription
         * signup. They attach when the subscription is provisioned and first discount its first
         * charged cycle. They do not discount this order and are separate from discounts and order
         * totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1] (Value): Array of {@link
         * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
         * attach when the subscription is provisioned and first discount its first charged cycle.
         * They do not discount this order and are separate from discounts and order totals. Always
         * present; empty when no promotions are deferred. deferred_promotions.anyOf[1][] (Value):
         * {@link DeferredPromotionPreviousAttributes}. deferred_promotions.anyOf[2] (Value): null.
         * delivery (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method,
         * type and recipient of governing_delivery_selection_id. The address remains in
         * delivery_destination. Omitted when no shipment or local-delivery selection governs the
         * order. delivery.anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
         * delivery.anyOf[2] (Value): null. delivery_destination (Optional): {@link
         * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
         * destination committed for this order. Payment freezes this value; fulfillment recipient
         * changes do not replace it. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. delivery_destination.anyOf[1] (Value): {@link
         * OrderDeliveryDestinationPreviousAttributes}. delivery_destination.anyOf[2] (Value):
         * null. discounts (Optional): Array of {@link OrderDiscountPreviousAttributes} or null.
         * Discounts applied to the order, each with its amount, status, and the line items and
         * charges it covers. discounts.anyOf[1] (Value): Array of {@link
         * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
         * status, and the line items and charges it covers. discounts.anyOf[1][] (Value): {@link
         * OrderDiscountPreviousAttributes}. discounts.anyOf[2] (Value): null. dispute_status
         * (Optional): string or null. Aggregate dispute state across the order's counted payment
         * intents, excluding payment_returned. Always returned to merchant credentials and omitted
         * from buyer reads. Open states take precedence in this order: needs_response,
         * under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most
         * severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
         * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present
         * with merchant credentials. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". dispute_status.anyOf[1] (Value): string. Aggregate dispute
         * state across the order's counted payment intents, excluding payment_returned. Always
         * returned to merchant credentials and omitted from buyer reads. Open states take
         * precedence in this order: needs_response, under_review, inquiry_needs_response,
         * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
         * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
         * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. fulfillment_status (Optional): string or
         * null. Aggregate progress across the order's fulfillment quantities. Value enum:
         * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
         * "closed". fulfillment_status.anyOf[1] (Value): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillment_status.anyOf[2]
         * (Value): null. fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
         * or null. Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1] (Value): Array of {@link FulfillmentPreviousAttributes}.
         * Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1][] (Value): {@link FulfillmentPreviousAttributes}.
         * fulfillments.anyOf[2] (Value): null. gift_card_estimate (Optional): {@link
         * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
         * splits between gift cards and the payment processor. gift_card_estimate.anyOf[1]
         * (Value): {@link OrderGiftCardEstimatePreviousAttributes}. gift_card_estimate.anyOf[2]
         * (Value): null. gift_card_settlements (Optional): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to
         * the order's payments. gift_card_settlements.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
         * order's payments. gift_card_settlements.anyOf[1][] (Value): {@link
         * OrderGiftCardSettlementPreviousAttributes}. gift_card_settlements.anyOf[2] (Value):
         * null. gift_card_tender_enabled (Optional): boolean or null. Whether gift cards can pay
         * for this order now. Gift cards pay only USD orders that still accept changes, are not
         * subscription purchases, and whose merchant has at least one gift card that is not closed
         * in this environment. Gift cards cannot fund gift card purchases; this is false when
         * those purchases leave no amount eligible for gift card tender. Recomputed on each read;
         * a spent but open card still counts. gift_card_tender_enabled.anyOf[1] (Value): boolean.
         * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
         * accept changes, are not subscription purchases, and whose merchant has at least one gift
         * card that is not closed in this environment. Gift cards cannot fund gift card purchases;
         * this is false when those purchases leave no amount eligible for gift card tender.
         * Recomputed on each read; a spent but open card still counts.
         * gift_card_tender_enabled.anyOf[2] (Value): null. gift_cards (Optional): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the
         * order, with each card's available balance. gift_cards.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order, with
         * each card's available balance. gift_cards.anyOf[1][] (Value): {@link
         * OrderGiftCardSelectionPreviousAttributes}. gift_cards.anyOf[2] (Value): null.
         * governing_delivery_selection_id (Optional): string or null. ID of the delivery selection
         * that governs this order, including pickup choices without a delivery destination: the
         * checkout's provisional selection before payment, and the selection a payment committed
         * after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no
         * selection governs the order. While set, change the destination through the delivery
         * selection. governing_delivery_selection_id.anyOf[1] (Value): string. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". governing_delivery_selection_id.anyOf[2] (Value):
         * null. handover (Optional): {@link OrderHandoverPreviousAttributes} or null. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. handover.anyOf[1] (Value): {@link
         * OrderHandoverPreviousAttributes}. handover.anyOf[2] (Value): null. internal_note
         * (Optional): string or null. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[1] (Value): string. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[2] (Value): null. inventory_exception_reason (Optional): string or
         * null. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[1] (Value):
         * string. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[2] (Value): null.
         * inventory_exception_resolution_message (Optional): string or null. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[1] (Value): string. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[2] (Value): null.
         * inventory_exception_status (Optional): string or null. Whether an inventory problem
         * after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[1] (Value): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[2] (Value): null. inventory_reservation_id (Optional):
         * string or null. The reservation holding stock for this order, when one exists.
         * inventory_reservation_id.anyOf[1] (Value): string. The reservation holding stock for
         * this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_reservation_id.anyOf[2] (Value): null. inventory_routing_source (Optional):
         * {@link InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked
         * demand is routed. Required before an order containing tracked variants can hold stock.
         * inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. invoice_id (Optional): string or null. The invoice associated with this order.
         * Null when the order has no invoice. A replacement invoice replaces this ID; voiding an
         * invoice preserves it. invoice_id.anyOf[1] (Value): string. The invoice associated with
         * this order. Null when the order has no invoice. A replacement invoice replaces this ID;
         * voiding an invoice preserves it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * OrderLineItemPreviousAttributes} or null. Items the order sells, each with its pricing,
         * tax, and fulfillment quantities. line_items.anyOf[1] (Value): Array of {@link
         * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
         * fulfillment quantities. line_items.anyOf[1][] (Value): {@link
         * OrderLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. ID of the merchant this resource belongs to.
         * merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Unique identifier for this order, prefixed `ord_`. order_id.anyOf[1] (Value): string.
         * Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable order number for receipts and merchant
         * reference. order_number.anyOf[1] (Value): string. Human-readable order number for
         * receipts and merchant reference. order_number.anyOf[2] (Value): null. origin (Optional):
         * string or null. How the order was created. invoice means a Quick Pay invoice created the
         * order; attaching an invoice to an existing order preserves its origin. Value enum:
         * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
         * origin.anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
         * invoice created the order; attaching an invoice to an existing order preserves its
         * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
         * "subscription", "invoice". origin.anyOf[2] (Value): null. paid_at (Optional): string or
         * null. When `payment_status` became `paid`, including a final capture that releases the
         * remaining balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. paid_at.anyOf[1] (Value): string. When `payment_status` became `paid`,
         * including a final capture that releases the remaining balance. Set once and never
         * changed, including after refunds. `null` when `payment_status` isn't `paid`, including
         * an order whose balance was written off without being paid. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_intent_ids (Optional):
         * Array of string or null. IDs of the payment intents created to collect this order.
         * payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents created
         * to collect this order. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
         * `expand` names `payment_intents`. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included when `expand`
         * names `payment_intents`. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * payment_link_id (Optional): string or null. Payment link whose checkout created this
         * order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by
         * payment_link_id to list a link's orders. payment_link_id.anyOf[1] (Value): string.
         * Payment link whose checkout created this order. Absent for orders that did not come from
         * a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
         * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * payment_status (Optional): string or null. Collection progress. An invoice write-off
         * also completes collection without receiving the written-off amount. Value enum:
         * "unpaid", "partially_paid", "paid". payment_status.anyOf[1] (Value): string. Collection
         * progress. An invoice write-off also completes collection without receiving the
         * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
         * payment_status.anyOf[2] (Value): null. pending_order_edit_id (Optional): string or null.
         * The order edit waiting for its balance payment. While it is set, the units that edit
         * removes can't join a fulfillment and the order refuses another edit. `null` when there
         * is none. Omitted for buyer credentials. Always present with merchant credentials.
         * pending_order_edit_id.anyOf[1] (Value): string. The order edit waiting for its balance
         * payment. While it is set, the units that edit removes can't join a fulfillment and the
         * order refuses another edit. `null` when there is none. Omitted for buyer credentials.
         * Always present with merchant credentials. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * pending_order_edit_id.anyOf[2] (Value): null. prepayment_order_id (Optional): string or
         * null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. prepayment_order_id.anyOf[1] (Value): string. Order that paid for this
         * prepaid delivery. Null when this is not a prepaid delivery order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". prepayment_order_id.anyOf[2] (Value): null.
         * pricing_amounts (Optional): {@link PricingAmountsPreviousAttributes} or null. The
         * order's money totals: subtotal, discounts, charges, tax, requested tip, and total.
         * pricing_amounts.anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}.
         * pricing_amounts.anyOf[2] (Value): null. refund_ids (Optional): Array of string or null.
         * IDs of the refunds that name this order. This includes refunds Flint makes to return a
         * payment it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids.anyOf[1] (Value): Array of
         * string. IDs of the refunds that name this order. This includes refunds Flint makes to
         * return a payment it couldn't accept (`reason` `payment_returned`), which never count
         * toward `refund_status` or the order's refunded amounts. refund_ids.anyOf[1][] (Value):
         * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_ids.anyOf[2] (Value): null.
         * refund_status (Optional): string or null. Refund progress for collected money. Refunds
         * with `reason` `payment_returned` return money the order never received and don't count.
         * Value enum: "none", "partially_refunded", "refunded". refund_status.anyOf[1] (Value):
         * string. Refund progress for collected money. Refunds with `reason` `payment_returned`
         * return money the order never received and don't count. Value enum: "none",
         * "partially_refunded", "refunded". refund_status.anyOf[2] (Value): null.
         * return_credit_settlements (Optional): Array of {@link
         * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
         * items the buyer returned, such as an exchange's replacement order. Included in
         * settlement_amounts.paid_money. return_credit_settlements.anyOf[1] (Value): Array of
         * {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to this order from
         * items the buyer returned, such as an exchange's replacement order. Included in
         * settlement_amounts.paid_money. return_credit_settlements.anyOf[1][] (Value): {@link
         * OrderReturnCreditSettlementPreviousAttributes}. return_credit_settlements.anyOf[2]
         * (Value): null. return_resolution_id (Optional): string or null. ID of the return
         * resolution that created this order as a replacement. Omitted for orders a return did not
         * create. return_resolution_id.anyOf[1] (Value): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_id.anyOf[2] (Value):
         * null. settlement_amounts (Optional): {@link OrderSettlementAmountsPreviousAttributes} or
         * null. How much of the order has been paid, refunded, credited, written off, and settled
         * as tips, and what is still outstanding. settlement_amounts.anyOf[1] (Value): {@link
         * OrderSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2] (Value): null.
         * status (Optional): string or null. Whether the order still accepts changes and new
         * payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue
         * on a closed order. Value enum: "open", "closed". status.anyOf[1] (Value): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". status.anyOf[2] (Value): null. subscription (Optional): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes} or null. Subscription summary included
         * when `expand` names `subscription`; `null` when expanded and this order does not bill a
         * subscription. Present only when `expand` includes `subscription`; `null` when expanded
         * and there is no related subscription. subscription.anyOf[1] (Value): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes}. subscription.anyOf[2] (Value): null.
         * subscription_cycle (Optional): integer or null. Charged subscription cycle associated
         * with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance
         * the cycle. subscription_cycle.anyOf[1] (Value): integer. Charged subscription cycle
         * associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
         * not advance the cycle. Format: uint64. minimum: 0. subscription_cycle.anyOf[2] (Value):
         * null. subscription_delivery_changed_at (Optional): string or null. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it.
         * subscription_delivery_changed_at.anyOf[1] (Value): string. Time the subscriber changed
         * delivery after this paid renewal was prepared. The order keeps its committed destination
         * until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_changed_at.anyOf[2] (Value): null.
         * subscription_delivery_number (Optional): integer or null. Position of this delivery
         * among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid
         * delivery order. subscription_delivery_number.anyOf[1] (Value): integer. Position of this
         * delivery among the deliveries one charge paid for, starting at 2. Null when this is not
         * a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_delivery_number.anyOf[2] (Value): null. subscription_id (Optional): string
         * or null. ID of the subscription this order bills. Absent on an order that isn't from a
         * subscription. subscription_id.anyOf[1] (Value): string. ID of the subscription this
         * order bills. Absent on an order that isn't from a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes}
         * or null. Plan summary included when `expand` names `subscription_plan`; `null` when
         * expanded and this order does not bill a subscription plan. Present only when `expand`
         * includes `subscription_plan`; `null` when expanded and there is no related subscription
         * plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes}. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. ID of the subscription plan this
         * order bills. Absent on an order that isn't from a subscription.
         * subscription_plan_id.anyOf[1] (Value): string. ID of the subscription plan this order
         * bills. Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * now, independent of permissions. Includes close when closure is allowed, and pay while
         * open without an active attempt and with an outstanding balance or payment-method setup
         * available. Always present with merchant credentials. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions.anyOf[1] (Value): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. Always present with merchant credentials. []
         * enum: "close", "pay", "resolve_inventory_exception". supported_actions.anyOf[1][]
         * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
         * supported_actions.anyOf[2] (Value): null. tax (Optional): {@link
         * OrderTaxPreviousAttributes} or null. The order's tax state: whether tax is enabled, its
         * status, location, exemption, and per-jurisdiction rows. tax.anyOf[1] (Value): {@link
         * OrderTaxPreviousAttributes}. tax.anyOf[2] (Value): null. ticketed_event (Optional):
         * {@link TicketedEventPreviousAttributes} or null. Event and tickets this order sold
         * through an event payment link. Absent on other orders. ticketed_event.anyOf[1] (Value):
         * {@link TicketedEventPreviousAttributes}. ticketed_event.anyOf[2] (Value): null. tips
         * (Optional): Array of {@link TipPreviousAttributes} or null. Tips on the order, each with
         * its requested, settled, and refunded amounts. A tip cleared before payment stays listed
         * as canceled. tips.anyOf[1] (Value): Array of {@link TipPreviousAttributes}. Tips on the
         * order, each with its requested, settled, and refunded amounts. A tip cleared before
         * payment stays listed as canceled. tips.anyOf[1][] (Value): {@link
         * TipPreviousAttributes}. tips.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Order version for optimistic concurrency. Send this value
         * as the expected version when changing the order. Increases with every change to the
         * order. Ignore an order webhook snapshot whose version is lower than one you have already
         * applied. version.anyOf[1] (Value): integer. Order version for optimistic concurrency.
         * Send this value as the expected version when changing the order. Increases with every
         * change to the order. Ignore an order webhook snapshot whose version is lower than one
         * you have already applied. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. anyOf[1] (Value): string. The earliest open or
             * resolving payment review on this order's counted payments. `null` when no review is
             * open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open.
             * Omitted for buyer credentials. Always present with merchant credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "active_payment_review_id"?: ((string) | (null));
            /**
             * The amounts authorized and still capturable on the order's payments. anyOf[1]
             * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            /**
             * A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2]
             * (Value): null.
             */
            "buyer_note"?: ((string) | (null));
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1] (Value): Array of {@link
             * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or
             * service fees, each with its applied amount, tax, and refunded amount. anyOf[1][]
             * (Value): {@link OrderChargePreviousAttributes}. anyOf[2] (Value): null.
             */
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            /**
             * IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of
             * string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value):
             * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_ids"?: ((Array<string>) | (null));
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. Always present with merchant
             * credentials. anyOf[1] (Value): string. The reference the payment link URL or resolve
             * request carried, such as your user ID. `null` when none was sent or checkout did not
             * start from a payment link. Returned only to merchant credentials; omitted for buyer
             * credentials. Set by the buyer's browser, so treat it as a claim, not proof of
             * identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
             * anyOf[2] (Value): null.
             */
            "client_reference"?: ((string) | (null));
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. anyOf[1] (Value): string. When the order closed.
             * Present exactly when status is closed. Set once at the transition and never changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * Why the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why
             * the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
             */
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when
             * closing the order. System closures leave it absent. It is not shown to the buyer.
             * anyOf[2] (Value): null.
             */
            "closed_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array
             * of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment
             * link's custom fields, recorded when checkout started, in the order the link showed
             * the fields. Each answer keeps the field's key, label, and type from that moment, so
             * later changes to the link don't change it. Optional fields the buyer left blank are
             * left out. Read-only. Empty when the order didn't come from a payment link, the link
             * had no custom fields, or the buyer answered none. Orders created before Flint
             * recorded answers here also return an empty list and keep their answers in `metadata`
             * as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to
             * merchant credentials; omitted for buyer credentials. Always present with merchant
             * credentials. maxItems: 20. anyOf[1][] (Value): {@link
             * CustomFieldAnswerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the
             * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1] (Value): Array of {@link
             * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup.
             * They attach when the subscription is provisioned and first discount its first
             * charged cycle. They do not discount this order and are separate from discounts and
             * order totals. Always present; empty when no promotions are deferred. anyOf[1][]
             * (Value): {@link DeferredPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link OrderDeliveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. anyOf[1] (Value): Array of {@link
             * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its
             * amount, status, and the line items and charges it covers. anyOf[1][] (Value): {@link
             * OrderDiscountPreviousAttributes}. anyOf[2] (Value): null.
             */
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
             * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state
             * across the order's counted payment intents, excluding payment_returned. Always
             * returned to merchant credentials and omitted from buyer reads. Open states take
             * precedence in this order: needs_response, under_review, inquiry_needs_response,
             * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
             * prevented, inquiry_closed; none when no disputes count. List individual cases with
             * GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[2] (Value): null.
             */
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed". anyOf[1] (Value): string. Aggregate progress across the order's
             * fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
             * "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
             */
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            /**
             * Fulfillments created for the order, each covering a set of its line items. anyOf[1]
             * (Value): Array of {@link FulfillmentPreviousAttributes}. Fulfillments created for
             * the order, each covering a set of its line items. anyOf[1][] (Value): {@link
             * FulfillmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. anyOf[1] (Value): {@link OrderGiftCardEstimatePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            /**
             * The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array
             * of {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions
             * applied to the order's payments. anyOf[1][] (Value): {@link
             * OrderGiftCardSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Gift cards cannot fund
             * gift card purchases; this is false when those purchases leave no amount eligible for
             * gift card tender. Recomputed on each read; a spent but open card still counts.
             * anyOf[1] (Value): boolean. Whether gift cards can pay for this order now. Gift cards
             * pay only USD orders that still accept changes, are not subscription purchases, and
             * whose merchant has at least one gift card that is not closed in this environment.
             * Gift cards cannot fund gift card purchases; this is false when those purchases leave
             * no amount eligible for gift card tender. Recomputed on each read; a spent but open
             * card still counts. anyOf[2] (Value): null.
             */
            "gift_card_tender_enabled"?: ((boolean) | (null));
            /**
             * Gift cards available to pay the order, with each card's available balance. anyOf[1]
             * (Value): Array of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards
             * available to pay the order, with each card's available balance. anyOf[1][] (Value):
             * {@link OrderGiftCardSelectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. anyOf[1]
             * (Value): string. ID of the delivery selection that governs this order, including
             * pickup choices without a delivery destination: the checkout's provisional selection
             * before payment, and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "governing_delivery_selection_id"?: ((string) | (null));
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value):
             * {@link OrderHandoverPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            /**
             * A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for
             * your team. Buyer reads leave it out. anyOf[2] (Value): null.
             */
            "internal_note"?: ((string) | (null));
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could
             * not be committed after payment. The cause remains after resolution. Omitted when no
             * reason was recorded. Unrecognized reasons are returned as other; new values may be
             * added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
             * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
             * anyOf[2] (Value): null.
             */
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving
             * the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
             */
            "inventory_exception_resolution_message"?: ((string) | (null));
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory
             * problem after payment needs attention. Value enum: "paid_inventory_failed",
             * "resolved". anyOf[2] (Value): null.
             */
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            /**
             * The reservation holding stock for this order, when one exists. anyOf[1] (Value):
             * string. The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1]
             * (Value): string. The invoice associated with this order. Null when the order has no
             * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
             * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities.
             * anyOf[1] (Value): Array of {@link OrderLineItemPreviousAttributes}. Items the order
             * sells, each with its pricing, tax, and fulfillment quantities. anyOf[1][] (Value):
             * {@link OrderLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique
             * identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable order number for receipts and merchant reference. anyOf[1] (Value):
             * string. Human-readable order number for receipts and merchant reference. anyOf[2]
             * (Value): null.
             */
            "order_number"?: ((string) | (null));
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             * anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
             * invoice created the order; attaching an invoice to an existing order preserves its
             * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
             * "subscription", "invoice". anyOf[2] (Value): null.
             */
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. anyOf[1] (Value): string. When `payment_status` became `paid`,
             * including a final capture that releases the remaining balance. Set once and never
             * changed, including after refunds. `null` when `payment_status` isn't `paid`,
             * including an order whose balance was written off without being paid. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of
             * string. IDs of the payment intents created to collect this order. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value):
             * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents
             * included when `expand` names `payment_intents`. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. anyOf[1] (Value): string. Payment link whose checkout created this order.
             * Absent for orders that did not come from a payment link. Filter GET /v1/orders by
             * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             * anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             * anyOf[1] (Value): string. Collection progress. An invoice write-off also completes
             * collection without receiving the written-off amount. Value enum: "unpaid",
             * "partially_paid", "paid". anyOf[2] (Value): null.
             */
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            /**
             * The order edit waiting for its balance payment. While it is set, the units that edit
             * removes can't join a fulfillment and the order refuses another edit. `null` when
             * there is none. Omitted for buyer credentials. Always present with merchant
             * credentials. anyOf[1] (Value): string. The order edit waiting for its balance
             * payment. While it is set, the units that edit removes can't join a fulfillment and
             * the order refuses another edit. `null` when there is none. Omitted for buyer
             * credentials. Always present with merchant credentials. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "pending_order_edit_id"?: ((string) | (null));
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. anyOf[1] (Value): string. Order that paid for this prepaid delivery. Null
             * when this is not a prepaid delivery order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "prepayment_order_id"?: ((string) | (null));
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string.
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string.
             * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for
             * collected money. Refunds with `reason` `payment_returned` return money the order
             * never received and don't count. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value):
             * Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
             * this order from items the buyer returned, such as an exchange's replacement order.
             * Included in settlement_amounts.paid_money. anyOf[1][] (Value): {@link
             * OrderReturnCreditSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. anyOf[1] (Value): string. ID of the return
             * resolution that created this order as a replacement. Omitted for orders a return did
             * not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. anyOf[1] (Value): {@link
             * OrderSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts
             * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or
             * note edits continue on a closed order. Value enum: "open", "closed". anyOf[2]
             * (Value): null.
             */
            "status"?: (("open" | "closed" | (string & {})) | (null));
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer.
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "subscription_cycle"?: ((number) | (null));
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * anyOf[1] (Value): string. Time the subscriber changed delivery after this paid
             * renewal was prepared. The order keeps its committed destination until you correct it
             * or refund and replace it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_changed_at"?: ((string) | (null));
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. anyOf[1] (Value): integer. Position
             * of this delivery among the deliveries one charge paid for, starting at 2. Null when
             * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_number"?: ((number) | (null));
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription this order bills.
             * Absent on an order that isn't from a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan this order
             * bills. Absent on an order that isn't from a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. Always present with merchant
             * credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts now, independent of
             * permissions. Includes close when closure is allowed, and pay while open without an
             * active attempt and with an outstanding balance or payment-method setup available.
             * Always present with merchant credentials. [] enum: "close", "pay",
             * "resolve_inventory_exception". anyOf[1][] (Value): string. Value enum: "close",
             * "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. anyOf[1] (Value): {@link OrderTaxPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. anyOf[1] (Value): {@link TicketedEventPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@link
             * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and
             * refunded amounts. A tip cleared before payment stays listed as canceled. anyOf[1][]
             * (Value): {@link TipPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. anyOf[1]
             * (Value): integer. Order version for optimistic concurrency. Send this value as the
             * expected version when changing the order. Increases with every change to the order.
             * Ignore an order webhook snapshot whose version is lower than one you have already
             * applied. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string) | (null));
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string) | (null));
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            "closed_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            "governing_delivery_selection_id"?: ((string) | (null));
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            "internal_note"?: ((string) | (null));
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            "inventory_exception_resolution_message"?: ((string) | (null));
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            "paid_at"?: ((string) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string) | (null));
            "prepayment_order_id"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number) | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.inventory_exception_resolved";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string) | (null));
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string) | (null));
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            "closed_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            "governing_delivery_selection_id"?: ((string) | (null));
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            "internal_note"?: ((string) | (null));
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            "inventory_exception_resolution_message"?: ((string) | (null));
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            "paid_at"?: ((string) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string) | (null));
            "prepayment_order_id"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number) | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_payment_review_id (Optional): string or null. The earliest open
     * or resolving payment review on this order's counted payments. `null` when no review is open
     * or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for
     * buyer credentials. Always present with merchant credentials.
     * previous_attributes.active_payment_review_id.anyOf[1] (Value): string. The earliest open or
     * resolving payment review on this order's counted payments. `null` when no review is open or
     * resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for
     * buyer credentials. Always present with merchant credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.active_payment_review_id.anyOf[2]
     * (Value): null. previous_attributes.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and still
     * capturable on the order's payments. previous_attributes.authorization_amounts.anyOf[1]
     * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}.
     * previous_attributes.authorization_amounts.anyOf[2] (Value): null.
     * previous_attributes.buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes}
     * or null. Email and phone saved when payment started, from the pay request's buyer_contact or
     * the paying checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[1] (Value): {@link
     * CheckoutBuyerContactPreviousAttributes}. previous_attributes.buyer_contact.anyOf[2] (Value):
     * null. previous_attributes.buyer_note (Optional): string or null. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[1] (Value): string. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[2] (Value): null. previous_attributes.charges
     * (Optional): Array of {@link OrderChargePreviousAttributes} or null. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
     * fees, each with its applied amount, tax, and refunded amount.
     * previous_attributes.charges.anyOf[1][] (Value): {@link OrderChargePreviousAttributes}.
     * previous_attributes.charges.anyOf[2] (Value): null. previous_attributes.checkout_session_ids
     * (Optional): Array of string or null. IDs of the checkout sessions opened for this order.
     * previous_attributes.checkout_session_ids.anyOf[1] (Value): Array of string. IDs of the
     * checkout sessions opened for this order. previous_attributes.checkout_session_ids.anyOf[1][]
     * (Value): string. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_ids.anyOf[2] (Value): null.
     * previous_attributes.client_reference (Optional): string or null. The reference the payment
     * link URL or resolve request carried, such as your user ID. `null` when none was sent or
     * checkout did not start from a payment link. Returned only to merchant credentials; omitted
     * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of
     * identity. Always present with merchant credentials.
     * previous_attributes.client_reference.anyOf[1] (Value): string. The reference the payment
     * link URL or resolve request carried, such as your user ID. `null` when none was sent or
     * checkout did not start from a payment link. Returned only to merchant credentials; omitted
     * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of
     * identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
     * previous_attributes.client_reference.anyOf[2] (Value): null. previous_attributes.closed_at
     * (Optional): string or null. When the order closed. Present exactly when status is closed.
     * Set once at the transition and never changed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. When the order closed. Present exactly when status is closed. Set once at
     * the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.closed_at.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[1] (Value): string. Why the order closed. Present
     * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
     * other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[2] (Value): null.
     * previous_attributes.closed_reason_message (Optional): string or null. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[1] (Value): string. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.custom_field_answers (Optional): Array of {@link
     * CustomFieldAnswerPreviousAttributes} or null. The buyer's answers to the payment link's
     * custom fields, recorded when checkout started, in the order the link showed the fields. Each
     * answer keeps the field's key, label, and type from that moment, so later changes to the link
     * don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when
     * the order didn't come from a payment link, the link had no custom fields, or the buyer
     * answered none. Orders created before Flint recorded answers here also return an empty list
     * and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
     * the answers. Returned only to merchant credentials; omitted for buyer credentials. Always
     * present with merchant credentials. previous_attributes.custom_field_answers.anyOf[1]
     * (Value): Array of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the
     * payment link's custom fields, recorded when checkout started, in the order the link showed
     * the fields. Each answer keeps the field's key, label, and type from that moment, so later
     * changes to the link don't change it. Optional fields the buyer left blank are left out.
     * Read-only. Empty when the order didn't come from a payment link, the link had no custom
     * fields, or the buyer answered none. Orders created before Flint recorded answers here also
     * return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
     * the customer removes the answers. Returned only to merchant credentials; omitted for buyer
     * credentials. Always present with merchant credentials. maxItems: 20.
     * previous_attributes.custom_field_answers.anyOf[1][] (Value): {@link
     * CustomFieldAnswerPreviousAttributes}. previous_attributes.custom_field_answers.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer this
     * order belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deferred_promotions (Optional): Array of {@link
     * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription signup.
     * They attach when the subscription is provisioned and first discount its first charged cycle.
     * They do not discount this order and are separate from discounts and order totals. Always
     * present; empty when no promotions are deferred.
     * previous_attributes.deferred_promotions.anyOf[1] (Value): Array of {@link
     * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
     * attach when the subscription is provisioned and first discount its first charged cycle. They
     * do not discount this order and are separate from discounts and order totals. Always present;
     * empty when no promotions are deferred. previous_attributes.deferred_promotions.anyOf[1][]
     * (Value): {@link DeferredPromotionPreviousAttributes}.
     * previous_attributes.deferred_promotions.anyOf[2] (Value): null. previous_attributes.delivery
     * (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order.
     * previous_attributes.delivery.anyOf[1] (Value): {@link
     * OrderDeliverySummaryPreviousAttributes}. previous_attributes.delivery.anyOf[2] (Value):
     * null. previous_attributes.delivery_destination (Optional): {@link
     * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. previous_attributes.delivery_destination.anyOf[1] (Value):
     * {@link OrderDeliveryDestinationPreviousAttributes}.
     * previous_attributes.delivery_destination.anyOf[2] (Value): null.
     * previous_attributes.discounts (Optional): Array of {@link OrderDiscountPreviousAttributes}
     * or null. Discounts applied to the order, each with its amount, status, and the line items
     * and charges it covers. previous_attributes.discounts.anyOf[1] (Value): Array of {@link
     * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
     * status, and the line items and charges it covers. previous_attributes.discounts.anyOf[1][]
     * (Value): {@link OrderDiscountPreviousAttributes}. previous_attributes.discounts.anyOf[2]
     * (Value): null. previous_attributes.dispute_status (Optional): string or null. Aggregate
     * dispute state across the order's counted payment intents, excluding payment_returned. Always
     * returned to merchant credentials and omitted from buyer reads. Open states take precedence
     * in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
     * other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed;
     * none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[1] (Value): string. Aggregate dispute state across
     * the order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
     * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_status (Optional): string or null. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[1] (Value): string. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[2] (Value): null.
     * previous_attributes.fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
     * or null. Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1] (Value): Array of {@link
     * FulfillmentPreviousAttributes}. Fulfillments created for the order, each covering a set of
     * its line items. previous_attributes.fulfillments.anyOf[1][] (Value): {@link
     * FulfillmentPreviousAttributes}. previous_attributes.fulfillments.anyOf[2] (Value): null.
     * previous_attributes.gift_card_estimate (Optional): {@link
     * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
     * splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[1] (Value): {@link
     * OrderGiftCardEstimatePreviousAttributes}. previous_attributes.gift_card_estimate.anyOf[2]
     * (Value): null. previous_attributes.gift_card_settlements (Optional): Array of {@link
     * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1] (Value): Array of
     * {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1][] (Value): {@link
     * OrderGiftCardSettlementPreviousAttributes}.
     * previous_attributes.gift_card_settlements.anyOf[2] (Value): null.
     * previous_attributes.gift_card_tender_enabled (Optional): boolean or null. Whether gift cards
     * can pay for this order now. Gift cards pay only USD orders that still accept changes, are
     * not subscription purchases, and whose merchant has at least one gift card that is not closed
     * in this environment. Gift cards cannot fund gift card purchases; this is false when those
     * purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent
     * but open card still counts. previous_attributes.gift_card_tender_enabled.anyOf[1] (Value):
     * boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that
     * still accept changes, are not subscription purchases, and whose merchant has at least one
     * gift card that is not closed in this environment. Gift cards cannot fund gift card
     * purchases; this is false when those purchases leave no amount eligible for gift card tender.
     * Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[2] (Value): null.
     * previous_attributes.gift_cards (Optional): Array of {@link
     * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1] (Value): Array
     * of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1][] (Value):
     * {@link OrderGiftCardSelectionPreviousAttributes}. previous_attributes.gift_cards.anyOf[2]
     * (Value): null. previous_attributes.governing_delivery_selection_id (Optional): string or
     * null. ID of the delivery selection that governs this order, including pickup choices without
     * a delivery destination: the checkout's provisional selection before payment, and the
     * selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection.
     * previous_attributes.governing_delivery_selection_id.anyOf[1] (Value): string. ID of the
     * delivery selection that governs this order, including pickup choices without a delivery
     * destination: the checkout's provisional selection before payment, and the selection a
     * payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.governing_delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.handover (Optional): {@link OrderHandoverPreviousAttributes} or null.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. previous_attributes.handover.anyOf[1]
     * (Value): {@link OrderHandoverPreviousAttributes}. previous_attributes.handover.anyOf[2]
     * (Value): null. previous_attributes.internal_note (Optional): string or null. A note for your
     * team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[1] (Value): string.
     * A note for your team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[2]
     * (Value): null. previous_attributes.inventory_exception_reason (Optional): string or null.
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[1] (Value): string. Why inventory could
     * not be committed after payment. The cause remains after resolution. Omitted when no reason
     * was recorded. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_resolution_message (Optional): string or null. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[1] (Value): string. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_status (Optional): string or null. Whether an
     * inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[1] (Value): string. Whether
     * an inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. The reservation
     * holding stock for this order, when one exists.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. The reservation
     * holding stock for this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked demand is
     * routed. Required before an order containing tracked variants can hold stock.
     * previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice associated with this
     * order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding
     * an invoice preserves it. previous_attributes.invoice_id.anyOf[1] (Value): string. The
     * invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link OrderLineItemPreviousAttributes}
     * or null. Items the order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
     * fulfillment quantities. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * OrderLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. ID of the merchant this resource
     * belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant
     * this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Unique identifier for this order,
     * prefixed `ord_`. previous_attributes.order_id.anyOf[1] (Value): string. Unique identifier
     * for this order, prefixed `ord_`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable order number for receipts and merchant reference.
     * previous_attributes.order_number.anyOf[1] (Value): string. Human-readable order number for
     * receipts and merchant reference. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.origin (Optional): string or null. How the order was created. invoice
     * means a Quick Pay invoice created the order; attaching an invoice to an existing order
     * preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". previous_attributes.origin.anyOf[1] (Value): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". previous_attributes.origin.anyOf[2] (Value):
     * null. previous_attributes.paid_at (Optional): string or null. When `payment_status` became
     * `paid`, including a final capture that releases the remaining balance. Set once and never
     * changed, including after refunds. `null` when `payment_status` isn't `paid`, including an
     * order whose balance was written off without being paid. previous_attributes.paid_at.anyOf[1]
     * (Value): string. When `payment_status` became `paid`, including a final capture that
     * releases the remaining balance. Set once and never changed, including after refunds. `null`
     * when `payment_status` isn't `paid`, including an order whose balance was written off without
     * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_intent_ids
     * (Optional): Array of string or null. IDs of the payment intents created to collect this
     * order. previous_attributes.payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the
     * payment intents created to collect this order.
     * previous_attributes.payment_intent_ids.anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_ids.anyOf[2] (Value):
     * null. previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
     * `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1] (Value):
     * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included
     * when `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1][]
     * (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_status (Optional): string or null. Collection progress. An
     * invoice write-off also completes collection without receiving the written-off amount. Value
     * enum: "unpaid", "partially_paid", "paid". previous_attributes.payment_status.anyOf[1]
     * (Value): string. Collection progress. An invoice write-off also completes collection without
     * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * previous_attributes.payment_status.anyOf[2] (Value): null.
     * previous_attributes.pending_order_edit_id (Optional): string or null. The order edit waiting
     * for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials.
     * previous_attributes.pending_order_edit_id.anyOf[1] (Value): string. The order edit waiting
     * for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.pending_order_edit_id.anyOf[2]
     * (Value): null. previous_attributes.prepayment_order_id (Optional): string or null. Order
     * that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * previous_attributes.prepayment_order_id.anyOf[1] (Value): string. Order that paid for this
     * prepaid delivery. Null when this is not a prepaid delivery order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.prepayment_order_id.anyOf[2] (Value):
     * null. previous_attributes.pricing_amounts (Optional): {@link
     * PricingAmountsPreviousAttributes} or null. The order's money totals: subtotal, discounts,
     * charges, tax, requested tip, and total. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the refunds that name this order. This includes
     * refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`),
     * which never count toward `refund_status` or the order's refunded amounts.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that
     * name this order. This includes refunds Flint makes to return a payment it couldn't accept
     * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
     * refunded amounts. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.return_credit_settlements (Optional): Array of {@link
     * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
     * items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1]
     * (Value): Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
     * this order from items the buyer returned, such as an exchange's replacement order. Included
     * in settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1][]
     * (Value): {@link OrderReturnCreditSettlementPreviousAttributes}.
     * previous_attributes.return_credit_settlements.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. previous_attributes.return_resolution_id.anyOf[1] (Value): string. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * OrderSettlementAmountsPreviousAttributes} or null. How much of the order has been paid,
     * refunded, credited, written off, and settled as tips, and what is still outstanding.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * OrderSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Whether the order
     * still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and
     * metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription
     * (Optional): {@link ExpandedSubscriptionSummaryPreviousAttributes} or null. Subscription
     * summary included when `expand` names `subscription`; `null` when expanded and this order
     * does not bill a subscription. Present only when `expand` includes `subscription`; `null`
     * when expanded and there is no related subscription.
     * previous_attributes.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummaryPreviousAttributes}. previous_attributes.subscription.anyOf[2]
     * (Value): null. previous_attributes.subscription_cycle (Optional): integer or null. Charged
     * subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped
     * renewals do not advance the cycle. previous_attributes.subscription_cycle.anyOf[1] (Value):
     * integer. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
     * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * previous_attributes.subscription_cycle.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_changed_at (Optional): string or null. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it.
     * previous_attributes.subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     * previous_attributes.subscription_delivery_changed_at.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_number (Optional): integer or null. Position of
     * this delivery among the deliveries one charge paid for, starting at 2. Null when this is not
     * a prepaid delivery order. previous_attributes.subscription_delivery_number.anyOf[1] (Value):
     * integer. Position of this delivery among the deliveries one charge paid for, starting at 2.
     * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * previous_attributes.subscription_delivery_number.anyOf[2] (Value): null.
     * previous_attributes.subscription_id (Optional): string or null. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Plan summary included when
     * `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
     * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
     * expanded and there is no related subscription plan.
     * previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Includes close when closure is allowed, and pay while open without an active attempt and
     * with an outstanding balance or payment-method setup available. Always present with merchant
     * credentials. [] enum: "close", "pay", "resolve_inventory_exception".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link OrderTaxPreviousAttributes} or
     * null. The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. previous_attributes.tax.anyOf[1] (Value): {@link
     * OrderTaxPreviousAttributes}. previous_attributes.tax.anyOf[2] (Value): null.
     * previous_attributes.ticketed_event (Optional): {@link TicketedEventPreviousAttributes} or
     * null. Event and tickets this order sold through an event payment link. Absent on other
     * orders. previous_attributes.ticketed_event.anyOf[1] (Value): {@link
     * TicketedEventPreviousAttributes}. previous_attributes.ticketed_event.anyOf[2] (Value): null.
     * previous_attributes.tips (Optional): Array of {@link TipPreviousAttributes} or null. Tips on
     * the order, each with its requested, settled, and refunded amounts. A tip cleared before
     * payment stays listed as canceled. previous_attributes.tips.anyOf[1] (Value): Array of {@link
     * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and refunded
     * amounts. A tip cleared before payment stays listed as canceled.
     * previous_attributes.tips.anyOf[1][] (Value): {@link TipPreviousAttributes}.
     * previous_attributes.tips.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Order version for optimistic concurrency. Send this value as
     * the expected version when changing the order. Increases with every change to the order.
     * Ignore an order webhook snapshot whose version is lower than one you have already applied.
     * previous_attributes.version.anyOf[1] (Value): integer. Order version for optimistic
     * concurrency. Send this value as the expected version when changing the order. Increases with
     * every change to the order. Ignore an order webhook snapshot whose version is lower than one
     * you have already applied. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`,
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_payment_review_id (Optional): string or
         * null. The earliest open or resolving payment review on this order's counted payments.
         * `null` when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. active_payment_review_id.anyOf[1] (Value): string. The
         * earliest open or resolving payment review on this order's counted payments. `null` when
         * no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * active_payment_review_id.anyOf[2] (Value): null. authorization_amounts (Optional):
         * {@link OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and
         * still capturable on the order's payments. authorization_amounts.anyOf[1] (Value): {@link
         * OrderAuthorizationAmountsPreviousAttributes}. authorization_amounts.anyOf[2] (Value):
         * null. buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes} or null.
         * Email and phone saved when payment started, from the pay request's buyer_contact or the
         * paying checkout session's saved contact. It does not change the linked customer.
         * buyer_contact.anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}.
         * buyer_contact.anyOf[2] (Value): null. buyer_note (Optional): string or null. A note to
         * the buyer. buyer_note.anyOf[1] (Value): string. A note to the buyer. buyer_note.anyOf[2]
         * (Value): null. charges (Optional): Array of {@link OrderChargePreviousAttributes} or
         * null. Charges added to the order, such as delivery or service fees, each with its
         * applied amount, tax, and refunded amount. charges.anyOf[1] (Value): Array of {@link
         * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
         * fees, each with its applied amount, tax, and refunded amount. charges.anyOf[1][]
         * (Value): {@link OrderChargePreviousAttributes}. charges.anyOf[2] (Value): null.
         * checkout_session_ids (Optional): Array of string or null. IDs of the checkout sessions
         * opened for this order. checkout_session_ids.anyOf[1] (Value): Array of string. IDs of
         * the checkout sessions opened for this order. checkout_session_ids.anyOf[1][] (Value):
         * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_ids.anyOf[2] (Value):
         * null. client_reference (Optional): string or null. The reference the payment link URL or
         * resolve request carried, such as your user ID. `null` when none was sent or checkout did
         * not start from a payment link. Returned only to merchant credentials; omitted for buyer
         * credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity.
         * Always present with merchant credentials. client_reference.anyOf[1] (Value): string. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. Always present with merchant credentials.
         * minLength: 1. maxLength: 255. client_reference.anyOf[2] (Value): null. closed_at
         * (Optional): string or null. When the order closed. Present exactly when status is
         * closed. Set once at the transition and never changed. closed_at.anyOf[1] (Value):
         * string. When the order closed. Present exactly when status is closed. Set once at the
         * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * closed_at.anyOf[2] (Value): null. closed_reason (Optional): string or null. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[1] (Value): string. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[2] (Value): null.
         * closed_reason_message (Optional): string or null. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[1] (Value): string. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * custom_field_answers (Optional): Array of {@link CustomFieldAnswerPreviousAttributes} or
         * null. The buyer's answers to the payment link's custom fields, recorded when checkout
         * started, in the order the link showed the fields. Each answer keeps the field's key,
         * label, and type from that moment, so later changes to the link don't change it. Optional
         * fields the buyer left blank are left out. Read-only. Empty when the order didn't come
         * from a payment link, the link had no custom fields, or the buyer answered none. Orders
         * created before Flint recorded answers here also return an empty list and keep their
         * answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the
         * answers. Returned only to merchant credentials; omitted for buyer credentials. Always
         * present with merchant credentials. custom_field_answers.anyOf[1] (Value): Array of
         * {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment link's
         * custom fields, recorded when checkout started, in the order the link showed the fields.
         * Each answer keeps the field's key, label, and type from that moment, so later changes to
         * the link don't change it. Optional fields the buyer left blank are left out. Read-only.
         * Empty when the order didn't come from a payment link, the link had no custom fields, or
         * the buyer answered none. Orders created before Flint recorded answers here also return
         * an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the
         * customer removes the answers. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. maxItems: 20.
         * custom_field_answers.anyOf[1][] (Value): {@link CustomFieldAnswerPreviousAttributes}.
         * custom_field_answers.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary included when
         * `expand` names `customer`; `null` when expanded and no customer is linked. Present only
         * when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer this order belongs to. customer_id.anyOf[1] (Value): string. ID of the customer
         * this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2]
         * (Value): null. deferred_promotions (Optional): Array of {@link
         * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription
         * signup. They attach when the subscription is provisioned and first discount its first
         * charged cycle. They do not discount this order and are separate from discounts and order
         * totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1] (Value): Array of {@link
         * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
         * attach when the subscription is provisioned and first discount its first charged cycle.
         * They do not discount this order and are separate from discounts and order totals. Always
         * present; empty when no promotions are deferred. deferred_promotions.anyOf[1][] (Value):
         * {@link DeferredPromotionPreviousAttributes}. deferred_promotions.anyOf[2] (Value): null.
         * delivery (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method,
         * type and recipient of governing_delivery_selection_id. The address remains in
         * delivery_destination. Omitted when no shipment or local-delivery selection governs the
         * order. delivery.anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
         * delivery.anyOf[2] (Value): null. delivery_destination (Optional): {@link
         * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
         * destination committed for this order. Payment freezes this value; fulfillment recipient
         * changes do not replace it. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. delivery_destination.anyOf[1] (Value): {@link
         * OrderDeliveryDestinationPreviousAttributes}. delivery_destination.anyOf[2] (Value):
         * null. discounts (Optional): Array of {@link OrderDiscountPreviousAttributes} or null.
         * Discounts applied to the order, each with its amount, status, and the line items and
         * charges it covers. discounts.anyOf[1] (Value): Array of {@link
         * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
         * status, and the line items and charges it covers. discounts.anyOf[1][] (Value): {@link
         * OrderDiscountPreviousAttributes}. discounts.anyOf[2] (Value): null. dispute_status
         * (Optional): string or null. Aggregate dispute state across the order's counted payment
         * intents, excluding payment_returned. Always returned to merchant credentials and omitted
         * from buyer reads. Open states take precedence in this order: needs_response,
         * under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most
         * severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
         * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present
         * with merchant credentials. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". dispute_status.anyOf[1] (Value): string. Aggregate dispute
         * state across the order's counted payment intents, excluding payment_returned. Always
         * returned to merchant credentials and omitted from buyer reads. Open states take
         * precedence in this order: needs_response, under_review, inquiry_needs_response,
         * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
         * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
         * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. fulfillment_status (Optional): string or
         * null. Aggregate progress across the order's fulfillment quantities. Value enum:
         * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
         * "closed". fulfillment_status.anyOf[1] (Value): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillment_status.anyOf[2]
         * (Value): null. fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
         * or null. Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1] (Value): Array of {@link FulfillmentPreviousAttributes}.
         * Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1][] (Value): {@link FulfillmentPreviousAttributes}.
         * fulfillments.anyOf[2] (Value): null. gift_card_estimate (Optional): {@link
         * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
         * splits between gift cards and the payment processor. gift_card_estimate.anyOf[1]
         * (Value): {@link OrderGiftCardEstimatePreviousAttributes}. gift_card_estimate.anyOf[2]
         * (Value): null. gift_card_settlements (Optional): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to
         * the order's payments. gift_card_settlements.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
         * order's payments. gift_card_settlements.anyOf[1][] (Value): {@link
         * OrderGiftCardSettlementPreviousAttributes}. gift_card_settlements.anyOf[2] (Value):
         * null. gift_card_tender_enabled (Optional): boolean or null. Whether gift cards can pay
         * for this order now. Gift cards pay only USD orders that still accept changes, are not
         * subscription purchases, and whose merchant has at least one gift card that is not closed
         * in this environment. Gift cards cannot fund gift card purchases; this is false when
         * those purchases leave no amount eligible for gift card tender. Recomputed on each read;
         * a spent but open card still counts. gift_card_tender_enabled.anyOf[1] (Value): boolean.
         * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
         * accept changes, are not subscription purchases, and whose merchant has at least one gift
         * card that is not closed in this environment. Gift cards cannot fund gift card purchases;
         * this is false when those purchases leave no amount eligible for gift card tender.
         * Recomputed on each read; a spent but open card still counts.
         * gift_card_tender_enabled.anyOf[2] (Value): null. gift_cards (Optional): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the
         * order, with each card's available balance. gift_cards.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order, with
         * each card's available balance. gift_cards.anyOf[1][] (Value): {@link
         * OrderGiftCardSelectionPreviousAttributes}. gift_cards.anyOf[2] (Value): null.
         * governing_delivery_selection_id (Optional): string or null. ID of the delivery selection
         * that governs this order, including pickup choices without a delivery destination: the
         * checkout's provisional selection before payment, and the selection a payment committed
         * after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no
         * selection governs the order. While set, change the destination through the delivery
         * selection. governing_delivery_selection_id.anyOf[1] (Value): string. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". governing_delivery_selection_id.anyOf[2] (Value):
         * null. handover (Optional): {@link OrderHandoverPreviousAttributes} or null. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. handover.anyOf[1] (Value): {@link
         * OrderHandoverPreviousAttributes}. handover.anyOf[2] (Value): null. internal_note
         * (Optional): string or null. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[1] (Value): string. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[2] (Value): null. inventory_exception_reason (Optional): string or
         * null. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[1] (Value):
         * string. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[2] (Value): null.
         * inventory_exception_resolution_message (Optional): string or null. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[1] (Value): string. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[2] (Value): null.
         * inventory_exception_status (Optional): string or null. Whether an inventory problem
         * after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[1] (Value): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[2] (Value): null. inventory_reservation_id (Optional):
         * string or null. The reservation holding stock for this order, when one exists.
         * inventory_reservation_id.anyOf[1] (Value): string. The reservation holding stock for
         * this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_reservation_id.anyOf[2] (Value): null. inventory_routing_source (Optional):
         * {@link InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked
         * demand is routed. Required before an order containing tracked variants can hold stock.
         * inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. invoice_id (Optional): string or null. The invoice associated with this order.
         * Null when the order has no invoice. A replacement invoice replaces this ID; voiding an
         * invoice preserves it. invoice_id.anyOf[1] (Value): string. The invoice associated with
         * this order. Null when the order has no invoice. A replacement invoice replaces this ID;
         * voiding an invoice preserves it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * OrderLineItemPreviousAttributes} or null. Items the order sells, each with its pricing,
         * tax, and fulfillment quantities. line_items.anyOf[1] (Value): Array of {@link
         * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
         * fulfillment quantities. line_items.anyOf[1][] (Value): {@link
         * OrderLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. ID of the merchant this resource belongs to.
         * merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Unique identifier for this order, prefixed `ord_`. order_id.anyOf[1] (Value): string.
         * Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable order number for receipts and merchant
         * reference. order_number.anyOf[1] (Value): string. Human-readable order number for
         * receipts and merchant reference. order_number.anyOf[2] (Value): null. origin (Optional):
         * string or null. How the order was created. invoice means a Quick Pay invoice created the
         * order; attaching an invoice to an existing order preserves its origin. Value enum:
         * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
         * origin.anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
         * invoice created the order; attaching an invoice to an existing order preserves its
         * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
         * "subscription", "invoice". origin.anyOf[2] (Value): null. paid_at (Optional): string or
         * null. When `payment_status` became `paid`, including a final capture that releases the
         * remaining balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. paid_at.anyOf[1] (Value): string. When `payment_status` became `paid`,
         * including a final capture that releases the remaining balance. Set once and never
         * changed, including after refunds. `null` when `payment_status` isn't `paid`, including
         * an order whose balance was written off without being paid. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_intent_ids (Optional):
         * Array of string or null. IDs of the payment intents created to collect this order.
         * payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents created
         * to collect this order. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
         * `expand` names `payment_intents`. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included when `expand`
         * names `payment_intents`. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * payment_link_id (Optional): string or null. Payment link whose checkout created this
         * order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by
         * payment_link_id to list a link's orders. payment_link_id.anyOf[1] (Value): string.
         * Payment link whose checkout created this order. Absent for orders that did not come from
         * a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
         * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * payment_status (Optional): string or null. Collection progress. An invoice write-off
         * also completes collection without receiving the written-off amount. Value enum:
         * "unpaid", "partially_paid", "paid". payment_status.anyOf[1] (Value): string. Collection
         * progress. An invoice write-off also completes collection without receiving the
         * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
         * payment_status.anyOf[2] (Value): null. pending_order_edit_id (Optional): string or null.
         * The order edit waiting for its balance payment. While it is set, the units that edit
         * removes can't join a fulfillment and the order refuses another edit. `null` when there
         * is none. Omitted for buyer credentials. Always present with merchant credentials.
         * pending_order_edit_id.anyOf[1] (Value): string. The order edit waiting for its balance
         * payment. While it is set, the units that edit removes can't join a fulfillment and the
         * order refuses another edit. `null` when there is none. Omitted for buyer credentials.
         * Always present with merchant credentials. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * pending_order_edit_id.anyOf[2] (Value): null. prepayment_order_id (Optional): string or
         * null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. prepayment_order_id.anyOf[1] (Value): string. Order that paid for this
         * prepaid delivery. Null when this is not a prepaid delivery order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". prepayment_order_id.anyOf[2] (Value): null.
         * pricing_amounts (Optional): {@link PricingAmountsPreviousAttributes} or null. The
         * order's money totals: subtotal, discounts, charges, tax, requested tip, and total.
         * pricing_amounts.anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}.
         * pricing_amounts.anyOf[2] (Value): null. refund_ids (Optional): Array of string or null.
         * IDs of the refunds that name this order. This includes refunds Flint makes to return a
         * payment it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids.anyOf[1] (Value): Array of
         * string. IDs of the refunds that name this order. This includes refunds Flint makes to
         * return a payment it couldn't accept (`reason` `payment_returned`), which never count
         * toward `refund_status` or the order's refunded amounts. refund_ids.anyOf[1][] (Value):
         * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_ids.anyOf[2] (Value): null.
         * refund_status (Optional): string or null. Refund progress for collected money. Refunds
         * with `reason` `payment_returned` return money the order never received and don't count.
         * Value enum: "none", "partially_refunded", "refunded". refund_status.anyOf[1] (Value):
         * string. Refund progress for collected money. Refunds with `reason` `payment_returned`
         * return money the order never received and don't count. Value enum: "none",
         * "partially_refunded", "refunded". refund_status.anyOf[2] (Value): null.
         * return_credit_settlements (Optional): Array of {@link
         * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
         * items the buyer returned, such as an exchange's replacement order. Included in
         * settlement_amounts.paid_money. return_credit_settlements.anyOf[1] (Value): Array of
         * {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to this order from
         * items the buyer returned, such as an exchange's replacement order. Included in
         * settlement_amounts.paid_money. return_credit_settlements.anyOf[1][] (Value): {@link
         * OrderReturnCreditSettlementPreviousAttributes}. return_credit_settlements.anyOf[2]
         * (Value): null. return_resolution_id (Optional): string or null. ID of the return
         * resolution that created this order as a replacement. Omitted for orders a return did not
         * create. return_resolution_id.anyOf[1] (Value): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_id.anyOf[2] (Value):
         * null. settlement_amounts (Optional): {@link OrderSettlementAmountsPreviousAttributes} or
         * null. How much of the order has been paid, refunded, credited, written off, and settled
         * as tips, and what is still outstanding. settlement_amounts.anyOf[1] (Value): {@link
         * OrderSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2] (Value): null.
         * status (Optional): string or null. Whether the order still accepts changes and new
         * payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue
         * on a closed order. Value enum: "open", "closed". status.anyOf[1] (Value): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". status.anyOf[2] (Value): null. subscription (Optional): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes} or null. Subscription summary included
         * when `expand` names `subscription`; `null` when expanded and this order does not bill a
         * subscription. Present only when `expand` includes `subscription`; `null` when expanded
         * and there is no related subscription. subscription.anyOf[1] (Value): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes}. subscription.anyOf[2] (Value): null.
         * subscription_cycle (Optional): integer or null. Charged subscription cycle associated
         * with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance
         * the cycle. subscription_cycle.anyOf[1] (Value): integer. Charged subscription cycle
         * associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
         * not advance the cycle. Format: uint64. minimum: 0. subscription_cycle.anyOf[2] (Value):
         * null. subscription_delivery_changed_at (Optional): string or null. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it.
         * subscription_delivery_changed_at.anyOf[1] (Value): string. Time the subscriber changed
         * delivery after this paid renewal was prepared. The order keeps its committed destination
         * until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_changed_at.anyOf[2] (Value): null.
         * subscription_delivery_number (Optional): integer or null. Position of this delivery
         * among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid
         * delivery order. subscription_delivery_number.anyOf[1] (Value): integer. Position of this
         * delivery among the deliveries one charge paid for, starting at 2. Null when this is not
         * a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_delivery_number.anyOf[2] (Value): null. subscription_id (Optional): string
         * or null. ID of the subscription this order bills. Absent on an order that isn't from a
         * subscription. subscription_id.anyOf[1] (Value): string. ID of the subscription this
         * order bills. Absent on an order that isn't from a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes}
         * or null. Plan summary included when `expand` names `subscription_plan`; `null` when
         * expanded and this order does not bill a subscription plan. Present only when `expand`
         * includes `subscription_plan`; `null` when expanded and there is no related subscription
         * plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes}. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. ID of the subscription plan this
         * order bills. Absent on an order that isn't from a subscription.
         * subscription_plan_id.anyOf[1] (Value): string. ID of the subscription plan this order
         * bills. Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * now, independent of permissions. Includes close when closure is allowed, and pay while
         * open without an active attempt and with an outstanding balance or payment-method setup
         * available. Always present with merchant credentials. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions.anyOf[1] (Value): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. Always present with merchant credentials. []
         * enum: "close", "pay", "resolve_inventory_exception". supported_actions.anyOf[1][]
         * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
         * supported_actions.anyOf[2] (Value): null. tax (Optional): {@link
         * OrderTaxPreviousAttributes} or null. The order's tax state: whether tax is enabled, its
         * status, location, exemption, and per-jurisdiction rows. tax.anyOf[1] (Value): {@link
         * OrderTaxPreviousAttributes}. tax.anyOf[2] (Value): null. ticketed_event (Optional):
         * {@link TicketedEventPreviousAttributes} or null. Event and tickets this order sold
         * through an event payment link. Absent on other orders. ticketed_event.anyOf[1] (Value):
         * {@link TicketedEventPreviousAttributes}. ticketed_event.anyOf[2] (Value): null. tips
         * (Optional): Array of {@link TipPreviousAttributes} or null. Tips on the order, each with
         * its requested, settled, and refunded amounts. A tip cleared before payment stays listed
         * as canceled. tips.anyOf[1] (Value): Array of {@link TipPreviousAttributes}. Tips on the
         * order, each with its requested, settled, and refunded amounts. A tip cleared before
         * payment stays listed as canceled. tips.anyOf[1][] (Value): {@link
         * TipPreviousAttributes}. tips.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Order version for optimistic concurrency. Send this value
         * as the expected version when changing the order. Increases with every change to the
         * order. Ignore an order webhook snapshot whose version is lower than one you have already
         * applied. version.anyOf[1] (Value): integer. Order version for optimistic concurrency.
         * Send this value as the expected version when changing the order. Increases with every
         * change to the order. Ignore an order webhook snapshot whose version is lower than one
         * you have already applied. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. anyOf[1] (Value): string. The earliest open or
             * resolving payment review on this order's counted payments. `null` when no review is
             * open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open.
             * Omitted for buyer credentials. Always present with merchant credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "active_payment_review_id"?: ((string) | (null));
            /**
             * The amounts authorized and still capturable on the order's payments. anyOf[1]
             * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            /**
             * A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2]
             * (Value): null.
             */
            "buyer_note"?: ((string) | (null));
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1] (Value): Array of {@link
             * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or
             * service fees, each with its applied amount, tax, and refunded amount. anyOf[1][]
             * (Value): {@link OrderChargePreviousAttributes}. anyOf[2] (Value): null.
             */
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            /**
             * IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of
             * string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value):
             * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_ids"?: ((Array<string>) | (null));
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. Always present with merchant
             * credentials. anyOf[1] (Value): string. The reference the payment link URL or resolve
             * request carried, such as your user ID. `null` when none was sent or checkout did not
             * start from a payment link. Returned only to merchant credentials; omitted for buyer
             * credentials. Set by the buyer's browser, so treat it as a claim, not proof of
             * identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
             * anyOf[2] (Value): null.
             */
            "client_reference"?: ((string) | (null));
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. anyOf[1] (Value): string. When the order closed.
             * Present exactly when status is closed. Set once at the transition and never changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * Why the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why
             * the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
             */
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when
             * closing the order. System closures leave it absent. It is not shown to the buyer.
             * anyOf[2] (Value): null.
             */
            "closed_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array
             * of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment
             * link's custom fields, recorded when checkout started, in the order the link showed
             * the fields. Each answer keeps the field's key, label, and type from that moment, so
             * later changes to the link don't change it. Optional fields the buyer left blank are
             * left out. Read-only. Empty when the order didn't come from a payment link, the link
             * had no custom fields, or the buyer answered none. Orders created before Flint
             * recorded answers here also return an empty list and keep their answers in `metadata`
             * as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to
             * merchant credentials; omitted for buyer credentials. Always present with merchant
             * credentials. maxItems: 20. anyOf[1][] (Value): {@link
             * CustomFieldAnswerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the
             * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1] (Value): Array of {@link
             * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup.
             * They attach when the subscription is provisioned and first discount its first
             * charged cycle. They do not discount this order and are separate from discounts and
             * order totals. Always present; empty when no promotions are deferred. anyOf[1][]
             * (Value): {@link DeferredPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link OrderDeliveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. anyOf[1] (Value): Array of {@link
             * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its
             * amount, status, and the line items and charges it covers. anyOf[1][] (Value): {@link
             * OrderDiscountPreviousAttributes}. anyOf[2] (Value): null.
             */
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
             * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state
             * across the order's counted payment intents, excluding payment_returned. Always
             * returned to merchant credentials and omitted from buyer reads. Open states take
             * precedence in this order: needs_response, under_review, inquiry_needs_response,
             * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
             * prevented, inquiry_closed; none when no disputes count. List individual cases with
             * GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[2] (Value): null.
             */
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed". anyOf[1] (Value): string. Aggregate progress across the order's
             * fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
             * "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
             */
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            /**
             * Fulfillments created for the order, each covering a set of its line items. anyOf[1]
             * (Value): Array of {@link FulfillmentPreviousAttributes}. Fulfillments created for
             * the order, each covering a set of its line items. anyOf[1][] (Value): {@link
             * FulfillmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. anyOf[1] (Value): {@link OrderGiftCardEstimatePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            /**
             * The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array
             * of {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions
             * applied to the order's payments. anyOf[1][] (Value): {@link
             * OrderGiftCardSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Gift cards cannot fund
             * gift card purchases; this is false when those purchases leave no amount eligible for
             * gift card tender. Recomputed on each read; a spent but open card still counts.
             * anyOf[1] (Value): boolean. Whether gift cards can pay for this order now. Gift cards
             * pay only USD orders that still accept changes, are not subscription purchases, and
             * whose merchant has at least one gift card that is not closed in this environment.
             * Gift cards cannot fund gift card purchases; this is false when those purchases leave
             * no amount eligible for gift card tender. Recomputed on each read; a spent but open
             * card still counts. anyOf[2] (Value): null.
             */
            "gift_card_tender_enabled"?: ((boolean) | (null));
            /**
             * Gift cards available to pay the order, with each card's available balance. anyOf[1]
             * (Value): Array of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards
             * available to pay the order, with each card's available balance. anyOf[1][] (Value):
             * {@link OrderGiftCardSelectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. anyOf[1]
             * (Value): string. ID of the delivery selection that governs this order, including
             * pickup choices without a delivery destination: the checkout's provisional selection
             * before payment, and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "governing_delivery_selection_id"?: ((string) | (null));
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value):
             * {@link OrderHandoverPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            /**
             * A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for
             * your team. Buyer reads leave it out. anyOf[2] (Value): null.
             */
            "internal_note"?: ((string) | (null));
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could
             * not be committed after payment. The cause remains after resolution. Omitted when no
             * reason was recorded. Unrecognized reasons are returned as other; new values may be
             * added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
             * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
             * anyOf[2] (Value): null.
             */
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving
             * the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
             */
            "inventory_exception_resolution_message"?: ((string) | (null));
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory
             * problem after payment needs attention. Value enum: "paid_inventory_failed",
             * "resolved". anyOf[2] (Value): null.
             */
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            /**
             * The reservation holding stock for this order, when one exists. anyOf[1] (Value):
             * string. The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1]
             * (Value): string. The invoice associated with this order. Null when the order has no
             * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
             * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities.
             * anyOf[1] (Value): Array of {@link OrderLineItemPreviousAttributes}. Items the order
             * sells, each with its pricing, tax, and fulfillment quantities. anyOf[1][] (Value):
             * {@link OrderLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique
             * identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable order number for receipts and merchant reference. anyOf[1] (Value):
             * string. Human-readable order number for receipts and merchant reference. anyOf[2]
             * (Value): null.
             */
            "order_number"?: ((string) | (null));
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             * anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
             * invoice created the order; attaching an invoice to an existing order preserves its
             * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
             * "subscription", "invoice". anyOf[2] (Value): null.
             */
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. anyOf[1] (Value): string. When `payment_status` became `paid`,
             * including a final capture that releases the remaining balance. Set once and never
             * changed, including after refunds. `null` when `payment_status` isn't `paid`,
             * including an order whose balance was written off without being paid. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of
             * string. IDs of the payment intents created to collect this order. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value):
             * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents
             * included when `expand` names `payment_intents`. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. anyOf[1] (Value): string. Payment link whose checkout created this order.
             * Absent for orders that did not come from a payment link. Filter GET /v1/orders by
             * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             * anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             * anyOf[1] (Value): string. Collection progress. An invoice write-off also completes
             * collection without receiving the written-off amount. Value enum: "unpaid",
             * "partially_paid", "paid". anyOf[2] (Value): null.
             */
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            /**
             * The order edit waiting for its balance payment. While it is set, the units that edit
             * removes can't join a fulfillment and the order refuses another edit. `null` when
             * there is none. Omitted for buyer credentials. Always present with merchant
             * credentials. anyOf[1] (Value): string. The order edit waiting for its balance
             * payment. While it is set, the units that edit removes can't join a fulfillment and
             * the order refuses another edit. `null` when there is none. Omitted for buyer
             * credentials. Always present with merchant credentials. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "pending_order_edit_id"?: ((string) | (null));
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. anyOf[1] (Value): string. Order that paid for this prepaid delivery. Null
             * when this is not a prepaid delivery order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "prepayment_order_id"?: ((string) | (null));
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string.
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string.
             * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for
             * collected money. Refunds with `reason` `payment_returned` return money the order
             * never received and don't count. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value):
             * Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
             * this order from items the buyer returned, such as an exchange's replacement order.
             * Included in settlement_amounts.paid_money. anyOf[1][] (Value): {@link
             * OrderReturnCreditSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. anyOf[1] (Value): string. ID of the return
             * resolution that created this order as a replacement. Omitted for orders a return did
             * not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. anyOf[1] (Value): {@link
             * OrderSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts
             * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or
             * note edits continue on a closed order. Value enum: "open", "closed". anyOf[2]
             * (Value): null.
             */
            "status"?: (("open" | "closed" | (string & {})) | (null));
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer.
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "subscription_cycle"?: ((number) | (null));
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * anyOf[1] (Value): string. Time the subscriber changed delivery after this paid
             * renewal was prepared. The order keeps its committed destination until you correct it
             * or refund and replace it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_changed_at"?: ((string) | (null));
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. anyOf[1] (Value): integer. Position
             * of this delivery among the deliveries one charge paid for, starting at 2. Null when
             * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_number"?: ((number) | (null));
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription this order bills.
             * Absent on an order that isn't from a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan this order
             * bills. Absent on an order that isn't from a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. Always present with merchant
             * credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts now, independent of
             * permissions. Includes close when closure is allowed, and pay while open without an
             * active attempt and with an outstanding balance or payment-method setup available.
             * Always present with merchant credentials. [] enum: "close", "pay",
             * "resolve_inventory_exception". anyOf[1][] (Value): string. Value enum: "close",
             * "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. anyOf[1] (Value): {@link OrderTaxPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. anyOf[1] (Value): {@link TicketedEventPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@link
             * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and
             * refunded amounts. A tip cleared before payment stays listed as canceled. anyOf[1][]
             * (Value): {@link TipPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. anyOf[1]
             * (Value): integer. Order version for optimistic concurrency. Send this value as the
             * expected version when changing the order. Increases with every change to the order.
             * Ignore an order webhook snapshot whose version is lower than one you have already
             * applied. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_payment_review_id (Optional): string or null. The earliest open
     * or resolving payment review on this order's counted payments. `null` when no review is open
     * or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for
     * buyer credentials. Always present with merchant credentials.
     * previous_attributes.active_payment_review_id.anyOf[1] (Value): string. The earliest open or
     * resolving payment review on this order's counted payments. `null` when no review is open or
     * resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for
     * buyer credentials. Always present with merchant credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.active_payment_review_id.anyOf[2]
     * (Value): null. previous_attributes.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and still
     * capturable on the order's payments. previous_attributes.authorization_amounts.anyOf[1]
     * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}.
     * previous_attributes.authorization_amounts.anyOf[2] (Value): null.
     * previous_attributes.buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes}
     * or null. Email and phone saved when payment started, from the pay request's buyer_contact or
     * the paying checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[1] (Value): {@link
     * CheckoutBuyerContactPreviousAttributes}. previous_attributes.buyer_contact.anyOf[2] (Value):
     * null. previous_attributes.buyer_note (Optional): string or null. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[1] (Value): string. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[2] (Value): null. previous_attributes.charges
     * (Optional): Array of {@link OrderChargePreviousAttributes} or null. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
     * fees, each with its applied amount, tax, and refunded amount.
     * previous_attributes.charges.anyOf[1][] (Value): {@link OrderChargePreviousAttributes}.
     * previous_attributes.charges.anyOf[2] (Value): null. previous_attributes.checkout_session_ids
     * (Optional): Array of string or null. IDs of the checkout sessions opened for this order.
     * previous_attributes.checkout_session_ids.anyOf[1] (Value): Array of string. IDs of the
     * checkout sessions opened for this order. previous_attributes.checkout_session_ids.anyOf[1][]
     * (Value): string. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_ids.anyOf[2] (Value): null.
     * previous_attributes.client_reference (Optional): string or null. The reference the payment
     * link URL or resolve request carried, such as your user ID. `null` when none was sent or
     * checkout did not start from a payment link. Returned only to merchant credentials; omitted
     * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of
     * identity. Always present with merchant credentials.
     * previous_attributes.client_reference.anyOf[1] (Value): string. The reference the payment
     * link URL or resolve request carried, such as your user ID. `null` when none was sent or
     * checkout did not start from a payment link. Returned only to merchant credentials; omitted
     * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of
     * identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
     * previous_attributes.client_reference.anyOf[2] (Value): null. previous_attributes.closed_at
     * (Optional): string or null. When the order closed. Present exactly when status is closed.
     * Set once at the transition and never changed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. When the order closed. Present exactly when status is closed. Set once at
     * the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.closed_at.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[1] (Value): string. Why the order closed. Present
     * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
     * other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[2] (Value): null.
     * previous_attributes.closed_reason_message (Optional): string or null. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[1] (Value): string. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.custom_field_answers (Optional): Array of {@link
     * CustomFieldAnswerPreviousAttributes} or null. The buyer's answers to the payment link's
     * custom fields, recorded when checkout started, in the order the link showed the fields. Each
     * answer keeps the field's key, label, and type from that moment, so later changes to the link
     * don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when
     * the order didn't come from a payment link, the link had no custom fields, or the buyer
     * answered none. Orders created before Flint recorded answers here also return an empty list
     * and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
     * the answers. Returned only to merchant credentials; omitted for buyer credentials. Always
     * present with merchant credentials. previous_attributes.custom_field_answers.anyOf[1]
     * (Value): Array of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the
     * payment link's custom fields, recorded when checkout started, in the order the link showed
     * the fields. Each answer keeps the field's key, label, and type from that moment, so later
     * changes to the link don't change it. Optional fields the buyer left blank are left out.
     * Read-only. Empty when the order didn't come from a payment link, the link had no custom
     * fields, or the buyer answered none. Orders created before Flint recorded answers here also
     * return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
     * the customer removes the answers. Returned only to merchant credentials; omitted for buyer
     * credentials. Always present with merchant credentials. maxItems: 20.
     * previous_attributes.custom_field_answers.anyOf[1][] (Value): {@link
     * CustomFieldAnswerPreviousAttributes}. previous_attributes.custom_field_answers.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer this
     * order belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deferred_promotions (Optional): Array of {@link
     * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription signup.
     * They attach when the subscription is provisioned and first discount its first charged cycle.
     * They do not discount this order and are separate from discounts and order totals. Always
     * present; empty when no promotions are deferred.
     * previous_attributes.deferred_promotions.anyOf[1] (Value): Array of {@link
     * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
     * attach when the subscription is provisioned and first discount its first charged cycle. They
     * do not discount this order and are separate from discounts and order totals. Always present;
     * empty when no promotions are deferred. previous_attributes.deferred_promotions.anyOf[1][]
     * (Value): {@link DeferredPromotionPreviousAttributes}.
     * previous_attributes.deferred_promotions.anyOf[2] (Value): null. previous_attributes.delivery
     * (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order.
     * previous_attributes.delivery.anyOf[1] (Value): {@link
     * OrderDeliverySummaryPreviousAttributes}. previous_attributes.delivery.anyOf[2] (Value):
     * null. previous_attributes.delivery_destination (Optional): {@link
     * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. previous_attributes.delivery_destination.anyOf[1] (Value):
     * {@link OrderDeliveryDestinationPreviousAttributes}.
     * previous_attributes.delivery_destination.anyOf[2] (Value): null.
     * previous_attributes.discounts (Optional): Array of {@link OrderDiscountPreviousAttributes}
     * or null. Discounts applied to the order, each with its amount, status, and the line items
     * and charges it covers. previous_attributes.discounts.anyOf[1] (Value): Array of {@link
     * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
     * status, and the line items and charges it covers. previous_attributes.discounts.anyOf[1][]
     * (Value): {@link OrderDiscountPreviousAttributes}. previous_attributes.discounts.anyOf[2]
     * (Value): null. previous_attributes.dispute_status (Optional): string or null. Aggregate
     * dispute state across the order's counted payment intents, excluding payment_returned. Always
     * returned to merchant credentials and omitted from buyer reads. Open states take precedence
     * in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
     * other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed;
     * none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[1] (Value): string. Aggregate dispute state across
     * the order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
     * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_status (Optional): string or null. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[1] (Value): string. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[2] (Value): null.
     * previous_attributes.fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
     * or null. Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1] (Value): Array of {@link
     * FulfillmentPreviousAttributes}. Fulfillments created for the order, each covering a set of
     * its line items. previous_attributes.fulfillments.anyOf[1][] (Value): {@link
     * FulfillmentPreviousAttributes}. previous_attributes.fulfillments.anyOf[2] (Value): null.
     * previous_attributes.gift_card_estimate (Optional): {@link
     * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
     * splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[1] (Value): {@link
     * OrderGiftCardEstimatePreviousAttributes}. previous_attributes.gift_card_estimate.anyOf[2]
     * (Value): null. previous_attributes.gift_card_settlements (Optional): Array of {@link
     * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1] (Value): Array of
     * {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1][] (Value): {@link
     * OrderGiftCardSettlementPreviousAttributes}.
     * previous_attributes.gift_card_settlements.anyOf[2] (Value): null.
     * previous_attributes.gift_card_tender_enabled (Optional): boolean or null. Whether gift cards
     * can pay for this order now. Gift cards pay only USD orders that still accept changes, are
     * not subscription purchases, and whose merchant has at least one gift card that is not closed
     * in this environment. Gift cards cannot fund gift card purchases; this is false when those
     * purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent
     * but open card still counts. previous_attributes.gift_card_tender_enabled.anyOf[1] (Value):
     * boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that
     * still accept changes, are not subscription purchases, and whose merchant has at least one
     * gift card that is not closed in this environment. Gift cards cannot fund gift card
     * purchases; this is false when those purchases leave no amount eligible for gift card tender.
     * Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[2] (Value): null.
     * previous_attributes.gift_cards (Optional): Array of {@link
     * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1] (Value): Array
     * of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1][] (Value):
     * {@link OrderGiftCardSelectionPreviousAttributes}. previous_attributes.gift_cards.anyOf[2]
     * (Value): null. previous_attributes.governing_delivery_selection_id (Optional): string or
     * null. ID of the delivery selection that governs this order, including pickup choices without
     * a delivery destination: the checkout's provisional selection before payment, and the
     * selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection.
     * previous_attributes.governing_delivery_selection_id.anyOf[1] (Value): string. ID of the
     * delivery selection that governs this order, including pickup choices without a delivery
     * destination: the checkout's provisional selection before payment, and the selection a
     * payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.governing_delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.handover (Optional): {@link OrderHandoverPreviousAttributes} or null.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. previous_attributes.handover.anyOf[1]
     * (Value): {@link OrderHandoverPreviousAttributes}. previous_attributes.handover.anyOf[2]
     * (Value): null. previous_attributes.internal_note (Optional): string or null. A note for your
     * team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[1] (Value): string.
     * A note for your team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[2]
     * (Value): null. previous_attributes.inventory_exception_reason (Optional): string or null.
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[1] (Value): string. Why inventory could
     * not be committed after payment. The cause remains after resolution. Omitted when no reason
     * was recorded. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_resolution_message (Optional): string or null. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[1] (Value): string. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_status (Optional): string or null. Whether an
     * inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[1] (Value): string. Whether
     * an inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. The reservation
     * holding stock for this order, when one exists.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. The reservation
     * holding stock for this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked demand is
     * routed. Required before an order containing tracked variants can hold stock.
     * previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice associated with this
     * order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding
     * an invoice preserves it. previous_attributes.invoice_id.anyOf[1] (Value): string. The
     * invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link OrderLineItemPreviousAttributes}
     * or null. Items the order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
     * fulfillment quantities. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * OrderLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. ID of the merchant this resource
     * belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant
     * this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Unique identifier for this order,
     * prefixed `ord_`. previous_attributes.order_id.anyOf[1] (Value): string. Unique identifier
     * for this order, prefixed `ord_`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable order number for receipts and merchant reference.
     * previous_attributes.order_number.anyOf[1] (Value): string. Human-readable order number for
     * receipts and merchant reference. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.origin (Optional): string or null. How the order was created. invoice
     * means a Quick Pay invoice created the order; attaching an invoice to an existing order
     * preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". previous_attributes.origin.anyOf[1] (Value): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". previous_attributes.origin.anyOf[2] (Value):
     * null. previous_attributes.paid_at (Optional): string or null. When `payment_status` became
     * `paid`, including a final capture that releases the remaining balance. Set once and never
     * changed, including after refunds. `null` when `payment_status` isn't `paid`, including an
     * order whose balance was written off without being paid. previous_attributes.paid_at.anyOf[1]
     * (Value): string. When `payment_status` became `paid`, including a final capture that
     * releases the remaining balance. Set once and never changed, including after refunds. `null`
     * when `payment_status` isn't `paid`, including an order whose balance was written off without
     * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_intent_ids
     * (Optional): Array of string or null. IDs of the payment intents created to collect this
     * order. previous_attributes.payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the
     * payment intents created to collect this order.
     * previous_attributes.payment_intent_ids.anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_ids.anyOf[2] (Value):
     * null. previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
     * `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1] (Value):
     * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included
     * when `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1][]
     * (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_status (Optional): string or null. Collection progress. An
     * invoice write-off also completes collection without receiving the written-off amount. Value
     * enum: "unpaid", "partially_paid", "paid". previous_attributes.payment_status.anyOf[1]
     * (Value): string. Collection progress. An invoice write-off also completes collection without
     * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * previous_attributes.payment_status.anyOf[2] (Value): null.
     * previous_attributes.pending_order_edit_id (Optional): string or null. The order edit waiting
     * for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials.
     * previous_attributes.pending_order_edit_id.anyOf[1] (Value): string. The order edit waiting
     * for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.pending_order_edit_id.anyOf[2]
     * (Value): null. previous_attributes.prepayment_order_id (Optional): string or null. Order
     * that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * previous_attributes.prepayment_order_id.anyOf[1] (Value): string. Order that paid for this
     * prepaid delivery. Null when this is not a prepaid delivery order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.prepayment_order_id.anyOf[2] (Value):
     * null. previous_attributes.pricing_amounts (Optional): {@link
     * PricingAmountsPreviousAttributes} or null. The order's money totals: subtotal, discounts,
     * charges, tax, requested tip, and total. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the refunds that name this order. This includes
     * refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`),
     * which never count toward `refund_status` or the order's refunded amounts.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that
     * name this order. This includes refunds Flint makes to return a payment it couldn't accept
     * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
     * refunded amounts. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.return_credit_settlements (Optional): Array of {@link
     * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
     * items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1]
     * (Value): Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
     * this order from items the buyer returned, such as an exchange's replacement order. Included
     * in settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1][]
     * (Value): {@link OrderReturnCreditSettlementPreviousAttributes}.
     * previous_attributes.return_credit_settlements.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. previous_attributes.return_resolution_id.anyOf[1] (Value): string. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * OrderSettlementAmountsPreviousAttributes} or null. How much of the order has been paid,
     * refunded, credited, written off, and settled as tips, and what is still outstanding.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * OrderSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Whether the order
     * still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and
     * metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription
     * (Optional): {@link ExpandedSubscriptionSummaryPreviousAttributes} or null. Subscription
     * summary included when `expand` names `subscription`; `null` when expanded and this order
     * does not bill a subscription. Present only when `expand` includes `subscription`; `null`
     * when expanded and there is no related subscription.
     * previous_attributes.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummaryPreviousAttributes}. previous_attributes.subscription.anyOf[2]
     * (Value): null. previous_attributes.subscription_cycle (Optional): integer or null. Charged
     * subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped
     * renewals do not advance the cycle. previous_attributes.subscription_cycle.anyOf[1] (Value):
     * integer. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
     * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * previous_attributes.subscription_cycle.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_changed_at (Optional): string or null. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it.
     * previous_attributes.subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     * previous_attributes.subscription_delivery_changed_at.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_number (Optional): integer or null. Position of
     * this delivery among the deliveries one charge paid for, starting at 2. Null when this is not
     * a prepaid delivery order. previous_attributes.subscription_delivery_number.anyOf[1] (Value):
     * integer. Position of this delivery among the deliveries one charge paid for, starting at 2.
     * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * previous_attributes.subscription_delivery_number.anyOf[2] (Value): null.
     * previous_attributes.subscription_id (Optional): string or null. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Plan summary included when
     * `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
     * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
     * expanded and there is no related subscription plan.
     * previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Includes close when closure is allowed, and pay while open without an active attempt and
     * with an outstanding balance or payment-method setup available. Always present with merchant
     * credentials. [] enum: "close", "pay", "resolve_inventory_exception".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link OrderTaxPreviousAttributes} or
     * null. The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. previous_attributes.tax.anyOf[1] (Value): {@link
     * OrderTaxPreviousAttributes}. previous_attributes.tax.anyOf[2] (Value): null.
     * previous_attributes.ticketed_event (Optional): {@link TicketedEventPreviousAttributes} or
     * null. Event and tickets this order sold through an event payment link. Absent on other
     * orders. previous_attributes.ticketed_event.anyOf[1] (Value): {@link
     * TicketedEventPreviousAttributes}. previous_attributes.ticketed_event.anyOf[2] (Value): null.
     * previous_attributes.tips (Optional): Array of {@link TipPreviousAttributes} or null. Tips on
     * the order, each with its requested, settled, and refunded amounts. A tip cleared before
     * payment stays listed as canceled. previous_attributes.tips.anyOf[1] (Value): Array of {@link
     * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and refunded
     * amounts. A tip cleared before payment stays listed as canceled.
     * previous_attributes.tips.anyOf[1][] (Value): {@link TipPreviousAttributes}.
     * previous_attributes.tips.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Order version for optimistic concurrency. Send this value as
     * the expected version when changing the order. Increases with every change to the order.
     * Ignore an order webhook snapshot whose version is lower than one you have already applied.
     * previous_attributes.version.anyOf[1] (Value): integer. Order version for optimistic
     * concurrency. Send this value as the expected version when changing the order. Increases with
     * every change to the order. Ignore an order webhook snapshot whose version is lower than one
     * you have already applied. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`,
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_payment_review_id (Optional): string or
         * null. The earliest open or resolving payment review on this order's counted payments.
         * `null` when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. active_payment_review_id.anyOf[1] (Value): string. The
         * earliest open or resolving payment review on this order's counted payments. `null` when
         * no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * active_payment_review_id.anyOf[2] (Value): null. authorization_amounts (Optional):
         * {@link OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and
         * still capturable on the order's payments. authorization_amounts.anyOf[1] (Value): {@link
         * OrderAuthorizationAmountsPreviousAttributes}. authorization_amounts.anyOf[2] (Value):
         * null. buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes} or null.
         * Email and phone saved when payment started, from the pay request's buyer_contact or the
         * paying checkout session's saved contact. It does not change the linked customer.
         * buyer_contact.anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}.
         * buyer_contact.anyOf[2] (Value): null. buyer_note (Optional): string or null. A note to
         * the buyer. buyer_note.anyOf[1] (Value): string. A note to the buyer. buyer_note.anyOf[2]
         * (Value): null. charges (Optional): Array of {@link OrderChargePreviousAttributes} or
         * null. Charges added to the order, such as delivery or service fees, each with its
         * applied amount, tax, and refunded amount. charges.anyOf[1] (Value): Array of {@link
         * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
         * fees, each with its applied amount, tax, and refunded amount. charges.anyOf[1][]
         * (Value): {@link OrderChargePreviousAttributes}. charges.anyOf[2] (Value): null.
         * checkout_session_ids (Optional): Array of string or null. IDs of the checkout sessions
         * opened for this order. checkout_session_ids.anyOf[1] (Value): Array of string. IDs of
         * the checkout sessions opened for this order. checkout_session_ids.anyOf[1][] (Value):
         * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_ids.anyOf[2] (Value):
         * null. client_reference (Optional): string or null. The reference the payment link URL or
         * resolve request carried, such as your user ID. `null` when none was sent or checkout did
         * not start from a payment link. Returned only to merchant credentials; omitted for buyer
         * credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity.
         * Always present with merchant credentials. client_reference.anyOf[1] (Value): string. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. Always present with merchant credentials.
         * minLength: 1. maxLength: 255. client_reference.anyOf[2] (Value): null. closed_at
         * (Optional): string or null. When the order closed. Present exactly when status is
         * closed. Set once at the transition and never changed. closed_at.anyOf[1] (Value):
         * string. When the order closed. Present exactly when status is closed. Set once at the
         * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * closed_at.anyOf[2] (Value): null. closed_reason (Optional): string or null. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[1] (Value): string. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[2] (Value): null.
         * closed_reason_message (Optional): string or null. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[1] (Value): string. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * custom_field_answers (Optional): Array of {@link CustomFieldAnswerPreviousAttributes} or
         * null. The buyer's answers to the payment link's custom fields, recorded when checkout
         * started, in the order the link showed the fields. Each answer keeps the field's key,
         * label, and type from that moment, so later changes to the link don't change it. Optional
         * fields the buyer left blank are left out. Read-only. Empty when the order didn't come
         * from a payment link, the link had no custom fields, or the buyer answered none. Orders
         * created before Flint recorded answers here also return an empty list and keep their
         * answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the
         * answers. Returned only to merchant credentials; omitted for buyer credentials. Always
         * present with merchant credentials. custom_field_answers.anyOf[1] (Value): Array of
         * {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment link's
         * custom fields, recorded when checkout started, in the order the link showed the fields.
         * Each answer keeps the field's key, label, and type from that moment, so later changes to
         * the link don't change it. Optional fields the buyer left blank are left out. Read-only.
         * Empty when the order didn't come from a payment link, the link had no custom fields, or
         * the buyer answered none. Orders created before Flint recorded answers here also return
         * an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the
         * customer removes the answers. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. maxItems: 20.
         * custom_field_answers.anyOf[1][] (Value): {@link CustomFieldAnswerPreviousAttributes}.
         * custom_field_answers.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary included when
         * `expand` names `customer`; `null` when expanded and no customer is linked. Present only
         * when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer this order belongs to. customer_id.anyOf[1] (Value): string. ID of the customer
         * this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2]
         * (Value): null. deferred_promotions (Optional): Array of {@link
         * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription
         * signup. They attach when the subscription is provisioned and first discount its first
         * charged cycle. They do not discount this order and are separate from discounts and order
         * totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1] (Value): Array of {@link
         * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
         * attach when the subscription is provisioned and first discount its first charged cycle.
         * They do not discount this order and are separate from discounts and order totals. Always
         * present; empty when no promotions are deferred. deferred_promotions.anyOf[1][] (Value):
         * {@link DeferredPromotionPreviousAttributes}. deferred_promotions.anyOf[2] (Value): null.
         * delivery (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method,
         * type and recipient of governing_delivery_selection_id. The address remains in
         * delivery_destination. Omitted when no shipment or local-delivery selection governs the
         * order. delivery.anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
         * delivery.anyOf[2] (Value): null. delivery_destination (Optional): {@link
         * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
         * destination committed for this order. Payment freezes this value; fulfillment recipient
         * changes do not replace it. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. delivery_destination.anyOf[1] (Value): {@link
         * OrderDeliveryDestinationPreviousAttributes}. delivery_destination.anyOf[2] (Value):
         * null. discounts (Optional): Array of {@link OrderDiscountPreviousAttributes} or null.
         * Discounts applied to the order, each with its amount, status, and the line items and
         * charges it covers. discounts.anyOf[1] (Value): Array of {@link
         * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
         * status, and the line items and charges it covers. discounts.anyOf[1][] (Value): {@link
         * OrderDiscountPreviousAttributes}. discounts.anyOf[2] (Value): null. dispute_status
         * (Optional): string or null. Aggregate dispute state across the order's counted payment
         * intents, excluding payment_returned. Always returned to merchant credentials and omitted
         * from buyer reads. Open states take precedence in this order: needs_response,
         * under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most
         * severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
         * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present
         * with merchant credentials. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". dispute_status.anyOf[1] (Value): string. Aggregate dispute
         * state across the order's counted payment intents, excluding payment_returned. Always
         * returned to merchant credentials and omitted from buyer reads. Open states take
         * precedence in this order: needs_response, under_review, inquiry_needs_response,
         * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
         * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
         * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. fulfillment_status (Optional): string or
         * null. Aggregate progress across the order's fulfillment quantities. Value enum:
         * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
         * "closed". fulfillment_status.anyOf[1] (Value): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillment_status.anyOf[2]
         * (Value): null. fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
         * or null. Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1] (Value): Array of {@link FulfillmentPreviousAttributes}.
         * Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1][] (Value): {@link FulfillmentPreviousAttributes}.
         * fulfillments.anyOf[2] (Value): null. gift_card_estimate (Optional): {@link
         * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
         * splits between gift cards and the payment processor. gift_card_estimate.anyOf[1]
         * (Value): {@link OrderGiftCardEstimatePreviousAttributes}. gift_card_estimate.anyOf[2]
         * (Value): null. gift_card_settlements (Optional): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to
         * the order's payments. gift_card_settlements.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
         * order's payments. gift_card_settlements.anyOf[1][] (Value): {@link
         * OrderGiftCardSettlementPreviousAttributes}. gift_card_settlements.anyOf[2] (Value):
         * null. gift_card_tender_enabled (Optional): boolean or null. Whether gift cards can pay
         * for this order now. Gift cards pay only USD orders that still accept changes, are not
         * subscription purchases, and whose merchant has at least one gift card that is not closed
         * in this environment. Gift cards cannot fund gift card purchases; this is false when
         * those purchases leave no amount eligible for gift card tender. Recomputed on each read;
         * a spent but open card still counts. gift_card_tender_enabled.anyOf[1] (Value): boolean.
         * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
         * accept changes, are not subscription purchases, and whose merchant has at least one gift
         * card that is not closed in this environment. Gift cards cannot fund gift card purchases;
         * this is false when those purchases leave no amount eligible for gift card tender.
         * Recomputed on each read; a spent but open card still counts.
         * gift_card_tender_enabled.anyOf[2] (Value): null. gift_cards (Optional): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the
         * order, with each card's available balance. gift_cards.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order, with
         * each card's available balance. gift_cards.anyOf[1][] (Value): {@link
         * OrderGiftCardSelectionPreviousAttributes}. gift_cards.anyOf[2] (Value): null.
         * governing_delivery_selection_id (Optional): string or null. ID of the delivery selection
         * that governs this order, including pickup choices without a delivery destination: the
         * checkout's provisional selection before payment, and the selection a payment committed
         * after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no
         * selection governs the order. While set, change the destination through the delivery
         * selection. governing_delivery_selection_id.anyOf[1] (Value): string. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". governing_delivery_selection_id.anyOf[2] (Value):
         * null. handover (Optional): {@link OrderHandoverPreviousAttributes} or null. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. handover.anyOf[1] (Value): {@link
         * OrderHandoverPreviousAttributes}. handover.anyOf[2] (Value): null. internal_note
         * (Optional): string or null. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[1] (Value): string. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[2] (Value): null. inventory_exception_reason (Optional): string or
         * null. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[1] (Value):
         * string. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[2] (Value): null.
         * inventory_exception_resolution_message (Optional): string or null. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[1] (Value): string. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[2] (Value): null.
         * inventory_exception_status (Optional): string or null. Whether an inventory problem
         * after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[1] (Value): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[2] (Value): null. inventory_reservation_id (Optional):
         * string or null. The reservation holding stock for this order, when one exists.
         * inventory_reservation_id.anyOf[1] (Value): string. The reservation holding stock for
         * this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_reservation_id.anyOf[2] (Value): null. inventory_routing_source (Optional):
         * {@link InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked
         * demand is routed. Required before an order containing tracked variants can hold stock.
         * inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. invoice_id (Optional): string or null. The invoice associated with this order.
         * Null when the order has no invoice. A replacement invoice replaces this ID; voiding an
         * invoice preserves it. invoice_id.anyOf[1] (Value): string. The invoice associated with
         * this order. Null when the order has no invoice. A replacement invoice replaces this ID;
         * voiding an invoice preserves it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * OrderLineItemPreviousAttributes} or null. Items the order sells, each with its pricing,
         * tax, and fulfillment quantities. line_items.anyOf[1] (Value): Array of {@link
         * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
         * fulfillment quantities. line_items.anyOf[1][] (Value): {@link
         * OrderLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. ID of the merchant this resource belongs to.
         * merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Unique identifier for this order, prefixed `ord_`. order_id.anyOf[1] (Value): string.
         * Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable order number for receipts and merchant
         * reference. order_number.anyOf[1] (Value): string. Human-readable order number for
         * receipts and merchant reference. order_number.anyOf[2] (Value): null. origin (Optional):
         * string or null. How the order was created. invoice means a Quick Pay invoice created the
         * order; attaching an invoice to an existing order preserves its origin. Value enum:
         * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
         * origin.anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
         * invoice created the order; attaching an invoice to an existing order preserves its
         * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
         * "subscription", "invoice". origin.anyOf[2] (Value): null. paid_at (Optional): string or
         * null. When `payment_status` became `paid`, including a final capture that releases the
         * remaining balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. paid_at.anyOf[1] (Value): string. When `payment_status` became `paid`,
         * including a final capture that releases the remaining balance. Set once and never
         * changed, including after refunds. `null` when `payment_status` isn't `paid`, including
         * an order whose balance was written off without being paid. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_intent_ids (Optional):
         * Array of string or null. IDs of the payment intents created to collect this order.
         * payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents created
         * to collect this order. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
         * `expand` names `payment_intents`. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included when `expand`
         * names `payment_intents`. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * payment_link_id (Optional): string or null. Payment link whose checkout created this
         * order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by
         * payment_link_id to list a link's orders. payment_link_id.anyOf[1] (Value): string.
         * Payment link whose checkout created this order. Absent for orders that did not come from
         * a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
         * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * payment_status (Optional): string or null. Collection progress. An invoice write-off
         * also completes collection without receiving the written-off amount. Value enum:
         * "unpaid", "partially_paid", "paid". payment_status.anyOf[1] (Value): string. Collection
         * progress. An invoice write-off also completes collection without receiving the
         * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
         * payment_status.anyOf[2] (Value): null. pending_order_edit_id (Optional): string or null.
         * The order edit waiting for its balance payment. While it is set, the units that edit
         * removes can't join a fulfillment and the order refuses another edit. `null` when there
         * is none. Omitted for buyer credentials. Always present with merchant credentials.
         * pending_order_edit_id.anyOf[1] (Value): string. The order edit waiting for its balance
         * payment. While it is set, the units that edit removes can't join a fulfillment and the
         * order refuses another edit. `null` when there is none. Omitted for buyer credentials.
         * Always present with merchant credentials. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * pending_order_edit_id.anyOf[2] (Value): null. prepayment_order_id (Optional): string or
         * null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. prepayment_order_id.anyOf[1] (Value): string. Order that paid for this
         * prepaid delivery. Null when this is not a prepaid delivery order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". prepayment_order_id.anyOf[2] (Value): null.
         * pricing_amounts (Optional): {@link PricingAmountsPreviousAttributes} or null. The
         * order's money totals: subtotal, discounts, charges, tax, requested tip, and total.
         * pricing_amounts.anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}.
         * pricing_amounts.anyOf[2] (Value): null. refund_ids (Optional): Array of string or null.
         * IDs of the refunds that name this order. This includes refunds Flint makes to return a
         * payment it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids.anyOf[1] (Value): Array of
         * string. IDs of the refunds that name this order. This includes refunds Flint makes to
         * return a payment it couldn't accept (`reason` `payment_returned`), which never count
         * toward `refund_status` or the order's refunded amounts. refund_ids.anyOf[1][] (Value):
         * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_ids.anyOf[2] (Value): null.
         * refund_status (Optional): string or null. Refund progress for collected money. Refunds
         * with `reason` `payment_returned` return money the order never received and don't count.
         * Value enum: "none", "partially_refunded", "refunded". refund_status.anyOf[1] (Value):
         * string. Refund progress for collected money. Refunds with `reason` `payment_returned`
         * return money the order never received and don't count. Value enum: "none",
         * "partially_refunded", "refunded". refund_status.anyOf[2] (Value): null.
         * return_credit_settlements (Optional): Array of {@link
         * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
         * items the buyer returned, such as an exchange's replacement order. Included in
         * settlement_amounts.paid_money. return_credit_settlements.anyOf[1] (Value): Array of
         * {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to this order from
         * items the buyer returned, such as an exchange's replacement order. Included in
         * settlement_amounts.paid_money. return_credit_settlements.anyOf[1][] (Value): {@link
         * OrderReturnCreditSettlementPreviousAttributes}. return_credit_settlements.anyOf[2]
         * (Value): null. return_resolution_id (Optional): string or null. ID of the return
         * resolution that created this order as a replacement. Omitted for orders a return did not
         * create. return_resolution_id.anyOf[1] (Value): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_id.anyOf[2] (Value):
         * null. settlement_amounts (Optional): {@link OrderSettlementAmountsPreviousAttributes} or
         * null. How much of the order has been paid, refunded, credited, written off, and settled
         * as tips, and what is still outstanding. settlement_amounts.anyOf[1] (Value): {@link
         * OrderSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2] (Value): null.
         * status (Optional): string or null. Whether the order still accepts changes and new
         * payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue
         * on a closed order. Value enum: "open", "closed". status.anyOf[1] (Value): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". status.anyOf[2] (Value): null. subscription (Optional): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes} or null. Subscription summary included
         * when `expand` names `subscription`; `null` when expanded and this order does not bill a
         * subscription. Present only when `expand` includes `subscription`; `null` when expanded
         * and there is no related subscription. subscription.anyOf[1] (Value): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes}. subscription.anyOf[2] (Value): null.
         * subscription_cycle (Optional): integer or null. Charged subscription cycle associated
         * with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance
         * the cycle. subscription_cycle.anyOf[1] (Value): integer. Charged subscription cycle
         * associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
         * not advance the cycle. Format: uint64. minimum: 0. subscription_cycle.anyOf[2] (Value):
         * null. subscription_delivery_changed_at (Optional): string or null. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it.
         * subscription_delivery_changed_at.anyOf[1] (Value): string. Time the subscriber changed
         * delivery after this paid renewal was prepared. The order keeps its committed destination
         * until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_changed_at.anyOf[2] (Value): null.
         * subscription_delivery_number (Optional): integer or null. Position of this delivery
         * among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid
         * delivery order. subscription_delivery_number.anyOf[1] (Value): integer. Position of this
         * delivery among the deliveries one charge paid for, starting at 2. Null when this is not
         * a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_delivery_number.anyOf[2] (Value): null. subscription_id (Optional): string
         * or null. ID of the subscription this order bills. Absent on an order that isn't from a
         * subscription. subscription_id.anyOf[1] (Value): string. ID of the subscription this
         * order bills. Absent on an order that isn't from a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes}
         * or null. Plan summary included when `expand` names `subscription_plan`; `null` when
         * expanded and this order does not bill a subscription plan. Present only when `expand`
         * includes `subscription_plan`; `null` when expanded and there is no related subscription
         * plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes}. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. ID of the subscription plan this
         * order bills. Absent on an order that isn't from a subscription.
         * subscription_plan_id.anyOf[1] (Value): string. ID of the subscription plan this order
         * bills. Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * now, independent of permissions. Includes close when closure is allowed, and pay while
         * open without an active attempt and with an outstanding balance or payment-method setup
         * available. Always present with merchant credentials. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions.anyOf[1] (Value): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. Always present with merchant credentials. []
         * enum: "close", "pay", "resolve_inventory_exception". supported_actions.anyOf[1][]
         * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
         * supported_actions.anyOf[2] (Value): null. tax (Optional): {@link
         * OrderTaxPreviousAttributes} or null. The order's tax state: whether tax is enabled, its
         * status, location, exemption, and per-jurisdiction rows. tax.anyOf[1] (Value): {@link
         * OrderTaxPreviousAttributes}. tax.anyOf[2] (Value): null. ticketed_event (Optional):
         * {@link TicketedEventPreviousAttributes} or null. Event and tickets this order sold
         * through an event payment link. Absent on other orders. ticketed_event.anyOf[1] (Value):
         * {@link TicketedEventPreviousAttributes}. ticketed_event.anyOf[2] (Value): null. tips
         * (Optional): Array of {@link TipPreviousAttributes} or null. Tips on the order, each with
         * its requested, settled, and refunded amounts. A tip cleared before payment stays listed
         * as canceled. tips.anyOf[1] (Value): Array of {@link TipPreviousAttributes}. Tips on the
         * order, each with its requested, settled, and refunded amounts. A tip cleared before
         * payment stays listed as canceled. tips.anyOf[1][] (Value): {@link
         * TipPreviousAttributes}. tips.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Order version for optimistic concurrency. Send this value
         * as the expected version when changing the order. Increases with every change to the
         * order. Ignore an order webhook snapshot whose version is lower than one you have already
         * applied. version.anyOf[1] (Value): integer. Order version for optimistic concurrency.
         * Send this value as the expected version when changing the order. Increases with every
         * change to the order. Ignore an order webhook snapshot whose version is lower than one
         * you have already applied. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. anyOf[1] (Value): string. The earliest open or
             * resolving payment review on this order's counted payments. `null` when no review is
             * open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open.
             * Omitted for buyer credentials. Always present with merchant credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "active_payment_review_id"?: ((string) | (null));
            /**
             * The amounts authorized and still capturable on the order's payments. anyOf[1]
             * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            /**
             * A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2]
             * (Value): null.
             */
            "buyer_note"?: ((string) | (null));
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1] (Value): Array of {@link
             * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or
             * service fees, each with its applied amount, tax, and refunded amount. anyOf[1][]
             * (Value): {@link OrderChargePreviousAttributes}. anyOf[2] (Value): null.
             */
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            /**
             * IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of
             * string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value):
             * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_ids"?: ((Array<string>) | (null));
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. Always present with merchant
             * credentials. anyOf[1] (Value): string. The reference the payment link URL or resolve
             * request carried, such as your user ID. `null` when none was sent or checkout did not
             * start from a payment link. Returned only to merchant credentials; omitted for buyer
             * credentials. Set by the buyer's browser, so treat it as a claim, not proof of
             * identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
             * anyOf[2] (Value): null.
             */
            "client_reference"?: ((string) | (null));
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. anyOf[1] (Value): string. When the order closed.
             * Present exactly when status is closed. Set once at the transition and never changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * Why the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why
             * the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
             */
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when
             * closing the order. System closures leave it absent. It is not shown to the buyer.
             * anyOf[2] (Value): null.
             */
            "closed_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array
             * of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment
             * link's custom fields, recorded when checkout started, in the order the link showed
             * the fields. Each answer keeps the field's key, label, and type from that moment, so
             * later changes to the link don't change it. Optional fields the buyer left blank are
             * left out. Read-only. Empty when the order didn't come from a payment link, the link
             * had no custom fields, or the buyer answered none. Orders created before Flint
             * recorded answers here also return an empty list and keep their answers in `metadata`
             * as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to
             * merchant credentials; omitted for buyer credentials. Always present with merchant
             * credentials. maxItems: 20. anyOf[1][] (Value): {@link
             * CustomFieldAnswerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the
             * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1] (Value): Array of {@link
             * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup.
             * They attach when the subscription is provisioned and first discount its first
             * charged cycle. They do not discount this order and are separate from discounts and
             * order totals. Always present; empty when no promotions are deferred. anyOf[1][]
             * (Value): {@link DeferredPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link OrderDeliveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. anyOf[1] (Value): Array of {@link
             * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its
             * amount, status, and the line items and charges it covers. anyOf[1][] (Value): {@link
             * OrderDiscountPreviousAttributes}. anyOf[2] (Value): null.
             */
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
             * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state
             * across the order's counted payment intents, excluding payment_returned. Always
             * returned to merchant credentials and omitted from buyer reads. Open states take
             * precedence in this order: needs_response, under_review, inquiry_needs_response,
             * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
             * prevented, inquiry_closed; none when no disputes count. List individual cases with
             * GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[2] (Value): null.
             */
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed". anyOf[1] (Value): string. Aggregate progress across the order's
             * fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
             * "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
             */
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            /**
             * Fulfillments created for the order, each covering a set of its line items. anyOf[1]
             * (Value): Array of {@link FulfillmentPreviousAttributes}. Fulfillments created for
             * the order, each covering a set of its line items. anyOf[1][] (Value): {@link
             * FulfillmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. anyOf[1] (Value): {@link OrderGiftCardEstimatePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            /**
             * The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array
             * of {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions
             * applied to the order's payments. anyOf[1][] (Value): {@link
             * OrderGiftCardSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Gift cards cannot fund
             * gift card purchases; this is false when those purchases leave no amount eligible for
             * gift card tender. Recomputed on each read; a spent but open card still counts.
             * anyOf[1] (Value): boolean. Whether gift cards can pay for this order now. Gift cards
             * pay only USD orders that still accept changes, are not subscription purchases, and
             * whose merchant has at least one gift card that is not closed in this environment.
             * Gift cards cannot fund gift card purchases; this is false when those purchases leave
             * no amount eligible for gift card tender. Recomputed on each read; a spent but open
             * card still counts. anyOf[2] (Value): null.
             */
            "gift_card_tender_enabled"?: ((boolean) | (null));
            /**
             * Gift cards available to pay the order, with each card's available balance. anyOf[1]
             * (Value): Array of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards
             * available to pay the order, with each card's available balance. anyOf[1][] (Value):
             * {@link OrderGiftCardSelectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. anyOf[1]
             * (Value): string. ID of the delivery selection that governs this order, including
             * pickup choices without a delivery destination: the checkout's provisional selection
             * before payment, and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "governing_delivery_selection_id"?: ((string) | (null));
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value):
             * {@link OrderHandoverPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            /**
             * A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for
             * your team. Buyer reads leave it out. anyOf[2] (Value): null.
             */
            "internal_note"?: ((string) | (null));
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could
             * not be committed after payment. The cause remains after resolution. Omitted when no
             * reason was recorded. Unrecognized reasons are returned as other; new values may be
             * added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
             * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
             * anyOf[2] (Value): null.
             */
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving
             * the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
             */
            "inventory_exception_resolution_message"?: ((string) | (null));
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory
             * problem after payment needs attention. Value enum: "paid_inventory_failed",
             * "resolved". anyOf[2] (Value): null.
             */
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            /**
             * The reservation holding stock for this order, when one exists. anyOf[1] (Value):
             * string. The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1]
             * (Value): string. The invoice associated with this order. Null when the order has no
             * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
             * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities.
             * anyOf[1] (Value): Array of {@link OrderLineItemPreviousAttributes}. Items the order
             * sells, each with its pricing, tax, and fulfillment quantities. anyOf[1][] (Value):
             * {@link OrderLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique
             * identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable order number for receipts and merchant reference. anyOf[1] (Value):
             * string. Human-readable order number for receipts and merchant reference. anyOf[2]
             * (Value): null.
             */
            "order_number"?: ((string) | (null));
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             * anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
             * invoice created the order; attaching an invoice to an existing order preserves its
             * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
             * "subscription", "invoice". anyOf[2] (Value): null.
             */
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. anyOf[1] (Value): string. When `payment_status` became `paid`,
             * including a final capture that releases the remaining balance. Set once and never
             * changed, including after refunds. `null` when `payment_status` isn't `paid`,
             * including an order whose balance was written off without being paid. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of
             * string. IDs of the payment intents created to collect this order. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value):
             * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents
             * included when `expand` names `payment_intents`. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. anyOf[1] (Value): string. Payment link whose checkout created this order.
             * Absent for orders that did not come from a payment link. Filter GET /v1/orders by
             * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             * anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             * anyOf[1] (Value): string. Collection progress. An invoice write-off also completes
             * collection without receiving the written-off amount. Value enum: "unpaid",
             * "partially_paid", "paid". anyOf[2] (Value): null.
             */
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            /**
             * The order edit waiting for its balance payment. While it is set, the units that edit
             * removes can't join a fulfillment and the order refuses another edit. `null` when
             * there is none. Omitted for buyer credentials. Always present with merchant
             * credentials. anyOf[1] (Value): string. The order edit waiting for its balance
             * payment. While it is set, the units that edit removes can't join a fulfillment and
             * the order refuses another edit. `null` when there is none. Omitted for buyer
             * credentials. Always present with merchant credentials. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "pending_order_edit_id"?: ((string) | (null));
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. anyOf[1] (Value): string. Order that paid for this prepaid delivery. Null
             * when this is not a prepaid delivery order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "prepayment_order_id"?: ((string) | (null));
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string.
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string.
             * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for
             * collected money. Refunds with `reason` `payment_returned` return money the order
             * never received and don't count. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value):
             * Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
             * this order from items the buyer returned, such as an exchange's replacement order.
             * Included in settlement_amounts.paid_money. anyOf[1][] (Value): {@link
             * OrderReturnCreditSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. anyOf[1] (Value): string. ID of the return
             * resolution that created this order as a replacement. Omitted for orders a return did
             * not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. anyOf[1] (Value): {@link
             * OrderSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts
             * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or
             * note edits continue on a closed order. Value enum: "open", "closed". anyOf[2]
             * (Value): null.
             */
            "status"?: (("open" | "closed" | (string & {})) | (null));
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer.
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "subscription_cycle"?: ((number) | (null));
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * anyOf[1] (Value): string. Time the subscriber changed delivery after this paid
             * renewal was prepared. The order keeps its committed destination until you correct it
             * or refund and replace it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_changed_at"?: ((string) | (null));
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. anyOf[1] (Value): integer. Position
             * of this delivery among the deliveries one charge paid for, starting at 2. Null when
             * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_number"?: ((number) | (null));
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription this order bills.
             * Absent on an order that isn't from a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan this order
             * bills. Absent on an order that isn't from a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. Always present with merchant
             * credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts now, independent of
             * permissions. Includes close when closure is allowed, and pay while open without an
             * active attempt and with an outstanding balance or payment-method setup available.
             * Always present with merchant credentials. [] enum: "close", "pay",
             * "resolve_inventory_exception". anyOf[1][] (Value): string. Value enum: "close",
             * "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. anyOf[1] (Value): {@link OrderTaxPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. anyOf[1] (Value): {@link TicketedEventPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@link
             * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and
             * refunded amounts. A tip cleared before payment stays listed as canceled. anyOf[1][]
             * (Value): {@link TipPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. anyOf[1]
             * (Value): integer. Order version for optimistic concurrency. Send this value as the
             * expected version when changing the order. Increases with every change to the order.
             * Ignore an order webhook snapshot whose version is lower than one you have already
             * applied. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * Number of license keys promised by this line: quantity when its frozen catalog setting
     * issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal
     * lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment,
     * so they may not exist yet when order.paid arrives. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "license_key_quantity": number;
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
     * Remaining quantity and components for an ID-only line refund target. Accounts for
     * original-tender capacity, reversals, accepted refunds, and whole-value edit reservations,
     * including credit transferred to added lines and pending or retryable failed edit refunds.
     * All values are zero when exhausted. Refund eligibility is checked again on submission.
     * Remaining refundable quantity and value of an order line, after prior refunds and order edit
     * reservations.
     */
    "refundable": OrderLineItemRefundable;
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
export type OrderLineItemFulfillmentComponentPreviousAttributes = {
    /**
     * ID of the bundle component these requirements apply to. anyOf[1] (Value): string. ID of the
     * bundle component these requirements apply to. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * anyOf[2] (Value): null.
     */
    "bundle_component_id"?: ((string) | (null));
    /**
     * Fulfillment requirements for this component. anyOf[1] (Value): {@link
     * OrderLineItemFulfillmentProfilePreviousAttributes}. anyOf[2] (Value): null.
     */
    "profile"?: ((OrderLineItemFulfillmentProfilePreviousAttributes) | (null));
    /**
     * Number of this component per unit of the order line item; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Number of this component per unit of the order line
     * item; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "quantity_per_line_item_unit"?: ((number) | (null));
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
export type OrderLineItemFulfillmentProfilePreviousAttributes = {
    /**
     * Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of
     * string. Fulfillment types allowed for this item. Empty when fulfillment is not required. []
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1][] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[2]
     * (Value): null.
     */
    "allowed_types"?: ((Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>) | (null));
    /**
     * Whether this item requires fulfillment. Value enum: "none", "required". anyOf[1] (Value):
     * string. Whether this item requires fulfillment. Value enum: "none", "required". anyOf[2]
     * (Value): null.
     */
    "requirement"?: (("none" | "required" | (string & {})) | (null));
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
export type OrderLineItemFulfillmentQuantitiesPreviousAttributes = {
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by a
     * non-terminal fulfillment, including a fulfillment on hold. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by a
     * non-terminal fulfillment, including a fulfillment on hold. Format: int64. anyOf[2] (Value):
     * null.
     */
    "assigned_quantity"?: ((number) | (null));
    /**
     * ID of the bundle component these quantities describe. `null` when the line isn't a bundle
     * component. anyOf[1] (Value): string. ID of the bundle component these quantities describe.
     * `null` when the line isn't a bundle component. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * anyOf[2] (Value): null.
     */
    "bundle_component_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled
     * or no_show fulfillments. anyOf[1] (Value): integer. Whole-number quantity; fractional
     * quantities are not supported. Quantity owned by canceled or no_show fulfillments. Format:
     * int64. anyOf[2] (Value): null.
     */
    "canceled_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by failed
     * fulfillments that kept their quantity. Failed fulfillments that released quantity own
     * nothing; their quantity becomes unassigned again. anyOf[1] (Value): integer. Whole-number
     * quantity; fractional quantities are not supported. Quantity owned by failed fulfillments
     * that kept their quantity. Failed fulfillments that released quantity own nothing; their
     * quantity becomes unassigned again. Format: int64. anyOf[2] (Value): null.
     */
    "failed_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by completed
     * fulfillments. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are
     * not supported. Quantity owned by completed fulfillments. Format: int64. anyOf[2] (Value):
     * null.
     */
    "fulfilled_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity removed by
     * paid-order edits, in line units for a single item or component units for a bundle component.
     * Removed units cannot be assigned to a fulfillment. anyOf[1] (Value): integer. Whole-number
     * quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in
     * line units for a single item or component units for a bundle component. Removed units cannot
     * be assigned to a fulfillment. Format: int64. anyOf[2] (Value): null.
     */
    "removed_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Original quantity requiring
     * fulfillment, in line units for a single item or component units for a bundle component.
     * Equals the sum of the other six quantity fields. anyOf[1] (Value): integer. Whole-number
     * quantity; fractional quantities are not supported. Original quantity requiring fulfillment,
     * in line units for a single item or component units for a bundle component. Equals the sum of
     * the other six quantity fields. Format: int64. anyOf[2] (Value): null.
     */
    "required_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Required quantity still
     * available for assignment to a fulfillment, in any resolution mode. Includes quantity
     * released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be
     * assigned until that edit ends. anyOf[1] (Value): integer. Whole-number quantity; fractional
     * quantities are not supported. Required quantity still available for assignment to a
     * fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment.
     * Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends.
     * Format: int64. anyOf[2] (Value): null.
     */
    "unassigned_quantity"?: ((number) | (null));
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
export type OrderLineItemFulfillmentRequirementsPreviousAttributes = {
    /**
     * Fulfillment requirements for each bundle component. Present for bundle lines. anyOf[1]
     * (Value): Array of {@link OrderLineItemFulfillmentComponentPreviousAttributes}. Fulfillment
     * requirements for each bundle component. Present for bundle lines. anyOf[1][] (Value): {@link
     * OrderLineItemFulfillmentComponentPreviousAttributes}. anyOf[2] (Value): null.
     */
    "components"?: ((Array<OrderLineItemFulfillmentComponentPreviousAttributes>) | (null));
    /**
     * Fulfillment requirements for a single item. Present for non-bundle lines. anyOf[1] (Value):
     * {@link OrderLineItemFulfillmentProfilePreviousAttributes}. anyOf[2] (Value): null.
     */
    "direct"?: ((OrderLineItemFulfillmentProfilePreviousAttributes) | (null));
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
export type OrderLineItemModifierPreviousAttributes = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value):
     * {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null));
    /**
     * Name of the modifier group recorded when this selection was added to the order line item.
     * anyOf[1] (Value): string. Name of the modifier group recorded when this selection was added
     * to the order line item. anyOf[2] (Value): null.
     */
    "modifier_group_name"?: ((string) | (null));
    /**
     * Identifier of the selected catalog modifier. If its group is owned by a modifier set
     * (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. anyOf[1] (Value): string. Identifier of the selected
     * catalog modifier. If its group is owned by a modifier set (source: inline), read the group
     * through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it.
     * Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S". anyOf[2] (Value): null.
     */
    "modifier_id"?: ((string) | (null));
    /**
     * Name of the selected modifier recorded on the order line item. anyOf[1] (Value): string.
     * Name of the selected modifier recorded on the order line item. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Stable identifier of the selected modifier on this order line item. anyOf[1] (Value):
     * string. Stable identifier of the selected modifier on this order line item. Example:
     * "olim_01KEZF7C00YP0WSZGRAD25EB1Z". anyOf[2] (Value): null.
     */
    "order_line_item_modifier_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Whether this selection appears in fulfillment details, recorded when selected. anyOf[1]
     * (Value): boolean. Whether this selection appears in fulfillment details, recorded when
     * selected. anyOf[2] (Value): null.
     */
    "show_on_fulfillment"?: ((boolean) | (null));
    /**
     * Whether this selection appears on buyer receipts, recorded when selected. anyOf[1] (Value):
     * boolean. Whether this selection appears on buyer receipts, recorded when selected. anyOf[2]
     * (Value): null.
     */
    "show_on_receipt"?: ((boolean) | (null));
    /**
     * Whether the selection is a catalog list modifier or buyer-entered text. Value enum:
     * "catalog_modifier", "text". anyOf[1] (Value): string. Whether the selection is a catalog
     * list modifier or buyer-entered text. Value enum: "catalog_modifier", "text". anyOf[2]
     * (Value): null.
     */
    "source_type"?: (("catalog_modifier" | "text" | (string & {})) | (null));
    /**
     * Selected text group and buyer-entered value. Read an inline text group through its owning
     * modifier set. anyOf[1] (Value): {@link TextModifierRequestPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "text"?: ((TextModifierRequestPreviousAttributes) | (null));
    /**
     * Buyer-entered text recorded for a text modifier selection. anyOf[1] (Value): string.
     * Buyer-entered text recorded for a text modifier selection. anyOf[2] (Value): null.
     */
    "text_value"?: ((string) | (null));
    /**
     * Total price this selection adds to the line: `unit_price_delta_money` times the selection's
     * `quantity` times the line item's `quantity`. Always 0 for text selections. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Amount added to the item's unit price for each unit of this selection, recorded when
     * selected. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_delta_money"?: ((MoneyValuePreviousAttributes) | (null));
};
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
export type OrderLineItemPreviousAttributes = ({
    /**
     * Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number
     * quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Tracked line
     * units waiting for stock. Always 0 when none are backordered. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0. anyOf[2] (Value): null.
     */
    "backordered_quantity"?: ((number) | (null));
    /**
     * Unit price multiplied by quantity, before modifiers, discounts, and tax. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "base_subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Components fixed when the bundle line was added. The line takes their shared taxability and
     * tax category; all component variants must share both stored values. An unset category equals
     * only another unset category. anyOf[1] (Value): Array of {@link
     * BundleComponentPreviousAttributes}. Components fixed when the bundle line was added. The
     * line takes their shared taxability and tax category; all component variants must share both
     * stored values. An unset category equals only another unset category. anyOf[1][] (Value):
     * {@link BundleComponentPreviousAttributes}. anyOf[2] (Value): null.
     */
    "bundle_components"?: ((Array<BundleComponentPreviousAttributes>) | (null));
    /**
     * ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line
     * was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Price source and applied quantity break frozen for a catalog variant line. Omitted for older
     * lines, custom lines, and bundles. anyOf[1] (Value): {@link
     * CatalogPricingPreviousAttributes}. anyOf[2] (Value): null.
     */
    "catalog_pricing"?: ((CatalogPricingPreviousAttributes) | (null));
    /**
     * Catalog categories of the item. anyOf[1] (Value): Array of {@link
     * CategoryReferencePreviousAttributes}. Catalog categories of the item. anyOf[1][] (Value):
     * {@link CategoryReferencePreviousAttributes}. anyOf[2] (Value): null.
     */
    "categories"?: ((Array<CategoryReferencePreviousAttributes>) | (null));
    /**
     * Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold.
     * anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Discount value allocated to this line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold
     * exists. Null when no hold exists yet, or when neither a future copied release_date nor the
     * inventory item supplies an applicable date. A future copied release_date takes precedence
     * even when physical stock covers every unit; otherwise the inventory item's expected ship
     * date applies only to backordered units when it is today or later in the merchant's timezone.
     * Past item dates are omitted and never frozen. The estimate may change before payment and
     * freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation
     * preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. anyOf[1]
     * (Value): string. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or
     * payment hold exists. Null when no hold exists yet, or when neither a future copied
     * release_date nor the inventory item supplies an applicable date. A future copied
     * release_date takes precedence even when physical stock covers every unit; otherwise the
     * inventory item's expected ship date applies only to backordered units when it is today or
     * later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate
     * may change before payment and freezes at settlement. Thereafter only a paid-line PATCH
     * changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier
     * fulfillment is permitted. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     */
    "expected_ship_date"?: ((string) | (null));
    /**
     * Current quantities for each required fulfillment obligation: one entry for a single item or
     * one per bundle component that requires fulfillment. Quantities use line units for single
     * items and component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity +
     * removed_quantity. Omitted when the line needs no fulfillment or the order's obligations
     * cannot be computed, including older lines without recorded requirements. anyOf[1] (Value):
     * Array of {@link OrderLineItemFulfillmentQuantitiesPreviousAttributes}. Current quantities
     * for each required fulfillment obligation: one entry for a single item or one per bundle
     * component that requires fulfillment. Quantities use line units for single items and
     * component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity +
     * removed_quantity. Omitted when the line needs no fulfillment or the order's obligations
     * cannot be computed, including older lines without recorded requirements. anyOf[1][] (Value):
     * {@link OrderLineItemFulfillmentQuantitiesPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fulfillment_quantities"?: ((Array<OrderLineItemFulfillmentQuantitiesPreviousAttributes>) | (null));
    /**
     * Fulfillment requirements fixed when the line item was created. direct describes a single
     * item; components describes each bundle component. Omitted for older line items without
     * recorded requirements. anyOf[1] (Value): {@link
     * OrderLineItemFulfillmentRequirementsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fulfillment_requirements"?: ((OrderLineItemFulfillmentRequirementsPreviousAttributes) | (null));
    /**
     * Gift card details for a gift card purchase line. anyOf[1] (Value): {@link
     * GiftCardPurchaseSnapshotPreviousAttributes}. anyOf[2] (Value): null.
     */
    "gift_card_purchase"?: ((GiftCardPurchaseSnapshotPreviousAttributes) | (null));
    /**
     * Image of the item as sold. anyOf[1] (Value): {@link ImagePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "image"?: ((ImagePreviousAttributes) | (null));
    /**
     * Whether the line tracks inventory, and the inventory demands fixed when the line was added.
     * `null` when no inventory snapshot was recorded for the line. anyOf[1] (Value): {@link
     * LineItemInventorySnapshotPreviousAttributes}. anyOf[2] (Value): null.
     */
    "inventory_snapshot"?: ((LineItemInventorySnapshotPreviousAttributes) | (null));
    /**
     * Number of license keys promised by this line: quantity when its frozen catalog setting
     * issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal
     * lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment,
     * so they may not exist yet when order.paid arrives. Whole-number quantity; fractional
     * quantities are not supported. anyOf[1] (Value): integer. Number of license keys promised by
     * this line: quantity when its frozen catalog setting issues keys, otherwise 0. Includes keys
     * for a subscription started by this line; renewal lines report 0. Refunds do not reduce this
     * count. Keys arrive asynchronously after payment, so they may not exist yet when order.paid
     * arrives. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * minimum: 0. anyOf[2] (Value): null.
     */
    "license_key_quantity"?: ((number) | (null));
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null));
    /**
     * Sum of the line item's modifier totals. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "modifier_total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Modifiers selected on the line, with their prices. anyOf[1] (Value): Array of {@link
     * OrderLineItemModifierPreviousAttributes}. Modifiers selected on the line, with their prices.
     * anyOf[1][] (Value): {@link OrderLineItemModifierPreviousAttributes}. anyOf[2] (Value): null.
     */
    "modifiers"?: ((Array<OrderLineItemModifierPreviousAttributes>) | (null));
    /**
     * Name of the item as sold. anyOf[1] (Value): string. Name of the item as sold. anyOf[2]
     * (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * The edit that added this line. Null when the line was not added by an order edit. anyOf[1]
     * (Value): string. The edit that added this line. Null when the line was not added by an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
     */
    "order_edit_id"?: ((string) | (null));
    /**
     * Order that owns this record or its referenced line item and charge. anyOf[1] (Value):
     * string. Order that owns this record or its referenced line item and charge. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * Unique identifier for this order line item, prefixed `li_`. anyOf[1] (Value): string. Unique
     * identifier for this order line item, prefixed `li_`. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * The `key` of the payment link line item this line was created from. Match order lines to the
     * link's line items with it instead of by name. Flint sets it when checkout starts and it
     * never changes; metadata updates don't affect it. `null` when the line didn't come from a
     * payment link line item: the order didn't come from a payment link, the line was added to the
     * order later, or the line came from a subscription plan through a subscription signup link.
     * anyOf[1] (Value): string. The `key` of the payment link line item this line was created
     * from. Match order lines to the link's line items with it instead of by name. Flint sets it
     * when checkout starts and it never changes; metadata updates don't affect it. `null` when the
     * line didn't come from a payment link line item: the order didn't come from a payment link,
     * the line was added to the order later, or the line came from a subscription plan through a
     * subscription signup link. minLength: 1. maxLength: 100. anyOf[2] (Value): null.
     */
    "payment_link_line_item_key"?: ((string) | (null));
    /**
     * ID of the catalog product the item was sold from. Required whenever variant_id is present.
     * Absent on bundle and custom lines, which have no parent product. anyOf[1] (Value): string.
     * ID of the catalog product the item was sold from. Required whenever variant_id is present.
     * Absent on bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Product classification frozen on this line. Null when the line is unclassified. Custom lines
     * accept physical, digital, service, or fee; catalog lines use the product's type when added.
     * Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen
     * classification; void and reissue to change it. Value enum: "physical", "service", "fee",
     * "digital", "gift_card", null. anyOf[1] (Value): string. Product classification frozen on
     * this line. Null when the line is unclassified. Custom lines accept physical, digital,
     * service, or fee; catalog lines use the product's type when added. Unclassified non-goods
     * lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void
     * and reissue to change it. Value enum: "physical", "service", "fee", "digital", "gift_card",
     * null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Masked card identities for fully funded units of this purchase line. Partial consideration
     * does not issue a card. anyOf[1] (Value): Array of {@link
     * PurchasedGiftCardPreviousAttributes}. Masked card identities for fully funded units of this
     * purchase line. Partial consideration does not issue a card. anyOf[1][] (Value): {@link
     * PurchasedGiftCardPreviousAttributes}. anyOf[2] (Value): null.
     */
    "purchased_gift_cards"?: ((Array<PurchasedGiftCardPreviousAttributes>) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Remaining quantity and components for an ID-only line refund target. Accounts for
     * original-tender capacity, reversals, accepted refunds, and whole-value edit reservations,
     * including credit transferred to added lines and pending or retryable failed edit refunds.
     * All values are zero when exhausted. Refund eligibility is checked again on submission.
     * anyOf[1] (Value): {@link OrderLineItemRefundablePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refundable"?: ((OrderLineItemRefundablePreviousAttributes) | (null));
    /**
     * Amount of this line already refunded. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "refunded_quantity"?: ((number) | (null));
    /**
     * Future release date copied when the line was created, in YYYY-MM-DD format. Null when the
     * line is not a pre-order. Earlier fulfillment is permitted. anyOf[1] (Value): string. Future
     * release date copied when the line was created, in YYYY-MM-DD format. Null when the line is
     * not a pre-order. Earlier fulfillment is permitted. Format: date. Example: "2026-08-02".
     * anyOf[2] (Value): null.
     */
    "release_date"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units removed by
     * paid-order edits. For bundles, each removed line unit removes all of its component units.
     * The original quantity and pricing remain the sale record; refunds are tracked separately.
     * anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Whole line units removed by paid-order edits. For bundles, each removed line unit removes
     * all of its component units. The original quantity and pricing remain the sale record;
     * refunds are tracked separately. Format: int64. anyOf[2] (Value): null.
     */
    "removed_quantity"?: ((number) | (null));
    /**
     * Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of
     * {@link SelectedProductOptionPreviousAttributes}. Variant options selected for the item, such
     * as size and color. anyOf[1][] (Value): {@link SelectedProductOptionPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "selected_options"?: ((Array<SelectedProductOptionPreviousAttributes>) | (null));
    /**
     * SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2]
     * (Value): null.
     */
    "sku"?: ((string) | (null));
    /**
     * Recurring offer and cadence frozen for this line at signup. anyOf[1] (Value): {@link
     * SubscribedLinePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subscription"?: ((SubscribedLinePreviousAttributes) | (null));
    /**
     * Subscription created for this line after the order is paid. anyOf[1] (Value): string.
     * Subscription created for this line after the order is paid. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
     */
    "subscription_id"?: ((string) | (null));
    /**
     * Applicable active offer for a one-time line, or the offer terms frozen for a subscribed
     * line. anyOf[1] (Value): {@link OrderLineSubscriptionOfferSummaryPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "subscription_offer"?: ((OrderLineSubscriptionOfferSummaryPreviousAttributes) | (null));
    /**
     * Base subtotal plus modifier total, before discounts and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * How tax was calculated for this line item. anyOf[1] (Value): {@link
     * OrderCalculatedLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderCalculatedLineItemTaxPreviousAttributes) | (null));
    /**
     * Tax calculated for this line item, including any tax already included in its price. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Subtotal minus discounts, plus tax that is not already included in the price. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum:
     * "variant", "bundle", "custom". anyOf[1] (Value): string. Whether the line was sold from a
     * catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom".
     * anyOf[2] (Value): null.
     */
    "type"?: (("variant" | "bundle" | "custom" | (string & {})) | (null));
    /**
     * Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. anyOf[1] (Value): {@link DimensionsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_dimensions"?: ((DimensionsPreviousAttributes) | (null));
    /**
     * Price of one unit before modifiers, discounts, and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Weight of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. anyOf[1] (Value): {@link WeightPreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_weight"?: ((WeightPreviousAttributes) | (null));
    /**
     * ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the
     * catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
});
/**
 * Remaining refundable quantity and value of an order line, after prior refunds and order edit
 * reservations.
 */
export type OrderLineItemRefundable = {
    /**
     * Remaining discount component. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Remaining subtotal before discounts and tax. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "gross_money": MoneyValue;
    /**
     * Whole-number units remaining for a quantity refund target; fractional quantities are not
     * supported. Format: int64.
     */
    "quantity": number;
    /**
     * Remaining tax component. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Remaining target total after discounts and tax. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
export type OrderLineItemRefundablePreviousAttributes = {
    /**
     * Remaining discount component. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Remaining subtotal before discounts and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "gross_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number units remaining for a quantity refund target; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Whole-number units remaining for a quantity refund
     * target; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Remaining tax component. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Remaining target total after discounts and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
};
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
export type OrderLineItemTaxPreviousAttributes = {
    /**
     * Flint line-item tax category. A bundle line takes the stored category shared by all
     * component variants when added; all must also share taxability. Unset uses the merchant
     * default and equals only another unset category. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Flint
     * line-item tax category. A bundle line takes the stored category shared by all component
     * variants when added; all must also share taxability. Unset uses the merchant default and
     * equals only another unset category. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     */
    "line_item_tax_category"?: (("general"
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
        | (string & {}))
        | (null));
    /**
     * Whether the line is subject to tax. A bundle line takes the taxability shared by all
     * component variants when added; they must also share their stored tax category. anyOf[1]
     * (Value): boolean. Whether the line is subject to tax. A bundle line takes the taxability
     * shared by all component variants when added; they must also share their stored tax category.
     * anyOf[2] (Value): null.
     */
    "taxable"?: ((boolean) | (null));
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
