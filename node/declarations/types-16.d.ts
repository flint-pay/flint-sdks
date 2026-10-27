import type { InputValue } from '../runtime.js';
import type { UpdatePartnerAppRequestInput } from './types-48.js';
import type { ResponseMeta } from './types-40.js';
import type { CreateDeviceRequestInput } from './types-6.js';
import type { UpdateDeviceRequestInput } from './types-47.js';
import type { PromotionCandidate } from './types-38.js';
import type { CreateOrderDiscount, CreateOrderDiscountInput } from './types-7.js';
import type { MoneyValue, NextAction } from './types-31.js';
import type { DeliverySelection } from './types-14.js';
import type { CustomDomain } from './types-10.js';
import type { Fulfillment, FeedbackReportingClient } from './types-17.js';
import type { Package } from './types-34.js';
import type { QuotaDetails } from './types-39.js';
import type { ScopeRequirement, SelectableMerchant, SelectableOrderPaymentIntent } from './types-43.js';
import type { Shipment, SettlementAmounts } from './types-44.js';
import type { CheckoutBuyerContact, CardDetails } from './types-3.js';
import type { PricingAmounts } from './types-37.js';
import type { PaymentSourceSummary } from './types-36.js';
import type { SubscriptionIntervalOption, SubscriptionPlanLineItem } from './types-45.js';
/**
 * Shape $ (Value): {@link DeveloperSandbox}. An isolated environment for testing an integration.
 */
export type DeveloperSandbox = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): boolean. */
    "is_default": boolean;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string. ID of the replacement created when this sandbox was reset and
     * archived. Omitted when this sandbox has not been replaced by a reset.
     */
    "replaced_by_sandbox_id"?: string;
    /**
     * Shape $ (Value): string. ID of the sandbox this sandbox replaced during a reset. Omitted
     * when this sandbox was not created by a reset.
     */
    "replaces_sandbox_id"?: string;
    /** Shape $ (Value): string. */
    "sandbox_id": string;
    /** Shape $ (Value): string.  Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
export type DeveloperUpdatePartnerAppInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePartnerAppRequestInput}. The request body for: Update partner
     * app. minProperties: 1.
     */
    "body": InputValue<UpdatePartnerAppRequestInput>;
};
/** Shape $ (Value): {@link Device}. A registered device used to accept payments. */
export type Device = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "device_id": string;
    /** Shape $ (Value): string. */
    "hardware_fingerprint"?: string;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string.  Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted device configuration version. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link DeviceListResponse}. A page of `Device` objects. */
export type DeviceListResponse = {
    /**
     * Shape $ (Value): Array of {@link Device}. Shape $[] (Value): {@link Device}. A registered
     * device used to accept payments.
     */
    "data": Array<Device>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link DeviceResponse}. A response containing `Device` data. */
export type DeviceResponse = {
    /** Shape $ (Value): {@link Device}. A registered device used to accept payments. */
    "data": Device;
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
export type DevicesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateDeviceRequestInput}. The request body for: Create device. */
    "body": InputValue<CreateDeviceRequestInput>;
};
export type DevicesGetInput = {
    /** Shape $ (Value): string. */
    "device_id": InputValue<string>;
};
export type DevicesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "hardware_fingerprint"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "name", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type DevicesRemoveInput = {
    /** Shape $ (Value): string. */
    "device_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DevicesUpdateInput = {
    /** Shape $ (Value): string. */
    "device_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link UpdateDeviceRequestInput}. The request body for: Update device. */
    "body": InputValue<UpdateDeviceRequestInput>;
};
/**
 * Shape $ (Value): {@link DigitalFulfillmentDetails}. Details of a digital fulfillment: when it
 * was delivered (`delivered_at`) and its `delivery_url`.
 */
export type DigitalFulfillmentDetails = {
    /**
     * Shape $ (Value): string. When the digital goods were delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /** Shape $ (Value): string. URL where the recipient can access the delivered digital goods. */
    "delivery_url"?: string;
};
/**
 * Shape $ (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
 * `height` in the given `unit`.
 */
export type Dimensions = {
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "height": number;
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "length": number;
    /**
     * Shape $ (Value): string. Length unit for length, width, and height. Use millimeter,
     * centimeter, or inch. Value enum: "millimeter", "centimeter", "inch".
     */
    "unit": "millimeter" | "centimeter" | "inch" | (string & {});
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "width": number;
};
/**
 * Shape $ (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`, and
 * `height` in the given `unit`.
 */
export type DimensionsInput = {
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "height": number;
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "length": number;
    /**
     * Shape $ (Value): string. Length unit for length, width, and height. Use millimeter,
     * centimeter, or inch. Value enum: "millimeter", "centimeter", "inch".
     */
    "unit": "millimeter" | "centimeter" | "inch";
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "width": number;
};
/**
 * Shape $ (Value): {@link DiscountPreview}. Promotions evaluated for an order, grouped into those
 * that were applied, those that are available, and those that were skipped.
 */
export type DiscountPreview = {
    /**
     * Shape $ (Value): Array of {@link PromotionCandidate}. Shape $[] (Value): {@link
     * PromotionCandidate}. A promotion considered for an order, with its discount amounts, its
     * stacking rules, and why it was or was not applied.
     */
    "applied": Array<PromotionCandidate>;
    /**
     * Shape $ (Value): Array of {@link PromotionCandidate}. Shape $[] (Value): {@link
     * PromotionCandidate}. A promotion considered for an order, with its discount amounts, its
     * stacking rules, and why it was or was not applied.
     */
    "available": Array<PromotionCandidate>;
    /**
     * Shape $ (Value): Array of {@link PromotionCandidate}. Shape $[] (Value): {@link
     * PromotionCandidate}. A promotion considered for an order, with its discount amounts, its
     * stacking rules, and why it was or was not applied.
     */
    "skipped": Array<PromotionCandidate>;
};
/**
 * Shape $ (Value): {@link DiscountPreviewRequest}. The request body for: Create discount preview.
 */
export type DiscountPreviewRequest = {
    /**
     * Shape $ (Value): {@link CreateOrderDiscount}. A discount to apply when creating an order:
     * either a manual discount or a reference to a promotion.
     */
    "discount"?: CreateOrderDiscount;
    /**
     * Shape $ (Value): string. The order to evaluate. Checkout session credentials can use only
     * their own order. minLength: 1.
     */
    "order_id": string;
};
/**
 * Shape $ (Value): {@link DiscountPreviewRequestInput}. The request body for: Create discount
 * preview.
 */
export type DiscountPreviewRequestInput = {
    /**
     * Shape $ (Value): {@link CreateOrderDiscountInput}. A discount to apply when creating an
     * order: either a manual discount or a reference to a promotion.
     */
    "discount"?: CreateOrderDiscountInput;
    /**
     * Shape $ (Value): string. The order to evaluate. Checkout session credentials can use only
     * their own order. minLength: 1.
     */
    "order_id": string;
};
/**
 * Shape $ (Value): {@link DiscountPreviewResponse}. A response containing `DiscountPreview` data.
 */
