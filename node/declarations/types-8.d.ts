import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { CheckoutBuyerFields, CheckoutCustomTextConfig, CheckoutBuyerFieldsInput } from './types-3.js';
import type {
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutPromotionConfigInput,
    CheckoutRedirectsRequestInput,
    CheckoutTaxConfigInput,
    CheckoutTipConfigInput
} from './types-4.js';
import type { ImageRequest, ImageRequestInput } from './types-20.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-25.js';
import type { LegalSettings } from './types-28.js';
import type {
    PaymentLinkCustomFieldRequest,
    PaymentLinkEventConfig,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput
} from './types-35.js';
import type {
    PaymentLinkLineItemRequest,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput,
    PaymentRefund
} from './types-36.js';
import type { ThemeConfig } from './types-47.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type {
    ProductVariantRequest,
    ProductVariantRequestInput,
    PromotionApplicationMethodRequest,
    PromotionApplicationMethodRequestInput
} from './types-37.js';
import type {
    PromotionCombinesWithPatch,
    PromotionExclusivityRequest,
    PromotionRuleGroupRequest,
    PromotionSchedule,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityRequestInput,
    PromotionRuleGroupRequestInput,
    PromotionScheduleInput
} from './types-38.js';
import type {
    RefundCharge,
    RefundDestinations,
    RefundLineItem,
    RefundTaxBreakdownRefundIn,
    RefundTenderAllocationRequest,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationRequestInput,
    Refund,
    RefundGiftCardCode,
    RefundLineItemAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from './types-39.js';
import type {
    ResponseMeta,
    ReturnEligibilitySelection,
    ReturnEligibilitySelectionInput,
    ReturnInspectionLineItemRequest,
    ReturnInspectionLineItemRequestInput,
    ReturnEligibilityPreview
} from './types-40.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-16.js';
import type {
    ReturnSourceSystem,
    ReturnSourceSystemInput,
    ReturnResolutionPreview,
    ReturnReplacementLineItemRequest,
    ReturnResolutionAdjustmentRequest,
    ReturnResolutionLineItemRequest,
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput
} from './types-42.js';
import type {
    ReturnPolicyRevisionRequest,
    ReturnPolicyRevisionRequestInput,
    ReturnReceiptLineItemRequest,
    ReturnReceiptLineItemRequestInput,
    ReturnLineItemRequest,
    ReturnLineItemRequestInput
} from './types-41.js';
import type { CreateReturnResolutionRequestStandard } from './types-9.js';
/**
 * Shape $ (Value): {@link CreatePaymentIntentRequest}. The request body for: Create standalone
 * payment intent.
 */
export type CreatePaymentIntentRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount to request from the buyer, including any
     * tip_money. With capture_method manual, this is the hold amount, and you can capture less of
     * it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string. Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use. Name at least one.
     * minItems: 1. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[]
     * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): string. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm. Required when payment_options includes affirm. It can't
     * contain credentials, a query string, or a fragment. Test mode also accepts http loopback
     * URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): string. Email address for this payment's receipt. When omitted, Flint uses
     * the customer's email. Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Not accepted on order-linked payment
     * intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Why the bank debit is taken. Required when payment_options includes
     * ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose
     * otherwise. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
});
/**
 * Shape $ (Value): {@link CreatePaymentIntentRequestInput}. The request body for: Create
 * standalone payment intent.
 */
export type CreatePaymentIntentRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount to request from the buyer, including any
     * tip_money. With capture_method manual, this is the hold amount, and you can capture less of
     * it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
    /** Shape $ (Value): string. Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use. Name at least one.
     * minItems: 1. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[]
     * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Shape $ (Value): string. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm. Required when payment_options includes affirm. It can't
     * contain credentials, a query string, or a fragment. Test mode also accepts http loopback
     * URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): string. Email address for this payment's receipt. When omitted, Flint uses
     * the customer's email. Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Not accepted on order-linked payment
     * intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Why the bank debit is taken. Required when payment_options includes
     * ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose
     * otherwise. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other";
});
/** Shape $ (Value): {@link CreatePaymentLinkRequest}. The request body for: Create payment link. */
export type CreatePaymentLinkRequest = {
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): integer string. Seconds each checkout session the link starts stays open,
     * from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the
     * link; use sales_end_at for that. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkCustomFieldRequest}. maxItems: 20. Shape $[]
     * (Value): {@link PaymentLinkCustomFieldRequest}. A custom field you add to a payment link
     * when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequest>;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom text shown on a payment link's
     * checkout, such as the order summary message and shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): Array of string. Complete delivery method selection for the link. A link
     * without delivery methods offers settings.checkout.default_delivery_method_ids when its order
     * has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave
     * the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Shape $[] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): {@link PaymentLinkEventConfig}. Event settings you supply when creating an
     * event payment link.
     */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "image"?: ImageRequest;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal links on a payment link: contract, refund
     * policy, shipping policy, and terms of service URLs, and whether buyers must accept the
     * terms.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkLineItemRequest}. Shape $[] (Value): {@link
     * PaymentLinkLineItemRequest}. A line item you add to a payment link when creating it, from a
     * catalog variant, a bundle, or an ad hoc name and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequest>;
    /** Shape $ (Value): integer. Format: int32. */
    "max_completions"?: number;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50
     * pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest
     * possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea
     * answers are budgeted at four bytes per Unicode code point, including optional fields. Each
     * checkbox answer is budgeted at five bytes (the length of false). If the combined budget is
     * exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata.
     * These limits apply to standard and plan links and are checked against the merged
     * configuration on update. maxProperties: 44. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): string. Payment link type. Omit to use standard. Explicit values must be
     * standard, donation, or event; empty or padded values are invalid. Default: "standard". Value
     * enum: "standard", "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings on a payment link: the
     * enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where checkout sessions started from this
     * payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. RFC3339 timestamp after which the link stops starting checkouts and
     * resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except
     * that an event link without sales_end_at stops selling at event_config.event_at. A checkout
     * opened before the end can still start payment for up to 15 minutes after it. Format:
     * date-time. minLength: 1.
     */
    "sales_end_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Whether tax is collected for a checkout session
     * or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Theme settings for a payment link's checkout: accent
     * color, primary color, and title.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
};
/**
 * Shape $ (Value): {@link CreatePaymentLinkRequestInput}. The request body for: Create payment
 * link.
 */
export type CreatePaymentLinkRequestInput = {
    /**
     * Shape $ (Value): {@link CheckoutBuyerFieldsInput}. What checkout asks the buyer for. Each
     * field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFieldsInput;
    /**
     * Shape $ (Value): integer string. Seconds each checkout session the link starts stays open,
     * from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the
     * link; use sales_end_at for that. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkCustomFieldRequestInput}. maxItems: 20. Shape
     * $[] (Value): {@link PaymentLinkCustomFieldRequestInput}. A custom field you add to a payment
     * link when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequestInput>;
    /**
     * Shape $ (Value): {@link PaymentLinkCustomTextConfigInput}. Custom text shown on a payment
     * link's checkout, such as the order summary message and shipping address label.
     */
    "custom_text"?: PaymentLinkCustomTextConfigInput;
    /**
     * Shape $ (Value): Array of string. Complete delivery method selection for the link. A link
     * without delivery methods offers settings.checkout.default_delivery_method_ids when its order
     * has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave
     * the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): Array of {@link MoneyValueInput}. Shape $[] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValueInput>;
    /**
     * Shape $ (Value): {@link PaymentLinkEventConfigRequestInput}. Event settings you supply when
     * creating an event payment link.
     */
    "event_config"?: PaymentLinkEventConfigRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "image"?: ImageRequestInput;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): {@link PaymentLinkLegalConfigInput}. Legal links on a payment link:
     * contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must
     * accept the terms.
     */
    "legal"?: PaymentLinkLegalConfigInput;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkLineItemRequestInput}. Shape $[] (Value): {@link
     * PaymentLinkLineItemRequestInput}. A line item you add to a payment link when creating it,
     * from a catalog variant, a bundle, or an ad hoc name and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequestInput>;
    /** Shape $ (Value): integer. Format: int32. */
    "max_completions"?: number;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50
     * pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest
     * possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea
     * answers are budgeted at four bytes per Unicode code point, including optional fields. Each
     * checkbox answer is budgeted at five bytes (the length of false). If the combined budget is
     * exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata.
     * These limits apply to standard and plan links and are checked against the merged
     * configuration on update. maxProperties: 44. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): string. Payment link type. Omit to use standard. Explicit values must be
     * standard, donation, or event; empty or padded values are invalid. Default: "standard". Value
     * enum: "standard", "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event";
    /**
     * Shape $ (Value): {@link PaymentLinkPaymentConfigInput}. Payment settings on a payment link:
     * the enabled payment options and a note shown with payment.
     */
    "payments"?: PaymentLinkPaymentConfigInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigInput}. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigInput;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. RFC3339 timestamp after which the link stops starting checkouts and
     * resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except
     * that an event link without sales_end_at stops selling at event_config.event_at. A checkout
     * opened before the end can still start payment for up to 15 minutes after it. Format:
     * date-time. minLength: 1.
     */
    "sales_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutTaxConfigInput}. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfigInput;
    /**
     * Shape $ (Value): {@link PaymentLinkThemeConfigInput}. Theme settings for a payment link's
     * checkout: accent color, primary color, and title.
     */
    "theme"?: PaymentLinkThemeConfigInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigInput}. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfigInput;
};
/**
 * Shape $ (Value): {@link CreatePaymentMethodDomainRequest}. The request body for: Register
 * payment method domain.
 */
