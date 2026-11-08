import type { Address, AcceptFulfillmentRequestInput, ApplyInventoryCountRequestInput } from './types-0.js';
import type { ResponseMeta } from './types-51.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { TipPaymentIntentAllocation, TipValueSettlementAllocation } from './types-62.js';
import type { ContextSummary, CreateCategoryRequestInput } from './types-7.js';
import type { DeliveryWindowRequest, DeliveryWindowRequestInput } from './types-21.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-28.js';
import type { PayOrderResponse } from './types-43.js';
import type { GetReturnDispositionResponse, GetReturnResponse, GetReturnResolutionResponse, GiftCard } from './types-25.js';
import type { ReadinessAction, ReadinessRequirements } from './types-49.js';
import type { GiftCardTransaction } from './types-26.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { UpdateCategoryRequestInput } from './types-63.js';
/** The customer address reference or address used as the buyer's subscription service location. */
export type BuyerSubscriptionServiceLocation = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
};
/** One of the buyer's event tickets, with the admission code its QR code holds. */
export type BuyerTicket = {
    /**
     * The 16-character Crockford base32 admission code to show as a QR code and print as
     * XXXX-XXXX-XXXX-XXXX. A bearer secret. Absent when the ticket is voided, on orders whose
     * buyer_email differs from the email Flint verified, and for sessions Flint didn't verify:
     * merchant access links, customer sessions created with an API key, links emailed to another
     * address, and checkout links a merchant reads or requests after payment. minLength: 16.
     * maxLength: 16.
     */
    "admission_code"?: string;
    /** Attendee name. Null when none was given. minLength: 1. maxLength: 200. */
    "attendee_name": string | null;
    /**
     * When the ticket was admitted. Null when the ticket is not checked in. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "checked_in_at": string | null;
    /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The event details the order captured at checkout. Absent when the order didn't record them.
     * Event details captured when the ticket's order was placed.
     */
    "event"?: BuyerTicketEvent;
    /** The buyer's order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
    "status": "issued" | "checked_in" | "voided" | (string & {});
    /** Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". */
    "ticket_id": string;
    /** The event prefix and sequence, such as GAL001. It doesn't admit anyone on its own. */
    "ticket_number": string;
};
/** Event details captured when the ticket's order was placed. */
export type BuyerTicketEvent = {
    /** Where the event takes place. */
    "location"?: string;
    /** Event name when the order was placed. */
    "name": string;
    /**
     * When the event starts. RFC 3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string;
    /** IANA time zone Flint shows the event in. */
    "timezone"?: string;
};
/** A page of `BuyerTicket` objects. */
export type BuyerTicketListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerTicket}. One of the buyer's event tickets, with the admission code its QR code holds.
     */
    "data": Array<BuyerTicket>;
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
 * A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how
 * it was allocated to payments.
 */
