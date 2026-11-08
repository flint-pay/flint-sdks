import type { ResponseMeta } from './types-48.js';
import type { ReturnLineItem, ReturnPolicy, ReturnPolicyRevision } from './types-49.js';
import type { ReturnReason, ReturnReceipt, ReturnResolution } from './types-50.js';
import type { ReturnResource } from './types-51.js';
import type { Address } from './types-0.js';
import type { MetadataMap, MoneyValue, MoneyValueInput } from './types-35.js';
import type { InputValue } from '../runtime.js';
import type { CreateLocationRequestInput, CreateMeSubscriptionPreviewRequestInput } from './types-9.js';
import type { InventoryAllocationPoliciesDeleteParams } from './types-25.js';
import type { UpdateLocationRequestInput } from './types-59.js';
import type { CancelReturnRequestInput, CancelSubscriptionRequestInput } from './types-4.js';
import type { ConfirmEmailChangeRequestInput } from './types-6.js';
import type { CustomersCreateAddressParams, CustomersDeleteAddressParams } from './types-14.js';
import type { CreateEmailChangeRequestInput } from './types-7.js';
import type { InvoicesCreateCheckoutSessionParams } from './types-32.js';
import type { SaveMePaymentMethodRequestInput } from './types-53.js';
import type { BuyerCreateReturnRequestInput, BuyerCreateReturnPreviewRequestInput } from './types-1.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from './types-23.js';
import type { CheckoutSessionsListDeliverySelectionsParams } from './types-5.js';
/** A page of `ReturnLineItem` objects. */
export type ListReturnLineItemsResponse = {
    /**  [] (Value): {@link ReturnLineItem}. An item included in a return request. */
    "data": Array<ReturnLineItem>;
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
/** A page of `ReturnPolicy` objects. */
export type ListReturnPoliciesResponse = {
    /**
     *  [] (Value): {@link ReturnPolicy}. Rules governing whether and how purchased items can be
     * returned.
     */
    "data": Array<ReturnPolicy>;
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
/** A page of `ReturnPolicyRevision` objects. */
export type ListReturnPolicyRevisionsResponse = {
    /**  [] (Value): {@link ReturnPolicyRevision}. A saved revision of a return policy. */
    "data": Array<ReturnPolicyRevision>;
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
/** A page of `ReturnReason` objects. */
export type ListReturnReasonsResponse = {
    /**
     *  [] (Value): {@link ReturnReason}. A reason customers can select when requesting a return.
     */
    "data": Array<ReturnReason>;
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
/** A page of `ReturnReceipt` objects. */
export type ListReturnReceiptsResponse = {
    /**  [] (Value): {@link ReturnReceipt}. A record of returned items arriving at a location. */
    "data": Array<ReturnReceipt>;
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
/** A page of `ReturnResolution` objects. */
export type ListReturnResolutionsResponse = {
    /**
     *  [] (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "data": Array<ReturnResolution>;
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
/** A page of `Return` objects. */
export type ListReturnsResponse = {
    /**  [] (Value): {@link ReturnResource}. A request to send purchased items back. */
    "data": Array<ReturnResource>;
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
 * A physical or logical place a merchant operates from. Every Location can hold stock.
 * inventory_allocation_enabled controls whether it accepts inventory allocation.
 */
export type Location = {
    /**
     * Published postal address. anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. anyOf[2] (Value): null.
     */
    "address": ((Address) | (null));
    /** Published geographic coordinate. A latitude and longitude for a merchant location. */
    "coordinate"?: LocationCoordinate;
    /**
     * Source of the stored latitude and longitude. Value enum: "merchant_supplied", "geocoded",
     * null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /** Time the Location was created. Format: date-time. */
    "created_at": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
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
    /** Stable Location ID. */
    "location_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Merchant-facing Location name. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Provider-normalized address used for geography evaluation. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "normalized_address"?: Address;
    /** Current Location lifecycle status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** IANA timezone for local schedules. */
    "timezone": string;
    /** Time the Location last changed. Format: date-time. */
    "updated_at": string;
    /** Address validation status. Value enum: "not_validated", "validated", "merchant_verified". */
    "validation_status": "not_validated" | "validated" | "merchant_verified" | (string & {});
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
     *  [] (Value): {@link Location}. A physical or logical place a merchant operates from. Every
     * Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory
     * allocation.
     */
    "data": Array<Location>;
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
/** A response containing `Location` data. */
export type LocationResponse = {
    /**
     * A physical or logical place a merchant operates from. Every Location can hold stock.
     * inventory_allocation_enabled controls whether it accepts inventory allocation.
     */
    "data": Location;
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
export type LocationsCreateParams = (InputValue<CreateLocationRequestInput>);
export type LocationsDeleteParams = InventoryAllocationPoliciesDeleteParams;
export type LocationsGetParams = {};
export type LocationsListParams = {
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
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by whether the Location accepts inventory allocation. false includes Locations
     * without an inventory allocation configuration.
     */
    "inventory_allocation_enabled"?: InputValue<boolean>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Search Location ID, external reference ID, or name. maxLength: 255. */
    "query"?: InputValue<string>;
};
export type LocationsUpdateParams = (InputValue<UpdateLocationRequestInput>);
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequest = {
    /** minLength: 1. */
    "code": string;
};
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequestInput = LookupGiftCardRequest;
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
    /** Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /** minLength: 1. */
    "name": string;
    /**  [] (Value): string. minLength: 1. */
    "order_charge_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "order_line_item_ids"?: Array<string>;
    /** Value enum: "order", "line_item". */
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
    /** Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /** minLength: 1. */
    "name": string;
    /**  [] (Value): string. minLength: 1. */
    "order_charge_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "order_line_item_ids"?: Array<string>;
    /** Value enum: "order", "line_item". */
    "scope"?: "order" | "line_item";
};
export type MeCancelReturnParams = (InputValue<CancelReturnRequestInput>);
export type MeCancelSubscriptionParams = (InputValue<CancelSubscriptionRequestInput>);
export type MeConfirmEmailChangeRequestParams = (InputValue<ConfirmEmailChangeRequestInput>);
export type MeCreateAddressParams = CustomersCreateAddressParams;
export type MeCreateDeletionRequestParams = {};
export type MeCreateEmailChangeRequestParams = (InputValue<CreateEmailChangeRequestInput>);
export type MeCreateFlintWalletStoreSetupParams = {};
export type MeCreateInvoiceCheckoutSessionParams = InvoicesCreateCheckoutSessionParams;
export type MeCreatePaymentMethodParams = (InputValue<SaveMePaymentMethodRequestInput>);
export type MeCreateReturnParams = (InputValue<BuyerCreateReturnRequestInput>);
export type MeCreateReturnPreviewParams = (BuyerCreateReturnPreviewRequestInput);
export type MeCreateReturnResolutionCheckoutSessionParams = (InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>);
export type MeCreateSubscriptionPaymentRetryParams = (InputValue<{}>);
export type MeCreateSubscriptionPreviewParams = (CreateMeSubscriptionPreviewRequestInput);
export type MeDeleteAddressParams = CustomersDeleteAddressParams;
export type MeDeletePaymentMethodParams = {};
export type MeGetAddressParams = {};
export type MeGetCreditNotePDFParams = {};
export type MeGetCreditNotePDFResponse = Uint8Array;
export type MeGetCreditNoteParams = {};
export type MeGetDeletionRequestParams = {};
export type MeGetEmailPreferencesParams = {};
export type MeGetFulfillmentParams = {};
export type MeGetGiftCardParams = {};
export type MeGetInvoicePDFParams = {};
export type MeGetInvoicePDFResponse = Uint8Array;
export type MeGetInvoiceParams = {};
export type MeGetOrderParams = {};
export type MeGetPackageParams = {};
export type MeGetParams = {};
export type MeGetPaymentIntentParams = {};
export type MeGetPaymentMethodParams = {};
export type MeGetRefundParams = {};
export type MeGetReturnParams = {};
export type MeGetReturnResolutionParams = {};
export type MeGetShipmentParams = {};
export type MeGetSubscriptionParams = {};
export type MeGetSubscriptionPaymentRetryParams = {};
export type MeListAddressesParams = CheckoutSessionsListDeliverySelectionsParams;
export type MeListCreditNotesParams = {
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
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "issued", "void". Value
     * enum: "issued", "void". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "issued",
     * "void". anyOf[1][] (Value): string. Value enum: "issued", "void". anyOf[2] (Value): string.
     * Value enum: "issued", "void".
     */
    "status"?: InputValue<("issued" | "void") | readonly ("issued" | "void")[]>;
};
export type MeListDeletionRequestsParams = {
    /**
     * Only return requests in this lifecycle state. Accepts repeated keys, comma-separated values,
     * or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending_review", "processing", "completed", "rejected", "failed". Value enum:
     * "pending_review", "processing", "completed", "rejected", "failed". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "pending_review", "processing", "completed", "rejected",
     * "failed". anyOf[1][] (Value): string. Value enum: "pending_review", "processing",
     * "completed", "rejected", "failed". anyOf[2] (Value): string. Value enum: "pending_review",
     * "processing", "completed", "rejected", "failed".
     */
    "status"?: InputValue<("pending_review" | "processing" | "completed" | "rejected" | "failed")
        | readonly ("pending_review" | "processing" | "completed" | "rejected" | "failed")[]>;
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
export type MeListFlintWalletCardsParams = {};
export type MeListFulfillmentEventsParams = {
    /** Required buyer-owned order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id": InputValue<string>;
    /** Filter by fulfillment ID. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /** Filter by shipment ID. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "shipment_id"?: InputValue<string>;
    /** Filter by package ID. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "package_id"?: InputValue<string>;
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