export type CreatePaymentMethodDomainRequest = {
    /**
     * Shape $ (Value): string. Exact fully-qualified hostname to register. Limited to 253
     * characters (Unicode code points) before trimming whitespace and lowercasing. The resulting
     * hostname uses ASCII characters only. Do not include a scheme, path, port, IP address, or
     * wildcard. minLength: 1. maxLength: 253.
     */
    "domain_name": (string);
};
/**
 * Shape $ (Value): {@link CreatePaymentMethodDomainRequestInput}. The request body for: Register
 * payment method domain.
 */
export type CreatePaymentMethodDomainRequestInput = CreatePaymentMethodDomainRequest;
/** Shape $ (Value): {@link CreatePayoutRequest}. The request body for: Create a payout. */
export type CreatePayoutRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount to send, above zero. It can't exceed what one
     * balance source has in available_by_source_type. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Balance source this payout draws from. Flint chooses the source
     * when omitted. Value enum: "card", "bank_account".
     */
    "balance_source_type"?: "card" | "bank_account" | (string & {});
    /**
     * Shape $ (Value): string. Your description of the payout, returned on the payout. minLength:
     * 1.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Payout method. Only standard is accepted; omitted defaults to
     * standard. Value enum: "standard".
     */
    "method"?: "standard" | (string & {});
    /**
     * Shape $ (Value): string. Destination to pay. It must be active and in the payout's currency.
     * Omit it to pay the currency's default destination. minLength: 1.
     */
    "payout_destination_id"?: string;
    /**
     * Shape $ (Value): string. Text shown on your bank statement for this deposit, 22 characters
     * or fewer. minLength: 1.
     */
    "statement_descriptor"?: string;
};
/** Shape $ (Value): {@link CreatePayoutRequestInput}. The request body for: Create a payout. */
export type CreatePayoutRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount to send, above zero. It can't exceed what
     * one balance source has in available_by_source_type. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Balance source this payout draws from. Flint chooses the source
     * when omitted. Value enum: "card", "bank_account".
     */
    "balance_source_type"?: "card" | "bank_account";
    /**
     * Shape $ (Value): string. Your description of the payout, returned on the payout. minLength:
     * 1.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Payout method. Only standard is accepted; omitted defaults to
     * standard. Value enum: "standard".
     */
    "method"?: "standard";
    /**
     * Shape $ (Value): string. Destination to pay. It must be active and in the payout's currency.
     * Omit it to pay the currency's default destination. minLength: 1.
     */
    "payout_destination_id"?: string;
    /**
     * Shape $ (Value): string. Text shown on your bank statement for this deposit, 22 characters
     * or fewer. minLength: 1.
     */
    "statement_descriptor"?: string;
};
/**
 * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when creating
 * a fulfillment: the pickup address, location, window, instructions, and curbside details.
 */
export type CreatePickupFulfillmentDetails = {
    /**
     * Shape $ (Value): {@link AddressRequest}. Address where the buyer collects the order. A
     * postal address you supply when creating or updating a customer, invoice, fulfillment, or
     * delivery selection. Send null for `line2` to clear it.
     */
    "address"?: AddressRequest;
    /**
     * Shape $ (Value): string. Instructions specific to curbside handoff. minLength: 1. maxLength:
     * 2048.
     */
    "curbside_instructions"?: string;
    /**
     * Shape $ (Value): string. Buyer-reported arrival time for curbside or counter pickup. Format:
     * date-time. minLength: 1.
     */
    "customer_arrived_at"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an uncollected pickup should enter merchant
     * review. Format: date-time. minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Pickup instructions for the buyer, such as where to go on arrival.
     * minLength: 1.
     */
    "instructions"?: string;
    /**
     * Shape $ (Value): string. Name of the store or place where the buyer collects the order.
     * minLength: 1.
     */
    "location_name"?: string;
    /**
     * Shape $ (Value): integer string. Width of the promised pickup window, from 0 to 86400
     * seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "pickup_window_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Expected preparation time for restaurant and made-to-order
     * pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "ready_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Buyer vehicle description used for curbside handoff. minLength: 1.
     * maxLength: 500.
     */
    "vehicle_description"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
 * creating a fulfillment: the pickup address, location, window, instructions, and curbside
 * details.
 */
export type CreatePickupFulfillmentDetailsInput = {
    /**
     * Shape $ (Value): {@link AddressRequestInput}. Address where the buyer collects the order. A
     * postal address you supply when creating or updating a customer, invoice, fulfillment, or
     * delivery selection. Send null for `line2` to clear it.
     */
    "address"?: AddressRequestInput;
    /**
     * Shape $ (Value): string. Instructions specific to curbside handoff. minLength: 1. maxLength:
     * 2048.
     */
    "curbside_instructions"?: string;
    /**
     * Shape $ (Value): string. Buyer-reported arrival time for curbside or counter pickup. Format:
     * date-time. minLength: 1.
     */
    "customer_arrived_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Deadline after which an uncollected pickup should enter merchant
     * review. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Pickup instructions for the buyer, such as where to go on arrival.
     * minLength: 1.
     */
    "instructions"?: string;
    /**
     * Shape $ (Value): string. Name of the store or place where the buyer collects the order.
     * minLength: 1.
     */
    "location_name"?: string;
    /**
     * Shape $ (Value): integer string. Width of the promised pickup window, from 0 to 86400
     * seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "pickup_window_duration_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Expected preparation time for restaurant and made-to-order
     * pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "ready_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Buyer vehicle description used for curbside handoff. minLength: 1.
     * maxLength: 500.
     */
    "vehicle_description"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link CreateProductOptionRequest}. A product option to create with a product,
 * such as size, with its values, position, and status.
 */
export type CreateProductOptionRequest = {
    /**
     * Shape $ (Value): string. Value of this option given to every active variant that has no
     * active value for it after this request, such as when you add an option to a product that
     * already has active variants. It must match one of this option's active `values`, ignoring
     * case and surrounding whitespace. Not stored; the variants keep the value. minLength: 1.
     * maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Option name, such as Size or Color. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display order among the product's options, starting at zero.
     * Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): string. Whether the option is active or inactive. Active variants must
     * select an active value for every active option. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): Array of {@link CreateProductOptionValueRequest}. Values offered for this
     * option, such as Small, Medium, and Large for Size. Shape $[] (Value): {@link
     * CreateProductOptionValueRequest}. One value of a product option to create, such as a
     * specific size, with its position and status.
     */
    "values"?: Array<CreateProductOptionValueRequest>;
};
/**
 * Shape $ (Value): {@link CreateProductOptionRequestInput}. A product option to create with a
 * product, such as size, with its values, position, and status.
 */
export type CreateProductOptionRequestInput = {
    /**
     * Shape $ (Value): string. Value of this option given to every active variant that has no
     * active value for it after this request, such as when you add an option to a product that
     * already has active variants. It must match one of this option's active `values`, ignoring
     * case and surrounding whitespace. Not stored; the variants keep the value. minLength: 1.
     * maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Option name, such as Size or Color. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display order among the product's options, starting at zero.
     * Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): string. Whether the option is active or inactive. Active variants must
     * select an active value for every active option. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): Array of {@link CreateProductOptionValueRequestInput}. Values offered for
     * this option, such as Small, Medium, and Large for Size. Shape $[] (Value): {@link
     * CreateProductOptionValueRequestInput}. One value of a product option to create, such as a
     * specific size, with its position and status.
     */
    "values"?: Array<CreateProductOptionValueRequestInput>;
};
/**
 * Shape $ (Value): {@link CreateProductOptionValueRequest}. One value of a product option to
 * create, such as a specific size, with its position and status.
 */
export type CreateProductOptionValueRequest = {
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): integer. Display order among the option's values, starting at zero. Format:
     * int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): string. Whether the value is active or inactive. Active variants cannot
     * newly select an inactive value. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): string. Option value shown to buyers, such as Medium. minLength: 1.
     * maxLength: 255.
     */
    "value": string;
};
/**
 * Shape $ (Value): {@link CreateProductOptionValueRequestInput}. One value of a product option to
 * create, such as a specific size, with its position and status.
 */