export type DiscountPreviewResponse = {
    /**
     * Shape $ (Value): {@link DiscountPreview}. Promotions evaluated for an order, grouped into
     * those that were applied, those that are available, and those that were skipped.
     */
    "data": DiscountPreview;
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
export type DiscountPreviewsCreateInput = {
    /**
     * Shape $ (Value): {@link DiscountPreviewRequestInput}. The request body for: Create discount
     * preview.
     */
    "body": InputValue<DiscountPreviewRequestInput>;
};
/** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
export type Dispute = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): boolean. Whether this dispute has an evidence response window. It stays
     * true after the window closes or a decision is made. Use is_action_required to know whether a
     * response is needed now.
     */
    "can_respond_with_evidence": boolean;
    /**
     * Shape $ (Value): string. Value enum: "inquiry", "chargeback", "compliance", "resolution",
     * "block", "other", "bank_return".
     */
    "case_type": "inquiry"
        | "chargeback"
        | "compliance"
        | "resolution"
        | "block"
        | "other"
        | "bank_return"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /** Shape $ (Value): string. */
    "dispute_id": string;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "evidence_due_at": string | null;
    /** Shape $ (Value): integer. Format: int32. */
    "evidence_submission_count": number;
    /** Shape $ (Value): string. */
    "fraud_warning_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether evidence is saved for this dispute, submitted or not.
     * evidence_submission_count says whether it was submitted.
     */
    "has_evidence": boolean;
    /** Shape $ (Value): boolean. */
    "is_action_required": boolean;
    /** Shape $ (Value): boolean. */
    "is_evidence_deadline_passed": boolean;
    /** Shape $ (Value): string. */
    "merchant_id": string;
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
     * Shape $ (Value): string or null. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit", null.
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
    /**
     * Shape $ (Value): string. Value enum: "fraudulent", "unrecognized", "duplicate",
     * "product_not_received", "product_not_as_described", "refund_not_processed",
     * "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized",
     * "bank_account_not_found", "other".
     */
    "reason": "fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Why a response is unavailable when can_respond_with_evidence is
     * false. Absent when no reason is reported. Current values are bank_return_not_contestable and
     * response_window_unavailable. response_window_unavailable means no evidence deadline was
     * supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
     */
    "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "status": "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Recorded time of the current status. On first observation this is
     * the dispute creation time. Later status changes use the provider event time when available,
     * or the time Flint observed the change. This may not be the exact decision or submission
     * time. Format: date-time.
     */
    "status_changed_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/** Shape $ (Value): {@link DisputeListResponse}. A page of `Dispute` objects. */
export type DisputeListResponse = {
    /**
     * Shape $ (Value): Array of {@link Dispute}. Shape $[] (Value): {@link Dispute}. A challenge
     * to a collected payment.
     */
    "data": Array<Dispute>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link DisputeResponse}. A response containing `Dispute` data. */
export type DisputeResponse = {
    /** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
    "data": Dispute;
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
 * Shape $ (Value): {@link DisputeResponseSession}. A session for responding to a dispute in the
 * browser, with the `dispute_id` and a short-lived `client_session` for the embedded response
 * component.
 */
export type DisputeResponseSession = {
    /**
     * Shape $ (Value): {@link DisputeResponseSessionClientSession}. Browser session for responding
     * to a dispute, with its expiry and the Stripe details needed to load the embedded response
     * component.
     */
    "client_session": DisputeResponseSessionClientSession;
    /** Shape $ (Value): string. */
    "dispute_id": string;
};
/**
 * Shape $ (Value): {@link DisputeResponseSessionClientSession}. Browser session for responding to
 * a dispute, with its expiry and the Stripe details needed to load the embedded response
 * component.
 */
export type DisputeResponseSessionClientSession = {
    /** Shape $ (Value): string. Time the browser session expires. Format: date-time. */
    "expires_at": string;
    /**
     * Shape $ (Value): {@link DisputeResponseSessionStripe}. Stripe details for the embedded
     * dispute response component: the publishable key, an account session, and the components to
     * render.
     */
    "stripe": DisputeResponseSessionStripe;
};
/**
 * Shape $ (Value): {@link DisputeResponseSessionResponse}. A response containing
 * `DisputeResponseSession` data.
 */
export type DisputeResponseSessionResponse = {
    /**
     * Shape $ (Value): {@link DisputeResponseSession}. A session for responding to a dispute in
     * the browser, with the `dispute_id` and a short-lived `client_session` for the embedded
     * response component.
     */
    "data": DisputeResponseSession;
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
 * Shape $ (Value): {@link DisputeResponseSessionStripe}. Stripe details for the embedded dispute
 * response component: the publishable key, an account session, and the components to render.
 */
export type DisputeResponseSessionStripe = {
    /**
     * Shape $ (Value): {@link DisputeResponseSessionStripeAccountSession}. Single-use account
     * session secret and the Stripe.js call that uses it to load the embedded dispute response
     * component.
     */
    "account_session": DisputeResponseSessionStripeAccountSession;
    /**
     * Shape $ (Value): Array of {@link DisputeResponseSessionStripeComponent}. minItems: 1.
     * maxItems: 1. Shape $[] (Value): {@link DisputeResponseSessionStripeComponent}. An embedded
     * Stripe component to render for the dispute response session, with the payment reference to
     * pass to it.
     */
    "components": Array<DisputeResponseSessionStripeComponent>;
    /** Shape $ (Value): string. */
    "publishable_key": string;
};
/**
 * Shape $ (Value): {@link DisputeResponseSessionStripeAccountSession}. Single-use account session
 * secret and the Stripe.js call that uses it to load the embedded dispute response component.
 */
export type DisputeResponseSessionStripeAccountSession = {
    /**
     * Shape $ (Value): string. Single-use account session secret for fetchClientSecret. Create
     * another response session when a fresh secret is needed.
     */
    "client_secret": string;
    /**
     * Shape $ (Value): string. Call loadConnectAndInitialize with publishableKey and
     * fetchClientSecret. Value enum: "load_connect_and_initialize".
     */
    "stripe_js_call": "load_connect_and_initialize" | (string & {});
};
/**
 * Shape $ (Value): {@link DisputeResponseSessionStripeComponent}. An embedded Stripe component to
 * render for the dispute response session, with the payment reference to pass to it.
 */
export type DisputeResponseSessionStripeComponent = {
    /** Shape $ (Value): string.  Value enum: "payment_disputes". */
    "component": "payment_disputes" | (string & {});
    /**
     * Shape $ (Value): string. Stripe payment reference to pass to setPayment or the React payment
     * prop.
     */
    "payment": string;
};
export type DisputesCreateResponseSessionInput = {
    /** Shape $ (Value): string. */
    "dispute_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DisputesGetInput = {
    /** Shape $ (Value): string. */
    "dispute_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order", "payment_intent". Shape $[]
     * (Value): string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
};
export type DisputesListInput = {
    /** Shape $ (Value): string. Format: date-time. */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "payment_intent_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". Shape $[] (Value): string. Value enum: "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other".
     */
    "status"?: InputValue<Array<"inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "fraudulent", "unrecognized",
     * "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed",
     * "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized",
     * "bank_account_not_found", "other". Shape $[] (Value): string. Value enum: "fraudulent",
     * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
     * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
     * "debit_not_authorized", "bank_account_not_found", "other".
     */
    "reason"?: InputValue<Array<"fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "inquiry", "chargeback",
     * "compliance", "resolution", "block", "other", "bank_return". Shape $[] (Value): string.
     * Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other",
     * "bank_return".
     */
    "case_type"?: InputValue<Array<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">>;
    /** Shape $ (Value): boolean. */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "evidence_due_at",
     * "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "evidence_due_at" | "amount_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "evidence_due_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "evidence_due_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order", "payment_intent". Shape $[]
     * (Value): string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
};
/**
 * Shape $ (Value): {@link DocumentTaxID}. A tax identifier printed on documents, with its country,
 * optional region, identifier type, and value. Flint does not verify the value.
 */
export type DocumentTaxID = {
    /**
     * Shape $ (Value): string. Two-letter ISO 3166-1 alpha-2 country code. minLength: 2.
     * maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /**
     * Shape $ (Value): string. Server-generated identity of an existing entry. Omit when adding an
     * entry. minLength: 1. pattern: ^dti_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "document_tax_id"?: string;
    /**
     * Shape $ (Value): string. Provider-independent identifier type, for example vat, gst, or ein.
     * This is an open vocabulary. minLength: 1. maxLength: 64. pattern: ^[a-z][a-z0-9_]*$.
     */
    "identifier_type": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 64. */
    "region"?: string;
    /**
     * Shape $ (Value): string. Full identifier printed on documents. Not verified by Flint.
     * minLength: 1. maxLength: 255.
     */
    "value": string;
};
/**
 * Shape $ (Value): {@link DocumentTaxIDInput}. A tax identifier printed on documents, with its
 * country, optional region, identifier type, and value. Flint does not verify the value.
 */
export type DocumentTaxIDInput = DocumentTaxID;
/**
 * Shape $ (Value): {@link EffectiveDeliverySelectionResource}. The delivery selection currently in
 * effect for a checkout, with its `source` (none, provisional, or committed) and whether it can
 * still be changed.
 */
export type EffectiveDeliverySelectionResource = {
    /**
     * Shape $ (Value): {@link DeliverySelection} or null. Shape $.anyOf[1] (Value): {@link
     * DeliverySelection}. The delivery choice selected for a checkout or order. Shape $.anyOf[2]
     * (Value): null.
     */
    "delivery_selection": ((DeliverySelection) | (null));
    /** Shape $ (Value): boolean. */
    "mutable": boolean;
    /** Shape $ (Value): string. */
    "originating_checkout_session_id"?: string;
    /** Shape $ (Value): string.  Value enum: "none", "provisional", "committed". */
    "source": "none" | "provisional" | "committed" | (string & {});
};
/**
 * Shape $ (Value): {@link EffectiveDeliverySelectionResponse}. A response containing
 * `EffectiveDeliverySelectionResource` data.
 */
export type EffectiveDeliverySelectionResponse = {
    /**
     * Shape $ (Value): {@link EffectiveDeliverySelectionResource}. The delivery selection
     * currently in effect for a checkout, with its `source` (none, provisional, or committed) and
     * whether it can still be changed.
     */
    "data": EffectiveDeliverySelectionResource;
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
/** Shape $ (Value): {@link EmailChangeRequest}. A request to change a customer's email address. */
export type EmailChangeRequest = {
    /** Shape $ (Value): boolean. */
    "confirmed": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): boolean. */
    "current_email_confirmation_required": boolean;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /** Shape $ (Value): string. */
    "email_change_request_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /** Shape $ (Value): string. */
    "new_email": string;
};
/**
 * Shape $ (Value): {@link EmailChangeRequestResponse}. A response containing `EmailChangeRequest`
 * data.
 */
export type EmailChangeRequestResponse = {
    /**
     * Shape $ (Value): {@link EmailChangeRequest}. A request to change a customer's email address.
     */
    "data": EmailChangeRequest;
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
 * Shape $ (Value): {@link EmailPreferenceLink}. An email preference for one address, such as
 * shipping updates or checkout reminders, with whether it is enabled and the matching customer if
 * any.
 */
export type EmailPreferenceLink = {
    /**
     * Shape $ (Value): string or null. Flint customer ID when the email belongs to an active
     * customer in this merchant environment. Null for a guest email.
     */
    "customer_id": string | null;
    /** Shape $ (Value): string. */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "shipping_updates", "checkout_reminders", "other". */
    "email_preference": "shipping_updates" | "checkout_reminders" | "other" | (string & {});
    /** Shape $ (Value): boolean. */
    "enabled": boolean;
};
/**
 * Shape $ (Value): {@link EmailPreferenceLinkRequest}. The request body for: Look up an email
 * preference link; Unsubscribe an email preference link.
 */
export type EmailPreferenceLinkRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "token": string;
};
/**
 * Shape $ (Value): {@link EmailPreferenceLinkRequestInput}. The request body for: Look up an email
 * preference link; Unsubscribe an email preference link.
 */
export type EmailPreferenceLinkRequestInput = EmailPreferenceLinkRequest;
/**
 * Shape $ (Value): {@link EmailPreferenceLinkResponse}. A response containing
 * `EmailPreferenceLink` data.
 */
export type EmailPreferenceLinkResponse = {
    /**
     * Shape $ (Value): {@link EmailPreferenceLink}. An email preference for one address, such as
     * shipping updates or checkout reminders, with whether it is enabled and the matching customer
     * if any.
     */
    "data": EmailPreferenceLink;
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
export type EmailPreferenceLinksLookupInput = {
    /**
     * Shape $ (Value): {@link EmailPreferenceLinkRequestInput}. The request body for: Look up an
     * email preference link; Unsubscribe an email preference link.
     */
    "body": InputValue<EmailPreferenceLinkRequestInput>;
};
export type EmailPreferenceLinksUnsubscribeInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link EmailPreferenceLinkRequestInput}. The request body for: Look up an
     * email preference link; Unsubscribe an email preference link.
     */
    "body": InputValue<EmailPreferenceLinkRequestInput>;
};
/**
 * Shape $ (Value): {@link ErrorDetail}. One specific failure within an error, with a `code` and
 * `message` plus fields that depend on the code, such as the `param`, resource, quantity, or
 * amount involved.
 */
export type ErrorDetail = {
    /**
     * Shape $ (Value): Array of string. API key modes in which this scope may be granted. [] enum:
     * "live", "test". Shape $[] (Value): string. Value enum: "live", "test".
     */
    "allowed_key_modes"?: Array<"live" | "test" | (string & {})>;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Signed available amounts grouped by balance
     * source type on INSUFFICIENT_AVAILABLE_BALANCE. Keys are an open set; US accounts use card
     * and bank_account. An empty object means no per-source amounts are reported. Shape $.*
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "available_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): integer string. Whole-number quantity currently available for the requested
     * operation; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "available_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. On RESOURCE_IN_USE, INVOICE_ISSUE_IN_PROGRESS,
     * CREDIT_NOTE_ISSUE_IN_PROGRESS, ORDER_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_ATTEMPT_ACTIVE,
     * INVOICE_PAYMENT_PROCESSING, PAYMENT_OPERATION_IN_PROGRESS, PAYMENT_CONFIRM_IN_PROGRESS,
     * PAYMENT_REVIEW_OPEN, PAYMENT_IN_PROGRESS, ORDER_ALREADY_HAS_ACTIVE_INVOICE,
     * ORDER_HAS_OPEN_CHECKOUT, ORDER_HAS_ACTIVE_PAYMENT_INTENT, ORDER_ALREADY_HAS_PAYMENTS,
     * ORDER_ALREADY_HAS_REFUNDS, ORDER_HAS_MANUAL_PAYMENTS, INVOICE_PAYMENT_RESOLVING,
     * INVOICE_LOCKED_ORDER_FINANCIALS, PAYMENT_ATTEMPT_REQUIRES_CAPTURE,
     * ORDER_COLLECTION_IN_PROGRESS, ORDER_COLLECTION_ALREADY_ACTIVE,
     * ORDER_CUSTOMER_CHECKOUT_ACTIVE, CHECKOUT_SESSION_CURRENT_CHANGED,
     * INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED, ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE,
     * CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, the total number of blocking resources.
     * blocking_resources lists up to 25 of them. Manual payment conflicts identify their owning
     * invoices. On CHECKOUT_SESSION_CURRENT_CHANGED, blockers are present only when the current
     * session is known. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "blocking_resource_count"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link ErrorResourceReference}. On RESOURCE_IN_USE,
     * FULFILLMENT_METHOD_UNAVAILABLE, RETURN_LINE_CANCELLATION_CONFLICT,
     * ORDER_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_PROCESSING,
     * PAYMENT_OPERATION_IN_PROGRESS, PAYMENT_CONFIRM_IN_PROGRESS, PAYMENT_REVIEW_OPEN,
     * PAYMENT_IN_PROGRESS, SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS, INVOICE_ISSUE_IN_PROGRESS,
     * CREDIT_NOTE_ISSUE_IN_PROGRESS, ORDER_ALREADY_HAS_ACTIVE_INVOICE, ORDER_HAS_OPEN_CHECKOUT,
     * ORDER_HAS_ACTIVE_PAYMENT_INTENT, ORDER_ALREADY_HAS_PAYMENTS, ORDER_ALREADY_HAS_REFUNDS,
     * ORDER_HAS_MANUAL_PAYMENTS, INVOICE_PAYMENT_RESOLVING, INVOICE_LOCKED_ORDER_FINANCIALS,
     * PAYMENT_ATTEMPT_REQUIRES_CAPTURE, ORDER_COLLECTION_IN_PROGRESS,
     * ORDER_COLLECTION_ALREADY_ACTIVE, ORDER_CUSTOMER_CHECKOUT_ACTIVE,
     * CHECKOUT_SESSION_CURRENT_CHANGED, INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED,
     * ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE, CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, resources that must
     * transition or be corrected before the operation can succeed. Invoice and order dependency
     * conflicts list up to 25 resources; blocking_resource_count is the total when present. Buyer
     * credentials do not receive merchant-only blocking resources. Manual payment conflicts
     * identify their owning invoices. On CHECKOUT_SESSION_CURRENT_CHANGED, blockers are present
     * only when the current session is known. Shape $[] (Value): {@link ErrorResourceReference}. A
     * reference to a public resource named in an error, with its type, ID, and current status when
     * available.
     */
    "blocking_resources"?: Array<ErrorResourceReference>;
    /**
     * Shape $ (Value): string. Flint capability associated with this error, when applicable. Value
     * enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings".
     */
    "capability"?: "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. On CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE, the most you can
     * capture now. Retry with an amount at or below it. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Physical basis submitted with the observation, or saved on
     * the count line when apply refuses it. Read the current level and physically recount this
     * item before replacing the basis. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "captured_physical_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. How the inventory reservation ended. Present for
     * INVENTORY_RESERVATION_CLOSED. Value enum: "consumed", "released", "expired", "reallocated",
     * "mixed".
     */
    "closed_reason"?: "consumed" | "released" | "expired" | "reallocated" | "mixed" | (string & {});
    /**
     * Shape $ (Value): string. Stable Flint error code for this item. Under INVALID_REQUEST, one
     * of REQUIRED, INVALID_VALUE, UNKNOWN_FIELD, NOT_ALLOWED. Every value is listed in the
     * operation's x-flint-error-codes. Value enum: "ACCESS_LINK_CUSTOMER_REQUIRED",
     * "ACCESS_LINK_MERCHANT_HOSTED", "ACCOUNT_SETUP_CONFIGURATION_CONFLICT",
     * "ACCOUNT_SETUP_REPAIR_REQUIRED", "ACCOUNT_SETUP_UNAVAILABLE",
     * "ACH_TRANSACTION_PURPOSE_UNRESOLVED", "ACTION_NOT_ALLOWED", "ACTIVE_DEMO_SESSION_EXISTS",
     * "ACTIVE_LINE_ITEM_SOURCE_CHANGE", "ACTIVE_OPTION_SELECTOR_COLLAPSE",
     * "AFFIRM_REFUND_RETRY_NOT_ALLOWED", "ALREADY_EXISTS", "AMOUNT_EXCEEDS_BALANCE",
     * "AMOUNT_EXCEEDS_REFUNDABLE", "AMOUNT_MISMATCH", "AMOUNT_NOT_ADJUSTABLE",
     * "API_KEY_ALREADY_REVOKED", "API_KEY_CHANGED", "API_VERSION_RETIRED",
     * "AUTHENTICATION_REQUIRED", "AUTOMATIC_PAYOUT_NOT_CANCELABLE",
     * "AUTOMATIC_PROMOTIONS_DISABLED", "AUTOMATIC_TAX_CONNECTION_REQUIRED",
     * "AUTOMATIC_TAX_ORIGIN_ADDRESS_REQUIRED", "AUTOMATIC_TAX_UNAVAILABLE",
     * "BILLING_INTERVAL_CHANGE_NOT_ALLOWED", "BUNDLE_COMPONENT_PRODUCT_NOT_ACTIVE",
     * "BUNDLE_COMPONENT_VARIANT_NOT_ACTIVE", "BUNDLE_NOT_SELLABLE",
     * "CANCEL_IMMEDIATELY_NOT_ALLOWED", "CAPABILITIES_IMMUTABLE", "CAPABILITY_NOT_REQUESTED",
     * "CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE", "CATALOG_INVENTORY_RELATIONSHIP_INVALID",
     * "CATALOG_LINE_ITEM_CURRENCY_CHANGED", "CATALOG_LINE_ITEM_SOURCE_CHANGED",
     * "CHECKOUT_CREDENTIAL_CHANGED", "CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED",
     * "CHECKOUT_CUSTOMER_CHANGED", "CHECKOUT_SESSION_CURRENT_CHANGED", "CHECKOUT_SESSION_EXPIRED",
     * "CHECKOUT_SESSION_MODIFIERS_READ_ONLY", "CHECKOUT_SESSION_NOT_OPEN",
     * "CHECKOUT_SESSION_SCOPE_MISMATCH", "CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED",
     * "CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED", "CHECKOUT_TAX_CALCULATION_LIMIT_REACHED",
     * "CONCURRENT_MODIFICATION", "CONFIRMATION_TOKEN_ALREADY_USED", "CONFIRMATION_TOKEN_EXPIRED",
     * "COUNTRY_IMMUTABLE", "CREDIT_NOTE_ALLOCATION_ALREADY_REVERSED",
     * "CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE", "CREDIT_NOTE_AMOUNT_EXCEEDS_CREDITABLE",
     * "CREDIT_NOTE_ISSUE_IN_PROGRESS", "CREDIT_NOTE_NOT_DRAFT", "CREDIT_NOTE_NOT_ISSUED",
     * "CREDIT_NOTE_REFUND_EXCEEDS_BALANCE", "CUSTOMER_DELETION_ALREADY_APPROVED",
     * "CUSTOMER_DELETION_BLOCKED", "CUSTOMER_DELETION_PROCESSING",
     * "CUSTOMER_DELETION_REQUEST_NOT_PENDING", "CUSTOMER_DELETION_STATE_CHANGED",
     * "CUSTOMER_EMAIL_BUYER_MANAGED", "CUSTOMER_EMAIL_REQUIRED",
     * "CUSTOMER_PAYMENT_TERM_UNAVAILABLE", "CUSTOMER_VERIFICATION_ALREADY_CONFIRMED",
     * "CUSTOMER_VERIFICATION_ATTEMPTS_EXHAUSTED", "CUSTOMER_VERIFICATION_EMAIL_CHANGED",
     * "CUSTOMER_VERIFICATION_EXPIRED", "CUSTOMER_VERIFICATION_LIMIT_REACHED",
     * "CUSTOMER_VERIFICATION_NOT_CONFIRMED", "CUSTOMER_VERIFICATION_NOT_OFFERED",
     * "CUSTOMER_VERIFICATION_NOT_SENT", "CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE",
     * "CUSTOMER_VERIFICATION_USED", "CUSTOM_DOMAIN_NOT_VERIFIED",
     * "CUSTOM_DOMAIN_SUBSCRIPTION_REQUIRED", "CUSTOM_DOMAIN_UNAVAILABLE",
     * "DEFAULT_ENVIRONMENT_REQUIRED", "DEFAULT_PAYMENT_METHOD_CONFLICT",
     * "DEFAULT_PAYOUT_DESTINATIONS_MANAGED_EXTERNALLY", "DEFAULT_PAYOUT_DESTINATION_INVALID",
     * "DEFAULT_PAYOUT_DESTINATION_REPLACEMENT_REQUIRED", "DEFAULT_PAYOUT_DESTINATION_REQUIRED",
     * "DEFAULT_SANDBOX_CANNOT_BE_ARCHIVED", "DEFAULT_SANDBOX_CANNOT_BE_RESET",
     * "DELIVERY_CALCULATION_EXPIRED", "DELIVERY_COMMERCE_TREATMENT_UNSUPPORTED",
     * "DELIVERY_DEPENDENCY_REVOKED", "DELIVERY_DESTINATION_CONTROLLED_BY_SELECTION",
     * "DELIVERY_DESTINATION_FROZEN", "DELIVERY_ELIGIBILITY_CONTEXT_CHANGED",
     * "DELIVERY_EXTERNAL_REFERENCE_REUSED", "DELIVERY_GROUPING_UNSUPPORTED",
     * "DELIVERY_OPTION_ALREADY_SELECTED", "DELIVERY_OPTION_EXPIRED",
     * "DELIVERY_PICKUP_AVAILABILITY_CHANGED", "DELIVERY_PICKUP_LOCATION_UNAVAILABLE",
     * "DELIVERY_PREVIEW_REQUIRES_CHECKOUT", "DELIVERY_QUOTE_BASIS_INVALID",
     * "DELIVERY_QUOTE_EXPIRED", "DELIVERY_QUOTE_INCOMPLETE", "DELIVERY_QUOTE_INPUT_CHANGED",
     * "DELIVERY_QUOTE_REVOKED", "DELIVERY_QUOTE_STALE",
     * "DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE", "DELIVERY_REQUOTE_REQUIRED",
     * "DELIVERY_RESOURCE_VERSION_CONFLICT", "DELIVERY_SELECTION_CHANGED",
     * "DELIVERY_SELECTION_EXPIRED", "DELIVERY_SELECTION_NOT_MUTABLE_AFTER_PAYMENT",
     * "DELIVERY_SELECTION_REPLACEMENT_LIMIT_REACHED", "DELIVERY_STATE_CONFLICT",
     * "DELIVERY_UPDATE_NOT_ALLOWED", "DELIVERY_WINDOW_EXPIRED", "DEMO_SESSION_NOT_CURRENT",
     * "DEMO_SESSION_SECRET_REPLAY_EXPIRED", "DEVICE_ARCHIVED", "DEVICE_LOCATION_MISMATCH",
     * "DISCOUNT_NOT_REMOVABLE", "DUPLICATE_CODE", "EMAIL_ALREADY_LINKED",
     * "EMAIL_CHANGE_ALREADY_CONFIRMED", "EMAIL_CHANGE_ATTEMPTS_EXHAUSTED",
     * "EMAIL_CHANGE_CONFIRMATION_EXPIRED", "EMAIL_CHANGE_SUPERSEDED",
     * "EMAIL_PREFERENCE_LINK_INVALID", "EVENT_SOLD_OUT", "EVENT_TICKETS_INSUFFICIENT",
     * "EXTERNAL_PAID_ORDER_ALLOWANCE_EXHAUSTED", "EXTERNAL_SERVICE_ERROR", "FILE_NOT_UPLOADED",
     * "FLAT_TAX_PAYMENT_ATTRIBUTION_UNAVAILABLE", "FLAT_TAX_REFUND_STATE_INVALID", "FORBIDDEN",
     * "FULFILLMENT_ACTIVE_SHIPMENT_EXECUTION", "FULFILLMENT_APPROVAL_REQUIRED",
     * "FULFILLMENT_CHANGED", "FULFILLMENT_COMPLETED", "FULFILLMENT_COMPLETED_DETAILS_REPLACEMENT",
     * "FULFILLMENT_COMPLETION_TIMESTAMP_REQUIRES_COMPLETE",
     * "FULFILLMENT_CONFIGURATION_ACTION_REQUIRED", "FULFILLMENT_EVENT_DEDUPE_CONFLICT",
     * "FULFILLMENT_EVENT_SUBJECT_INVALID", "FULFILLMENT_INACTIVE",
     * "FULFILLMENT_METHOD_ASSIGNMENT_UNSATISFIABLE", "FULFILLMENT_METHOD_UNAVAILABLE",
     * "FULFILLMENT_PROFILE_REVISION_UNUSABLE", "FULFILLMENT_PROFILE_UNAVAILABLE",
     * "FULFILLMENT_QUANTITY_EXCEEDS_AVAILABLE", "FULFILLMENT_QUANTITY_EXCEEDS_LINE_ITEM",
     * "FULFILLMENT_SELECTION_REQUIRED", "FULFILLMENT_SHIPMENT_NOT_VOIDABLE",
     * "FULFILLMENT_STATUS_CONFLICT", "GIFT_CARD_ALLOCATION_CHANGED",
     * "GIFT_CARD_BUYER_EMAIL_REQUIRED", "GIFT_CARD_CHALLENGE_REQUIRED",
     * "GIFT_CARD_FUNDING_LIMIT_EXCEEDED", "GIFT_CARD_INSUFFICIENT_VALUE",
     * "GIFT_CARD_PURCHASE_CONFLICT", "GIFT_CARD_PURCHASE_LIMIT_EXCEEDED",
     * "GIFT_CARD_PURCHASE_REFUND_CONFLICT", "GIFT_CARD_REFUND_DESTINATION_REQUIRED",
     * "GIFT_CARD_STATE_CONFLICT", "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED",
     * "IDEMPOTENCY_RECOVERY_REQUIRED", "IDENTITY_VERIFICATION_REQUIRED",
     * "IMAGE_ASSET_NOT_ATTACHABLE", "IMAGE_INGESTION_EXPIRED", "IMAGE_INGESTION_IN_PROGRESS",
     * "IMAGE_INGESTION_RESTART_REQUIRED", "IMAGE_NOT_ATTACHABLE", "IMAGE_OWNER_NOT_MUTABLE",
     * "IMAGE_PROCESSING_CAPACITY_EXCEEDED", "IMAGE_PROCESSING_FAILED", "IMAGE_PROCESSING_TIMEOUT",
     * "IMAGE_REVISION_MISMATCH", "IMAGE_SOURCE_TIMEOUT", "IMAGE_SOURCE_UNAVAILABLE",
     * "IMAGE_STORAGE_QUOTA_EXCEEDED", "INITIAL_API_KEY_ALREADY_CREATED",
     * "INSTANT_PAYOUTS_UNAVAILABLE", "INSUFFICIENT_AVAILABLE_BALANCE", "INSUFFICIENT_SCOPE",
     * "INTERNAL_ERROR", "INVALID_CREDENTIAL", "INVALID_INVOICE_LATE_FEE_AMOUNT",
     * "INVALID_MERCHANT_SELECTION", "INVALID_ORDER_STATUS", "INVALID_REQUEST",
     * "INVALID_STATUS_TRANSITION", "INVALID_VALUE", "INVENTORY_COUNT_INCOMPLETE",
     * "INVENTORY_INSUFFICIENT", "INVENTORY_ITEM_INACTIVE", "INVENTORY_ITEM_UNAVAILABLE",
     * "INVENTORY_LOCATION_ALLOCATION_DISABLED", "INVENTORY_LOCATION_INELIGIBLE",
     * "INVENTORY_POLICY_UNAVAILABLE", "INVENTORY_QUANTITY_CONFLICT", "INVENTORY_RECEIPT_CONFLICT",
     * "INVENTORY_ROUTING_LOCATION_LIMIT_EXCEEDED", "INVENTORY_SHORTAGE",
     * "INVENTORY_SOURCE_SEQUENCE_CHANGED", "INVENTORY_TRANSFER_LINE_CONFLICT",
     * "INVENTORY_UNAVAILABLE", "INVOICE_AUTOPAY_PAYMENT_METHOD_REQUIRED",
     * "INVOICE_BALANCE_CHANGED", "INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED",
     * "INVOICE_COLLECTION_BLOCKED", "INVOICE_COLLECTION_CHANGED",
     * "INVOICE_COLLECTION_MODE_UNSUPPORTED", "INVOICE_ISSUE_IN_PROGRESS",
     * "INVOICE_LATE_FEE_NOT_COLLECTIBLE", "INVOICE_LATE_FEE_NOT_DUE",
     * "INVOICE_LATE_FEE_POLICY_REQUIRED", "INVOICE_LINK_UNAVAILABLE",
     * "INVOICE_LOCKED_ORDER_FINANCIALS", "INVOICE_NOT_COLLECTIBLE", "INVOICE_NOT_CREDITABLE",
     * "INVOICE_NOT_DRAFT", "INVOICE_NOT_ISSUED", "INVOICE_NOT_MARKABLE_UNCOLLECTIBLE",
     * "INVOICE_NOT_REVERSIBLE", "INVOICE_NOT_VOIDABLE", "INVOICE_PAYMENT_ALREADY_SETTLED",
     * "INVOICE_PAYMENT_ATTEMPT_ACTIVE", "INVOICE_PAYMENT_NOT_APPLIED",
     * "INVOICE_PAYMENT_PROCESSING", "INVOICE_PAYMENT_RESOLVING",
     * "INVOICE_PAYMENT_TERM_CURRENCY_MISMATCH", "INVOICE_PAYMENT_TERM_UNAVAILABLE",
     * "INVOICE_REMINDER_CHANGED", "INVOICE_SCHEDULE_ENTRY_NOT_COLLECTIBLE",
     * "INVOICE_TAX_SNAPSHOT_MISSING", "INVOICE_TAX_SNAPSHOT_STALE", "ITEMS_REQUIRED",
     * "LIMIT_EXCEEDED", "LIMIT_REACHED", "LINE_ITEM_REFUND_QUANTITY_EXCEEDS_REFUNDABLE",
     * "LIST_RESERVED", "LOCATION_NOT_ACTIVE", "LOCATION_UNAVAILABLE",
     * "MAX_COMPLETIONS_BELOW_COMPLETED", "MAX_TOTAL_QUANTITY_BELOW_SOLD",
     * "MERCHANT_ACCOUNT_DOMAIN_NOT_VERIFIED", "MERCHANT_ACCOUNT_NOT_READY",
     * "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REPAIR_REQUIRED",
     * "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REQUIRED",
     * "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_UNAVAILABLE",
     * "MERCHANT_ACCOUNT_SESSION_CONTROLLER_MISMATCH", "MERCHANT_ACCOUNT_SESSION_INELIGIBLE",
     * "MERCHANT_ACCOUNT_SESSION_PROVIDER_GRANT_MISMATCH",
     * "MERCHANT_ACCOUNT_SESSION_TARGETED_REMEDIATION_UNAVAILABLE",
     * "MERCHANT_ACCOUNT_SESSION_UNMAPPABLE_REQUIREMENT_ID", "MERCHANT_BILLING_SUSPENDED",
     * "MERCHANT_NOT_READY", "MERCHANT_ONBOARDING_REQUIRED", "MERCHANT_PROCESSING_RESTRICTED",
     * "MERCHANT_SELECTION_REQUIRED", "MERCHANT_UNDER_REVIEW", "METHOD_NOT_ALLOWED",
     * "MODIFIER_GROUP_UNAVAILABLE", "MONEY_MOVEMENT_OPERATION_BLOCKED",
     * "MONEY_MOVEMENT_PROVIDER_NOT_CONFIGURED", "MULTIPLE_IDENTITIES_FOUND",
     * "NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE", "NOTHING_TO_REFUND", "NOTHING_TO_REFUND_FOR_CHARGE",
     * "NOTHING_TO_REFUND_FOR_LINE_ITEM", "NOTHING_TO_REFUND_FOR_TAX_BREAKDOWN", "NOT_ALLOWED",
     * "NO_DISCOUNTABLE_BALANCE", "NO_PAYMENTS_FOR_ORDER",
     * "ONBOARDING_CONTROLLER_VERSION_UNSUPPORTED", "ONBOARDING_PROFILE_PROVIDER_MANAGED",
     * "OPERATION_IN_PROGRESS", "ORDER_ALREADY_HAS_ACTIVE_INVOICE", "ORDER_ALREADY_HAS_PAYMENTS",
     * "ORDER_ALREADY_HAS_REFUNDS", "ORDER_ALREADY_PAID", "ORDER_CHANGED_REFRESH_REQUIRED",
     * "ORDER_CHECKOUT_SESSION_CHANGED", "ORDER_COLLECTION_ALREADY_ACTIVE",
     * "ORDER_COLLECTION_IN_PROGRESS", "ORDER_CONFLICT", "ORDER_CUSTOMER_ALREADY_SET",
     * "ORDER_CUSTOMER_CHECKOUT_ACTIVE", "ORDER_CUSTOMER_NOT_UPDATABLE_AFTER_PAYMENT",
     * "ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED", "ORDER_FINANCIAL_MUTATION_NOT_ALLOWED",
     * "ORDER_HAS_ACTIVE_PAYMENT_INTENT", "ORDER_HAS_COLLECTED_MONEY", "ORDER_HAS_MANUAL_PAYMENTS",
     * "ORDER_HAS_NO_LINE_ITEMS", "ORDER_HAS_NO_REFUNDABLE_CHARGES",
     * "ORDER_HAS_NO_REFUNDABLE_LINE_ITEMS", "ORDER_HAS_OPEN_CHECKOUT",
     * "ORDER_INVENTORY_EXCEPTION_NOT_RESOLVABLE", "ORDER_INVENTORY_EXCEPTION_UNRESOLVED",
     * "ORDER_NOT_FULFILLABLE", "ORDER_NOT_OPEN", "ORDER_PAYMENT_ATTEMPT_ACTIVE",
     * "ORDER_PAYMENT_CUSTOMER_MISMATCH", "ORDER_PAYMENT_INTENT_CREATE_IN_PROGRESS",
     * "ORDER_PAYMENT_INTENT_CREATE_REQUIRES_REVIEW", "ORDER_PAYMENT_LEG_ALREADY_SETTLED",
     * "ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE", "ORDER_RECEIPT_EMAIL_ON_FILE",
     * "ORDER_RECEIPT_EMAIL_UNAVAILABLE", "ORDER_RECEIPT_MERCHANT_MANAGED",
     * "ORDER_RECEIPT_NOT_AVAILABLE", "ORDER_RECEIPT_RECIPIENT_LIMIT_REACHED",
     * "ORDER_RECONCILIATION_REQUIRED", "ORDER_TAX_NOT_READY", "ORDER_TAX_NOT_UPDATABLE",
     * "ORDER_TOTALS_UNAVAILABLE", "ORDER_TOTAL_BELOW_NET_COLLECTED", "ORGANIZATION_CYCLE",
     * "ORGANIZATION_NOT_ACTIVE", "PACKAGE_CHANGED", "PACKAGE_PARENT_CHANGED",
     * "PAID_LINE_ITEM_MODIFIER_CHANGE_FORBIDDEN", "PAID_LINE_ITEM_PRICE_CHANGE_FORBIDDEN",
     * "PAID_LINE_ITEM_QUANTITY_CHANGE_FORBIDDEN", "PAID_LINE_ITEM_QUANTITY_DECREASE_FORBIDDEN",
     * "PAID_LINE_ITEM_REMOVAL_FORBIDDEN", "PAID_LINE_ITEM_TAX_CHANGE_FORBIDDEN",
     * "PAUSE_NOT_ALLOWED", "PAYMENT_ACTION_WINDOW_TOO_SHORT", "PAYMENT_ALREADY_SETTLED",
     * "PAYMENT_AMOUNT_CHANGED", "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_ATTEMPT_MISMATCH",
     * "PAYMENT_ATTEMPT_NOT_CANCELABLE", "PAYMENT_ATTEMPT_NOT_RESUMABLE",
     * "PAYMENT_ATTEMPT_REQUIRES_CAPTURE", "PAYMENT_CONFIRMATION_STATE_CHANGED",
     * "PAYMENT_CONFIRM_IN_PROGRESS", "PAYMENT_INTENT_DISPUTED", "PAYMENT_INTENT_LIMIT_REACHED",
     * "PAYMENT_IN_PROGRESS", "PAYMENT_LEG_SELECTION_REQUIRED", "PAYMENT_LINK_CHANGED_RETRY",
     * "PAYMENT_LINK_FULFILLMENT_UNAVAILABLE", "PAYMENT_LINK_INACTIVE",
     * "PAYMENT_LINK_MAX_COMPLETIONS_REACHED", "PAYMENT_LINK_RESOLUTION_CONTEXT_REFRESH_REQUIRED",
     * "PAYMENT_LINK_RESOLUTION_REPLAY_UNAVAILABLE", "PAYMENT_LINK_SALES_ENDED",
     * "PAYMENT_METHOD_CUSTOMER_MISMATCH", "PAYMENT_METHOD_DOMAIN_OPERATION_IN_PROGRESS",
     * "PAYMENT_METHOD_HAS_ACTIVE_SUBSCRIPTIONS", "PAYMENT_METHOD_NOT_ACTIVE",
     * "PAYMENT_METHOD_NOT_READY", "PAYMENT_METHOD_ON_SESSION_ONLY", "PAYMENT_METHOD_REQUIRED",
     * "PAYMENT_METHOD_SAVE_EMAIL_UNAVAILABLE", "PAYMENT_METHOD_SAVE_NOT_PENDING",
     * "PAYMENT_METHOD_SAVE_NOT_READY", "PAYMENT_NOT_REQUIRED", "PAYMENT_OPERATION_IN_PROGRESS",
     * "PAYMENT_OPTION_LIMIT_EXCEEDED", "PAYMENT_OPTION_NOT_READY", "PAYMENT_OPTION_UNAVAILABLE",
     * "PAYMENT_PROCESSING_NOT_ENABLED", "PAYMENT_PROCESSING_UNAVAILABLE",
     * "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_PROCESSOR_UNAVAILABLE", "PAYMENT_REVIEW_OPEN",
     * "PAYMENT_SOURCE_UNAVAILABLE", "PAYOUTS_NOT_ENABLED", "PAYOUT_DELAY_PROVIDER_CONTROLLED",
     * "PAYOUT_DESTINATIONS_MANAGEMENT_UNAVAILABLE", "PAYOUT_FEE_NOT_DETERMINABLE",
     * "PAYOUT_NOT_CANCELABLE", "PAYOUT_SETTINGS_MANAGED_EXTERNALLY",
     * "PAYOUT_SETTINGS_MANAGEMENT_UNAVAILABLE", "PAYOUT_STATUS_NOT_CANCELABLE", "PLAN_NOT_ACTIVE",
     * "PROCESSING_FEE_PRICING_NOT_AUTHORIZED", "PROCESSOR_NOT_CONFIGURED",
     * "PROFILE_UPDATE_STATUS_UNKNOWN", "PROMOTION_CODES_DISABLED", "PROMOTION_DECLINED",
     * "PROMOTION_HAS_ACTIVE_SUBSCRIPTION_OFFERS", "PROMOTION_NOT_REDEEMABLE",
     * "PROMOTION_SHAPE_IMMUTABLE", "PROVIDER_ACCOUNT_CLEANUP_REQUIRED",
     * "QUANTITY_CHANGE_NOT_ALLOWED", "QUANTITY_NOT_ADJUSTABLE", "RATE_LIMIT_EXCEEDED",
     * "REFUND_ADJUSTMENT_PAYMENT_INTENT_NOT_REFUNDABLE",
     * "REFUND_ADJUSTMENT_REFUND_EXCEEDS_PAYMENT_INTENT_REFUNDABLE",
     * "REFUND_ADJUSTMENT_REFUND_EXCEEDS_REMAINING", "REFUND_SUBMISSION_DEADLINE_EXPIRED",
     * "REFUND_TENDER_CAPACITY_CONFLICT", "REPORT_DOWNLOAD_EXPIRED", "REQUEST_BLOCKED",
     * "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT", "REQUIRED",
     * "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "RETURN_CHECKOUT_REQUIRED",
     * "RETURN_COMPLETION_BLOCKED", "RETURN_DISPOSITION_QUANTITY_EXCEEDED",
     * "RETURN_FULFILLMENT_ALLOCATION_AMBIGUOUS", "RETURN_INSPECTION_QUANTITY_EXCEEDED",
     * "RETURN_LINE_CANCELLATION_CONFLICT", "RETURN_POLICY_CONFLICT",
     * "RETURN_RECEIPT_QUANTITY_EXCEEDED", "RETURN_SELF_SERVICE_NOT_ALLOWED",
     * "RETURN_SHIPMENT_QUANTITY_EXCEEDS_AVAILABLE", "RETURN_VALUE_EXCEEDED",
     * "RETURN_VERSION_CONFLICT", "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW",
     * "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION", "RISK_RULE_LIMIT_REACHED",
     * "ROUTE_NOT_FOUND", "RULE_RESERVED", "SANDBOX_ARCHIVED", "SANDBOX_INACTIVE",
     * "SAVE_PAYMENT_METHOD_CODE_LIMIT_REACHED", "SAVE_PAYMENT_METHOD_NOT_OFFERED",
     * "SAVE_PAYMENT_METHOD_VERIFICATION_REQUIRED", "SENSITIVE_IDEMPOTENCY_RESULT_INVALID",
     * "SERVICE_UNAVAILABLE", "SETUP_SOURCE_NON_ZERO_ORDER", "SHIPMENT_CHANGED",
     * "SHIPMENT_PACKAGE_ITEM_QUANTITY_EXCEEDS_FULFILLMENT", "SHIPMENT_PACKAGE_NOT_VOIDABLE",
     * "SKIP_LIMIT_REACHED", "SKIP_NOT_ALLOWED", "STANDARD_PAYOUTS_UNAVAILABLE",
     * "STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE", "SUBSCRIPTION_DELIVERY_LINES_NOT_COMBINABLE",
     * "SUBSCRIPTION_DELIVERY_MIGRATION_IN_PROGRESS",
     * "SUBSCRIPTION_DELIVERY_MIGRATION_TARGET_UNAVAILABLE",
     * "SUBSCRIPTION_DELIVERY_PROFILE_ACTION_REQUIRED", "SUBSCRIPTION_DELIVERY_PROFILE_MISSING",
     * "SUBSCRIPTION_DELIVERY_UNAVAILABLE", "SUBSCRIPTION_NEXT_BILLING_AT_BEFORE_PERIOD_START",
     * "SUBSCRIPTION_NEXT_BILLING_AT_TOO_FAR", "SUBSCRIPTION_OFFER_ARCHIVED",
     * "SUBSCRIPTION_OFFER_NOT_ACTIVE", "SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE",
     * "SUBSCRIPTION_OFFER_TARGET_CONFLICT", "SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS",
     * "SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED", "SUBSCRIPTION_START_OVERRIDE_NOT_ALLOWED",
     * "SWAP_NOT_ALLOWED", "TAX_BREAKDOWN_REFUND_EXCEEDS_REMAINING", "TAX_CATEGORY_REQUIRED",
     * "TEST_PROCESSOR_NOT_CONFIGURED", "TICKET_PREFIX_LOCKED", "TIP_ALLOCATION_CAPACITY_EXCEEDED",
     * "UNKNOWN_FIELD", "UNSUPPORTED_CONTENT_TYPE", "UNSUPPORTED_PROCESSOR",
     * "VARIANT_NOT_SELLABLE", "VERSION_CONFLICT", "WEBHOOK_DELIVERY_IN_FLIGHT",
     * "WEBHOOK_ENDPOINT_NOT_ACTIVE", "WEBHOOK_ENDPOINT_NOT_SUBSCRIBED",
     * "WEBHOOK_EVENT_PAYLOAD_EXPIRED", "WORKLOAD_IDENTITY_LIMIT_REACHED".
     */
    "code": "ACCESS_LINK_CUSTOMER_REQUIRED"
        | "ACCESS_LINK_MERCHANT_HOSTED"
        | "ACCOUNT_SETUP_CONFIGURATION_CONFLICT"
        | "ACCOUNT_SETUP_REPAIR_REQUIRED"
        | "ACCOUNT_SETUP_UNAVAILABLE"
        | "ACH_TRANSACTION_PURPOSE_UNRESOLVED"
        | "ACTION_NOT_ALLOWED"
        | "ACTIVE_DEMO_SESSION_EXISTS"
        | "ACTIVE_LINE_ITEM_SOURCE_CHANGE"
        | "ACTIVE_OPTION_SELECTOR_COLLAPSE"
        | "AFFIRM_REFUND_RETRY_NOT_ALLOWED"
        | "ALREADY_EXISTS"
        | "AMOUNT_EXCEEDS_BALANCE"
        | "AMOUNT_EXCEEDS_REFUNDABLE"
        | "AMOUNT_MISMATCH"
        | "AMOUNT_NOT_ADJUSTABLE"
        | "API_KEY_ALREADY_REVOKED"
        | "API_KEY_CHANGED"
        | "API_VERSION_RETIRED"
        | "AUTHENTICATION_REQUIRED"
        | "AUTOMATIC_PAYOUT_NOT_CANCELABLE"
        | "AUTOMATIC_PROMOTIONS_DISABLED"
        | "AUTOMATIC_TAX_CONNECTION_REQUIRED"
        | "AUTOMATIC_TAX_ORIGIN_ADDRESS_REQUIRED"
        | "AUTOMATIC_TAX_UNAVAILABLE"
        | "BILLING_INTERVAL_CHANGE_NOT_ALLOWED"
        | "BUNDLE_COMPONENT_PRODUCT_NOT_ACTIVE"
        | "BUNDLE_COMPONENT_VARIANT_NOT_ACTIVE"
        | "BUNDLE_NOT_SELLABLE"
        | "CANCEL_IMMEDIATELY_NOT_ALLOWED"
        | "CAPABILITIES_IMMUTABLE"
        | "CAPABILITY_NOT_REQUESTED"
        | "CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE"
        | "CATALOG_INVENTORY_RELATIONSHIP_INVALID"
        | "CATALOG_LINE_ITEM_CURRENCY_CHANGED"
        | "CATALOG_LINE_ITEM_SOURCE_CHANGED"
        | "CHECKOUT_CREDENTIAL_CHANGED"
        | "CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED"
        | "CHECKOUT_CUSTOMER_CHANGED"
        | "CHECKOUT_SESSION_CURRENT_CHANGED"
        | "CHECKOUT_SESSION_EXPIRED"
        | "CHECKOUT_SESSION_MODIFIERS_READ_ONLY"
        | "CHECKOUT_SESSION_NOT_OPEN"
        | "CHECKOUT_SESSION_SCOPE_MISMATCH"
        | "CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED"
        | "CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED"
        | "CHECKOUT_TAX_CALCULATION_LIMIT_REACHED"
        | "CONCURRENT_MODIFICATION"
        | "CONFIRMATION_TOKEN_ALREADY_USED"
        | "CONFIRMATION_TOKEN_EXPIRED"
        | "COUNTRY_IMMUTABLE"
        | "CREDIT_NOTE_ALLOCATION_ALREADY_REVERSED"
        | "CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE"
        | "CREDIT_NOTE_AMOUNT_EXCEEDS_CREDITABLE"
        | "CREDIT_NOTE_ISSUE_IN_PROGRESS"
        | "CREDIT_NOTE_NOT_DRAFT"
        | "CREDIT_NOTE_NOT_ISSUED"
        | "CREDIT_NOTE_REFUND_EXCEEDS_BALANCE"
        | "CUSTOMER_DELETION_ALREADY_APPROVED"
        | "CUSTOMER_DELETION_BLOCKED"
        | "CUSTOMER_DELETION_PROCESSING"
        | "CUSTOMER_DELETION_REQUEST_NOT_PENDING"
        | "CUSTOMER_DELETION_STATE_CHANGED"
        | "CUSTOMER_EMAIL_BUYER_MANAGED"
        | "CUSTOMER_EMAIL_REQUIRED"
        | "CUSTOMER_PAYMENT_TERM_UNAVAILABLE"
        | "CUSTOMER_VERIFICATION_ALREADY_CONFIRMED"
        | "CUSTOMER_VERIFICATION_ATTEMPTS_EXHAUSTED"
        | "CUSTOMER_VERIFICATION_EMAIL_CHANGED"
        | "CUSTOMER_VERIFICATION_EXPIRED"
        | "CUSTOMER_VERIFICATION_LIMIT_REACHED"
        | "CUSTOMER_VERIFICATION_NOT_CONFIRMED"
        | "CUSTOMER_VERIFICATION_NOT_OFFERED"
        | "CUSTOMER_VERIFICATION_NOT_SENT"
        | "CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE"
        | "CUSTOMER_VERIFICATION_USED"
        | "CUSTOM_DOMAIN_NOT_VERIFIED"
        | "CUSTOM_DOMAIN_SUBSCRIPTION_REQUIRED"
        | "CUSTOM_DOMAIN_UNAVAILABLE"
        | "DEFAULT_ENVIRONMENT_REQUIRED"
        | "DEFAULT_PAYMENT_METHOD_CONFLICT"
        | "DEFAULT_PAYOUT_DESTINATIONS_MANAGED_EXTERNALLY"
        | "DEFAULT_PAYOUT_DESTINATION_INVALID"
        | "DEFAULT_PAYOUT_DESTINATION_REPLACEMENT_REQUIRED"
        | "DEFAULT_PAYOUT_DESTINATION_REQUIRED"
        | "DEFAULT_SANDBOX_CANNOT_BE_ARCHIVED"
        | "DEFAULT_SANDBOX_CANNOT_BE_RESET"
        | "DELIVERY_CALCULATION_EXPIRED"
        | "DELIVERY_COMMERCE_TREATMENT_UNSUPPORTED"
        | "DELIVERY_DEPENDENCY_REVOKED"
        | "DELIVERY_DESTINATION_CONTROLLED_BY_SELECTION"
        | "DELIVERY_DESTINATION_FROZEN"
        | "DELIVERY_ELIGIBILITY_CONTEXT_CHANGED"
        | "DELIVERY_EXTERNAL_REFERENCE_REUSED"
        | "DELIVERY_GROUPING_UNSUPPORTED"
        | "DELIVERY_OPTION_ALREADY_SELECTED"
        | "DELIVERY_OPTION_EXPIRED"
        | "DELIVERY_PICKUP_AVAILABILITY_CHANGED"
        | "DELIVERY_PICKUP_LOCATION_UNAVAILABLE"
        | "DELIVERY_PREVIEW_REQUIRES_CHECKOUT"
        | "DELIVERY_QUOTE_BASIS_INVALID"
        | "DELIVERY_QUOTE_EXPIRED"
        | "DELIVERY_QUOTE_INCOMPLETE"
        | "DELIVERY_QUOTE_INPUT_CHANGED"
        | "DELIVERY_QUOTE_REVOKED"
        | "DELIVERY_QUOTE_STALE"
        | "DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE"
        | "DELIVERY_REQUOTE_REQUIRED"
        | "DELIVERY_RESOURCE_VERSION_CONFLICT"
        | "DELIVERY_SELECTION_CHANGED"
        | "DELIVERY_SELECTION_EXPIRED"
        | "DELIVERY_SELECTION_NOT_MUTABLE_AFTER_PAYMENT"
        | "DELIVERY_SELECTION_REPLACEMENT_LIMIT_REACHED"
        | "DELIVERY_STATE_CONFLICT"
        | "DELIVERY_UPDATE_NOT_ALLOWED"
        | "DELIVERY_WINDOW_EXPIRED"
        | "DEMO_SESSION_NOT_CURRENT"
        | "DEMO_SESSION_SECRET_REPLAY_EXPIRED"
        | "DEVICE_ARCHIVED"
        | "DEVICE_LOCATION_MISMATCH"
        | "DISCOUNT_NOT_REMOVABLE"
        | "DUPLICATE_CODE"
        | "EMAIL_ALREADY_LINKED"
        | "EMAIL_CHANGE_ALREADY_CONFIRMED"
        | "EMAIL_CHANGE_ATTEMPTS_EXHAUSTED"
        | "EMAIL_CHANGE_CONFIRMATION_EXPIRED"
        | "EMAIL_CHANGE_SUPERSEDED"
        | "EMAIL_PREFERENCE_LINK_INVALID"
        | "EVENT_SOLD_OUT"
        | "EVENT_TICKETS_INSUFFICIENT"
        | "EXTERNAL_PAID_ORDER_ALLOWANCE_EXHAUSTED"
        | "EXTERNAL_SERVICE_ERROR"
        | "FILE_NOT_UPLOADED"
        | "FLAT_TAX_PAYMENT_ATTRIBUTION_UNAVAILABLE"
        | "FLAT_TAX_REFUND_STATE_INVALID"
        | "FORBIDDEN"
        | "FULFILLMENT_ACTIVE_SHIPMENT_EXECUTION"
        | "FULFILLMENT_APPROVAL_REQUIRED"
        | "FULFILLMENT_CHANGED"
        | "FULFILLMENT_COMPLETED"
        | "FULFILLMENT_COMPLETED_DETAILS_REPLACEMENT"
        | "FULFILLMENT_COMPLETION_TIMESTAMP_REQUIRES_COMPLETE"
        | "FULFILLMENT_CONFIGURATION_ACTION_REQUIRED"
        | "FULFILLMENT_EVENT_DEDUPE_CONFLICT"
        | "FULFILLMENT_EVENT_SUBJECT_INVALID"
        | "FULFILLMENT_INACTIVE"
        | "FULFILLMENT_METHOD_ASSIGNMENT_UNSATISFIABLE"
        | "FULFILLMENT_METHOD_UNAVAILABLE"
        | "FULFILLMENT_PROFILE_REVISION_UNUSABLE"
        | "FULFILLMENT_PROFILE_UNAVAILABLE"
        | "FULFILLMENT_QUANTITY_EXCEEDS_AVAILABLE"
        | "FULFILLMENT_QUANTITY_EXCEEDS_LINE_ITEM"
        | "FULFILLMENT_SELECTION_REQUIRED"
        | "FULFILLMENT_SHIPMENT_NOT_VOIDABLE"
        | "FULFILLMENT_STATUS_CONFLICT"
        | "GIFT_CARD_ALLOCATION_CHANGED"
        | "GIFT_CARD_BUYER_EMAIL_REQUIRED"
        | "GIFT_CARD_CHALLENGE_REQUIRED"
        | "GIFT_CARD_FUNDING_LIMIT_EXCEEDED"
        | "GIFT_CARD_INSUFFICIENT_VALUE"
        | "GIFT_CARD_PURCHASE_CONFLICT"
        | "GIFT_CARD_PURCHASE_LIMIT_EXCEEDED"
        | "GIFT_CARD_PURCHASE_REFUND_CONFLICT"
        | "GIFT_CARD_REFUND_DESTINATION_REQUIRED"
        | "GIFT_CARD_STATE_CONFLICT"
        | "IDEMPOTENCY_KEY_IN_PROGRESS"
        | "IDEMPOTENCY_KEY_REUSED"
        | "IDEMPOTENCY_RECOVERY_REQUIRED"
        | "IDENTITY_VERIFICATION_REQUIRED"
        | "IMAGE_ASSET_NOT_ATTACHABLE"
        | "IMAGE_INGESTION_EXPIRED"
        | "IMAGE_INGESTION_IN_PROGRESS"
        | "IMAGE_INGESTION_RESTART_REQUIRED"
        | "IMAGE_NOT_ATTACHABLE"
        | "IMAGE_OWNER_NOT_MUTABLE"
        | "IMAGE_PROCESSING_CAPACITY_EXCEEDED"
        | "IMAGE_PROCESSING_FAILED"
        | "IMAGE_PROCESSING_TIMEOUT"
        | "IMAGE_REVISION_MISMATCH"
        | "IMAGE_SOURCE_TIMEOUT"
        | "IMAGE_SOURCE_UNAVAILABLE"
        | "IMAGE_STORAGE_QUOTA_EXCEEDED"
        | "INITIAL_API_KEY_ALREADY_CREATED"
        | "INSTANT_PAYOUTS_UNAVAILABLE"
        | "INSUFFICIENT_AVAILABLE_BALANCE"
        | "INSUFFICIENT_SCOPE"
        | "INTERNAL_ERROR"
        | "INVALID_CREDENTIAL"
        | "INVALID_INVOICE_LATE_FEE_AMOUNT"
        | "INVALID_MERCHANT_SELECTION"
        | "INVALID_ORDER_STATUS"
        | "INVALID_REQUEST"
        | "INVALID_STATUS_TRANSITION"
        | "INVALID_VALUE"
        | "INVENTORY_COUNT_INCOMPLETE"
        | "INVENTORY_INSUFFICIENT"
        | "INVENTORY_ITEM_INACTIVE"
        | "INVENTORY_ITEM_UNAVAILABLE"
        | "INVENTORY_LOCATION_ALLOCATION_DISABLED"
        | "INVENTORY_LOCATION_INELIGIBLE"
        | "INVENTORY_POLICY_UNAVAILABLE"
        | "INVENTORY_QUANTITY_CONFLICT"
        | "INVENTORY_RECEIPT_CONFLICT"
        | "INVENTORY_ROUTING_LOCATION_LIMIT_EXCEEDED"
        | "INVENTORY_SHORTAGE"
        | "INVENTORY_SOURCE_SEQUENCE_CHANGED"
        | "INVENTORY_TRANSFER_LINE_CONFLICT"
        | "INVENTORY_UNAVAILABLE"
        | "INVOICE_AUTOPAY_PAYMENT_METHOD_REQUIRED"
        | "INVOICE_BALANCE_CHANGED"
        | "INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED"
        | "INVOICE_COLLECTION_BLOCKED"
        | "INVOICE_COLLECTION_CHANGED"
        | "INVOICE_COLLECTION_MODE_UNSUPPORTED"
        | "INVOICE_ISSUE_IN_PROGRESS"
        | "INVOICE_LATE_FEE_NOT_COLLECTIBLE"
        | "INVOICE_LATE_FEE_NOT_DUE"
        | "INVOICE_LATE_FEE_POLICY_REQUIRED"
        | "INVOICE_LINK_UNAVAILABLE"
        | "INVOICE_LOCKED_ORDER_FINANCIALS"
        | "INVOICE_NOT_COLLECTIBLE"
        | "INVOICE_NOT_CREDITABLE"
        | "INVOICE_NOT_DRAFT"
        | "INVOICE_NOT_ISSUED"
        | "INVOICE_NOT_MARKABLE_UNCOLLECTIBLE"
        | "INVOICE_NOT_REVERSIBLE"
        | "INVOICE_NOT_VOIDABLE"
        | "INVOICE_PAYMENT_ALREADY_SETTLED"
        | "INVOICE_PAYMENT_ATTEMPT_ACTIVE"
        | "INVOICE_PAYMENT_NOT_APPLIED"
        | "INVOICE_PAYMENT_PROCESSING"
        | "INVOICE_PAYMENT_RESOLVING"
        | "INVOICE_PAYMENT_TERM_CURRENCY_MISMATCH"
        | "INVOICE_PAYMENT_TERM_UNAVAILABLE"
        | "INVOICE_REMINDER_CHANGED"
        | "INVOICE_SCHEDULE_ENTRY_NOT_COLLECTIBLE"
        | "INVOICE_TAX_SNAPSHOT_MISSING"
        | "INVOICE_TAX_SNAPSHOT_STALE"
        | "ITEMS_REQUIRED"
        | "LIMIT_EXCEEDED"
        | "LIMIT_REACHED"
        | "LINE_ITEM_REFUND_QUANTITY_EXCEEDS_REFUNDABLE"
        | "LIST_RESERVED"
        | "LOCATION_NOT_ACTIVE"
        | "LOCATION_UNAVAILABLE"
        | "MAX_COMPLETIONS_BELOW_COMPLETED"
        | "MAX_TOTAL_QUANTITY_BELOW_SOLD"
        | "MERCHANT_ACCOUNT_DOMAIN_NOT_VERIFIED"
        | "MERCHANT_ACCOUNT_NOT_READY"
        | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REPAIR_REQUIRED"
        | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REQUIRED"
        | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_UNAVAILABLE"
        | "MERCHANT_ACCOUNT_SESSION_CONTROLLER_MISMATCH"
        | "MERCHANT_ACCOUNT_SESSION_INELIGIBLE"
        | "MERCHANT_ACCOUNT_SESSION_PROVIDER_GRANT_MISMATCH"
        | "MERCHANT_ACCOUNT_SESSION_TARGETED_REMEDIATION_UNAVAILABLE"
        | "MERCHANT_ACCOUNT_SESSION_UNMAPPABLE_REQUIREMENT_ID"
        | "MERCHANT_BILLING_SUSPENDED"
        | "MERCHANT_NOT_READY"
        | "MERCHANT_ONBOARDING_REQUIRED"
        | "MERCHANT_PROCESSING_RESTRICTED"
        | "MERCHANT_SELECTION_REQUIRED"
        | "MERCHANT_UNDER_REVIEW"
        | "METHOD_NOT_ALLOWED"
        | "MODIFIER_GROUP_UNAVAILABLE"
        | "MONEY_MOVEMENT_OPERATION_BLOCKED"
        | "MONEY_MOVEMENT_PROVIDER_NOT_CONFIGURED"
        | "MULTIPLE_IDENTITIES_FOUND"
        | "NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE"
        | "NOTHING_TO_REFUND"
        | "NOTHING_TO_REFUND_FOR_CHARGE"
        | "NOTHING_TO_REFUND_FOR_LINE_ITEM"
        | "NOTHING_TO_REFUND_FOR_TAX_BREAKDOWN"
        | "NOT_ALLOWED"
        | "NO_DISCOUNTABLE_BALANCE"
        | "NO_PAYMENTS_FOR_ORDER"
        | "ONBOARDING_CONTROLLER_VERSION_UNSUPPORTED"
        | "ONBOARDING_PROFILE_PROVIDER_MANAGED"
        | "OPERATION_IN_PROGRESS"
        | "ORDER_ALREADY_HAS_ACTIVE_INVOICE"
        | "ORDER_ALREADY_HAS_PAYMENTS"
        | "ORDER_ALREADY_HAS_REFUNDS"
        | "ORDER_ALREADY_PAID"
        | "ORDER_CHANGED_REFRESH_REQUIRED"
        | "ORDER_CHECKOUT_SESSION_CHANGED"
        | "ORDER_COLLECTION_ALREADY_ACTIVE"
        | "ORDER_COLLECTION_IN_PROGRESS"
        | "ORDER_CONFLICT"
        | "ORDER_CUSTOMER_ALREADY_SET"
        | "ORDER_CUSTOMER_CHECKOUT_ACTIVE"
        | "ORDER_CUSTOMER_NOT_UPDATABLE_AFTER_PAYMENT"
        | "ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED"
        | "ORDER_FINANCIAL_MUTATION_NOT_ALLOWED"
        | "ORDER_HAS_ACTIVE_PAYMENT_INTENT"
        | "ORDER_HAS_COLLECTED_MONEY"
        | "ORDER_HAS_MANUAL_PAYMENTS"
        | "ORDER_HAS_NO_LINE_ITEMS"
        | "ORDER_HAS_NO_REFUNDABLE_CHARGES"
        | "ORDER_HAS_NO_REFUNDABLE_LINE_ITEMS"
        | "ORDER_HAS_OPEN_CHECKOUT"
        | "ORDER_INVENTORY_EXCEPTION_NOT_RESOLVABLE"
        | "ORDER_INVENTORY_EXCEPTION_UNRESOLVED"
        | "ORDER_NOT_FULFILLABLE"
        | "ORDER_NOT_OPEN"
        | "ORDER_PAYMENT_ATTEMPT_ACTIVE"
        | "ORDER_PAYMENT_CUSTOMER_MISMATCH"
        | "ORDER_PAYMENT_INTENT_CREATE_IN_PROGRESS"
        | "ORDER_PAYMENT_INTENT_CREATE_REQUIRES_REVIEW"
        | "ORDER_PAYMENT_LEG_ALREADY_SETTLED"
        | "ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE"
        | "ORDER_RECEIPT_EMAIL_ON_FILE"
        | "ORDER_RECEIPT_EMAIL_UNAVAILABLE"
        | "ORDER_RECEIPT_MERCHANT_MANAGED"
        | "ORDER_RECEIPT_NOT_AVAILABLE"
        | "ORDER_RECEIPT_RECIPIENT_LIMIT_REACHED"
        | "ORDER_RECONCILIATION_REQUIRED"
        | "ORDER_TAX_NOT_READY"
        | "ORDER_TAX_NOT_UPDATABLE"
        | "ORDER_TOTALS_UNAVAILABLE"
        | "ORDER_TOTAL_BELOW_NET_COLLECTED"
        | "ORGANIZATION_CYCLE"
        | "ORGANIZATION_NOT_ACTIVE"
        | "PACKAGE_CHANGED"
        | "PACKAGE_PARENT_CHANGED"
        | "PAID_LINE_ITEM_MODIFIER_CHANGE_FORBIDDEN"
        | "PAID_LINE_ITEM_PRICE_CHANGE_FORBIDDEN"
        | "PAID_LINE_ITEM_QUANTITY_CHANGE_FORBIDDEN"
        | "PAID_LINE_ITEM_QUANTITY_DECREASE_FORBIDDEN"
        | "PAID_LINE_ITEM_REMOVAL_FORBIDDEN"
        | "PAID_LINE_ITEM_TAX_CHANGE_FORBIDDEN"
        | "PAUSE_NOT_ALLOWED"
        | "PAYMENT_ACTION_WINDOW_TOO_SHORT"
        | "PAYMENT_ALREADY_SETTLED"
        | "PAYMENT_AMOUNT_CHANGED"
        | "PAYMENT_ATTEMPT_ACTIVE"
        | "PAYMENT_ATTEMPT_MISMATCH"
        | "PAYMENT_ATTEMPT_NOT_CANCELABLE"
        | "PAYMENT_ATTEMPT_NOT_RESUMABLE"
        | "PAYMENT_ATTEMPT_REQUIRES_CAPTURE"
        | "PAYMENT_CONFIRMATION_STATE_CHANGED"
        | "PAYMENT_CONFIRM_IN_PROGRESS"
        | "PAYMENT_INTENT_DISPUTED"
        | "PAYMENT_INTENT_LIMIT_REACHED"
        | "PAYMENT_IN_PROGRESS"
        | "PAYMENT_LEG_SELECTION_REQUIRED"
        | "PAYMENT_LINK_CHANGED_RETRY"
        | "PAYMENT_LINK_FULFILLMENT_UNAVAILABLE"
        | "PAYMENT_LINK_INACTIVE"
        | "PAYMENT_LINK_MAX_COMPLETIONS_REACHED"
        | "PAYMENT_LINK_RESOLUTION_CONTEXT_REFRESH_REQUIRED"
        | "PAYMENT_LINK_RESOLUTION_REPLAY_UNAVAILABLE"
        | "PAYMENT_LINK_SALES_ENDED"
        | "PAYMENT_METHOD_CUSTOMER_MISMATCH"
        | "PAYMENT_METHOD_DOMAIN_OPERATION_IN_PROGRESS"
        | "PAYMENT_METHOD_HAS_ACTIVE_SUBSCRIPTIONS"
        | "PAYMENT_METHOD_NOT_ACTIVE"
        | "PAYMENT_METHOD_NOT_READY"
        | "PAYMENT_METHOD_ON_SESSION_ONLY"
        | "PAYMENT_METHOD_REQUIRED"
        | "PAYMENT_METHOD_SAVE_EMAIL_UNAVAILABLE"
        | "PAYMENT_METHOD_SAVE_NOT_PENDING"
        | "PAYMENT_METHOD_SAVE_NOT_READY"
        | "PAYMENT_NOT_REQUIRED"
        | "PAYMENT_OPERATION_IN_PROGRESS"
        | "PAYMENT_OPTION_LIMIT_EXCEEDED"
        | "PAYMENT_OPTION_NOT_READY"
        | "PAYMENT_OPTION_UNAVAILABLE"
        | "PAYMENT_PROCESSING_NOT_ENABLED"
        | "PAYMENT_PROCESSING_UNAVAILABLE"
        | "PAYMENT_PROCESSOR_REJECTED"
        | "PAYMENT_PROCESSOR_UNAVAILABLE"
        | "PAYMENT_REVIEW_OPEN"
        | "PAYMENT_SOURCE_UNAVAILABLE"
        | "PAYOUTS_NOT_ENABLED"
        | "PAYOUT_DELAY_PROVIDER_CONTROLLED"
        | "PAYOUT_DESTINATIONS_MANAGEMENT_UNAVAILABLE"
        | "PAYOUT_FEE_NOT_DETERMINABLE"
        | "PAYOUT_NOT_CANCELABLE"
        | "PAYOUT_SETTINGS_MANAGED_EXTERNALLY"
        | "PAYOUT_SETTINGS_MANAGEMENT_UNAVAILABLE"
        | "PAYOUT_STATUS_NOT_CANCELABLE"
        | "PLAN_NOT_ACTIVE"
        | "PROCESSING_FEE_PRICING_NOT_AUTHORIZED"
        | "PROCESSOR_NOT_CONFIGURED"
        | "PROFILE_UPDATE_STATUS_UNKNOWN"
        | "PROMOTION_CODES_DISABLED"
        | "PROMOTION_DECLINED"
        | "PROMOTION_HAS_ACTIVE_SUBSCRIPTION_OFFERS"
        | "PROMOTION_NOT_REDEEMABLE"
        | "PROMOTION_SHAPE_IMMUTABLE"
        | "PROVIDER_ACCOUNT_CLEANUP_REQUIRED"
        | "QUANTITY_CHANGE_NOT_ALLOWED"
        | "QUANTITY_NOT_ADJUSTABLE"
        | "RATE_LIMIT_EXCEEDED"
        | "REFUND_ADJUSTMENT_PAYMENT_INTENT_NOT_REFUNDABLE"
        | "REFUND_ADJUSTMENT_REFUND_EXCEEDS_PAYMENT_INTENT_REFUNDABLE"
        | "REFUND_ADJUSTMENT_REFUND_EXCEEDS_REMAINING"
        | "REFUND_SUBMISSION_DEADLINE_EXPIRED"
        | "REFUND_TENDER_CAPACITY_CONFLICT"
        | "REPORT_DOWNLOAD_EXPIRED"
        | "REQUEST_BLOCKED"
        | "REQUEST_BODY_TOO_LARGE"
        | "REQUEST_CANCELED"
        | "REQUEST_TIMEOUT"
        | "REQUIRED"
        | "RESOURCE_IN_USE"
        | "RESOURCE_NOT_FOUND"
        | "RETURN_CHECKOUT_REQUIRED"
        | "RETURN_COMPLETION_BLOCKED"
        | "RETURN_DISPOSITION_QUANTITY_EXCEEDED"
        | "RETURN_FULFILLMENT_ALLOCATION_AMBIGUOUS"
        | "RETURN_INSPECTION_QUANTITY_EXCEEDED"
        | "RETURN_LINE_CANCELLATION_CONFLICT"
        | "RETURN_POLICY_CONFLICT"
        | "RETURN_RECEIPT_QUANTITY_EXCEEDED"
        | "RETURN_SELF_SERVICE_NOT_ALLOWED"
        | "RETURN_SHIPMENT_QUANTITY_EXCEEDS_AVAILABLE"
        | "RETURN_VALUE_EXCEEDED"
        | "RETURN_VERSION_CONFLICT"
        | "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW"
        | "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION"
        | "RISK_RULE_LIMIT_REACHED"
        | "ROUTE_NOT_FOUND"
        | "RULE_RESERVED"
        | "SANDBOX_ARCHIVED"
        | "SANDBOX_INACTIVE"
        | "SAVE_PAYMENT_METHOD_CODE_LIMIT_REACHED"
        | "SAVE_PAYMENT_METHOD_NOT_OFFERED"
        | "SAVE_PAYMENT_METHOD_VERIFICATION_REQUIRED"
        | "SENSITIVE_IDEMPOTENCY_RESULT_INVALID"
        | "SERVICE_UNAVAILABLE"
        | "SETUP_SOURCE_NON_ZERO_ORDER"
        | "SHIPMENT_CHANGED"
        | "SHIPMENT_PACKAGE_ITEM_QUANTITY_EXCEEDS_FULFILLMENT"
        | "SHIPMENT_PACKAGE_NOT_VOIDABLE"
        | "SKIP_LIMIT_REACHED"
        | "SKIP_NOT_ALLOWED"
        | "STANDARD_PAYOUTS_UNAVAILABLE"
        | "STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE"
        | "SUBSCRIPTION_DELIVERY_LINES_NOT_COMBINABLE"
        | "SUBSCRIPTION_DELIVERY_MIGRATION_IN_PROGRESS"
        | "SUBSCRIPTION_DELIVERY_MIGRATION_TARGET_UNAVAILABLE"
        | "SUBSCRIPTION_DELIVERY_PROFILE_ACTION_REQUIRED"
        | "SUBSCRIPTION_DELIVERY_PROFILE_MISSING"
        | "SUBSCRIPTION_DELIVERY_UNAVAILABLE"
        | "SUBSCRIPTION_NEXT_BILLING_AT_BEFORE_PERIOD_START"
        | "SUBSCRIPTION_NEXT_BILLING_AT_TOO_FAR"
        | "SUBSCRIPTION_OFFER_ARCHIVED"
        | "SUBSCRIPTION_OFFER_NOT_ACTIVE"
        | "SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE"
        | "SUBSCRIPTION_OFFER_TARGET_CONFLICT"
        | "SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS"
        | "SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED"
        | "SUBSCRIPTION_START_OVERRIDE_NOT_ALLOWED"
        | "SWAP_NOT_ALLOWED"
        | "TAX_BREAKDOWN_REFUND_EXCEEDS_REMAINING"
        | "TAX_CATEGORY_REQUIRED"
        | "TEST_PROCESSOR_NOT_CONFIGURED"
        | "TICKET_PREFIX_LOCKED"
        | "TIP_ALLOCATION_CAPACITY_EXCEEDED"
        | "UNKNOWN_FIELD"
        | "UNSUPPORTED_CONTENT_TYPE"
        | "UNSUPPORTED_PROCESSOR"
        | "VARIANT_NOT_SELLABLE"
        | "VERSION_CONFLICT"
        | "WEBHOOK_DELIVERY_IN_FLIGHT"
        | "WEBHOOK_ENDPOINT_NOT_ACTIVE"
        | "WEBHOOK_ENDPOINT_NOT_SUBSCRIBED"
        | "WEBHOOK_EVENT_PAYLOAD_EXPIRED"
        | "WORKLOAD_IDENTITY_LIMIT_REACHED"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. On ORDER_HAS_COLLECTED_MONEY, collected money still
     * refundable through POST /v1/refunds with order_id, after pending refunds. Refund it before
     * closing or send collected_money_behavior: keep. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "collected_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Which inventory count check failed for this line. Sent on
     * VERSION_CONFLICT for physical observations and INVENTORY_SOURCE_SEQUENCE_CHANGED. Value
     * enum: "physical_version", "source_observation_sequence".
     */
    "conflict_type"?: "physical_version" | "source_observation_sequence" | (string & {});
    /**
     * Shape $ (Value): Array of string. Request field paths that conflict with each other or with
     * the rest of the request. Sent on INVALID_REQUEST with detail NOT_ALLOWED for conflicting
     * payment inputs, and with detail INVALID_VALUE when entries in one product create repeat an
     * option name, identifier, or selected option combination. Shape $[] (Value): string.
     */
    "conflicting_fields"?: Array<string>;
    /**
     * Shape $ (Value): string. Current API version pin on VERSION_CONFLICT when
     * expected_api_version is stale.
     */
    "current_api_version"?: string;
    /**
     * Shape $ (Value): string. On CHECKOUT_SESSION_CURRENT_CHANGED, the ID of the checkout session
     * that is current. The request named an earlier one.
     */
    "current_checkout_session_id"?: string;
    /**
     * Shape $ (Value): string or null. Current effective delivery selection ID on VERSION_CONFLICT
     * when expected_delivery_selection_id is stale. Present as null when no delivery selection is
     * current.
     */
    "current_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): string. Current payout schedule interval on
     * STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE. Change the payout schedule to manual before
     * creating a standard payout. Value enum: "daily", "weekly", "monthly".
     */
    "current_interval"?: "daily" | "weekly" | "monthly" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Current money amount counted toward the threshold, when
     * the error is threshold-based. On ORDER_CHANGED_REFRESH_REQUIRED and
     * PAYMENT_LEG_SELECTION_REQUIRED, the order's current outstanding balance. On
     * ORDER_TOTAL_BELOW_NET_COLLECTED, what the change would leave: the order total, or the total
     * without its unpaid tip when items and charges would fall below the money collected for them.
     * On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the outstanding balance the allocation would
     * leave. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "current_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Current physical version of the inventory level. This is a
     * physical-value assertion, not the resource version in current_version. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "current_physical_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ErrorResourceReference} or {@link Fulfillment} or {@link Shipment}
     * or {@link Package} or {@link CustomDomain}. The existing resource reference or custom domain
     * on ALREADY_EXISTS, or the current fulfillment, shipment, or package when a conditional write
     * conflicts with resource state. Shape $.oneOf[1] (Value): {@link ErrorResourceReference}. A
     * reference to a public resource named in an error, with its type, ID, and current status when
     * available. Shape $.oneOf[2] (Value): {@link Fulfillment}. Work required to deliver an
     * order's items. Shape $.oneOf[3] (Value): {@link Shipment}. A shipment carrying fulfilled
     * order items. Shape $.oneOf[4] (Value): {@link Package}. A package within a shipment. Shape
     * $.oneOf[5] (Value): {@link CustomDomain}. A merchant hostname for hosted checkout or
     * customer account pages.
     */
    "current_resource"?: ((ErrorResourceReference)
        | (Fulfillment)
        | (Shipment)
        | (Package)
        | (CustomDomain)
        | (Record<string, unknown>));
    /**
     * Shape $ (Value): string. Current effective delivery selection ID returned with a selection
     * concurrency conflict.
     */
    "current_selection_id"?: string;
    /**
     * Shape $ (Value): integer string. Latest accepted absolute source sequence for this item and
     * Location. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 0.
     */
    "current_source_observation_sequence"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Current lifecycle status of the resource when the requested
     * mutation is not allowed.
     */
    "current_status"?: string;
    /**
     * Shape $ (Value): integer string. Current version of the resource when a write that depends
     * on its version or status is rejected. Sent on VERSION_CONFLICT and other stale-basis
     * conflicts such as ORDER_CHANGED_REFRESH_REQUIRED, and on status conflicts such as
     * ACTION_NOT_ALLOWED. On ORDER_CHANGED_REFRESH_REQUIRED, send the order version as
     * expected_version. Read the resource again before you retry. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "current_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Delivery method this failure concerns. On
     * SUBSCRIPTION_DELIVERY_UNAVAILABLE, the method that cannot currently serve the subscription.
     */
    "delivery_method_id"?: string;
    /**
     * Shape $ (Value): string. Key of the inventory demand this failure concerns. Sent on
     * INVENTORY_INSUFFICIENT, and on INVENTORY_LOCATION_INELIGIBLE when one demand cannot use the
     * Location.
     */
    "demand_key"?: string;
    /**
     * Shape $ (Value): string. On ACTIVE_DEMO_SESSION_EXISTS and
     * DEMO_SESSION_SECRET_REPLAY_EXPIRED, the ID of this client's current demo session. Send it to
     * POST /v1/demo-sessions/reset to replace that session.
     */
    "demo_session_id"?: string;
    /**
     * Shape $ (Value): string. Stable dependency category blocking a Location lifecycle
     * transition. Value enum: "devices", "fulfillment", "inventory_allocation_policies",
     * "inventory_claims", "inventory_counts", "inventory_levels", "inventory_transfers",
     * "settings".
     */
    "dependency_type"?: "devices"
        | "fulfillment"
        | "inventory_allocation_policies"
        | "inventory_claims"
        | "inventory_counts"
        | "inventory_levels"
        | "inventory_transfers"
        | "settings"
        | (string & {});
    /**
     * Shape $ (Value): string. On INVENTORY_LOCATION_INELIGIBLE, why the Location in location_id
     * cannot supply the demand. Value enum: "location_not_active",
     * "inventory_allocation_inactive", "forced_location_mismatch", "fulfillment_incompatible",
     * "split_prohibited", "insufficient_quantity".
     */
    "eligibility_reason"?: "location_not_active"
        | "inventory_allocation_inactive"
        | "forced_location_mismatch"
        | "fulfillment_incompatible"
        | "split_prohibited"
        | "insufficient_quantity"
        | (string & {});
    /**
     * Shape $ (Value): string. ID of the open checkout session that already owns the order. Sent
     * on CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED, ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE, and
     * ORDER_CUSTOMER_CHECKOUT_ACTIVE. Recover the session from this field, not from message.
     */
    "existing_checkout_session_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. On ORDER_CHANGED_REFRESH_REQUIRED when you resume a
     * payment attempt, the outstanding balance the attempt started with.
     * expected_outstanding_money must match it. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_attempt_outstanding_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Delivery pricing failure category on
     * SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the rate cannot be calculated. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "callback_transport_failure",
     * "callback_circuit_open", "callback_result_invalid", "callback_unavailable",
     * "pricing_failure", "schedule_failure", "option_lifetime_too_short", "geography_failure",
     * "routing_failure", "invalid_configuration", "invalid_buyer_input",
     * "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Shape $ (Value): string. Decline reason for a failed payment, from the same vocabulary as
     * the payment's last_payment_error.code. Unrecognized provider reasons are payment_failed.
     * Value enum: "card_declined", "insufficient_funds", "bank_account_closed",
     * "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted",
     * "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card",
     * "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent",
     * "processing_error", "payment_method_unavailable", "payment_method_declined",
     * "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable",
     * "payment_failed".
     */
    "failure_code"?: "card_declined"
        | "insufficient_funds"
        | "bank_account_closed"
        | "bank_account_not_found"
        | "bank_debit_not_authorized"
        | "bank_account_restricted"
        | "bank_debit_limit_exceeded"
        | "authentication_required"
        | "payment_blocked"
        | "expired_card"
        | "incorrect_cvc"
        | "lost_card"
        | "stolen_card"
        | "do_not_honor"
        | "fraudulent"
        | "processing_error"
        | "payment_method_unavailable"
        | "payment_method_declined"
        | "payment_not_completed"
        | "payment_action_expired"
        | "payment_method_temporarily_unavailable"
        | "payment_failed"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Additional money amount needed to satisfy the
     * threshold, when the error is threshold-based. On ORDER_TOTAL_BELOW_NET_COLLECTED, how far
     * current_money falls below required_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "gap_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Merchant-provided buyer-facing text on PAYMENT_LINK_INACTIVE.
     * Present only when the merchant set an inactive message.
     */
    "inactive_message"?: string;
    /**
     * Shape $ (Value): string. Inventory count line this conflict concerns. Sent on
     * VERSION_CONFLICT for physical observations and INVENTORY_SOURCE_SEQUENCE_CHANGED.
     */
    "inventory_count_line_id"?: string;
    /**
     * Shape $ (Value): string. Inventory item this failure concerns. Sent on
     * INVENTORY_INSUFFICIENT, INVENTORY_LOCATION_INELIGIBLE, VERSION_CONFLICT for physical
     * observations, and INVENTORY_SOURCE_SEQUENCE_CHANGED.
     */
    "inventory_item_id"?: string;
    /**
     * Shape $ (Value): string. ID of the invoice payment attempt this error concerns. On
     * INVOICE_PAYMENT_ATTEMPT_ACTIVE and INVOICE_PAYMENT_PROCESSING, the invoice's open payment
     * attempt.
     */
    "invoice_payment_attempt_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether the payment attempt identified by order_payment_attempt_id
     * or invoice_payment_attempt_id can be resumed. On order payment attempt errors, if false,
     * read payment_attempt_status before starting another payment. Invoice payment attempt errors
     * always send false.
     */
    "is_resumable"?: boolean;
    /**
     * Shape $ (Value): integer string. The limit that was reached. On RISK_RULE_LIMIT_REACHED, the
     * most enabled risk rules in the environment. On PAYMENT_INTENT_LIMIT_REACHED, the most
     * payment intents an order can have over its lifetime. On
     * SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED, the most payment retries a subscription allows in
     * one billing period. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "limit"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Key of the line item whose modifiers changed: the payment link line
     * item key when the checkout came from a payment link, otherwise the order line item ID.
     */
    "line_item_key"?: string;
    /**
     * Shape $ (Value): string. Location this failure concerns. Sent on
     * INVENTORY_LOCATION_INELIGIBLE, VERSION_CONFLICT for physical observations,
     * INVENTORY_SOURCE_SEQUENCE_CHANGED, PICKUP_LOCATION_INACTIVE,
     * PICKUP_LOCATION_INVENTORY_UNAVAILABLE, PICKUP_LOCATION_GEOGRAPHY_UNAVAILABLE, and
     * PICKUP_LOCATION_DEPENDENCY_FAILURE.
     */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. On INVENTORY_LOCATION_INELIGIBLE, the routing outcome for the
     * Location in location_id: for the demand in demand_key when present, otherwise for every
     * demand. Value enum: "ineligible".
     */
    "location_outcome"?: "ineligible" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Maximum money amount accepted by the failed validation,
     * calculated from the current resource state. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "maximum_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Human-readable explanation of this failure for your logs. The
     * wording can change, so branch on code.
     */
    "message": string;
    /**
     * Shape $ (Value): Array of string. Unsatisfied entries from scope_requirement after
     * write-implies-read evaluation. Example: ["accounts.api_keys.write"]. Shape $[] (Value):
     * string.
     */
    "missing_scopes"?: Array<string>;
    /**
     * Shape $ (Value): string. Existing order charge this failure concerns. Set when the order
     * charge is already on the order; when the request body does not contain it, param is omitted
     * and details name the affected fields relative to this order charge. pattern:
     * ^och_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_charge_id"?: string;
    /** Shape $ (Value): string. Renewal order whose payment attempt failed. */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Existing order line item this failure concerns. Set when the order
     * line item is already on the order; when the request body does not contain it, param is
     * omitted and details name the affected fields relative to this order line item. pattern:
     * ^li_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_id"?: string;
    /**
     * Shape $ (Value): string. ID of the order payment attempt this error concerns. On
     * ORDER_PAYMENT_ATTEMPT_ACTIVE, the order's active payment attempt. On
     * PAYMENT_ATTEMPT_NOT_RESUMABLE, the order payment attempt that can no longer be resumed. On
     * INVALID_REQUEST with param order_payment_attempt_id, the order payment attempt that owns the
     * payment intent.
     */
    "order_payment_attempt_id"?: string;
    /**
     * Shape $ (Value): string. Public JSON request field path associated with this failure. Always
     * present on INVALID_REQUEST details; body for a whole-body failure, or the header name for a
     * header.
     */
    "param"?: string;
    /**
     * Shape $ (Value): string. Status of the payment attempt identified by
     * order_payment_attempt_id or invoice_payment_attempt_id when the error was returned. Value
     * enum: "open", "requires_action", "processing", "requires_capture", "requires_retry",
     * "finalizing", "partially_succeeded", "succeeded", "failed", "canceled", "expired".
     */
    "payment_attempt_status"?: "open"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "requires_retry"
        | "finalizing"
        | "partially_succeeded"
        | "succeeded"
        | "failed"
        | "canceled"
        | "expired"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. Payment intent IDs this error concerns. On
     * ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE and CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, the order's unpaid
     * payment intents, which you can cancel to collect the order through hosted checkout. On
     * INVALID_REQUEST with param payment_intent_id, the selected payment intent that this order
     * does not own. Shape $[] (Value): string.
     */
    "payment_intent_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. On ALREADY_EXISTS, the ID of the payment method domain already
     * registered for this domain_name. Use it instead of registering the domain again.
     */
    "payment_method_domain_id"?: string;
    /**
     * Shape $ (Value): string. Flint payment option associated with this error, when the error is
     * about a specific requested or selected payment option. Value enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit".
     */
    "payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Shape $ (Value): string. RFC 3339 timestamp in UTC when the new account payout terms end on
     * NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE. Sent at second precision. Choose an allowed schedule or
     * delay, or make the change after this time. Format: date-time.
     */
    "payout_terms_expires_at"?: string;
    /**
     * Shape $ (Value): string. RFC 3339 timestamp when the previous signing key expires on
     * DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE. Retry after this time, or revoke the
     * current key before rotating if it leaked. Format: date-time.
     */
    "previous_key_expires_at"?: string;
    /** Shape $ (Value): string. Product associated with the error. */
    "product_id"?: string;
    /**
     * Shape $ (Value): {@link QuotaDetails}. Structured resource quota state when the error is
     * caused by quota exhaustion. Storage usage and limits for a resource, returned in the error
     * details when an image quota is exhausted.
     */
    "quota"?: QuotaDetails;
    /**
     * Shape $ (Value): string. Stable Flint reason associated with this error. When code is
     * ACTION_NOT_ALLOWED, one of: already_applied, archived, authorization_expired,
     * bank_return_not_contestable, cancellation_scheduled, configuration_required,
     * credit_exceeds_charge, credit_note_tax_reconciliation_required,
     * customer_account_mode_conflict, delivery_hold, delivery_requirement_changes,
     * derived_from_packages, destination_not_served, dispute_payment_unavailable,
     * existing_order_checkout, external_billing_schedule, field_locked,
     * image_ingestion_restart_required, in_progress, initial_payment_pending, inventory_wait,
     * invoice_finalized, managed_by_owner, managed_externally, merchant_hosted_customer_accounts,
     * merchant_managed_receipts, method_unavailable, not_itemized, not_offered, not_paused,
     * offer_subscription, on_hold, order_owned, payment_collected, payment_disputed,
     * payment_required, payout_delay, payout_frequency, period_end_unavailable,
     * reconciliation_required, refund_created, refund_unavailable, return_checkout,
     * return_tax_mismatch, status_not_reached, store_credit_unavailable,
     * subscription_terms_locked, terminal_status, test_event, trial_in_progress,
     * unsupported_state, verification_required. When code is ALREADY_EXISTS, one of:
     * hardware_fingerprint_already_exists. When code is CHECKOUT_SESSION_MODIFIERS_READ_ONLY, one
     * of: existing_order_checkout, invoice_finalized, subscription_terms_locked. When code is
     * CONCURRENT_MODIFICATION, one of: credit_note_creditable_value_changed,
     * credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of:
     * calculation_expired, caller_rates_required, destination_changed, option_expired,
     * quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired,
     * window_expired. When code is EXTERNAL_SERVICE_ERROR, one of:
     * image_ingestion_restart_required, rate_unavailable. When code is FORBIDDEN, one of:
     * checkout_launch_token_restricted, checkout_recovery_attempt_mismatch,
     * checkout_recovery_restricted, checkout_session_order_mismatch,
     * checkout_session_payment_required, demo_session_route_not_allowed, direct_owner_required,
     * environment_mismatch, expansion_not_permitted, live_mode_required, merchant_access_required,
     * merchant_credential_required, merchant_role_insufficient, not_checkout_session,
     * not_permitted, oauth_context_mismatch, organization_live_mode_required,
     * organization_membership_required, organization_role_insufficient, owner_workflow_required,
     * partner_app_management_requires_live_key, request_blocked, role_not_assignable,
     * sandbox_management_requires_live_key, sandbox_not_accessible, sandbox_selection_forbidden,
     * self_role_edit_forbidden. When code is FULFILLMENT_METHOD_UNAVAILABLE, one of: active,
     * archived, inactive, invalid_configuration, not_found, not_publishable, revision_unavailable,
     * unsupported_evaluation_schema. When code is GIFT_CARD_CHALLENGE_REQUIRED, one of:
     * page_origin_required, proof_rejected, proof_required. When code is
     * GIFT_CARD_FUNDING_LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily,
     * merchant_adjustments_daily, merchant_imports_daily. When code is IMAGE_INGESTION_EXPIRED,
     * one of: image_ingestion_restart_required. When code is IMAGE_INGESTION_IN_PROGRESS, one of:
     * image_ingestion_restart_required. When code is IMAGE_INGESTION_RESTART_REQUIRED, one of:
     * image_ingestion_restart_required. When code is IMAGE_PROCESSING_CAPACITY_EXCEEDED, one of:
     * image_ingestion_restart_required. When code is IMAGE_PROCESSING_FAILED, one of:
     * image_ingestion_restart_required. When code is IMAGE_PROCESSING_TIMEOUT, one of:
     * image_ingestion_restart_required. When code is IMAGE_SOURCE_TIMEOUT, one of:
     * image_ingestion_restart_required. When code is IMAGE_SOURCE_UNAVAILABLE, one of:
     * image_ingestion_restart_required. When code is IMAGE_STORAGE_QUOTA_EXCEEDED, one of:
     * image_ingestion_restart_required. When code is INTERNAL_ERROR, one of:
     * image_ingestion_restart_required, repair_required. When code is INVALID_CREDENTIAL, one of:
     * expired, malformed, mode_mismatch, revoked, session_ended, unknown, wrong_credential_type.
     * When code is INVALID_REQUEST, one of: image_ingestion_restart_required. When code is
     * INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is
     * LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily,
     * merchant_imports_daily. When code is LIMIT_REACHED, one of: checkout_tax_calculations,
     * consecutive_skips, daily_gift_card_purchases, delivery_selection_replacements,
     * enabled_risk_rules, external_paid_orders, image_storage, monthly_tax_calculations,
     * payment_intents_per_order, payment_link_completions, payment_retries_per_period,
     * receipt_recipients, saved_card_codes, verification_attempts, verification_codes,
     * workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable,
     * account_setup_repair_required, account_setup_unavailable, billing_suspended,
     * capability_blocked, capability_not_requested, capability_pending, capability_unavailable,
     * default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled, onboarding_required,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * pricing_not_authorized, processing_not_enabled, processing_restricted,
     * processor_not_configured, requirements_due, tax_category_required, under_review. When code
     * is MONEY_MOVEMENT_OPERATION_BLOCKED, one of: capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due. When code is ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED, one of:
     * method_unavailable, shipping_changed, tax_changed. When code is ORDER_TAX_NOT_READY, one of:
     * return_tax_mismatch. When code is PAYMENT_INTENT_DISPUTED, one of: payment_disputed. When
     * code is PAYMENT_OPTION_NOT_READY, one of: amount_out_of_range,
     * bounded_inventory_guarantee_not_supported, capability_blocked, capability_pending,
     * checkout_order_ownership_required, country_not_supported, country_required,
     * currency_not_supported, disabled_by_merchant_settings, disabled_by_platform_policy,
     * limited_benefit_capacity_not_supported, manual_capture_not_supported,
     * merchant_account_action_required, merchant_payments_disabled, not_supported,
     * off_session_not_supported, payment_account_context_invalid,
     * payment_account_setup_incomplete, payment_option_access_not_provisioned,
     * payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan,
     * recurring_ach_not_supported, recurring_not_supported, redirects_required, requirements_due,
     * source_delayed_settlement_not_supported, source_not_supported, split_payment_not_supported,
     * surface_not_supported, unsupported_use. When code is PAYMENT_OPTION_UNAVAILABLE, one of:
     * action_window_too_short, amount_out_of_range, capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is
     * PAYMENT_PROCESSING_UNAVAILABLE, one of: capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due. When code is PROMOTION_DECLINED, one of: already_applied,
     * automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled,
     * currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met,
     * no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded,
     * superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is
     * PROMOTION_NOT_REDEEMABLE, one of: already_applied, automatic_disabled, buy_item_missing,
     * code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired,
     * inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable,
     * not_eligible, not_yet_started, superseded, superseded_by_better_offer,
     * superseded_by_higher_priority, unknown_type. When code is REQUEST_TIMEOUT, one of:
     * image_ingestion_restart_required. When code is RESOURCE_IN_USE, one of:
     * selected_by_active_variants. When code is RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW, one
     * of: allow, block, require_3ds, review. When code is
     * RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION, one of: allow, block, require_3ds, review.
     * When code is SAVE_PAYMENT_METHOD_NOT_OFFERED, one of: card_unavailable,
     * customer_unavailable, ineligible_origin, merchant_hosted_customer_accounts,
     * not_checkout_session, partial_payment, return_checkout, session_not_open, setting_off,
     * subscription_checkout. When code is SERVICE_UNAVAILABLE, one of:
     * image_ingestion_restart_required, outcome_unknown, repair_required. When code is
     * SUBSCRIPTION_DELIVERY_UNAVAILABLE, one of: configuration_required, destination_not_served,
     * method_unavailable, rate_unavailable. When code is SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE,
     * one of: already_applied, archived, automatic_disabled, buy_item_missing, code_invalid,
     * code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive,
     * max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable,
     * not_eligible, not_yet_started, superseded, superseded_by_better_offer,
     * superseded_by_higher_priority, unknown_type. Additional reasons may be added. Value enum:
     * "account_sessions_unavailable", "account_setup_repair_required",
     * "account_setup_unavailable", "action_window_too_short", "active", "allow",
     * "already_applied", "amount_out_of_range", "archived", "authorization_expired",
     * "automatic_disabled", "bank_return_not_contestable", "billing_suspended", "block",
     * "bounded_inventory_guarantee_not_supported", "buy_item_missing", "buyer_daily",
     * "calculation_expired", "caller_rates_required", "cancellation_scheduled",
     * "capability_blocked", "capability_not_requested", "capability_pending",
     * "capability_unavailable", "card_balance", "card_daily", "card_unavailable",
     * "checkout_launch_token_restricted", "checkout_order_ownership_required",
     * "checkout_recovery_attempt_mismatch", "checkout_recovery_restricted",
     * "checkout_session_order_mismatch", "checkout_session_payment_required",
     * "checkout_tax_calculations", "code_invalid", "code_required", "codes_disabled",
     * "configuration_required", "consecutive_skips", "country_not_supported", "country_required",
     * "credit_exceeds_charge", "credit_note_creditable_value_changed",
     * "credit_note_refund_retry_exhausted", "credit_note_tax_reconciliation_required",
     * "currency_mismatch", "currency_not_supported", "customer_account_mode_conflict",
     * "customer_unavailable", "daily_gift_card_purchases", "default_environment_required",
     * "delivery_hold", "delivery_requirement_changes", "delivery_selection_replacements",
     * "demo_session_route_not_allowed", "derived_from_packages", "destination_changed",
     * "destination_not_served", "direct_owner_required", "disabled_by_merchant_settings",
     * "disabled_by_platform_policy", "dispute_payment_unavailable", "enabled_risk_rules",
     * "environment_mismatch", "exhausted", "existing_order_checkout", "expansion_not_permitted",
     * "expired", "external_billing_schedule", "external_paid_orders", "field_locked",
     * "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage",
     * "in_progress", "inactive", "ineligible_origin", "initial_payment_pending",
     * "invalid_configuration", "inventory_wait", "invoice_finalized",
     * "limited_benefit_capacity_not_supported", "live_mode_required", "location_ineligible",
     * "location_limit", "malformed", "managed_by_owner", "managed_externally",
     * "manual_capture_not_supported", "max_promotions_reached", "merchant_access_required",
     * "merchant_account_action_required", "merchant_adjustments_daily",
     * "merchant_credential_required", "merchant_hosted_customer_accounts",
     * "merchant_imports_daily", "merchant_managed_receipts", "merchant_payments_disabled",
     * "merchant_role_insufficient", "method_unavailable", "minimum_not_met", "mode_mismatch",
     * "monthly_tax_calculations", "no_discountable_balance", "not_checkout_session",
     * "not_combinable", "not_eligible", "not_found", "not_itemized", "not_offered", "not_paused",
     * "not_permitted", "not_publishable", "not_supported", "not_yet_started",
     * "oauth_context_mismatch", "off_session_not_supported", "offer_subscription", "on_hold",
     * "onboarding_required", "option_expired", "order_owned", "organization_live_mode_required",
     * "organization_membership_required", "organization_role_insufficient", "outcome_unknown",
     * "owner_workflow_required", "page_origin_required", "partial_payment",
     * "partner_app_management_requires_live_key", "payment_account_context_invalid",
     * "payment_account_setup_incomplete", "payment_collected", "payment_disputed",
     * "payment_intents_per_order", "payment_link_completions",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_available", "payment_option_not_in_plan", "payment_required",
     * "payment_retries_per_period", "payout_delay", "payout_frequency", "period_end_unavailable",
     * "platform_funding_unavailable", "pricing_not_authorized", "processing_not_enabled",
     * "processing_restricted", "processor_not_configured", "proof_rejected", "proof_required",
     * "quote_expired", "quote_revoked", "quote_stale", "rate_unavailable", "receipt_recipients",
     * "reconciliation_required", "recurring_ach_not_supported", "recurring_not_supported",
     * "redirects_required", "refund_created", "refund_unavailable", "repair_required",
     * "request_blocked", "require_3ds", "requirements_due", "return_checkout",
     * "return_tax_mismatch", "review", "revision_unavailable", "revoked",
     * "risk_action_unsupported", "role_not_assignable", "sandbox_management_requires_live_key",
     * "sandbox_not_accessible", "sandbox_selection_forbidden", "saved_card_codes",
     * "selected_by_active_variants", "selection_changed", "selection_expired",
     * "self_role_edit_forbidden", "session_ended", "session_not_open", "setting_off",
     * "shipping_changed", "source_delayed_settlement_not_supported", "source_not_supported",
     * "split_payment_not_supported", "status_not_reached", "store_credit_unavailable",
     * "subscription_checkout", "subscription_terms_locked", "superseded",
     * "superseded_by_better_offer", "superseded_by_higher_priority", "surface_not_supported",
     * "tax_category_required", "tax_changed", "terminal_status", "test_event",
     * "transaction_purpose_unresolved", "trial_in_progress", "under_review", "unknown",
     * "unknown_type", "unsupported_evaluation_schema", "unsupported_state", "unsupported_use",
     * "verification_attempts", "verification_codes", "verification_required", "window_expired",
     * "workload_identities", "wrong_credential_type".
     */
    "reason"?: "account_sessions_unavailable"
        | "account_setup_repair_required"
        | "account_setup_unavailable"
        | "action_window_too_short"
        | "active"
        | "allow"
        | "already_applied"
        | "amount_out_of_range"
        | "archived"
        | "authorization_expired"
        | "automatic_disabled"
        | "bank_return_not_contestable"
        | "billing_suspended"
        | "block"
        | "bounded_inventory_guarantee_not_supported"
        | "buy_item_missing"
        | "buyer_daily"
        | "calculation_expired"
        | "caller_rates_required"
        | "cancellation_scheduled"
        | "capability_blocked"
        | "capability_not_requested"
        | "capability_pending"
        | "capability_unavailable"
        | "card_balance"
        | "card_daily"
        | "card_unavailable"
        | "checkout_launch_token_restricted"
        | "checkout_order_ownership_required"
        | "checkout_recovery_attempt_mismatch"
        | "checkout_recovery_restricted"
        | "checkout_session_order_mismatch"
        | "checkout_session_payment_required"
        | "checkout_tax_calculations"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "configuration_required"
        | "consecutive_skips"
        | "country_not_supported"
        | "country_required"
        | "credit_exceeds_charge"
        | "credit_note_creditable_value_changed"
        | "credit_note_refund_retry_exhausted"
        | "credit_note_tax_reconciliation_required"
        | "currency_mismatch"
        | "currency_not_supported"
        | "customer_account_mode_conflict"
        | "customer_unavailable"
        | "daily_gift_card_purchases"
        | "default_environment_required"
        | "delivery_hold"
        | "delivery_requirement_changes"
        | "delivery_selection_replacements"
        | "demo_session_route_not_allowed"
        | "derived_from_packages"
        | "destination_changed"
        | "destination_not_served"
        | "direct_owner_required"
        | "disabled_by_merchant_settings"
        | "disabled_by_platform_policy"
        | "dispute_payment_unavailable"
        | "enabled_risk_rules"
        | "environment_mismatch"
        | "exhausted"
        | "existing_order_checkout"
        | "expansion_not_permitted"
        | "expired"
        | "external_billing_schedule"
        | "external_paid_orders"
        | "field_locked"
        | "hardware_fingerprint_already_exists"
        | "image_ingestion_restart_required"
        | "image_storage"
        | "in_progress"
        | "inactive"
        | "ineligible_origin"
        | "initial_payment_pending"
        | "invalid_configuration"
        | "inventory_wait"
        | "invoice_finalized"
        | "limited_benefit_capacity_not_supported"
        | "live_mode_required"
        | "location_ineligible"
        | "location_limit"
        | "malformed"
        | "managed_by_owner"
        | "managed_externally"
        | "manual_capture_not_supported"
        | "max_promotions_reached"
        | "merchant_access_required"
        | "merchant_account_action_required"
        | "merchant_adjustments_daily"
        | "merchant_credential_required"
        | "merchant_hosted_customer_accounts"
        | "merchant_imports_daily"
        | "merchant_managed_receipts"
        | "merchant_payments_disabled"
        | "merchant_role_insufficient"
        | "method_unavailable"
        | "minimum_not_met"
        | "mode_mismatch"
        | "monthly_tax_calculations"
        | "no_discountable_balance"
        | "not_checkout_session"
        | "not_combinable"
        | "not_eligible"
        | "not_found"
        | "not_itemized"
        | "not_offered"
        | "not_paused"
        | "not_permitted"
        | "not_publishable"
        | "not_supported"
        | "not_yet_started"
        | "oauth_context_mismatch"
        | "off_session_not_supported"
        | "offer_subscription"
        | "on_hold"
        | "onboarding_required"
        | "option_expired"
        | "order_owned"
        | "organization_live_mode_required"
        | "organization_membership_required"
        | "organization_role_insufficient"
        | "outcome_unknown"
        | "owner_workflow_required"
        | "page_origin_required"
        | "partial_payment"
        | "partner_app_management_requires_live_key"
        | "payment_account_context_invalid"
        | "payment_account_setup_incomplete"
        | "payment_collected"
        | "payment_disputed"
        | "payment_intents_per_order"
        | "payment_link_completions"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_available"
        | "payment_option_not_in_plan"
        | "payment_required"
        | "payment_retries_per_period"
        | "payout_delay"
        | "payout_frequency"
        | "period_end_unavailable"
        | "platform_funding_unavailable"
        | "pricing_not_authorized"
        | "processing_not_enabled"
        | "processing_restricted"
        | "processor_not_configured"
        | "proof_rejected"
        | "proof_required"
        | "quote_expired"
        | "quote_revoked"
        | "quote_stale"
        | "rate_unavailable"
        | "receipt_recipients"
        | "reconciliation_required"
        | "recurring_ach_not_supported"
        | "recurring_not_supported"
        | "redirects_required"
        | "refund_created"
        | "refund_unavailable"
        | "repair_required"
        | "request_blocked"
        | "require_3ds"
        | "requirements_due"
        | "return_checkout"
        | "return_tax_mismatch"
        | "review"
        | "revision_unavailable"
        | "revoked"
        | "risk_action_unsupported"
        | "role_not_assignable"
        | "sandbox_management_requires_live_key"
        | "sandbox_not_accessible"
        | "sandbox_selection_forbidden"
        | "saved_card_codes"
        | "selected_by_active_variants"
        | "selection_changed"
        | "selection_expired"
        | "self_role_edit_forbidden"
        | "session_ended"
        | "session_not_open"
        | "setting_off"
        | "shipping_changed"
        | "source_delayed_settlement_not_supported"
        | "source_not_supported"
        | "split_payment_not_supported"
        | "status_not_reached"
        | "store_credit_unavailable"
        | "subscription_checkout"
        | "subscription_terms_locked"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "surface_not_supported"
        | "tax_category_required"
        | "tax_changed"
        | "terminal_status"
        | "test_event"
        | "transaction_purpose_unresolved"
        | "trial_in_progress"
        | "under_review"
        | "unknown"
        | "unknown_type"
        | "unsupported_evaluation_schema"
        | "unsupported_state"
        | "unsupported_use"
        | "verification_attempts"
        | "verification_codes"
        | "verification_required"
        | "window_expired"
        | "workload_identities"
        | "wrong_credential_type"
        | (string & {});
    /**
     * Shape $ (Value): {@link ErrorRemediation}. Recovery guidance for this failure: whether
     * retrying can succeed and what to do next. Recovery guidance for an error: whether and how to
     * `retry`, plus next steps and suggested actions.
     */
    "remediation"?: ErrorRemediation;
    /**
     * Shape $ (Value): string. API key mode requested for the rejected scope grant. Value enum:
     * "live", "test".
     */
    "requested_key_mode"?: "live" | "test" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity submitted by the caller when a
     * quantity-bearing operation conflicts with current capacity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Money amount required to satisfy a minimum threshold,
     * when the error is threshold-based. On ORDER_TOTAL_BELOW_NET_COLLECTED, the money already
     * collected for the order. On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the order's unpaid tip
     * the invoice must keep outstanding. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "required_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Shipping total computed for the new destination, when
     * available. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "requoted_shipping_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Tax total computed for the new destination, when
     * available. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "requoted_tax_money"?: MoneyValue;
    /** Shape $ (Value): string. ID of the referenced public resource, when available. */
    "resource_id"?: string;
    /**
     * Shape $ (Value): string. Public resource named by RESOURCE_NOT_FOUND or a generic conflict:
     * a ResourceType value, or resource when the resource has no public type.
     */
    "resource_type"?: string;
    /**
     * Shape $ (Value): string. On RETURN_CHECKOUT_REQUIRED, the return resolution whose balance
     * the order collects. Create the checkout session with POST
     * /v1/return-resolutions/{return_resolution_id}/checkout-session instead.
     */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): Array of string. On RESOURCE_IN_USE, the enabled risk rules that reference
     * the list. Archive or disable them before you archive the list. Shape $[] (Value): string.
     */
    "risk_rule_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Canonical public scope rejected by validation, when the detail
     * concerns one scope.
     */
    "scope"?: string;
    /**
     * Shape $ (Value): {@link ScopeRequirement}. Complete route or delegation scope requirement
     * for an INSUFFICIENT_SCOPE error. The scopes an authorization decision required and whether
     * `all` or `any` of them were needed, returned in error details.
     */
    "scope_requirement"?: ScopeRequirement;
    /**
     * Shape $ (Value): Array of {@link SelectableMerchant}. Merchants available to this developer
     * identity when code is MERCHANT_SELECTION_REQUIRED or INVALID_MERCHANT_SELECTION. Retry with
     * one of the returned merchant_id values. Shape $[] (Value): {@link SelectableMerchant}. A
     * merchant the caller can pick from, with its ID and business name, returned in error details
     * when a merchant must be chosen.
     */
    "selectable_merchants"?: Array<SelectableMerchant>;
    /**
     * Shape $ (Value): Array of {@link SelectableOrderPaymentIntent}. On
     * PAYMENT_LEG_SELECTION_REQUIRED, the order's payment intents you can choose from. Retry with
     * a payment_intents selection built from these. Shape $[] (Value): {@link
     * SelectableOrderPaymentIntent}. A payment intent on an order the caller can pick, with its
     * amount, status, and last payment error.
     */
    "selectable_payment_intents"?: Array<SelectableOrderPaymentIntent>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Committed shipping total on the paid order when its
     * destination cannot change without repricing. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "shipping_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "shortage_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount from your request that failed the check. On
     * TIP_ALLOCATION_CAPACITY_EXCEEDED, the unpaid tip the payment would have to carry. On
     * ORDER_CHANGED_REFRESH_REQUIRED, the expected_outstanding_money you sent, or the total of the
     * selected payment legs when they do not fit the outstanding balance. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "submitted_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Absolute source sequence submitted for this inventory count
     * line. Use an integer string (decimal digits), not a floating-point number. Format: uint64.
     * minimum: 0.
     */
    "submitted_source_observation_sequence"?: `${bigint}`;
    /** Shape $ (Value): string. Subscription delivery migration associated with the error. */
    "subscription_delivery_migration_id"?: string;
    /** Shape $ (Value): string. Subscription offer associated with the error. */
    "subscription_offer_id"?: string;
    /** Shape $ (Value): string. Subscription plan line item associated with the error. */
    "subscription_plan_line_item_id"?: string;
    /**
     * Shape $ (Value): Array of string. Concrete corrective actions for this validation error.
     * Shape $[] (Value): string.
     */
    "suggestions"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Actions accepted for the current resource state. Shape $[]
     * (Value): string.
     */
    "supported_actions"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. On INVALID_REQUEST with param Flint-Version, and on
     * API_VERSION_RETIRED, the API versions you can use now. Shape $[] (Value): string.
     */
    "supported_api_versions"?: Array<string>;
    /**
     * Shape $ (Value): string. On CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED, the current surface of the
     * checkout session in existing_checkout_session_id: hosted or embedded. Request this surface
     * to keep using that session.
     */
    "surface"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Committed tax total on a paid order when its
     * destination cannot change without repricing. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. On TIP_ALLOCATION_CAPACITY_EXCEEDED, the largest tip
     * the payment can carry: the balance left to collect. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "tip_capable_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Delivery eligibility reason on SUBSCRIPTION_DELIVERY_UNAVAILABLE,
     * when the selected method is unavailable. Value enum: "destination_not_served",
     * "pickup_unavailable", "no_window_available", "eligibility_no_match",
     * "method_type_not_allowed", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** Shape $ (Value): string. Variant associated with the error. */
    "variant_id"?: string;
};
/** Shape $ (Value): {@link ErrorEnvelope}. An error response containing `ErrorObject`. */
export type ErrorEnvelope = {
    /**
     * Shape $ (Value): {@link ErrorObject}. Error code, message, request context, and guidance for
     * resolving the failure. The error returned for a failed request: `type`, `code`, `message`,
     * `remediation`, `request_id`, and a list of `details` for individual failures.
     */
    "error": ErrorObject;
};
/**
 * Shape $ (Value): {@link ErrorObject}. The error returned for a failed request: `type`, `code`,
 * `message`, `remediation`, `request_id`, and a list of `details` for individual failures.
 */
