import type { InputValue } from '../runtime.js';
import type { CreditNotesListAllocationsParams } from './types-12.js';
import type { PauseSubscriptionRequestInput, PartnerWebhookEnvelope } from './types-40.js';
import type { RenewSubscriptionRequestInput } from './types-47.js';
import type { InvoicesMarkUncollectibleParams } from './types-32.js';
import type { SaveMeGiftCardRequestInput } from './types-52.js';
import type { SkipMeSubscriptionCycleRequestInput } from './types-53.js';
import type { CustomersUpdateAddressParams } from './types-14.js';
import type { UpdateCustomerEmailPreferencesRequestInput } from './types-58.js';
import type {
    UpdateMeRequestInput,
    UpdateMeSubscriptionLineItemRequestInput,
    UpdateMeSubscriptionRequestInput,
    UpdateMerchantRequestInput
} from './types-59.js';
import type { Address } from './types-0.js';
import type { ExpandedOrganizationSummary } from './types-21.js';
import type { ImageAttachment } from './types-25.js';
import type { ResponseMeta } from './types-48.js';
import type { DisputeResponseSessionStripeAccountSession } from './types-20.js';
import type { MoneyValue } from './types-35.js';
import type { CapabilityReadiness } from './types-4.js';
import type { ReadinessAxis, ReadinessRequirements } from './types-46.js';
import type { TextModifierConfig } from './types-57.js';
export type MeListRefundsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Filter by refund status. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "pending",
     * "succeeded", "partially_succeeded", "failed". Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "succeeded", "partially_succeeded", "failed". anyOf[1][] (Value): string. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): string.
     * Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "partially_succeeded" | "failed")
        | readonly ("pending" | "succeeded" | "partially_succeeded" | "failed")[]>;
    /**
     * Inclusive lower bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by refund_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
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
};
export type MeListReturnsParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by decision status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "approved", "partially_approved", "declined". Value enum: "pending", "approved",
     * "partially_approved", "declined". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "approved", "partially_approved", "declined". anyOf[1][] (Value): string. Value
     * enum: "pending", "approved", "partially_approved", "declined". anyOf[2] (Value): string.
     * Value enum: "pending", "approved", "partially_approved", "declined".
     */
    "decision_status"?: InputValue<("pending" | "approved" | "partially_approved" | "declined")
        | readonly ("pending" | "approved" | "partially_approved" | "declined")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
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
    /** Filter by order id. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * anyOf[1][] (Value): string. Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")[]>;
    /** Filter by return number. */
    "return_number"?: InputValue<string>;
    /** Filter by return reason id. Example: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_reason_id"?: InputValue<string>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "requested", "open",
     * "completed", "declined", "canceled". Value enum: "requested", "open", "completed",
     * "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value): string. Value
     * enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): string.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type MeListShipmentsParams = {
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
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
     * Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1][] (Value): string. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[2] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
export type MeListSubscriptionPaymentRetriesParams = CreditNotesListAllocationsParams;
export type MeListSubscriptionsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by subscription status. Repeat the parameter or pass comma-separated values to match
     * multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "trialing", "active",
     * "paused", "past_due", "canceled", "incomplete", "scheduled". Value enum: "trialing",
     * "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "trialing", "active", "paused", "past_due",
     * "canceled", "incomplete", "scheduled". anyOf[1][] (Value): string. Value enum: "trialing",
     * "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[2] (Value):
     * string. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled".
     */
    "status"?: InputValue<("trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled")
        | readonly ("trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled")[]>;
    /**
     * Separate subscriptions scheduled by Flint (flint) from those whose billing dates the store
     * supplies (external). Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "flint", "external". Value
     * enum: "flint", "external". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "flint",
     * "external". anyOf[1][] (Value): string. Value enum: "flint", "external". anyOf[2] (Value):
     * string. Value enum: "flint", "external".
     */
    "billing_schedule_owner"?: InputValue<("flint" | "external") | readonly ("flint" | "external")[]>;
    /**
     * When true, returns subscriptions scheduled to cancel at the end of the current period that
     * are not yet canceled. When false, returns every other subscription.
     */
    "cancel_at_period_end"?: InputValue<boolean>;
    /**
     * Filter by the subscription's selected delivery method. Example:
     * "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "delivery_method_id"?: InputValue<string>;
    /**
     * Find subscriptions needing a new delivery method, address, or rate by the current
     * delivery_hold reason. Does not match upcoming delivery issues. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "method_unavailable", "destination_not_served",
     * "rate_unavailable". Value enum: "method_unavailable", "destination_not_served",
     * "rate_unavailable". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[1][] (Value):
     * string. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable".
     * anyOf[2] (Value): string. Value enum: "method_unavailable", "destination_not_served",
     * "rate_unavailable".
     */
    "hold_reason"?: InputValue<("method_unavailable" | "destination_not_served" | "rate_unavailable")
        | readonly ("method_unavailable" | "destination_not_served" | "rate_unavailable")[]>;
    /** Filter by Flint subscription plan ID. Example: "plan_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
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
export type MePauseSubscriptionParams = (InputValue<PauseSubscriptionRequestInput>);
export type MeRemoveGiftCardParams = {};
export type MeRenewSubscriptionParams = (InputValue<RenewSubscriptionRequestInput>);
export type MeResumeSubscriptionParams = InvoicesMarkUncollectibleParams;
export type MeRevokeSessionParams = {};
export type MeSaveGiftCardParams = (SaveMeGiftCardRequestInput);
export type MeSendOrderReceiptParams = {};
export type MeSkipSubscriptionCycleParams = (InputValue<SkipMeSubscriptionCycleRequestInput>);
export type MeUpdateAddressParams = CustomersUpdateAddressParams;
export type MeUpdateEmailPreferencesParams = (InputValue<UpdateCustomerEmailPreferencesRequestInput>);
export type MeUpdateParams = (InputValue<UpdateMeRequestInput>);
export type MeUpdateSubscriptionLineItemParams = (InputValue<UpdateMeSubscriptionLineItemRequestInput>);
export type MeUpdateSubscriptionParams = (InputValue<UpdateMeSubscriptionRequestInput>);
/** The business accepting payments. */
export type Merchant = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * Default API version for requests without a Flint-Version header. Shared across live and test
     * environments.
     */
    "api_version"?: string;
    /** When the merchant's default API version last changed. Format: date-time. */
    "api_version_changed_at"?: string;
    /** When the merchant's default API version was first set. Format: date-time. */
    "api_version_pinned_at"?: string;
    /** Previous API version, present while a supported rollback is available. */
    "api_version_previous"?: string;
    /**
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time.
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
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "email": string | null;
    /**
     * A square image, at least 128 by 128 pixels, shown where the store needs a small mark:
     * browser tabs and compact headers. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "icon"?: ImageAttachment;
    /** An image attached to a resource, with its display properties and attachment metadata. */
    "logo"?: ImageAttachment;
    "merchant_id": string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `organization`; `null` when expanded and there is no
     * related organization. anyOf[1] (Value): {@link ExpandedOrganizationSummary}. An
     * organization's summary fields, such as its name, status, and parent, returned when the
     * organization is expanded. anyOf[2] (Value): null.
     */
    "organization"?: ((ExpandedOrganizationSummary) | (null));
    /**
     * The organization this merchant belongs to. Flint creates it with the merchant, and it can't
     * be changed through the API.
     */
    "organization_id": string;
    "phone"?: string;
    /**
     * A merchant's readiness to accept payments and receive payouts, with per-capability status
     * and outstanding requirements.
     */
    "readiness": MerchantReadiness;
    "reporting_timezone"?: string;
    /** Value enum: "active", "suspended", "restricted", "closed". */
    "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
    "support_email"?: string;
    "support_phone"?: string;
    "support_url"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Merchant version. Profile, status, and API version changes advance this version, including
     * business name and business type changes synced from the payment provider. Readiness updates
     * alone do not. Format: int64. minimum: 1.
     */
    "version": number;
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
     * minItems: 1. [] enum: "account_onboarding", "account_management", "payouts", "balances",
     * "tax_documents", "notification_banner". [] (Value): string. Value enum:
     * "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /**
     * The collection policy applied to a merchant account session: which requirements it targets,
     * how they are collected, and whether future requirements are included.
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
     * date-time.
     */
    "launch_token_expires_at": string;
};
/** Short-lived browser initialization data for an embedded merchant account session. */
export type MerchantAccountSessionClientSession = {
    /**
     * Expiry of the embedded account session client secret in UTC. Connect.js calls
     * fetchClientSecret to obtain a new secret when needed. Format: date-time.
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
    /** Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /**
     * minItems: 1. maxItems: 6. uniqueItems: true. [] enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner". []
     * (Value): string. Value enum: "account_onboarding", "account_management", "payouts",
     * "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /** Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include" | (string & {});
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
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
    /** Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental";
    /**
     * minItems: 1. maxItems: 6. uniqueItems: true. [] enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner". []
     * (Value): string. Value enum: "account_onboarding", "account_management", "payouts",
     * "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner">;
    /** Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include";
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
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
    /** Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /** Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include" | (string & {});
    /** Value enum: "none", "all", "all_due", "targeted". */
    "targeting": "none" | "all" | "all_due" | "targeted" | (string & {});
};
/**
 * Refreshes a merchant account session from its signed launch token. No create fields are
 * accepted.
 */