export type CreateProductOptionValueRequestInput = {
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): integer. Display order among the option's values, starting at zero. Format:
     * int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): string. Whether the value is active or inactive. Active variants cannot
     * newly select an inactive value. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): string. Option value shown to buyers, such as Medium. minLength: 1.
     * maxLength: 255.
     */
    "value": string;
};
/** Shape $ (Value): {@link CreateProductRequest}. The request body for: Create product. */
export type CreateProductRequest = ({
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Shape $ (Value): {@link ProductVariantRequest}. The single variant to create as the
     * product's default. Send either default_variant or both options and variants. The request
     * body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequest;
    /**
     * Shape $ (Value): string. Description of the product shown to buyers. minLength: 1.
     * maxLength: 2048.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link CreateProductOptionRequest}. Options and values that
     * distinguish this product's variants. Send with variants instead of default_variant.
     * minItems: 1. Shape $[] (Value): {@link CreateProductOptionRequest}. A product option to
     * create with a product, such as size, with its values, position, and status.
     */
    "options"?: Array<CreateProductOptionRequest>;
    /**
     * Shape $ (Value): string. Kind of goods or service this product represents. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Shape $ (Value): string. Whether the product is active or inactive. An inactive product's
     * variants cannot be sold. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ProductVariantRequest}. Independent variants to create with
     * this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`.
     * minItems: 1. maxItems: 100. Shape $[] (Value): {@link ProductVariantRequest}. The request
     * body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequest>;
})
    & ((({
    /**
     * Shape $ (Value): {@link ProductVariantRequest}. The single variant to create as the
     * product's default. Send either default_variant or both options and variants. The request
     * body for: Create product variant.
     */
    "default_variant": ProductVariantRequest;
}))
    | (({
    /**
     * Shape $ (Value): Array of {@link CreateProductOptionRequest}. Options and values that
     * distinguish this product's variants. Send with variants instead of default_variant.
     * minItems: 1. Shape $[] (Value): {@link CreateProductOptionRequest}. A product option to
     * create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequest>;
    /**
     * Shape $ (Value): Array of {@link ProductVariantRequest}. Independent variants to create with
     * this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`.
     * minItems: 1. maxItems: 100. Shape $[] (Value): {@link ProductVariantRequest}. The request
     * body for: Create product variant.
     */
    "variants": Array<ProductVariantRequest>;
}))
    | (Record<string, unknown>));