export type ErrorObject = {
    /**
     * Shape $ (Value): string. Stable Flint error code. Each operation lists its codes in
     * x-flint-error-codes, and each error response lists the codes it can carry at that status.
     * Value enum: "ACCESS_LINK_CUSTOMER_REQUIRED", "ACCESS_LINK_MERCHANT_HOSTED",
     * "ACCOUNT_SETUP_CONFIGURATION_CONFLICT", "ACCOUNT_SETUP_REPAIR_REQUIRED",
     * "ACCOUNT_SETUP_UNAVAILABLE", "ACH_TRANSACTION_PURPOSE_UNRESOLVED", "ACTION_NOT_ALLOWED",
     * "ACTIVE_DEMO_SESSION_EXISTS", "ACTIVE_LINE_ITEM_SOURCE_CHANGE",
     * "ACTIVE_OPTION_SELECTOR_COLLAPSE", "AFFIRM_REFUND_RETRY_NOT_ALLOWED", "ALREADY_EXISTS",
     * "AMOUNT_EXCEEDS_BALANCE", "AMOUNT_EXCEEDS_REFUNDABLE", "AMOUNT_MISMATCH",
     * "AMOUNT_NOT_ADJUSTABLE", "API_KEY_ALREADY_REVOKED", "API_KEY_CHANGED",
     * "API_VERSION_RETIRED", "AUTHENTICATION_REQUIRED", "AUTOMATIC_PAYOUT_NOT_CANCELABLE",
     * "AUTOMATIC_PROMOTIONS_DISABLED", "AUTOMATIC_TAX_CONNECTION_REQUIRED",
     * "AUTOMATIC_TAX_ORIGIN_ADDRESS_REQUIRED", "AUTOMATIC_TAX_UNAVAILABLE",
     * "BILLING_INTERVAL_CHANGE_NOT_ALLOWED", "BUNDLE_COMPONENT_PRODUCT_NOT_ACTIVE",
     * "BUNDLE_COMPONENT_VARIANT_NOT_ACTIVE", "BUNDLE_NOT_SELLABLE",
     * "CANCEL_IMMEDIATELY_NOT_ALLOWED", "CAPABILITIES_IMMUTABLE", "CAPABILITY_NOT_REQUESTED",
     * "CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE", "CATALOG_INVENTORY_RELATIONSHIP_INVALID",
     * "CATALOG_LINE_ITEM_CURRENCY_CHANGED", "CATALOG_LINE_ITEM_SOURCE_CHANGED",
     * "CHECKOUT_CREDENTIAL_CHANGED", "CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED",
     * "CHECKOUT_CUSTOMER_CHANGED", "CHECKOUT_SESSION_CURRENT_CHANGED", "CHECKOUT_SESSION_EXPIRED",
     * "CHECKOUT_SESSION_MODIFIERS_READ_ONLY", "CHECKOUT_SESSION_NOT_OPEN",
     * "CHECKOUT_SESSION_SCOPE_MISMATCH", "CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED",
     * "CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED", "CHECKOUT_TAX_CALCULATION_LIMIT_REACHED",
     * "CONCURRENT_MODIFICATION", "CONFIRMATION_TOKEN_ALREADY_USED", "CONFIRMATION_TOKEN_EXPIRED",
     * "COUNTRY_IMMUTABLE", "CREDIT_NOTE_ALLOCATION_ALREADY_REVERSED",
     * "CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE", "CREDIT_NOTE_AMOUNT_EXCEEDS_CREDITABLE",
     * "CREDIT_NOTE_ISSUE_IN_PROGRESS", "CREDIT_NOTE_NOT_DRAFT", "CREDIT_NOTE_NOT_ISSUED",
     * "CREDIT_NOTE_REFUND_EXCEEDS_BALANCE", "CUSTOMER_DELETION_ALREADY_APPROVED",
     * "CUSTOMER_DELETION_BLOCKED", "CUSTOMER_DELETION_PROCESSING",
     * "CUSTOMER_DELETION_REQUEST_NOT_PENDING", "CUSTOMER_DELETION_STATE_CHANGED",
     * "CUSTOMER_EMAIL_BUYER_MANAGED", "CUSTOMER_EMAIL_REQUIRED",
     * "CUSTOMER_PAYMENT_TERM_UNAVAILABLE", "CUSTOMER_VERIFICATION_ALREADY_CONFIRMED",
     * "CUSTOMER_VERIFICATION_ATTEMPTS_EXHAUSTED", "CUSTOMER_VERIFICATION_EMAIL_CHANGED",
     * "CUSTOMER_VERIFICATION_EXPIRED", "CUSTOMER_VERIFICATION_LIMIT_REACHED",
     * "CUSTOMER_VERIFICATION_NOT_CONFIRMED", "CUSTOMER_VERIFICATION_NOT_OFFERED",
     * "CUSTOMER_VERIFICATION_NOT_SENT", "CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE",
     * "CUSTOMER_VERIFICATION_USED", "CUSTOM_DOMAIN_NOT_VERIFIED",
     * "CUSTOM_DOMAIN_SUBSCRIPTION_REQUIRED", "CUSTOM_DOMAIN_UNAVAILABLE",
     * "DEFAULT_ENVIRONMENT_REQUIRED", "DEFAULT_PAYMENT_METHOD_CONFLICT",
     * "DEFAULT_PAYOUT_DESTINATIONS_MANAGED_EXTERNALLY", "DEFAULT_PAYOUT_DESTINATION_INVALID",
     * "DEFAULT_PAYOUT_DESTINATION_REPLACEMENT_REQUIRED", "DEFAULT_PAYOUT_DESTINATION_REQUIRED",
     * "DEFAULT_SANDBOX_CANNOT_BE_ARCHIVED", "DEFAULT_SANDBOX_CANNOT_BE_RESET",
     * "DELIVERY_CALCULATION_EXPIRED", "DELIVERY_COMMERCE_TREATMENT_UNSUPPORTED",
     * "DELIVERY_DEPENDENCY_REVOKED", "DELIVERY_DESTINATION_CONTROLLED_BY_SELECTION",
     * "DELIVERY_DESTINATION_FROZEN", "DELIVERY_ELIGIBILITY_CONTEXT_CHANGED",
     * "DELIVERY_EXTERNAL_REFERENCE_REUSED", "DELIVERY_GROUPING_UNSUPPORTED",
     * "DELIVERY_OPTION_ALREADY_SELECTED", "DELIVERY_OPTION_EXPIRED",
     * "DELIVERY_PICKUP_AVAILABILITY_CHANGED", "DELIVERY_PICKUP_LOCATION_UNAVAILABLE",
     * "DELIVERY_PREVIEW_REQUIRES_CHECKOUT", "DELIVERY_QUOTE_BASIS_INVALID",
     * "DELIVERY_QUOTE_EXPIRED", "DELIVERY_QUOTE_INCOMPLETE", "DELIVERY_QUOTE_INPUT_CHANGED",
     * "DELIVERY_QUOTE_REVOKED", "DELIVERY_QUOTE_STALE",
     * "DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE", "DELIVERY_REQUOTE_REQUIRED",
     * "DELIVERY_RESOURCE_VERSION_CONFLICT", "DELIVERY_SELECTION_CHANGED",
     * "DELIVERY_SELECTION_EXPIRED", "DELIVERY_SELECTION_NOT_MUTABLE_AFTER_PAYMENT",
     * "DELIVERY_SELECTION_REPLACEMENT_LIMIT_REACHED", "DELIVERY_STATE_CONFLICT",
     * "DELIVERY_UPDATE_NOT_ALLOWED", "DELIVERY_WINDOW_EXPIRED", "DEMO_SESSION_NOT_CURRENT",
     * "DEMO_SESSION_SECRET_REPLAY_EXPIRED", "DEVICE_ARCHIVED", "DEVICE_LOCATION_MISMATCH",
     * "DISCOUNT_NOT_REMOVABLE", "DUPLICATE_CODE", "EMAIL_ALREADY_LINKED",
     * "EMAIL_CHANGE_ALREADY_CONFIRMED", "EMAIL_CHANGE_ATTEMPTS_EXHAUSTED",
     * "EMAIL_CHANGE_CONFIRMATION_EXPIRED", "EMAIL_CHANGE_SUPERSEDED",
     * "EMAIL_PREFERENCE_LINK_INVALID", "EVENT_SOLD_OUT", "EVENT_TICKETS_INSUFFICIENT",
     * "EXTERNAL_PAID_ORDER_ALLOWANCE_EXHAUSTED", "EXTERNAL_SERVICE_ERROR", "FILE_NOT_UPLOADED",
     * "FLAT_TAX_PAYMENT_ATTRIBUTION_UNAVAILABLE", "FLAT_TAX_REFUND_STATE_INVALID", "FORBIDDEN",
     * "FULFILLMENT_ACTIVE_SHIPMENT_EXECUTION", "FULFILLMENT_APPROVAL_REQUIRED",
     * "FULFILLMENT_CHANGED", "FULFILLMENT_COMPLETED", "FULFILLMENT_COMPLETED_DETAILS_REPLACEMENT",
     * "FULFILLMENT_COMPLETION_TIMESTAMP_REQUIRES_COMPLETE",
     * "FULFILLMENT_CONFIGURATION_ACTION_REQUIRED", "FULFILLMENT_EVENT_DEDUPE_CONFLICT",
     * "FULFILLMENT_EVENT_SUBJECT_INVALID", "FULFILLMENT_INACTIVE",
     * "FULFILLMENT_METHOD_ASSIGNMENT_UNSATISFIABLE", "FULFILLMENT_METHOD_UNAVAILABLE",
     * "FULFILLMENT_PROFILE_REVISION_UNUSABLE", "FULFILLMENT_PROFILE_UNAVAILABLE",
     * "FULFILLMENT_QUANTITY_EXCEEDS_AVAILABLE", "FULFILLMENT_QUANTITY_EXCEEDS_LINE_ITEM",
     * "FULFILLMENT_SELECTION_REQUIRED", "FULFILLMENT_SHIPMENT_NOT_VOIDABLE",
     * "FULFILLMENT_STATUS_CONFLICT", "GIFT_CARD_ALLOCATION_CHANGED",
     * "GIFT_CARD_BUYER_EMAIL_REQUIRED", "GIFT_CARD_CHALLENGE_REQUIRED",
     * "GIFT_CARD_FUNDING_LIMIT_EXCEEDED", "GIFT_CARD_INSUFFICIENT_VALUE",
     * "GIFT_CARD_PURCHASE_CONFLICT", "GIFT_CARD_PURCHASE_LIMIT_EXCEEDED",
     * "GIFT_CARD_PURCHASE_REFUND_CONFLICT", "GIFT_CARD_REFUND_DESTINATION_REQUIRED",
     * "GIFT_CARD_STATE_CONFLICT", "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED",
     * "IDEMPOTENCY_RECOVERY_REQUIRED", "IDENTITY_VERIFICATION_REQUIRED",
     * "IMAGE_ASSET_NOT_ATTACHABLE", "IMAGE_INGESTION_EXPIRED", "IMAGE_INGESTION_IN_PROGRESS",
     * "IMAGE_INGESTION_RESTART_REQUIRED", "IMAGE_NOT_ATTACHABLE", "IMAGE_OWNER_NOT_MUTABLE",
     * "IMAGE_PROCESSING_CAPACITY_EXCEEDED", "IMAGE_PROCESSING_FAILED", "IMAGE_PROCESSING_TIMEOUT",
     * "IMAGE_REVISION_MISMATCH", "IMAGE_SOURCE_TIMEOUT", "IMAGE_SOURCE_UNAVAILABLE",
     * "IMAGE_STORAGE_QUOTA_EXCEEDED", "INITIAL_API_KEY_ALREADY_CREATED",
     * "INSTANT_PAYOUTS_UNAVAILABLE", "INSUFFICIENT_AVAILABLE_BALANCE", "INSUFFICIENT_SCOPE",
     * "INTERNAL_ERROR", "INVALID_CREDENTIAL", "INVALID_INVOICE_LATE_FEE_AMOUNT",
     * "INVALID_MERCHANT_SELECTION", "INVALID_ORDER_STATUS", "INVALID_REQUEST",
     * "INVALID_STATUS_TRANSITION", "INVALID_VALUE", "INVENTORY_COUNT_INCOMPLETE",
     * "INVENTORY_INSUFFICIENT", "INVENTORY_ITEM_INACTIVE", "INVENTORY_ITEM_UNAVAILABLE",
     * "INVENTORY_LOCATION_ALLOCATION_DISABLED", "INVENTORY_LOCATION_INELIGIBLE",
     * "INVENTORY_POLICY_UNAVAILABLE", "INVENTORY_QUANTITY_CONFLICT", "INVENTORY_RECEIPT_CONFLICT",
     * "INVENTORY_ROUTING_LOCATION_LIMIT_EXCEEDED", "INVENTORY_SHORTAGE",
     * "INVENTORY_SOURCE_SEQUENCE_CHANGED", "INVENTORY_TRANSFER_LINE_CONFLICT",
     * "INVENTORY_UNAVAILABLE", "INVOICE_AUTOPAY_PAYMENT_METHOD_REQUIRED",
     * "INVOICE_BALANCE_CHANGED", "INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED",
     * "INVOICE_COLLECTION_BLOCKED", "INVOICE_COLLECTION_CHANGED",
     * "INVOICE_COLLECTION_MODE_UNSUPPORTED", "INVOICE_ISSUE_IN_PROGRESS",
     * "INVOICE_LATE_FEE_NOT_COLLECTIBLE", "INVOICE_LATE_FEE_NOT_DUE",
     * "INVOICE_LATE_FEE_POLICY_REQUIRED", "INVOICE_LINK_UNAVAILABLE",
     * "INVOICE_LOCKED_ORDER_FINANCIALS", "INVOICE_NOT_COLLECTIBLE", "INVOICE_NOT_CREDITABLE",
     * "INVOICE_NOT_DRAFT", "INVOICE_NOT_ISSUED", "INVOICE_NOT_MARKABLE_UNCOLLECTIBLE",
     * "INVOICE_NOT_REVERSIBLE", "INVOICE_NOT_VOIDABLE", "INVOICE_PAYMENT_ALREADY_SETTLED",
     * "INVOICE_PAYMENT_ATTEMPT_ACTIVE", "INVOICE_PAYMENT_NOT_APPLIED",
     * "INVOICE_PAYMENT_PROCESSING", "INVOICE_PAYMENT_RESOLVING",
     * "INVOICE_PAYMENT_TERM_CURRENCY_MISMATCH", "INVOICE_PAYMENT_TERM_UNAVAILABLE",
     * "INVOICE_REMINDER_CHANGED", "INVOICE_SCHEDULE_ENTRY_NOT_COLLECTIBLE",
     * "INVOICE_TAX_SNAPSHOT_MISSING", "INVOICE_TAX_SNAPSHOT_STALE", "ITEMS_REQUIRED",
     * "LIMIT_EXCEEDED", "LIMIT_REACHED", "LINE_ITEM_REFUND_QUANTITY_EXCEEDS_REFUNDABLE",
     * "LIST_RESERVED", "LOCATION_NOT_ACTIVE", "LOCATION_UNAVAILABLE",
     * "MAX_COMPLETIONS_BELOW_COMPLETED", "MAX_TOTAL_QUANTITY_BELOW_SOLD",
     * "MERCHANT_ACCOUNT_DOMAIN_NOT_VERIFIED", "MERCHANT_ACCOUNT_NOT_READY",
     * "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REPAIR_REQUIRED",
     * "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REQUIRED",
     * "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_UNAVAILABLE",
     * "MERCHANT_ACCOUNT_SESSION_CONTROLLER_MISMATCH", "MERCHANT_ACCOUNT_SESSION_INELIGIBLE",
     * "MERCHANT_ACCOUNT_SESSION_PROVIDER_GRANT_MISMATCH",
     * "MERCHANT_ACCOUNT_SESSION_TARGETED_REMEDIATION_UNAVAILABLE",
     * "MERCHANT_ACCOUNT_SESSION_UNMAPPABLE_REQUIREMENT_ID", "MERCHANT_BILLING_SUSPENDED",
     * "MERCHANT_NOT_READY", "MERCHANT_ONBOARDING_REQUIRED", "MERCHANT_PROCESSING_RESTRICTED",
     * "MERCHANT_SELECTION_REQUIRED", "MERCHANT_UNDER_REVIEW", "METHOD_NOT_ALLOWED",
     * "MODIFIER_GROUP_UNAVAILABLE", "MONEY_MOVEMENT_OPERATION_BLOCKED",
     * "MONEY_MOVEMENT_PROVIDER_NOT_CONFIGURED", "MULTIPLE_IDENTITIES_FOUND",
     * "NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE", "NOTHING_TO_REFUND", "NOTHING_TO_REFUND_FOR_CHARGE",
     * "NOTHING_TO_REFUND_FOR_LINE_ITEM", "NOTHING_TO_REFUND_FOR_TAX_BREAKDOWN", "NOT_ALLOWED",
     * "NO_DISCOUNTABLE_BALANCE", "NO_PAYMENTS_FOR_ORDER",
     * "ONBOARDING_CONTROLLER_VERSION_UNSUPPORTED", "ONBOARDING_PROFILE_PROVIDER_MANAGED",
     * "OPERATION_IN_PROGRESS", "ORDER_ALREADY_HAS_ACTIVE_INVOICE", "ORDER_ALREADY_HAS_PAYMENTS",
     * "ORDER_ALREADY_HAS_REFUNDS", "ORDER_ALREADY_PAID", "ORDER_CHANGED_REFRESH_REQUIRED",
     * "ORDER_CHECKOUT_SESSION_CHANGED", "ORDER_COLLECTION_ALREADY_ACTIVE",
     * "ORDER_COLLECTION_IN_PROGRESS", "ORDER_CONFLICT", "ORDER_CUSTOMER_ALREADY_SET",
     * "ORDER_CUSTOMER_CHECKOUT_ACTIVE", "ORDER_CUSTOMER_NOT_UPDATABLE_AFTER_PAYMENT",
     * "ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED", "ORDER_FINANCIAL_MUTATION_NOT_ALLOWED",
     * "ORDER_HAS_ACTIVE_PAYMENT_INTENT", "ORDER_HAS_COLLECTED_MONEY", "ORDER_HAS_MANUAL_PAYMENTS",
     * "ORDER_HAS_NO_LINE_ITEMS", "ORDER_HAS_NO_REFUNDABLE_CHARGES",
     * "ORDER_HAS_NO_REFUNDABLE_LINE_ITEMS", "ORDER_HAS_OPEN_CHECKOUT",
     * "ORDER_INVENTORY_EXCEPTION_NOT_RESOLVABLE", "ORDER_INVENTORY_EXCEPTION_UNRESOLVED",
     * "ORDER_NOT_FULFILLABLE", "ORDER_NOT_OPEN", "ORDER_PAYMENT_ATTEMPT_ACTIVE",
     * "ORDER_PAYMENT_CUSTOMER_MISMATCH", "ORDER_PAYMENT_INTENT_CREATE_IN_PROGRESS",
     * "ORDER_PAYMENT_INTENT_CREATE_REQUIRES_REVIEW", "ORDER_PAYMENT_LEG_ALREADY_SETTLED",
     * "ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE", "ORDER_RECEIPT_EMAIL_ON_FILE",
     * "ORDER_RECEIPT_EMAIL_UNAVAILABLE", "ORDER_RECEIPT_MERCHANT_MANAGED",
     * "ORDER_RECEIPT_NOT_AVAILABLE", "ORDER_RECEIPT_RECIPIENT_LIMIT_REACHED",
     * "ORDER_RECONCILIATION_REQUIRED", "ORDER_TAX_NOT_READY", "ORDER_TAX_NOT_UPDATABLE",
     * "ORDER_TOTALS_UNAVAILABLE", "ORDER_TOTAL_BELOW_NET_COLLECTED", "ORGANIZATION_CYCLE",
     * "ORGANIZATION_NOT_ACTIVE", "PACKAGE_CHANGED", "PACKAGE_PARENT_CHANGED",
     * "PAID_LINE_ITEM_MODIFIER_CHANGE_FORBIDDEN", "PAID_LINE_ITEM_PRICE_CHANGE_FORBIDDEN",
     * "PAID_LINE_ITEM_QUANTITY_CHANGE_FORBIDDEN", "PAID_LINE_ITEM_QUANTITY_DECREASE_FORBIDDEN",
     * "PAID_LINE_ITEM_REMOVAL_FORBIDDEN", "PAID_LINE_ITEM_TAX_CHANGE_FORBIDDEN",
     * "PAUSE_NOT_ALLOWED", "PAYMENT_ACTION_WINDOW_TOO_SHORT", "PAYMENT_ALREADY_SETTLED",
     * "PAYMENT_AMOUNT_CHANGED", "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_ATTEMPT_MISMATCH",
     * "PAYMENT_ATTEMPT_NOT_CANCELABLE", "PAYMENT_ATTEMPT_NOT_RESUMABLE",
     * "PAYMENT_ATTEMPT_REQUIRES_CAPTURE", "PAYMENT_CONFIRMATION_STATE_CHANGED",
     * "PAYMENT_CONFIRM_IN_PROGRESS", "PAYMENT_INTENT_DISPUTED", "PAYMENT_INTENT_LIMIT_REACHED",
     * "PAYMENT_IN_PROGRESS", "PAYMENT_LEG_SELECTION_REQUIRED", "PAYMENT_LINK_CHANGED_RETRY",
     * "PAYMENT_LINK_FULFILLMENT_UNAVAILABLE", "PAYMENT_LINK_INACTIVE",
     * "PAYMENT_LINK_MAX_COMPLETIONS_REACHED", "PAYMENT_LINK_RESOLUTION_CONTEXT_REFRESH_REQUIRED",
     * "PAYMENT_LINK_RESOLUTION_REPLAY_UNAVAILABLE", "PAYMENT_LINK_SALES_ENDED",
     * "PAYMENT_METHOD_CUSTOMER_MISMATCH", "PAYMENT_METHOD_DOMAIN_OPERATION_IN_PROGRESS",
     * "PAYMENT_METHOD_HAS_ACTIVE_SUBSCRIPTIONS", "PAYMENT_METHOD_NOT_ACTIVE",
     * "PAYMENT_METHOD_NOT_READY", "PAYMENT_METHOD_ON_SESSION_ONLY", "PAYMENT_METHOD_REQUIRED",
     * "PAYMENT_METHOD_SAVE_EMAIL_UNAVAILABLE", "PAYMENT_METHOD_SAVE_NOT_PENDING",
     * "PAYMENT_METHOD_SAVE_NOT_READY", "PAYMENT_NOT_REQUIRED", "PAYMENT_OPERATION_IN_PROGRESS",
     * "PAYMENT_OPTION_LIMIT_EXCEEDED", "PAYMENT_OPTION_NOT_READY", "PAYMENT_OPTION_UNAVAILABLE",
     * "PAYMENT_PROCESSING_NOT_ENABLED", "PAYMENT_PROCESSING_UNAVAILABLE",
     * "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_PROCESSOR_UNAVAILABLE", "PAYMENT_REVIEW_OPEN",
     * "PAYMENT_SOURCE_UNAVAILABLE", "PAYOUTS_NOT_ENABLED", "PAYOUT_DELAY_PROVIDER_CONTROLLED",
     * "PAYOUT_DESTINATIONS_MANAGEMENT_UNAVAILABLE", "PAYOUT_FEE_NOT_DETERMINABLE",
     * "PAYOUT_NOT_CANCELABLE", "PAYOUT_SETTINGS_MANAGED_EXTERNALLY",
     * "PAYOUT_SETTINGS_MANAGEMENT_UNAVAILABLE", "PAYOUT_STATUS_NOT_CANCELABLE", "PLAN_NOT_ACTIVE",
     * "PROCESSING_FEE_PRICING_NOT_AUTHORIZED", "PROCESSOR_NOT_CONFIGURED",
     * "PROFILE_UPDATE_STATUS_UNKNOWN", "PROMOTION_CODES_DISABLED", "PROMOTION_DECLINED",
     * "PROMOTION_HAS_ACTIVE_SUBSCRIPTION_OFFERS", "PROMOTION_NOT_REDEEMABLE",
     * "PROMOTION_SHAPE_IMMUTABLE", "PROVIDER_ACCOUNT_CLEANUP_REQUIRED",
     * "QUANTITY_CHANGE_NOT_ALLOWED", "QUANTITY_NOT_ADJUSTABLE", "RATE_LIMIT_EXCEEDED",
     * "REFUND_ADJUSTMENT_PAYMENT_INTENT_NOT_REFUNDABLE",
     * "REFUND_ADJUSTMENT_REFUND_EXCEEDS_PAYMENT_INTENT_REFUNDABLE",
     * "REFUND_ADJUSTMENT_REFUND_EXCEEDS_REMAINING", "REFUND_SUBMISSION_DEADLINE_EXPIRED",
     * "REFUND_TENDER_CAPACITY_CONFLICT", "REPORT_DOWNLOAD_EXPIRED", "REQUEST_BLOCKED",
     * "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT", "REQUIRED",
     * "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "RETURN_CHECKOUT_REQUIRED",
     * "RETURN_COMPLETION_BLOCKED", "RETURN_DISPOSITION_QUANTITY_EXCEEDED",
     * "RETURN_FULFILLMENT_ALLOCATION_AMBIGUOUS", "RETURN_INSPECTION_QUANTITY_EXCEEDED",
     * "RETURN_LINE_CANCELLATION_CONFLICT", "RETURN_POLICY_CONFLICT",
     * "RETURN_RECEIPT_QUANTITY_EXCEEDED", "RETURN_SELF_SERVICE_NOT_ALLOWED",
     * "RETURN_SHIPMENT_QUANTITY_EXCEEDS_AVAILABLE", "RETURN_VALUE_EXCEEDED",
     * "RETURN_VERSION_CONFLICT", "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW",
     * "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION", "RISK_RULE_LIMIT_REACHED",
     * "ROUTE_NOT_FOUND", "RULE_RESERVED", "SANDBOX_ARCHIVED", "SANDBOX_INACTIVE",
     * "SAVE_PAYMENT_METHOD_CODE_LIMIT_REACHED", "SAVE_PAYMENT_METHOD_NOT_OFFERED",
     * "SAVE_PAYMENT_METHOD_VERIFICATION_REQUIRED", "SENSITIVE_IDEMPOTENCY_RESULT_INVALID",
     * "SERVICE_UNAVAILABLE", "SETUP_SOURCE_NON_ZERO_ORDER", "SHIPMENT_CHANGED",
     * "SHIPMENT_PACKAGE_ITEM_QUANTITY_EXCEEDS_FULFILLMENT", "SHIPMENT_PACKAGE_NOT_VOIDABLE",
     * "SKIP_LIMIT_REACHED", "SKIP_NOT_ALLOWED", "STANDARD_PAYOUTS_UNAVAILABLE",
     * "STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE", "SUBSCRIPTION_DELIVERY_LINES_NOT_COMBINABLE",
     * "SUBSCRIPTION_DELIVERY_MIGRATION_IN_PROGRESS",
     * "SUBSCRIPTION_DELIVERY_MIGRATION_TARGET_UNAVAILABLE",
     * "SUBSCRIPTION_DELIVERY_PROFILE_ACTION_REQUIRED", "SUBSCRIPTION_DELIVERY_PROFILE_MISSING",
     * "SUBSCRIPTION_DELIVERY_UNAVAILABLE", "SUBSCRIPTION_NEXT_BILLING_AT_BEFORE_PERIOD_START",
     * "SUBSCRIPTION_NEXT_BILLING_AT_TOO_FAR", "SUBSCRIPTION_OFFER_ARCHIVED",
     * "SUBSCRIPTION_OFFER_NOT_ACTIVE", "SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE",
     * "SUBSCRIPTION_OFFER_TARGET_CONFLICT", "SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS",
     * "SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED", "SUBSCRIPTION_START_OVERRIDE_NOT_ALLOWED",
     * "SWAP_NOT_ALLOWED", "TAX_BREAKDOWN_REFUND_EXCEEDS_REMAINING", "TAX_CATEGORY_REQUIRED",
     * "TEST_PROCESSOR_NOT_CONFIGURED", "TICKET_PREFIX_LOCKED", "TIP_ALLOCATION_CAPACITY_EXCEEDED",
     * "UNKNOWN_FIELD", "UNSUPPORTED_CONTENT_TYPE", "UNSUPPORTED_PROCESSOR",
     * "VARIANT_NOT_SELLABLE", "VERSION_CONFLICT", "WEBHOOK_DELIVERY_IN_FLIGHT",
     * "WEBHOOK_ENDPOINT_NOT_ACTIVE", "WEBHOOK_ENDPOINT_NOT_SUBSCRIBED",
     * "WEBHOOK_EVENT_PAYLOAD_EXPIRED", "WORKLOAD_IDENTITY_LIMIT_REACHED".
     */
    "code": "ACCESS_LINK_CUSTOMER_REQUIRED"
        | "ACCESS_LINK_MERCHANT_HOSTED"
        | "ACCOUNT_SETUP_CONFIGURATION_CONFLICT"
        | "ACCOUNT_SETUP_REPAIR_REQUIRED"
        | "ACCOUNT_SETUP_UNAVAILABLE"
        | "ACH_TRANSACTION_PURPOSE_UNRESOLVED"
        | "ACTION_NOT_ALLOWED"
        | "ACTIVE_DEMO_SESSION_EXISTS"
        | "ACTIVE_LINE_ITEM_SOURCE_CHANGE"
        | "ACTIVE_OPTION_SELECTOR_COLLAPSE"
        | "AFFIRM_REFUND_RETRY_NOT_ALLOWED"
        | "ALREADY_EXISTS"
        | "AMOUNT_EXCEEDS_BALANCE"
        | "AMOUNT_EXCEEDS_REFUNDABLE"
        | "AMOUNT_MISMATCH"
        | "AMOUNT_NOT_ADJUSTABLE"
        | "API_KEY_ALREADY_REVOKED"
        | "API_KEY_CHANGED"
        | "API_VERSION_RETIRED"
        | "AUTHENTICATION_REQUIRED"
        | "AUTOMATIC_PAYOUT_NOT_CANCELABLE"
        | "AUTOMATIC_PROMOTIONS_DISABLED"
        | "AUTOMATIC_TAX_CONNECTION_REQUIRED"
        | "AUTOMATIC_TAX_ORIGIN_ADDRESS_REQUIRED"
        | "AUTOMATIC_TAX_UNAVAILABLE"
        | "BILLING_INTERVAL_CHANGE_NOT_ALLOWED"
        | "BUNDLE_COMPONENT_PRODUCT_NOT_ACTIVE"
        | "BUNDLE_COMPONENT_VARIANT_NOT_ACTIVE"
        | "BUNDLE_NOT_SELLABLE"
        | "CANCEL_IMMEDIATELY_NOT_ALLOWED"
        | "CAPABILITIES_IMMUTABLE"
        | "CAPABILITY_NOT_REQUESTED"
        | "CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE"
        | "CATALOG_INVENTORY_RELATIONSHIP_INVALID"
        | "CATALOG_LINE_ITEM_CURRENCY_CHANGED"
        | "CATALOG_LINE_ITEM_SOURCE_CHANGED"
        | "CHECKOUT_CREDENTIAL_CHANGED"
        | "CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED"
        | "CHECKOUT_CUSTOMER_CHANGED"
        | "CHECKOUT_SESSION_CURRENT_CHANGED"
        | "CHECKOUT_SESSION_EXPIRED"
        | "CHECKOUT_SESSION_MODIFIERS_READ_ONLY"
        | "CHECKOUT_SESSION_NOT_OPEN"
        | "CHECKOUT_SESSION_SCOPE_MISMATCH"
        | "CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED"
        | "CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED"
        | "CHECKOUT_TAX_CALCULATION_LIMIT_REACHED"
        | "CONCURRENT_MODIFICATION"
        | "CONFIRMATION_TOKEN_ALREADY_USED"
        | "CONFIRMATION_TOKEN_EXPIRED"
        | "COUNTRY_IMMUTABLE"
        | "CREDIT_NOTE_ALLOCATION_ALREADY_REVERSED"
        | "CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE"
        | "CREDIT_NOTE_AMOUNT_EXCEEDS_CREDITABLE"
        | "CREDIT_NOTE_ISSUE_IN_PROGRESS"
        | "CREDIT_NOTE_NOT_DRAFT"
        | "CREDIT_NOTE_NOT_ISSUED"
        | "CREDIT_NOTE_REFUND_EXCEEDS_BALANCE"
        | "CUSTOMER_DELETION_ALREADY_APPROVED"
        | "CUSTOMER_DELETION_BLOCKED"
        | "CUSTOMER_DELETION_PROCESSING"
        | "CUSTOMER_DELETION_REQUEST_NOT_PENDING"
        | "CUSTOMER_DELETION_STATE_CHANGED"
        | "CUSTOMER_EMAIL_BUYER_MANAGED"
        | "CUSTOMER_EMAIL_REQUIRED"
        | "CUSTOMER_PAYMENT_TERM_UNAVAILABLE"
        | "CUSTOMER_VERIFICATION_ALREADY_CONFIRMED"
        | "CUSTOMER_VERIFICATION_ATTEMPTS_EXHAUSTED"
        | "CUSTOMER_VERIFICATION_EMAIL_CHANGED"
        | "CUSTOMER_VERIFICATION_EXPIRED"
        | "CUSTOMER_VERIFICATION_LIMIT_REACHED"
        | "CUSTOMER_VERIFICATION_NOT_CONFIRMED"
        | "CUSTOMER_VERIFICATION_NOT_OFFERED"
        | "CUSTOMER_VERIFICATION_NOT_SENT"
        | "CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE"
        | "CUSTOMER_VERIFICATION_USED"
        | "CUSTOM_DOMAIN_NOT_VERIFIED"
        | "CUSTOM_DOMAIN_SUBSCRIPTION_REQUIRED"
        | "CUSTOM_DOMAIN_UNAVAILABLE"
        | "DEFAULT_ENVIRONMENT_REQUIRED"
        | "DEFAULT_PAYMENT_METHOD_CONFLICT"
        | "DEFAULT_PAYOUT_DESTINATIONS_MANAGED_EXTERNALLY"
        | "DEFAULT_PAYOUT_DESTINATION_INVALID"
        | "DEFAULT_PAYOUT_DESTINATION_REPLACEMENT_REQUIRED"
        | "DEFAULT_PAYOUT_DESTINATION_REQUIRED"
        | "DEFAULT_SANDBOX_CANNOT_BE_ARCHIVED"
        | "DEFAULT_SANDBOX_CANNOT_BE_RESET"
        | "DELIVERY_CALCULATION_EXPIRED"
        | "DELIVERY_COMMERCE_TREATMENT_UNSUPPORTED"
        | "DELIVERY_DEPENDENCY_REVOKED"
        | "DELIVERY_DESTINATION_CONTROLLED_BY_SELECTION"
        | "DELIVERY_DESTINATION_FROZEN"
        | "DELIVERY_ELIGIBILITY_CONTEXT_CHANGED"
        | "DELIVERY_EXTERNAL_REFERENCE_REUSED"
        | "DELIVERY_GROUPING_UNSUPPORTED"
        | "DELIVERY_OPTION_ALREADY_SELECTED"
        | "DELIVERY_OPTION_EXPIRED"
        | "DELIVERY_PICKUP_AVAILABILITY_CHANGED"
        | "DELIVERY_PICKUP_LOCATION_UNAVAILABLE"
        | "DELIVERY_PREVIEW_REQUIRES_CHECKOUT"
        | "DELIVERY_QUOTE_BASIS_INVALID"
        | "DELIVERY_QUOTE_EXPIRED"
        | "DELIVERY_QUOTE_INCOMPLETE"
        | "DELIVERY_QUOTE_INPUT_CHANGED"
        | "DELIVERY_QUOTE_REVOKED"
        | "DELIVERY_QUOTE_STALE"
        | "DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE"
        | "DELIVERY_REQUOTE_REQUIRED"
        | "DELIVERY_RESOURCE_VERSION_CONFLICT"
        | "DELIVERY_SELECTION_CHANGED"
        | "DELIVERY_SELECTION_EXPIRED"
        | "DELIVERY_SELECTION_NOT_MUTABLE_AFTER_PAYMENT"
        | "DELIVERY_SELECTION_REPLACEMENT_LIMIT_REACHED"
        | "DELIVERY_STATE_CONFLICT"
        | "DELIVERY_UPDATE_NOT_ALLOWED"
        | "DELIVERY_WINDOW_EXPIRED"
        | "DEMO_SESSION_NOT_CURRENT"
        | "DEMO_SESSION_SECRET_REPLAY_EXPIRED"
        | "DEVICE_ARCHIVED"
        | "DEVICE_LOCATION_MISMATCH"
        | "DISCOUNT_NOT_REMOVABLE"
        | "DUPLICATE_CODE"
        | "EMAIL_ALREADY_LINKED"
        | "EMAIL_CHANGE_ALREADY_CONFIRMED"
        | "EMAIL_CHANGE_ATTEMPTS_EXHAUSTED"
        | "EMAIL_CHANGE_CONFIRMATION_EXPIRED"
        | "EMAIL_CHANGE_SUPERSEDED"
        | "EMAIL_PREFERENCE_LINK_INVALID"
        | "EVENT_SOLD_OUT"
        | "EVENT_TICKETS_INSUFFICIENT"
        | "EXTERNAL_PAID_ORDER_ALLOWANCE_EXHAUSTED"
        | "EXTERNAL_SERVICE_ERROR"
        | "FILE_NOT_UPLOADED"
        | "FLAT_TAX_PAYMENT_ATTRIBUTION_UNAVAILABLE"
        | "FLAT_TAX_REFUND_STATE_INVALID"
        | "FORBIDDEN"
        | "FULFILLMENT_ACTIVE_SHIPMENT_EXECUTION"
        | "FULFILLMENT_APPROVAL_REQUIRED"
        | "FULFILLMENT_CHANGED"
        | "FULFILLMENT_COMPLETED"
        | "FULFILLMENT_COMPLETED_DETAILS_REPLACEMENT"
        | "FULFILLMENT_COMPLETION_TIMESTAMP_REQUIRES_COMPLETE"
        | "FULFILLMENT_CONFIGURATION_ACTION_REQUIRED"
        | "FULFILLMENT_EVENT_DEDUPE_CONFLICT"
        | "FULFILLMENT_EVENT_SUBJECT_INVALID"
        | "FULFILLMENT_INACTIVE"
        | "FULFILLMENT_METHOD_ASSIGNMENT_UNSATISFIABLE"
        | "FULFILLMENT_METHOD_UNAVAILABLE"
        | "FULFILLMENT_PROFILE_REVISION_UNUSABLE"
        | "FULFILLMENT_PROFILE_UNAVAILABLE"
        | "FULFILLMENT_QUANTITY_EXCEEDS_AVAILABLE"
        | "FULFILLMENT_QUANTITY_EXCEEDS_LINE_ITEM"
        | "FULFILLMENT_SELECTION_REQUIRED"
        | "FULFILLMENT_SHIPMENT_NOT_VOIDABLE"
        | "FULFILLMENT_STATUS_CONFLICT"
        | "GIFT_CARD_ALLOCATION_CHANGED"
        | "GIFT_CARD_BUYER_EMAIL_REQUIRED"
        | "GIFT_CARD_CHALLENGE_REQUIRED"
        | "GIFT_CARD_FUNDING_LIMIT_EXCEEDED"
        | "GIFT_CARD_INSUFFICIENT_VALUE"
        | "GIFT_CARD_PURCHASE_CONFLICT"
        | "GIFT_CARD_PURCHASE_LIMIT_EXCEEDED"
        | "GIFT_CARD_PURCHASE_REFUND_CONFLICT"
        | "GIFT_CARD_REFUND_DESTINATION_REQUIRED"
        | "GIFT_CARD_STATE_CONFLICT"
        | "IDEMPOTENCY_KEY_IN_PROGRESS"
        | "IDEMPOTENCY_KEY_REUSED"
        | "IDEMPOTENCY_RECOVERY_REQUIRED"
        | "IDENTITY_VERIFICATION_REQUIRED"
        | "IMAGE_ASSET_NOT_ATTACHABLE"
        | "IMAGE_INGESTION_EXPIRED"
        | "IMAGE_INGESTION_IN_PROGRESS"
        | "IMAGE_INGESTION_RESTART_REQUIRED"
        | "IMAGE_NOT_ATTACHABLE"
        | "IMAGE_OWNER_NOT_MUTABLE"
        | "IMAGE_PROCESSING_CAPACITY_EXCEEDED"
        | "IMAGE_PROCESSING_FAILED"
        | "IMAGE_PROCESSING_TIMEOUT"
        | "IMAGE_REVISION_MISMATCH"
        | "IMAGE_SOURCE_TIMEOUT"
        | "IMAGE_SOURCE_UNAVAILABLE"
        | "IMAGE_STORAGE_QUOTA_EXCEEDED"
        | "INITIAL_API_KEY_ALREADY_CREATED"
        | "INSTANT_PAYOUTS_UNAVAILABLE"
        | "INSUFFICIENT_AVAILABLE_BALANCE"
        | "INSUFFICIENT_SCOPE"
        | "INTERNAL_ERROR"
        | "INVALID_CREDENTIAL"
        | "INVALID_INVOICE_LATE_FEE_AMOUNT"
        | "INVALID_MERCHANT_SELECTION"
        | "INVALID_ORDER_STATUS"
        | "INVALID_REQUEST"
        | "INVALID_STATUS_TRANSITION"
        | "INVALID_VALUE"
        | "INVENTORY_COUNT_INCOMPLETE"
        | "INVENTORY_INSUFFICIENT"
        | "INVENTORY_ITEM_INACTIVE"
        | "INVENTORY_ITEM_UNAVAILABLE"
        | "INVENTORY_LOCATION_ALLOCATION_DISABLED"
        | "INVENTORY_LOCATION_INELIGIBLE"
        | "INVENTORY_POLICY_UNAVAILABLE"
        | "INVENTORY_QUANTITY_CONFLICT"
        | "INVENTORY_RECEIPT_CONFLICT"
        | "INVENTORY_ROUTING_LOCATION_LIMIT_EXCEEDED"
        | "INVENTORY_SHORTAGE"
        | "INVENTORY_SOURCE_SEQUENCE_CHANGED"
        | "INVENTORY_TRANSFER_LINE_CONFLICT"
        | "INVENTORY_UNAVAILABLE"
        | "INVOICE_AUTOPAY_PAYMENT_METHOD_REQUIRED"
        | "INVOICE_BALANCE_CHANGED"
        | "INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED"
        | "INVOICE_COLLECTION_BLOCKED"
        | "INVOICE_COLLECTION_CHANGED"
        | "INVOICE_COLLECTION_MODE_UNSUPPORTED"
        | "INVOICE_ISSUE_IN_PROGRESS"
        | "INVOICE_LATE_FEE_NOT_COLLECTIBLE"
        | "INVOICE_LATE_FEE_NOT_DUE"
        | "INVOICE_LATE_FEE_POLICY_REQUIRED"
        | "INVOICE_LINK_UNAVAILABLE"
        | "INVOICE_LOCKED_ORDER_FINANCIALS"
        | "INVOICE_NOT_COLLECTIBLE"
        | "INVOICE_NOT_CREDITABLE"
        | "INVOICE_NOT_DRAFT"
        | "INVOICE_NOT_ISSUED"
        | "INVOICE_NOT_MARKABLE_UNCOLLECTIBLE"
        | "INVOICE_NOT_REVERSIBLE"
        | "INVOICE_NOT_VOIDABLE"
        | "INVOICE_PAYMENT_ALREADY_SETTLED"
        | "INVOICE_PAYMENT_ATTEMPT_ACTIVE"
        | "INVOICE_PAYMENT_NOT_APPLIED"
        | "INVOICE_PAYMENT_PROCESSING"
        | "INVOICE_PAYMENT_RESOLVING"
        | "INVOICE_PAYMENT_TERM_CURRENCY_MISMATCH"
        | "INVOICE_PAYMENT_TERM_UNAVAILABLE"
        | "INVOICE_REMINDER_CHANGED"
        | "INVOICE_SCHEDULE_ENTRY_NOT_COLLECTIBLE"
        | "INVOICE_TAX_SNAPSHOT_MISSING"
        | "INVOICE_TAX_SNAPSHOT_STALE"
        | "ITEMS_REQUIRED"
        | "LIMIT_EXCEEDED"
        | "LIMIT_REACHED"
        | "LINE_ITEM_REFUND_QUANTITY_EXCEEDS_REFUNDABLE"
        | "LIST_RESERVED"
        | "LOCATION_NOT_ACTIVE"
        | "LOCATION_UNAVAILABLE"
        | "MAX_COMPLETIONS_BELOW_COMPLETED"
        | "MAX_TOTAL_QUANTITY_BELOW_SOLD"
        | "MERCHANT_ACCOUNT_DOMAIN_NOT_VERIFIED"
        | "MERCHANT_ACCOUNT_NOT_READY"
        | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REPAIR_REQUIRED"
        | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REQUIRED"
        | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_UNAVAILABLE"
        | "MERCHANT_ACCOUNT_SESSION_CONTROLLER_MISMATCH"
        | "MERCHANT_ACCOUNT_SESSION_INELIGIBLE"
        | "MERCHANT_ACCOUNT_SESSION_PROVIDER_GRANT_MISMATCH"
        | "MERCHANT_ACCOUNT_SESSION_TARGETED_REMEDIATION_UNAVAILABLE"
        | "MERCHANT_ACCOUNT_SESSION_UNMAPPABLE_REQUIREMENT_ID"
        | "MERCHANT_BILLING_SUSPENDED"
        | "MERCHANT_NOT_READY"
        | "MERCHANT_ONBOARDING_REQUIRED"
        | "MERCHANT_PROCESSING_RESTRICTED"
        | "MERCHANT_SELECTION_REQUIRED"
        | "MERCHANT_UNDER_REVIEW"
        | "METHOD_NOT_ALLOWED"
        | "MODIFIER_GROUP_UNAVAILABLE"
        | "MONEY_MOVEMENT_OPERATION_BLOCKED"
        | "MONEY_MOVEMENT_PROVIDER_NOT_CONFIGURED"
        | "MULTIPLE_IDENTITIES_FOUND"
        | "NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE"
        | "NOTHING_TO_REFUND"
        | "NOTHING_TO_REFUND_FOR_CHARGE"
        | "NOTHING_TO_REFUND_FOR_LINE_ITEM"
        | "NOTHING_TO_REFUND_FOR_TAX_BREAKDOWN"
        | "NOT_ALLOWED"
        | "NO_DISCOUNTABLE_BALANCE"
        | "NO_PAYMENTS_FOR_ORDER"
        | "ONBOARDING_CONTROLLER_VERSION_UNSUPPORTED"
        | "ONBOARDING_PROFILE_PROVIDER_MANAGED"
        | "OPERATION_IN_PROGRESS"
        | "ORDER_ALREADY_HAS_ACTIVE_INVOICE"
        | "ORDER_ALREADY_HAS_PAYMENTS"
        | "ORDER_ALREADY_HAS_REFUNDS"
        | "ORDER_ALREADY_PAID"
        | "ORDER_CHANGED_REFRESH_REQUIRED"
        | "ORDER_CHECKOUT_SESSION_CHANGED"
        | "ORDER_COLLECTION_ALREADY_ACTIVE"
        | "ORDER_COLLECTION_IN_PROGRESS"
        | "ORDER_CONFLICT"
        | "ORDER_CUSTOMER_ALREADY_SET"
        | "ORDER_CUSTOMER_CHECKOUT_ACTIVE"
        | "ORDER_CUSTOMER_NOT_UPDATABLE_AFTER_PAYMENT"
        | "ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED"
        | "ORDER_FINANCIAL_MUTATION_NOT_ALLOWED"
        | "ORDER_HAS_ACTIVE_PAYMENT_INTENT"
        | "ORDER_HAS_COLLECTED_MONEY"
        | "ORDER_HAS_MANUAL_PAYMENTS"
        | "ORDER_HAS_NO_LINE_ITEMS"
        | "ORDER_HAS_NO_REFUNDABLE_CHARGES"
        | "ORDER_HAS_NO_REFUNDABLE_LINE_ITEMS"
        | "ORDER_HAS_OPEN_CHECKOUT"
        | "ORDER_INVENTORY_EXCEPTION_NOT_RESOLVABLE"
        | "ORDER_INVENTORY_EXCEPTION_UNRESOLVED"
        | "ORDER_NOT_FULFILLABLE"
        | "ORDER_NOT_OPEN"
        | "ORDER_PAYMENT_ATTEMPT_ACTIVE"
        | "ORDER_PAYMENT_CUSTOMER_MISMATCH"
        | "ORDER_PAYMENT_INTENT_CREATE_IN_PROGRESS"
        | "ORDER_PAYMENT_INTENT_CREATE_REQUIRES_REVIEW"
        | "ORDER_PAYMENT_LEG_ALREADY_SETTLED"
        | "ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE"
        | "ORDER_RECEIPT_EMAIL_ON_FILE"
        | "ORDER_RECEIPT_EMAIL_UNAVAILABLE"
        | "ORDER_RECEIPT_MERCHANT_MANAGED"
        | "ORDER_RECEIPT_NOT_AVAILABLE"
        | "ORDER_RECEIPT_RECIPIENT_LIMIT_REACHED"
        | "ORDER_RECONCILIATION_REQUIRED"
        | "ORDER_TAX_NOT_READY"
        | "ORDER_TAX_NOT_UPDATABLE"
        | "ORDER_TOTALS_UNAVAILABLE"
        | "ORDER_TOTAL_BELOW_NET_COLLECTED"
        | "ORGANIZATION_CYCLE"
        | "ORGANIZATION_NOT_ACTIVE"
        | "PACKAGE_CHANGED"
        | "PACKAGE_PARENT_CHANGED"
        | "PAID_LINE_ITEM_MODIFIER_CHANGE_FORBIDDEN"
        | "PAID_LINE_ITEM_PRICE_CHANGE_FORBIDDEN"
        | "PAID_LINE_ITEM_QUANTITY_CHANGE_FORBIDDEN"
        | "PAID_LINE_ITEM_QUANTITY_DECREASE_FORBIDDEN"
        | "PAID_LINE_ITEM_REMOVAL_FORBIDDEN"
        | "PAID_LINE_ITEM_TAX_CHANGE_FORBIDDEN"
        | "PAUSE_NOT_ALLOWED"
        | "PAYMENT_ACTION_WINDOW_TOO_SHORT"
        | "PAYMENT_ALREADY_SETTLED"
        | "PAYMENT_AMOUNT_CHANGED"
        | "PAYMENT_ATTEMPT_ACTIVE"
        | "PAYMENT_ATTEMPT_MISMATCH"
        | "PAYMENT_ATTEMPT_NOT_CANCELABLE"
        | "PAYMENT_ATTEMPT_NOT_RESUMABLE"
        | "PAYMENT_ATTEMPT_REQUIRES_CAPTURE"
        | "PAYMENT_CONFIRMATION_STATE_CHANGED"
        | "PAYMENT_CONFIRM_IN_PROGRESS"
        | "PAYMENT_INTENT_DISPUTED"
        | "PAYMENT_INTENT_LIMIT_REACHED"
        | "PAYMENT_IN_PROGRESS"
        | "PAYMENT_LEG_SELECTION_REQUIRED"
        | "PAYMENT_LINK_CHANGED_RETRY"
        | "PAYMENT_LINK_FULFILLMENT_UNAVAILABLE"
        | "PAYMENT_LINK_INACTIVE"
        | "PAYMENT_LINK_MAX_COMPLETIONS_REACHED"
        | "PAYMENT_LINK_RESOLUTION_CONTEXT_REFRESH_REQUIRED"
        | "PAYMENT_LINK_RESOLUTION_REPLAY_UNAVAILABLE"
        | "PAYMENT_LINK_SALES_ENDED"
        | "PAYMENT_METHOD_CUSTOMER_MISMATCH"
        | "PAYMENT_METHOD_DOMAIN_OPERATION_IN_PROGRESS"
        | "PAYMENT_METHOD_HAS_ACTIVE_SUBSCRIPTIONS"
        | "PAYMENT_METHOD_NOT_ACTIVE"
        | "PAYMENT_METHOD_NOT_READY"
        | "PAYMENT_METHOD_ON_SESSION_ONLY"
        | "PAYMENT_METHOD_REQUIRED"
        | "PAYMENT_METHOD_SAVE_EMAIL_UNAVAILABLE"
        | "PAYMENT_METHOD_SAVE_NOT_PENDING"
        | "PAYMENT_METHOD_SAVE_NOT_READY"
        | "PAYMENT_NOT_REQUIRED"
        | "PAYMENT_OPERATION_IN_PROGRESS"
        | "PAYMENT_OPTION_LIMIT_EXCEEDED"
        | "PAYMENT_OPTION_NOT_READY"
        | "PAYMENT_OPTION_UNAVAILABLE"
        | "PAYMENT_PROCESSING_NOT_ENABLED"
        | "PAYMENT_PROCESSING_UNAVAILABLE"
        | "PAYMENT_PROCESSOR_REJECTED"
        | "PAYMENT_PROCESSOR_UNAVAILABLE"
        | "PAYMENT_REVIEW_OPEN"
        | "PAYMENT_SOURCE_UNAVAILABLE"
        | "PAYOUTS_NOT_ENABLED"
        | "PAYOUT_DELAY_PROVIDER_CONTROLLED"
        | "PAYOUT_DESTINATIONS_MANAGEMENT_UNAVAILABLE"
        | "PAYOUT_FEE_NOT_DETERMINABLE"
        | "PAYOUT_NOT_CANCELABLE"
        | "PAYOUT_SETTINGS_MANAGED_EXTERNALLY"
        | "PAYOUT_SETTINGS_MANAGEMENT_UNAVAILABLE"
        | "PAYOUT_STATUS_NOT_CANCELABLE"
        | "PLAN_NOT_ACTIVE"
        | "PROCESSING_FEE_PRICING_NOT_AUTHORIZED"
        | "PROCESSOR_NOT_CONFIGURED"
        | "PROFILE_UPDATE_STATUS_UNKNOWN"
        | "PROMOTION_CODES_DISABLED"
        | "PROMOTION_DECLINED"
        | "PROMOTION_HAS_ACTIVE_SUBSCRIPTION_OFFERS"
        | "PROMOTION_NOT_REDEEMABLE"
        | "PROMOTION_SHAPE_IMMUTABLE"
        | "PROVIDER_ACCOUNT_CLEANUP_REQUIRED"
        | "QUANTITY_CHANGE_NOT_ALLOWED"
        | "QUANTITY_NOT_ADJUSTABLE"
        | "RATE_LIMIT_EXCEEDED"
        | "REFUND_ADJUSTMENT_PAYMENT_INTENT_NOT_REFUNDABLE"
        | "REFUND_ADJUSTMENT_REFUND_EXCEEDS_PAYMENT_INTENT_REFUNDABLE"
        | "REFUND_ADJUSTMENT_REFUND_EXCEEDS_REMAINING"
        | "REFUND_SUBMISSION_DEADLINE_EXPIRED"
        | "REFUND_TENDER_CAPACITY_CONFLICT"
        | "REPORT_DOWNLOAD_EXPIRED"
        | "REQUEST_BLOCKED"
        | "REQUEST_BODY_TOO_LARGE"
        | "REQUEST_CANCELED"
        | "REQUEST_TIMEOUT"
        | "REQUIRED"
        | "RESOURCE_IN_USE"
        | "RESOURCE_NOT_FOUND"
        | "RETURN_CHECKOUT_REQUIRED"
        | "RETURN_COMPLETION_BLOCKED"
        | "RETURN_DISPOSITION_QUANTITY_EXCEEDED"
        | "RETURN_FULFILLMENT_ALLOCATION_AMBIGUOUS"
        | "RETURN_INSPECTION_QUANTITY_EXCEEDED"
        | "RETURN_LINE_CANCELLATION_CONFLICT"
        | "RETURN_POLICY_CONFLICT"
        | "RETURN_RECEIPT_QUANTITY_EXCEEDED"
        | "RETURN_SELF_SERVICE_NOT_ALLOWED"
        | "RETURN_SHIPMENT_QUANTITY_EXCEEDS_AVAILABLE"
        | "RETURN_VALUE_EXCEEDED"
        | "RETURN_VERSION_CONFLICT"
        | "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW"
        | "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION"
        | "RISK_RULE_LIMIT_REACHED"
        | "ROUTE_NOT_FOUND"
        | "RULE_RESERVED"
        | "SANDBOX_ARCHIVED"
        | "SANDBOX_INACTIVE"
        | "SAVE_PAYMENT_METHOD_CODE_LIMIT_REACHED"
        | "SAVE_PAYMENT_METHOD_NOT_OFFERED"
        | "SAVE_PAYMENT_METHOD_VERIFICATION_REQUIRED"
        | "SENSITIVE_IDEMPOTENCY_RESULT_INVALID"
        | "SERVICE_UNAVAILABLE"
        | "SETUP_SOURCE_NON_ZERO_ORDER"
        | "SHIPMENT_CHANGED"
        | "SHIPMENT_PACKAGE_ITEM_QUANTITY_EXCEEDS_FULFILLMENT"
        | "SHIPMENT_PACKAGE_NOT_VOIDABLE"
        | "SKIP_LIMIT_REACHED"
        | "SKIP_NOT_ALLOWED"
        | "STANDARD_PAYOUTS_UNAVAILABLE"
        | "STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE"
        | "SUBSCRIPTION_DELIVERY_LINES_NOT_COMBINABLE"
        | "SUBSCRIPTION_DELIVERY_MIGRATION_IN_PROGRESS"
        | "SUBSCRIPTION_DELIVERY_MIGRATION_TARGET_UNAVAILABLE"
        | "SUBSCRIPTION_DELIVERY_PROFILE_ACTION_REQUIRED"
        | "SUBSCRIPTION_DELIVERY_PROFILE_MISSING"
        | "SUBSCRIPTION_DELIVERY_UNAVAILABLE"
        | "SUBSCRIPTION_NEXT_BILLING_AT_BEFORE_PERIOD_START"
        | "SUBSCRIPTION_NEXT_BILLING_AT_TOO_FAR"
        | "SUBSCRIPTION_OFFER_ARCHIVED"
        | "SUBSCRIPTION_OFFER_NOT_ACTIVE"
        | "SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE"
        | "SUBSCRIPTION_OFFER_TARGET_CONFLICT"
        | "SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS"
        | "SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED"
        | "SUBSCRIPTION_START_OVERRIDE_NOT_ALLOWED"
        | "SWAP_NOT_ALLOWED"
        | "TAX_BREAKDOWN_REFUND_EXCEEDS_REMAINING"
        | "TAX_CATEGORY_REQUIRED"
        | "TEST_PROCESSOR_NOT_CONFIGURED"
        | "TICKET_PREFIX_LOCKED"
        | "TIP_ALLOCATION_CAPACITY_EXCEEDED"
        | "UNKNOWN_FIELD"
        | "UNSUPPORTED_CONTENT_TYPE"
        | "UNSUPPORTED_PROCESSOR"
        | "VARIANT_NOT_SELLABLE"
        | "VERSION_CONFLICT"
        | "WEBHOOK_DELIVERY_IN_FLIGHT"
        | "WEBHOOK_ENDPOINT_NOT_ACTIVE"
        | "WEBHOOK_ENDPOINT_NOT_SUBSCRIBED"
        | "WEBHOOK_EVENT_PAYLOAD_EXPIRED"
        | "WORKLOAD_IDENTITY_LIMIT_REACHED"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link ErrorDetail}. Individual failures belonging to this error.
     * Present on every validation error and every error carrying facts. On non-validation errors
     * the first item repeats the top-level code and param. Facts appear only in typed detail
     * fields; param contains public request field paths. Shape $[] (Value): {@link ErrorDetail}.
     * One specific failure within an error, with a `code` and `message` plus fields that depend on
     * the code, such as the `param`, resource, quantity, or amount involved.
     */
    "details"?: Array<ErrorDetail>;
    /**
     * Shape $ (Value): string. Error reference at https://developers.withflintpay.com/docs/errors#
     * followed by the lowercase error code.
     */
    "doc_url": string;
    /**
     * Shape $ (Value): string. System boundary responsible for correcting the failure. Value enum:
     * "merchant", "integration", "flint".
     */
    "error_source": "merchant" | "integration" | "flint" | (string & {});
    /**
     * Shape $ (Value): string. Human-readable explanation for your logs. The wording can change,
     * so branch on code, and do not show it to buyers as is.
     */
    "message": string;
    /**
     * Shape $ (Value): string. Public JSON request field path that caused the failure, such as
     * line_items[0].name, when the failure concerns one field.
     */
    "param"?: string;
    /**
     * Shape $ (Value): {@link ErrorRemediation} or null. Recovery guidance: whether retrying can
     * succeed and what to do next. Shape $.anyOf[1] (Value): {@link ErrorRemediation}. Recovery
     * guidance for an error: whether and how to `retry`, plus next steps and suggested actions.
     * Shape $.anyOf[2] (Value): null.
     */
    "remediation": ((ErrorRemediation) | (null));
    /**
     * Shape $ (Value): string. ID of this request, also sent in the X-Request-Id response header.
     * Include it when you contact Flint support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /**
     * Shape $ (Value): string. Path of this request's log in the request-logs API, present when
     * the credential can read it. Flint writes the log just after responding, so a read sent
     * immediately can return 404 RESOURCE_NOT_FOUND; retry after a second.
     */
    "request_log_url"?: string;
    /**
     * Shape $ (Value): string. Coarse category determined by the HTTP status. 400:
     * validation_error; 401: authentication_error; 403: authorization_error; 404: not_found_error;
     * 405, 410, 413, 415, 499: protocol_error; 409: conflict_error; 429: rate_limit_error; 502:
     * external_service_error; 503: unavailable_error; 504: timeout_error. All other error
     * statuses: internal_error. Value enum: "authentication_error", "authorization_error",
     * "validation_error", "not_found_error", "conflict_error", "rate_limit_error",
     * "external_service_error", "timeout_error", "unavailable_error", "internal_error",
     * "protocol_error".
     */
    "type": "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
};
/**
 * Shape $ (Value): {@link ErrorRemediation}. Recovery guidance for an error: whether and how to
 * `retry`, plus next steps and suggested actions.
 */
