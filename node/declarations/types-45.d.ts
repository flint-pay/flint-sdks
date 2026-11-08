import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects
} from './types-5.js';
import type { CheckoutTaxConfig, CheckoutTipConfig } from './types-6.js';
import type {
    ExpandedSubscriptionPlanSummary,
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedOrderSummary
} from './types-23.js';
import type { ImageAttachment } from './types-27.js';
import type { InventoryRoutingSource } from './types-29.js';
import type { LegalSettings } from './types-34.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-36.js';
import type { MoneyValue } from './types-37.js';
import type {
    PaymentLink,
    PaymentLinkCustomField,
    PaymentLinkEventConfig,
    PaymentLinkLineItem,
    PaymentLinkSalesSummary
} from './types-44.js';
import type { ThemeConfig } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CreatePaymentLinkRequestInput, CreatePaymentMethodDomainRequestInput } from './types-11.js';
import type { ResolvePaymentLinkRequestInput, ResponseMeta, ResourceReference } from './types-51.js';
import type { UpdatePaymentLinkRequestInput, UpdatePaymentMethodDomainRequestInput } from './types-64.js';
import type { CardDetails } from './types-4.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { StripeClientSetup } from './types-57.js';
import type { SavePaymentMethodRequestInput } from './types-56.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { DeclinePaymentReviewRequestInput } from './types-15.js';
import type {
    PaymentSourceCredentialStripeConfirmationToken,
    PaymentSourceCredentialToken,
    PaymentSourceCredentialPaymentMethodInput,
    PaymentSourceCredentialStripeConfirmationTokenInput,
    PaymentSourceCredentialTokenInput
} from './types-46.js';
/**
 * The `payment_link.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentLinkUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.donation_min_amount_money (Optional): {@link
     * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}.
     * Amounts a donation link offers as one-tap choices.
     * object.donation_suggested_amount_money_options[] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.event_config (Optional): {@link PaymentLinkEventConfig}. Event details for an `event`
     * link: when and where it takes place and how many tickets it sells. Event settings on an
     * event payment link, such as its date, venue, ticket limit, and ticket emails.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.image (Optional):
     * {@link ImageAttachment}. Image shown to buyers with the link. An image attached to a
     * resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Where an order,
     * payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
     * expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}.
     * Available to merchant callers, including dashboard sessions and API keys with
     * checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales
     * summary. Paid-order sales totals for a payment link, computed on request. Paid means the
     * order's collection has completed. Fully and partially refunded orders still count, and
     * paid_totals reports the amount collected before refunds. Each order counts once even if it
     * has multiple checkout sessions. object.status (Required): string. Whether the link can start
     * new checkouts. Value enum: "active", "inactive". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.tax (Optional): {@link CheckoutTaxConfig}. Tax settings for checkouts started from
     * this link. Whether tax is collected for a checkout session or payment link. object.theme
     * (Optional): {@link ThemeConfig}. The title and colors for checkouts started from this link,
     * over your branding settings. Colors and title applied to a payment link's checkout page.
     * object.tip (Optional): {@link CheckoutTipConfig}. Tip options for checkouts started from
     * this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.total_quantity_sold (Required):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.url (Required): string. URL buyers open to use the link.
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. donation_min_amount_money (Optional): {@link
         * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. donation_suggested_amount_money_options[]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event
         * details for an `event` link: when and where it takes place and how many tickets it
         * sells. Event settings on an event payment link, such as its date, venue, ticket limit,
         * and ticket emails. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
         * inventory allocation policy, or one policy revision. legal (Optional): {@link
         * LegalSettings}. The terms and policy links checkouts started from this link show the
         * buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the
         * terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is embedded; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
         * expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link CheckoutTaxConfig}.
         * Tax settings for checkouts started from this link. Whether tax is collected for a
         * checkout session or payment link. theme (Optional): {@link ThemeConfig}. The title and
         * colors for checkouts started from this link, over your branding settings. Colors and
         * title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Where an order, payment link, or reservation routes inventory from: a fixed
             * Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is embedded; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentLink>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_link.updated". */
    "event_type"?: "payment_link.updated";
});
export type PaymentLinksCreateParams = (InputValue<CreatePaymentLinkRequestInput>)
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
export type PaymentLinksGetParams = {
    /**
     * Include related objects in the response. Supported expansions: sales_summary,
     * subscription_plan. sales_summary requires checkouts.payment_links.read and is also available
     * to dashboard sessions. subscription_plan additionally requires
     * commerce.subscription_plans.read. sales_summary is supported only on this get route. Limits:
     * at most 10 unique expand paths per request. [] enum: "sales_summary", "subscription_plan".
     * Value enum: "sales_summary", "subscription_plan". anyOf[1] (Value): Array of string. []
     * enum: "sales_summary", "subscription_plan". anyOf[1][] (Value): string. Value enum:
     * "sales_summary", "subscription_plan". anyOf[2] (Value): string. Value enum: "sales_summary",
     * "subscription_plan".
     */
    "expand"?: InputValue<("sales_summary" | "subscription_plan") | readonly ("sales_summary" | "subscription_plan")[]>;
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
export type PaymentLinksGetPublicParams = {};
export type PaymentLinksListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by payment link status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "active", "inactive". Value enum: "active", "inactive". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "active", "inactive". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive". anyOf[2] (Value): string. Value enum: "active",
     * "inactive".
     */
    "status"?: InputValue<("active" | "inactive") | readonly ("active" | "inactive")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across payment link ID, external reference ID, name, and description. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as pl_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by payment link type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "standard", "donation", "event". Value enum: "standard", "donation",
     * "event". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "standard", "donation",
     * "event". anyOf[1][] (Value): string. Value enum: "standard", "donation", "event". anyOf[2]
     * (Value): string. Value enum: "standard", "donation", "event".
     */
    "payment_link_type"?: InputValue<("standard" | "donation" | "event") | readonly ("standard" | "donation" | "event")[]>;
    /** Filter by whether the payment link references a subscription plan. */
    "has_subscription_plan"?: InputValue<boolean>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by payment_link_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: sales_summary,
     * subscription_plan. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "sales_summary", "subscription_plan". Value enum: "sales_summary",
     * "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "sales_summary",
     * "subscription_plan". anyOf[1][] (Value): string. Value enum: "sales_summary",
     * "subscription_plan". anyOf[2] (Value): string. Value enum: "sales_summary",
     * "subscription_plan".
     */
    "expand"?: InputValue<("sales_summary" | "subscription_plan") | readonly ("sales_summary" | "subscription_plan")[]>;
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
export type PaymentLinksResolveParams = (InputValue<ResolvePaymentLinkRequestInput>);
export type PaymentLinksUpdateParams = (InputValue<UpdatePaymentLinkRequestInput>)
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
/** A customer's saved payment details. */
export type PaymentMethod = {
    /**
     * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a payment
     * method: brand, expiration month and year, last four digits, and the wallet when one was
     * used.
     */
    "card"?: CardDetails;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * A value that is the same for every saved copy of one card number at this merchant and
     * environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card
     * added through Apple Pay or Google Pay can have a different fingerprint from the same card
     * typed in.
     */
    "fingerprint"?: string;
    /**
     * Whether this is the customer's default payment method, the one
     * Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     */
    "is_default": boolean;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Unique identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
    /**
     * Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when
     * Flint wallet support is enabled. Accept future values. Value enum: "flint", "store".
     */
    "saved_with"?: "flint" | "store" | (string & {});
    /**
     * Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed".
     */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Kind of payment method. Value enum: "card". */
    "type": "card" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * When Flint may charge the payment method. off_session payment methods can pay subscriptions,
     * automatic invoices, and other charges without the buyer, and can be a customer's default.
     * on_session payment methods were saved by the buyer in checkout for faster checkout at this
     * merchant; Flint charges them only in checkouts the buyer completes and refuses them for any
     * charge without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session".
     */
    "usage": "on_session" | "off_session" | (string & {});
};
export type PaymentMethodActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_method.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_method.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_method.activated";
});
/**
 * The `payment_method.activated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentMethodActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint (Optional): string. A value that is the
     * same for every saved copy of one card number at this merchant and environment, so you can
     * spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay
     * or Google Pay can have a different fingerprint from the same card typed in.
     * object.is_default (Required): boolean. Whether this is the customer's default payment
     * method, the one Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.payment_method_id (Required): string. Unique
     * identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with (Optional): string. Where the buyer saved
     * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support
     * is enabled. Accept future values. Value enum: "flint", "store". object.status (Required):
     * string. Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed". object.type (Required): string. Kind of payment method. Value enum:
     * "card". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may charge the payment
     * method. off_session payment methods can pay subscriptions, automatic invoices, and other
     * charges without the buyer, and can be a customer's default. on_session payment methods were
     * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only
     * in checkouts the buyer completes and refuses them for any charge without the buyer and as a
     * default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional):
         * string. A value that is the same for every saved copy of one card number at this
         * merchant and environment, so you can spot duplicates. It doesn't identify the card
         * anywhere else. A card added through Apple Pay or Google Pay can have a different
         * fingerprint from the same card typed in. is_default (Required): boolean. Whether this is
         * the customer's default payment method, the one Customer.default_payment_method_id names.
         * Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated,
         * not a payment method event. merchant_id (Required): string. ID of the merchant this
         * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". payment_method_id
         * (Required): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional): string. Where the buyer saved
         * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet
         * support is enabled. Accept future values. Value enum: "flint", "store". status
         * (Required): string. Whether the payment method can be charged. Treat any value other
         * than active as not chargeable, including values added later. Value enum: "pending",
         * "active", "expired", "archived", "failed". type (Required): string. Kind of payment
         * method. Value enum: "card". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may
         * charge the payment method. off_session payment methods can pay subscriptions, automatic
         * invoices, and other charges without the buyer, and can be a customer's default.
         * on_session payment methods were saved by the buyer in checkout for faster checkout at
         * this merchant; Flint charges them only in checkouts the buyer completes and refuses them
         * for any charge without the buyer and as a default. Payment methods saved before usage
         * existed are off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event.
             */
            "is_default": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * Whether the payment method can be charged. Treat any value other than active as not
             * chargeable, including values added later. Value enum: "pending", "active",
             * "expired", "archived", "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_method.activated". */
    "event_type"?: "payment_method.activated";
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
 * The `payment_method.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint (Optional): string. A value that is the
     * same for every saved copy of one card number at this merchant and environment, so you can
     * spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay
     * or Google Pay can have a different fingerprint from the same card typed in.
     * object.is_default (Required): boolean. Whether this is the customer's default payment
     * method, the one Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.payment_method_id (Required): string. Unique
     * identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with (Optional): string. Where the buyer saved
     * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support
     * is enabled. Accept future values. Value enum: "flint", "store". object.status (Required):
     * string. Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed". object.type (Required): string. Kind of payment method. Value enum:
     * "card". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may charge the payment
     * method. off_session payment methods can pay subscriptions, automatic invoices, and other
     * charges without the buyer, and can be a customer's default. on_session payment methods were
     * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only
     * in checkouts the buyer completes and refuses them for any charge without the buyer and as a
     * default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional):
         * string. A value that is the same for every saved copy of one card number at this
         * merchant and environment, so you can spot duplicates. It doesn't identify the card
         * anywhere else. A card added through Apple Pay or Google Pay can have a different
         * fingerprint from the same card typed in. is_default (Required): boolean. Whether this is
         * the customer's default payment method, the one Customer.default_payment_method_id names.
         * Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated,
         * not a payment method event. merchant_id (Required): string. ID of the merchant this
         * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". payment_method_id
         * (Required): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional): string. Where the buyer saved
         * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet
         * support is enabled. Accept future values. Value enum: "flint", "store". status
         * (Required): string. Whether the payment method can be charged. Treat any value other
         * than active as not chargeable, including values added later. Value enum: "pending",
         * "active", "expired", "archived", "failed". type (Required): string. Kind of payment
         * method. Value enum: "card". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may
         * charge the payment method. off_session payment methods can pay subscriptions, automatic
         * invoices, and other charges without the buyer, and can be a customer's default.
         * on_session payment methods were saved by the buyer in checkout for faster checkout at
         * this merchant; Flint charges them only in checkouts the buyer completes and refuses them
         * for any charge without the buyer and as a default. Payment methods saved before usage
         * existed are off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event.
             */
            "is_default": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * Whether the payment method can be charged. Treat any value other than active as not
             * chargeable, including values added later. Value enum: "pending", "active",
             * "expired", "archived", "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_method.activated". */
    "event_type"?: "payment_method.activated";
});
export type PaymentMethodArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_method.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_method.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_method.archived";
});
/**
 * The `payment_method.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentMethodArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint (Optional): string. A value that is the
     * same for every saved copy of one card number at this merchant and environment, so you can
     * spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay
     * or Google Pay can have a different fingerprint from the same card typed in.
     * object.is_default (Required): boolean. Whether this is the customer's default payment
     * method, the one Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.payment_method_id (Required): string. Unique
     * identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with (Optional): string. Where the buyer saved
     * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support
     * is enabled. Accept future values. Value enum: "flint", "store". object.status (Required):
     * string. Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed". object.type (Required): string. Kind of payment method. Value enum:
     * "card". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may charge the payment
     * method. off_session payment methods can pay subscriptions, automatic invoices, and other
     * charges without the buyer, and can be a customer's default. on_session payment methods were
     * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only
     * in checkouts the buyer completes and refuses them for any charge without the buyer and as a
     * default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional):
         * string. A value that is the same for every saved copy of one card number at this
         * merchant and environment, so you can spot duplicates. It doesn't identify the card
         * anywhere else. A card added through Apple Pay or Google Pay can have a different
         * fingerprint from the same card typed in. is_default (Required): boolean. Whether this is
         * the customer's default payment method, the one Customer.default_payment_method_id names.
         * Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated,
         * not a payment method event. merchant_id (Required): string. ID of the merchant this
         * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". payment_method_id
         * (Required): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional): string. Where the buyer saved
         * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet
         * support is enabled. Accept future values. Value enum: "flint", "store". status
         * (Required): string. Whether the payment method can be charged. Treat any value other
         * than active as not chargeable, including values added later. Value enum: "pending",
         * "active", "expired", "archived", "failed". type (Required): string. Kind of payment
         * method. Value enum: "card". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may
         * charge the payment method. off_session payment methods can pay subscriptions, automatic
         * invoices, and other charges without the buyer, and can be a customer's default.
         * on_session payment methods were saved by the buyer in checkout for faster checkout at
         * this merchant; Flint charges them only in checkouts the buyer completes and refuses them
         * for any charge without the buyer and as a default. Payment methods saved before usage
         * existed are off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event.
             */
            "is_default": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * Whether the payment method can be charged. Treat any value other than active as not
             * chargeable, including values added later. Value enum: "pending", "active",
             * "expired", "archived", "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived";
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
 * The `payment_method.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint (Optional): string. A value that is the
     * same for every saved copy of one card number at this merchant and environment, so you can
     * spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay
     * or Google Pay can have a different fingerprint from the same card typed in.
     * object.is_default (Required): boolean. Whether this is the customer's default payment
     * method, the one Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.payment_method_id (Required): string. Unique
     * identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with (Optional): string. Where the buyer saved
     * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support
     * is enabled. Accept future values. Value enum: "flint", "store". object.status (Required):
     * string. Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed". object.type (Required): string. Kind of payment method. Value enum:
     * "card". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may charge the payment
     * method. off_session payment methods can pay subscriptions, automatic invoices, and other
     * charges without the buyer, and can be a customer's default. on_session payment methods were
     * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only
     * in checkouts the buyer completes and refuses them for any charge without the buyer and as a
     * default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional):
         * string. A value that is the same for every saved copy of one card number at this
         * merchant and environment, so you can spot duplicates. It doesn't identify the card
         * anywhere else. A card added through Apple Pay or Google Pay can have a different
         * fingerprint from the same card typed in. is_default (Required): boolean. Whether this is
         * the customer's default payment method, the one Customer.default_payment_method_id names.
         * Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated,
         * not a payment method event. merchant_id (Required): string. ID of the merchant this
         * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". payment_method_id
         * (Required): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional): string. Where the buyer saved
         * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet
         * support is enabled. Accept future values. Value enum: "flint", "store". status
         * (Required): string. Whether the payment method can be charged. Treat any value other
         * than active as not chargeable, including values added later. Value enum: "pending",
         * "active", "expired", "archived", "failed". type (Required): string. Kind of payment
         * method. Value enum: "card". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may
         * charge the payment method. off_session payment methods can pay subscriptions, automatic
         * invoices, and other charges without the buyer, and can be a customer's default.
         * on_session payment methods were saved by the buyer in checkout for faster checkout at
         * this merchant; Flint charges them only in checkouts the buyer completes and refuses them
         * for any charge without the buyer and as a default. Payment methods saved before usage
         * existed are off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event.
             */
            "is_default": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * Whether the payment method can be charged. Treat any value other than active as not
             * chargeable, including values added later. Value enum: "pending", "active",
             * "expired", "archived", "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived";
});
/** A domain registered for browser payment methods. */
export type PaymentMethodDomain = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The registered hostname, trimmed and lowercased. ASCII only, at least two labels, each up to
     * 63 characters, 253 characters in total; no scheme, path, port, IP address, or wildcard.
     */
    "domain_name": string;
    /**
     * Flint payment method domain ID, starting with pmdom_. Example:
     * "pmdom_01KEZF7C001WQCSRGH9GWR6628".
     */
    "payment_method_domain_id": string;
    /**
     * Availability and validation status of each payment option on this domain. [] (Value): {@link
     * PaymentMethodDomainPaymentOptionStatus}. Whether a wallet payment option, Apple Pay or
     * Google Pay, is active, inactive, or unavailable for a payment method domain.
     */
    "payment_option_statuses": Array<PaymentMethodDomainPaymentOptionStatus>;
    /**
     * Whether wallet buttons are on for the hostname. Change it with `PATCH`. Value enum:
     * "active", "inactive".
     */
    "status": "active" | "inactive" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Whether the hostname passed the checks wallets need, summarizing `payment_option_statuses`.
     * Value enum: "active", "action_required", "unavailable".
     */
    "validation_status": "active" | "action_required" | "unavailable" | (string & {});
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `PaymentMethodDomain` objects. */
export type PaymentMethodDomainListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentMethodDomain}. A domain registered for browser payment methods.
     */
    "data": Array<PaymentMethodDomain>;
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
/**
 * Whether a wallet payment option, Apple Pay or Google Pay, is active, inactive, or unavailable
 * for a payment method domain.
 */
export type PaymentMethodDomainPaymentOptionStatus = {
    /** The wallet this status is for. Value enum: "apple_pay", "google_pay". */
    "payment_option": "apple_pay" | "google_pay" | (string & {});
    /**
     * Whether this wallet's button can show on the hostname. Value enum: "active", "inactive",
     * "unavailable".
     */
    "status": "active" | "inactive" | "unavailable" | (string & {});
};
/** A response containing `PaymentMethodDomain` data. */
export type PaymentMethodDomainResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A domain registered for
     * browser payment methods.
     */
    "data": PaymentMethodDomain;
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
export type PaymentMethodDomainsCreateParams = (InputValue<CreatePaymentMethodDomainRequestInput>);
export type PaymentMethodDomainsGetParams = {};
export type PaymentMethodDomainsListParams = {
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "active", "inactive". Value enum: "active", "inactive". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "active", "inactive". anyOf[1][] (Value): string. Value enum:
     * "active", "inactive". anyOf[2] (Value): string. Value enum: "active", "inactive".
     */
    "status"?: InputValue<("active" | "inactive") | readonly ("active" | "inactive")[]>;
    /**
     * Exact hostname filter after trimming whitespace and converting to lowercase. Accepts an
     * ASCII fully-qualified hostname without a URL, port, wildcard, or IP address. Matches the
     * entire stored domain name. minLength: 1. maxLength: 253.
     */
    "domain_name"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type PaymentMethodDomainsUpdateParams = (InputValue<UpdatePaymentMethodDomainRequestInput>);
export type PaymentMethodFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_method.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_method.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_method.failed";
});
/**
 * The `payment_method.failed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentMethodFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint (Optional): string. A value that is the
     * same for every saved copy of one card number at this merchant and environment, so you can
     * spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay
     * or Google Pay can have a different fingerprint from the same card typed in.
     * object.is_default (Required): boolean. Whether this is the customer's default payment
     * method, the one Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.payment_method_id (Required): string. Unique
     * identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with (Optional): string. Where the buyer saved
     * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support
     * is enabled. Accept future values. Value enum: "flint", "store". object.status (Required):
     * string. Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed". object.type (Required): string. Kind of payment method. Value enum:
     * "card". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may charge the payment
     * method. off_session payment methods can pay subscriptions, automatic invoices, and other
     * charges without the buyer, and can be a customer's default. on_session payment methods were
     * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only
     * in checkouts the buyer completes and refuses them for any charge without the buyer and as a
     * default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional):
         * string. A value that is the same for every saved copy of one card number at this
         * merchant and environment, so you can spot duplicates. It doesn't identify the card
         * anywhere else. A card added through Apple Pay or Google Pay can have a different
         * fingerprint from the same card typed in. is_default (Required): boolean. Whether this is
         * the customer's default payment method, the one Customer.default_payment_method_id names.
         * Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated,
         * not a payment method event. merchant_id (Required): string. ID of the merchant this
         * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". payment_method_id
         * (Required): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional): string. Where the buyer saved
         * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet
         * support is enabled. Accept future values. Value enum: "flint", "store". status
         * (Required): string. Whether the payment method can be charged. Treat any value other
         * than active as not chargeable, including values added later. Value enum: "pending",
         * "active", "expired", "archived", "failed". type (Required): string. Kind of payment
         * method. Value enum: "card". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may
         * charge the payment method. off_session payment methods can pay subscriptions, automatic
         * invoices, and other charges without the buyer, and can be a customer's default.
         * on_session payment methods were saved by the buyer in checkout for faster checkout at
         * this merchant; Flint charges them only in checkouts the buyer completes and refuses them
         * for any charge without the buyer and as a default. Payment methods saved before usage
         * existed are off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event.
             */
            "is_default": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * Whether the payment method can be charged. Treat any value other than active as not
             * chargeable, including values added later. Value enum: "pending", "active",
             * "expired", "archived", "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed";
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
 * The `payment_method.failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint (Optional): string. A value that is the
     * same for every saved copy of one card number at this merchant and environment, so you can
     * spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay
     * or Google Pay can have a different fingerprint from the same card typed in.
     * object.is_default (Required): boolean. Whether this is the customer's default payment
     * method, the one Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.payment_method_id (Required): string. Unique
     * identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with (Optional): string. Where the buyer saved
     * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support
     * is enabled. Accept future values. Value enum: "flint", "store". object.status (Required):
     * string. Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed". object.type (Required): string. Kind of payment method. Value enum:
     * "card". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may charge the payment
     * method. off_session payment methods can pay subscriptions, automatic invoices, and other
     * charges without the buyer, and can be a customer's default. on_session payment methods were
     * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only
     * in checkouts the buyer completes and refuses them for any charge without the buyer and as a
     * default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional):
         * string. A value that is the same for every saved copy of one card number at this
         * merchant and environment, so you can spot duplicates. It doesn't identify the card
         * anywhere else. A card added through Apple Pay or Google Pay can have a different
         * fingerprint from the same card typed in. is_default (Required): boolean. Whether this is
         * the customer's default payment method, the one Customer.default_payment_method_id names.
         * Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated,
         * not a payment method event. merchant_id (Required): string. ID of the merchant this
         * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". payment_method_id
         * (Required): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional): string. Where the buyer saved
         * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet
         * support is enabled. Accept future values. Value enum: "flint", "store". status
         * (Required): string. Whether the payment method can be charged. Treat any value other
         * than active as not chargeable, including values added later. Value enum: "pending",
         * "active", "expired", "archived", "failed". type (Required): string. Kind of payment
         * method. Value enum: "card". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may
         * charge the payment method. off_session payment methods can pay subscriptions, automatic
         * invoices, and other charges without the buyer, and can be a customer's default.
         * on_session payment methods were saved by the buyer in checkout for faster checkout at
         * this merchant; Flint charges them only in checkouts the buyer completes and refuses them
         * for any charge without the buyer and as a default. Payment methods saved before usage
         * existed are off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event.
             */
            "is_default": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * Whether the payment method can be charged. Treat any value other than active as not
             * chargeable, including values added later. Value enum: "pending", "active",
             * "expired", "archived", "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed";
});
/** A page of `PaymentMethod` objects. */
export type PaymentMethodListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentMethod}. A customer's saved payment details.
     */
    "data": Array<PaymentMethod>;
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
/** A response containing `PaymentMethod` data. */
export type PaymentMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's saved
     * payment details.
     */
    "data": PaymentMethod;
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
export type PaymentMethodUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_method.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "card"?: CardDetails;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "fingerprint"?: string;
            "is_default": boolean;
            "merchant_id": string;
            "payment_method_id": string;
            "saved_with"?: "flint" | "store" | (string & {});
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            "type": "card" | (string & {});
            "updated_at": string;
            "usage": "on_session" | "off_session" | (string & {});
        };
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_method.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_method.updated";
});
/**
 * The `payment_method.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentMethodUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint (Optional): string. A value that is the
     * same for every saved copy of one card number at this merchant and environment, so you can
     * spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay
     * or Google Pay can have a different fingerprint from the same card typed in.
     * object.is_default (Required): boolean. Whether this is the customer's default payment
     * method, the one Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.payment_method_id (Required): string. Unique
     * identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with (Optional): string. Where the buyer saved
     * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support
     * is enabled. Accept future values. Value enum: "flint", "store". object.status (Required):
     * string. Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed". object.type (Required): string. Kind of payment method. Value enum:
     * "card". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may charge the payment
     * method. off_session payment methods can pay subscriptions, automatic invoices, and other
     * charges without the buyer, and can be a customer's default. on_session payment methods were
     * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only
     * in checkouts the buyer completes and refuses them for any charge without the buyer and as a
     * default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional):
         * string. A value that is the same for every saved copy of one card number at this
         * merchant and environment, so you can spot duplicates. It doesn't identify the card
         * anywhere else. A card added through Apple Pay or Google Pay can have a different
         * fingerprint from the same card typed in. is_default (Required): boolean. Whether this is
         * the customer's default payment method, the one Customer.default_payment_method_id names.
         * Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated,
         * not a payment method event. merchant_id (Required): string. ID of the merchant this
         * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". payment_method_id
         * (Required): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional): string. Where the buyer saved
         * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet
         * support is enabled. Accept future values. Value enum: "flint", "store". status
         * (Required): string. Whether the payment method can be charged. Treat any value other
         * than active as not chargeable, including values added later. Value enum: "pending",
         * "active", "expired", "archived", "failed". type (Required): string. Kind of payment
         * method. Value enum: "card". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may
         * charge the payment method. off_session payment methods can pay subscriptions, automatic
         * invoices, and other charges without the buyer, and can be a customer's default.
         * on_session payment methods were saved by the buyer in checkout for faster checkout at
         * this merchant; Flint charges them only in checkouts the buyer completes and refuses them
         * for any charge without the buyer and as a default. Payment methods saved before usage
         * existed are off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event.
             */
            "is_default": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * Whether the payment method can be charged. Treat any value other than active as not
             * chargeable, including values added later. Value enum: "pending", "active",
             * "expired", "archived", "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_method.updated". */
    "event_type"?: "payment_method.updated";
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
 * The `payment_method.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.card (Optional): {@link CardDetails}. Brand, expiry and last four
     * digits. Present when `type` is `card`. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.fingerprint (Optional): string. A value that is the
     * same for every saved copy of one card number at this merchant and environment, so you can
     * spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay
     * or Google Pay can have a different fingerprint from the same card typed in.
     * object.is_default (Required): boolean. Whether this is the customer's default payment
     * method, the one Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.payment_method_id (Required): string. Unique
     * identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.saved_with (Optional): string. Where the buyer saved
     * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support
     * is enabled. Accept future values. Value enum: "flint", "store". object.status (Required):
     * string. Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed". object.type (Required): string. Kind of payment method. Value enum:
     * "card". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.usage (Required): string. When Flint may charge the payment
     * method. off_session payment methods can pay subscriptions, automatic invoices, and other
     * charges without the buyer, and can be a customer's default. on_session payment methods were
     * saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only
     * in checkouts the buyer completes and refuses them for any charge without the buyer and as a
     * default. Payment methods saved before usage existed are off_session. Value enum:
     * "on_session", "off_session". previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. card
         * (Optional): {@link CardDetails}. Brand, expiry and last four digits. Present when `type`
         * is `card`. Card details on a payment method: brand, expiration month and year, last four
         * digits, and the wallet when one was used. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". fingerprint (Optional):
         * string. A value that is the same for every saved copy of one card number at this
         * merchant and environment, so you can spot duplicates. It doesn't identify the card
         * anywhere else. A card added through Apple Pay or Google Pay can have a different
         * fingerprint from the same card typed in. is_default (Required): boolean. Whether this is
         * the customer's default payment method, the one Customer.default_payment_method_id names.
         * Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated,
         * not a payment method event. merchant_id (Required): string. ID of the merchant this
         * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". payment_method_id
         * (Required): string. Unique identifier for this payment method, prefixed `pm_`. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". saved_with (Optional): string. Where the buyer saved
         * this payment method. Returned on /v1/me/payment-methods responses when Flint wallet
         * support is enabled. Accept future values. Value enum: "flint", "store". status
         * (Required): string. Whether the payment method can be charged. Treat any value other
         * than active as not chargeable, including values added later. Value enum: "pending",
         * "active", "expired", "archived", "failed". type (Required): string. Kind of payment
         * method. Value enum: "card". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". usage (Required): string. When Flint may
         * charge the payment method. off_session payment methods can pay subscriptions, automatic
         * invoices, and other charges without the buyer, and can be a customer's default.
         * on_session payment methods were saved by the buyer in checkout for faster checkout at
         * this merchant; Flint charges them only in checkouts the buyer completes and refuses them
         * for any charge without the buyer and as a default. Payment methods saved before usage
         * existed are off_session. Value enum: "on_session", "off_session".
         */
        "object": {
            /**
             * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a
             * payment method: brand, expiration month and year, last four digits, and the wallet
             * when one was used.
             */
            "card"?: CardDetails;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * A value that is the same for every saved copy of one card number at this merchant
             * and environment, so you can spot duplicates. It doesn't identify the card anywhere
             * else. A card added through Apple Pay or Google Pay can have a different fingerprint
             * from the same card typed in.
             */
            "fingerprint"?: string;
            /**
             * Whether this is the customer's default payment method, the one
             * Customer.default_payment_method_id names. Change the default with PATCH
             * /v1/customers/{customer_id}; that sends customer.updated, not a payment method
             * event.
             */
            "is_default": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Unique identifier for this payment method, prefixed `pm_`. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string;
            /**
             * Where the buyer saved this payment method. Returned on /v1/me/payment-methods
             * responses when Flint wallet support is enabled. Accept future values. Value enum:
             * "flint", "store".
             */
            "saved_with"?: "flint" | "store" | (string & {});
            /**
             * Whether the payment method can be charged. Treat any value other than active as not
             * chargeable, including values added later. Value enum: "pending", "active",
             * "expired", "archived", "failed".
             */
            "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
            /** Kind of payment method. Value enum: "card". */
            "type": "card" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * When Flint may charge the payment method. off_session payment methods can pay
             * subscriptions, automatic invoices, and other charges without the buyer, and can be a
             * customer's default. on_session payment methods were saved by the buyer in checkout
             * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
             * completes and refuses them for any charge without the buyer and as a default.
             * Payment methods saved before usage existed are off_session. Value enum:
             * "on_session", "off_session".
             */
            "usage": "on_session" | "off_session" | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentMethod>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_method.updated". */
    "event_type"?: "payment_method.updated";
});
/**
 * The saved payment method, with `client_setup` when the buyer must still complete processor setup
 * before the payment method can be used. A customer's saved payment details.
 */
export type PaymentMethodWithSetup = (Exclude<PaymentMethod & object, readonly unknown[]>)
    & ({
    /**
     * Present when the buyer must complete processor setup before using this payment method.
     * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call
     * now. setup_collection is guidance instead and never carries a secret.
     */
    "client_setup"?: StripeClientSetup;
});
export type PaymentMethodsCreateParams = (InputValue<SavePaymentMethodRequestInput>)
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
export type PaymentMethodsDeleteParams = DisputesAcceptParams;
export type PaymentMethodsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer. Expansion requires
     * payments.payment_methods.read plus customers.read. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer". Value enum: "customer". anyOf[1] (Value): Array of string.
     * [] enum: "customer". anyOf[1][] (Value): string. Value enum: "customer". anyOf[2] (Value):
     * string. Value enum: "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
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
export type PaymentMethodsListParams = {
    /** Optional Flint customer ID filter. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by payment method type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "card". Value enum: "card". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "card". anyOf[1][] (Value): string. Value enum: "card". anyOf[2] (Value):
     * string. Value enum: "card".
     */
    "type"?: InputValue<("card") | readonly ("card")[]>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "pending", "expired", "archived", "failed". Value enum: "active", "pending", "expired",
     * "archived", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "pending", "expired", "archived", "failed". anyOf[1][] (Value): string. Value enum:
     * "active", "pending", "expired", "archived", "failed". anyOf[2] (Value): string. Value enum:
     * "active", "pending", "expired", "archived", "failed".
     */
    "status"?: InputValue<("active" | "pending" | "expired" | "archived" | "failed")
        | readonly ("active" | "pending" | "expired" | "archived" | "failed")[]>;
    /**
     * Filter by usage: off_session payment methods can be charged without the buyer; on_session
     * ones were saved by buyers for faster checkout. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "on_session", "off_session". Value enum: "on_session",
     * "off_session". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "on_session",
     * "off_session". anyOf[1][] (Value): string. Value enum: "on_session", "off_session". anyOf[2]
     * (Value): string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<("on_session" | "off_session") | readonly ("on_session" | "off_session")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: customer. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "customer". Value enum: "customer". anyOf[1] (Value): Array of string. [] enum: "customer".
     * anyOf[1][] (Value): string. Value enum: "customer". anyOf[2] (Value): string. Value enum:
     * "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
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
/**
 * The part of a refund returned through one payment, with the amount, tip, status, and any failure
 * reason.
 */
export type PaymentRefund = {
    /**
     * Amount refunded through this payment, including `refunded_tip_money`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded
     * and there is no related payment intent. anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /**
     * The payment this part of the refund returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Share of `amount_money` that refunds tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * When this payment refund's `status` first became `succeeded`, as Flint recorded the
     * processor's outcome. It keeps that time if the part fails and later succeeds again. The
     * refund's `tender_allocations` entry for the same payment has the same value. Present only
     * while `status` is `succeeded`. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
};
/** A payment review requiring a merchant decision. */
export type PaymentReview = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "closed_at": string | null;
    /**
     * The credential that closed this payment review. Null when Flint closed it. anyOf[1] (Value):
     * {@link ResourceReference}. A reference to another resource by `resource_type` and
     * `resource_id`. anyOf[2] (Value): null.
     */
    "closed_by": ((ResourceReference) | (null));
    /**
     * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled", "expired",
     * null.
     */
    "closed_reason": "approved"
        | "declined"
        | "refunded"
        | "disputed"
        | "payment_canceled"
        | "expired"
        | null
        | (string & {})
        | null;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string | null;
    "ip_address": string | null;
    /**
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. anyOf[2] (Value): null.
     */
    "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
    /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "matched_risk_rule_id": string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "opened_at": string;
    /** Value enum: "rule". */
    "opened_reason": "rule" | (string & {});
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string | null;
    /**
     * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "payment_review_id": string;
    /**
     * The payment details shown on a review: amount, capture method, authorization expiry, card
     * brand and last four digits, and buyer email.
     */
    "payment_summary": PaymentReviewPaymentSummary;
    /**
     * The decision being carried out. `null` when status isn't resolving. Value enum: "approve",
     * "decline", "expire", null.
     */
    "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
    /**
     * The refund that closed this review. Null otherwise. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string | null;
    /**
     * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. anyOf[2] (Value): null.
     */
    "refunded_money": ((MoneyValue) | (null));
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "resolution_started_at": string | null;
    /**
     * The credential that started resolving this payment review, retained after closure. Null when
     * no resolution has started or Flint started it. anyOf[1] (Value): {@link ResourceReference}.
     * A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value):
     * null.
     */
    "resolution_started_by": ((ResourceReference) | (null));
    /** The risk assessment shown on a review: a `level` and, when available, a numeric `score`. */
    "risk": PaymentReviewRisk;
    /** Value enum: "open", "resolving", "closed". */
    "status": "open" | "resolving" | "closed" | (string & {});
    /**
     * Lifecycle actions accepted in the current stored review state. An action remains listed
     * while it is processing or can be repeated without changing the result. [] enum: "approve",
     * "decline". [] (Value): string. Value enum: "approve", "decline".
     */
    "supported_actions": Array<"approve" | "decline" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type PaymentReviewClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_review.closed";
});
/**
 * The `payment_review.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
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
 * The `payment_review.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
});
/** A page of `PaymentReview` objects. */
export type PaymentReviewListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentReview}. A payment review requiring a merchant decision.
     */
    "data": Array<PaymentReview>;
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
export type PaymentReviewOpenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.opened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.opened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_review.opened";
});
/**
 * The `payment_review.opened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewOpenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened";
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
 * The `payment_review.opened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewOpenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened";
});
/**
 * The payment details shown on a review: amount, capture method, authorization expiry, card brand
 * and last four digits, and buyer email.
 */
export type PaymentReviewPaymentSummary = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * Effective Flint capture deadline: the earlier of the provider capture deadline and any order
     * resource guarantee. `null` when the payment has no authorization deadline. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at": string | null;
    /** Value enum: "automatic", "manual". */
    "capture_method": "automatic" | "manual" | (string & {});
    "email": string;
    "last4": string;
    /**
     * Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa",
     * "unknown".
     */
    "payment_method_brand": "amex"
        | "discover"
        | "diners"
        | "jcb"
        | "mastercard"
        | "unionpay"
        | "visa"
        | "unknown"
        | (string & {});
};
export type PaymentReviewReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.reopened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_review.reopened";
});
/**
 * The `payment_review.reopened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewReopenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened";
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
 * The `payment_review.reopened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened";
});
/** A failed attempt to resolve a review by refund, with the `refund_id` and when it failed. */
export type PaymentReviewResolutionFailure = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "failed_at": string;
    /** Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
    "refund_id": string;
};
/** A response containing `PaymentReview` data. */
export type PaymentReviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A payment review
     * requiring a merchant decision.
     */
    "data": PaymentReview;
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
/** The risk assessment shown on a review: a `level` and, when available, a numeric `score`. */
export type PaymentReviewRisk = {
    /** Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum:
     * 99.
     */
    "score"?: number;
};
export type PaymentReviewsApproveParams = DisputesAcceptParams;
export type PaymentReviewsDeclineParams = (InputValue<DeclinePaymentReviewRequestInput> | {
    "add_to_block_lists"?: never;
})
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
export type PaymentReviewsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order,
     * payment_intent. Expansion requires risk.read plus the read scope for each expanded resource.
     * Limits: at most 10 unique expand paths per request. [] enum: "customer", "order",
     * "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1] (Value): Array
     * of string. [] enum: "customer", "order", "payment_intent". anyOf[1][] (Value): string. Value
     * enum: "customer", "order", "payment_intent". anyOf[2] (Value): string. Value enum:
     * "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
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
export type PaymentReviewsListParams = {
    /**
     * Filter by review status. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "open", "resolving", "closed". Value
     * enum: "open", "resolving", "closed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "open", "resolving", "closed". anyOf[1][] (Value): string. Value enum: "open",
     * "resolving", "closed". anyOf[2] (Value): string. Value enum: "open", "resolving", "closed".
     */
    "status"?: InputValue<("open" | "resolving" | "closed") | readonly ("open" | "resolving" | "closed")[]>;
    /**
     * Filter by immutable review risk level. Repeat or comma-separate values. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "normal", "elevated", "highest",
     * "not_assessed". Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[1][] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[2] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed".
     */
    "risk_level"?: InputValue<("normal" | "elevated" | "highest" | "not_assessed")
        | readonly ("normal" | "elevated" | "highest" | "not_assessed")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1][] (Value): string. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[2] (Value): string. Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")
        | readonly ("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")[]>;
    /** Filter by Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id"?: InputValue<string>;
    /** Filter by Flint order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /** Filter by Flint customer ID. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: InputValue<string>;
    /** Inclusive lower bound on opened_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "opened_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on opened_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "opened_before"?: InputValue<string | globalThis.Date>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Include related objects in the response. Supported expansions: customer, order,
     * payment_intent. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer", "order", "payment_intent". Value enum: "customer",
     * "order", "payment_intent". anyOf[1] (Value): Array of string. [] enum: "customer", "order",
     * "payment_intent". anyOf[1][] (Value): string. Value enum: "customer", "order",
     * "payment_intent". anyOf[2] (Value): string. Value enum: "customer", "order",
     * "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
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
/**
 * The risk assessment for a payment intent, with its risk level, score, outcome, and any matched
 * rule or review.
 */
export type PaymentRisk = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /** Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "matched_risk_rule_id"?: string;
    /** Value enum: "authorized", "manual_review", "blocked", "issuer_declined", "invalid", null. */
    "outcome"?: "authorized"
        | "manual_review"
        | "blocked"
        | "issuer_declined"
        | "invalid"
        | null
        | (string & {})
        | null;
    /**
     * Value enum: "highest_risk", "elevated_risk", "low_authorization_probability", "risk_rule",
     * "risk_policy", null.
     */
    "outcome_reason"?: "highest_risk"
        | "elevated_risk"
        | "low_authorization_probability"
        | "risk_rule"
        | "risk_policy"
        | null
        | (string & {})
        | null;
    /** Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". */
    "payment_review_id"?: string;
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum:
     * 99.
     */
    "score"?: number;
    "statement": string;
};
/** Settings for the statement text on new payments. */
export type PaymentSettings = {
    /**
     * Static text shown on buyers' statements for new payments. `null` when the provider default
     * is used. Changing it does not change past payments. Once this setting has been applied,
     * changes made directly in the processor are overwritten by Flint's applied value.
     */
    "statement_descriptor": string | null;
};
/** Changes to the statement text for new payments. */
export type PaymentSettingsPatch = {
    /**
     * Static text for new payments: 5 to 22 Latin characters, including at least one letter,
     * without < > \ ' " * or control characters. Omit to leave unchanged. Send null to restore the
     * provider default. minLength: 5. maxLength: 22.
     */
    "statement_descriptor"?: string | null;
};
/** Changes to the statement text for new payments. */
export type PaymentSettingsPatchInput = PaymentSettingsPatch;
/**
 * Display details for a bank account payment source: account type, bank name, and last four
 * digits.
 */
export type PaymentSourceAchDebitSummary = {
    /** Value enum: "checking", "savings", "other". */
    "account_type"?: "checking" | "savings" | "other" | (string & {});
    "bank_name"?: string;
    "last4"?: string;
};
/** Display details for a card payment source: brand, last four digits, and payment method ID. */
export type PaymentSourceCardSummary = {
    /** Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". */
    "brand"?: "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    "last4"?: string;
    /** Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id"?: string;
};
/**
 * The credential you provide to pay an order: a payment source token, a saved payment method ID,
 * or a Stripe confirmation token.
 */
export type PaymentSourceCredential = ((PaymentSourceCredentialToken)
    | (PaymentSourceCredentialPaymentMethod)
    | (PaymentSourceCredentialStripeConfirmationToken)
    | (Record<string, unknown>));
/**
 * The credential you provide to pay an order: a payment source token, a saved payment method ID,
 * or a Stripe confirmation token.
 */
export type PaymentSourceCredentialInput = ((PaymentSourceCredentialTokenInput)
    | (PaymentSourceCredentialPaymentMethodInput)
    | (PaymentSourceCredentialStripeConfirmationTokenInput));
/** The `payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialPaymentMethod = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /**
     * Whether the customer is present for this payment. Defaults to present. Send absent to charge
     * a saved card while the customer is away, such as for a no-show fee, damages, or a top-up.
     * Flint then sends the charge to the card network as merchant-initiated, using the card's
     * stored credential, so the bank can't ask the customer to authenticate. absent can be sent
     * only with an API key or partner token, and only for a saved card whose usage is off_session;
     * a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason
     * payment_method_not_reusable. If the bank still requires authentication, the payment fails
     * with status requires_payment_method and last_payment_error.code authentication_required. Ask
     * the customer to pay while present instead of retrying. Default: "present". Value enum:
     * "present", "absent".
     */
    "customer_presence"?: "present" | "absent" | (string & {});
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