/** Shape $ (Value): {@link CreateProductRequestInput}. The request body for: Create product. */
export type CreateProductRequestInput = ({
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Shape $ (Value): {@link ProductVariantRequestInput}. The single variant to create as the
     * product's default. Send either default_variant or both options and variants. The request
     * body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequestInput;
    /**
     * Shape $ (Value): string. Description of the product shown to buyers. minLength: 1.
     * maxLength: 2048.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link CreateProductOptionRequestInput}. Options and values that
     * distinguish this product's variants. Send with variants instead of default_variant.
     * minItems: 1. Shape $[] (Value): {@link CreateProductOptionRequestInput}. A product option to
     * create with a product, such as size, with its values, position, and status.
     */
    "options"?: Array<CreateProductOptionRequestInput>;
    /**
     * Shape $ (Value): string. Kind of goods or service this product represents. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Shape $ (Value): string. Whether the product is active or inactive. An inactive product's
     * variants cannot be sold. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): Array of {@link ProductVariantRequestInput}. Independent variants to create
     * with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`.
     * minItems: 1. maxItems: 100. Shape $[] (Value): {@link ProductVariantRequestInput}. The
     * request body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequestInput>;
})
    & ((({
    /**
     * Shape $ (Value): {@link ProductVariantRequestInput}. The single variant to create as the
     * product's default. Send either default_variant or both options and variants. The request
     * body for: Create product variant.
     */
    "default_variant": ProductVariantRequestInput;
})
    & (({
    "options"?: never;
}) & ({
    "variants"?: never;
})))
    | (({
    /**
     * Shape $ (Value): Array of {@link CreateProductOptionRequestInput}. Options and values that
     * distinguish this product's variants. Send with variants instead of default_variant.
     * minItems: 1. Shape $[] (Value): {@link CreateProductOptionRequestInput}. A product option to
     * create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequestInput>;
    /**
     * Shape $ (Value): Array of {@link ProductVariantRequestInput}. Independent variants to create
     * with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`.
     * minItems: 1. maxItems: 100. Shape $[] (Value): {@link ProductVariantRequestInput}. The
     * request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequestInput>;
})
    & (({
    "default_variant"?: never;
}))));
/**
 * Shape $ (Value): {@link CreatePromotionCodeRequest}. The request body for: Create promotion
 * code.
 */
export type CreatePromotionCodeRequest = {
    /**
     * Shape $ (Value): string. Code a buyer enters to redeem the promotion. minLength: 1.
     * maxLength: 100.
     */
    "code": string;
    /**
     * Shape $ (Value): string. When the code stops being redeemable, as an absolute RFC3339
     * timestamp. Omit for no expiry. Format: date-time. minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): integer string. Maximum number of times this code can be redeemed. Omit for
     * no redemption limit. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "max_uses"?: `${bigint}`;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Lifecycle status. Defaults to active; send inactive to create a
     * code that cannot be redeemed. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): string. IANA zone the code's times were entered in, used for display.
     * expires_at is an absolute timestamp, so this does not change when the code expires.
     * minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link CreatePromotionCodeRequestInput}. The request body for: Create promotion
 * code.
 */
export type CreatePromotionCodeRequestInput = {
    /**
     * Shape $ (Value): string. Code a buyer enters to redeem the promotion. minLength: 1.
     * maxLength: 100.
     */
    "code": string;
    /**
     * Shape $ (Value): string. When the code stops being redeemable, as an absolute RFC3339
     * timestamp. Omit for no expiry. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): integer string. Maximum number of times this code can be redeemed. Omit for
     * no redemption limit. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "max_uses"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Lifecycle status. Defaults to active; send inactive to create a
     * code that cannot be redeemed. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): string. IANA zone the code's times were entered in, used for display.
     * expires_at is an absolute timestamp, so this does not change when the code expires.
     * minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/** Shape $ (Value): {@link CreatePromotionRequest}. The request body for: Create promotion. */
export type CreatePromotionRequest = {
    /**
     * Shape $ (Value): {@link PromotionApplicationMethodRequest}. Discount effect and how it
     * applies to eligible items or charges. A flat application method whose type selects its
     * effect fields.
     */
    "application_method": PromotionApplicationMethodRequest;
    /**
     * Shape $ (Value): Array of {@link CreatePromotionCodeRequest}. Codes to create with a
     * code-gated promotion, at most 100. The create response returns them in `codes`. Add more
     * later with `POST /v1/promotions/{promotion_id}/codes`, and manage each code through the
     * `/v1/promotions/{promotion_id}/codes/{promotion_code_id}` routes. maxItems: 100. Shape $[]
     * (Value): {@link CreatePromotionCodeRequest}. The request body for: Create promotion code.
     */
    "codes"?: Array<CreatePromotionCodeRequest>;
    /**
     * Shape $ (Value): {@link PromotionCombinesWithPatch}. Which discount classes this promotion
     * can combine with. Omitted classes default to true. Which promotion discount classes this
     * promotion can combine with. Omitted classes default to true.
     */
    "combines_with"?: PromotionCombinesWithPatch;
    /**
     * Shape $ (Value): string. Optional description of the promotion for your own records.
     * minLength: 1. maxLength: 500.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Defaults to order when omitted. Default: "order". Value enum:
     * "order", "line_item", "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Shape $ (Value): string. Buyer-facing promotion name shown in checkout and order discount
     * surfaces. Defaults to name when omitted. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Conditions an order must satisfy for the
     * promotion to apply. Omit to create a promotion with no eligibility conditions. A rule group
     * is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): {@link PromotionExclusivityRequest}. Optional group and priority used to
     * choose one promotion from competing promotions in the same group. See Promotion for the
     * evaluation order. Only one promotion in an exclusivity group continues. See Promotion for
     * the evaluation order.
     */
    "exclusivity"?: PromotionExclusivityRequest;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum number of redemptions across all codes and
     * automatic applications. Omit for no redemption limit. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}`;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Internal promotion name for dashboards, searching, and reporting.
     * This is not intended for buyer-facing checkout or receipt copy. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Whether the promotion applies automatically when its rules match or
     * requires a promotion code. Value enum: "automatic", "code".
     */
    "redemption_type"?: "automatic" | "code" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionSchedule}. Optional start and end times that limit when the
     * promotion can apply. When a promotion is active, with a start time, an end time, and the
     * time zone it was entered in.
     */
    "schedule"?: PromotionSchedule;
    /**
     * Shape $ (Value): string. Lifecycle status. Defaults to active; send inactive to create a
     * promotion that is switched off. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** Shape $ (Value): {@link CreatePromotionRequestInput}. The request body for: Create promotion. */
export type CreatePromotionRequestInput = {
    /**
     * Shape $ (Value): {@link PromotionApplicationMethodRequestInput}. Discount effect and how it
     * applies to eligible items or charges. A flat application method whose type selects its
     * effect fields.
     */
    "application_method": PromotionApplicationMethodRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreatePromotionCodeRequestInput}. Codes to create with a
     * code-gated promotion, at most 100. The create response returns them in `codes`. Add more
     * later with `POST /v1/promotions/{promotion_id}/codes`, and manage each code through the
     * `/v1/promotions/{promotion_id}/codes/{promotion_code_id}` routes. maxItems: 100. Shape $[]
     * (Value): {@link CreatePromotionCodeRequestInput}. The request body for: Create promotion
     * code.
     */
    "codes"?: Array<CreatePromotionCodeRequestInput>;
    /**
     * Shape $ (Value): {@link PromotionCombinesWithRequestInput}. Which discount classes this
     * promotion can combine with. Omitted classes default to true. Which promotion discount
     * classes this promotion can combine with. Omitted classes default to true.
     */
    "combines_with"?: PromotionCombinesWithRequestInput;
    /**
     * Shape $ (Value): string. Optional description of the promotion for your own records.
     * minLength: 1. maxLength: 500.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Defaults to order when omitted. Default: "order". Value enum:
     * "order", "line_item", "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /**
     * Shape $ (Value): string. Buyer-facing promotion name shown in checkout and order discount
     * surfaces. Defaults to name when omitted. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Conditions an order must satisfy
     * for the promotion to apply. Omit to create a promotion with no eligibility conditions. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "eligibility_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): {@link PromotionExclusivityRequestInput}. Optional group and priority used
     * to choose one promotion from competing promotions in the same group. See Promotion for the
     * evaluation order. Only one promotion in an exclusivity group continues. See Promotion for
     * the evaluation order.
     */
    "exclusivity"?: PromotionExclusivityRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum number of redemptions across all codes and
     * automatic applications. Omit for no redemption limit. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Internal promotion name for dashboards, searching, and reporting.
     * This is not intended for buyer-facing checkout or receipt copy. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Whether the promotion applies automatically when its rules match or
     * requires a promotion code. Value enum: "automatic", "code".
     */
    "redemption_type"?: "automatic" | "code";
    /**
     * Shape $ (Value): {@link PromotionScheduleInput}. Optional start and end times that limit
     * when the promotion can apply. When a promotion is active, with a start time, an end time,
     * and the time zone it was entered in.
     */
    "schedule"?: PromotionScheduleInput;
    /**
     * Shape $ (Value): string. Lifecycle status. Defaults to active; send inactive to create a
     * promotion that is switched off. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/** Shape $ (Value): {@link CreateRefundRequest}. The request body for: Create refund. */
export type CreateRefundRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Required for refund_type amount and forbidden for full
     * and targets. Total to refund, including named targets and any value Flint allocates to the
     * remaining components. Tender allocations must sum to this amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of {@link RefundCharge}. Named order charges to refund. Allowed with
     * refund_type amount or targets. In amount mode their value must fit within amount_money;
     * Flint allocates the rest. Shape $[] (Value): {@link RefundCharge}. An order charge to refund
     * when creating a refund, with an optional amount to refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Shape $ (Value): {@link RefundDestinations}. Default destinations for allocations Flint
     * plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults
     * to original, and a key for a tender absent from the refund has no effect. Not allowed with
     * tender_allocations or gift_card_load_id; use destination on each explicit allocation.
     * new_gift_card on a payment intent is store credit and requires a payment belonging to an
     * order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
     * destinations.payment_intent. The merchant keeps the cash and the original processing fee is
     * not returned; no processor refund is made. New gift card codes are returned for 24 hours.
     * The refund reports each result in tender_allocations, without echoing destinations. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItem}. Named order line items to refund. Allowed
     * with refund_type amount or targets. In amount mode their resolved value must fit within
     * amount_money; Flint allocates the rest. Shape $[] (Value): {@link RefundLineItem}. An order
     * line item to refund, with the quantity or amount, tax handling, and any adjustments such as
     * a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Optional. When omitted, no reason is recorded or sent to the
     * processor, and the buyer's refund email has no reason line. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Required amount mode: full refunds the full remaining amount;
     * amount requires amount_money and permits named targets and tender_allocations within that
     * amount; targets refunds named line_items, charges, or tax_breakdown_refunds without
     * amount_money. Full and targets do not accept tender_allocations. Gift card loads support
     * full and amount only. Value enum: "full", "amount", "targets".
     */
    "refund_type": "full" | "amount" | "targets" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundIn}. Named order tax breakdowns to
     * refund. Allowed with refund_type amount or targets. In amount mode their value must fit
     * within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. Shape $[] (Value): {@link RefundTaxBreakdownRefundIn}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocationRequest}. Exhaustive allocations to
     * original tenders. Allowed only with refund_type amount. Amounts must sum to the required
     * amount_money. Selected line-item, charge and flat-tax components must be covered by their
     * original tenders. Additional untargeted value follows the default tender order. Destinations
     * default to original. Select new_gift_card when the original card is closed or cannot accept
     * the full credit within its balance cap. For gift card redemptions made outside a Flint
     * order, send the allocations without order_id. minItems: 1. maxItems: 21. Shape $[] (Value):
     * {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to a payment intent
     * or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequest>;
})
    & ((Exclude<CreateRefundRequestFull & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestAmount & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestTargets & object, readonly unknown[]>)
    | (Record<string, unknown>))
    & (({
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocationRequest}. Exhaustive allocations to
     * original tenders. Allowed only with refund_type amount. Amounts must sum to the required
     * amount_money. Selected line-item, charge and flat-tax components must be covered by their
     * original tenders. Additional untargeted value follows the default tender order. Destinations
     * default to original. Select new_gift_card when the original card is closed or cannot accept
     * the full credit within its balance cap. For gift card redemptions made outside a Flint
     * order, send the allocations without order_id. minItems: 1. maxItems: 21. Shape $[] (Value):
     * {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to a payment intent
     * or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequest>;
})
    | ({
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateRefundRequestAmount}. The `amount` variant of
 * `CreateRefundRequest`.
 */
export type CreateRefundRequestAmount = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Required for refund_type amount and forbidden for full
     * and targets. Total to refund, including named targets and any value Flint allocates to the
     * remaining components. Tender allocations must sum to this amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link RefundCharge}. Named order charges to refund. Allowed with
     * refund_type amount or targets. In amount mode their value must fit within amount_money;
     * Flint allocates the rest. Shape $[] (Value): {@link RefundCharge}. An order charge to refund
     * when creating a refund, with an optional amount to refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Shape $ (Value): {@link RefundDestinations}. Default destinations for allocations Flint
     * plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults
     * to original, and a key for a tender absent from the refund has no effect. Not allowed with
     * tender_allocations or gift_card_load_id; use destination on each explicit allocation.
     * new_gift_card on a payment intent is store credit and requires a payment belonging to an
     * order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
     * destinations.payment_intent. The merchant keeps the cash and the original processing fee is
     * not returned; no processor refund is made. New gift card codes are returned for 24 hours.
     * The refund reports each result in tender_allocations, without echoing destinations. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItem}. Named order line items to refund. Allowed
     * with refund_type amount or targets. In amount mode their resolved value must fit within
     * amount_money; Flint allocates the rest. Shape $[] (Value): {@link RefundLineItem}. An order
     * line item to refund, with the quantity or amount, tax handling, and any adjustments such as
     * a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Optional. When omitted, no reason is recorded or sent to the
     * processor, and the buyer's refund email has no reason line. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Required amount mode: full refunds the full remaining amount;
     * amount requires amount_money and permits named targets and tender_allocations within that
     * amount; targets refunds named line_items, charges, or tax_breakdown_refunds without
     * amount_money. Full and targets do not accept tender_allocations. Gift card loads support
     * full and amount only. Value enum: "amount".
     */
    "refund_type": "full" | "amount" | "targets" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundIn}. Named order tax breakdowns to
     * refund. Allowed with refund_type amount or targets. In amount mode their value must fit
     * within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. Shape $[] (Value): {@link RefundTaxBreakdownRefundIn}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocationRequest}. Exhaustive allocations to
     * original tenders. Allowed only with refund_type amount. Amounts must sum to the required
     * amount_money. Selected line-item, charge and flat-tax components must be covered by their
     * original tenders. Additional untargeted value follows the default tender order. Destinations
     * default to original. Select new_gift_card when the original card is closed or cannot accept
     * the full credit within its balance cap. For gift card redemptions made outside a Flint
     * order, send the allocations without order_id. minItems: 1. maxItems: 21. Shape $[] (Value):
     * {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to a payment intent
     * or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequest>;
})
    & ((({
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocationRequest}. Exhaustive allocations to
     * original tenders. Allowed only with refund_type amount. Amounts must sum to the required
     * amount_money. Selected line-item, charge and flat-tax components must be covered by their
     * original tenders. Additional untargeted value follows the default tender order. Destinations
     * default to original. Select new_gift_card when the original card is closed or cannot accept
     * the full credit within its balance cap. For gift card redemptions made outside a Flint
     * order, send the allocations without order_id. minItems: 1. maxItems: 21. Shape $[] (Value):
     * {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to a payment intent
     * or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequest>;
})
    | ({
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link CreateRefundRequestAmountInput}. The `amount` variant of
 * `CreateRefundRequest`.
 */
export type CreateRefundRequestAmountInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Required for refund_type amount and forbidden for
     * full and targets. Total to refund, including named targets and any value Flint allocates to
     * the remaining components. Tender allocations must sum to this amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): Array of {@link RefundChargeInput}. Named order charges to refund. Allowed
     * with refund_type amount or targets. In amount mode their value must fit within amount_money;
     * Flint allocates the rest. Shape $[] (Value): {@link RefundChargeInput}. An order charge to
     * refund when creating a refund, with an optional amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Shape $ (Value): {@link RefundDestinationsInput}. Default destinations for allocations Flint
     * plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults
     * to original, and a key for a tender absent from the refund has no effect. Not allowed with
     * tender_allocations or gift_card_load_id; use destination on each explicit allocation.
     * new_gift_card on a payment intent is store credit and requires a payment belonging to an
     * order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
     * destinations.payment_intent. The merchant keeps the cash and the original processing fee is
     * not returned; no processor refund is made. New gift card codes are returned for 24 hours.
     * The refund reports each result in tender_allocations, without echoing destinations. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemInput}. Named order line items to refund.
     * Allowed with refund_type amount or targets. In amount mode their resolved value must fit
     * within amount_money; Flint allocates the rest. Shape $[] (Value): {@link
     * RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Optional. When omitted, no reason is recorded or sent to the
     * processor, and the buyer's refund email has no reason line. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Required amount mode: full refunds the full remaining amount;
     * amount requires amount_money and permits named targets and tender_allocations within that
     * amount; targets refunds named line_items, charges, or tax_breakdown_refunds without
     * amount_money. Full and targets do not accept tender_allocations. Gift card loads support
     * full and amount only. Value enum: "amount".
     */
    "refund_type": ("full" | "amount" | "targets") & ("amount");
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundInInput}. Named order tax
     * breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value
     * must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by
     * `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocationRequestInput}. Exhaustive allocations
     * to original tenders. Allowed only with refund_type amount. Amounts must sum to the required
     * amount_money. Selected line-item, charge and flat-tax components must be covered by their
     * original tenders. Additional untargeted value follows the default tender order. Destinations
     * default to original. Select new_gift_card when the original card is closed or cannot accept
     * the full credit within its balance cap. For gift card redemptions made outside a Flint
     * order, send the allocations without order_id. minItems: 1. maxItems: 21. Shape $[] (Value):
     * {@link RefundTenderAllocationRequestInput}. Where part of a refund goes: back to a payment
     * intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequestInput>;
})
    & ((({
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocationRequestInput}. Exhaustive allocations
     * to original tenders. Allowed only with refund_type amount. Amounts must sum to the required
     * amount_money. Selected line-item, charge and flat-tax components must be covered by their
     * original tenders. Additional untargeted value follows the default tender order. Destinations
     * default to original. Select new_gift_card when the original card is closed or cannot accept
     * the full credit within its balance cap. For gift card redemptions made outside a Flint
     * order, send the allocations without order_id. minItems: 1. maxItems: 21. Shape $[] (Value):
     * {@link RefundTenderAllocationRequestInput}. Where part of a refund goes: back to a payment
     * intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequestInput>;
})
    | ({
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})));
/**
 * Shape $ (Value): {@link CreateRefundRequestFull}. The `full` variant of `CreateRefundRequest`.
 */
export type CreateRefundRequestFull = ({
    /**
     * Shape $ (Value): {@link RefundDestinations}. Default destinations for allocations Flint
     * plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults
     * to original, and a key for a tender absent from the refund has no effect. Not allowed with
     * tender_allocations or gift_card_load_id; use destination on each explicit allocation.
     * new_gift_card on a payment intent is store credit and requires a payment belonging to an
     * order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
     * destinations.payment_intent. The merchant keeps the cash and the original processing fee is
     * not returned; no processor refund is made. New gift card codes are returned for 24 hours.
     * The refund reports each result in tender_allocations, without echoing destinations. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Optional. When omitted, no reason is recorded or sent to the
     * processor, and the buyer's refund email has no reason line. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Required amount mode: full refunds the full remaining amount;
     * amount requires amount_money and permits named targets and tender_allocations within that
     * amount; targets refunds named line_items, charges, or tax_breakdown_refunds without
     * amount_money. Full and targets do not accept tender_allocations. Gift card loads support
     * full and amount only. Value enum: "full".
     */
    "refund_type": "full" | "amount" | "targets" | (string & {});
})
    & ((({
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    /** Shape $ (Value): any. */
    "tender_allocations": unknown;
})
    | ({
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link CreateRefundRequestFullInput}. The `full` variant of
 * `CreateRefundRequest`.
 */
export type CreateRefundRequestFullInput = ({
    /**
     * Shape $ (Value): {@link RefundDestinationsInput}. Default destinations for allocations Flint
     * plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults
     * to original, and a key for a tender absent from the refund has no effect. Not allowed with
     * tender_allocations or gift_card_load_id; use destination on each explicit allocation.
     * new_gift_card on a payment intent is store credit and requires a payment belonging to an
     * order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
     * destinations.payment_intent. The merchant keeps the cash and the original processing fee is
     * not returned; no processor refund is made. New gift card codes are returned for 24 hours.
     * The refund reports each result in tender_allocations, without echoing destinations. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Optional. When omitted, no reason is recorded or sent to the
     * processor, and the buyer's refund email has no reason line. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Required amount mode: full refunds the full remaining amount;
     * amount requires amount_money and permits named targets and tender_allocations within that
     * amount; targets refunds named line_items, charges, or tax_breakdown_refunds without
     * amount_money. Full and targets do not accept tender_allocations. Gift card loads support
     * full and amount only. Value enum: "full".
     */
    "refund_type": ("full" | "amount" | "targets") & ("full");
})
    & ((({
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    /** Shape $ (Value): any. */
    "tender_allocations": unknown;
})
    | ({
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})))
    & (({
    "amount_money"?: never;
})
    & ({
    "line_items"?: never;
})
    & ({
    "charges"?: never;
})
    & ({
    "tax_breakdown_refunds"?: never;
})
    & ({
    "tender_allocations"?: never;
}));
/** Shape $ (Value): {@link CreateRefundRequestInput}. The request body for: Create refund. */
export type CreateRefundRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Required for refund_type amount and forbidden for
     * full and targets. Total to refund, including named targets and any value Flint allocates to
     * the remaining components. Tender allocations must sum to this amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): Array of {@link RefundChargeInput}. Named order charges to refund. Allowed
     * with refund_type amount or targets. In amount mode their value must fit within amount_money;
     * Flint allocates the rest. Shape $[] (Value): {@link RefundChargeInput}. An order charge to
     * refund when creating a refund, with an optional amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Shape $ (Value): {@link RefundDestinationsInput}. Default destinations for allocations Flint
     * plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults
     * to original, and a key for a tender absent from the refund has no effect. Not allowed with
     * tender_allocations or gift_card_load_id; use destination on each explicit allocation.
     * new_gift_card on a payment intent is store credit and requires a payment belonging to an
     * order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
     * destinations.payment_intent. The merchant keeps the cash and the original processing fee is
     * not returned; no processor refund is made. New gift card codes are returned for 24 hours.
     * The refund reports each result in tender_allocations, without echoing destinations. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemInput}. Named order line items to refund.
     * Allowed with refund_type amount or targets. In amount mode their resolved value must fit
     * within amount_money; Flint allocates the rest. Shape $[] (Value): {@link
     * RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Optional. When omitted, no reason is recorded or sent to the
     * processor, and the buyer's refund email has no reason line. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Required amount mode: full refunds the full remaining amount;
     * amount requires amount_money and permits named targets and tender_allocations within that
     * amount; targets refunds named line_items, charges, or tax_breakdown_refunds without
     * amount_money. Full and targets do not accept tender_allocations. Gift card loads support
     * full and amount only. Value enum: "full", "amount", "targets".
     */
    "refund_type": "full" | "amount" | "targets";
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundInInput}. Named order tax
     * breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value
     * must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by
     * `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocationRequestInput}. Exhaustive allocations
     * to original tenders. Allowed only with refund_type amount. Amounts must sum to the required
     * amount_money. Selected line-item, charge and flat-tax components must be covered by their
     * original tenders. Additional untargeted value follows the default tender order. Destinations
     * default to original. Select new_gift_card when the original card is closed or cannot accept
     * the full credit within its balance cap. For gift card redemptions made outside a Flint
     * order, send the allocations without order_id. minItems: 1. maxItems: 21. Shape $[] (Value):
     * {@link RefundTenderAllocationRequestInput}. Where part of a refund goes: back to a payment
     * intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequestInput>;
})
    & (({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
}))
    & ((Exclude<CreateRefundRequestFullInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestAmountInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestTargetsInput & object, readonly unknown[]>))
    & (({
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocationRequestInput}. Exhaustive allocations
     * to original tenders. Allowed only with refund_type amount. Amounts must sum to the required
     * amount_money. Selected line-item, charge and flat-tax components must be covered by their
     * original tenders. Additional untargeted value follows the default tender order. Destinations
     * default to original. Select new_gift_card when the original card is closed or cannot accept
     * the full credit within its balance cap. For gift card redemptions made outside a Flint
     * order, send the allocations without order_id. minItems: 1. maxItems: 21. Shape $[] (Value):
     * {@link RefundTenderAllocationRequestInput}. Where part of a refund goes: back to a payment
     * intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequestInput>;
})
    | ({
    /**
     * Shape $ (Value): string. Allowed with refund_type full or amount. Original standalone gift
     * card funding load paid by a Flint payment. Refunds its paid consideration and removes the
     * corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with
     * order, line item, charge, tax or tender targets. minLength: 1. pattern:
     * ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
}));
/**
 * Shape $ (Value): {@link CreateRefundRequestTargets}. The `targets` variant of
 * `CreateRefundRequest`.
 */
export type CreateRefundRequestTargets = ({
    /**
     * Shape $ (Value): Array of {@link RefundCharge}. Named order charges to refund. Allowed with
     * refund_type amount or targets. In amount mode their value must fit within amount_money;
     * Flint allocates the rest. Shape $[] (Value): {@link RefundCharge}. An order charge to refund
     * when creating a refund, with an optional amount to refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Shape $ (Value): {@link RefundDestinations}. Default destinations for allocations Flint
     * plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults
     * to original, and a key for a tender absent from the refund has no effect. Not allowed with
     * tender_allocations or gift_card_load_id; use destination on each explicit allocation.
     * new_gift_card on a payment intent is store credit and requires a payment belonging to an
     * order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
     * destinations.payment_intent. The merchant keeps the cash and the original processing fee is
     * not returned; no processor refund is made. New gift card codes are returned for 24 hours.
     * The refund reports each result in tender_allocations, without echoing destinations. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItem}. Named order line items to refund. Allowed
     * with refund_type amount or targets. In amount mode their resolved value must fit within
     * amount_money; Flint allocates the rest. Shape $[] (Value): {@link RefundLineItem}. An order
     * line item to refund, with the quantity or amount, tax handling, and any adjustments such as
     * a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Optional. When omitted, no reason is recorded or sent to the
     * processor, and the buyer's refund email has no reason line. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Required amount mode: full refunds the full remaining amount;
     * amount requires amount_money and permits named targets and tender_allocations within that
     * amount; targets refunds named line_items, charges, or tax_breakdown_refunds without
     * amount_money. Full and targets do not accept tender_allocations. Gift card loads support
     * full and amount only. Value enum: "targets".
     */
    "refund_type": "full" | "amount" | "targets" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundIn}. Named order tax breakdowns to
     * refund. Allowed with refund_type amount or targets. In amount mode their value must fit
     * within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. Shape $[] (Value): {@link RefundTaxBreakdownRefundIn}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
})
    & ((({
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    /** Shape $ (Value): any. */
    "tender_allocations": unknown;
})
    | ({
    /** Shape $ (Value): any. */
    "gift_card_load_id": unknown;
})
    | (Record<string, unknown>)))
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "charges": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "tax_breakdown_refunds": unknown;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateRefundRequestTargetsInput}. The `targets` variant of
 * `CreateRefundRequest`.
 */
export type CreateRefundRequestTargetsInput = ({
    /**
     * Shape $ (Value): Array of {@link RefundChargeInput}. Named order charges to refund. Allowed
     * with refund_type amount or targets. In amount mode their value must fit within amount_money;
     * Flint allocates the rest. Shape $[] (Value): {@link RefundChargeInput}. An order charge to
     * refund when creating a refund, with an optional amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Shape $ (Value): {@link RefundDestinationsInput}. Default destinations for allocations Flint
     * plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults
     * to original, and a key for a tender absent from the refund has no effect. Not allowed with
     * tender_allocations or gift_card_load_id; use destination on each explicit allocation.
     * new_gift_card on a payment intent is store credit and requires a payment belonging to an
     * order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
     * destinations.payment_intent. The merchant keeps the cash and the original processing fee is
     * not returned; no processor refund is made. New gift card codes are returned for 24 hours.
     * The refund reports each result in tender_allocations, without echoing destinations. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemInput}. Named order line items to refund.
     * Allowed with refund_type amount or targets. In amount mode their resolved value must fit
     * within amount_money; Flint allocates the rest. Shape $[] (Value): {@link
     * RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Optional. When omitted, no reason is recorded or sent to the
     * processor, and the buyer's refund email has no reason line. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Required amount mode: full refunds the full remaining amount;
     * amount requires amount_money and permits named targets and tender_allocations within that
     * amount; targets refunds named line_items, charges, or tax_breakdown_refunds without
     * amount_money. Full and targets do not accept tender_allocations. Gift card loads support
     * full and amount only. Value enum: "targets".
     */
    "refund_type": ("full" | "amount" | "targets") & ("targets");
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundInInput}. Named order tax
     * breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value
     * must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by
     * `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
})
    & ((({
    /**
     * Shape $ (Value): string. Order to refund. May be combined with payment_intent_id to select a
     * payment on that order. Required for named targets unless payment_intent_id belongs to an
     * order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Shape $ (Value): string. Payment to refund. May be combined with its order_id. Named targets
     * require a payment on an order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    /** Shape $ (Value): any. */
    "tender_allocations": unknown;
})
    | ({
    /** Shape $ (Value): any. */
    "gift_card_load_id": unknown;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})))
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "charges": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "tax_breakdown_refunds": unknown;
}))
    & (({
    "amount_money"?: never;
})
    & ({
    "tender_allocations"?: never;
})
    & ({
    "gift_card_load_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateRefundResponse}. A response containing `CreateRefundResult` data.
 */
export type CreateRefundResponse = {
    /**
     * Shape $ (Value): {@link CreateRefundResult}. The refund created by a create refund call,
     * with all the fields of a refund. Money returned against a collected payment.
     */
    "data": CreateRefundResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateRefundResult}. The refund created by a create refund call, with
 * all the fields of a refund. Money returned against a collected payment.
 */
export type CreateRefundResult = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "credit_note_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again. Fix the cause, then create a new refund with a new
     * idempotency key. Unknown provider values are returned as refund_failed. Value enum:
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
     * Shape $ (Value): Array of {@link RefundGiftCardCode}. New gift card codes recovered only
     * within 24 hours of the original command and only while each code remains current. Omitted
     * after the recovery window and never returned by ordinary refund reads or events. Shape $[]
     * (Value): {@link RefundGiftCardCode}. The code of a gift card issued by a refund, returned
     * once in the refund result with its `gift_card_id`.
     */
    "gift_card_codes"?: Array<RefundGiftCardCode>;
    /**
     * Shape $ (Value): string. Present only on refunds created through POST
     * /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET
     * /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create
     * response was lost.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAllocation}. Shape $[] (Value): {@link
     * RefundLineItemAllocation}. How a refund applied to one order line item: quantity, refunded
     * amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): Array of {@link PaymentRefund}. Shape $[] (Value): {@link PaymentRefund}.
     * The part of a refund returned through one payment, with the amount, tip, status, and any
     * failure reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /** Shape $ (Value): string. */
    "payment_review_id"?: string;
    /**
     * Shape $ (Value): string or null. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", null.
     */
    "reason": "duplicate"
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
        | null
        | (string & {})
        | null;
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "refund_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /** Shape $ (Value): string. */
    "return_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): string. Summary of payment_refunds and tender_allocations. Only failed is
     * final: succeeded and partially_succeeded can still change when a bank rejects a refund after
     * accepting it. Follow refund.updated. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefund}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocation}. Shape $[] (Value): {@link
     * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
     * allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /**
     * Shape $ (Value): Array of {@link RefundUnissuedGiftCardRecovery}. Cash returned after an
     * unissued gift card purchase refund failed. Return it through a new refund against
     * payment_intent_id and order_line_item_id. It does not issue another card. Source remaining
     * and pending amounts describe the entire original settlement allocation; repeated entries for
     * that source are not additive. Shape $[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered.
     */
    "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
})
    & (Exclude<Refund & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): Array of {@link RefundGiftCardCode}. New gift card codes recovered only
     * within 24 hours of the original command and only while each code remains current. Omitted
     * after the recovery window and never returned by ordinary refund reads or events. Shape $[]
     * (Value): {@link RefundGiftCardCode}. The code of a gift card issued by a refund, returned
     * once in the refund result with its `gift_card_id`.
     */
    "gift_card_codes"?: Array<RefundGiftCardCode>;
});
/** Shape $ (Value): {@link CreateReportRequest}. The request body for: Create a report. */
export type CreateReportRequest = {
    /**
     * Shape $ (Value): string. Three-letter ISO 4217 currency. Reports never combine currencies.
     * gift_card_liability_v1 supports USD only; other currencies return INVALID_REQUEST on
     * currency. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Exclusive report interval end instant. Each report type matches its
     * own occurrence time. At most the same local time 366 calendar days after interval_start_at
     * in timezone. Must not be in the future. Format: date-time. minLength: 1.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive report interval start instant. Each report type matches
     * its own occurrence time. Format: date-time. minLength: 1.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Which report to generate. The value names the row and the column
     * version, such as payments_itemized_v1. The Reports guide lists each type's rows, interval
     * matching, and columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone. Defaults to UTC. minLength: 1.
     */
    "timezone"?: string;
};
/** Shape $ (Value): {@link CreateReportRequestInput}. The request body for: Create a report. */
export type CreateReportRequestInput = {
    /**
     * Shape $ (Value): string. Three-letter ISO 4217 currency. Reports never combine currencies.
     * gift_card_liability_v1 supports USD only; other currencies return INVALID_REQUEST on
     * currency. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Exclusive report interval end instant. Each report type matches its
     * own occurrence time. At most the same local time 366 calendar days after interval_start_at
     * in timezone. Must not be in the future. Format: date-time. minLength: 1.
     */
    "interval_end_at": string | globalThis.Date;
    /**
     * Shape $ (Value): string. Inclusive report interval start instant. Each report type matches
     * its own occurrence time. Format: date-time. minLength: 1.
     */
    "interval_start_at": string | globalThis.Date;
    /**
     * Shape $ (Value): string. Which report to generate. The value names the row and the column
     * version, such as payments_itemized_v1. The Reports guide lists each type's rows, interval
     * matching, and columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1";
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone. Defaults to UTC. minLength: 1.
     */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link CreateReturnDispositionRequest}. The request body for: Create return
 * disposition.
 */