export type ErrorRemediation = {
    /**
     * Shape $ (Value): Array of {@link NextAction}. Suggested actions for resolving the error,
     * including the target resource and any required input. Shape $[] (Value): {@link NextAction}.
     * A suggested next step for resolving an error, warning, or blocked state, such as the API
     * operation to call or the scope it needs.
     */
    "next_actions"?: Array<NextAction>;
    /** Shape $ (Value): string. What to change or check before attempting the operation again. */
    "next_steps"?: string;
    /**
     * Shape $ (Value): string. How to recover: same_request resends the identical request with the
     * same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a
     * new key; none requires correcting the request or following next_steps or next_actions. Value
     * enum: "same_request", "after_refresh", "none".
     */
    "retry": "same_request" | "after_refresh" | "none" | (string & {});
};
/**
 * Shape $ (Value): {@link ErrorResourceReference}. A reference to a public resource named in an
 * error, with its type, ID, and current status when available.
 */
export type ErrorResourceReference = {
    /** Shape $ (Value): string. Public Flint ID of the referenced resource. */
    "resource_id": string;
    /**
     * Shape $ (Value): string. Stable public resource name for the referenced resource: a
     * ResourceType value, or resource when the resource has no public type.
     */
    "resource_type": string;
    /** Shape $ (Value): string. Current public status of the referenced resource when available. */
    "status"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
 * of a customer ID when the customer is expanded.
 */
export type ExpandedCustomerSummary = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): string or null. Customer email, or null when the customer has none. Unique
     * among the environment's customers.
     */
    "email": string | null;
    /** Shape $ (Value): string or null. Customer name, or null when none. */
    "name": string | null;
    /** Shape $ (Value): string or null. Customer phone number, or null when none. */
    "phone": string | null;
    /** Shape $ (Value): string.  Value enum: "active", "deletion_processing", "deleted". */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including status,
 * due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded.
 */
