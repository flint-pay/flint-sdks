import type { PayoutDestination, Payout } from './types-43.js';
import type { ResponseMeta } from './types-48.js';
import type {
    MerchantWebhookEnvelope,
    MoneyMovementListMeta,
    MoneyMovementBlockedReason,
    MoneyValue,
    NextAction,
    MetadataMap,
    ModifierSet,
    MetadataRequestInput,
    MoneyValueInput
} from './types-35.js';
import type { InputValue } from '../runtime.js';
import type { UpdatePayoutDestinationRequestInput, UpdatePayoutSettingsRequestInput } from './types-59.js';
import type { CancelPayoutRequestInput, CategoryReference } from './types-4.js';
import type { CreatePayoutRequestInput } from './types-10.js';
import type { PaymentClientAction } from './types-41.js';
import type { Address } from './types-0.js';
import type {
    ReturnProcessDecision,
    ReturnProcessDispositionRequest,
    ReturnProcessInspectionRequest,
    ReturnProcessResolutionRequest,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnProcessReceiptRequest,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResult
} from './types-50.js';
import type { ImageAttachment, ImageRequest, ImageRequestInput } from './types-25.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { GiftCardProductConfiguration, GiftCardProductConfigurationRequestInput } from './types-24.js';
import type { SelectedProductOption } from './types-53.js';
import type { Weight, WeightInput } from './types-62.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-26.js';
/** A response containing `PayoutDestination` data. */
export type PayoutDestinationResponse = {
    /** The account that receives merchant payouts. */
    "data": PayoutDestination;
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
export type PayoutDestinationUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.updated";
})
    & {
    "event_type": "payout_destination.updated";
});
export type PayoutDestinationsDeleteParams = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type PayoutDestinationsGetParams = {};
export type PayoutDestinationsListParams = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Optional payout destination type filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "bank_account", "debit_card". Value enum: "bank_account", "debit_card". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "bank_account", "debit_card". anyOf[1][] (Value):
     * string. Value enum: "bank_account", "debit_card". anyOf[2] (Value): string. Value enum:
     * "bank_account", "debit_card".
     */
    "type"?: InputValue<("bank_account" | "debit_card") | readonly ("bank_account" | "debit_card")[]>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "active", "verification_required",
     * "disabled", "archived", "failed". Value enum: "pending", "active", "verification_required",
     * "disabled", "archived", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[1][]
     * (Value): string. Value enum: "pending", "active", "verification_required", "disabled",
     * "archived", "failed". anyOf[2] (Value): string. Value enum: "pending", "active",
     * "verification_required", "disabled", "archived", "failed".
     */
    "status"?: InputValue<("pending" | "active" | "verification_required" | "disabled" | "archived" | "failed")
        | readonly ("pending" | "active" | "verification_required" | "disabled" | "archived" | "failed")[]>;
    /**
     * Optional available payout method filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "standard". Value enum: "standard". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "standard". anyOf[1][] (Value): string. Value enum: "standard". anyOf[2] (Value): string.
     * Value enum: "standard".
     */
    "available_payout_methods"?: InputValue<("standard") | readonly ("standard")[]>;
    /** Whether to return only destinations that are the default for their currency. */
    "default_for_currency"?: InputValue<boolean>;
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
export type PayoutDestinationsUpdateParams = (InputValue<UpdatePayoutDestinationRequestInput>);
export type PayoutFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.failed";
})
    & {
    "event_type": "payout.failed";
});
/** A page of `Payout` objects. */
export type PayoutListResponse = {
    /**  [] (Value): {@link Payout}. Funds sent from a merchant balance to a payout destination. */
    "data": Array<Payout>;
    /**
     * Response metadata for money movement lists, including request and trace IDs, warnings, and
     * the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PayoutPaidEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.paid";
})
    & {
    "event_type": "payout.paid";
});
/** A response containing `Payout` data. */
export type PayoutResponse = {
    /** Funds sent from a merchant balance to a payout destination. */
    "data": Payout;
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
export type PayoutReversedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.reversed";
})
    & {
    "event_type": "payout.reversed";
});
/** The merchant's payout schedule and preferences. */
export type PayoutSettings = {
    /**
     * Why payouts can't run. Empty when nothing blocks them. [] (Value): {@link
     * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code, a
     * message, next steps, and who can resolve it.
     */
    "blocked_reasons": Array<MoneyMovementBlockedReason>;
    /**
     * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
     * precision. Null when no stored settings record exists. Format: date-time.
     */
    "created_at": string | null;
    /**
     * Default payout destination for each currency, as a map from currency code to
     * payout_destination_id. Read-only: change defaults in the payouts embedded component. *
     * (Value): string.
     */
    "default_payout_destinations"?: Record<string, string>;
    /** Days a payment stays pending before its funds become available to pay out. Format: int32. */
    "delay_days": number;
    /**
     * Delay in days you set in place of the account's default, 0 through 31. Absent when none is
     * set. Format: int32.
     */
    "delay_days_override"?: number;
    /**
     * Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual",
     * "daily", "weekly", "monthly", "other".
     */
    "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
    /** Merchant these settings belong to. */
    "merchant_id": string;
    /**
     * Amount kept in your balance instead of paid out, keyed by currency code. Absent when no
     * minimum is set. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "minimum_balance_by_currency"?: Record<string, MoneyValue>;
    /**
     * Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value): integer.
     * Format: int32.
     */
    "monthly_payout_days": Array<number>;
    /**
     * Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. []
     * (Value): {@link NextAction}. A suggested next step for resolving an error, warning, or
     * blocked state, such as the API operation to call or the scope it needs.
     */
    "next_actions": Array<NextAction>;
    /** Stable identifier of your payout settings. */
    "payout_settings_id": string;
    /** Text shown on your bank statement for payouts. Absent when none is set. */
    "statement_descriptor"?: string;
    /**
     * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled,
     * blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum:
     * "enabled", "disabled", "blocked", "pending".
     */
    "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
    /**
     * When the stored payout settings record was last updated, as an RFC 3339 UTC instant at
     * second precision. Without a stored record, this is the provider's update time when supplied,
     * otherwise null. Format: date-time.
     */
    "updated_at": string | null;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday
     * or sunday; when you change the schedule, Flint accepts monday through friday. [] enum:
     * "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". [] (Value):
     * string. Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
     * "sunday".
     */
    "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
};
export type PayoutSettingsGetParams = {};
/** A response containing `PayoutSettings` data. */
export type PayoutSettingsResponse = {
    /** The merchant's payout schedule and preferences. */
    "data": PayoutSettings;
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
export type PayoutSettingsUpdateParams = (InputValue<UpdatePayoutSettingsRequestInput>);
export type PayoutSettingsUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutSettings;
    };
    "event_type"?: "payout_settings.updated";
})
    & {
    "event_type": "payout_settings.updated";
});
/** A payout's bank trace ID, with whether it is pending, available, or unsupported. */
export type PayoutTraceID = {
    /**
     * Whether a bank trace ID is available. Unmapped trace states are returned as unsupported.
     * Value enum: "pending", "available", "unsupported".
     */
    "status": "pending" | "available" | "unsupported" | (string & {});
    /** The bank's trace number for the deposit, when Flint has it. */
    "value"?: string;
};
export type PayoutUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.updated";
})
    & {
    "event_type": "payout.updated";
});
export type PayoutsCancelParams = (InputValue<CancelPayoutRequestInput>);
export type PayoutsCreateParams = (InputValue<CreatePayoutRequestInput>);
export type PayoutsGetParams = {
    /**
     * Supported expansions: original_payout, payout_destination, reversed_by_payout. Expansion
     * requires money_movement.payouts.read plus the read scope for each expanded resource. Limits:
     * at most 10 unique expand paths per request. Repeat expand, for example
     * expand=original_payout&expand=payout_destination, or pass one comma-separated value. []
     * enum: "original_payout", "payout_destination", "reversed_by_payout". Value enum:
     * "original_payout", "payout_destination", "reversed_by_payout". anyOf[1] (Value): Array of
     * string. [] enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[1][]
     * (Value): string. Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     * anyOf[2] (Value): string. Value enum: "original_payout", "payout_destination",
     * "reversed_by_payout".
     */
    "expand"?: InputValue<("original_payout" | "payout_destination" | "reversed_by_payout")
        | readonly ("original_payout" | "payout_destination" | "reversed_by_payout")[]>;
};
export type PayoutsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Supported expansions: original_payout, payout_destination, reversed_by_payout. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat
     * expand, for example expand=original_payout&expand=payout_destination, or pass one
     * comma-separated value. [] enum: "original_payout", "payout_destination",
     * "reversed_by_payout". Value enum: "original_payout", "payout_destination",
     * "reversed_by_payout". anyOf[1] (Value): Array of string. [] enum: "original_payout",
     * "payout_destination", "reversed_by_payout". anyOf[1][] (Value): string. Value enum:
     * "original_payout", "payout_destination", "reversed_by_payout". anyOf[2] (Value): string.
     * Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     */
    "expand"?: InputValue<("original_payout" | "payout_destination" | "reversed_by_payout")
        | readonly ("original_payout" | "payout_destination" | "reversed_by_payout")[]>;
    /**
     * Optional payout method filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "standard", "instant", "other". Value enum: "standard", "instant", "other". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "standard", "instant", "other". anyOf[1][]
     * (Value): string. Value enum: "standard", "instant", "other". anyOf[2] (Value): string. Value
     * enum: "standard", "instant", "other".
     */
    "method"?: InputValue<("standard" | "instant" | "other") | readonly ("standard" | "instant" | "other")[]>;
    /**
     * Optional Flint balance source type filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "card", "bank_account". Value enum: "card", "bank_account". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "card", "bank_account". anyOf[1][] (Value): string. Value
     * enum: "card", "bank_account". anyOf[2] (Value): string. Value enum: "card", "bank_account".
     */
    "balance_source_type"?: InputValue<("card" | "bank_account") | readonly ("card" | "bank_account")[]>;
    /** Optional payout destination ID filter. Example: "pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payout_destination_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across payout ID, external reference ID, description, and statement descriptor. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as po_01.
     */
    "query"?: InputValue<string>;
    /**
     * Optional payout status filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "in_transit", "paid", "failed", "canceled". Value enum: "pending", "in_transit",
     * "paid", "failed", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "in_transit", "paid", "failed", "canceled". anyOf[1][] (Value): string. Value
     * enum: "pending", "in_transit", "paid", "failed", "canceled". anyOf[2] (Value): string. Value
     * enum: "pending", "in_transit", "paid", "failed", "canceled".
     */
    "status"?: InputValue<("pending" | "in_transit" | "paid" | "failed" | "canceled")
        | readonly ("pending" | "in_transit" | "paid" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date. */
    "arrival_date_from"?: InputValue<string>;
    /** Exclusive upper bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date. */
    "arrival_date_to"?: InputValue<string>;
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
/**
 * Client-side action required before continuing a payment. Resume an order through PayOrder with
 * order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint
 * without a replacement credential.
 */
export type PendingPaymentAction = {
    /**
     * Product-level action type. payment_authentication applies to a payment leg;
     * payment_method_authentication applies to saving a future-billing payment method. Value enum:
     * "payment_authentication", "payment_method_authentication".
     */
    "action_type": "payment_authentication" | "payment_method_authentication" | (string & {});
    /**
     * Direct browser authority required to finish this action before continuing through Flint.
     * Unlike collection guidance, this payload includes a client secret. Typed provider-specific
     * browser action payload. Execute the selected provider action before continuing the owning
     * payment through Flint.
     */
    "client_action": PaymentClientAction;
    /**
     * Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming
     * an attempt.
     */
    "pending_action_id": string;
    /**
     * The attempt subject that requires browser action. Exactly one of payment_intent or
     * setup_payment_source is present. Typed subject for a pending order payment action. Exactly
     * one subject is present.
     */
    "subject": PendingPaymentActionSubject;
};
/** The payment intent that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionPaymentIntentSubject = {
    "payment_intent_id": string;
};
/** The payment method setup that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionSetupPaymentSourceSubject = {
    "payment_method_id": string;
};
/** Typed subject for a pending order payment action. Exactly one subject is present. */
export type PendingPaymentActionSubject = {
    /**
     * PaymentIntent that requires buyer authentication. It can be a standalone intent or an
     * order-owned payment leg. The payment intent that needs buyer authentication in a pending
     * payment action.
     */
    "payment_intent"?: PendingPaymentActionPaymentIntentSubject;
    /**
     * Future-billing payment method setup that requires buyer authentication. The payment method
     * setup that needs buyer authentication in a pending payment action.
     */
    "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubject;
};
/**
 * Pickup details. For a pickup that checkout creates, location_name, address, and instructions
 * name the store the buyer chose and the delivery method's pickup instructions. The note the buyer
 * left for the store is in recipient.instructions.
 */
export type PickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Instructions specific to curbside handoff. maxLength: 2048. */
    "curbside_instructions"?: string;
    /** Buyer-reported arrival time for curbside or counter pickup. Format: date-time. */
    "customer_arrived_at"?: string;
    /**
     * Deadline after which an uncollected pickup should enter merchant review. Format: date-time.
     */
    "expires_at"?: string;
    /** Pickup instructions for the buyer, such as where to go on arrival. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. */
    "location_name"?: string;
    /** When the recipient collected the items, in RFC3339 format. Format: date-time. */
    "picked_up_at"?: string;
    /**
     * How the buyer collects the items, such as in store or curbside. Value enum: "in_store",
     * "curbside", "locker", "other".
     */
    "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** When the items became ready for pickup, in RFC3339 format. Format: date-time. */
    "ready_at"?: string;
    /** Timezone used to display the pickup window. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. maxLength: 500.
     */
    "vehicle_description"?: string;
    /** End of the promised pickup window, in RFC3339 format. Format: date-time. */
    "window_end_at"?: string;
    /** Start of the promised pickup window, in RFC3339 format. Format: date-time. */
    "window_start_at"?: string;
};
/**
 * The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
 * total.
 */