export type CreateReturnDispositionRequest = ({
    /**
     * Shape $ (Value): string. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_inspection_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_line_item_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_line_item_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "return_inspection_line_item_id": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateReturnDispositionRequestInput}. The request body for: Create
 * return disposition.
 */
export type CreateReturnDispositionRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string | globalThis.Date;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_inspection_line_item_id"?: never;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_line_item_id": string;
}
    | {
    /**
     * Shape $ (Value): string. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string | globalThis.Date;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_inspection_line_item_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_line_item_id"?: never;
};
/**
 * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which items
 * of an order can be returned, given an order and a selection.
 */
export type CreateReturnEligibilityPreviewRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "order_id": string;
    /**
     * Shape $ (Value): {@link ReturnEligibilitySelection}. Which order lines to check for return
     * eligibility: all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
};
/**
 * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview which
 * items of an order can be returned, given an order and a selection.
 */
export type CreateReturnEligibilityPreviewRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "order_id": string;
    /**
     * Shape $ (Value): {@link ReturnEligibilitySelectionInput}. Which order lines to check for
     * return eligibility: all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelectionInput;
};
/**
 * Shape $ (Value): {@link CreateReturnInspectionRequest}. The request body for: Create return
 * inspection.
 */
export type CreateReturnInspectionRequest = {
    /**
     * Shape $ (Value): string. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Format:
     * date-time. minLength: 1.
     */
    "inspected_at": string;
    /**
     * Shape $ (Value): string. Location where the returned merchandise was inspected. Must match
     * the receipt receiving_location_id. minLength: 1.
     */
    "inspection_location_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnInspectionLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link ReturnInspectionLineItemRequest}. The inspection result for one received
     * return line: acceptance status, condition, and findings.
     */
    "line_items": Array<ReturnInspectionLineItemRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_id": string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a
     * point of sale or warehouse system, with its own identifier.
     */
    "source_system"?: ReturnSourceSystem;
    /** Shape $ (Value): string. minLength: 1. */
    "supersedes_return_inspection_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateReturnInspectionRequestInput}. The request body for: Create return
 * inspection.
 */
export type CreateReturnInspectionRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Format:
     * date-time. minLength: 1.
     */
    "inspected_at": string | globalThis.Date;
    /**
     * Shape $ (Value): string. Location where the returned merchandise was inspected. Must match
     * the receipt receiving_location_id. minLength: 1.
     */
    "inspection_location_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnInspectionLineItemRequestInput}. minItems: 1. Shape
     * $[] (Value): {@link ReturnInspectionLineItemRequestInput}. The inspection result for one
     * received return line: acceptance status, condition, and findings.
     */
    "line_items": Array<ReturnInspectionLineItemRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_id": string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystemInput}. The system a return event came from, such
     * as a point of sale or warehouse system, with its own identifier.
     */
    "source_system"?: ReturnSourceSystemInput;
    /** Shape $ (Value): string. minLength: 1. */
    "supersedes_return_inspection_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateReturnPolicyRequest}. The request body for: Create return policy.
 */
export type CreateReturnPolicyRequest = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link ReturnPolicyRevisionRequest}. The rules for a return policy
     * revision: scope, eligibility, return window, approval and resolution modes, shipping, and
     * restocking fee.
     */
    "revision": ReturnPolicyRevisionRequest;
};
/**
 * Shape $ (Value): {@link CreateReturnPolicyRequestInput}. The request body for: Create return
 * policy.
 */
export type CreateReturnPolicyRequestInput = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link ReturnPolicyRevisionRequestInput}. The rules for a return policy
     * revision: scope, eligibility, return window, approval and resolution modes, shipping, and
     * restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
};
/**
 * Shape $ (Value): {@link CreateReturnPreviewData}. A return preview, selected by `mode`: either
 * the eligibility of the selected items or the amounts of a resolution.
 */