export type ExpandedInvoiceSummary = {
    /**
     * Shape $ (Value): string. Whether collection is blocked. While it is inventory_blocked,
     * collection attempts return INVOICE_COLLECTION_BLOCKED. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status"?: "none" | "inventory_blocked" | "resolved" | (string & {});
    /** Shape $ (Value): string. When the invoice was created. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Customer billed by the invoice. Absent when the invoice has no
     * customer.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. When payment is due. With payment terms, issue sets it from
     * issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no
     * due date. Format: date-time.
     */
    "due_at"?: string;
    /** Shape $ (Value): string. Flint invoice ID. */
    "invoice_id": string;
    /**
     * Shape $ (Value): string. Sequential document number assigned when the invoice is issued.
     * Absent on a draft.
     */
    "invoice_number"?: string;
    /**
     * Shape $ (Value): boolean. Whether the invoice is open or partially_paid and past due with a
     * balance remaining, as is_overdue on the full Invoice reports it.
     */
    "is_overdue": boolean;
    /** Shape $ (Value): string. The order the invoice bills. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. What is still owed, as outstanding_money on the full
     * Invoice reports it: never below zero, 0 on paid, credited, uncollectible, and void invoices,
     * and equal to total_money on a draft. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payments collected toward this invoice, online or as
     * recorded manual payments, minus reversed payments, including payments toward late fees.
     * Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Shape $ (Value): string. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Money refunded to the buyer after collection. Refunds
     * don't reopen the balance; refund_status summarizes them. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): string. Current invoice status. paid and credited close the current balance
     * and can reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. void and uncollectible are final. Refunds change
     * refund_status without reopening the balance. Value enum: "draft", "open", "partially_paid",
     * "paid", "void", "uncollectible", "credited".
     */
    "status": "draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The invoice document total, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money on the full invoice. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
 * payment and refund status, and pricing and settlement amounts, returned when the order is
 * expanded.
 */
export type ExpandedOrderSummary = {
    /**
     * Shape $ (Value): {@link CheckoutBuyerContact}. Buyer contact recorded on the order,
     * including guest contact when retained. Omitted when the order has no recorded contact. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /**
     * Shape $ (Value): string. When the order closed. Present exactly when status is closed. Set
     * once at the transition and never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Shape $ (Value): string. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. When the order was created, in RFC3339 format. Format: date-time.
     */
    "created_at"?: string;
    /** Shape $ (Value): string. Customer associated with the order, when one is set. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed".
     */
    "fulfillment_status"?: "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "canceled"
        | "not_applicable"
        | "closed"
        | (string & {});
    /** Shape $ (Value): string. Stable identifier of the expanded order. */
    "order_id": string;
    /** Shape $ (Value): string. Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * Shape $ (Value): Array of string. Payment intents associated with the order. Shape $[]
     * (Value): string.
     */
    "payment_intent_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Collection progress. An invoice write-off also completes collection
     * without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Shape $ (Value): {@link PricingAmounts}. Order totals before accounting for collected
     * payments and refunds. The money totals for an order or invoice: subtotal, discounts,
     * charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * Shape $ (Value): string. Refund progress for collected money. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): {@link SettlementAmounts}. Payments, refunds, credits, and amounts still
     * owed for the order. How much of an order has been paid, refunded, credited, written off, and
     * settled as tips, and what balance and outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * Shape $ (Value): string. Whether the order still accepts changes and new payments. Refunds,
     * fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value
     * enum: "open", "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Shape $ (Value): string. When the order was last updated, in RFC3339 format. Format:
     * date-time.
     */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedOrganizationSummary}. An organization's summary fields, such as
 * its name, status, and parent, returned when the organization is expanded.
 */
