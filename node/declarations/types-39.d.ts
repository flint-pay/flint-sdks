import type { ExpandedOrderSummary } from './types-21.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-34.js';
import type { ResponseMeta } from './types-48.js';
import type { Package } from './types-38.js';
import type { FulfillmentTransitionRequestMarkPackedInput, FulfillmentEventsGetParams } from './types-22.js';
import type { PartnerWebhookEnvelope, PartnerEnvironmentGrant } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreatePackageItemRequestInput } from './types-9.js';
import type { UpdatePackageItemRequestInput, UpdatePackageRequestInput } from './types-59.js';
import type { VoidPackageRequestInput } from './types-60.js';
import type {
    WorkloadIdentityClaimCondition,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-61.js';
/** An order item assigned to a package. */
export type PackageItem = {
    /** Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** Fulfillment containing this package item. */
    "fulfillment_id": string;
    /**
     * Caller-owned metadata for this package item. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order containing the allocated line item. */
    "order_id": string;
    /** Order line whose quantity this package item allocates. */
    "order_line_item_id": string;
    /** Package containing this item. */
    "package_id": string;
    /** Unique identifier for this package allocation. */
    "package_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Shipment containing the package. */
    "shipment_id": string;
    /** Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted item version, independent of package shipment and capacity guards. Format: uint64.
     * minimum: 1.
     */
    "version": number;
};
/** A page of `PackageItem` objects. */
export type PackageItemListResponse = {
    /**  [] (Value): {@link PackageItem}. An order item assigned to a package. */
    "data": Array<PackageItem>;
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
/** A response containing `PackageItem` data. */
export type PackageItemResponse = {
    /** An order item assigned to a package. */
    "data": PackageItem;
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
/** A page of `Package` objects. */
export type PackageListResponse = {
    /**  [] (Value): {@link Package}. A package within a shipment. */
    "data": Array<Package>;
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
/** A response containing `Package` data. */
export type PackageResponse = {
    /** A package within a shipment. */
    "data": Package;
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
/** The request body for: Transition package. */
export type PackageTransitionRequest = ((PackageTransitionRequestMarkDelivered)
    | (PackageTransitionRequestMarkDeliveryAttempted)
    | (PackageTransitionRequestMarkException)
    | (PackageTransitionRequestMarkInTransit)
    | (PackageTransitionRequestMarkOutForDelivery)
    | (PackageTransitionRequestMarkPacked)
    | (PackageTransitionRequestMarkReturned)
    | (PackageTransitionRequestMarkShipped)
    | (Record<string, unknown>));
/** The request body for: Transition package. */
export type PackageTransitionRequestInput = ((PackageTransitionRequestMarkDeliveredInput)
    | (PackageTransitionRequestMarkDeliveryAttemptedInput)
    | (PackageTransitionRequestMarkExceptionInput)
    | (PackageTransitionRequestMarkInTransitInput)
    | (PackageTransitionRequestMarkOutForDeliveryInput)
    | (PackageTransitionRequestMarkPackedInput)
    | (PackageTransitionRequestMarkReturnedInput)
    | (PackageTransitionRequestMarkShippedInput));
/** The `mark_delivered` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkDelivered = {
    /** Value enum: "mark_delivered". */
    "action": "mark_delivered" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_delivered` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkDeliveredInput = {
    /** Value enum: "mark_delivered". */
    "action": "mark_delivered";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_delivery_attempted` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkDeliveryAttempted = {
    /** Value enum: "mark_delivery_attempted". */
    "action": "mark_delivery_attempted" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_delivery_attempted` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkDeliveryAttemptedInput = {
    /** Value enum: "mark_delivery_attempted". */
    "action": "mark_delivery_attempted";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_exception` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkException = {
    /** Value enum: "mark_exception". */
    "action": "mark_exception" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_exception` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkExceptionInput = {
    /** Value enum: "mark_exception". */
    "action": "mark_exception";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_in_transit` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkInTransit = {
    /** Value enum: "mark_in_transit". */
    "action": "mark_in_transit" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_in_transit` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkInTransitInput = {
    /** Value enum: "mark_in_transit". */
    "action": "mark_in_transit";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_out_for_delivery` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkOutForDelivery = {
    /** Value enum: "mark_out_for_delivery". */
    "action": "mark_out_for_delivery" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_out_for_delivery` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkOutForDeliveryInput = {
    /** Value enum: "mark_out_for_delivery". */
    "action": "mark_out_for_delivery";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_packed` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkPacked = {
    /** Value enum: "mark_packed". */
    "action": "mark_packed" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_packed` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkPackedInput = FulfillmentTransitionRequestMarkPackedInput;
/** The `mark_returned` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkReturned = {
    /** Value enum: "mark_returned". */
    "action": "mark_returned" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_returned` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkReturnedInput = {
    /** Value enum: "mark_returned". */
    "action": "mark_returned";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `mark_shipped` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkShipped = {
    /** Value enum: "mark_shipped". */
    "action": "mark_shipped" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "carrier"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /** minLength: 1. maxLength: 100. */
    "service_code"?: string;
    /** minLength: 1. maxLength: 255. */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * maxLength: 2048.
     */
    "tracking_url"?: string;
};
/** The `mark_shipped` variant of `PackageTransitionRequest`. */
export type PackageTransitionRequestMarkShippedInput = {
    /** Value enum: "mark_shipped". */
    "action": "mark_shipped";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** minLength: 1. maxLength: 100. */
    "carrier"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /** minLength: 1. maxLength: 100. */
    "service_code"?: string;
    /** minLength: 1. maxLength: 255. */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * maxLength: 2048.
     */
    "tracking_url"?: string;
};
export type PackageUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Package;
    };
    "event_type"?: "package.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Package;
    };
    "event_type"?: "package.updated";
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
    "event_type": "package.updated";
});
/**
 * The `package.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PackageUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Package}. A package within a shipment. */
    "data"?: {
        /** A package within a shipment. */
        "object": Package;
    };
    /** Value enum: "package.updated". */
    "event_type"?: "package.updated";
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
 * The `package.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PackageUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Package}. A package within a shipment. */
    "data"?: {
        /** A package within a shipment. */
        "object": Package;
    };
    /** Value enum: "package.updated". */
    "event_type"?: "package.updated";
});
export type PackagesCreateItemParams = (InputValue<CreatePackageItemRequestInput>);
export type PackagesDeleteItemParams = {
    /** Optional item version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type PackagesGetItemParams = FulfillmentEventsGetParams;
export type PackagesGetParams = FulfillmentEventsGetParams;
export type PackagesListPackageItemsParams = {
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
     * Supported expansions: order. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1]
     * (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order".
     * anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
};
export type PackagesListParams = {
    /** Optional shipment ID filter. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "shipment_id"?: InputValue<string>;
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
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
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across package ID, external reference ID, and tracking number. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as pkg_01.
     */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package status. Values within this filter are combined with OR. Accepts repeated
     * keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1][] (Value):
     * string. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2] (Value):
     * string. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided".
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
    /**
     * Byte-sensitive full tracking-number match. Whitespace and commas are literal; combine with
     * carrier to identify a carrier-specific tracking number. minLength: 1. maxLength: 255.
     */
    "tracking_number"?: InputValue<string>;
    /**
     * Byte-sensitive full carrier match. Whitespace and commas are literal. minLength: 1.
     * maxLength: 255.
     */
    "carrier"?: InputValue<string>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: order. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1]
     * (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order".
     * anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
};
export type PackagesTransitionParams = (PackageTransitionRequestInput);
export type PackagesUpdateItemParams = (InputValue<UpdatePackageItemRequestInput>);
export type PackagesUpdateParams = (InputValue<UpdatePackageRequestInput>);
export type PackagesVoidParams = (InputValue<VoidPackageRequestInput>);
/** An application that merchants can authorize to access their accounts. */
export type PartnerApp = {
    /**
     * Every Flint scope the app can hold: the union of required_scopes across the manifest. An
     * install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     */
    "allowed_scopes": Array<string>;
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header.
     */
    "api_version": string;
    /** RFC3339 timestamp. Format: date-time. */
    "api_version_changed_at"?: string;
    /**
     * Version the app used before its last upgrade. Present while a rollback is available. To roll
     * back, send it as api_version.
     */
    "api_version_previous"?: string;
    /**
     * Public identifier the app sends as client_id in OAuth authorization and token requests.
     * Doesn't change.
     */
    "client_id": string;
    /**
     * Whether the app can authenticate with a client secret. When false, it authenticates with a
     * registered credential.
     */
    "client_secret_enabled": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "client_secret_last_used_at": string | null;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Defaults to
     * every permission in the manifest that isn't optional. [] (Value): string.
     */
    "default_requested_permissions": Array<string>;
    /** The app's name, shown to merchants on the consent screen. */
    "name": string;
    "partner_app_id": string;
    /**
     * Permissions the app can request from merchants. Each lists the Flint scopes it grants. []
     * (Value): {@link PartnerAppPermissionManifestEntry}. One permission a partner app can
     * request, with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /** RFC3339 timestamp. Format: date-time. */
    "previous_secret_expires_at"?: string;
    /**
     * Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on
     * localhost or a loopback address, with no fragment. [] (Value): string.
     */
    "redirect_uris": Array<string>;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated,
     * or it is deleted. Send it as expected_version to apply an update only to the version you
     * read. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * An immutable partner app credential, including its authentication status and usage timestamps.
 */
export type PartnerAppCredential = ({
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** A registered JWKS URL and its most recent successful fetch. */
    "jwks_url"?: PartnerAppCredentialJWKSURL;
    /**
     * When the credential last authenticated the app. Updated at most once an hour, so it can lag
     * the latest use by up to an hour. `null` when the credential has never been used. Format:
     * date-time.
     */
    "last_used_at": string | null;
    /** Name given to the credential when it was created. `null` when it has no name. */
    "name": string | null;
    "partner_app_credential_id": string;
    "partner_app_id": string;
    /** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. */
    "public_key"?: PartnerAppCredentialPublicKey;
    /** Value enum: "active", "removed". */
    "status": "active" | "removed" | (string & {});
    /**
     * Credential type. Currently public_key, jwks_url, or workload_identity. Value enum:
     * "public_key", "jwks_url", "workload_identity".
     */
    "type": "public_key" | "jwks_url" | "workload_identity" | (string & {});
    /** The registered external OIDC issuer, exact subject, audience, and claim conditions. */
    "workload_identity"?: PartnerAppCredentialWorkloadIdentity;
});
/** A registered JWKS URL and its most recent successful fetch. */
export type PartnerAppCredentialJWKSURL = {
    /**
     * Most recent successful fetch of this URL by Flint. Updated at most once per minute. Format:
     * date-time.
     */
    "last_fetched_at": string;
    "url": string;
};
/**
 * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
 * credential.
 */
export type PartnerAppCredentialJWKSURLRequestInput = {
    /**
     * HTTPS URL with a DNS host, optional port 443, no userinfo or fragment, and an optional
     * query. Flint API hosts and nonpublic destinations are rejected. The URL must serve a JSON
     * Web Key Set with 1 to 10 supported public signing keys; unusable keys are ignored and don't
     * count. minLength: 1. maxLength: 2048.
     */
    "url": string;
};
/** A page of `PartnerAppCredential` objects. */
export type PartnerAppCredentialListResponse = {
    /**
     *  [] (Value): {@link PartnerAppCredential}. An immutable partner app credential, including
     * its authentication status and usage timestamps.
     */
    "data": Array<PartnerAppCredential>;
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
/** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. */
export type PartnerAppCredentialPublicKey = {
    "jwk": {
        [key: string]: unknown;
    };
    /** RFC 7638 SHA-256 JWK thumbprint. */
    "jwk_thumbprint": string;
};
/** The public JSON Web Key to register for client authentication. */
export type PartnerAppCredentialPublicKeyRequest = {
    /** A public JSON Web Key. Private key and symmetric key members are rejected. */
    "jwk": {
        [key: string]: unknown;
    };
};
/** The public JSON Web Key to register for client authentication. */
export type PartnerAppCredentialPublicKeyRequestInput = PartnerAppCredentialPublicKeyRequest;
/** A response containing `PartnerAppCredential` data. */
export type PartnerAppCredentialResponse = {
    /**
     * An immutable partner app credential, including its authentication status and usage
     * timestamps.
     */
    "data": PartnerAppCredential;
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
/** The registered external OIDC issuer, exact subject, audience, and claim conditions. */
export type PartnerAppCredentialWorkloadIdentity = {
    "audience": string;
    /**
     * Bounded value array of top-level scalar conditions checked for every assertion. [] (Value):
     * {@link WorkloadIdentityClaimCondition}. A condition matching one top-level scalar claim in
     * the workload's identity token.
     */
    "claim_conditions": Array<WorkloadIdentityClaimCondition>;
    "issuer": string;
    /**
     * The platform Flint recognizes from the issuer. New platform values may be added. Value enum:
     * "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes",
     * "circleci", "buildkite", "vercel", "fly_io".
     */
    "platform": "generic"
        | "github_actions"
        | "gitlab_ci"
        | "google_cloud"
        | "aws"
        | "azure"
        | "kubernetes"
        | "circleci"
        | "buildkite"
        | "vercel"
        | "fly_io"
        | (string & {});
    "subject": string;
};
/**
 * An external OIDC identity whose subject and claim conditions must match exactly the registered
 * policy.
 */
export type PartnerAppCredentialWorkloadIdentityRequest = {
    /**
     * Token audience. Defaults to Flint's configured issuer URL when omitted. minLength: 1.
     * maxLength: 255.
     */
    "audience"?: string;
    /**
     * Bounded value array of at most 10 top-level scalar claim conditions. Defaults to []. A glob
     * requires an exact condition; shared issuers require tenant pinning. maxItems: 10.
     * uniqueItems: true. [] (Value): {@link WorkloadIdentityClaimConditionRequest}. A condition to
     * match one top-level scalar claim in the workload's identity token. Omitted match defaults to
     * exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or
     * fragment. Compared exactly. Must publish valid OIDC discovery metadata. minLength: 1.
     * maxLength: 255.
     */
    "issuer": string;
    /**
     * Exact token subject. Google Cloud subjects must be numeric. minLength: 1. maxLength: 1024.
     */
    "subject": string;
};
/**
 * An external OIDC identity whose subject and claim conditions must match exactly the registered
 * policy.
 */
export type PartnerAppCredentialWorkloadIdentityRequestInput = {
    /**
     * Token audience. Defaults to Flint's configured issuer URL when omitted. minLength: 1.
     * maxLength: 255.
     */
    "audience"?: string;
    /**
     * Bounded value array of at most 10 top-level scalar claim conditions. Defaults to []. A glob
     * requires an exact condition; shared issuers require tenant pinning. maxItems: 10.
     * uniqueItems: true. [] (Value): {@link WorkloadIdentityClaimConditionRequestInput}. A
     * condition to match one top-level scalar claim in the workload's identity token. Omitted
     * match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or
     * fragment. Compared exactly. Must publish valid OIDC discovery metadata. minLength: 1.
     * maxLength: 255.
     */
    "issuer": string;
    /**
     * Exact token subject. Google Cloud subjects must be numeric. minLength: 1. maxLength: 1024.
     */
    "subject": string;
};
/** A merchant's authorization of a partner application. */
export type PartnerAppInstall = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     *  [] (Value): {@link PartnerEnvironmentGrant}. A partner application's authorization to
     * access an environment.
     */
    "environment_grants"?: Array<PartnerEnvironmentGrant>;
    "installed_by_user_id"?: string;
    "merchant_id": string;
    "partner_app_id": string;
    "partner_app_install_id": string;
    /** The app’s current name. */
    "partner_app_name": string;
    /** RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    /** Value enum: "merchant", "partner_app". */
    "revoked_by"?: "merchant" | "partner_app" | (string & {});
    "revoked_by_user_id"?: string;
    /** Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
export type PartnerAppInstallCreatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.created";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.created";
});
/** A page of `PartnerAppInstall` objects. */
export type PartnerAppInstallListResponse = {
    /**
     *  [] (Value): {@link PartnerAppInstall}. A merchant's authorization of a partner application.
     */
    "data": Array<PartnerAppInstall>;
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
export type PartnerAppInstallPermissionsUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.permissions_updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.permissions_updated";
});
/** A response containing `PartnerAppInstall` data. */
export type PartnerAppInstallResponse = {
    /** A merchant's authorization of a partner application. */
    "data": PartnerAppInstall;
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
export type PartnerAppInstallRevokedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.revoked";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.revoked";
});
export type PartnerAppInstallUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.updated";
});
export type PartnerAppInstallsListParams = {
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
    /** Filter by app ID. Example: "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "partner_app_id"?: InputValue<string>;
    /**
     * Filter by install status. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "pending_exchange",
     * "active", "revoked". Value enum: "pending_exchange", "active", "revoked". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "pending_exchange", "active", "revoked". anyOf[1][]
     * (Value): string. Value enum: "pending_exchange", "active", "revoked". anyOf[2] (Value):
     * string. Value enum: "pending_exchange", "active", "revoked".
     */
    "status"?: InputValue<("pending_exchange" | "active" | "revoked") | readonly ("pending_exchange" | "active" | "revoked")[]>;
};
export type PartnerAppInstallsRevokeParams = {};
/** A page of `PartnerApp` objects. */
export type PartnerAppListResponse = {
    /**
     *  [] (Value): {@link PartnerApp}. An application that merchants can authorize to access their
     * accounts.
     */
    "data": Array<PartnerApp>;
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
 * One permission a partner app can request, with a title, a description, and the Flint scopes it
 * grants.
 */
export type PartnerAppPermissionManifestEntry = {
    /** minLength: 1. */
    "description": string;
    /**
     * Whether the merchant can decline this permission when they approve the install. Defaults to
     * false: the permission is required and is always granted.
     */
    "optional"?: boolean;
    /** minLength: 1. */
    "permission_id": string;
    /**  [] (Value): string. minLength: 1. */
    "required_scopes": Array<string>;
    /** minLength: 1. */
    "title": string;
};
/**
 * One permission a partner app can request, with a title, a description, and the Flint scopes it
 * grants.
 */
export type PartnerAppPermissionManifestEntryRequestInput = PartnerAppPermissionManifestEntry;
/** A response containing `PartnerApp` data. */
export type PartnerAppResponse = {
    /** An application that merchants can authorize to access their accounts. */
    "data": PartnerApp;
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
 * A partner app returned with its newly issued client secret after rotation. An application that
 * merchants can authorize to access their accounts.
 */
export type PartnerAppWithRotatedSecret = (Exclude<PartnerApp & object, readonly unknown[]>)
    & ({
    /** Newly issued client secret, returned only once after rotation. */
    "client_secret": string;
});
/**
 * A partner app returned with its client secret, as in the response to creating a partner app. An
 * application that merchants can authorize to access their accounts.
 */
export type PartnerAppWithSecret = (Exclude<PartnerApp & object, readonly unknown[]>)
    & ({
    /**
     * One-time client secret returned when enabled at creation. Null when client_secret_enabled is
     * false.
     */
    "client_secret": string | null;
});
/** A response containing `PartnerAppWithSecret` data. */
export type PartnerAppWithSecretResponse = {
    /**
     * A partner app returned with its client secret, as in the response to creating a partner app.
     * An application that merchants can authorize to access their accounts.
     */
    "data": PartnerAppWithSecret;
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