export type BuyerTip = {
    /**
     * Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Optional description that stays on the tip for your reporting. */
    "description"?: string;
    /**
     * The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "effective_amount_money": MoneyValue;
    /** Optional name that stays on the tip for your reporting. */
    "name"?: string;
    /** Example: "tip_01KEZF7C00JRPYP11RTMB97MYH". */
    "order_tip_id": string;
    /**
     *  [] (Value): {@link TipPaymentIntentAllocation}. The part of a tip paid through one payment
     * intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How much of the tip has been refunded. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * How much of the tip has been paid. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "settled_amount_money": MoneyValue;
    /**
     * Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled
     * before collection. Value enum: "requested", "paid", "partially_refunded", "refunded",
     * "canceled".
     */
    "status": "requested" | "paid" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     *  [] (Value): {@link TipValueSettlementAllocation}. The part of a tip paid through one value
     * settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/** The request body for: List authorized CLI contexts. */
export type CLIContextsRequest = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli" | (string & {});
    "refresh_token": string;
});
/** The request body for: List authorized CLI contexts. */
export type CLIContextsRequestInput = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli";
    "refresh_token": string;
})
    & ({
    "client_secret"?: never;
});
/** The response for: List authorized CLI contexts. */
export type CLIContextsResponse = {
    /**
     * maxItems: 100. [] (Value): {@link ContextSummary}. A context the CLI is authorized to use: a
     * sandbox or live account, with its ID, merchant ID, and name.
     */
    "contexts": Array<ContextSummary>;
    /** Example: "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa". */
    "oauth_session_id": string;
};
/** The request body for: Start CLI browser login. */
export type CLIDeviceRequest = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli" | (string & {});
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may
     * use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /**
     * Creates a session with selectable merchant and environment contexts. Defaults to contexts
     * when omitted. Default: "contexts". Value enum: "contexts".
     */
    "session_mode"?: "contexts" | (string & {});
});
/** The request body for: Start CLI browser login. */
export type CLIDeviceRequestInput = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli";
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live";
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may
     * use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /**
     * Creates a session with selectable merchant and environment contexts. Defaults to contexts
     * when omitted. Default: "contexts". Value enum: "contexts".
     */
    "session_mode"?: "contexts";
})
    & ({
    "client_secret"?: never;
});
/** The response for: Review CLI session consent; Start CLI browser login. */
export type CLIDeviceResponse = {
    /** minLength: 1. maxLength: 4096. */
    "device_code": string;
    /** minimum: 1. maximum: 1800. */
    "expires_in": number;
    /** minimum: 1. maximum: 60. */
    "interval": number;
    /** minLength: 4. maxLength: 32. pattern: ^[!-~]+$. */
    "user_code": string;
    "verification_uri": string;
    "verification_uri_complete": string;
};
/** The request body for: Review CLI session consent. */
export type CLIReauthorizeRequest = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli" | (string & {});
    /**
     * minLength: 1. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    "refresh_token": string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may
     * use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /** Value enum: "additive". */
    "scope_mode"?: "additive" | (string & {});
    /** Value enum: "contexts". */
    "session_mode": "contexts" | (string & {});
});
/** The request body for: Review CLI session consent. */
export type CLIReauthorizeRequestInput = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli";
    /**
     * minLength: 1. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live";
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    "refresh_token": string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may
     * use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /** Value enum: "additive". */
    "scope_mode"?: "additive";
    /** Value enum: "contexts". */
    "session_mode": "contexts";
})
    & ({
    "client_secret"?: never;
});
/**
 * The rate result you supply for one delivery method and choice group when creating a delivery
 * quote with caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequest = {
    /** minLength: 1. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "delivery_choice_group_id": string;
    /** minLength: 1. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". */
    "delivery_method_revision_id": string;
    /**
     * Your outcome for a caller-priced delivery method, selected by `type`: available with a price
     * and windows, unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequest;
};
/**
 * The rate result you supply for one delivery method and choice group when creating a delivery
 * quote with caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequestInput = {
    /** minLength: 1. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "delivery_choice_group_id": string;
    /** minLength: 1. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". */
    "delivery_method_revision_id": string;
    /**
     * Your outcome for a caller-priced delivery method, selected by `type`: available with a price
     * and windows, unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequestInput;
};
/**
 * Your outcome for a caller-priced delivery method, selected by `type`: available with a price and
 * windows, unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequest = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at"?: string;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "available", "unavailable", "cannot_calculate". */
    "type": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestAvailable = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at": string;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
})
    & ({
    /** Value enum: "available". */
    "type": "available" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at": string;
});
/** The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestAvailableInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at": string | globalThis.Date;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "available". */
    "type": "available";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Value enum: "available". */
    "type": "available";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at": string | globalThis.Date;
});
/** The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculate = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    "retryable": boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at"?: string;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
})
    & ({
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    "retryable": boolean;
});
/** The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    "retryable": boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    "retryable": boolean;
});
/**
 * Your outcome for a caller-priced delivery method, selected by `type`: available with a price and
 * windows, unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequestInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "available", "unavailable", "cannot_calculate". */
    "type": "available" | "unavailable" | "cannot_calculate";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string | globalThis.Date;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput & object, readonly unknown[]>));
/** The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestUnavailable = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at"?: string;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
})
    & ({
    /** Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
});
/** The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestUnavailableInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
});
/** Cancels fulfillment work that has not completed. */
export type CancelFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/** The request body for: Cancel a gift card notification. */
export type CancelGiftCardNotificationRequestInput = {};
/** Closes an open physical count without changing stock. */
export type CancelInventoryCountRequestInput = ApplyInventoryCountRequestInput;
/** Cancels requested quantity that hasn't departed. */
export type CancelInventoryTransferRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_canceled_quantity (Required): integer.
     * Cumulative quantity that should be canceled before departure. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** Cancels requested quantity that hasn't departed. */