export type ExpandedOrganizationSummary = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "organization_id": string;
    /** Shape $ (Value): string. */
    "parent_organization_id"?: string;
    /**
     * Shape $ (Value): string. Current status. Archived: deleted, and still readable by ID. Value
     * enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
 * tracking, status, and supported actions, returned when the package is expanded.
 */
export type ExpandedPackageSummary = {
    /** Shape $ (Value): string. Carrier transporting the package. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string. When the package was created, in RFC3339 format. Format: date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. When the package was delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Null when no estimate is set. Retained after delivery as history. This estimate is
     * separate from the fulfillment's promised shipment window. Format: date-time.
     */
    "expected_delivery_at"?: string | null;
    /** Shape $ (Value): string. Fulfillment whose items are in the package. */
    "fulfillment_id": string;
    /** Shape $ (Value): string. Stable identifier of the expanded package. */
    "package_id": string;
    /** Shape $ (Value): string. Carrier service used for the package. */
    "service_code"?: string;
    /** Shape $ (Value): string. Shipment carrying this package. */
    "shipment_id": string;
    /**
     * Shape $ (Value): string. When the package was shipped, in RFC3339 format. Format: date-time.
     */
    "shipped_at"?: string;
    /**
     * Shape $ (Value): string. Current package lifecycle state. - `created`: The package record
     * exists but has not been packed or handed off. - `packed`: The package is packed and awaiting
     * carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The
     * carrier is moving the package through its network. - `out_for_delivery`: The package is on
     * its final delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was
     * returned toward or to its origin. - `voided`: The package was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. Read-only actions currently supported for this package. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped". Shape $[] (Value):
     * string. Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception",
     * "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
        | (string & {})>;
    /**
     * Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified.
     */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): string. When the package was last updated, in RFC3339 format. Format:
     * date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Monotonic package version for expected_version checks. Use
     * an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
 * including amount, status, and capture method, returned when the payment intent is expanded.
 */
