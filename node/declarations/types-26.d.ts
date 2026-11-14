import type { InputValue } from '../runtime.js';
import type { HoldFulfillmentRequestInput } from './types-28.js';
import type {
    MarkFulfillmentNoShowRequestInput,
    MarkFulfillmentPackedRequestInput,
    MarkFulfillmentPickedRequestInput,
    MarkFulfillmentPreparingRequestInput,
    MarkFulfillmentReadyRequestInput
} from './types-35.js';
import type { ReleaseFulfillmentHoldRequestInput } from './types-53.js';
import type { ScheduleFulfillmentRequestInput } from './types-59.js';
import type { StartFulfillmentRequestInput } from './types-60.js';
import type { UpdateFulfillmentRequestInput } from './types-67.js';
import type { ResponseMeta } from './types-54.js';
import type { ReturnDisposition, ReturnInspection, ReturnLineItem } from './types-55.js';
import type { ReturnPolicy, ReturnPolicyRevision, ReturnReason, ReturnReceipt } from './types-56.js';
import type { ReturnResolution, ReturnResource } from './types-57.js';
import type {
    GiftCardRestriction,
    GiftCardPurchaseRefundAllocation,
    GiftCardPurchaseRefundValueHold,
    GiftCardPurchaseRestoration,
    GiftCardRefundProvenance
} from './types-27.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { MerchantWebhookEnvelope } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { CreateGiftCardFundingDispositionRequestInput, CreateGiftCardLoadRequestInput } from './types-9.js';
import type { DisputesAcceptParams } from './types-24.js';
export type FulfillmentsHoldParams = (InputValue<HoldFulfillmentRequestInput>)
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
export type FulfillmentsListParams = {
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
     * Include related objects in the response. Supported expansions: order. Expansion requires
     * commerce.orders.read. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Filter by order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Exact match on customer_id. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Search across fulfillment_id and external_reference_id. Also matches an exact order number.
     * Text fields match any part of the value, and %, _ and \ are ordinary characters, not
     * wildcards. IDs match from the start and need the type prefix, such as ful_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by exact fulfillment status. Values within this filter are ORed; combined with other
     * filters using AND. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show". Value
     * enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
     * "packed", "dispatched", "no_show". anyOf[1][] (Value): string. Value enum: "pending",
     * "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[2] (Value):
     * string. Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<("pending"
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
        | "no_show")
        | readonly ("pending"
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
        | "no_show")[]>;
    /**
     * Filter by fulfillment type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". anyOf[1][] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery", "digital", "service", "handover". anyOf[2] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
     * "handover".
     */
    "type"?: InputValue<("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover")
        | readonly ("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover")[]>;
    /**
     * Filter by assigned Location ID. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by fulfillment_id. Default:
     * "created_at". Value enum: "created_at", "scheduled_start_at", "terminal_at".
     */
    "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
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
export type FulfillmentsMarkNoShowParams = (InputValue<MarkFulfillmentNoShowRequestInput>)
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
export type FulfillmentsMarkPackedParams = (InputValue<MarkFulfillmentPackedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type FulfillmentsMarkPickedParams = (InputValue<MarkFulfillmentPickedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type FulfillmentsMarkPreparingParams = (InputValue<MarkFulfillmentPreparingRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type FulfillmentsMarkReadyParams = (InputValue<MarkFulfillmentReadyRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type FulfillmentsReleaseHoldParams = (InputValue<ReleaseFulfillmentHoldRequestInput>
    | {
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type FulfillmentsScheduleParams = (InputValue<ScheduleFulfillmentRequestInput>)
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
export type FulfillmentsStartParams = (InputValue<StartFulfillmentRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type FulfillmentsUpdateParams = (InputValue<UpdateFulfillmentRequestInput>)
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
/** A response containing `ReturnDisposition` data. */
export type GetReturnDispositionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A decision about how
     * returned merchandise will be handled.
     */
    "data": ReturnDisposition;
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
/** A response containing `ReturnInspection` data. */
export type GetReturnInspectionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An assessment of the
     * condition of returned items.
     */
    "data": ReturnInspection;
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
/** A response containing `ReturnLineItem` data. */
export type GetReturnLineItemResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An item included in a
     * return request.
     */
    "data": ReturnLineItem;
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
/** A response containing `ReturnPolicy` data. */
export type GetReturnPolicyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Rules governing whether
     * and how purchased items can be returned.
     */
    "data": ReturnPolicy;
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
/** A response containing `ReturnPolicyRevision` data. */
export type GetReturnPolicyRevisionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A saved revision of a
     * return policy.
     */
    "data": ReturnPolicyRevision;
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
/** A response containing `ReturnReason` data. */
export type GetReturnReasonResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A reason customers can
     * select when requesting a return.
     */
    "data": ReturnReason;
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
/** A response containing `ReturnReceipt` data. */
export type GetReturnReceiptResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A record of returned
     * items arriving at a location.
     */
    "data": ReturnReceipt;
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
/** A response containing `ReturnResolution` data. */
export type GetReturnResolutionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The refund, exchange, or
     * other outcome of a return.
     */
    "data": ReturnResolution;
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
/** A response containing `Return` data. */
export type GetReturnResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A request to send
     * purchased items back.
     */
    "data": ReturnResource;
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
 * Merchant-issued purchased gift card. Posted balance includes reserved value; available value is
 * balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are
 * independent resources and cannot be transferred across merchants or currencies.
 */
export type GiftCard = {
    /**
     * The balance minus reserved value: what can be spent now. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * The posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /**
     * Origin of the current code: generated means Flint issued a random code; imported means the
     * merchant supplied an existing code during import. Rotating the code resets this to
     * generated. Value enum: "generated", "imported".
     */
    "code_source": "generated" | "imported" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /**
     * ID of the customer associated with the card. `null` when no customer is associated. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * Caller-owned identifier for this resource in an external system. `null` when none is set.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Unique identifier for this gift card, prefixed `gc_`. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "last_loaded_at": string | null;
    /**
     * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "last_redeemed_at": string | null;
    /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
    "last4": string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Value held for redemptions in progress. It isn't available to other payments until the
     * redemption succeeds or is released. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /**
     * The restrictions that keep the card frozen. unfreeze is supported only when every
     * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card
     * funding disposition. [] (Value): {@link GiftCardRestriction}. A restriction on a gift card,
     * either a merchant freeze or a funding dispute, with its reason or dispute details.
     */
    "restrictions": Array<GiftCardRestriction>;
    /**
     * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
     * "pending", "active", "frozen", "closed".
     */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /**
     * Lifecycle actions accepted for the stored card state, independent of the caller's
     * credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out",
     * "close", "freeze", "unfreeze". [] (Value): string. Value enum: "adjust_balance", "cash_out",
     * "close", "freeze", "unfreeze".
     */
    "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
export type GiftCardCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_money": MoneyValue;
            "balance_money": MoneyValue;
            "code_source": "generated" | "imported" | (string & {});
            "created_at": string;
            "currency": "USD" | (string & {});
            "customer_id": string | null;
            "external_reference_id": string | null;
            "gift_card_id": string;
            "last_loaded_at": string | null;
            "last_redeemed_at": string | null;
            "last4": string;
            "merchant_id": string;
            "reserved_money": MoneyValue;
            "restrictions": Array<GiftCardRestriction>;
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_money": MoneyValue;
            "balance_money": MoneyValue;
            "code_source": "generated" | "imported" | (string & {});
            "created_at": string;
            "currency": "USD" | (string & {});
            "customer_id": string | null;
            "external_reference_id": string | null;
            "gift_card_id": string;
            "last_loaded_at": string | null;
            "last_redeemed_at": string | null;
            "last4": string;
            "merchant_id": string;
            "reserved_money": MoneyValue;
            "restrictions": Array<GiftCardRestriction>;
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card.created";
});
/**
 * The `gift_card.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_money (Required): {@link MoneyValue}. The balance minus
     * reserved value: what can be spent now. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.balance_money (Required): {@link MoneyValue}. The
     * posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.code_source
     * (Required): string. Origin of the current code: generated means Flint issued a random code;
     * imported means the merchant supplied an existing code during import. Rotating the code
     * resets this to generated. Value enum: "generated", "imported". object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". Value enum: "USD". object.customer_id (Required):
     * string or null. ID of the customer associated with the card. `null` when no customer is
     * associated. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id
     * (Required): string or null. Caller-owned identifier for this resource in an external system.
     * `null` when none is set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.gift_card_id (Required): string. Unique identifier for this gift card, prefixed
     * `gc_`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.last_loaded_at (Required): string or
     * null. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.last_redeemed_at (Required): string or
     * null. RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.last4 (Required): string. Last four characters of
     * the card's current code. minLength: 4. maxLength: 4. object.merchant_id (Required): string.
     * ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.reserved_money (Required): {@link MoneyValue}. Value held for redemptions in
     * progress. It isn't available to other payments until the redemption succeeds or is released.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.restrictions (Required): Array of {@link GiftCardRestriction}. The restrictions that
     * keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze.
     * A funding_dispute with dispute_status lost needs a gift card funding disposition.
     * object.restrictions[] (Value): {@link GiftCardRestriction}. A restriction on a gift card,
     * either a merchant freeze or a funding dispute, with its reason or dispute details.
     * object.status (Required): string. Where the card is in its lifecycle. Only an `active` card
     * can be spent. Value enum: "pending", "active", "frozen", "closed". object.supported_actions
     * (Required): Array of string. Lifecycle actions accepted for the stored card state,
     * independent of the caller's credentials. Empty when no action is available. [] enum:
     * "adjust_balance", "cash_out", "close", "freeze", "unfreeze". object.supported_actions[]
     * (Value): string. Value enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_money (Required): {@link MoneyValue}. The balance minus reserved value: what
         * can be spent now. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. balance_money (Required): {@link MoneyValue}. The posted balance,
         * including value reserved for redemptions in progress. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. code_source (Required): string.
         * Origin of the current code: generated means Flint issued a random code; imported means
         * the merchant supplied an existing code during import. Rotating the code resets this to
         * generated. Value enum: "generated", "imported". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". Value enum: "USD". customer_id (Required): string or null. ID of the
         * customer associated with the card. `null` when no customer is associated. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when none is
         * set. minLength: 1. maxLength: 255. Example: "warehouse-1842". gift_card_id (Required):
         * string. Unique identifier for this gift card, prefixed `gc_`. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG". last_loaded_at (Required): string or null. RFC3339
         * timestamp. `null` when no value has been loaded onto the card. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". last_redeemed_at (Required): string or null. RFC3339
         * timestamp. `null` when the card has never been redeemed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". last4 (Required): string. Last four characters of the card's
         * current code. minLength: 4. maxLength: 4. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * reserved_money (Required): {@link MoneyValue}. Value held for redemptions in progress.
         * It isn't available to other payments until the redemption succeeds or is released.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * restrictions (Required): Array of {@link GiftCardRestriction}. The restrictions that
         * keep the card frozen. unfreeze is supported only when every restriction is
         * merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding
         * disposition. restrictions[] (Value): {@link GiftCardRestriction}. A restriction on a
         * gift card, either a merchant freeze or a funding dispute, with its reason or dispute
         * details. status (Required): string. Where the card is in its lifecycle. Only an `active`
         * card can be spent. Value enum: "pending", "active", "frozen", "closed".
         * supported_actions (Required): Array of string. Lifecycle actions accepted for the stored
         * card state, independent of the caller's credentials. Empty when no action is available.
         * [] enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
         * supported_actions[] (Value): string. Value enum: "adjust_balance", "cash_out", "close",
         * "freeze", "unfreeze". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. Format: int64.
         */
        "object": {
            /**
             * The balance minus reserved value: what can be spent now. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * The posted balance, including value reserved for redemptions in progress. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "balance_money": MoneyValue;
            /**
             * Origin of the current code: generated means Flint issued a random code; imported
             * means the merchant supplied an existing code during import. Rotating the code resets
             * this to generated. Value enum: "generated", "imported".
             */
            "code_source": "generated" | "imported" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". Value enum: "USD".
             */
            "currency": "USD" | (string & {});
            /**
             * ID of the customer associated with the card. `null` when no customer is associated.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when none is
             * set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Unique identifier for this gift card, prefixed `gc_`. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "last_loaded_at": string | null;
            /**
             * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "last_redeemed_at": string | null;
            /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
            "last4": string;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Value held for redemptions in progress. It isn't available to other payments until
             * the redemption succeeds or is released. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * The restrictions that keep the card frozen. unfreeze is supported only when every
             * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a
             * gift card funding disposition. [] (Value): {@link GiftCardRestriction}. A
             * restriction on a gift card, either a merchant freeze or a funding dispute, with its
             * reason or dispute details.
             */
            "restrictions": Array<GiftCardRestriction>;
            /**
             * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
             * "pending", "active", "frozen", "closed".
             */
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted for the stored card state, independent of the caller's
             * credentials. Empty when no action is available. [] enum: "adjust_balance",
             * "cash_out", "close", "freeze", "unfreeze". [] (Value): string. Value enum:
             * "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
             */
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card.created". */
    "event_type"?: "gift_card.created";
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
 * The `gift_card.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_money (Required): {@link MoneyValue}. The balance minus
     * reserved value: what can be spent now. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.balance_money (Required): {@link MoneyValue}. The
     * posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.code_source
     * (Required): string. Origin of the current code: generated means Flint issued a random code;
     * imported means the merchant supplied an existing code during import. Rotating the code
     * resets this to generated. Value enum: "generated", "imported". object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". Value enum: "USD". object.customer_id (Required):
     * string or null. ID of the customer associated with the card. `null` when no customer is
     * associated. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id
     * (Required): string or null. Caller-owned identifier for this resource in an external system.
     * `null` when none is set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.gift_card_id (Required): string. Unique identifier for this gift card, prefixed
     * `gc_`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.last_loaded_at (Required): string or
     * null. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.last_redeemed_at (Required): string or
     * null. RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.last4 (Required): string. Last four characters of
     * the card's current code. minLength: 4. maxLength: 4. object.merchant_id (Required): string.
     * ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.reserved_money (Required): {@link MoneyValue}. Value held for redemptions in
     * progress. It isn't available to other payments until the redemption succeeds or is released.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.restrictions (Required): Array of {@link GiftCardRestriction}. The restrictions that
     * keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze.
     * A funding_dispute with dispute_status lost needs a gift card funding disposition.
     * object.restrictions[] (Value): {@link GiftCardRestriction}. A restriction on a gift card,
     * either a merchant freeze or a funding dispute, with its reason or dispute details.
     * object.status (Required): string. Where the card is in its lifecycle. Only an `active` card
     * can be spent. Value enum: "pending", "active", "frozen", "closed". object.supported_actions
     * (Required): Array of string. Lifecycle actions accepted for the stored card state,
     * independent of the caller's credentials. Empty when no action is available. [] enum:
     * "adjust_balance", "cash_out", "close", "freeze", "unfreeze". object.supported_actions[]
     * (Value): string. Value enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_money (Required): {@link MoneyValue}. The balance minus reserved value: what
         * can be spent now. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. balance_money (Required): {@link MoneyValue}. The posted balance,
         * including value reserved for redemptions in progress. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. code_source (Required): string.
         * Origin of the current code: generated means Flint issued a random code; imported means
         * the merchant supplied an existing code during import. Rotating the code resets this to
         * generated. Value enum: "generated", "imported". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". Value enum: "USD". customer_id (Required): string or null. ID of the
         * customer associated with the card. `null` when no customer is associated. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when none is
         * set. minLength: 1. maxLength: 255. Example: "warehouse-1842". gift_card_id (Required):
         * string. Unique identifier for this gift card, prefixed `gc_`. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG". last_loaded_at (Required): string or null. RFC3339
         * timestamp. `null` when no value has been loaded onto the card. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". last_redeemed_at (Required): string or null. RFC3339
         * timestamp. `null` when the card has never been redeemed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". last4 (Required): string. Last four characters of the card's
         * current code. minLength: 4. maxLength: 4. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * reserved_money (Required): {@link MoneyValue}. Value held for redemptions in progress.
         * It isn't available to other payments until the redemption succeeds or is released.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * restrictions (Required): Array of {@link GiftCardRestriction}. The restrictions that
         * keep the card frozen. unfreeze is supported only when every restriction is
         * merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding
         * disposition. restrictions[] (Value): {@link GiftCardRestriction}. A restriction on a
         * gift card, either a merchant freeze or a funding dispute, with its reason or dispute
         * details. status (Required): string. Where the card is in its lifecycle. Only an `active`
         * card can be spent. Value enum: "pending", "active", "frozen", "closed".
         * supported_actions (Required): Array of string. Lifecycle actions accepted for the stored
         * card state, independent of the caller's credentials. Empty when no action is available.
         * [] enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
         * supported_actions[] (Value): string. Value enum: "adjust_balance", "cash_out", "close",
         * "freeze", "unfreeze". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. Format: int64.
         */
        "object": {
            /**
             * The balance minus reserved value: what can be spent now. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * The posted balance, including value reserved for redemptions in progress. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "balance_money": MoneyValue;
            /**
             * Origin of the current code: generated means Flint issued a random code; imported
             * means the merchant supplied an existing code during import. Rotating the code resets
             * this to generated. Value enum: "generated", "imported".
             */
            "code_source": "generated" | "imported" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". Value enum: "USD".
             */
            "currency": "USD" | (string & {});
            /**
             * ID of the customer associated with the card. `null` when no customer is associated.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when none is
             * set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Unique identifier for this gift card, prefixed `gc_`. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "last_loaded_at": string | null;
            /**
             * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "last_redeemed_at": string | null;
            /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
            "last4": string;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Value held for redemptions in progress. It isn't available to other payments until
             * the redemption succeeds or is released. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * The restrictions that keep the card frozen. unfreeze is supported only when every
             * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a
             * gift card funding disposition. [] (Value): {@link GiftCardRestriction}. A
             * restriction on a gift card, either a merchant freeze or a funding dispute, with its
             * reason or dispute details.
             */
            "restrictions": Array<GiftCardRestriction>;
            /**
             * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
             * "pending", "active", "frozen", "closed".
             */
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted for the stored card state, independent of the caller's
             * credentials. Empty when no action is available. [] enum: "adjust_balance",
             * "cash_out", "close", "freeze", "unfreeze". [] (Value): string. Value enum:
             * "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
             */
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card.created". */
    "event_type"?: "gift_card.created";
});
/**
 * The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBounds = {
    /**
     * Largest gift card value buyers can choose, in the face value currency. Currency must be USD.
     * Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "maximum_money": MoneyValue;
    /**
     * Smallest gift card value buyers can choose, in the face value currency. Currency must be
     * USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_money": MoneyValue;
};
/**
 * The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBoundsRequestInput = {
    /**
     * Largest gift card value buyers can choose, in the face value currency. Currency must be USD.
     * Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "maximum_money": MoneyValueInput;
    /**
     * Smallest gift card value buyers can choose, in the face value currency. Currency must be
     * USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_money": MoneyValueInput;
};
/** A merchant decision to honor gift card value after its funding payment lost a dispute. */
export type GiftCardFundingDisposition = {
    /** When the disposition was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * How Flint handles the lost funding. honor_value keeps the affected cards' unspent value
     * spendable and removes the freeze this dispute placed on them. Value enum: "honor_value".
     */
    "disposition": "honor_value" | (string & {});
    /**
     * The whole disputed payment amount, which can include consideration for other purchases. It
     * is separate from the original gift card consideration and honored face value. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "dispute_amount_money": MoneyValue;
    /** The lost dispute this disposition resolves. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
    "dispute_id": string;
    /** Stable identifier of the disposition. Example: "gfd_01KEZF7C0077Q8RK3Q4FD2DTW8". */
    "gift_card_funding_disposition_id": string;
    /**
     * Gift cards whose value this disposition honors, including replacement cards that received
     * value from the disputed funding. [] (Value): string. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_ids": Array<string>;
    /**
     * Unspent value that stays spendable under this disposition, summed across the affected cards,
     * including replacement cards that received value from the disputed funding. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "honored_value_money": MoneyValue;
    /** The Idempotency-Key sent with the request that created this disposition. */
    "idempotency_key": string;
    /**
     * What the buyer paid for the gift card value the disputed payment funded, summed across its
     * funding loads. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "original_gift_card_consideration_money": MoneyValue;
    /**
     * The disputed payment that funded the gift card value. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Part of honored_value_money that pending redemptions held when the disposition was created.
     * It stays reserved for them. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "preserved_reserved_value_money": MoneyValue;
    /** Your reason for honoring the value, from the create request. */
    "reason_message": string;
};
/** A page of `GiftCardFundingDisposition` objects. */
export type GiftCardFundingDispositionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * GiftCardFundingDisposition}. A merchant decision to honor gift card value after its funding
     * payment lost a dispute.
     */
    "data": Array<GiftCardFundingDisposition>;
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
/** A response containing `GiftCardFundingDisposition` data. */
export type GiftCardFundingDispositionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant decision to
     * honor gift card value after its funding payment lost a dispute.
     */
    "data": GiftCardFundingDisposition;
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
export type GiftCardFundingDispositionsCreateParams = (InputValue<CreateGiftCardFundingDispositionRequestInput>)
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
export type GiftCardFundingDispositionsGetParams = DisputesAcceptParams;
export type GiftCardFundingDispositionsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact, case-sensitive filter. maxLength: 255. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
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
 * A dispute on the payment that funded a gift card load, with its status and any loss resolution.
 */
export type GiftCardFundingDispute = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The dispute on the payment that funded this load. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id": string;
    /**
     * true when the dispute is lost and no funding disposition exists for it yet. Create one with
     * POST /v1/gift-card-funding-dispositions.
     */
    "requires_resolution": boolean;
    /**
     * The funding disposition recorded for this lost dispute. `null` when you have not created one
     * yet. anyOf[1] (Value): {@link GiftCardFundingLossResolution}. How a lost funding dispute was
     * resolved for a gift card load, such as honoring the card's value, with a reason message.
     * anyOf[2] (Value): null.
     */
    "resolution": ((GiftCardFundingLossResolution) | (null));
    /**
     * Where the dispute on the funding payment stands. Spending of the value it funded stays
     * restricted while it is `open` or `lost`. Value enum: "open", "won", "lost".
     */
    "status": "open" | "won" | "lost" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
/**
 * How a lost funding dispute was resolved for a gift card load, such as honoring the card's value,
 * with a reason message.
 */
export type GiftCardFundingLossResolution = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * What the merchant decided about the card's value after the funding payment lost a dispute.
     * Value enum: "honor_value".
     */
    "disposition": "honor_value" | (string & {});
    /**
     * ID of the funding disposition recorded for the lost dispute. Example:
     * "gfd_01KEZF7C0077Q8RK3Q4FD2DTW8".
     */
    "gift_card_funding_disposition_id": string;
    /** The note you gave when you created the disposition. */
    "reason_message": string;
};
/**
 * Where the value of a gift card load came from, such as an external payment, a Flint payment, an
 * import, or an adjustment, with your reference for it.
 */
export type GiftCardFundingSource = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /**
     * Where the value came from. Value enum: "external_payment", "flint_payment",
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
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
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
/** The `adjustment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceAdjustment = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "adjustment". */
    "funding_source_type": "adjustment" | (string & {});
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
})
    & ({
    /** Where the value came from. Value enum: "adjustment". */
    "funding_source_type"?: unknown;
});
/** The `adjustment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceAdjustmentRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "adjustment". */
    "funding_source_type": "adjustment";
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & ({
    /** Where the value came from. Value enum: "adjustment". */
    "funding_source_type"?: ("adjustment") & ("adjustment");
});
/** The `external_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceExternalPayment = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "external_payment". */
    "funding_source_type": "external_payment" | (string & {});
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
})
    & (({
    /** Where the value came from. Value enum: "external_payment". */
    "funding_source_type"?: unknown;
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
}));
/** The `external_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceExternalPaymentRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "external_payment". */
    "funding_source_type": "external_payment";
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & (({
    /** Where the value came from. Value enum: "external_payment". */
    "funding_source_type"?: ("external_payment") & ("external_payment");
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_id"?: never;
})));
/** The `flint_manual_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceFlintManualPayment = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "flint_manual_payment". */
    "funding_source_type": "flint_manual_payment" | (string & {});
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id": string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
})
    & (({
    /** Where the value came from. Value enum: "flint_manual_payment". */
    "funding_source_type"?: unknown;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id": string;
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
}));
/** The `flint_manual_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceFlintManualPaymentRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "flint_manual_payment". */
    "funding_source_type": "flint_manual_payment";
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & (({
    /** Where the value came from. Value enum: "flint_manual_payment". */
    "funding_source_type"?: ("flint_manual_payment") & ("flint_manual_payment");
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/** The `flint_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceFlintPayment = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "flint_payment". */
    "funding_source_type": "flint_payment" | (string & {});
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
})
    & (({
    /** Where the value came from. Value enum: "flint_payment". */
    "funding_source_type"?: unknown;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
}));
/** The `flint_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceFlintPaymentRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "flint_payment". */
    "funding_source_type": "flint_payment";
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & (({
    /** Where the value came from. Value enum: "flint_payment". */
    "funding_source_type"?: ("flint_payment") & ("flint_payment");
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    & ({
    "order_manual_payment_id"?: never;
}));
/** The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceGiftCardPurchaseRefundRecovery = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type": "gift_card_purchase_refund_recovery" | (string & {});
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
})
    & (({
    /** Where the value came from. Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type"?: unknown;
}));
/** The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type": "gift_card_purchase_refund_recovery";
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & (({
    /** Where the value came from. Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type"?: ("gift_card_purchase_refund_recovery") & ("gift_card_purchase_refund_recovery");
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_manual_payment_id"?: never;
})));
/** The `gift_card_refund` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceGiftCardRefund = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "gift_card_refund". */
    "funding_source_type": "gift_card_refund" | (string & {});
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
})
    & (({
    /** Where the value came from. Value enum: "gift_card_refund". */
    "funding_source_type"?: unknown;
}));
/** The `gift_card_refund` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceGiftCardRefundRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "gift_card_refund". */
    "funding_source_type": "gift_card_refund";
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & (({
    /** Where the value came from. Value enum: "gift_card_refund". */
    "funding_source_type"?: ("gift_card_refund") & ("gift_card_refund");
})
    & ({
    "payment_intent_id"?: never;
}));
/** The `import` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceImport = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "import". */
    "funding_source_type": "import" | (string & {});
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
})
    & (({
    /** Where the value came from. Value enum: "import". */
    "funding_source_type"?: unknown;
}));
/** The `import` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceImportRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "import". */
    "funding_source_type": "import";
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & (({
    /** Where the value came from. Value enum: "import". */
    "funding_source_type"?: ("import") & ("import");
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_id"?: never;
})));
/**
 * Where the value of a gift card load came from, such as an external payment, a Flint payment, an
 * import, or an adjustment, with your reference for it.
 */