export type CancelInventoryTransferRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_canceled_quantity (Required): integer.
     * Cumulative quantity that should be canceled before departure. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelMeSubscriptionRequest = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelMeSubscriptionRequestInput = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
};
export type CancelOrderPaymentAttemptResponse = PayOrderResponse;
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequest = {};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequestInput = {};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequest = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequestInput = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnDispositionResponse = GetReturnDispositionResponse;
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnLineItemResponse = GetReturnResponse;
/** The request body for: Cancel return. */
export type CancelReturnRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return. */
export type CancelReturnRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return resolution. */
export type CancelReturnResolutionRequestInput = CancelReturnRequestInput;
export type CancelReturnResolutionResponse = GetReturnResolutionResponse;
export type CancelReturnResponse = GetReturnResponse;
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelSubscriptionRequest = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in
     * cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelSubscriptionRequestInput = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in
     * cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
/** Merchant capability readiness for a payment or money movement capability. */
export type CapabilityReadiness = {
    /**
     * Flint-owned capability name. Payment capabilities describe transaction acceptance readiness;
     * money movement capabilities describe payout and balance movement readiness. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings".
     */
    "capability": "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Product domain this capability belongs to: payments for payment acceptance or money_movement
     * for balances and payouts. Value enum: "money_movement", "payments".
     */
    "domain": "money_movement" | "payments" | (string & {});
    /**
     * Actions that can remediate or refresh this capability when Flint can suggest one. []
     * (Value): {@link ReadinessAction}. A step that moves a merchant capability or readiness axis
     * forward, with the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Merchant requirements that affect this capability. Account information requirements for a
     * merchant, grouped as currently due, eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
    /**
     * Current readiness status for this capability. Value enum: "ready", "pending", "blocked",
     * "not_requested", "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for
     * onboarding_not_started, requirements_due, requirements_past_due and pending_verification,
     * and platform_review for Flint's own review. `null` when no reason applies. Value enum:
     * "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {});
};
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequest = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequestInput = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/**
 * Card details on a payment method: brand, expiration month and year, last four digits, and the
 * wallet when one was used.
 */
export type CardDetails = {
    /**
     * The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb",
     * "unionpay".
     */
    "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Month the card expires, from 1 to 12. Format: int32. */
    "exp_month": number;
    /** Four-digit year the card expires. Format: int32. */
    "exp_year": number;
    /** Last four digits of the card number. */
    "last4": string;
    /**
     * The wallet the card came from. Absent for a card entered directly. Value enum: "apple_pay",
     * "google_pay".
     */
    "wallet"?: "apple_pay" | "google_pay" | (string & {});
};
/** The request body for: Record a cash-out. */
export type CashOutGiftCardRequest = {
    /**
     * Amount of cash you paid the buyer outside Flint, taken off the gift card's balance. Above
     * zero, in the card's currency, and not more than the card's unreserved value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Your reference for the cash you paid the buyer outside Flint, such as a receipt number.
     * Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: 1.
     * maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Record a cash-out. */
export type CashOutGiftCardRequestInput = {
    /**
     * Amount of cash you paid the buyer outside Flint, taken off the gift card's balance. Above
     * zero, in the card's currency, and not more than the card's unreserved value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Your reference for the cash you paid the buyer outside Flint, such as a receipt number.
     * Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: 1.
     * maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/**
 * The result of recording a gift card cash-out: the updated gift card and the transactions it
 * created.
 */
export type CashOutGiftCardResult = {
    /**
     * The gift card after the cash-out. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The transactions the cash-out posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CashOutGiftCardResult` data. */
export type CashOutGiftCardResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of recording
     * a gift card cash-out: the updated gift card and the transactions it created.
     */
    "data": CashOutGiftCardResult;
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
/** The source of a catalog variant line's selected net unit price. */
export type CatalogPricing = {
    /** Minimum quantity of the applied break. Null when the base price applies. Format: int64. */
    "minimum_quantity": number | null;
    /**
     * Price list providing the selected schedule. Null when the variant's default schedule
     * applies. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string | null;
    /**
     * Source of the selected schedule. New source values may be added. Value enum: "variant",
     * "price_list".
     */
    "source": "variant" | "price_list" | (string & {});
};
export type CategoriesCreateParams = (InputValue<CreateCategoryRequestInput>)
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
export type CategoriesDeleteParams = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
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
export type CategoriesGetParams = DisputesAcceptParams;
export type CategoriesListParams = {
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
     * Exact handle match. Handles are lowercase, so matching is case-sensitive with no
     * normalization; a value that isn't a valid handle returns 400 INVALID_REQUEST. maxLength:
     * 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across category ID, external reference ID, handle, name, and description. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as ctg_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to handle; ties are broken by category_id. Default: "handle".
     * Value enum: "handle", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
    /** Sort direction. Defaults to asc. Default: "asc". Value enum: "asc", "desc". */
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
export type CategoriesUpdateParams = (InputValue<UpdateCategoryRequestInput>)
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