export type ExpandedPaymentIntentSummary = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. When money is collected. Defaults to automatic. Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. Customer linked to this payment intent. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Order this payment intent belongs to. Create it through the order
     * and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id.
     */
    "order_id"?: string;
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): {@link PaymentSourceSummary}. Summary of the card or bank account used for
     * the payment. Absent until a payment source is attached. A summary of the payment source used
     * for a payment, by funding-method family, with card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * Shape $ (Value): string. How much of captured_money has been refunded, including value
     * issued as store credit, based on refunded_money. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedPaymentLinkSummary}. A payment link's summary fields, including
 * name, type, status, and URL, returned when the payment link is expanded.
 */
export type ExpandedPaymentLinkSummary = {
    /** Shape $ (Value): integer. Format: int32. */
    "completed_count": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "payment_link_id": string;
    /** Shape $ (Value): string.  Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Shape $ (Value): string. */
    "url"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedPaymentMethodSummary}. A payment method's summary fields,
 * including type, status, and card details, returned when the payment method is expanded.
 */
export type ExpandedPaymentMethodSummary = {
    /**
     * Shape $ (Value): {@link CardDetails}. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used.
     */
    "card"?: CardDetails;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /** Shape $ (Value): string. */
    "payment_method_id": string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "active", "expired", "archived", "failed".
     */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Shape $ (Value): string.  Value enum: "card". */
    "type": "card" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedPayoutDestinationSummary}. A payout destination's summary
 * fields, such as type, bank name, last four digits, and status, returned when the destination is
 * expanded.
 */