export type GiftCardFundingSourceRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /**
     * Where the value came from. Value enum: "external_payment", "flint_payment",
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
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & ((Exclude<GiftCardFundingSourceExternalPaymentRequestInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintPaymentRequestInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintManualPaymentRequestInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceImportRequestInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceAdjustmentRequestInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardRefundRequestInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceStoreCreditRequestInput & object, readonly unknown[]>));
/** The `store_credit` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceStoreCredit = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "store_credit". */
    "funding_source_type": "store_credit" | (string & {});
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string;
})
    & (({
    /** Where the value came from. Value enum: "store_credit". */
    "funding_source_type"?: unknown;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string;
}));
/** The `store_credit` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceStoreCreditRequestInput = ({
    /**
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string;
    /** Where the value came from. Value enum: "store_credit". */
    "funding_source_type": "store_credit";
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the manual payment on the order that funded the value. Required for
     * `flint_manual_payment`. minLength: 1. maxLength: 255. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: never;
})
    & (({
    /** Where the value came from. Value enum: "store_credit". */
    "funding_source_type"?: ("store_credit") & ("store_credit");
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * ID of the order that funded the value. Required for `flint_manual_payment` and
     * `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength:
     * 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    & ({
    "order_manual_payment_id"?: never;
}));
/** A page of `GiftCard` objects. */
export type GiftCardListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * GiftCard}. Merchant-issued purchased gift card. Posted balance includes reserved value;
     * available value is balance minus reservations. Frozen value remains part of outstanding
     * liability. Gift cards are independent resources and cannot be transferred across merchants
     * or currencies.
     */
    "data": Array<GiftCard>;
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
 * Top-level child of a gift card. Value and consideration are separate. External funding and
 * import provenance are merchant-attested; no payment is collected by recording them. Replacement
 * refund lots retain original funding provenance and do not represent new paid funding.
 */
export type GiftCardLoad = {
    /**
     * What the buyer paid for the value, separate from `value_money`. `null` when no payment
     * amount is recorded. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "consideration_money": ((MoneyValue) | (null));
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Restrictions tied to original funding, including value restored to replacement cards. A win
     * clears only its own restriction. A loss keeps spending restricted until you create a gift
     * card funding disposition. [] (Value): {@link GiftCardFundingDispute}. A dispute on the
     * payment that funded a gift card load, with its status and any loss resolution.
     */
    "funding_disputes": Array<GiftCardFundingDispute>;
    /** ID of the gift card the load added value to. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /**
     * Unique identifier for this gift card load, prefixed `gcl_`. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
    /**
     * Your Idempotency-Key for the command that created this record. `null` when Flint created it
     * or no key was sent.
     */
    "idempotency_key": string | null;
    /**
     * Pending original cash refunds holding unspent value on this descendant funding lot. Unknown
     * provider outcomes retain these holds. [] (Value): {@link GiftCardPurchaseRefundValueHold}.
     * Gift card value held back by a purchase refund, with the refund, the root gift card and
     * load, and the amount held.
     */
    "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
    /**
     * Cash refunds and manual payment reversals against this original funding load. Pending
     * refunds reserve their value; confirmed success removes it, and confirmed failure releases
     * the hold. [] (Value): {@link GiftCardPurchaseRefundAllocation}. An entry in a gift card
     * load's purchase refunds.
     */
    "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
    /**
     * Set when the buyer paid again for value that reversing a gift card purchase had removed, and
     * this load restored it. Names the original card and load, the purchase refund entry that
     * removed the value, and the purchased unit. Omitted for other loads. Links a gift card load
     * to the original card and load it restores value to after a purchase refund, for one unit of
     * an order line item.
     */
    "purchase_restoration"?: GiftCardPurchaseRestoration;
    /**
     * Traces a load made by a refund back to its original funding. `null` when the load wasn't
     * made by a refund. Traces a gift card load made by a refund back to its original funding
     * source, root gift card and load, and source refund.
     */
    "refund_provenance"?: GiftCardRefundProvenance;
    /**
     * The part of this load's value that refunds of redemptions moved onto replacement gift cards.
     * Omitted until a refund moves value. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refund_transferred_money"?: MoneyValue;
    /**
     * The value from this load still on the card: not yet spent, reversed, or moved to a
     * replacement card. It includes value held by a reserved redemption. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "remaining_money": MoneyValue;
    /**
     * The value removed from this load by refunding or reversing the purchase that funded it. It
     * goes down again when a purchase refund fails and the value is restored. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "reversed_money": MoneyValue;
    /**
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it.
     */
    "source": GiftCardFundingSource;
    /**
     * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "source_created_at": string | null;
    /**
     * The face value the load adds to the card. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "value_money": MoneyValue;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
export type GiftCardLoadCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "consideration_money": ((MoneyValue) | (null));
            "created_at": string;
            "funding_disputes": Array<GiftCardFundingDispute>;
            "gift_card_id": string;
            "gift_card_load_id": string;
            "idempotency_key": string | null;
            "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
            "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
            "purchase_restoration"?: GiftCardPurchaseRestoration;
            "refund_provenance"?: GiftCardRefundProvenance;
            "refund_transferred_money"?: MoneyValue;
            "remaining_money": MoneyValue;
            "reversed_money": MoneyValue;
            "source": GiftCardFundingSource;
            "source_created_at": string | null;
            "value_money": MoneyValue;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card_load.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "consideration_money": ((MoneyValue) | (null));
            "created_at": string;
            "funding_disputes": Array<GiftCardFundingDispute>;
            "gift_card_id": string;
            "gift_card_load_id": string;
            "idempotency_key": string | null;
            "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
            "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
            "purchase_restoration"?: GiftCardPurchaseRestoration;
            "refund_provenance"?: GiftCardRefundProvenance;
            "refund_transferred_money"?: MoneyValue;
            "remaining_money": MoneyValue;
            "reversed_money": MoneyValue;
            "source": GiftCardFundingSource;
            "source_created_at": string | null;
            "value_money": MoneyValue;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card_load.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card_load.created";
});
/**
 * The `gift_card_load.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardLoadCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.consideration_money (Required): {@link MoneyValue} or null. What
     * the buyer paid for the value, separate from `value_money`. `null` when no payment amount is
     * recorded. object.consideration_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.consideration_money.anyOf[2] (Value): null. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.funding_disputes (Required): Array of {@link GiftCardFundingDispute}. Restrictions
     * tied to original funding, including value restored to replacement cards. A win clears only
     * its own restriction. A loss keeps spending restricted until you create a gift card funding
     * disposition. object.funding_disputes[] (Value): {@link GiftCardFundingDispute}. A dispute on
     * the payment that funded a gift card load, with its status and any loss resolution.
     * object.gift_card_id (Required): string. ID of the gift card the load added value to.
     * Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_load_id (Required): string.
     * Unique identifier for this gift card load, prefixed `gcl_`. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC". object.idempotency_key (Required): string or null. Your
     * Idempotency-Key for the command that created this record. `null` when Flint created it or no
     * key was sent. object.purchase_refund_value_holds (Optional): Array of {@link
     * GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding unspent value on
     * this descendant funding lot. Unknown provider outcomes retain these holds.
     * object.purchase_refund_value_holds[] (Value): {@link GiftCardPurchaseRefundValueHold}. Gift
     * card value held back by a purchase refund, with the refund, the root gift card and load, and
     * the amount held. object.purchase_refunds (Required): Array of {@link
     * GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against this
     * original funding load. Pending refunds reserve their value; confirmed success removes it,
     * and confirmed failure releases the hold. object.purchase_refunds[] (Value): {@link
     * GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
     * object.purchase_restoration (Optional): {@link GiftCardPurchaseRestoration}. Set when the
     * buyer paid again for value that reversing a gift card purchase had removed, and this load
     * restored it. Names the original card and load, the purchase refund entry that removed the
     * value, and the purchased unit. Omitted for other loads. Links a gift card load to the
     * original card and load it restores value to after a purchase refund, for one unit of an
     * order line item. object.refund_provenance (Optional): {@link GiftCardRefundProvenance}.
     * Traces a load made by a refund back to its original funding. `null` when the load wasn't
     * made by a refund. Traces a gift card load made by a refund back to its original funding
     * source, root gift card and load, and source refund. object.refund_transferred_money
     * (Optional): {@link MoneyValue}. The part of this load's value that refunds of redemptions
     * moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.remaining_money
     * (Required): {@link MoneyValue}. The value from this load still on the card: not yet spent,
     * reversed, or moved to a replacement card. It includes value held by a reserved redemption.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reversed_money (Required): {@link MoneyValue}. The value removed from this load by
     * refunding or reversing the purchase that funded it. It goes down again when a purchase
     * refund fails and the value is restored. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.source (Required): {@link GiftCardFundingSource}.
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. object.source_created_at (Required): string or null. RFC3339
     * timestamp. `null` when no source time was recorded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.value_money (Required): {@link MoneyValue}. The face value
     * the load adds to the card. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.version (Required): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * consideration_money (Required): {@link MoneyValue} or null. What the buyer paid for the
         * value, separate from `value_money`. `null` when no payment amount is recorded.
         * consideration_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. consideration_money.anyOf[2]
         * (Value): null. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". funding_disputes (Required): Array of {@link
         * GiftCardFundingDispute}. Restrictions tied to original funding, including value restored
         * to replacement cards. A win clears only its own restriction. A loss keeps spending
         * restricted until you create a gift card funding disposition. funding_disputes[] (Value):
         * {@link GiftCardFundingDispute}. A dispute on the payment that funded a gift card load,
         * with its status and any loss resolution. gift_card_id (Required): string. ID of the gift
         * card the load added value to. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
         * gift_card_load_id (Required): string. Unique identifier for this gift card load,
         * prefixed `gcl_`. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". idempotency_key (Required):
         * string or null. Your Idempotency-Key for the command that created this record. `null`
         * when Flint created it or no key was sent. purchase_refund_value_holds (Optional): Array
         * of {@link GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding
         * unspent value on this descendant funding lot. Unknown provider outcomes retain these
         * holds. purchase_refund_value_holds[] (Value): {@link GiftCardPurchaseRefundValueHold}.
         * Gift card value held back by a purchase refund, with the refund, the root gift card and
         * load, and the amount held. purchase_refunds (Required): Array of {@link
         * GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against
         * this original funding load. Pending refunds reserve their value; confirmed success
         * removes it, and confirmed failure releases the hold. purchase_refunds[] (Value): {@link
         * GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
         * purchase_restoration (Optional): {@link GiftCardPurchaseRestoration}. Set when the buyer
         * paid again for value that reversing a gift card purchase had removed, and this load
         * restored it. Names the original card and load, the purchase refund entry that removed
         * the value, and the purchased unit. Omitted for other loads. Links a gift card load to
         * the original card and load it restores value to after a purchase refund, for one unit of
         * an order line item. refund_provenance (Optional): {@link GiftCardRefundProvenance}.
         * Traces a load made by a refund back to its original funding. `null` when the load wasn't
         * made by a refund. Traces a gift card load made by a refund back to its original funding
         * source, root gift card and load, and source refund. refund_transferred_money (Optional):
         * {@link MoneyValue}. The part of this load's value that refunds of redemptions moved onto
         * replacement gift cards. Omitted until a refund moves value. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. remaining_money (Required):
         * {@link MoneyValue}. The value from this load still on the card: not yet spent, reversed,
         * or moved to a replacement card. It includes value held by a reserved redemption.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * reversed_money (Required): {@link MoneyValue}. The value removed from this load by
         * refunding or reversing the purchase that funded it. It goes down again when a purchase
         * refund fails and the value is restored. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. source (Required): {@link GiftCardFundingSource}.
         * Where the value came from, with your reference for it. Where the value of a gift card
         * load came from, such as an external payment, a Flint payment, an import, or an
         * adjustment, with your reference for it. source_created_at (Required): string or null.
         * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". value_money (Required): {@link MoneyValue}. The face value the
         * load adds to the card. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /**
             * What the buyer paid for the value, separate from `value_money`. `null` when no
             * payment amount is recorded. anyOf[1] (Value): {@link MoneyValue}. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value):
             * null.
             */
            "consideration_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Restrictions tied to original funding, including value restored to replacement
             * cards. A win clears only its own restriction. A loss keeps spending restricted until
             * you create a gift card funding disposition. [] (Value): {@link
             * GiftCardFundingDispute}. A dispute on the payment that funded a gift card load, with
             * its status and any loss resolution.
             */
            "funding_disputes": Array<GiftCardFundingDispute>;
            /**
             * ID of the gift card the load added value to. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card load, prefixed `gcl_`. Example:
             * "gcl_01KEZF7C00YJED2857SE0J6KWC".
             */
            "gift_card_load_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * Pending original cash refunds holding unspent value on this descendant funding lot.
             * Unknown provider outcomes retain these holds. [] (Value): {@link
             * GiftCardPurchaseRefundValueHold}. Gift card value held back by a purchase refund,
             * with the refund, the root gift card and load, and the amount held.
             */
            "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
            /**
             * Cash refunds and manual payment reversals against this original funding load.
             * Pending refunds reserve their value; confirmed success removes it, and confirmed
             * failure releases the hold. [] (Value): {@link GiftCardPurchaseRefundAllocation}. An
             * entry in a gift card load's purchase refunds.
             */
            "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
            /**
             * Set when the buyer paid again for value that reversing a gift card purchase had
             * removed, and this load restored it. Names the original card and load, the purchase
             * refund entry that removed the value, and the purchased unit. Omitted for other
             * loads. Links a gift card load to the original card and load it restores value to
             * after a purchase refund, for one unit of an order line item.
             */
            "purchase_restoration"?: GiftCardPurchaseRestoration;
            /**
             * Traces a load made by a refund back to its original funding. `null` when the load
             * wasn't made by a refund. Traces a gift card load made by a refund back to its
             * original funding source, root gift card and load, and source refund.
             */
            "refund_provenance"?: GiftCardRefundProvenance;
            /**
             * The part of this load's value that refunds of redemptions moved onto replacement
             * gift cards. Omitted until a refund moves value. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refund_transferred_money"?: MoneyValue;
            /**
             * The value from this load still on the card: not yet spent, reversed, or moved to a
             * replacement card. It includes value held by a reserved redemption. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "remaining_money": MoneyValue;
            /**
             * The value removed from this load by refunding or reversing the purchase that funded
             * it. It goes down again when a purchase refund fails and the value is restored.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "reversed_money": MoneyValue;
            /**
             * Where the value came from, with your reference for it. Where the value of a gift
             * card load came from, such as an external payment, a Flint payment, an import, or an
             * adjustment, with your reference for it.
             */
            "source": GiftCardFundingSource;
            /**
             * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "source_created_at": string | null;
            /**
             * The face value the load adds to the card. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "value_money": MoneyValue;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card_load.created". */
    "event_type"?: "gift_card_load.created";
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
 * The `gift_card_load.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardLoadCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.consideration_money (Required): {@link MoneyValue} or null. What
     * the buyer paid for the value, separate from `value_money`. `null` when no payment amount is
     * recorded. object.consideration_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.consideration_money.anyOf[2] (Value): null. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.funding_disputes (Required): Array of {@link GiftCardFundingDispute}. Restrictions
     * tied to original funding, including value restored to replacement cards. A win clears only
     * its own restriction. A loss keeps spending restricted until you create a gift card funding
     * disposition. object.funding_disputes[] (Value): {@link GiftCardFundingDispute}. A dispute on
     * the payment that funded a gift card load, with its status and any loss resolution.
     * object.gift_card_id (Required): string. ID of the gift card the load added value to.
     * Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_load_id (Required): string.
     * Unique identifier for this gift card load, prefixed `gcl_`. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC". object.idempotency_key (Required): string or null. Your
     * Idempotency-Key for the command that created this record. `null` when Flint created it or no
     * key was sent. object.purchase_refund_value_holds (Optional): Array of {@link
     * GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding unspent value on
     * this descendant funding lot. Unknown provider outcomes retain these holds.
     * object.purchase_refund_value_holds[] (Value): {@link GiftCardPurchaseRefundValueHold}. Gift
     * card value held back by a purchase refund, with the refund, the root gift card and load, and
     * the amount held. object.purchase_refunds (Required): Array of {@link
     * GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against this
     * original funding load. Pending refunds reserve their value; confirmed success removes it,
     * and confirmed failure releases the hold. object.purchase_refunds[] (Value): {@link
     * GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
     * object.purchase_restoration (Optional): {@link GiftCardPurchaseRestoration}. Set when the
     * buyer paid again for value that reversing a gift card purchase had removed, and this load
     * restored it. Names the original card and load, the purchase refund entry that removed the
     * value, and the purchased unit. Omitted for other loads. Links a gift card load to the
     * original card and load it restores value to after a purchase refund, for one unit of an
     * order line item. object.refund_provenance (Optional): {@link GiftCardRefundProvenance}.
     * Traces a load made by a refund back to its original funding. `null` when the load wasn't
     * made by a refund. Traces a gift card load made by a refund back to its original funding
     * source, root gift card and load, and source refund. object.refund_transferred_money
     * (Optional): {@link MoneyValue}. The part of this load's value that refunds of redemptions
     * moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.remaining_money
     * (Required): {@link MoneyValue}. The value from this load still on the card: not yet spent,
     * reversed, or moved to a replacement card. It includes value held by a reserved redemption.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reversed_money (Required): {@link MoneyValue}. The value removed from this load by
     * refunding or reversing the purchase that funded it. It goes down again when a purchase
     * refund fails and the value is restored. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.source (Required): {@link GiftCardFundingSource}.
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. object.source_created_at (Required): string or null. RFC3339
     * timestamp. `null` when no source time was recorded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.value_money (Required): {@link MoneyValue}. The face value
     * the load adds to the card. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.version (Required): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * consideration_money (Required): {@link MoneyValue} or null. What the buyer paid for the
         * value, separate from `value_money`. `null` when no payment amount is recorded.
         * consideration_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. consideration_money.anyOf[2]
         * (Value): null. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". funding_disputes (Required): Array of {@link
         * GiftCardFundingDispute}. Restrictions tied to original funding, including value restored
         * to replacement cards. A win clears only its own restriction. A loss keeps spending
         * restricted until you create a gift card funding disposition. funding_disputes[] (Value):
         * {@link GiftCardFundingDispute}. A dispute on the payment that funded a gift card load,
         * with its status and any loss resolution. gift_card_id (Required): string. ID of the gift
         * card the load added value to. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
         * gift_card_load_id (Required): string. Unique identifier for this gift card load,
         * prefixed `gcl_`. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". idempotency_key (Required):
         * string or null. Your Idempotency-Key for the command that created this record. `null`
         * when Flint created it or no key was sent. purchase_refund_value_holds (Optional): Array
         * of {@link GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding
         * unspent value on this descendant funding lot. Unknown provider outcomes retain these
         * holds. purchase_refund_value_holds[] (Value): {@link GiftCardPurchaseRefundValueHold}.
         * Gift card value held back by a purchase refund, with the refund, the root gift card and
         * load, and the amount held. purchase_refunds (Required): Array of {@link
         * GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against
         * this original funding load. Pending refunds reserve their value; confirmed success
         * removes it, and confirmed failure releases the hold. purchase_refunds[] (Value): {@link
         * GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
         * purchase_restoration (Optional): {@link GiftCardPurchaseRestoration}. Set when the buyer
         * paid again for value that reversing a gift card purchase had removed, and this load
         * restored it. Names the original card and load, the purchase refund entry that removed
         * the value, and the purchased unit. Omitted for other loads. Links a gift card load to
         * the original card and load it restores value to after a purchase refund, for one unit of
         * an order line item. refund_provenance (Optional): {@link GiftCardRefundProvenance}.
         * Traces a load made by a refund back to its original funding. `null` when the load wasn't
         * made by a refund. Traces a gift card load made by a refund back to its original funding
         * source, root gift card and load, and source refund. refund_transferred_money (Optional):
         * {@link MoneyValue}. The part of this load's value that refunds of redemptions moved onto
         * replacement gift cards. Omitted until a refund moves value. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. remaining_money (Required):
         * {@link MoneyValue}. The value from this load still on the card: not yet spent, reversed,
         * or moved to a replacement card. It includes value held by a reserved redemption.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * reversed_money (Required): {@link MoneyValue}. The value removed from this load by
         * refunding or reversing the purchase that funded it. It goes down again when a purchase
         * refund fails and the value is restored. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. source (Required): {@link GiftCardFundingSource}.
         * Where the value came from, with your reference for it. Where the value of a gift card
         * load came from, such as an external payment, a Flint payment, an import, or an
         * adjustment, with your reference for it. source_created_at (Required): string or null.
         * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". value_money (Required): {@link MoneyValue}. The face value the
         * load adds to the card. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /**
             * What the buyer paid for the value, separate from `value_money`. `null` when no
             * payment amount is recorded. anyOf[1] (Value): {@link MoneyValue}. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value):
             * null.
             */
            "consideration_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Restrictions tied to original funding, including value restored to replacement
             * cards. A win clears only its own restriction. A loss keeps spending restricted until
             * you create a gift card funding disposition. [] (Value): {@link
             * GiftCardFundingDispute}. A dispute on the payment that funded a gift card load, with
             * its status and any loss resolution.
             */
            "funding_disputes": Array<GiftCardFundingDispute>;
            /**
             * ID of the gift card the load added value to. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card load, prefixed `gcl_`. Example:
             * "gcl_01KEZF7C00YJED2857SE0J6KWC".
             */
            "gift_card_load_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * Pending original cash refunds holding unspent value on this descendant funding lot.
             * Unknown provider outcomes retain these holds. [] (Value): {@link
             * GiftCardPurchaseRefundValueHold}. Gift card value held back by a purchase refund,
             * with the refund, the root gift card and load, and the amount held.
             */
            "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
            /**
             * Cash refunds and manual payment reversals against this original funding load.
             * Pending refunds reserve their value; confirmed success removes it, and confirmed
             * failure releases the hold. [] (Value): {@link GiftCardPurchaseRefundAllocation}. An
             * entry in a gift card load's purchase refunds.
             */
            "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
            /**
             * Set when the buyer paid again for value that reversing a gift card purchase had
             * removed, and this load restored it. Names the original card and load, the purchase
             * refund entry that removed the value, and the purchased unit. Omitted for other
             * loads. Links a gift card load to the original card and load it restores value to
             * after a purchase refund, for one unit of an order line item.
             */
            "purchase_restoration"?: GiftCardPurchaseRestoration;
            /**
             * Traces a load made by a refund back to its original funding. `null` when the load
             * wasn't made by a refund. Traces a gift card load made by a refund back to its
             * original funding source, root gift card and load, and source refund.
             */
            "refund_provenance"?: GiftCardRefundProvenance;
            /**
             * The part of this load's value that refunds of redemptions moved onto replacement
             * gift cards. Omitted until a refund moves value. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refund_transferred_money"?: MoneyValue;
            /**
             * The value from this load still on the card: not yet spent, reversed, or moved to a
             * replacement card. It includes value held by a reserved redemption. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "remaining_money": MoneyValue;
            /**
             * The value removed from this load by refunding or reversing the purchase that funded
             * it. It goes down again when a purchase refund fails and the value is restored.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "reversed_money": MoneyValue;
            /**
             * Where the value came from, with your reference for it. Where the value of a gift
             * card load came from, such as an external payment, a Flint payment, an import, or an
             * adjustment, with your reference for it.
             */
            "source": GiftCardFundingSource;
            /**
             * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "source_created_at": string | null;
            /**
             * The face value the load adds to the card. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "value_money": MoneyValue;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card_load.created". */
    "event_type"?: "gift_card_load.created";
});
/** A page of `GiftCardLoad` objects. */
export type GiftCardLoadListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * GiftCardLoad}. Top-level child of a gift card. Value and consideration are separate.
     * External funding and import provenance are merchant-attested; no payment is collected by
     * recording them. Replacement refund lots retain original funding provenance and do not
     * represent new paid funding.
     */
    "data": Array<GiftCardLoad>;
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
/** A response containing `GiftCardLoad` data. */
export type GiftCardLoadResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Top-level child of a
     * gift card. Value and consideration are separate. External funding and import provenance are
     * merchant-attested; no payment is collected by recording them. Replacement refund lots retain
     * original funding provenance and do not represent new paid funding.
     */
    "data": GiftCardLoad;
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
export type GiftCardLoadUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "consideration_money": ((MoneyValue) | (null));
            "created_at": string;
            "funding_disputes": Array<GiftCardFundingDispute>;
            "gift_card_id": string;
            "gift_card_load_id": string;
            "idempotency_key": string | null;
            "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
            "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
            "purchase_restoration"?: GiftCardPurchaseRestoration;
            "refund_provenance"?: GiftCardRefundProvenance;
            "refund_transferred_money"?: MoneyValue;
            "remaining_money": MoneyValue;
            "reversed_money": MoneyValue;
            "source": GiftCardFundingSource;
            "source_created_at": string | null;
            "value_money": MoneyValue;
            "version": number;
        };
        "previous_attributes"?: Partial<GiftCardLoad>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card_load.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "consideration_money": ((MoneyValue) | (null));
            "created_at": string;
            "funding_disputes": Array<GiftCardFundingDispute>;
            "gift_card_id": string;
            "gift_card_load_id": string;
            "idempotency_key": string | null;
            "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
            "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
            "purchase_restoration"?: GiftCardPurchaseRestoration;
            "refund_provenance"?: GiftCardRefundProvenance;
            "refund_transferred_money"?: MoneyValue;
            "remaining_money": MoneyValue;
            "reversed_money": MoneyValue;
            "source": GiftCardFundingSource;
            "source_created_at": string | null;
            "value_money": MoneyValue;
            "version": number;
        };
        "previous_attributes"?: Partial<GiftCardLoad>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card_load.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card_load.updated";
});
/**
 * The `gift_card_load.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardLoadUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.consideration_money (Required): {@link MoneyValue} or null. What
     * the buyer paid for the value, separate from `value_money`. `null` when no payment amount is
     * recorded. object.consideration_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.consideration_money.anyOf[2] (Value): null. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.funding_disputes (Required): Array of {@link GiftCardFundingDispute}. Restrictions
     * tied to original funding, including value restored to replacement cards. A win clears only
     * its own restriction. A loss keeps spending restricted until you create a gift card funding
     * disposition. object.funding_disputes[] (Value): {@link GiftCardFundingDispute}. A dispute on
     * the payment that funded a gift card load, with its status and any loss resolution.
     * object.gift_card_id (Required): string. ID of the gift card the load added value to.
     * Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_load_id (Required): string.
     * Unique identifier for this gift card load, prefixed `gcl_`. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC". object.idempotency_key (Required): string or null. Your
     * Idempotency-Key for the command that created this record. `null` when Flint created it or no
     * key was sent. object.purchase_refund_value_holds (Optional): Array of {@link
     * GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding unspent value on
     * this descendant funding lot. Unknown provider outcomes retain these holds.
     * object.purchase_refund_value_holds[] (Value): {@link GiftCardPurchaseRefundValueHold}. Gift
     * card value held back by a purchase refund, with the refund, the root gift card and load, and
     * the amount held. object.purchase_refunds (Required): Array of {@link
     * GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against this
     * original funding load. Pending refunds reserve their value; confirmed success removes it,
     * and confirmed failure releases the hold. object.purchase_refunds[] (Value): {@link
     * GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
     * object.purchase_restoration (Optional): {@link GiftCardPurchaseRestoration}. Set when the
     * buyer paid again for value that reversing a gift card purchase had removed, and this load
     * restored it. Names the original card and load, the purchase refund entry that removed the
     * value, and the purchased unit. Omitted for other loads. Links a gift card load to the
     * original card and load it restores value to after a purchase refund, for one unit of an
     * order line item. object.refund_provenance (Optional): {@link GiftCardRefundProvenance}.
     * Traces a load made by a refund back to its original funding. `null` when the load wasn't
     * made by a refund. Traces a gift card load made by a refund back to its original funding
     * source, root gift card and load, and source refund. object.refund_transferred_money
     * (Optional): {@link MoneyValue}. The part of this load's value that refunds of redemptions
     * moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.remaining_money
     * (Required): {@link MoneyValue}. The value from this load still on the card: not yet spent,
     * reversed, or moved to a replacement card. It includes value held by a reserved redemption.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reversed_money (Required): {@link MoneyValue}. The value removed from this load by
     * refunding or reversing the purchase that funded it. It goes down again when a purchase
     * refund fails and the value is restored. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.source (Required): {@link GiftCardFundingSource}.
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. object.source_created_at (Required): string or null. RFC3339
     * timestamp. `null` when no source time was recorded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.value_money (Required): {@link MoneyValue}. The face value
     * the load adds to the card. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.version (Required): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * consideration_money (Required): {@link MoneyValue} or null. What the buyer paid for the
         * value, separate from `value_money`. `null` when no payment amount is recorded.
         * consideration_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. consideration_money.anyOf[2]
         * (Value): null. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". funding_disputes (Required): Array of {@link
         * GiftCardFundingDispute}. Restrictions tied to original funding, including value restored
         * to replacement cards. A win clears only its own restriction. A loss keeps spending
         * restricted until you create a gift card funding disposition. funding_disputes[] (Value):
         * {@link GiftCardFundingDispute}. A dispute on the payment that funded a gift card load,
         * with its status and any loss resolution. gift_card_id (Required): string. ID of the gift
         * card the load added value to. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
         * gift_card_load_id (Required): string. Unique identifier for this gift card load,
         * prefixed `gcl_`. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". idempotency_key (Required):
         * string or null. Your Idempotency-Key for the command that created this record. `null`
         * when Flint created it or no key was sent. purchase_refund_value_holds (Optional): Array
         * of {@link GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding
         * unspent value on this descendant funding lot. Unknown provider outcomes retain these
         * holds. purchase_refund_value_holds[] (Value): {@link GiftCardPurchaseRefundValueHold}.
         * Gift card value held back by a purchase refund, with the refund, the root gift card and
         * load, and the amount held. purchase_refunds (Required): Array of {@link
         * GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against
         * this original funding load. Pending refunds reserve their value; confirmed success
         * removes it, and confirmed failure releases the hold. purchase_refunds[] (Value): {@link
         * GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
         * purchase_restoration (Optional): {@link GiftCardPurchaseRestoration}. Set when the buyer
         * paid again for value that reversing a gift card purchase had removed, and this load
         * restored it. Names the original card and load, the purchase refund entry that removed
         * the value, and the purchased unit. Omitted for other loads. Links a gift card load to
         * the original card and load it restores value to after a purchase refund, for one unit of
         * an order line item. refund_provenance (Optional): {@link GiftCardRefundProvenance}.
         * Traces a load made by a refund back to its original funding. `null` when the load wasn't
         * made by a refund. Traces a gift card load made by a refund back to its original funding
         * source, root gift card and load, and source refund. refund_transferred_money (Optional):
         * {@link MoneyValue}. The part of this load's value that refunds of redemptions moved onto
         * replacement gift cards. Omitted until a refund moves value. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. remaining_money (Required):
         * {@link MoneyValue}. The value from this load still on the card: not yet spent, reversed,
         * or moved to a replacement card. It includes value held by a reserved redemption.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * reversed_money (Required): {@link MoneyValue}. The value removed from this load by
         * refunding or reversing the purchase that funded it. It goes down again when a purchase
         * refund fails and the value is restored. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. source (Required): {@link GiftCardFundingSource}.
         * Where the value came from, with your reference for it. Where the value of a gift card
         * load came from, such as an external payment, a Flint payment, an import, or an
         * adjustment, with your reference for it. source_created_at (Required): string or null.
         * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". value_money (Required): {@link MoneyValue}. The face value the
         * load adds to the card. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /**
             * What the buyer paid for the value, separate from `value_money`. `null` when no
             * payment amount is recorded. anyOf[1] (Value): {@link MoneyValue}. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value):
             * null.
             */
            "consideration_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Restrictions tied to original funding, including value restored to replacement
             * cards. A win clears only its own restriction. A loss keeps spending restricted until
             * you create a gift card funding disposition. [] (Value): {@link
             * GiftCardFundingDispute}. A dispute on the payment that funded a gift card load, with
             * its status and any loss resolution.
             */
            "funding_disputes": Array<GiftCardFundingDispute>;
            /**
             * ID of the gift card the load added value to. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card load, prefixed `gcl_`. Example:
             * "gcl_01KEZF7C00YJED2857SE0J6KWC".
             */
            "gift_card_load_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * Pending original cash refunds holding unspent value on this descendant funding lot.
             * Unknown provider outcomes retain these holds. [] (Value): {@link
             * GiftCardPurchaseRefundValueHold}. Gift card value held back by a purchase refund,
             * with the refund, the root gift card and load, and the amount held.
             */
            "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
            /**
             * Cash refunds and manual payment reversals against this original funding load.
             * Pending refunds reserve their value; confirmed success removes it, and confirmed
             * failure releases the hold. [] (Value): {@link GiftCardPurchaseRefundAllocation}. An
             * entry in a gift card load's purchase refunds.
             */
            "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
            /**
             * Set when the buyer paid again for value that reversing a gift card purchase had
             * removed, and this load restored it. Names the original card and load, the purchase
             * refund entry that removed the value, and the purchased unit. Omitted for other
             * loads. Links a gift card load to the original card and load it restores value to
             * after a purchase refund, for one unit of an order line item.
             */
            "purchase_restoration"?: GiftCardPurchaseRestoration;
            /**
             * Traces a load made by a refund back to its original funding. `null` when the load
             * wasn't made by a refund. Traces a gift card load made by a refund back to its
             * original funding source, root gift card and load, and source refund.
             */
            "refund_provenance"?: GiftCardRefundProvenance;
            /**
             * The part of this load's value that refunds of redemptions moved onto replacement
             * gift cards. Omitted until a refund moves value. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refund_transferred_money"?: MoneyValue;
            /**
             * The value from this load still on the card: not yet spent, reversed, or moved to a
             * replacement card. It includes value held by a reserved redemption. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "remaining_money": MoneyValue;
            /**
             * The value removed from this load by refunding or reversing the purchase that funded
             * it. It goes down again when a purchase refund fails and the value is restored.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "reversed_money": MoneyValue;
            /**
             * Where the value came from, with your reference for it. Where the value of a gift
             * card load came from, such as an external payment, a Flint payment, an import, or an
             * adjustment, with your reference for it.
             */
            "source": GiftCardFundingSource;
            /**
             * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "source_created_at": string | null;
            /**
             * The face value the load adds to the card. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "value_money": MoneyValue;
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
        "previous_attributes"?: Partial<GiftCardLoad>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card_load.updated". */
    "event_type"?: "gift_card_load.updated";
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
 * The `gift_card_load.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardLoadUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.consideration_money (Required): {@link MoneyValue} or null. What
     * the buyer paid for the value, separate from `value_money`. `null` when no payment amount is
     * recorded. object.consideration_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.consideration_money.anyOf[2] (Value): null. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.funding_disputes (Required): Array of {@link GiftCardFundingDispute}. Restrictions
     * tied to original funding, including value restored to replacement cards. A win clears only
     * its own restriction. A loss keeps spending restricted until you create a gift card funding
     * disposition. object.funding_disputes[] (Value): {@link GiftCardFundingDispute}. A dispute on
     * the payment that funded a gift card load, with its status and any loss resolution.
     * object.gift_card_id (Required): string. ID of the gift card the load added value to.
     * Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_load_id (Required): string.
     * Unique identifier for this gift card load, prefixed `gcl_`. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC". object.idempotency_key (Required): string or null. Your
     * Idempotency-Key for the command that created this record. `null` when Flint created it or no
     * key was sent. object.purchase_refund_value_holds (Optional): Array of {@link
     * GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding unspent value on
     * this descendant funding lot. Unknown provider outcomes retain these holds.
     * object.purchase_refund_value_holds[] (Value): {@link GiftCardPurchaseRefundValueHold}. Gift
     * card value held back by a purchase refund, with the refund, the root gift card and load, and
     * the amount held. object.purchase_refunds (Required): Array of {@link
     * GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against this
     * original funding load. Pending refunds reserve their value; confirmed success removes it,
     * and confirmed failure releases the hold. object.purchase_refunds[] (Value): {@link
     * GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
     * object.purchase_restoration (Optional): {@link GiftCardPurchaseRestoration}. Set when the
     * buyer paid again for value that reversing a gift card purchase had removed, and this load
     * restored it. Names the original card and load, the purchase refund entry that removed the
     * value, and the purchased unit. Omitted for other loads. Links a gift card load to the
     * original card and load it restores value to after a purchase refund, for one unit of an
     * order line item. object.refund_provenance (Optional): {@link GiftCardRefundProvenance}.
     * Traces a load made by a refund back to its original funding. `null` when the load wasn't
     * made by a refund. Traces a gift card load made by a refund back to its original funding
     * source, root gift card and load, and source refund. object.refund_transferred_money
     * (Optional): {@link MoneyValue}. The part of this load's value that refunds of redemptions
     * moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.remaining_money
     * (Required): {@link MoneyValue}. The value from this load still on the card: not yet spent,
     * reversed, or moved to a replacement card. It includes value held by a reserved redemption.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reversed_money (Required): {@link MoneyValue}. The value removed from this load by
     * refunding or reversing the purchase that funded it. It goes down again when a purchase
     * refund fails and the value is restored. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.source (Required): {@link GiftCardFundingSource}.
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. object.source_created_at (Required): string or null. RFC3339
     * timestamp. `null` when no source time was recorded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.value_money (Required): {@link MoneyValue}. The face value
     * the load adds to the card. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.version (Required): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * consideration_money (Required): {@link MoneyValue} or null. What the buyer paid for the
         * value, separate from `value_money`. `null` when no payment amount is recorded.
         * consideration_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. consideration_money.anyOf[2]
         * (Value): null. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". funding_disputes (Required): Array of {@link
         * GiftCardFundingDispute}. Restrictions tied to original funding, including value restored
         * to replacement cards. A win clears only its own restriction. A loss keeps spending
         * restricted until you create a gift card funding disposition. funding_disputes[] (Value):
         * {@link GiftCardFundingDispute}. A dispute on the payment that funded a gift card load,
         * with its status and any loss resolution. gift_card_id (Required): string. ID of the gift
         * card the load added value to. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
         * gift_card_load_id (Required): string. Unique identifier for this gift card load,
         * prefixed `gcl_`. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". idempotency_key (Required):
         * string or null. Your Idempotency-Key for the command that created this record. `null`
         * when Flint created it or no key was sent. purchase_refund_value_holds (Optional): Array
         * of {@link GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding
         * unspent value on this descendant funding lot. Unknown provider outcomes retain these
         * holds. purchase_refund_value_holds[] (Value): {@link GiftCardPurchaseRefundValueHold}.
         * Gift card value held back by a purchase refund, with the refund, the root gift card and
         * load, and the amount held. purchase_refunds (Required): Array of {@link
         * GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against
         * this original funding load. Pending refunds reserve their value; confirmed success
         * removes it, and confirmed failure releases the hold. purchase_refunds[] (Value): {@link
         * GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
         * purchase_restoration (Optional): {@link GiftCardPurchaseRestoration}. Set when the buyer
         * paid again for value that reversing a gift card purchase had removed, and this load
         * restored it. Names the original card and load, the purchase refund entry that removed
         * the value, and the purchased unit. Omitted for other loads. Links a gift card load to
         * the original card and load it restores value to after a purchase refund, for one unit of
         * an order line item. refund_provenance (Optional): {@link GiftCardRefundProvenance}.
         * Traces a load made by a refund back to its original funding. `null` when the load wasn't
         * made by a refund. Traces a gift card load made by a refund back to its original funding
         * source, root gift card and load, and source refund. refund_transferred_money (Optional):
         * {@link MoneyValue}. The part of this load's value that refunds of redemptions moved onto
         * replacement gift cards. Omitted until a refund moves value. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. remaining_money (Required):
         * {@link MoneyValue}. The value from this load still on the card: not yet spent, reversed,
         * or moved to a replacement card. It includes value held by a reserved redemption.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * reversed_money (Required): {@link MoneyValue}. The value removed from this load by
         * refunding or reversing the purchase that funded it. It goes down again when a purchase
         * refund fails and the value is restored. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. source (Required): {@link GiftCardFundingSource}.
         * Where the value came from, with your reference for it. Where the value of a gift card
         * load came from, such as an external payment, a Flint payment, an import, or an
         * adjustment, with your reference for it. source_created_at (Required): string or null.
         * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". value_money (Required): {@link MoneyValue}. The face value the
         * load adds to the card. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /**
             * What the buyer paid for the value, separate from `value_money`. `null` when no
             * payment amount is recorded. anyOf[1] (Value): {@link MoneyValue}. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value):
             * null.
             */
            "consideration_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Restrictions tied to original funding, including value restored to replacement
             * cards. A win clears only its own restriction. A loss keeps spending restricted until
             * you create a gift card funding disposition. [] (Value): {@link
             * GiftCardFundingDispute}. A dispute on the payment that funded a gift card load, with
             * its status and any loss resolution.
             */
            "funding_disputes": Array<GiftCardFundingDispute>;
            /**
             * ID of the gift card the load added value to. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card load, prefixed `gcl_`. Example:
             * "gcl_01KEZF7C00YJED2857SE0J6KWC".
             */
            "gift_card_load_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * Pending original cash refunds holding unspent value on this descendant funding lot.
             * Unknown provider outcomes retain these holds. [] (Value): {@link
             * GiftCardPurchaseRefundValueHold}. Gift card value held back by a purchase refund,
             * with the refund, the root gift card and load, and the amount held.
             */
            "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
            /**
             * Cash refunds and manual payment reversals against this original funding load.
             * Pending refunds reserve their value; confirmed success removes it, and confirmed
             * failure releases the hold. [] (Value): {@link GiftCardPurchaseRefundAllocation}. An
             * entry in a gift card load's purchase refunds.
             */
            "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
            /**
             * Set when the buyer paid again for value that reversing a gift card purchase had
             * removed, and this load restored it. Names the original card and load, the purchase
             * refund entry that removed the value, and the purchased unit. Omitted for other
             * loads. Links a gift card load to the original card and load it restores value to
             * after a purchase refund, for one unit of an order line item.
             */
            "purchase_restoration"?: GiftCardPurchaseRestoration;
            /**
             * Traces a load made by a refund back to its original funding. `null` when the load
             * wasn't made by a refund. Traces a gift card load made by a refund back to its
             * original funding source, root gift card and load, and source refund.
             */
            "refund_provenance"?: GiftCardRefundProvenance;
            /**
             * The part of this load's value that refunds of redemptions moved onto replacement
             * gift cards. Omitted until a refund moves value. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refund_transferred_money"?: MoneyValue;
            /**
             * The value from this load still on the card: not yet spent, reversed, or moved to a
             * replacement card. It includes value held by a reserved redemption. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "remaining_money": MoneyValue;
            /**
             * The value removed from this load by refunding or reversing the purchase that funded
             * it. It goes down again when a purchase refund fails and the value is restored.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "reversed_money": MoneyValue;
            /**
             * Where the value came from, with your reference for it. Where the value of a gift
             * card load came from, such as an external payment, a Flint payment, an import, or an
             * adjustment, with your reference for it.
             */
            "source": GiftCardFundingSource;
            /**
             * RFC3339 timestamp. `null` when no source time was recorded. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "source_created_at": string | null;
            /**
             * The face value the load adds to the card. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "value_money": MoneyValue;
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
        "previous_attributes"?: Partial<GiftCardLoad>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card_load.updated". */
    "event_type"?: "gift_card_load.updated";
});
export type GiftCardLoadsCreateParams = (InputValue<CreateGiftCardLoadRequestInput>)
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
export type GiftCardLoadsGetParams = DisputesAcceptParams;