export type CreateReturnPreviewData = ({
    /**
     * Shape $ (Value): {@link ReturnEligibilityPreview}. The result of checking whether an order's
     * items can be returned: overall status, per-line eligibility, and the policy evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Shape $ (Value): string.  Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnResolutionPreview}. A preview of a return resolution before it
     * is created: returned and replacement totals, adjustments, and amounts due to or from the
     * buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & ((Exclude<CreateReturnPreviewDataEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewDataResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateReturnPreviewDataEligibility}. The `eligibility` variant of
 * `CreateReturnPreviewData`.
 */
export type CreateReturnPreviewDataEligibility = ({
    /**
     * Shape $ (Value): {@link ReturnEligibilityPreview}. The result of checking whether an order's
     * items can be returned: overall status, per-line eligibility, and the policy evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
    /** Shape $ (Value): string.  Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnResolutionPreview}. A preview of a return resolution before it
     * is created: returned and replacement totals, adjustments, and amounts due to or from the
     * buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligibility". */
    "mode": unknown;
    /**
     * Shape $ (Value): {@link ReturnEligibilityPreview}. The result of checking whether an order's
     * items can be returned: overall status, per-line eligibility, and the policy evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
}));
/**
 * Shape $ (Value): {@link CreateReturnPreviewDataResolution}. The `resolution` variant of
 * `CreateReturnPreviewData`.
 */
export type CreateReturnPreviewDataResolution = ({
    /**
     * Shape $ (Value): {@link ReturnEligibilityPreview}. The result of checking whether an order's
     * items can be returned: overall status, per-line eligibility, and the policy evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Shape $ (Value): string.  Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnResolutionPreview}. A preview of a return resolution before it
     * is created: returned and replacement totals, adjustments, and amounts due to or from the
     * buyer.
     */
    "resolution": ReturnResolutionPreview;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "resolution". */
    "mode": unknown;
    /**
     * Shape $ (Value): {@link ReturnResolutionPreview}. A preview of a return resolution before it
     * is created: returned and replacement totals, adjustments, and amounts due to or from the
     * buyer.
     */
    "resolution": ReturnResolutionPreview;
}));
/**
 * Shape $ (Value): {@link CreateReturnPreviewRequest}. The request body for: Create return
 * preview.
 */
export type CreateReturnPreviewRequest = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Shape $ (Value): string.  Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link CreateReturnResolutionPreviewRequest}. A request to preview the
     * amounts of a return resolution for a return, selected by `resolution_type`: refund,
     * exchange, replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & ((Exclude<CreateReturnPreviewRequestEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateReturnPreviewRequestEligibility}. The `eligibility` variant of
 * `CreateReturnPreviewRequest`.
 */
export type CreateReturnPreviewRequestEligibility = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
    /** Shape $ (Value): string.  Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * Shape $ (Value): {@link CreateReturnResolutionPreviewRequest}. A request to preview the
     * amounts of a return resolution for a return, selected by `resolution_type`: refund,
     * exchange, replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligibility". */
    "mode": unknown;
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
}));
/**
 * Shape $ (Value): {@link CreateReturnPreviewRequestEligibilityInput}. The `eligibility` variant
 * of `CreateReturnPreviewRequest`.
 */
