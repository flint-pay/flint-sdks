import type {
    FulfillmentTransitionRequestAcceptInput,
    FulfillmentTransitionRequestCancelInput,
    FulfillmentTransitionRequestCompleteInput,
    FulfillmentTransitionRequestDispatchInput,
    FulfillmentTransitionRequestFailInput,
    FulfillmentTransitionRequestHoldInput
} from './types-17.js';
import type { InputValue } from '../runtime.js';
import type { CreateFulfillmentEventRequestInput, CreateGiftCardFundingDispositionRequestInput } from './types-6.js';
import type { CreateShipmentRequestInput } from './types-9.js';
import type { UpdateFulfillmentRequestInput } from './types-48.js';
import type { CheckoutRedirects, CheckoutRedirectsRequestInput } from './types-4.js';
import type { ResponseMeta, ReturnDisposition, ReturnInspection } from './types-40.js';
import type { ReturnLineItem, ReturnPolicy, ReturnPolicyRevision, ReturnReason, ReturnReceipt } from './types-41.js';
import type { ReturnResolution, ReturnResource } from './types-42.js';
import type { GiftCardRestriction } from './types-19.js';
import type { MoneyValue } from './types-31.js';
import type { AdjustGiftCardBalanceRequestInput } from './types-0.js';
import type { CashOutGiftCardRequestInput } from './types-3.js';
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestInput}. The request body for: Transition
 * fulfillment.
 */