export type MerchantAccountSessionRefreshRequest = {
    /** minLength: 1. */
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
     * A merchant account session: the browser initialization data, allowed components, effective
     * policy, and launch token for embedded account management.
     */
    "data": MerchantAccountSession;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
     * "notification_banner".
     */
    "component": "account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "documents"
        | "notification_banner"
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
export type MerchantAccountSessionsCreateParams = (InputValue<MerchantAccountSessionCreateRequestInput>);
export type MerchantAccountSessionsRefreshParams = (InputValue<MerchantAccountSessionRefreshRequestInput>);
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
    /** Stable identifier for this billing account and currency balance projection. */
    "merchant_billing_balance_id": string;
    /** RFC3339 timestamp for the balance snapshot. Format: date-time. */
    "observed_at": string;
    /**
     * What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this
     * amount only when Flint applies it, which records a credit_applied entry. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
};
/** A page of `MerchantBillingBalance` objects. */
export type MerchantBillingBalanceListResponse = {
    /**
     *  [] (Value): {@link MerchantBillingBalance}. Current Flint merchant billing balance for one
     * billing account and currency.
     */
    "data": Array<MerchantBillingBalance>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `MerchantBillingBalance` data. */
export type MerchantBillingBalanceResponse = {
    /** Current Flint merchant billing balance for one billing account and currency. */
    "data": MerchantBillingBalance;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MerchantBillingBalanceUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": MerchantBillingBalance;
    };
    "event_type"?: "merchant_billing_balance.updated";
})
    & {
    "event_type": "merchant_billing_balance.updated";
});
export type MerchantBillingBalancesGetParams = {};
export type MerchantBillingBalancesListParams = {};
export type MerchantBillingEntriesListParams = {
    /**
     * Filter by one or more merchant billing entry types. Repeat or comma-separate values. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "event_fee", "invoice", "custom_domain",
     * "custom_domain_collection", "correction", "credit_issued", "credit_applied",
     * "credit_refunded", "collection", "collection_reversal", "write_off". Value enum:
     * "event_fee", "invoice", "custom_domain", "custom_domain_collection", "correction",
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
    /** Filter by Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_intent_id"?: InputValue<string>;
    /** Filter by Flint dispute ID. Example: "du_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "dispute_id"?: InputValue<string>;
    /** Filter by Flint merchant billing invoice ID. Example: "msinv_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "merchant_billing_invoice_id"?: InputValue<string>;
    /** Filter by Flint balance transaction ID. Example: "btxn_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "balance_transaction_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
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
    /** Balance transaction for this collection or collection reversal, when present. */
    "balance_transaction_id"?: string;
    /**
     * When Flint recorded the entry. Use created_after to pick up new entries, including late
     * arrivals. Format: date-time.
     */
    "created_at": string;
    /** Human-readable description of the billing event. */
    "description": string;
    /** Related dispute, when the entry is associated with a dispute. */
    "dispute_id"?: string;
    /**
     * Event fee category. Present only for event_fee entries. card_dispute applies only when Flint
     * paid the processor's dispute fee; a fee already deducted from your balance is recorded on
     * the dispute balance transaction instead. Value enum: "bank_verification",
     * "failed_ach_payment", "ach_dispute", "card_dispute".
     */
    "event_fee_type"?: "bank_verification" | "failed_ach_payment" | "ach_dispute" | "card_dispute" | (string & {});
    /** Stable entry ID. Re-reading an entry returns the same values. */
    "merchant_billing_entry_id": string;
    /** Related invoice issued by Flint, when applicable. */
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
     * Format: date-time.
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
    /** Related payment intent, when the entry is associated with a payment. */
    "payment_intent_id"?: string;
    /**
     * Entry corrected, credited, collected, reversed, or written off by this entry, when
     * applicable.
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
     *  [] (Value): {@link MerchantBillingEntry}. An immutable merchant billing charge, credit,
     * collection, correction, or write-off.
     */
    "data": Array<MerchantBillingEntry>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A Flint invoice for the merchant's Flint subscription. */
export type MerchantBillingInvoice = {
    /** When Flint created the invoice. Format: date-time. */
    "created_at": string;
    /**
     * Credit applied to the invoice: the sum of its credit line items. Never more than
     * subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "credit_money": MoneyValue;
    /** When payment of the invoice is due. Format: date-time. */
    "due_at": string;
    /** Human-readable invoice number. */
    "invoice_number": string;
    /** When Flint issued the invoice. Format: date-time. */
    "issued_at"?: string;
    /**
     * Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to
     * credit_money. [] (Value): {@link MerchantBillingInvoiceLineItem}. One line on a merchant
     * billing invoice, either a subscription charge or a credit, with quantity, unit price, and
     * total.
     */
    "line_items": Array<MerchantBillingInvoiceLineItem>;
    /** Stable identifier of the invoice. */
    "merchant_billing_invoice_id": string;
    /**
     * Part of total_money Flint still has to collect. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * When the invoice was paid. Removed if a reversed collection reopens it. Format: date-time.
     */
    "paid_at"?: string;
    /** Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: date-time. */
    "period_end_at": string;
    /** Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: date-time. */
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
     * What the invoice charges: subtotal_money minus credit_money. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the invoice last changed. Format: date-time. */
    "updated_at": string;
    /** When the invoice was voided. Absent on invoices that weren't. Format: date-time. */
    "voided_at"?: string;
};
export type MerchantBillingInvoiceIssuedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": MerchantBillingInvoice;
    };
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
    /** When Flint added this line to the invoice. Format: date-time. */
    "created_at": string;
    /** Stable identifier of this line item. */
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
     *  [] (Value): {@link MerchantBillingInvoice}. A Flint invoice for the merchant's Flint
     * subscription.
     */
    "data": Array<MerchantBillingInvoice>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `MerchantBillingInvoice` data. */