export type CreateReturnPreviewRequestEligibilityInput = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview
     * which items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
    /** Shape $ (Value): string.  Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestInput}. A request to preview the
     * amounts of a return resolution for a return, selected by `resolution_type`: refund,
     * exchange, replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview
     * which items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
})
    & ({
    "resolution"?: never;
}));
/**
 * Shape $ (Value): {@link CreateReturnPreviewRequestInput}. The request body for: Create return
 * preview.
 */
export type CreateReturnPreviewRequestInput = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview
     * which items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Shape $ (Value): string.  Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution";
    /**
     * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestInput}. A request to preview the
     * amounts of a return resolution for a return, selected by `resolution_type`: refund,
     * exchange, replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & ((Exclude<CreateReturnPreviewRequestEligibilityInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolutionInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateReturnPreviewRequestResolution}. The `resolution` variant of
 * `CreateReturnPreviewRequest`.
 */
export type CreateReturnPreviewRequestResolution = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Shape $ (Value): string.  Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link CreateReturnResolutionPreviewRequest}. A request to preview the
     * amounts of a return resolution for a return, selected by `resolution_type`: refund,
     * exchange, replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "resolution". */
    "mode": unknown;
    /**
     * Shape $ (Value): {@link CreateReturnResolutionPreviewRequest}. A request to preview the
     * amounts of a return resolution for a return, selected by `resolution_type`: refund,
     * exchange, replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
}));
/**
 * Shape $ (Value): {@link CreateReturnPreviewRequestResolutionInput}. The `resolution` variant of
 * `CreateReturnPreviewRequest`.
 */