export type ExpandedPayoutDestinationSummary = {
    /**
     * Shape $ (Value): Array of string. Payout methods available through Flint for this
     * destination. Only standard is currently available. [] enum: "standard". Shape $[] (Value):
     * string. Value enum: "standard".
     */
    "available_payout_methods": Array<"standard" | (string & {})>;
    /** Shape $ (Value): string. */
    "bank_name"?: string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): boolean. */
    "default_for_currency": boolean;
    /** Shape $ (Value): string. */
    "last4"?: string;
    /** Shape $ (Value): string. */
    "payout_destination_id": string;
    /**
     * Shape $ (Value): string. Current status. Archived: deleted, and still readable by ID. Value
     * enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     */
    "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
    /**
     * Shape $ (Value): string. Destination type. Unmapped destination types are returned as other.
     * Value enum: "bank_account", "debit_card", "other".
     */
    "type": "bank_account" | "debit_card" | "other" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
 * method, status, and arrival date, returned when the payout is expanded.
 */
export type ExpandedPayoutSummary = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Calendar date the bank is expected to receive the funds, in
     * YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
     */
    "arrival_date"?: string;
    /**
     * Shape $ (Value): string. Balance source this payout draws from. Flint chooses the source
     * when balance_source_type is omitted at create. Clients must accept source types added in
     * future releases. Value enum: "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Payout method. instant can appear on imported payouts; unmapped
     * methods are returned as other. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "payout_destination_id"?: string;
    /** Shape $ (Value): string. */
    "payout_id": string;
    /** Shape $ (Value): string.  Value enum: "none", "reversing", "reversed". */
    "reversal_status": "none" | "reversing" | "reversed" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "pending", "in_transit", "paid", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "paid" | "failed" | "canceled" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
 * direction, status, and package count, returned when the shipment is expanded.
 */
export type ExpandedShipmentSummary = {
    /**
     * Shape $ (Value): string. When the shipment was created, in RFC3339 format. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. When the shipment was delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): string. Whether the shipment sends items to the buyer or returns items to
     * the merchant. Value enum: "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /** Shape $ (Value): string. Fulfillment associated with this shipment. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): string. When the carrier accepted the shipment, in RFC3339 format. Format:
     * date-time.
     */
    "handed_off_at"?: string;
    /**
     * Shape $ (Value): integer. Total number of packages attached to the shipment, including
     * voided packages. Format: int32. minimum: 0.
     */
    "package_count": number;
    /**
     * Shape $ (Value): string. ID of the Return this shipment sends back. Present only on return
     * shipments.
     */
    "return_id"?: string;
    /** Shape $ (Value): string. Stable identifier of the expanded shipment. */
    "shipment_id": string;
    /**
     * Shape $ (Value): string. When the shipment was shipped, in RFC3339 format. Format:
     * date-time.
     */
    "shipped_at"?: string;
    /**
     * Shape $ (Value): string. Read-only shipment state. - `created`: The shipment leg exists but
     * has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting
     * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`:
     * The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment
     * is on its final delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /**
     * Shape $ (Value): string. When the shipment was last updated, in RFC3339 format. Format:
     * date-time.
     */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields,
 * including name, billing interval, currency, and status, returned when the plan is expanded.
 */
export type ExpandedSubscriptionPlanSummary = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. maxItems: 12. uniqueItems:
     * true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlanLineItem}. Shape $[] (Value): {@link
     * SubscriptionPlanLineItem}. A line item on a subscription plan, from a variant or bundle,
     * with its quantity, price, and variants a subscriber can swap to.
     */
    "line_items"?: Array<SubscriptionPlanLineItem>;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups
     * with PLAN_NOT_ACTIVE while existing subscriptions keep renewing. Archived plans are
     * read-only and their status is set only by DELETE
     * /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_plan_id": string;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary fields, including
 * status, billing period, and next billing time, returned when the subscription is expanded.
 */
export type ExpandedSubscriptionSummary = {
    /** Shape $ (Value): integer. Format: int32. */
    "billing_anchor_day": number;
    /** Shape $ (Value): boolean. */
    "cancel_at_period_end": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_period_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_period_start_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. When Flint next starts a scheduled renewal charge, as an RFC3339
     * timestamp. Present only while a trialing or active subscription has a billing date and isn't
     * set to cancel at the end of its period. Absent when no renewal is scheduled: a paused
     * subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date
     * in missed_billing_at and retries at next_retry_at, an incomplete one retries at
     * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * awaiting_billing_schedule. Format: date-time.
     */
    "next_billing_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "trialing", "active", "paused", "past_due", "canceled",
     * "incomplete", "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id": string;
    /** Shape $ (Value): string. */
    "subscription_plan_id": string;
    /** Shape $ (Value): string.  Value enum: "subscription_plan", "subscription_offer". */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** Shape $ (Value): {@link FeedbackReport}. Feedback submitted about the developer experience. */
export type FeedbackReport = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Server-assigned time when Flint stored the report. Format:
     * date-time.
     */
    "created_at": string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Server-assigned ID of the stored feedback report. pattern:
     * ^fbr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "feedback_report_id": string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "rating", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<FeedbackReportRating & object, readonly unknown[]>)
    | (Exclude<FeedbackReportNarrative & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link FeedbackReportListResponse}. A page of `FeedbackReport` objects. */
export type FeedbackReportListResponse = {
    /**
     * Shape $ (Value): Array of {@link FeedbackReport}. Shape $[] (Value): {@link FeedbackReport}.
     * Feedback submitted about the developer experience.
     */
    "data": Array<FeedbackReport>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link FeedbackReportNarrative}. Feedback submitted about the developer
 * experience.
 */
export type FeedbackReportNarrative = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Server-assigned time when Flint stored the report. Format:
     * date-time.
     */
    "created_at": string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Server-assigned ID of the stored feedback report. pattern:
     * ^fbr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "feedback_report_id": string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /**
     * Shape $ (Value): string. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/**
 * Shape $ (Value): {@link FeedbackReportRating}. Feedback submitted about the developer
 * experience.
 */
export type FeedbackReportRating = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Server-assigned time when Flint stored the report. Format:
     * date-time.
     */
    "created_at": string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Server-assigned ID of the stored feedback report. pattern:
     * ^fbr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "feedback_report_id": string;
    /** Shape $ (Value): string. Classification of the feedback. Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
});