export type PricingAmounts = {
    /**
     * Tax added on top of prices, included in total_money. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "additive_tax_money": MoneyValue;
    /**
     * Total of the order's service charges after service-charge discounts. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "charge_money": MoneyValue;
    /**
     * Total of order and line-item discounts. Service-charge discounts, such as free shipping, are
     * not included; they reduce charge_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Tax already included in subtotal_money and charge_money. Informational; it is not added
     * again to total_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "inclusive_tax_money": MoneyValue;
    /**
     * Tip money in the total: the requested tip before payment, and settled tips net of refunds
     * after. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "requested_tip_money": MoneyValue;
    /**
     * Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with
     * tax-inclusive prices include their tax here. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Total tax, equal to additive_tax_money + inclusive_tax_money. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money,
     * never below zero. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "total_money": MoneyValue;
};
/**
 * How to process one line of an existing return: the received quantity, inspection, decision,
 * disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequest = {
    /**
     * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
     * policy evaluation and the proposal can be built. Otherwise start with
     * return_required_quantity equal to approved_quantity, allowed_resolution_types containing
     * refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless
     * of whether the original payment is refundable, no automatic_resolution_type,
     * is_inspection_required false, and no receiving_location_id. Each supplied field replaces its
     * starting value; allowed_resolution_types replaces the whole list. Omit
     * automatic_resolution_type to keep its starting value, or send null to resolve manually. Then
     * fill an omitted release_timing with after_inspection when merchandise is required and
     * inspection is required, after_receipt when merchandise is required without inspection, or
     * after_approval when no merchandise is required. Validate the merged decision for quantity
     * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
     * policy always requires override_reason when approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
     * other decision fields use these defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecision;
    /**
     * What was done with a returned item, such as restocked as sellable or sent for repair,
     * supplied when processing an existing return.
     */
    "disposition"?: ReturnProcessDispositionRequest;
    /** An inspection result for a returned item, supplied when processing an existing return. */
    "inspection"?: ReturnProcessInspectionRequest;
    /**
     * Whole number of units received. It must equal the line's committed return_required_quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "received_quantity"?: number;
    /**
     * The resolution to apply to a returned item, such as refund or exchange, with the quantity
     * and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequest;
    /** minLength: 1. */
    "return_line_item_id": string;
};
/**
 * How to process one line of an existing return: the received quantity, inspection, decision,
 * disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequestInput = {
    /**
     * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
     * policy evaluation and the proposal can be built. Otherwise start with
     * return_required_quantity equal to approved_quantity, allowed_resolution_types containing
     * refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless
     * of whether the original payment is refundable, no automatic_resolution_type,
     * is_inspection_required false, and no receiving_location_id. Each supplied field replaces its
     * starting value; allowed_resolution_types replaces the whole list. Omit
     * automatic_resolution_type to keep its starting value, or send null to resolve manually. Then
     * fill an omitted release_timing with after_inspection when merchandise is required and
     * inspection is required, after_receipt when merchandise is required without inspection, or
     * after_approval when no merchandise is required. Validate the merged decision for quantity
     * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
     * policy always requires override_reason when approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
     * other decision fields use these defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecisionInput;
    /**
     * What was done with a returned item, such as restocked as sellable or sent for repair,
     * supplied when processing an existing return.
     */
    "disposition"?: ReturnProcessDispositionRequestInput;
    /** An inspection result for a returned item, supplied when processing an existing return. */
    "inspection"?: ReturnProcessInspectionRequestInput;
    /**
     * Whole number of units received. It must equal the line's committed return_required_quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "received_quantity"?: number;
    /**
     * The resolution to apply to a returned item, such as refund or exchange, with the quantity
     * and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequestInput;
    /** minLength: 1. */
    "return_line_item_id": string;
};
/** The request body for: Process existing return. */
export type ProcessExistingReturnRequest = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is
     * accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param
     * completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link ProcessExistingReturnLineItemRequest}. How to process one
     * line of an existing return: the received quantity, inspection, decision, disposition, and
     * resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequest>;
    /**
     * The receipt of returned merchandise, with when and where it was received, supplied when
     * processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequest;
};
/** The request body for: Process existing return. */
export type ProcessExistingReturnRequestInput = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is
     * accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param
     * completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link ProcessExistingReturnLineItemRequestInput}. How to process
     * one line of an existing return: the received quantity, inspection, decision, disposition,
     * and resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequestInput>;
    /**
     * The receipt of returned merchandise, with when and where it was received, supplied when
     * processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequestInput;
};
/** A response containing `ReturnProcessResult` data. */
export type ProcessExistingReturnResponse = {
    /**
     * The return is the primary resource and expected_version target; the other resources report
     * the processing effects.
     */
    "data": ReturnProcessResult;
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
/** An item offered in the merchant's catalog. */
export type Product = {
    /** Number of active variants belonging to the product. Format: int32. */
    "active_variant_count"?: number;
    /** Whether the product is active and has at least one active variant. */
    "available_for_sale"?: boolean;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * The product's default variant, when one is set. A specific purchasable version of a product.
     */
    "default_variant"?: ProductVariant;
    /** Identifier of the variant chosen as this product's default, when one is set. */
    "default_variant_id"?: string;
    /**
     * Delivery readiness aggregated across the product's non-archived variants. Value enum:
     * "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the product shown to buyers. */
    "description"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Images attached to this resource, in display order. The first image is primary. [] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * On product list rows, the first non-archived variant by position, then variant_id, that
     * matches all exact variant filters. Without exact variant filters, identifies the first
     * variant whose SKU matches query. Omitted when no variant matches; a product name or
     * description match alone does not set it. Page the product's variants to find all matches. A
     * single variant witness on product list rows only. With exact variant filters, the first
     * variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first
     * variant in that order whose SKU matches query. Use the paginated nested variant list to
     * enumerate every match.
     */
    "matched_variant"?: ProductVariantMatch;
    /** Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set. anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups. anyOf[2]
     * (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /** Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /** Product name shown to buyers. */
    "name": string;
    /** Number of active options belonging to the product. Format: int32. */
    "option_count"?: number;
    /**
     * Product options and their non-archived values. Empty when the product has no options. []
     * (Value): {@link ProductOption}. A choice that defines a product's variants.
     */
    "options": Array<ProductOption>;
    /**
     * Lowest and highest unit prices among active variants. Omitted when there are no active
     * variants or their currencies differ. The lowest and highest unit prices across a product's
     * variants.
     */
    "price_range"?: ProductPriceRange;
    /** Stable identifier of the product. */
    "product_id": string;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Product lifecycle status. Archived products remain readable and cannot be edited. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Number of non-archived variants belonging to the product. Format: int32. */
    "variant_count"?: number;
    /**
     * The variants this request created, ordered by `position` and then `variant_id`. Present only
     * on the `POST /v1/products` response. Read variants later with `GET
     * /v1/products/{product_id}/variants`. [] (Value): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "variants"?: Array<ProductVariant>;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type ProductArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.archived";
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
    "event_type": "product.archived";
});
/**
 * The `product.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ProductArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
});
export type ProductCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.created";
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
    "event_type": "product.created";
});
/**
 * The `product.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ProductCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.created". */
    "event_type"?: "product.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ProductCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.created". */
    "event_type"?: "product.created";
});
/** A page of `Product` objects. */
export type ProductListResponse = {
    /**
     * The requested product data. [] (Value): {@link Product}. An item offered in the merchant's
     * catalog.
     */
    "data": Array<Product>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A choice that defines a product's variants. */
export type ProductOption = {
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Option name, such as Size or Color. */
    "name": string;
    /** Stable identifier of the product option. */
    "option_id": string;
    /** Display order among the product's options, starting at zero. Format: int32. */
    "position": number;
    /** Identifier of the product this option belongs to. */
    "product_id": string;
    /**
     * Option lifecycle status. Every active variant must select an active value for each active
     * option. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link ProductOptionValue}. One value of a product option, such as a size or color, with its
     * position and status.
     */
    "values"?: Array<ProductOptionValue>;
};
/** A page of `ProductOption` objects. */
export type ProductOptionListResponse = {
    /**
     * The requested product option data. [] (Value): {@link ProductOption}. A choice that defines
     * a product's variants.
     */
    "data": Array<ProductOption>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `ProductOption` data. */
export type ProductOptionResponse = {
    /** The requested product option data. A choice that defines a product's variants. */
    "data": ProductOption;
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
/** One value of a product option, such as a size or color, with its position and status. */
export type ProductOptionValue = {
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Stable identifier of the option value. */
    "option_value_id": string;
    /** Display order among the option's values, starting at zero. Format: int32. */
    "position": number;
    /**
     * Option value lifecycle status. Only active values can be newly selected by active variants.
     * Value enum: "active", "inactive", "archived".
     */
    "status"?: "active" | "inactive" | "archived" | (string & {});
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Option value shown to buyers, such as Medium. */
    "value": string;
};
/** The lowest and highest unit prices across a product's variants. */
export type ProductPriceRange = {
    /**
     * Highest unit price among the product's active variants. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money": MoneyValue;
    /**
     * Lowest unit price among the product's active variants. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money": MoneyValue;
};
/** A response containing `Product` data. */
export type ProductResponse = {
    /** The requested product data. An item offered in the merchant's catalog. */
    "data": Product;
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
export type ProductUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.updated";
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
    "event_type": "product.updated";
});
/**
 * The `product.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ProductUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.updated". */
    "event_type"?: "product.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ProductUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.updated". */
    "event_type"?: "product.updated";
});
/** A specific purchasable version of a product. */
export type ProductVariant = {
    /** Whether the variant and its product are both active. */
    "available_for_sale": boolean;
    /** Barcode assigned to this sellable item. */
    "barcode"?: string;
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Reason the variant's delivery configuration needs attention. Value enum:
     * "delivery_profile_missing", "delivery_profile_inactive".
     */
    "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
    /**
     * Whether the variant's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Identifier of the delivery profile assigned to this variant. */
    "delivery_profile_id"?: string;
    /**
     * Images shown for the variant: its own gallery when nonempty, otherwise the product's
     * gallery. [] (Value): {@link ImageAttachment}. An image attached to a resource, with its
     * display properties and attachment metadata.
     */
    "effective_images": Array<ImageAttachment>;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Gift card issuance terms. face_value_money is the reference denomination; unit_price_money
     * is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with
     * ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face
     * value or discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * The variant's own images in display order. An empty gallery inherits the product's images.
     * [] (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Whether effective_images comes from the product's gallery because this variant's gallery is
     * empty.
     */
    "images_inherited": boolean;
    /**
     * The inventory item this variant consumes. Present exactly when inventory_tracking is
     * tracked. Several variants may share one inventory item.
     */
    "inventory_item_id"?: string;
    /**
     * Whether sales of this variant consume an inventory item. Value enum: "not_tracked",
     * "tracked".
     */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
    /**
     * Stored Flint line-item tax category. New digital-product variants default to digital_goods
     * when omitted. The stored value remains editable. Unset uses the merchant default. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
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
    /** Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set. anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups. anyOf[2]
     * (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /** Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /** Variant name that distinguishes it from the product's other variants. */
    "name"?: string;
    /** Display order among the product's variants, starting at zero. Format: int32. */
    "position": number;
    /** Identifier of the product this variant belongs to. */
    "product_id": string;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Variant lifecycle status. Archived variants remain readable and cannot be edited. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Stable identifier of the product variant. */
    "variant_id": string;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type ProductVariantArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.archived";
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
    "event_type": "product_variant.archived";
});
/**
 * The `product_variant.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ProductVariantArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product_variant.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived";
});
export type ProductVariantCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.created";
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
    "event_type": "product_variant.created";
});
/**
 * The `product_variant.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ProductVariantCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product_variant.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created";
});
/** A page of `ProductVariant` objects. */
export type ProductVariantListResponse = {
    /**
     * The requested product variant data. [] (Value): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data": Array<ProductVariant>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A single variant witness on product list rows only. With exact variant filters, the first
 * variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first
 * variant in that order whose SKU matches query. Use the paginated nested variant list to
 * enumerate every match.
 */
export type ProductVariantMatch = {
    /** Name of the matching variant, when set. */
    "name"?: string;
    /** Stock keeping unit of the matching variant, when set. */
    "sku"?: string;
    /** Identifier of the variant that matched the product list's variant filters or query. */
    "variant_id": string;
};
/** The request body for: Create product variant. */
export type ProductVariantRequest = {
    /** Barcode assigned to this sellable item. minLength: 1. maxLength: 100. */
    "barcode"?: string;
    /** Identifier of the delivery profile to assign to this variant. minLength: 1. */
    "delivery_profile_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Only valid for product_type gift_card. Omission creates a fixed denomination at
     * unit_price_money. Discounted pricing requires an explicit face_value_money and price_mode
     * discounted. Gift card settings on a product variant: its `face_value_money`, price mode
     * (face value or discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * New inventory item to create and track for this variant. Send either inventory_item or
     * inventory_item_id. Inventory item details you supply when creating an inventory item for a
     * product variant: `name`, `sku`, `barcode`, and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequest;
    /**
     * Identifier of an existing inventory item to track for this variant. Send either
     * inventory_item_id or inventory_item. minLength: 1.
     */
    "inventory_item_id"?: string;
    /**
     * Flint line-item tax category to store. Omit for a digital product to store digital_goods;
     * explicit categories are preserved. For other product types, omission uses the merchant
     * default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
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
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /**
     * Variant name that distinguishes it from the product's other variants. minLength: 1.
     * maxLength: 255.
     */
    "name"?: string;
    /**
     * Display order among the product's variants, starting at zero. When omitted in the variants
     * array on product create, defaults to the variant's array index. For default_variant,
     * defaults to zero. When creating a variant separately, defaults to the highest position among
     * the product's variants plus one, or zero for the first variant. Format: int32.
     */
    "position"?: number;
    /**
     * Option name and value selections for this variant. When present on an update, replaces the
     * entire selection. Omit to leave unchanged. Select one active value for every active option.
     * null is invalid. [] (Value): {@link ProductVariantSelectedOptionRequest}. An option name and
     * value you choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequest>;
    /** Stock keeping unit assigned to this sellable item. minLength: 1. maxLength: 100. */
    "sku"?: string;
    /**
     * Whether the variant is active or inactive. An inactive variant cannot be sold. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
};
/** The request body for: Create product variant. */
export type ProductVariantRequestInput = {
    /** Barcode assigned to this sellable item. minLength: 1. maxLength: 100. */
    "barcode"?: string;
    /** Identifier of the delivery profile to assign to this variant. minLength: 1. */
    "delivery_profile_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Only valid for product_type gift_card. Omission creates a fixed denomination at
     * unit_price_money. Discounted pricing requires an explicit face_value_money and price_mode
     * discounted. Gift card settings on a product variant: its `face_value_money`, price mode
     * (face value or discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfigurationRequestInput;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * New inventory item to create and track for this variant. Send either inventory_item or
     * inventory_item_id. Inventory item details you supply when creating an inventory item for a
     * product variant: `name`, `sku`, `barcode`, and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequestInput;
    /**
     * Identifier of an existing inventory item to track for this variant. Send either
     * inventory_item_id or inventory_item. minLength: 1.
     */
    "inventory_item_id"?: string;
    /**
     * Flint line-item tax category to store. Omit for a digital product to store digital_goods;
     * explicit categories are preserved. For other product types, omission uses the merchant
     * default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /**
     * Variant name that distinguishes it from the product's other variants. minLength: 1.
     * maxLength: 255.
     */
    "name"?: string;
    /**
     * Display order among the product's variants, starting at zero. When omitted in the variants
     * array on product create, defaults to the variant's array index. For default_variant,
     * defaults to zero. When creating a variant separately, defaults to the highest position among
     * the product's variants plus one, or zero for the first variant. Format: int32.
     */
    "position"?: number;
    /**
     * Option name and value selections for this variant. When present on an update, replaces the
     * entire selection. Omit to leave unchanged. Select one active value for every active option.
     * null is invalid. [] (Value): {@link ProductVariantSelectedOptionRequestInput}. An option
     * name and value you choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequestInput>;
    /** Stock keeping unit assigned to this sellable item. minLength: 1. maxLength: 100. */
    "sku"?: string;
    /**
     * Whether the variant is active or inactive. An inactive variant cannot be sold. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
};
/** A response containing `ProductVariant` data. */
export type ProductVariantResponse = {
    /** The requested product variant data. A specific purchasable version of a product. */
    "data": ProductVariant;
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
/** An option name and value you choose to identify a product variant, such as Size and Large. */
export type ProductVariantSelectedOptionRequest = {
    /**
     * Name of one of the product's options. Limited to 255 characters (Unicode code points) before
     * trimming surrounding whitespace. Matches case-insensitively after trimming surrounding
     * whitespace. On a variant update, an option that is no longer active is accepted only when
     * the entry matches the variant's current selection for that option; omit it to keep that
     * selection. minLength: 1. maxLength: 255.
     */
    "option_name": string;
    /**
     * Value of the named option. Limited to 255 characters (Unicode code points) before trimming
     * surrounding whitespace. Matches the option's values case-insensitively after trimming
     * surrounding whitespace. A value that is no longer active is accepted only on a variant
     * update, when it matches the variant's current selection for that option. minLength: 1.
     * maxLength: 255.
     */
    "value": string;
};
/** An option name and value you choose to identify a product variant, such as Size and Large. */
export type ProductVariantSelectedOptionRequestInput = ProductVariantSelectedOptionRequest;