export type FulfillmentTransitionRequestInput = ((FulfillmentTransitionRequestReleaseHoldInput)
    | (FulfillmentTransitionRequestCompleteInput)
    | (FulfillmentTransitionRequestCancelInput)
    | (FulfillmentTransitionRequestHoldInput)
    | (FulfillmentTransitionRequestStartInput)
    | (FulfillmentTransitionRequestMarkReadyInput)
    | (FulfillmentTransitionRequestFailInput)
    | (FulfillmentTransitionRequestScheduleInput)
    | (FulfillmentTransitionRequestAcceptInput)
    | (FulfillmentTransitionRequestMarkPreparingInput)
    | (FulfillmentTransitionRequestMarkPickedInput)
    | (FulfillmentTransitionRequestMarkPackedInput)
    | (FulfillmentTransitionRequestDispatchInput)
    | (FulfillmentTransitionRequestMarkNoShowInput));
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkNoShow}. The `mark_no_show` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkNoShow = {
    /** Shape $ (Value): string.  Value enum: "mark_no_show". */
    "action": "mark_no_show" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "customer_no_show", "provider_no_show",
     * "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkNoShowInput}. The `mark_no_show` variant
 * of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkNoShowInput = {
    /** Shape $ (Value): string.  Value enum: "mark_no_show". */
    "action": "mark_no_show";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Value enum: "customer_no_show", "provider_no_show",
     * "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other";
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPackedInput}. The `mark_packed` variant
 * of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPackedInput = {
    /** Shape $ (Value): string.  Value enum: "mark_packed". */
    "action": "mark_packed";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPicked}. The `mark_picked` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPicked = {
    /** Shape $ (Value): string.  Value enum: "mark_picked". */
    "action": "mark_picked" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPickedInput}. The `mark_picked` variant
 * of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPickedInput = {
    /** Shape $ (Value): string.  Value enum: "mark_picked". */
    "action": "mark_picked";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPreparing}. The `mark_preparing` variant
 * of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPreparing = {
    /** Shape $ (Value): string.  Value enum: "mark_preparing". */
    "action": "mark_preparing" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPreparingInput}. The `mark_preparing`
 * variant of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPreparingInput = {
    /** Shape $ (Value): string.  Value enum: "mark_preparing". */
    "action": "mark_preparing";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkReady}. The `mark_ready` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkReady = {
    /** Shape $ (Value): string.  Value enum: "mark_ready". */
    "action": "mark_ready" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkReadyInput}. The `mark_ready` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkReadyInput = {
    /** Shape $ (Value): string.  Value enum: "mark_ready". */
    "action": "mark_ready";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestReleaseHold}. The `release_hold` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestReleaseHold = {
    /** Shape $ (Value): string.  Value enum: "release_hold". */
    "action": "release_hold" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestReleaseHoldInput}. The `release_hold`
 * variant of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestReleaseHoldInput = {
    /** Shape $ (Value): string.  Value enum: "release_hold". */
    "action": "release_hold";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestSchedule}. The `schedule` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestSchedule = {
    /** Shape $ (Value): string.  Value enum: "schedule". */
    "action": "schedule" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at": string;
    /** Shape $ (Value): string. IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestScheduleInput}. The `schedule` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestScheduleInput = {
    /** Shape $ (Value): string.  Value enum: "schedule". */
    "action": "schedule";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at": string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at": string | globalThis.Date;
    /** Shape $ (Value): string. IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestStart}. The `start` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestStart = {
    /** Shape $ (Value): string.  Value enum: "start". */
    "action": "start" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestStartInput}. The `start` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestStartInput = {
    /** Shape $ (Value): string.  Value enum: "start". */
    "action": "start";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
export type FulfillmentsCreateEventInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateFulfillmentEventRequestInput}. The request body for: Create
     * fulfillment event.
     */
    "body": InputValue<CreateFulfillmentEventRequestInput>;
};
export type FulfillmentsCreateShipmentInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateShipmentRequestInput}. The request body for: Create shipment.
     */
    "body": InputValue<CreateShipmentRequestInput>;
};
export type FulfillmentsGetInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order", "packages", "shipments". Shape $[]
     * (Value): string. Value enum: "order", "packages", "shipments".
     */
    "expand"?: InputValue<Array<"order" | "packages" | "shipments">>;
};
export type FulfillmentsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
     * "packed", "dispatched", "no_show". Shape $[] (Value): string. Value enum: "pending",
     * "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<Array<"pending"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "shipment", "pickup",
     * "local_delivery", "digital", "service". Shape $[] (Value): string. Value enum: "shipment",
     * "pickup", "local_delivery", "digital", "service".
     */
    "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at",
     * "scheduled_start_at", "terminal_at".
     */
    "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type FulfillmentsTransitionInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link FulfillmentTransitionRequestInput}. The request body for: Transition
     * fulfillment.
     */
    "body": InputValue<FulfillmentTransitionRequestInput>;
};
export type FulfillmentsUpdateInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order", "packages", "shipments". Shape $[]
     * (Value): string. Value enum: "order", "packages", "shipments".
     */
    "expand"?: InputValue<Array<"order" | "packages" | "shipments">>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateFulfillmentRequestInput}. Provide at most one fulfillment
     * details object: pickup_details, local_delivery_details, digital_details, or service_details.
     * Shipment execution details belong to shipments and packages. A supplied detail field must
     * match the stored fulfillment type. Omit details for metadata-only updates. Even null detail
     * fields count toward exclusivity.
     */
    "body": InputValue<UpdateFulfillmentRequestInput>;
};
/**
 * Shape $ (Value): {@link GetOrCreateReturnResolutionCheckoutSessionRequest}. The request body
 * for: Create a Return resolution checkout session for the current buyer; Get or create return
 * resolution checkout session.
 */
export type GetOrCreateReturnResolutionCheckoutSessionRequest = ({
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. Where the checkout sends the buyer after paying, such as the
     * Return's page in the customer account. Limited to 2048 characters (Unicode code points)
     * before trimming surrounding whitespace. It must be an HTTPS address of the merchant's
     * customer account: /{merchant_id} on Flint's account host, the merchant's active custom
     * account domain, or the host of customer_account.merchant_account_url when the merchant hosts
     * the account. HTTP is accepted only for localhost in test mode. Anything else fails with
     * INVALID_RETURN_URL. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Shape $ (Value): string. Defaults to hosted. The same surface reuses the open checkout. A
     * different surface replaces it only while no payment is in progress; otherwise the request
     * returns CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
});
/**
 * Shape $ (Value): {@link GetOrCreateReturnResolutionCheckoutSessionRequestInput}. The request
 * body for: Create a Return resolution checkout session for the current buyer; Get or create
 * return resolution checkout session.
 */
