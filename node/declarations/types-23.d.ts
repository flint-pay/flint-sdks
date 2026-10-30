import type { Fulfillment } from './types-21.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreateFulfillmentEventRequestInput } from './types-7.js';
import type { CreateShipmentRequestInput } from './types-11.js';
import type { FulfillmentTransitionRequestInput } from './types-22.js';
import type { UpdateFulfillmentRequestInput } from './types-58.js';
import type { CheckoutRedirects, CheckoutRedirectsRequestInput } from './types-4.js';
import type { ResolvePaymentLinkResponse } from './types-47.js';
import type { ResponseMeta, ReturnDisposition, ReturnInspection } from './types-48.js';
import type { ReturnLineItem, ReturnPolicy, ReturnPolicyRevision, ReturnReason, ReturnReceipt } from './types-49.js';
import type { ReturnResolution, ReturnResource } from './types-50.js';
import type {
    GiftCardRestriction,
    GiftCardPurchaseRefundAllocation,
    GiftCardPurchaseRefundValueHold,
    GiftCardPurchaseRestoration,
    GiftCardRefundProvenance
} from './types-24.js';
import type { MoneyValue } from './types-35.js';
import type { CreateGiftCardFundingDispositionRequestInput } from './types-8.js';
/** The `release_hold` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestReleaseHoldInput = {
    /** Value enum: "release_hold". */
    "action": "release_hold";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `schedule` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestSchedule = {
    /** Value enum: "schedule". */
    "action": "schedule" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at": string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at": string;
    /** IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/** The `schedule` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestScheduleInput = {
    /** Value enum: "schedule". */
    "action": "schedule";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at": string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at": string | globalThis.Date;
    /** IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/** The `start` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestStart = {
    /** Value enum: "start". */
    "action": "start" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `start` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestStartInput = {
    /** Value enum: "start". */
    "action": "start";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
export type FulfillmentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.updated";
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
    "event_type": "fulfillment.updated";
});
/**
 * The `fulfillment.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.updated". */
    "event_type"?: "fulfillment.updated";
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
 * The `fulfillment.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.updated". */
    "event_type"?: "fulfillment.updated";
});
export type FulfillmentsCreateEventParams = (InputValue<CreateFulfillmentEventRequestInput>);
export type FulfillmentsCreateShipmentParams = (CreateShipmentRequestInput);
export type FulfillmentsGetParams = {
    /**
     * Supported expansions: order, packages, shipments. Expansion requires commerce.orders.read.
     * Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20
     * related objects per path. Repeat expand, for example expand=order&expand=packages, or pass
     * one comma-separated value. [] enum: "order", "packages", "shipments". Value enum: "order",
     * "packages", "shipments". anyOf[1] (Value): Array of string. [] enum: "order", "packages",
     * "shipments". anyOf[1][] (Value): string. Value enum: "order", "packages", "shipments".
     * anyOf[2] (Value): string. Value enum: "order", "packages", "shipments".
     */
    "expand"?: InputValue<("order" | "packages" | "shipments") | readonly ("order" | "packages" | "shipments")[]>;
};
export type FulfillmentsListParams = {
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
     * Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10
     * unique expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order".
     * anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum:
     * "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Exact match on customer_id. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across fulfillment_id and external_reference_id. Also matches an exact order number.
     * Text fields match any part of the value, and %, _ and \ are ordinary characters, not
     * wildcards. IDs match from the start and need the type prefix, such as ful_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by exact fulfillment status. Values within this filter are ORed; combined with other
     * filters using AND. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show". Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     * anyOf[1][] (Value): string. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show". anyOf[2] (Value): string. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show".
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
     * Filter by fulfillment type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". Value enum: "shipment",
     * "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * anyOf[1][] (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service". anyOf[2] (Value): string. Value enum: "shipment", "pickup", "local_delivery",
     * "digital", "service".
     */
    "type"?: InputValue<("shipment" | "pickup" | "local_delivery" | "digital" | "service")
        | readonly ("shipment" | "pickup" | "local_delivery" | "digital" | "service")[]>;
    /** Filter by assigned Location ID. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
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
};
export type FulfillmentsTransitionParams = (FulfillmentTransitionRequestInput);
export type FulfillmentsUpdateParams = (InputValue<UpdateFulfillmentRequestInput>)
    & {
    /**
     * Supported expansions: order, packages, shipments. Expansion requires commerce.orders.read.
     * Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20
     * related objects per path. Repeat expand, for example expand=order&expand=packages, or pass
     * one comma-separated value. [] enum: "order", "packages", "shipments". Value enum: "order",
     * "packages", "shipments". anyOf[1] (Value): Array of string. [] enum: "order", "packages",
     * "shipments". anyOf[1][] (Value): string. Value enum: "order", "packages", "shipments".
     * anyOf[2] (Value): string. Value enum: "order", "packages", "shipments".
     */
    "expand"?: InputValue<("order" | "packages" | "shipments") | readonly ("order" | "packages" | "shipments")[]>;
};
/**
 * The request body for: Create a Return resolution checkout session for the current buyer; Get or
 * create return resolution checkout session.
 */
export type GetOrCreateReturnResolutionCheckoutSessionRequest = ({
    /**
     * Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Where the checkout sends the buyer after paying, such as the Return's page in the customer
     * account. Limited to 2048 characters (Unicode code points) before trimming surrounding
     * whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id}
     * on Flint's account host, the merchant's active custom account domain, or the host of
     * customer_account.merchant_account_url when the merchant hosts the account. In test mode, any
     * URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted,
     * over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an
     * INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
});
/**
 * The request body for: Create a Return resolution checkout session for the current buyer; Get or
 * create return resolution checkout session.
 */
export type GetOrCreateReturnResolutionCheckoutSessionRequestInput = ({
    /**
     * Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Where the checkout sends the buyer after paying, such as the Return's page in the customer
     * account. Limited to 2048 characters (Unicode code points) before trimming surrounding
     * whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id}
     * on Flint's account host, the merchant's active custom account domain, or the host of
     * customer_account.merchant_account_url when the merchant hosts the account. In test mode, any
     * URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted,
     * over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an
     * INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded";
});
export type GetOrCreateReturnResolutionCheckoutSessionResponse = ResolvePaymentLinkResponse;
/** A response containing `ReturnDisposition` data. */
export type GetReturnDispositionResponse = {
    /** A decision about how returned merchandise will be handled. */
    "data": ReturnDisposition;
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
/** A response containing `ReturnInspection` data. */
export type GetReturnInspectionResponse = {
    /** An assessment of the condition of returned items. */
    "data": ReturnInspection;
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
/** A response containing `ReturnLineItem` data. */
export type GetReturnLineItemResponse = {
    /** An item included in a return request. */
    "data": ReturnLineItem;
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
/** A response containing `ReturnPolicy` data. */
export type GetReturnPolicyResponse = {
    /** Rules governing whether and how purchased items can be returned. */
    "data": ReturnPolicy;
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
/** A response containing `ReturnPolicyRevision` data. */
export type GetReturnPolicyRevisionResponse = {
    /** A saved revision of a return policy. */
    "data": ReturnPolicyRevision;
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
/** A response containing `ReturnReason` data. */
export type GetReturnReasonResponse = {
    /** A reason customers can select when requesting a return. */
    "data": ReturnReason;
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
/** A response containing `ReturnReceipt` data. */
export type GetReturnReceiptResponse = {
    /** A record of returned items arriving at a location. */
    "data": ReturnReceipt;
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
/** A response containing `ReturnResolution` data. */
export type GetReturnResolutionResponse = {
    /** The refund, exchange, or other outcome of a return. */
    "data": ReturnResolution;
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
/** A response containing `Return` data. */
export type GetReturnResponse = {
    /** A request to send purchased items back. */
    "data": ReturnResource;
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
 * Merchant-issued purchased gift card. Posted balance includes reserved value; available value is
 * balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are
 * independent resources and cannot be transferred across merchants or currencies.
 */
export type GiftCard = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "available_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "balance_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    "customer_id": string | null;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id": string | null;
    "gift_card_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "last_loaded_at": string | null;
    /** RFC3339 timestamp. Format: date-time. */
    "last_redeemed_at": string | null;
    /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
    "last4": string;
    "merchant_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "reserved_money": MoneyValue;
    /**
     * The restrictions that keep the card frozen. unfreeze is supported only when every
     * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card
     * funding disposition. [] (Value): {@link GiftCardRestriction}. A restriction on a gift card,
     * either a merchant freeze or a funding dispute, with its reason or dispute details.
     */
    "restrictions": Array<GiftCardRestriction>;
    /** Value enum: "pending", "active", "frozen", "closed". */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /**
     * [] enum: "freeze", "unfreeze", "close". [] (Value): string. Value enum: "freeze",
     * "unfreeze", "close".
     */
    "supported_actions": Array<"freeze" | "unfreeze" | "close" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. */
    "version": number;
};
export type GiftCardCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCard;
    };
    "event_type"?: "gift_card.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCard;
    };
    "event_type"?: "gift_card.created";
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
    "event_type": "gift_card.created";
});
/**
 * The `gift_card.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "data"?: {
        /**
         * Merchant-issued purchased gift card. Posted balance includes reserved value; available
         * value is balance minus reservations. Frozen value remains part of outstanding liability.
         * Gift cards are independent resources and cannot be transferred across merchants or
         * currencies.
         */
        "object": GiftCard;
    };
    /** Value enum: "gift_card.created". */
    "event_type"?: "gift_card.created";
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
 * The `gift_card.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "data"?: {
        /**
         * Merchant-issued purchased gift card. Posted balance includes reserved value; available
         * value is balance minus reservations. Frozen value remains part of outstanding liability.
         * Gift cards are independent resources and cannot be transferred across merchants or
         * currencies.
         */
        "object": GiftCard;
    };
    /** Value enum: "gift_card.created". */
    "event_type"?: "gift_card.created";
});
/**
 * The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBounds = {
    /**
     * Largest gift card value buyers can choose, in the face value currency. amount (Required):
     * integer string. Amount in the currency's smallest unit, such as cents for USD. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value
     * enum: "USD".
     */
    "maximum_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}`;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * Smallest gift card value buyers can choose, in the face value currency. amount (Required):
     * integer string. Amount in the currency's smallest unit, such as cents for USD. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value
     * enum: "USD".
     */
    "minimum_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}`;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
};
/**
 * The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBoundsRequestInput = {
    /**
     * Largest gift card value buyers can choose, in the face value currency. amount (Required):
     * integer string. Amount in the currency's smallest unit, such as cents for USD. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value
     * enum: "USD".
     */
    "maximum_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * Smallest gift card value buyers can choose, in the face value currency. amount (Required):
     * integer string. Amount in the currency's smallest unit, such as cents for USD. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value
     * enum: "USD".
     */
    "minimum_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
};
/** A merchant decision to honor gift card value after its funding payment lost a dispute. */
export type GiftCardFundingDisposition = {
    /** When the disposition was created. Format: date-time. */
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
    /** The lost dispute this disposition resolves. */
    "dispute_id": string;
    /** Stable identifier of the disposition. */
    "gift_card_funding_disposition_id": string;
    /**
     * Gift cards whose value this disposition honors, including replacement cards that received
     * value from the disputed funding. [] (Value): string.
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
    /** The disputed payment that funded the gift card value. */
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
     *  [] (Value): {@link GiftCardFundingDisposition}. A merchant decision to honor gift card
     * value after its funding payment lost a dispute.
     */
    "data": Array<GiftCardFundingDisposition>;
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
/** A response containing `GiftCardFundingDisposition` data. */
export type GiftCardFundingDispositionResponse = {
    /** A merchant decision to honor gift card value after its funding payment lost a dispute. */
    "data": GiftCardFundingDisposition;
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
export type GiftCardFundingDispositionsCreateParams = (InputValue<CreateGiftCardFundingDispositionRequestInput>);
export type GiftCardFundingDispositionsGetParams = {};
export type GiftCardFundingDispositionsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "du_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "dispute_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
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
 * A dispute on the payment that funded a gift card load, with its status and any loss resolution.
 */
export type GiftCardFundingDispute = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** The dispute on the payment that funded this load. */
    "dispute_id": string;
    /**
     * true when the dispute is lost and no funding disposition exists for it yet. Create one with
     * POST /v1/gift-card-funding-dispositions.
     */
    "requires_resolution": boolean;
    /**
     * The funding disposition recorded for this lost dispute. `null` until you create one.
     * anyOf[1] (Value): {@link GiftCardFundingLossResolution}. How a lost funding dispute was
     * resolved for a gift card load, such as honoring the card's value, with a reason message.
     * anyOf[2] (Value): null.
     */
    "resolution": ((GiftCardFundingLossResolution) | (null));
    /** Value enum: "open", "won", "lost". */
    "status": "open" | "won" | "lost" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. */
    "version": number;
};
/**
 * How a lost funding dispute was resolved for a gift card load, such as honoring the card's value,
 * with a reason message.
 */
export type GiftCardFundingLossResolution = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Value enum: "honor_value". */
    "disposition": "honor_value" | (string & {});
    "gift_card_funding_disposition_id": string;
    "reason_message": string;
};
/**
 * Where the value of a gift card load came from, such as an external payment, a Flint payment, an
 * import, or an adjustment, with your reference for it.
 */
