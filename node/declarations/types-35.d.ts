import type { ResponseMeta, ReturnActivity, ReturnDisposition } from './types-54.js';
import type { ReturnInspection, ReturnLineItem, ReturnPolicy, ReturnPolicyRevision } from './types-55.js';
import type { ReturnReason, ReturnReceipt, ReturnResolution } from './types-56.js';
import type { ReturnResource } from './types-57.js';
import type { Address, AcceptFulfillmentRequestInput } from './types-0.js';
import type { MetadataMap } from './types-37.js';
import type { InputValue } from '../runtime.js';
import type { CreateLocationRequestInput, CreateMeCheckoutSessionRequestInput } from './types-10.js';
import type { InventoryAllocationPoliciesDeleteParams } from './types-28.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { UpdateLocationRequestInput } from './types-66.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { BuyerCancelReturnRequestInput } from './types-1.js';
import type { CancelMeSubscriptionRequestInput } from './types-4.js';
import type { ChangeMeSubscriptionPlanRequestInput, ChangeMeSubscriptionQuantityRequestInput } from './types-5.js';
import type { ConfirmEmailChangeRequestInput } from './types-7.js';
import type { CreateCustomerAddressRequestInput } from './types-8.js';
import type { CreateEmailChangeRequestInput } from './types-9.js';
import type { SaveMePaymentMethodRequestInput } from './types-59.js';
import type { BuyerCreateReturnRequestInput } from './types-2.js';
/**
 * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin
 * of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequest = {
    /**
     * ID of the location the item ships from. Required for `fixed_location`; not accepted for
     * other policies. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * How Flint picks the location the item ships from. Value enum: "fixed_location",
     * "inventory_routing", "method_origin".
     */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/**
 * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin
 * of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequestModelInput = {
    /**
     * ID of the location the item ships from. Required for `fixed_location`; not accepted for
     * other policies. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * How Flint picks the location the item ships from. Value enum: "fixed_location",
     * "inventory_routing", "method_origin".
     */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin";
};
/**
 * Fulfillment requirements you supply for an order line item, such as allowed fulfillment types,
 * package size and weight, and origin.
 */
export type LineItemFulfillmentRequest = {
    /**
     * Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is
     * `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital
     * and service. [] (Value): string. minLength: 1.
     */
    "allowed_types"?: Array<string>;
    /**
     * Controls which delivery obligations can share a choice group. Required for `quote`
     * resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`.
     * Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Where the item ships from. Required for `quote` resolution; not accepted for `none` or
     * `manual` resolution. Where a line item ships or is fulfilled from: a fixed location,
     * inventory routing, or the origin of the fulfillment method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequest;
    /**
     * Whether this item needs fulfillment. `none` forbids every other fulfillment field. Value
     * enum: "none", "required".
     */
    "requirement": "none" | "required" | (string & {});
    /**
     * How Flint resolves fulfillment. Required when `requirement` is `required`. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Controls whether a line item's quantity can be split across delivery assignments. Required
     * for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is
     * `manual`. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
};
/**
 * Fulfillment requirements you supply for an order line item, such as allowed fulfillment types,
 * package size and weight, and origin.
 */
export type LineItemFulfillmentRequestModelInput = {
    /**
     * Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is
     * `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital
     * and service. [] (Value): string. minLength: 1.
     */
    "allowed_types"?: Array<string>;
    /**
     * Controls which delivery obligations can share a choice group. Required for `quote`
     * resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`.
     * Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Where the item ships from. Required for `quote` resolution; not accepted for `none` or
     * `manual` resolution. Where a line item ships or is fulfilled from: a fixed location,
     * inventory routing, or the origin of the fulfillment method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequestModelInput;
    /**
     * Whether this item needs fulfillment. `none` forbids every other fulfillment field. Value
     * enum: "none", "required".
     */
    "requirement": "none" | "required";
    /**
     * How Flint resolves fulfillment. Required when `requirement` is `required`. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual";
    /**
     * Controls whether a line item's quantity can be split across delivery assignments. Required
     * for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is
     * `manual`. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
};
/** The quantity of one inventory item that each unit of an order line item uses. */
export type LineItemInventoryDemand = {
    /** Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1". */
    "bundle_component_id"?: string;
    /** Example: "component-1842". */
    "component_snapshot_id"?: string;
    /**
     * ID of the inventory item each unit of the line item uses. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity_per_line_item_unit": number;
};
/**
 * Whether an order line item tracks inventory, and the inventory item quantities each unit
 * demands.
 */
export type LineItemInventorySnapshot = {
    /**
     * The inventory items and quantities each unit of the line item uses. [] (Value): {@link
     * LineItemInventoryDemand}. The quantity of one inventory item that each unit of an order line
     * item uses.
     */
    "demands": Array<LineItemInventoryDemand>;
    /** Whether the line item draws on tracked stock. Value enum: "not_tracked", "tracked". */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
};
/** The request body for: Link guest purchases to a customer. */
export type LinkCustomerGuestPurchasesRequest = {
    /**
     * ID of a confirmed customer verification with purpose `link_guest_purchases`. Linking uses it
     * up. minLength: 1. Example: "cver_01KEZF7C00E7S01991S7457CVK".
     */
    "customer_verification_id": string;
};
/** The request body for: Link guest purchases to a customer. */
export type LinkCustomerGuestPurchasesRequestInput = LinkCustomerGuestPurchasesRequest;
/** A page of `ReturnActivity` objects. */
export type ListReturnActivitiesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnActivity}. One entry in a return's activity history.
     */
    "data": Array<ReturnActivity>;
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
/** A page of `ReturnDisposition` objects. */
export type ListReturnDispositionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "data": Array<ReturnDisposition>;
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
/** A page of `ReturnInspection` objects. */
export type ListReturnInspectionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items.
     */
    "data": Array<ReturnInspection>;
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
/** A page of `ReturnLineItem` objects. */
export type ListReturnLineItemsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnLineItem}. An item included in a return request.
     */
    "data": Array<ReturnLineItem>;
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
/** A page of `ReturnPolicy` objects. */
export type ListReturnPoliciesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnPolicy}. Rules governing whether and how purchased items can be returned.
     */
    "data": Array<ReturnPolicy>;
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
/** A page of `ReturnPolicyRevision` objects. */
export type ListReturnPolicyRevisionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnPolicyRevision}. A saved revision of a return policy.
     */
    "data": Array<ReturnPolicyRevision>;
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
/** A page of `ReturnReason` objects. */
export type ListReturnReasonsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnReason}. A reason customers can select when requesting a return.
     */
    "data": Array<ReturnReason>;
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
/** A page of `ReturnReceipt` objects. */
export type ListReturnReceiptsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     */
    "data": Array<ReturnReceipt>;
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
/** A page of `ReturnResolution` objects. */
export type ListReturnResolutionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "data": Array<ReturnResolution>;
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
/** A page of `Return` objects. */
export type ListReturnsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnResource}. A request to send purchased items back.
     */
    "data": Array<ReturnResource>;
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
 * A physical or logical place a merchant operates from. Every Location can hold stock.
 * inventory_allocation_enabled controls whether it accepts inventory allocation.
 */