export type MerchantBillingInvoiceResponse = {
    /** A Flint invoice for the merchant's Flint subscription. */
    "data": MerchantBillingInvoice;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MerchantBillingInvoiceUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": MerchantBillingInvoice;
    };
    "event_type"?: "merchant_billing_invoice.updated";
})
    & {
    "event_type": "merchant_billing_invoice.updated";
});
export type MerchantBillingInvoicesGetParams = {};
export type MerchantBillingInvoicesListParams = {
    /**
     * Filter by one or more merchant billing invoice statuses. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "open", "paid", "written_off". Value enum: "open", "paid",
     * "written_off". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "paid",
     * "written_off". anyOf[1][] (Value): string. Value enum: "open", "paid", "written_off".
     * anyOf[2] (Value): string. Value enum: "open", "paid", "written_off".
     */
    "status"?: InputValue<("open" | "paid" | "written_off") | readonly ("open" | "paid" | "written_off")[]>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type MerchantGetParams = {
    /**
     * Supported expansions: organization. Expansion requires merchants.profile.read plus
     * accounts.organizations.read. Limits: at most 10 unique expand paths per request. Pass
     * expand=organization. [] enum: "organization". Value enum: "organization". anyOf[1] (Value):
     * Array of string. [] enum: "organization". anyOf[1][] (Value): string. Value enum:
     * "organization". anyOf[2] (Value): string. Value enum: "organization".
     */
    "expand"?: InputValue<("organization") | readonly ("organization")[]>;
};
/**
 * A merchant's readiness to accept payments and receive payouts, with per-capability status and
 * outstanding requirements.
 */
export type MerchantReadiness = {
    /**
     *  [] (Value): {@link CapabilityReadiness}. Merchant capability readiness for a payment or
     * money movement capability.
     */
    "capabilities": Array<CapabilityReadiness>;
    /** RFC3339 timestamp. Format: date-time. */
    "observed_at": string;
    /**
     * Readiness for one area of a merchant account, with its `status`, the reason for it, and the
     * actions that would advance it.
     */
    "payments": ReadinessAxis;
    /**
     * Readiness for one area of a merchant account, with its `status`, the reason for it, and the
     * actions that would advance it.
     */
    "payouts": ReadinessAxis;
    /**
     * Account information requirements for a merchant, grouped as currently due, eventually due,
     * past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
};
export type MerchantReadinessUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Merchant;
    };
    "event_type"?: "merchant.readiness_updated";
})
    & {
    "event_type": "merchant.readiness_updated";
});
/** A response containing `Merchant` data. */
export type MerchantResponse = {
    /** The business accepting payments. */
    "data": Merchant;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MerchantUpdateParams = (InputValue<UpdateMerchantRequestInput>);
export type MerchantUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Merchant;
    };
    "event_type"?: "merchant.updated";
})
    & {
    "event_type": "merchant.updated";
});
/** Fields shared by merchant webhook payloads. */
export type MerchantWebhookEnvelope = ({
    /** Format: date. */
    "api_version": string;
    /** Format: date-time. */
    "created_at": string;
    /**  object (Required): object. */
    "data": {
        "object": {
            [key: string]: unknown;
        };
    };
    /**
     * Value enum: "test_clock.created", "test_clock.advancing", "test_clock.ready",
     * "test_clock.failed", "test_clock.archived", "tax_connection.updated",
     * "customer_deletion_request.processing", "customer_deletion_request.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.suppressed", "fulfillment.canceled", "fulfillment.failed",
     * "merchant.updated", "product.created", "product.updated", "product.archived",
     * "product_variant.created", "product_variant.updated", "product_variant.archived",
     * "bundle.created", "bundle.updated", "bundle.archived", "category.created",
     * "category.updated", "category.deleted", "modifier_group.created", "modifier_group.updated",
     * "modifier_group.archived", "modifier_set.created", "modifier_set.updated",
     * "modifier_set.archived", "promotion.created", "promotion.updated", "promotion.archived",
     * "promotion_code.created", "promotion_code.updated", "promotion_code.archived",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "checkout_session.partially_paid", "checkout_session.created", "checkout_session.paid",
     * "checkout_session.closed", "checkout_session.expired", "checkout_session.invalidated",
     * "credit_note_allocation.created", "credit_note_allocation.reversed", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided", "customer.created",
     * "customer_deletion_request.completed", "customer_deletion_request.rejected",
     * "customer_deletion_request.created", "customer.updated", "customer.deleted",
     * "custom_domain.updated", "custom_domain.archived", "dispute.created", "dispute.lost",
     * "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.inquiry_closed",
     * "dispute.won", "fraud_warning.created", "fraud_warning.updated", "gift_card.created",
     * "gift_card.updated", "gift_card_load.created", "gift_card_load.updated",
     * "gift_card_notification.created", "gift_card_notification.updated",
     * "gift_card_redemption.created", "gift_card_redemption.updated",
     * "gift_card_transaction.created", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.updated",
     * "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated",
     * "delivery_method.activated", "delivery_method.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.activated", "delivery_location_set.updated",
     * "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated",
     * "delivery_profile.activated", "delivery_profile.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.archived", "delivery_zone.created",
     * "delivery_zone.deactivated", "delivery_zone.activated", "delivery_zone.updated",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.credited",
     * "invoice.created", "invoice.issued", "invoice.issue_failed", "invoice.late_fee_due",
     * "invoice.late_fee_assessed", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed", "invoice.overdue",
     * "invoice.paid", "invoice_payment_attempt.processing", "invoice_payment_attempt.canceled",
     * "invoice_payment_attempt.expired", "invoice_payment_attempt.failed",
     * "invoice_payment_attempt.settled", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "inventory_reservation.action_required",
     * "inventory_count.applied", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_level.shortage_detected",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "merchant_billing_balance.updated", "merchant.readiness_updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "order.partially_refunded", "order.closed", "order.created", "fulfillment.completed",
     * "fulfillment.created", "fulfillment_event.created", "package.created", "package.updated",
     * "shipment.created", "shipment.updated", "fulfillment.updated",
     * "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.partially_paid", "order.paid", "order.refunded", "order.updated",
     * "payment_intent.expired", "payment_intent.updated", "payment_intent.created",
     * "payment_intent.canceled", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_link.created", "payment_link.updated",
     * "payment_method.archived", "payment_method.failed", "payment_method.activated",
     * "payout.canceled", "payout.created", "payout.failed", "payout.paid", "payout.reversed",
     * "payout.updated", "payout_destination.created", "payout_destination.archived",
     * "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated",
     * "refund.partially_succeeded", "refund.succeeded", "refund.created", "refund.failed",
     * "refund.updated", "report.failed", "report.succeeded", "return.canceled",
     * "return.completed", "return.created", "return.decision_recorded", "return.reopened",
     * "return.updated", "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "payment_review.closed", "payment_review.reopened", "payment_review.opened",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded",
     * "subscription_payment_retry.created", "subscription_payment_retry.succeeded",
     * "subscription_payment_retry.failed", "subscription.reactivated", "subscription.resumed",
     * "subscription.renewal_upcoming", "subscription.trial_ending", "subscription.plan_changed",
     * "subscription.updated", "subscription.delivery_action_required",
     * "subscription.delivery_pause_upcoming", "subscription.delivery_updated",
     * "subscription.cycle_skipped", "subscription_delivery_migration.completed".
     */
    "event_type": "test_clock.created"
        | "test_clock.advancing"
        | "test_clock.ready"
        | "test_clock.failed"
        | "test_clock.archived"
        | "tax_connection.updated"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.suppressed"
        | "fulfillment.canceled"
        | "fulfillment.failed"
        | "merchant.updated"
        | "product.created"
        | "product.updated"
        | "product.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "product_variant.archived"
        | "bundle.created"
        | "bundle.updated"
        | "bundle.archived"
        | "category.created"
        | "category.updated"
        | "category.deleted"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_group.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "modifier_set.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "promotion_code.archived"
        | "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "checkout_session.partially_paid"
        | "checkout_session.created"
        | "checkout_session.paid"
        | "checkout_session.closed"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "customer.created"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.rejected"
        | "customer_deletion_request.created"
        | "customer.updated"
        | "customer.deleted"
        | "custom_domain.updated"
        | "custom_domain.archived"
        | "dispute.created"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.inquiry_closed"
        | "dispute.won"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.updated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.activated"
        | "delivery_method.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.activated"
        | "delivery_location_set.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.activated"
        | "delivery_profile.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.activated"
        | "delivery_zone.updated"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.credited"
        | "invoice.created"
        | "invoice.issued"
        | "invoice.issue_failed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.settled"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "inventory_reservation.action_required"
        | "inventory_count.applied"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_level.shortage_detected"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "merchant_billing_balance.updated"
        | "merchant.readiness_updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "order.partially_refunded"
        | "order.closed"
        | "order.created"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment_event.created"
        | "package.created"
        | "package.updated"
        | "shipment.created"
        | "shipment.updated"
        | "fulfillment.updated"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.partially_paid"
        | "order.paid"
        | "order.refunded"
        | "order.updated"
        | "payment_intent.expired"
        | "payment_intent.updated"
        | "payment_intent.created"
        | "payment_intent.canceled"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_method.activated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.created"
        | "payout_destination.archived"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.created"
        | "refund.failed"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "payment_review.closed"
        | "payment_review.reopened"
        | "payment_review.opened"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.succeeded"
        | "subscription_payment_retry.failed"
        | "subscription.reactivated"
        | "subscription.resumed"
        | "subscription.renewal_upcoming"
        | "subscription.trial_ending"
        | "subscription.plan_changed"
        | "subscription.updated"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.cycle_skipped"
        | "subscription_delivery_migration.completed"
        | (string & {});
    "merchant_id": string;
    /** Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /**
     * 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered
     * afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /**
     *  id (Required): string. idempotency_key (Optional): string. The Idempotency-Key the
     * originating request sent. Absent when it sent none.
     */
    "request": {
        "id": string;
        /** The Idempotency-Key the originating request sent. Absent when it sent none. */
        "idempotency_key"?: string;
    }
        | null;
    /** true for a synthetic event sent from the test-events endpoint, false otherwise. */
    "test": boolean;
    "webhook_event_id": string;
});
/**
 * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
 * Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
 * maps written before those limits may not satisfy them.
 */