export type CreateReturnPreviewRequestResolutionInput = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview
     * which items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Shape $ (Value): string.  Value enum: "resolution". */
    "mode": "resolution";
    /**
     * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestInput}. A request to preview the
     * amounts of a return resolution for a return, selected by `resolution_type`: refund,
     * exchange, replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "resolution". */
    "mode": "resolution";
    /**
     * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestInput}. A request to preview the
     * amounts of a return resolution for a return, selected by `resolution_type`: refund,
     * exchange, replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & ({
    "eligibility"?: never;
}));
/**
 * Shape $ (Value): {@link CreateReturnPreviewResponse}. A response containing
 * `CreateReturnPreviewData` data.
 */
export type CreateReturnPreviewResponse = {
    /**
     * Shape $ (Value): {@link CreateReturnPreviewData}. A return preview, selected by `mode`:
     * either the eligibility of the selected items or the amounts of a resolution.
     */
    "data": CreateReturnPreviewData;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateReturnReasonRequest}. The request body for: Create return reason.
 */
export type CreateReturnReasonRequest = {
    /**
     * Shape $ (Value): Array of string. Catalog category handles this reason applies to. A reason
     * with categories is suggested, and accepted from a customer session, only for order lines
     * whose product is in one of them. A reason with no categories applies to every line. Not
     * product types or tags: use handles from GET /v1/categories. Shape $[] (Value): string.
     * minLength: 1.
     */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "handle": string;
    /** Shape $ (Value): boolean. Default: false. */
    "is_note_required"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateReturnReasonRequestInput}. The request body for: Create return
 * reason.
 */
export type CreateReturnReasonRequestInput = CreateReturnReasonRequest;
/**
 * Shape $ (Value): {@link CreateReturnReceiptRequest}. The request body for: Create return
 * receipt.
 */
export type CreateReturnReceiptRequest = {
    /**
     * Shape $ (Value): string. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnReceiptLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link ReturnReceiptLineItemRequest}. One line of received merchandise: a matched
     * return line, excess quantity, or an unverified item.
     */
    "line_items": Array<ReturnReceiptLineItemRequest>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Format:
     * date-time. minLength: 1.
     */
    "received_at": string;
    /** Shape $ (Value): string. minLength: 1. */
    "receiving_location_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "shipment_id"?: string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a
     * point of sale or warehouse system, with its own identifier.
     */
    "source_system"?: ReturnSourceSystem;
    /** Shape $ (Value): string. minLength: 1. */
    "supersedes_return_receipt_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateReturnReceiptRequestInput}. The request body for: Create return
 * receipt.
 */
export type CreateReturnReceiptRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnReceiptLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link ReturnReceiptLineItemRequestInput}. One line of received merchandise: a
     * matched return line, excess quantity, or an unverified item.
     */
    "line_items": Array<ReturnReceiptLineItemRequestInput>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Format:
     * date-time. minLength: 1.
     */
    "received_at": string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "receiving_location_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "shipment_id"?: string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystemInput}. The system a return event came from, such
     * as a point of sale or warehouse system, with its own identifier.
     */
    "source_system"?: ReturnSourceSystemInput;
    /** Shape $ (Value): string. minLength: 1. */
    "supersedes_return_receipt_id"?: string;
};
/** Shape $ (Value): {@link CreateReturnRequest}. The request body for: Create return. */
export type CreateReturnRequest = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnLineItemRequest}. minItems: 1. Shape $[] (Value):
     * {@link ReturnLineItemRequest}. An order line item to return, with the quantity, return
     * reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequest>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "order_id": string;
};
/** Shape $ (Value): {@link CreateReturnRequestInput}. The request body for: Create return. */
export type CreateReturnRequestInput = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link ReturnLineItemRequestInput}. An order line item to return, with the
     * quantity, return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequestInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "order_id": string;
};
/**
 * Shape $ (Value): {@link CreateReturnResolutionPreviewRequest}. A request to preview the amounts
 * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
 * replacement, no monetary action, or correction.
 */
export type CreateReturnResolutionPreviewRequest = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionPreviewRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionPreviewRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestCorrection}. The `correction`
 * variant of `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestCorrection = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "adjustments": unknown;
    /** Shape $ (Value): any.  Value enum: "correction". */
    "resolution_type"?: unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
}));
/**
 * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestCorrectionInput}. The `correction`
 * variant of `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestCorrectionInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "resolution_type": "correction";
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "adjustments": unknown;
    /** Shape $ (Value): any.  Value enum: "correction". */
    "resolution_type"?: "correction";
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/**
 * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestInput}. A request to preview the
 * amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange,
 * replacement, no monetary action, or correction.
 */
export type CreateReturnResolutionPreviewRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionPreviewRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionPreviewRequestCorrectionInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestStandard}. The `exchange` variant of
 * `CreateReturnResolutionPreviewRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandard = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /**
     * Shape $ (Value): any. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "resolution_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestStandardInput}. The `exchange`
 * variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandardInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /**
     * Shape $ (Value): any. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequest}. The request body for: Create return
 * resolution.
 */
export type CreateReturnResolutionRequest = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
})
    & ((Exclude<CreateReturnResolutionRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestCorrection}. The `correction` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestCorrection = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "adjustments": unknown;
    /** Shape $ (Value): any.  Value enum: "correction". */
    "resolution_type"?: unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
}));
