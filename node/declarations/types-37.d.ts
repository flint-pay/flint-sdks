import type { InputValue } from '../runtime.js';
import type { PauseSubscriptionRequestInput, PartnerWebhookEnvelope } from './types-44.js';
import type { RenewSubscriptionRequestInput, ResourceVersionRequestInput, ResponseMeta } from './types-54.js';
import type { SaveMeGiftCardRequestInput } from './types-59.js';
import type { SkipMeSubscriptionCycleRequestInput } from './types-60.js';
import type { UpdateCustomerAddressRequestInput, UpdateCustomerEmailPreferencesRequestInput } from './types-66.js';
import type { UpdateMeRequestInput, UpdateMeSubscriptionLineItemRequestInput, UpdateMeSubscriptionRequestInput } from './types-67.js';
import type { Address } from './types-0.js';
import type { ImageAttachment } from './types-28.js';
import type { MetadataMap, MerchantWebhookEnvelope, MerchantSignupTermsAcceptance } from './types-38.js';
import type { DisputeResponseSessionStripeAccountSession } from './types-23.js';
import type { MoneyValue } from './types-39.js';
import type { DisputesAcceptParams } from './types-24.js';
import type { CapabilityReadiness } from './types-5.js';
import type { ReadinessAxis, ReadinessRequirements } from './types-52.js';
import type { WebhookMerchant } from './types-70.js';
import type { PlatformFeeCap } from './types-49.js';
export type MeListReturnsParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by decision status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "approved", "partially_approved", "declined". Value enum:
     * "pending", "approved", "partially_approved", "declined". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "pending", "approved", "partially_approved", "declined". anyOf[1][]
     * (Value): string. Value enum: "pending", "approved", "partially_approved", "declined".
     * anyOf[2] (Value): string. Value enum: "pending", "approved", "partially_approved",
     * "declined".
     */
    "decision_status"?: InputValue<("pending" | "approved" | "partially_approved" | "declined")
        | readonly ("pending" | "approved" | "partially_approved" | "declined")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception". Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1][] (Value): string. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[2]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")
        | readonly ("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")[]>;
    /**
     * Filter by order id. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_selected", "pending", "partially_completed", "requires_action",
     * "completed", "failed". Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
     * "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed". anyOf[2] (Value): string.
     * Value enum: "not_selected", "pending", "partially_completed", "requires_action",
     * "completed", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_completed" | "requires_action" | "completed" | "failed")
        | readonly ("not_selected" | "pending" | "partially_completed" | "requires_action" | "completed" | "failed")[]>;
    /** Filter by return number. */
    "return_number"?: InputValue<string>;
    /**
     * Filter by return reason id. pattern: ^rrsn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "requested", "open", "completed", "declined", "canceled". Value enum: "requested",
     * "open", "completed", "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value):
     * string. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2]
     * (Value): string. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type MeListShipmentsParams = {
    /**
     * Optional order ID filter. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Optional fulfillment ID filter. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: InputValue<string>;
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
     * Filter by linked Return ID. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Inclusive lower bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "handed_off_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "handed_off_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package-derived shipment status. Values within this filter are combined with OR.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided". Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided". anyOf[1][] (Value): string. Value enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided". anyOf[2] (Value): string. Value enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided".
     */
    "status"?: InputValue<("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")
        | readonly ("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")[]>;
};
export type MeListSubscriptionPaymentRetriesParams = {
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
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
};
export type MeListSubscriptionsParams = {
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
     * Filter by subscription status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled". Value enum: "trialing", "active", "paused", "past_due", "canceled",
     * "incomplete", "scheduled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * anyOf[1][] (Value): string. Value enum: "trialing", "active", "paused", "past_due",
     * "canceled", "incomplete", "scheduled". anyOf[2] (Value): string. Value enum: "trialing",
     * "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     */
    "status"?: InputValue<("trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled")
        | readonly ("trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled")[]>;
    /**
     * Separate subscriptions scheduled by Flint (flint) from those whose billing dates the store
     * supplies (external). Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "flint", "external". Value enum: "flint", "external". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "flint", "external". anyOf[1][] (Value): string.
     * Value enum: "flint", "external". anyOf[2] (Value): string. Value enum: "flint", "external".
     */
    "billing_schedule_owner"?: InputValue<("flint" | "external") | readonly ("flint" | "external")[]>;
    /**
     * When true, returns subscriptions scheduled to cancel at the end of the current period that
     * are not yet canceled. When false, returns every other subscription.
     */
    "cancel_at_period_end"?: InputValue<boolean>;
    /**
     * Filter by the subscription's selected delivery method. pattern:
     * ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: InputValue<string>;
    /**
     * Find subscriptions needing a new delivery method, address, or rate by the current
     * delivery_hold reason. Does not match upcoming delivery issues. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[1][]
     * (Value): string. Value enum: "method_unavailable", "destination_not_served",
     * "rate_unavailable". anyOf[2] (Value): string. Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable".
     */
    "hold_reason"?: InputValue<("method_unavailable" | "destination_not_served" | "rate_unavailable")
        | readonly ("method_unavailable" | "destination_not_served" | "rate_unavailable")[]>;
    /**
     * Filter by Flint subscription plan ID. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by subscription_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "next_billing_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
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
     * Inclusive lower bound on next_billing_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "next_billing_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on next_billing_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "next_billing_before"?: InputValue<string | globalThis.Date>;
    /**
     * Load subscriptions needing your attention. True matches subscriptions with a delivery hold,
     * an upcoming delivery hold, or a delivery-action-required pause, plus past_due subscriptions
     * and active or incomplete subscriptions whose billing date passed more than 24 hours ago
     * without payment. False is the exact complement. Other filters still apply.
     */
    "needs_attention"?: InputValue<boolean>;
};
export type MeListTicketsParams = {
    /**
     * Only tickets belonging to this order. Another buyer's order returns no tickets. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
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
export type MePauseSubscriptionParams = (InputValue<PauseSubscriptionRequestInput>);
export type MeRemoveGiftCardParams = {};
export type MeRenewSubscriptionParams = (InputValue<RenewSubscriptionRequestInput>);
export type MeResumeSubscriptionParams = (InputValue<ResourceVersionRequestInput>);
export type MeRevokeRememberedBuyerParams = {};
export type MeRevokeSessionParams = {};
export type MeSaveGiftCardParams = (SaveMeGiftCardRequestInput);
export type MeSendOrderReceiptParams = {};
export type MeSkipSubscriptionCycleParams = (InputValue<SkipMeSubscriptionCycleRequestInput>);
export type MeUpdateAddressParams = (InputValue<UpdateCustomerAddressRequestInput>);
export type MeUpdateEmailPreferencesParams = (InputValue<UpdateCustomerEmailPreferencesRequestInput>);
export type MeUpdateParams = (InputValue<UpdateMeRequestInput>);
export type MeUpdateSubscriptionLineItemParams = (InputValue<UpdateMeSubscriptionLineItemRequestInput>);
export type MeUpdateSubscriptionParams = (InputValue<UpdateMeSubscriptionRequestInput>);
/** The business accepting payments. */
export type Merchant = {
    /**
     * The merchant's business address. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /**
     * Default API version for requests without a Flint-Version header. Shared across live and test
     * environments.
     */
    "api_version"?: string;
    /**
     * When the merchant's default API version last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "api_version_changed_at"?: string;
    /**
     * When the merchant's default API version was first set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "api_version_pinned_at"?: string;
    /** Previous API version, present while a supported rollback is available. */
    "api_version_previous"?: string;
    /**
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "api_version_rollback_expires_at"?: string;
    /**
     * Business name buyers see on checkout, payment links, and receipts. Once the merchant starts
     * verification, it stays in sync with the business name on the live Stripe account: a change
     * on either side applies, and the latest change wins.
     */
    "business_name"?: string;
    /**
     * Merchant's business type. - `other`: A business type Flint does not map yet. Value enum:
     * "individual", "company", "non_profit", "government_entity", "other".
     */
    "business_type"?: "individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The account's contact email address. A new account starts with the sign-up email. `null`
     * when none is set.
     */
    "email": string | null;
    /**
     * A square image, at least 128 by 128 pixels, shown where the store needs a small mark:
     * browser tabs and compact headers. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "icon"?: ImageAttachment;
    /**
     * The merchant's public brand mark. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "logo"?: ImageAttachment;
    /** Stable identifier of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** The account's contact phone number, in international format such as +12125551234. */
    "phone"?: string;
    /**
     * Whether the merchant can accept payments and receive payouts, and what is still needed. A
     * merchant's readiness to accept payments and receive payouts, with per-capability status and
     * outstanding requirements.
     */
    "readiness": MerchantReadiness;
    /**
     * Whether Flint lets the account operate. `readiness` says whether payments and payouts are
     * available. Value enum: "active", "suspended", "restricted", "closed".
     */
    "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
    /** Support email address shown to buyers, for example on receipts and checkout. */
    "support_email"?: string;
    /** Support phone number shown to buyers, in international format such as +12125551234. */
    "support_phone"?: string;
    /** Support page shown to buyers. */
    "support_url"?: string;
    /**
     * Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
     * locations, notifications, and reporting when a request omits its time zone. Omitted when
     * unset; UTC then applies. Existing resources keep their saved time zone.
     */
    "timezone"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Merchant version. Profile, status, and API version changes advance this version, including
     * business name and business type changes synced from the payment provider. Readiness updates
     * alone do not. Format: int64. minimum: 1.
     */
    "version": number;
    /** The business's website. */
    "website_url"?: string;
};
/**
 * A merchant account session: the browser initialization data, allowed components, effective
 * policy, and launch token for embedded account management.
 */
export type MerchantAccountSession = {
    /**
     * Browser initialization data required to mount embedded account-management components. These
     * instructions are not merchant account resource state. Short-lived browser initialization
     * data for an embedded merchant account session.
     */
    "client_session": MerchantAccountSessionClientSession;
    /**
     * The components the session authorizes, in catalog order. minItems: 1. [] enum:
     * "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner", "payments". [] (Value): string. Value enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner",
     * "payments".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | "payments"
        | (string & {})>;
    /**
     * The collection policy Flint applied to the session. The collection policy applied to a
     * merchant account session: which requirements it targets, how they are collected, and whether
     * future requirements are included.
     */
    "effective_policy": MerchantAccountSessionEffectivePolicy;
    /**
     * Signed Flint token to exchange at POST /v1/merchant-account-session-refreshes. Each new
     * refresh operation rotates this token; a same-key retry replays the original token. The
     * caller must still authenticate and authorize the human using the session.
     */
    "launch_token": string;
    /**
     * Expiry of launch_token in UTC. After expiry, create a new merchant account session. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "launch_token_expires_at": string;
};
/** Short-lived browser initialization data for an embedded merchant account session. */
export type MerchantAccountSessionClientSession = {
    /**
     * Expiry of the embedded account session client secret in UTC. Connect.js calls
     * fetchClientSecret to obtain a new secret when needed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Stripe Connect initialization credentials and authorized component collection options.
     * Connect initializes from the account session client secret and does not take a connected
     * account ID. Stripe Connect initialization data for a merchant account session: the account
     * session, publishable key, and authorized components.
     */
    "stripe": MerchantAccountSessionStripe;
};
/**
 * Creates an embedded account session for a non-empty unique set of Flint components. At most one
 * component may use onboarding policy fields.
 */
export type MerchantAccountSessionCreateRequest = {
    /**
     * Which requirements the session collects. If omitted, `incremental` for an account that
     * hasn't finished onboarding, otherwise `upfront`. Only `account_onboarding` and
     * `account_management` take it. Value enum: "upfront", "incremental".
     */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /**
     * The embedded components the session opens, such as `account_onboarding`. Send each component
     * once. A partner app install token can open only `account_onboarding` and
     * `notification_banner`; another component returns `400 INVALID_REQUEST` with detail
     * `NOT_ALLOWED`. With an API key or CLI login, `payments` also requires
     * `payments.payment_intents.read` and `payments.disputes.write`; without them the request
     * returns `403 INSUFFICIENT_SCOPE`. minItems: 1. maxItems: 7. uniqueItems: true. [] enum:
     * "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner", "payments". [] (Value): string. Value enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner",
     * "payments".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | "payments"
        | (string & {})>;
    /**
     * Whether the session also collects requirements that will apply later. If omitted, `omit`
     * while onboarding isn't finished or while something is due, otherwise `include`. Only
     * `account_onboarding` and `account_management` take it. Value enum: "omit", "include".
     */
    "future_requirements"?: "omit" | "include" | (string & {});
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. At most 100 codes, each up to 255 UTF-8 bytes after trimming
     * surrounding whitespace. Only `account_onboarding` takes them. maxItems: 100. [] enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "targeted_requirements"?: Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
};
/**
 * Creates an embedded account session for a non-empty unique set of Flint components. At most one
 * component may use onboarding policy fields.
 */
export type MerchantAccountSessionCreateRequestInput = {
    /**
     * Which requirements the session collects. If omitted, `incremental` for an account that
     * hasn't finished onboarding, otherwise `upfront`. Only `account_onboarding` and
     * `account_management` take it. Value enum: "upfront", "incremental".
     */
    "collection_strategy"?: "upfront" | "incremental";
    /**
     * The embedded components the session opens, such as `account_onboarding`. Send each component
     * once. A partner app install token can open only `account_onboarding` and
     * `notification_banner`; another component returns `400 INVALID_REQUEST` with detail
     * `NOT_ALLOWED`. With an API key or CLI login, `payments` also requires
     * `payments.payment_intents.read` and `payments.disputes.write`; without them the request
     * returns `403 INSUFFICIENT_SCOPE`. minItems: 1. maxItems: 7. uniqueItems: true. [] enum:
     * "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner", "payments". [] (Value): string. Value enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner",
     * "payments".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | "payments">;
    /**
     * Whether the session also collects requirements that will apply later. If omitted, `omit`
     * while onboarding isn't finished or while something is due, otherwise `include`. Only
     * `account_onboarding` and `account_management` take it. Value enum: "omit", "include".
     */
    "future_requirements"?: "omit" | "include";
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. At most 100 codes, each up to 255 UTF-8 bytes after trimming
     * surrounding whitespace. Only `account_onboarding` takes them. maxItems: 100. [] enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "targeted_requirements"?: Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four">;
};
/**
 * The collection policy applied to a merchant account session: which requirements it targets, how
 * they are collected, and whether future requirements are included.
 */
export type MerchantAccountSessionEffectivePolicy = {
    /**
     * How the session collects requirements. Omitted when `targeting` is `none`. Value enum:
     * "upfront", "incremental".
     */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /**
     * Whether the session also collects requirements that will apply later. Omitted when
     * `targeting` is `none`. Value enum: "omit", "include".
     */
    "future_requirements"?: "omit" | "include" | (string & {});
    /**
     * Which requirements the session's policy-aware components collect. Value enum: "none", "all",
     * "all_due", "targeted".
     */
    "targeting": "none" | "all" | "all_due" | "targeted" | (string & {});
};
/**
 * Refreshes a merchant account session from its signed launch token. No create fields are
 * accepted.
 */
export type MerchantAccountSessionRefreshRequest = {
    /**
     * The `launch_token` of the session to refresh. The response carries a new token to use for
     * the next refresh. minLength: 1.
     */
    "launch_token": string;
};
/**
 * Refreshes a merchant account session from its signed launch token. No create fields are
 * accepted.
 */
export type MerchantAccountSessionRefreshRequestInput = MerchantAccountSessionRefreshRequest;
/** A response containing `MerchantAccountSession` data. */
export type MerchantAccountSessionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant account
     * session: the browser initialization data, allowed components, effective policy, and launch
     * token for embedded account management.
     */
    "data": MerchantAccountSession;
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
 * Stripe Connect initialization data for a merchant account session: the account session,
 * publishable key, and authorized components.
 */
export type MerchantAccountSessionStripe = {
    /**
     * Account session authority for initializing Stripe Connect in the browser. The account
     * session authority for initializing Stripe Connect in the browser, including the client
     * secret.
     */
    "account_session": DisputeResponseSessionStripeAccountSession;
    /**
     * Authorized Stripe component names and collection options to apply when mounting each
     * component. [] (Value): {@link MerchantAccountSessionStripeComponent}. One embedded component
     * a merchant account session authorizes, with the collection options to apply to it.
     */
    "components": Array<MerchantAccountSessionStripeComponent>;
    /** Stripe publishable key to pass as publishableKey to loadConnectAndInitialize. */
    "publishable_key": string;
};
/**
 * Requirement collection options to apply when mounting one embedded component: field breadth,
 * future requirements, and any targeted requirements.
 */
export type MerchantAccountSessionStripeCollectionOptions = {
    /**
     * Requirement collection breadth to pass as fields to setCollectionOptions. Value enum:
     * "currently_due", "eventually_due".
     */
    "fields": "currently_due" | "eventually_due" | (string & {});
    /**
     * Whether to collect future requirements. Pass this value as futureRequirements to
     * setCollectionOptions. Value enum: "omit", "include".
     */
    "future_requirements": "omit" | "include" | (string & {});
    /**
     * Targeted requirement collection restriction to pass as requirements to setCollectionOptions.
     * Omitted when collection is not targeted. The Stripe requirement paths to collect exclusively
     * when a session's targeting is `targeted`.
     */
    "requirements"?: MerchantAccountSessionStripeRequirements;
};
/**
 * One embedded component a merchant account session authorizes, with the collection options to
 * apply to it.
 */
export type MerchantAccountSessionStripeComponent = {
    /**
     * Collection instructions for a policy-aware component. Omitted for other components. Map
     * future_requirements to futureRequirements when calling setCollectionOptions. Requirement
     * collection options to apply when mounting one embedded component: field breadth, future
     * requirements, and any targeted requirements.
     */
    "collection_options"?: MerchantAccountSessionStripeCollectionOptions;
    /**
     * Stripe component name authorized by this session. tax_documents uses the Stripe name
     * documents. Convert underscores to hyphens when calling Connect.create. Value enum:
     * "account_onboarding", "account_management", "payouts", "balances", "documents",
     * "notification_banner", "payments".
     */
    "component": "account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "documents"
        | "notification_banner"
        | "payments"
        | (string & {});
};
/** The Stripe requirement paths to collect exclusively when a session's targeting is `targeted`. */
export type MerchantAccountSessionStripeRequirements = {
    /**
     * Stripe requirement paths to collect exclusively when effective_policy.targeting is targeted.
     * They come from the targeted_requirements you sent or from Flint's remediation
     * recommendation. [] (Value): string.
     */
    "only": Array<string>;
};
export type MerchantAccountSessionsCreateParams = (InputValue<MerchantAccountSessionCreateRequestInput>)
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
export type MerchantAccountSessionsRefreshParams = (InputValue<MerchantAccountSessionRefreshRequestInput>)
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
/** Current Flint merchant billing balance for one billing account and currency. */
export type MerchantBillingBalance = {
    /**
     * Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application
     * lowers both amounts and records a credit_applied entry. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "available_credit_money": MoneyValue;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Stable identifier for this billing account and currency balance projection. Example:
     * "mbbal_01KEZF7C002TWWZA70R4DRVJC9".
     */
    "merchant_billing_balance_id": string;
    /**
     * RFC3339 timestamp for the balance snapshot. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "observed_at": string;
    /**
     * What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this
     * amount only when Flint applies it, which records a credit_applied entry. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
};
/** A list of `MerchantBillingBalance` objects. */
export type MerchantBillingBalanceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * MerchantBillingBalance}. Current Flint merchant billing balance for one billing account and
     * currency.
     */
    "data": Array<MerchantBillingBalance>;
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
/** A response containing `MerchantBillingBalance` data. */
export type MerchantBillingBalanceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Current Flint merchant
     * billing balance for one billing account and currency.
     */
    "data": MerchantBillingBalance;
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
export type MerchantBillingBalanceUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_credit_money": MoneyValue;
            "currency": string;
            "merchant_billing_balance_id": string;
            "observed_at": string;
            "outstanding_money": MoneyValue;
        };
        "previous_attributes"?: Partial<MerchantBillingBalance>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "merchant_billing_balance.updated";
})
    & {
    "event_type": "merchant_billing_balance.updated";
});
export type MerchantBillingBalancesGetParams = {};
export type MerchantBillingBalancesListParams = {};
export type MerchantBillingEntriesListParams = {
    /**
     * Filter by one or more merchant billing entry types. Repeat or comma-separate values. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "event_fee",
     * "invoice", "custom_domain", "custom_domain_collection", "correction", "credit_issued",
     * "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off". Value
     * enum: "event_fee", "invoice", "custom_domain", "custom_domain_collection", "correction",
     * "credit_issued", "credit_applied", "credit_refunded", "collection", "collection_reversal",
     * "write_off". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "event_fee",
     * "invoice", "custom_domain", "custom_domain_collection", "correction", "credit_issued",
     * "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off".
     * anyOf[1][] (Value): string. Value enum: "event_fee", "invoice", "custom_domain",
     * "custom_domain_collection", "correction", "credit_issued", "credit_applied",
     * "credit_refunded", "collection", "collection_reversal", "write_off". anyOf[2] (Value):
     * string. Value enum: "event_fee", "invoice", "custom_domain", "custom_domain_collection",
     * "correction", "credit_issued", "credit_applied", "credit_refunded", "collection",
     * "collection_reversal", "write_off".
     */
    "type"?: InputValue<("event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off")
        | readonly ("event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off")[]>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by Flint payment intent ID. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Filter by Flint dispute ID. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: InputValue<string>;
    /**
     * Filter by Flint merchant billing invoice ID. pattern: ^msinv_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "msinv_01KEZF7C00MB754KPEPACGRMNP".
     */
    "merchant_billing_invoice_id"?: InputValue<string>;
    /**
     * Filter by Flint balance transaction ID. pattern: ^btxn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "balance_transaction_id"?: InputValue<string>;
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
/** An immutable merchant billing charge, credit, collection, correction, or write-off. */
export type MerchantBillingEntry = {
    /**
     * Signed change in available billing credit. credit_issued increases it; credit_applied and
     * credit_refunded decrease it. Other entry types do not change it. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "available_credit_effect_money": MoneyValue;
    /**
     * Balance transaction for this collection or collection reversal, when present. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "balance_transaction_id"?: string;
    /**
     * When Flint inserted the entry. Never changes and is never backdated from occurred_at.
     * Overlap created_after passes by a few minutes and deduplicate by merchant_billing_entry_id
     * to pick up late commits. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Human-readable description of the billing event. */
    "description": string;
    /**
     * Related dispute, when the entry is associated with a dispute. Example:
     * "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: string;
    /**
     * Event fee category. Present only for event_fee entries. card_dispute and
     * card_dispute_countered apply only when Flint paid the processor's dispute fee; a fee already
     * deducted from your balance is recorded on the dispute balance transaction instead. Value
     * enum: "bank_verification", "failed_ach_payment", "ach_dispute", "card_dispute",
     * "card_dispute_countered", "external_paid_order_overage".
     */
    "event_fee_type"?: "bank_verification"
        | "failed_ach_payment"
        | "ach_dispute"
        | "card_dispute"
        | "card_dispute_countered"
        | "external_paid_order_overage"
        | (string & {});
    /**
     * Stable entry ID. Re-reading an entry returns the same values. Example:
     * "mbe_01KEZF7C00S06A5G1B4867TF78".
     */
    "merchant_billing_entry_id": string;
    /**
     * Related invoice issued by Flint, when applicable. Example:
     * "msinv_01KEZF7C00MB754KPEPACGRMNP".
     */
    "merchant_billing_invoice_id"?: string;
    /**
     * Signed outstanding effect minus the available credit effect. Charges and collection_reversal
     * are positive; credit_issued, collection, custom_domain_collection, and write_off are
     * negative; credit_refunded is positive; credit_applied is zero; correction may be positive or
     * negative. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "net_billing_effect_money": MoneyValue;
    /**
     * When the billing event happened. An entry can be recorded after entries that occurred later.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at": string;
    /**
     * Signed change in the amount owed Flint. Charges (event_fee, invoice, custom_domain) and
     * collection_reversal increase it; credit_applied, collection, custom_domain_collection, and
     * write_off decrease it; correction may increase or decrease it. Credit issuance and refund do
     * not change it. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "outstanding_effect_money": MoneyValue;
    /**
     * Related payment intent, when the entry is associated with a payment. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Entry corrected, credited, collected, reversed, or written off by this entry, when
     * applicable. Example: "mbe_01KEZF7C00S06A5G1B4867TF78".
     */
    "related_merchant_billing_entry_id"?: string;
    /**
     * The billing event represented by this entry. Value enum: "event_fee", "invoice",
     * "custom_domain", "custom_domain_collection", "correction", "credit_issued",
     * "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off".
     */
    "type": "event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off"
        | (string & {});
};
/** A page of `MerchantBillingEntry` objects. */
export type MerchantBillingEntryListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * MerchantBillingEntry}. An immutable merchant billing charge, credit, collection, correction,
     * or write-off.
     */
    "data": Array<MerchantBillingEntry>;
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
/** A Flint invoice for the merchant's Flint subscription. */
export type MerchantBillingInvoice = {
    /**
     * Credit applied to the invoice: the sum of its credit line items. Never more than
     * subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "applied_credit_money": MoneyValue;
    /** When Flint created the invoice. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** When payment of the invoice is due. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "due_at": string;
    /**
     * Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001},
     * sequential per billing account; existing numbers are retained.
     */
    "invoice_number": string;
    /** When Flint issued the invoice. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "issued_at": string;
    /**
     * Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to
     * applied_credit_money. [] (Value): {@link MerchantBillingInvoiceLineItem}. One line on a
     * merchant billing invoice, either a subscription charge or a credit, with quantity, unit
     * price, and total.
     */
    "line_items": Array<MerchantBillingInvoiceLineItem>;
    /** Stable identifier of the invoice. Example: "msinv_01KEZF7C00MB754KPEPACGRMNP". */
    "merchant_billing_invoice_id": string;
    /**
     * Part of total_money Flint still has to collect. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * When the invoice was paid. Removed if a reversed collection reopens it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "paid_at"?: string;
    /**
     * Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open
     * and marks it paid once collected; a reversed collection returns it to open, and written_off
     * means Flint stopped collecting it. Value enum: "open", "paid", "written_off".
     */
    "status": "open" | "paid" | "written_off" | (string & {});
    /**
     * Sum of the subscription line items, before credit. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * What the invoice charges: subtotal_money minus applied_credit_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type MerchantBillingInvoiceIssuedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "applied_credit_money": MoneyValue;
            "created_at": string;
            "due_at": string;
            "invoice_number": string;
            "issued_at": string;
            "line_items": Array<MerchantBillingInvoiceLineItem>;
            "merchant_billing_invoice_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "period_end_at": string;
            "period_start_at": string;
            "status": "open" | "paid" | "written_off" | (string & {});
            "subtotal_money": MoneyValue;
            "total_money": MoneyValue;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<MerchantBillingInvoice>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "merchant_billing_invoice.issued";
})
    & {
    "event_type": "merchant_billing_invoice.issued";
});
/**
 * One line on a merchant billing invoice, either a subscription charge or a credit, with quantity,
 * unit price, and total.
 */
export type MerchantBillingInvoiceLineItem = {
    /**
     * When Flint added this line to the invoice. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Stable identifier of this line item. Example: "msinvl_01KEZF7C00YB825JWZ87C5HDF0". */
    "merchant_billing_invoice_line_item_id": string;
    /** Name of the subscription charge or credit. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Whether the line adds a subscription charge or applies credit. Value enum: "subscription",
     * "credit".
     */
    "type": "subscription" | "credit" | (string & {});
    /**
     * Unsigned price of one unit. total_money is quantity times this amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
/** A page of `MerchantBillingInvoice` objects. */
export type MerchantBillingInvoiceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * MerchantBillingInvoice}. A Flint invoice for the merchant's Flint subscription.
     */
    "data": Array<MerchantBillingInvoice>;
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
/** A response containing `MerchantBillingInvoice` data. */
export type MerchantBillingInvoiceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A Flint invoice for the
     * merchant's Flint subscription.
     */
    "data": MerchantBillingInvoice;
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
export type MerchantBillingInvoiceUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "applied_credit_money": MoneyValue;
            "created_at": string;
            "due_at": string;
            "invoice_number": string;
            "issued_at": string;
            "line_items": Array<MerchantBillingInvoiceLineItem>;
            "merchant_billing_invoice_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "period_end_at": string;
            "period_start_at": string;
            "status": "open" | "paid" | "written_off" | (string & {});
            "subtotal_money": MoneyValue;
            "total_money": MoneyValue;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<MerchantBillingInvoice>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "merchant_billing_invoice.updated";
})
    & {
    "event_type": "merchant_billing_invoice.updated";
});
export type MerchantBillingInvoicesGetParams = {};
export type MerchantBillingInvoicesListParams = {
    /**
     * Filter by one or more merchant billing invoice statuses. Values are trimmed and deduplicated
     * in first-seen order; empty or unknown entries are rejected. Values within this filter are
     * ORed; separate filters are ANDed. [] enum: "open", "paid", "written_off". Value enum:
     * "open", "paid", "written_off". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "open", "paid", "written_off". anyOf[1][] (Value): string. Value enum: "open", "paid",
     * "written_off". anyOf[2] (Value): string. Value enum: "open", "paid", "written_off".
     */
    "status"?: InputValue<("open" | "paid" | "written_off") | readonly ("open" | "paid" | "written_off")[]>;
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
export type MerchantGetParams = DisputesAcceptParams;
/**
 * A merchant's readiness to accept payments and receive payouts, with per-capability status and
 * outstanding requirements.
 */
export type MerchantReadiness = {
    /**
     * Readiness of each payment and money movement capability, with its own status, requirements,
     * and next actions. [] (Value): {@link CapabilityReadiness}. Merchant capability readiness for
     * a payment or money movement capability.
     */
    "capabilities": Array<CapabilityReadiness>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "observed_at": string;
    /**
     * Readiness to accept payments. Readiness for one area of a merchant account, with its
     * `status`, the reason for it, and the actions that would advance it.
     */
    "payments": ReadinessAxis;
    /**
     * Readiness to receive payouts. Readiness for one area of a merchant account, with its
     * `status`, the reason for it, and the actions that would advance it.
     */
    "payouts": ReadinessAxis;
    /**
     * Account information still needed, grouped by when it is due. Each capability also lists the
     * requirements that affect it. Account information requirements for a merchant, grouped as
     * currently due, eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
};
export type MerchantReadinessUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookMerchant;
        "previous_attributes"?: Partial<WebhookMerchant>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "merchant.readiness_updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookMerchant;
        "previous_attributes"?: Partial<WebhookMerchant>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "merchant.readiness_updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "merchant.readiness_updated";
});
/**
 * The `merchant.readiness_updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type MerchantReadinessUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookMerchant}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `banners`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `banners`. */
        "object": WebhookMerchant;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookMerchant>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "merchant.readiness_updated". */
    "event_type"?: "merchant.readiness_updated";
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
 * The `merchant.readiness_updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type MerchantReadinessUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookMerchant}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `banners`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `banners`. */
        "object": WebhookMerchant;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookMerchant>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "merchant.readiness_updated". */
    "event_type"?: "merchant.readiness_updated";
});
/** A response containing `Merchant` data. */
export type MerchantResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The business accepting
     * payments.
     */
    "data": Merchant;
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
 * A platform's request to create a merchant for an owner, who confirms it with a code Flint emails
 * them. Once verified, it is the record of the owner's consent, kept for as long as the merchant
 * exists.
 */
export type MerchantSignup = {
    /**
     * The new merchant's display name until onboarding sets its legal name. Absent when the
     * request didn't send one: Flint then names the merchant from the owner's email.
     */
    "business_name"?: string;
    /** When the signup was canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * When the current code expires, present while the signup is `pending` and its code still
     * works. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "code_expires_at"?: string;
    /** When the signup completed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /** When the signup was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When a `pending` signup expires: 24 hours after it was created. A signup Flint is completing
     * never expires. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Your identifier for this business, as you sent it. Absent when you didn't send one.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The merchant the signup created, present once it is `completed`. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /** Unique identifier for the merchant signup. Example: "msu_01KEZF7C00SRGYRMBPKRKW8V9J". */
    "merchant_signup_id": string;
    /**
     * Flint's merchant terms the owner must accept. Flint's merchant terms the owner accepts by
     * entering the code, fixed when the signup was created.
     */
    "merchant_terms": MerchantSignupTerms;
    /**
     * The modes the signup installs the app in, one environment grant each, `test` first. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "modes": Array<"test" | "live" | (string & {})>;
    /**
     * The owner the code went to. The person who will own the new merchant, as the platform
     * supplied them.
     */
    "owner": MerchantSignupOwner;
    /**
     * The partner app the signup installs on the new merchant. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * The install the signup created, present once it is `completed`. Its `merchant_signup_id`
     * names this signup. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * The app's platform fee cap the code email showed, frozen at create. Absent when the app has
     * none. The most a platform fee can take from one payment. The largest platform fee on a
     * payment is percent of the amount it collects, rounded half up to the minor unit, plus the
     * currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1%
     * + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency
     * without a maximum can't carry a platform fee.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /**
     * The permissions the code email asked the owner to approve, frozen at create: the requested
     * ones, or the app's defaults, plus every required permission, in manifest order. At verify,
     * each grant gets them narrowed to what the app's manifest still offers. [] (Value): {@link
     * MerchantSignupPermission}. A permission the code email asked the owner to approve, as the
     * app's manifest stated it when the signup was created.
     */
    "requested_permissions": Array<MerchantSignupPermission>;
    /**
     * The onboarding state of the new merchant's default sandbox, which the test grant points at.
     * Value enum: "complete", "not_started".
     */
    "sandbox_initial_onboarding": "complete" | "not_started" | (string & {});
    /**
     * Where the signup is. `completed`, `expired` and `canceled` are final. `expired` follows from
     * `expires_at`, so it doesn't advance `version`. Value enum: "pending", "completed",
     * "expired", "canceled".
     */
    "status": "pending" | "completed" | "expired" | "canceled" | (string & {});
    /**
     * Lifecycle actions Flint accepts now: `verify` and `cancel` while `pending`, only `verify`
     * while Flint is completing it after verify, `[]` otherwise. resend-code and
     * rotate-authorization-codes are operations, not lifecycle actions, so they are never listed.
     * [] enum: "cancel", "verify". [] (Value): string. Value enum: "cancel", "verify".
     */
    "supported_actions": Array<"cancel" | "verify" | (string & {})>;
    /**
     * The owner's acceptance, present once the signup is `completed`. The owner's acceptance of
     * Flint's merchant terms, recorded at verify. Flint also stores the IP address and user agent
     * you reported; they aren't returned.
     */
    "terms_acceptance"?: MerchantSignupTermsAcceptance;
    /** When the signup last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `MerchantSignup` objects. */
export type MerchantSignupListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * MerchantSignup}. A platform's request to create a merchant for an owner, who confirms it
     * with a code Flint emails them. Once verified, it is the record of the owner's consent, kept
     * for as long as the merchant exists.
     */
    "data": Array<MerchantSignup>;
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
/** The person who will own the new merchant, as the platform supplied them. */
export type MerchantSignupOwner = {
    /**
     * The owner's email address, lowercased, at most 254 characters. Flint emails the code here,
     * and it becomes the new merchant's account email and the owner's Flint login. Send an address
     * the owner gave you, never one on a domain you control.
     */
    "email": string;
    /**
     * The owner's first name, 1 to 100 characters. It becomes the Flint user's first name when
     * Flint creates the user.
     */
    "first_name": string;
    /**
     * The owner's last name, 1 to 100 characters. It becomes the Flint user's last name when Flint
     * creates the user.
     */
    "last_name": string;
};
/** The person who will own the new merchant. Flint emails the code to this address. */
export type MerchantSignupOwnerRequestInput = {
    /**
     * The owner's email address, lowercased, at most 254 characters. Flint emails the code here,
     * and it becomes the new merchant's account email and the owner's Flint login. Send an address
     * the owner gave you, never one on a domain you control. Format: email. minLength: 3.
     * maxLength: 254. Example: "buyer@example.com".
     */
    "email": string;
    /**
     * The owner's first name, 1 to 100 characters, without links or email addresses: the code
     * email shows it. minLength: 1. maxLength: 100.
     */
    "first_name": string;
    /**
     * The owner's last name, 1 to 100 characters, without links or email addresses: the code email
     * shows it. minLength: 1. maxLength: 100.
     */
    "last_name": string;
};
/**
 * A permission the code email asked the owner to approve, as the app's manifest stated it when the
 * signup was created.
 */
export type MerchantSignupPermission = {
    /** The permission's description. */
    "description": string;
    /** The manifest permission ID. Example: "manage_orders". */
    "permission_id": string;
    /** The Flint scopes the permission grants. [] (Value): string. */
    "required_scopes": Array<string>;
    /** The permission's title, as the code email showed it. */
    "title": string;
};
/** A response containing `MerchantSignup` data. */
export type MerchantSignupResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A platform's request to
     * create a merchant for an owner, who confirms it with a code Flint emails them. Once
     * verified, it is the record of the owner's consent, kept for as long as the merchant exists.
     */
    "data": MerchantSignup;
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
 * Flint's merchant terms the owner accepts by entering the code, fixed when the signup was
 * created.
 */
export type MerchantSignupTerms = {
    /** Where the terms are published. Link to it beside the checkbox in your form. */
    "url": string;
    /** The terms version. Send it as `terms_acceptance.merchant_terms_version` on verify. */
    "version": string;
};