export type GiftCardFundingSource = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /**
     * Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import",
     * "adjustment", "gift_card_refund", "gift_card_purchase_refund_recovery", "store_credit".
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
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
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
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "adjustment". */
    "funding_source_type": "adjustment" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: string;
})
    & ({
    /** Value enum: "adjustment". */
    "funding_source_type"?: unknown;
});
/** The `adjustment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceAdjustmentInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "adjustment". */
    "funding_source_type": "adjustment";
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: never;
})
    & ({
    /** Value enum: "adjustment". */
    "funding_source_type"?: ("adjustment") & ("adjustment");
});
/** The `external_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceExternalPayment = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "external_payment". */
    "funding_source_type": "external_payment" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Value enum: "external_payment". */
    "funding_source_type"?: unknown;
    /** minLength: 1. maxLength: 255. */
    "customer_id": string;
}));
/** The `external_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceExternalPaymentInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "external_payment". */
    "funding_source_type": "external_payment";
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Value enum: "external_payment". */
    "funding_source_type"?: ("external_payment") & ("external_payment");
    /** minLength: 1. maxLength: 255. */
    "customer_id": string;
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_id"?: never;
})));
/** The `flint_manual_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceFlintManualPayment = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "flint_manual_payment". */
    "funding_source_type": "flint_manual_payment" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "order_id": string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id": string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Value enum: "flint_manual_payment". */
    "funding_source_type"?: unknown;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id": string;
    /** minLength: 1. maxLength: 255. */
    "order_id": string;
    /** minLength: 1. maxLength: 255. */
    "customer_id": string;
}));
/** The `flint_manual_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceFlintManualPaymentInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "flint_manual_payment". */
    "funding_source_type": "flint_manual_payment";
    /** minLength: 1. maxLength: 255. */
    "order_id": string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Value enum: "flint_manual_payment". */
    "funding_source_type"?: ("flint_manual_payment") & ("flint_manual_payment");
    /** minLength: 1. maxLength: 255. */
    "order_id": string;
    /** minLength: 1. maxLength: 255. */
    "customer_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/** The `flint_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceFlintPayment = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "flint_payment". */
    "funding_source_type": "flint_payment" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Value enum: "flint_payment". */
    "funding_source_type"?: unknown;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id": string;
}));
/** The `flint_payment` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceFlintPaymentInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "flint_payment". */
    "funding_source_type": "flint_payment";
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Value enum: "flint_payment". */
    "funding_source_type"?: ("flint_payment") & ("flint_payment");
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id": string;
})
    & ({
    "order_manual_payment_id"?: never;
}));
/** The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceGiftCardPurchaseRefundRecovery = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type": "gift_card_purchase_refund_recovery" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type"?: unknown;
}));
/** The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type": "gift_card_purchase_refund_recovery";
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type"?: ("gift_card_purchase_refund_recovery") & ("gift_card_purchase_refund_recovery");
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_manual_payment_id"?: never;
})));
/** The `gift_card_refund` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceGiftCardRefund = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "gift_card_refund". */
    "funding_source_type": "gift_card_refund" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Value enum: "gift_card_refund". */
    "funding_source_type"?: unknown;
}));
/** The `gift_card_refund` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceGiftCardRefundInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "gift_card_refund". */
    "funding_source_type": "gift_card_refund";
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Value enum: "gift_card_refund". */
    "funding_source_type"?: ("gift_card_refund") & ("gift_card_refund");
})
    & ({
    "payment_intent_id"?: never;
}));
/** The `import` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceImport = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "import". */
    "funding_source_type": "import" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Value enum: "import". */
    "funding_source_type"?: unknown;
}));
/** The `import` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceImportInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "import". */
    "funding_source_type": "import";
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Value enum: "import". */
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
export type GiftCardFundingSourceInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /**
     * Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import",
     * "adjustment", "gift_card_refund", "gift_card_purchase_refund_recovery", "store_credit".
     */
    "funding_source_type": "external_payment"
        | "flint_payment"
        | "flint_manual_payment"
        | "import"
        | "adjustment"
        | "gift_card_refund"
        | "gift_card_purchase_refund_recovery"
        | "store_credit";
    /** minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id"?: string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
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
/** The `store_credit` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceStoreCredit = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "store_credit". */
    "funding_source_type": "store_credit" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "order_id": string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id": string;
})
    & (({
    /** Value enum: "store_credit". */
    "funding_source_type"?: unknown;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id": string;
    /** minLength: 1. maxLength: 255. */
    "order_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id": string;
}));
/** The `store_credit` variant of `GiftCardFundingSource`. */
export type GiftCardFundingSourceStoreCreditInput = ({
    /** minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Your reference for the payment or import record that funded this value, such as a POS sale
     * ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Value enum: "store_credit". */
    "funding_source_type": "store_credit";
    /** minLength: 1. maxLength: 255. */
    "order_id": string;
    /** minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id": string;
    /**
     * Refund that issued this value. Present only when funding_source_type is store_credit.
     * minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Value enum: "store_credit". */
    "funding_source_type"?: ("store_credit") & ("store_credit");
    /**
     * The original payment for flint_payment or store_credit value. For standalone paid funding,
     * use a captured payment intent without an order_id. Order-linked payments fund purchased
     * cards or store credit through their order. minLength: 1. maxLength: 255.
     */
    "payment_intent_id": string;
    /** minLength: 1. maxLength: 255. */
    "order_id": string;
})
    & ({
    "order_manual_payment_id"?: never;
}));
/** A page of `GiftCard` objects. */
export type GiftCardListResponse = {
    /**
     *  [] (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance includes
     * reserved value; available value is balance minus reservations. Frozen value remains part of
     * outstanding liability. Gift cards are independent resources and cannot be transferred across
     * merchants or currencies.
     */
    "data": Array<GiftCard>;
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
/**
 * Independent funding resource. Value and consideration are separate. External funding and import
 * provenance are merchant-attested; no payment is collected by recording them. Replacement refund
 * lots retain original funding provenance and do not represent new paid funding.
 */
export type GiftCardLoad = {
    /**
     *  anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "consideration_money": ((MoneyValue) | (null));
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Restrictions tied to original funding, including value restored to replacement cards. A win
     * clears only its own restriction. A loss keeps spending restricted until you create a gift
     * card funding disposition. [] (Value): {@link GiftCardFundingDispute}. A dispute on the
     * payment that funded a gift card load, with its status and any loss resolution.
     */
    "funding_disputes": Array<GiftCardFundingDispute>;
    "gift_card_id": string;
    "gift_card_load_id": string;
    /**
     * Your Idempotency-Key for the command that created this record. null when Flint created it or
     * no key was sent.
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
     * Links a gift card load to the original card and load it restores value to after a purchase
     * refund, for one unit of an order line item.
     */
    "purchase_restoration"?: GiftCardPurchaseRestoration;
    /**
     * Traces a gift card load made by a refund back to its original funding source, root gift card
     * and load, and source refund.
     */
    "refund_provenance"?: GiftCardRefundProvenance;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refund_transferred_money"?: MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "remaining_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "reversed_money": MoneyValue;
    /**
     * Where the value of a gift card load came from, such as an external payment, a Flint payment,
     * an import, or an adjustment, with your reference for it.
     */
    "source": GiftCardFundingSource;
    /** RFC3339 timestamp. Format: date-time. */
    "source_created_at": string | null;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "value_money": MoneyValue;
    /** Format: int64. */
    "version": number;
};
export type GiftCardLoadCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardLoad;
    };
    "event_type"?: "gift_card_load.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardLoad;
    };
    "event_type"?: "gift_card_load.created";
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
    "event_type": "gift_card_load.created";
});
/**
 * The `gift_card_load.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardLoadCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardLoad}. Independent funding resource. Value and
     * consideration are separate. External funding and import provenance are merchant-attested; no
     * payment is collected by recording them. Replacement refund lots retain original funding
     * provenance and do not represent new paid funding.
     */
    "data"?: {
        /**
         * Independent funding resource. Value and consideration are separate. External funding and
         * import provenance are merchant-attested; no payment is collected by recording them.
         * Replacement refund lots retain original funding provenance and do not represent new paid
         * funding.
         */
        "object": GiftCardLoad;
    };
    /** Value enum: "gift_card_load.created". */
    "event_type"?: "gift_card_load.created";
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
 * The `gift_card_load.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardLoadCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardLoad}. Independent funding resource. Value and
     * consideration are separate. External funding and import provenance are merchant-attested; no
     * payment is collected by recording them. Replacement refund lots retain original funding
     * provenance and do not represent new paid funding.
     */
    "data"?: {
        /**
         * Independent funding resource. Value and consideration are separate. External funding and
         * import provenance are merchant-attested; no payment is collected by recording them.
         * Replacement refund lots retain original funding provenance and do not represent new paid
         * funding.
         */
        "object": GiftCardLoad;
    };
    /** Value enum: "gift_card_load.created". */
    "event_type"?: "gift_card_load.created";
});
/** A page of `GiftCardLoad` objects. */
export type GiftCardLoadListResponse = {
    /**
     *  [] (Value): {@link GiftCardLoad}. Independent funding resource. Value and consideration are
     * separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "data": Array<GiftCardLoad>;
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