export type Location = {
    /**
     * Published postal address. `null` when the Location has no address on record. anyOf[1]
     * (Value): {@link Address}. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country. anyOf[2] (Value): null.
     */
    "address": ((Address) | (null));
    /**
     * Latitude and longitude of the Location. Omitted when none was sent. A latitude and longitude
     * for a merchant location.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Where `coordinate` came from. Omitted when the Location has no coordinate. Value enum:
     * "merchant_supplied", "geocoded".
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | (string & {});
    /** Time the Location was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Read-only version that advances only on geography changes and is pinned by tax and delivery
     * dependencies. It is not a request fence. Format: uint64. minimum: 0.
     */
    "geography_version": number;
    /**
     * Whether this Location accepts inventory allocation. Always present, including false when
     * allocation is not configured.
     */
    "inventory_allocation_enabled": boolean;
    /** Stable Location ID. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Merchant-facing Location name. minLength: 1. maxLength: 255. */
    "name": string;
    /** Current Location lifecycle status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** IANA timezone for local schedules. */
    "timezone": string;
    /** Time the Location last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Optimistic-concurrency version that advances on every Location change. Format: uint64.
     * minimum: 1.
     */
    "version": number;
};
/** A latitude and longitude for a merchant location. */
export type LocationCoordinate = {
    /** Latitude between -90 and 90. Responses always include this field, including 0. */
    "latitude": number;
    /** Longitude between -180 and 180. Responses always include this field, including 0. */
    "longitude": number;
};
/** A latitude and longitude for a merchant location. */
export type LocationCoordinateRequestInput = LocationCoordinate;
/** A page of `Location` objects. */
export type LocationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Location}. A physical or logical place a merchant operates from. Every Location can hold
     * stock. inventory_allocation_enabled controls whether it accepts inventory allocation.
     */
    "data": Array<Location>;
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
/** A response containing `Location` data. */
export type LocationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A physical or logical
     * place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled
     * controls whether it accepts inventory allocation.
     */
    "data": Location;
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
export type LocationsCreateParams = (InputValue<CreateLocationRequestInput>)
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
export type LocationsDeleteParams = InventoryAllocationPoliciesDeleteParams;
export type LocationsGetParams = DisputesAcceptParams;
export type LocationsListParams = {
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
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by whether the Location accepts inventory allocation. false includes Locations
     * without an inventory allocation configuration.
     */
    "inventory_allocation_enabled"?: InputValue<boolean>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /** Search Location ID, external reference ID, or name. maxLength: 255. */
    "query"?: InputValue<string>;
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
export type LocationsUpdateParams = (InputValue<UpdateLocationRequestInput>)
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
/** The request body for: Look up email preferences. */
export type LookupEmailPreferencesRequest = {
    /**
     * Email address to look up. Matched after trimming surrounding whitespace and ignoring case,
     * the way Flint matches unsubscribes. minLength: 1. maxLength: 320.
     */
    "email": string;
};
/** The request body for: Look up email preferences. */
export type LookupEmailPreferencesRequestInput = LookupEmailPreferencesRequest;
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequest = {
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
};
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequestInput = LookupGiftCardRequest;
/** Look up a ticket using its bearer admission credential. */
export type LookupTicketRequest = {
    /**
     * The 16-character Crockford base32 admission code. Spaces, hyphens and ASCII lowercase are
     * normalized. minLength: 16.
     */
    "admission_code": string;
};
/** Look up a ticket using its bearer admission credential. */
export type LookupTicketRequestInput = LookupTicketRequest;
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequest = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /** Name of the discount. minLength: 1. */
    "name": string;
    /**
     * IDs of the charges this discount reduces. [] (Value): string. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items this discount applies to. [] (Value): string. minLength: 1.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /**
     * Whether the discount applies to the whole order or to specific line items. Send
     * `discount_class` instead of `scope`; a conflicting pair is refused. Value enum: "order",
     * "line_item".
     */
    "scope"?: "order" | "line_item" | (string & {});
};
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequestInput = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /** Name of the discount. minLength: 1. */
    "name": string;
    /**
     * IDs of the charges this discount reduces. [] (Value): string. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items this discount applies to. [] (Value): string. minLength: 1.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /**
     * Whether the discount applies to the whole order or to specific line items. Send
     * `discount_class` instead of `scope`; a conflicting pair is refused. Value enum: "order",
     * "line_item".
     */
    "scope"?: "order" | "line_item";
};
/** Records a missed service appointment with a required no-show reason. */
export type MarkFulfillmentNoShowRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records a missed service appointment with a required no-show reason. */
export type MarkFulfillmentNoShowRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other";
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records that the items for a shipment fulfillment have been packed. */
export type MarkFulfillmentPackedRequestInput = AcceptFulfillmentRequestInput;
/** Records that the items for a shipment fulfillment have been picked. */
export type MarkFulfillmentPickedRequestInput = AcceptFulfillmentRequestInput;
/** Records that preparation of a pickup or delivery fulfillment has begun. */
export type MarkFulfillmentPreparingRequestInput = AcceptFulfillmentRequestInput;
/** Records that a pickup is ready for collection or a delivery is ready for dispatch. */
export type MarkFulfillmentReadyRequestInput = AcceptFulfillmentRequestInput;
/** Records the package action mark_delivered. */
export type MarkPackageDeliveredRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records the package action mark_delivery_attempted. */
export type MarkPackageDeliveryAttemptedRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_exception. */
export type MarkPackageExceptionRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_in_transit. */
export type MarkPackageInTransitRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records the package action mark_in_transit. */
export type MarkPackageInTransitRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records the package action mark_out_for_delivery. */
export type MarkPackageOutForDeliveryRequestInput = MarkPackageInTransitRequestInput;
/** Records the package action mark_packed. */
export type MarkPackagePackedRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_returned. */
export type MarkPackageReturnedRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_shipped. */
export type MarkPackageShippedRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier handling this package. minLength: 1. maxLength: 100. */
    "carrier"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /** Carrier service used for this package. minLength: 1. maxLength: 100. */
    "service_code"?: string;
    /** Carrier tracking number for this package. minLength: 1. maxLength: 255. */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * maxLength: 2048.
     */
    "tracking_url"?: string;
};
/** Records the package action mark_shipped. */
export type MarkPackageShippedRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier handling this package. minLength: 1. maxLength: 100. */
    "carrier"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /** Carrier service used for this package. minLength: 1. maxLength: 100. */
    "service_code"?: string;
    /** Carrier tracking number for this package. minLength: 1. maxLength: 255. */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * maxLength: 2048.
     */
    "tracking_url"?: string;
};
export type MeCancelReturnParams = (InputValue<BuyerCancelReturnRequestInput>);
export type MeCancelSubscriptionParams = (InputValue<CancelMeSubscriptionRequestInput>);
export type MeChangeSubscriptionPlanParams = (InputValue<ChangeMeSubscriptionPlanRequestInput>);
export type MeChangeSubscriptionQuantityParams = (InputValue<ChangeMeSubscriptionQuantityRequestInput>);
export type MeConfirmEmailChangeRequestParams = (InputValue<ConfirmEmailChangeRequestInput>);
export type MeCreateAddressParams = (InputValue<CreateCustomerAddressRequestInput>);
export type MeCreateCheckoutSessionParams = (CreateMeCheckoutSessionRequestInput);
export type MeCreateDeletionRequestParams = {};
export type MeCreateEmailChangeRequestParams = (InputValue<CreateEmailChangeRequestInput>);
export type MeCreateFlintWalletStoreSetupParams = {};
export type MeCreatePaymentMethodParams = (InputValue<SaveMePaymentMethodRequestInput>);
export type MeCreateReturnParams = (InputValue<BuyerCreateReturnRequestInput>);