export type GetOrCreateReturnResolutionCheckoutSessionRequestInput = ({
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the
     * buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. Where the checkout sends the buyer after paying, such as the
     * Return's page in the customer account. Limited to 2048 characters (Unicode code points)
     * before trimming surrounding whitespace. It must be an HTTPS address of the merchant's
     * customer account: /{merchant_id} on Flint's account host, the merchant's active custom
     * account domain, or the host of customer_account.merchant_account_url when the merchant hosts
     * the account. HTTP is accepted only for localhost in test mode. Anything else fails with
     * INVALID_RETURN_URL. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Shape $ (Value): string. Defaults to hosted. The same surface reuses the open checkout. A
     * different surface replaces it only while no payment is in progress; otherwise the request
     * returns CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded";
});
/**
 * Shape $ (Value): {@link GetReturnDispositionResponse}. A response containing `ReturnDisposition`
 * data.
 */
export type GetReturnDispositionResponse = {
    /**
     * Shape $ (Value): {@link ReturnDisposition}. A decision about how returned merchandise will
     * be handled.
     */
    "data": ReturnDisposition;
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
 * Shape $ (Value): {@link GetReturnInspectionResponse}. A response containing `ReturnInspection`
 * data.
 */
export type GetReturnInspectionResponse = {
    /**
     * Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned items.
     */
    "data": ReturnInspection;
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
 * Shape $ (Value): {@link GetReturnLineItemResponse}. A response containing `ReturnLineItem` data.
 */
export type GetReturnLineItemResponse = {
    /** Shape $ (Value): {@link ReturnLineItem}. An item included in a return request. */
    "data": ReturnLineItem;
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
/** Shape $ (Value): {@link GetReturnPolicyResponse}. A response containing `ReturnPolicy` data. */
export type GetReturnPolicyResponse = {
    /**
     * Shape $ (Value): {@link ReturnPolicy}. Rules governing whether and how purchased items can
     * be returned.
     */
    "data": ReturnPolicy;
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
 * Shape $ (Value): {@link GetReturnPolicyRevisionResponse}. A response containing
 * `ReturnPolicyRevision` data.
 */
export type GetReturnPolicyRevisionResponse = {
    /** Shape $ (Value): {@link ReturnPolicyRevision}. A saved revision of a return policy. */
    "data": ReturnPolicyRevision;
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
/** Shape $ (Value): {@link GetReturnReasonResponse}. A response containing `ReturnReason` data. */
export type GetReturnReasonResponse = {
    /**
     * Shape $ (Value): {@link ReturnReason}. A reason customers can select when requesting a
     * return.
     */
    "data": ReturnReason;
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
 * Shape $ (Value): {@link GetReturnReceiptResponse}. A response containing `ReturnReceipt` data.
 */
export type GetReturnReceiptResponse = {
    /**
     * Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a location.
     */
    "data": ReturnReceipt;
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
 * Shape $ (Value): {@link GetReturnResolutionResponse}. A response containing `ReturnResolution`
 * data.
 */
export type GetReturnResolutionResponse = {
    /**
     * Shape $ (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data": ReturnResolution;
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
/** Shape $ (Value): {@link GetReturnResponse}. A response containing `Return` data. */
export type GetReturnResponse = {
    /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
    "data": ReturnResource;
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
 * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance includes
 * reserved value; available value is balance minus reservations. Frozen value remains part of
 * outstanding liability. Gift cards are independent resources and cannot be transferred across
 * merchants or currencies.
 */
export type GiftCard = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /** Shape $ (Value): string or null. */
    "customer_id": string | null;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "last_loaded_at": string | null;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "last_redeemed_at": string | null;
    /**
     * Shape $ (Value): string. Last four characters of the card's current code. minLength: 4.
     * maxLength: 4.
     */
    "last4": string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link GiftCardRestriction}. The restrictions that keep the card
     * frozen. unfreeze is supported only when every restriction is merchant_freeze. A
     * funding_dispute with dispute_status lost needs a gift card funding disposition. Shape $[]
     * (Value): {@link GiftCardRestriction}. A restriction on a gift card, either a merchant freeze
     * or a funding dispute, with its reason or dispute details.
     */
    "restrictions": Array<GiftCardRestriction>;
    /** Shape $ (Value): string.  Value enum: "pending", "active", "frozen", "closed". */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "freeze", "unfreeze", "close". Shape $[] (Value):
     * string. Value enum: "freeze", "unfreeze", "close".
     */
    "supported_actions": Array<"freeze" | "unfreeze" | "close" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
export type GiftCardAdjustmentsCreateInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AdjustGiftCardBalanceRequestInput}. The request body for: Adjust
     * gift card value.
     */
    "body": InputValue<AdjustGiftCardBalanceRequestInput>;
};
export type GiftCardCashOutsCreateInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CashOutGiftCardRequestInput}. The request body for: Record a
     * cash-out.
     */
    "body": InputValue<CashOutGiftCardRequestInput>;
};
/**
 * Shape $ (Value): {@link GiftCardCustomAmountBounds}. The minimum and maximum amounts a buyer can
 * choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBounds = {
    /**
     * Shape $ (Value): object. Largest gift card value buyers can choose, in the face value
     * currency. Shape $.amount (Required): integer string. Amount in the currency's smallest unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string.
     * Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "maximum_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * Shape $ (Value): object. Smallest gift card value buyers can choose, in the face value
     * currency. Shape $.amount (Required): integer string. Amount in the currency's smallest unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string.
     * Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "minimum_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
};
/**
 * Shape $ (Value): {@link GiftCardCustomAmountBoundsInput}. The minimum and maximum amounts a
 * buyer can choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBoundsInput = {
    /**
     * Shape $ (Value): object. Largest gift card value buyers can choose, in the face value
     * currency. Shape $.amount (Required): integer string. Amount in the currency's smallest unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string.
     * Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "maximum_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * Shape $ (Value): object. Smallest gift card value buyers can choose, in the face value
     * currency. Shape $.amount (Required): integer string. Amount in the currency's smallest unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string.
     * Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "minimum_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
};
/**
 * Shape $ (Value): {@link GiftCardFundingDisposition}. A merchant decision to honor gift card
 * value after its funding payment lost a dispute.
 */
export type GiftCardFundingDisposition = {
    /** Shape $ (Value): string. When the disposition was created. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. How Flint handles the lost funding. honor_value keeps the affected
     * cards' unspent value spendable and removes the freeze this dispute placed on them. Value
     * enum: "honor_value".
     */
    "disposition": "honor_value" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The whole disputed payment amount, which can include
     * consideration for other purchases. It is separate from the original gift card consideration
     * and honored face value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "dispute_amount_money": MoneyValue;
    /** Shape $ (Value): string. The lost dispute this disposition resolves. */
    "dispute_id": string;
    /** Shape $ (Value): string. Stable identifier of the disposition. */
    "gift_card_funding_disposition_id": string;
    /**
     * Shape $ (Value): Array of string. Gift cards whose value this disposition honors, including
     * replacement cards that received value from the disputed funding. Shape $[] (Value): string.
     */
    "gift_card_ids": Array<string>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Unspent value that stays spendable under this
     * disposition, summed across the affected cards, including replacement cards that received
     * value from the disputed funding. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "honored_value_money": MoneyValue;
    /**
     * Shape $ (Value): string. The Idempotency-Key sent with the request that created this
     * disposition.
     */
    "idempotency_key": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. What the buyer paid for the gift card value the
     * disputed payment funded, summed across its funding loads. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "original_gift_card_consideration_money": MoneyValue;
    /** Shape $ (Value): string. The disputed payment that funded the gift card value. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Part of honored_value_money that pending redemptions
     * held when the disposition was created. It stays reserved for them. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "preserved_reserved_value_money": MoneyValue;
    /** Shape $ (Value): string. Your reason for honoring the value, from the create request. */
    "reason_message": string;
};
/**
 * Shape $ (Value): {@link GiftCardFundingDispositionListResponse}. A page of
 * `GiftCardFundingDisposition` objects.
 */
export type GiftCardFundingDispositionListResponse = {
    /**
     * Shape $ (Value): Array of {@link GiftCardFundingDisposition}. Shape $[] (Value): {@link
     * GiftCardFundingDisposition}. A merchant decision to honor gift card value after its funding
     * payment lost a dispute.
     */
    "data": Array<GiftCardFundingDisposition>;
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
 * Shape $ (Value): {@link GiftCardFundingDispositionResponse}. A response containing
 * `GiftCardFundingDisposition` data.
 */
export type GiftCardFundingDispositionResponse = {
    /**
     * Shape $ (Value): {@link GiftCardFundingDisposition}. A merchant decision to honor gift card
     * value after its funding payment lost a dispute.
     */
    "data": GiftCardFundingDisposition;
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
export type GiftCardFundingDispositionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateGiftCardFundingDispositionRequestInput}. The request body for:
     * Create a gift card funding disposition.
     */
    "body": InputValue<CreateGiftCardFundingDispositionRequestInput>;
};
export type GiftCardFundingDispositionsGetInput = {
    /** Shape $ (Value): string. */
    "gift_card_funding_disposition_id": InputValue<string>;
};
export type GiftCardFundingDispositionsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. maxLength: 255. */
    "dispute_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link GiftCardFundingDispute}. A dispute on the payment that funded a gift
 * card load, with its status and any loss resolution.
 */
export type GiftCardFundingDispute = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "dispute_id": string;
    /** Shape $ (Value): boolean. */
    "requires_resolution": boolean;
    /**
     * Shape $ (Value): {@link GiftCardFundingLossResolution} or null. Shape $.anyOf[1] (Value):
     * {@link GiftCardFundingLossResolution}. How a lost funding dispute was resolved for a gift
     * card load, such as honoring the card's value, with a reason message. Shape $.anyOf[2]
     * (Value): null.
     */
    "resolution": ((GiftCardFundingLossResolution) | (null));
    /** Shape $ (Value): string.  Value enum: "open", "won", "lost". */
    "status": "open" | "won" | "lost" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link GiftCardFundingLossResolution}. How a lost funding dispute was resolved
 * for a gift card load, such as honoring the card's value, with a reason message.
 */
export type GiftCardFundingLossResolution = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string.  Value enum: "honor_value". */
    "disposition": "honor_value" | (string & {});
    /** Shape $ (Value): string. */
    "gift_card_funding_disposition_id": string;
    /** Shape $ (Value): string. */
    "reason_message": string;
};
/**
 * Shape $ (Value): {@link GiftCardFundingSource}. Where the value of a gift card load came from,
 * such as an external payment, a Flint payment, an import, or an adjustment, with your reference
 * for it.
 */
export type GiftCardFundingSource = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /**
     * Shape $ (Value): string. Value enum: "external_payment", "flint_payment",
     * "flint_manual_payment", "import", "adjustment", "gift_card_refund",
     * "gift_card_purchase_refund_recovery", "store_credit".
     */
    "funding_source_type": "external_payment"
        | "flint_payment"
        | "flint_manual_payment"
        | "import"
        | "adjustment"
        | "gift_card_refund"
        | "gift_card_purchase_refund_recovery"
        | "store_credit"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & ((Exclude<GiftCardFundingSourceExternalPayment & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintPayment & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintManualPayment & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceImport & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceAdjustment & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardRefund & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardPurchaseRefundRecovery & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceStoreCredit & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceAdjustment}. The `adjustment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceAdjustment = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "adjustment". */
    "funding_source_type": "adjustment" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & ({
    /** Shape $ (Value): any.  Value enum: "adjustment". */
    "funding_source_type"?: unknown;
});
/**
 * Shape $ (Value): {@link GiftCardFundingSourceAdjustmentInput}. The `adjustment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceAdjustmentInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "adjustment". */
    "funding_source_type": "adjustment";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & ({
    /** Shape $ (Value): any.  Value enum: "adjustment". */
    "funding_source_type"?: ("adjustment") & ("adjustment");
});
/**
 * Shape $ (Value): {@link GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceExternalPayment = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "external_payment". */
    "funding_source_type": "external_payment" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "external_payment". */
    "funding_source_type"?: unknown;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceExternalPaymentInput}. The `external_payment`
 * variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceExternalPaymentInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "external_payment". */
    "funding_source_type": "external_payment";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "external_payment". */
    "funding_source_type"?: ("external_payment") & ("external_payment");
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_id"?: never;
})));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment`
 * variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceFlintManualPayment = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "flint_manual_payment". */
    "funding_source_type": "flint_manual_payment" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id": string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "flint_manual_payment". */
    "funding_source_type"?: unknown;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceFlintManualPaymentInput}. The
 * `flint_manual_payment` variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceFlintManualPaymentInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "flint_manual_payment". */
    "funding_source_type": "flint_manual_payment";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "flint_manual_payment". */
    "funding_source_type"?: ("flint_manual_payment") & ("flint_manual_payment");
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceFlintPayment}. The `flint_payment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceFlintPayment = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "flint_payment". */
    "funding_source_type": "flint_payment" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "flint_payment". */
    "funding_source_type"?: unknown;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceFlintPaymentInput}. The `flint_payment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceFlintPaymentInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "flint_payment". */
    "funding_source_type": "flint_payment";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "flint_payment". */
    "funding_source_type"?: ("flint_payment") & ("flint_payment");
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
})
    & ({
    "order_manual_payment_id"?: never;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
 * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceGiftCardPurchaseRefundRecovery = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type": "gift_card_purchase_refund_recovery" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput}. The
 * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type": "gift_card_purchase_refund_recovery";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type"?: ("gift_card_purchase_refund_recovery") & ("gift_card_purchase_refund_recovery");
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_manual_payment_id"?: never;
})));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceGiftCardRefund = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_refund". */
    "funding_source_type": "gift_card_refund" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "gift_card_refund". */
    "funding_source_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceGiftCardRefundInput}. The `gift_card_refund`
 * variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceGiftCardRefundInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_refund". */
    "funding_source_type": "gift_card_refund";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "gift_card_refund". */
    "funding_source_type"?: ("gift_card_refund") & ("gift_card_refund");
})
    & ({
    "payment_intent_id"?: never;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceImport}. The `import` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceImport = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "import". */
    "funding_source_type": "import" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "import". */
    "funding_source_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceImportInput}. The `import` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceImportInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "import". */
    "funding_source_type": "import";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "import". */
    "funding_source_type"?: ("import") & ("import");
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_id"?: never;
})));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceInput}. Where the value of a gift card load came
 * from, such as an external payment, a Flint payment, an import, or an adjustment, with your
 * reference for it.
 */
export type GiftCardFundingSourceInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /**
     * Shape $ (Value): string. Value enum: "external_payment", "flint_payment",
     * "flint_manual_payment", "import", "adjustment", "gift_card_refund",
     * "gift_card_purchase_refund_recovery", "store_credit".
     */
    "funding_source_type": "external_payment"
        | "flint_payment"
        | "flint_manual_payment"
        | "import"
        | "adjustment"
        | "gift_card_refund"
        | "gift_card_purchase_refund_recovery"
        | "store_credit";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & ((Exclude<GiftCardFundingSourceExternalPaymentInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintPaymentInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintManualPaymentInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceImportInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceAdjustmentInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardRefundInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceStoreCreditInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceStoreCredit = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "store_credit". */
    "funding_source_type": "store_credit" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "store_credit". */
    "funding_source_type"?: unknown;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id": string;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceStoreCreditInput}. The `store_credit` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceStoreCreditInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "store_credit". */
    "funding_source_type": "store_credit";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "store_credit". */
    "funding_source_type"?: ("store_credit") & ("store_credit");
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
})
    & ({
    "order_manual_payment_id"?: never;
}));