export type MetadataMap = Record<string, string>;
/**
 * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
 * sets a value, a null value deletes the key, and an empty object makes no change; send null for
 * the whole field to clear all caller-owned metadata. The resulting map is limited the same way as
 * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
 * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
 * that does not exist is allowed, so the number of operations is not itself the stored-map limit.
 * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
 */
export type MetadataPatchRequest = Record<string, string | null>;
/**
 * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
 * sets a value, a null value deletes the key, and an empty object makes no change; send null for
 * the whole field to clear all caller-owned metadata. The resulting map is limited the same way as
 * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
 * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
 * that does not exist is allowed, so the number of operations is not itself the stored-map limit.
 * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
 */
export type MetadataPatchRequestInput = MetadataPatchRequest;
/**
 * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
 * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
 * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and
 * keys starting with flint_ are reserved for Flint. maxProperties: 50.
 */
export type MetadataRequestInput = MetadataMap;
/** A purchasable customization choice. */
export type Modifier = {
    /** When the modifier was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Identifier of the group that owns this modifier. For an inline group, read the group through
     * its modifier set.
     */
    "modifier_group_id"?: string;
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one.
     */
    "modifier_id": string;
    /** Name of the choice shown to buyers. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position": number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     */
    "selected_by_default": boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment": boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt": boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
    /** When the modifier last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** A group of choices that customize an item. */
export type ModifierGroup = {
    /** Whether buyers can select more than one unit of a list modifier. */
    "allow_quantities": boolean;
    /** When the modifier group was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
    /** Identifier of the merchant that owns this modifier group. */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`),
     * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
     * return it.
     */
    "modifier_group_id": string;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type": "list" | "text" | (string & {});
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link Modifier}. A
     * purchasable customization choice.
     */
    "modifiers": Array<Modifier>;
    /** Name of the modifier group shown to buyers. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment": boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt": boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive",
     * "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group: whether input is required or
     * multiline, and its length limits.
     */
    "text"?: TextModifierConfig;
    /**
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
    "version": number;
};
export type ModifierGroupArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "modifier_group.archived";
});
