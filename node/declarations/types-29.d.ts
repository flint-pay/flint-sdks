import type { ResponseMeta, ReturnActivity, ReturnDisposition, ReturnInspection } from './types-40.js';
import type { ReturnLineItem, ReturnPolicy, ReturnPolicyRevision, ReturnReason, ReturnReceipt } from './types-41.js';
import type { ReturnResolution, ReturnResource } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreateLocationRequestInput, CreateMeSubscriptionPreviewRequestInput } from './types-7.js';
import type { UpdateLocationRequestInput } from './types-48.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type {
    CancelReturnRequestInput,
    CancelSubscriptionRequestInput,
    ChangeMeSubscriptionBillingIntervalRequestInput,
    ChangeMeSubscriptionDeliveryRequestInput,
    ChangeSubscriptionPaymentMethodRequestInput,
    ChangeMeSubscriptionQuantityRequestInput
} from './types-3.js';
import type { ConfirmEmailChangeRequestInput, CreateCustomerAddressRequestInput } from './types-5.js';
import type { CreateEmailChangeRequestInput } from './types-6.js';
import type { InvoiceCheckoutSessionRequestInput } from './types-26.js';
import type { BuyerCreateReturnRequestInput, BuyerCreateReturnPreviewRequestInput } from './types-1.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from './types-18.js';
import type { StripeClientSetup } from './types-44.js';
import type { CustomersGetDeletionRequestInput } from './types-11.js';
import type { GiftCardsGetInput } from './types-19.js';
import type { InvoicesGetPDFInput } from './types-28.js';
/** Shape $ (Value): {@link ListReturnActivitiesResponse}. A page of `ReturnActivity` objects. */
export type ListReturnActivitiesResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnActivity}. Shape $[] (Value): {@link ReturnActivity}.
     * One entry in a Return's merchant activity history.
     */
    "data": Array<ReturnActivity>;
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
 * Shape $ (Value): {@link ListReturnDispositionsResponse}. A page of `ReturnDisposition` objects.
 */
export type ListReturnDispositionsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnDisposition}. Shape $[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "data": Array<ReturnDisposition>;
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
/** Shape $ (Value): {@link ListReturnInspectionsResponse}. A page of `ReturnInspection` objects. */
export type ListReturnInspectionsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnInspection}. Shape $[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items.
     */
    "data": Array<ReturnInspection>;
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
/** Shape $ (Value): {@link ListReturnLineItemsResponse}. A page of `ReturnLineItem` objects. */
export type ListReturnLineItemsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnLineItem}. Shape $[] (Value): {@link ReturnLineItem}.
     * An item included in a return request.
     */
    "data": Array<ReturnLineItem>;
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
/** Shape $ (Value): {@link ListReturnPoliciesResponse}. A page of `ReturnPolicy` objects. */
export type ListReturnPoliciesResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnPolicy}. Shape $[] (Value): {@link ReturnPolicy}.
     * Rules governing whether and how purchased items can be returned.
     */
    "data": Array<ReturnPolicy>;
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
 * Shape $ (Value): {@link ListReturnPolicyRevisionsResponse}. A page of `ReturnPolicyRevision`
 * objects.
 */
export type ListReturnPolicyRevisionsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyRevision}. Shape $[] (Value): {@link
     * ReturnPolicyRevision}. A saved revision of a return policy.
     */
    "data": Array<ReturnPolicyRevision>;
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
/** Shape $ (Value): {@link ListReturnReasonsResponse}. A page of `ReturnReason` objects. */
export type ListReturnReasonsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnReason}. Shape $[] (Value): {@link ReturnReason}. A
     * reason customers can select when requesting a return.
     */
    "data": Array<ReturnReason>;
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
/** Shape $ (Value): {@link ListReturnReceiptsResponse}. A page of `ReturnReceipt` objects. */
export type ListReturnReceiptsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnReceipt}. Shape $[] (Value): {@link ReturnReceipt}. A
     * record of returned items arriving at a location.
     */
    "data": Array<ReturnReceipt>;
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
/** Shape $ (Value): {@link ListReturnResolutionsResponse}. A page of `ReturnResolution` objects. */
export type ListReturnResolutionsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnResolution}. Shape $[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "data": Array<ReturnResolution>;
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
/** Shape $ (Value): {@link ListReturnsResponse}. A page of `Return` objects. */
export type ListReturnsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnResource}. Shape $[] (Value): {@link ReturnResource}.
     * A request to send purchased items back.
     */
    "data": Array<ReturnResource>;
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
 * Shape $ (Value): {@link Location}. A physical or logical place a merchant operates from. Every
 * Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory
 * allocation.
 */
export type Location = {
    /**
     * Shape $ (Value): {@link LocationAddress} or null. Published postal address. Shape $.anyOf[1]
     * (Value): {@link LocationAddress}. The street address of a merchant location. Shape
     * $.anyOf[2] (Value): null.
     */
    "address": ((LocationAddress) | (null));
    /**
     * Shape $ (Value): {@link LocationCoordinate}. Published geographic coordinate. A latitude and
     * longitude for a merchant location.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Shape $ (Value): string or null. Source of the stored latitude and longitude. Value enum:
     * "merchant_supplied", "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /** Shape $ (Value): string. Time the Location was created. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Read-only version that advances only on geography changes
     * and is pinned by tax and delivery dependencies. It is not a request fence. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "geography_version": `${bigint}`;
    /**
     * Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Always
     * present, including false when allocation is not configured.
     */
    "inventory_allocation_enabled": boolean;
    /** Shape $ (Value): string. Stable Location ID. */
    "location_id": string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. maxProperties: 50. Shape $.* (Value):
     * string. maxLength: 4096.
     */
    "metadata": Record<string, string>;
    /** Shape $ (Value): string. Merchant-facing Location name. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): {@link LocationAddress}. Provider-normalized address used for geography
     * evaluation. The street address of a merchant location.
     */
    "normalized_address"?: LocationAddress;
    /**
     * Shape $ (Value): string. Current Location lifecycle status. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. IANA timezone for local schedules. */
    "timezone": string;
    /** Shape $ (Value): string. Time the Location last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): string. Address validation status. Value enum: "not_validated",
     * "validated", "merchant_verified".
     */
    "validation_status": "not_validated" | "validated" | "merchant_verified" | (string & {});
    /**
     * Shape $ (Value): integer string. Optimistic-concurrency version that advances on every
     * Location change. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link LocationAddress}. The street address of a merchant location. */
export type LocationAddress = {
    /** Shape $ (Value): string. */
    "city": string;
    /**
     * Shape $ (Value): string. Uppercase ISO 3166-1 alpha-2 country code, such as US. Lowercase
     * codes and surrounding whitespace are rejected. minLength: 2. maxLength: 2. pattern:
     * ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Shape $ (Value): string. */
    "line1": string;
    /** Shape $ (Value): string. */
    "line2"?: string;
    /** Shape $ (Value): string. */
    "postal_code"?: string;
    /** Shape $ (Value): string. State, province, or region. */
    "state"?: string;
};
/**
 * Shape $ (Value): {@link LocationAddressRequest}. The street address you supply when creating or
 * updating a merchant location. Send null on an optional field to clear it.
 */
export type LocationAddressRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "city": string;
    /**
     * Shape $ (Value): string. Uppercase ISO 3166-1 alpha-2 country code, such as US. Lowercase
     * codes and surrounding whitespace are rejected. minLength: 2. maxLength: 2. pattern:
     * ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Shape $ (Value): string. minLength: 1. */
    "line1": string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "line2"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "postal_code"?: string | null;
    /**
     * Shape $ (Value): string or null. State, province, or region. Send null to clear it.
     * minLength: 1.
     */
    "state"?: string | null;
};
/**
 * Shape $ (Value): {@link LocationAddressRequestInput}. The street address you supply when
 * creating or updating a merchant location. Send null on an optional field to clear it.
 */
export type LocationAddressRequestInput = LocationAddressRequest;
/**
 * Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude for a merchant location.
 */
export type LocationCoordinate = {
    /**
     * Shape $ (Value): number. Latitude between -90 and 90. Responses always include this field,
     * including 0.
     */
    "latitude": number;
    /**
     * Shape $ (Value): number. Longitude between -180 and 180. Responses always include this
     * field, including 0.
     */
    "longitude": number;
};
/**
 * Shape $ (Value): {@link LocationCoordinateInput}. A latitude and longitude for a merchant
 * location.
 */
export type LocationCoordinateInput = LocationCoordinate;
/** Shape $ (Value): {@link LocationListResponse}. A page of `Location` objects. */
export type LocationListResponse = {
    /**
     * Shape $ (Value): Array of {@link Location}. Shape $[] (Value): {@link Location}. A physical
     * or logical place a merchant operates from. Every Location can hold stock.
     * inventory_allocation_enabled controls whether it accepts inventory allocation.
     */
    "data": Array<Location>;
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
/** Shape $ (Value): {@link LocationResponse}. A response containing `Location` data. */
export type LocationResponse = {
    /**
     * Shape $ (Value): {@link Location}. A physical or logical place a merchant operates from.
     * Every Location can hold stock. inventory_allocation_enabled controls whether it accepts
     * inventory allocation.
     */
    "data": Location;
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
export type LocationsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateLocationRequestInput}. The request body for: Create location.
     */
    "body": InputValue<CreateLocationRequestInput>;
};
export type LocationsGetInput = {
    /** Shape $ (Value): string. */
    "location_id": InputValue<string>;
};
export type LocationsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): boolean. */
    "inventory_allocation_enabled"?: InputValue<boolean>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
};
export type LocationsRemoveInput = {
    /** Shape $ (Value): string. */
    "location_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. */
    "expected_version"?: InputValue<number>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type LocationsUpdateInput = {
    /** Shape $ (Value): string. */
    "location_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateLocationRequestInput}. Sparse Location update. Omitted fields
     * stay unchanged. address and coordinate are atomic value objects. Sending address requires
     * coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a
     * non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source;
     * coordinate_source must then be omitted or null. timezone and coordinate may each be updated
     * without address. geography_version advances only when address, timezone, coordinate, or
     * coordinate_source changes; version advances on every Location change.
     */
    "body": InputValue<UpdateLocationRequestInput>;
};
/**
 * Shape $ (Value): {@link LookupGiftCardRequest}. The request body for: Look up a gift card code.
 */
export type LookupGiftCardRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "code": string;
};
/**
 * Shape $ (Value): {@link LookupGiftCardRequestInput}. The request body for: Look up a gift card
 * code.
 */
export type LookupGiftCardRequestInput = LookupGiftCardRequest;
/**
 * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order, with a
 * name, an amount, and the order, line items, or charges it applies to.
 */
export type ManualDiscountRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_charge_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_line_item_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "order", "line_item". */
    "scope"?: "order" | "line_item" | (string & {});
};
/**
 * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an order,
 * with a name, an amount, and the order, line items, or charges it applies to.
 */
export type ManualDiscountRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_charge_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_line_item_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "order", "line_item". */
    "scope"?: "order" | "line_item";
};
export type MeCancelReturnInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelReturnRequestInput}. The request body for: Cancel one of the
     * current buyer's Returns; Cancel return.
     */
    "body": InputValue<CancelReturnRequestInput>;
};
export type MeCancelSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelSubscriptionRequestInput}. The request body for: Cancel one of
     * the current buyer's subscriptions; Cancel subscription.
     */
    "body": InputValue<CancelSubscriptionRequestInput>;
};
export type MeChangeSubscriptionBillingIntervalInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ChangeMeSubscriptionBillingIntervalRequestInput}. The request body
     * for: Change subscription billing interval.
     */
    "body": InputValue<ChangeMeSubscriptionBillingIntervalRequestInput>;
};
export type MeChangeSubscriptionDeliveryInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ChangeMeSubscriptionDeliveryRequestInput}. The request body for:
     * Update subscription delivery.
     */
    "body": InputValue<ChangeMeSubscriptionDeliveryRequestInput>;
};
export type MeChangeSubscriptionPaymentMethodInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ChangeSubscriptionPaymentMethodRequestInput}. The request body for:
     * Change a subscription payment method; Change the payment method for one of the current
     * buyer's subscriptions.
     */
    "body": InputValue<ChangeSubscriptionPaymentMethodRequestInput>;
};
export type MeChangeSubscriptionQuantityInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ChangeMeSubscriptionQuantityRequestInput}. The request body for:
     * Change subscription quantity.
     */
    "body": InputValue<ChangeMeSubscriptionQuantityRequestInput>;
};
export type MeConfirmEmailChangeRequestInput = {
    /** Shape $ (Value): string. */
    "email_change_request_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ConfirmEmailChangeRequestInput}. The request body for: Confirm an
     * email change.
     */
    "body": InputValue<ConfirmEmailChangeRequestInput>;
};
export type MeCreateAddressInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCustomerAddressRequestInput}. The request body for: Create a
     * customer address; Create an address for the current buyer.
     */
    "body": InputValue<CreateCustomerAddressRequestInput>;
};
export type MeCreateDeletionRequestInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeCreateEmailChangeRequestInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateEmailChangeRequestInput}. The request body for: Request an
     * email change.
     */
    "body": InputValue<CreateEmailChangeRequestInput>;
};
export type MeCreateFlintWalletStoreSetupInput = {
    /** Shape $ (Value): string. */
    "id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeCreateInvoiceCheckoutSessionInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link InvoiceCheckoutSessionRequestInput}. The request body for: Create an
     * invoice checkout session for the current buyer; Get or create invoice checkout collection.
     */
    "body"?: InputValue<InvoiceCheckoutSessionRequestInput>;
};
export type MeCreateReturnInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link BuyerCreateReturnRequestInput}. The request body for: Create a
     * Return for the current buyer.
     */
    "body": InputValue<BuyerCreateReturnRequestInput>;
};
export type MeCreateReturnPreviewInput = {
    /**
     * Shape $ (Value): {@link BuyerCreateReturnPreviewRequestInput}. The request body for: Preview
     * Return eligibility or resolution amounts for the current buyer.
     */
    "body": InputValue<BuyerCreateReturnPreviewRequestInput>;
};
export type MeCreateReturnResolutionCheckoutSessionInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link GetOrCreateReturnResolutionCheckoutSessionRequestInput}. The request
     * body for: Create a Return resolution checkout session for the current buyer; Get or create
     * return resolution checkout session.
     */
    "body"?: InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>;
};
export type MeCreateSubscriptionPaymentRetryInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): object. maxProperties: 0. */
    "body"?: InputValue<{}>;
};
export type MeCreateSubscriptionPreviewInput = {
    /**
     * Shape $ (Value): {@link CreateMeSubscriptionPreviewRequestInput}. The request body for:
     * Preview subscription.
     */
    "body": InputValue<CreateMeSubscriptionPreviewRequestInput>;
};
export type MeDeleteAddressInput = {
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link MeFlintWalletCard}. An independent card saved with Flint that the
 * current buyer can set up at this store. Store copies have their own consent and lifecycle.
 */
export type MeFlintWalletCard = {
    /**
     * Shape $ (Value): string. Value enum: "visa", "mastercard", "amex", "discover", "diners",
     * "jcb", "unionpay".
     */
    "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "exp_month": number;
    /** Shape $ (Value): integer. Format: int32. */
    "exp_year": number;
    /**
     * Shape $ (Value): string. Opaque handle for this card at this store. Handles differ across
     * stores and cannot be used at another store.
     */
    "id": string;
    /** Shape $ (Value): string. */
    "last4": string;
    /**
     * Shape $ (Value): string or null. The store's independent card copy, or null when this store
     * does not hold a copy. A pending copy still needs confirmation before use.
     */
    "store_payment_method_id": string | null;
};
/**
 * Shape $ (Value): {@link MeFlintWalletCardListResponse}. A page of `MeFlintWalletCard` objects.
 */
export type MeFlintWalletCardListResponse = {
    /**
     * Shape $ (Value): Array of {@link MeFlintWalletCard}. Shape $[] (Value): {@link
     * MeFlintWalletCard}. An independent card saved with Flint that the current buyer can set up
     * at this store. Store copies have their own consent and lifecycle.
     */
    "data": Array<MeFlintWalletCard>;
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
 * Shape $ (Value): {@link MeFlintWalletStoreSetup}. The state of a request to save a payment
 * method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it.
 */
export type MeFlintWalletStoreSetup = {
    /**
     * Shape $ (Value): {@link StripeClientSetup} or null. Shape $.anyOf[1] (Value): {@link
     * StripeClientSetup}. Stripe.js setup authority returned while saving a payment method. Follow
     * its stripe_js_call now. setup_collection is guidance instead and never carries a secret.
     * Shape $.anyOf[2] (Value): null.
     */
    "client_setup": ((StripeClientSetup) | (null));
    /** Shape $ (Value): string. */
    "payment_method_id": string;
    /** Shape $ (Value): string.  Value enum: "pending", "active", "failed", "expired". */
    "status": "pending" | "active" | "failed" | "expired" | (string & {});
    /** Shape $ (Value): string. */
    "store_setup_id": string;
};
/**
 * Shape $ (Value): {@link MeFlintWalletStoreSetupResponse}. A response containing
 * `MeFlintWalletStoreSetup` data.
 */
export type MeFlintWalletStoreSetupResponse = {
    /**
     * Shape $ (Value): {@link MeFlintWalletStoreSetup}. The state of a request to save a payment
     * method in the signed-in buyer's Flint wallet, with the client setup data needed to finish
     * it.
     */
    "data": MeFlintWalletStoreSetup;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MeGetAddressInput = {
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
};
export type MeGetCreditNoteInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
};
export type MeGetCreditNotePDFInput = MeGetCreditNoteInput;
export type MeGetCreditNotePDFResponse = Uint8Array;
export type MeGetDeletionRequestInput = CustomersGetDeletionRequestInput;
export type MeGetEmailPreferencesInput = {};
export type MeGetFulfillmentInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
};
export type MeGetGiftCardInput = GiftCardsGetInput;
export type MeGetInput = {};
export type MeGetInvoiceInput = InvoicesGetPDFInput;
export type MeGetInvoicePDFInput = InvoicesGetPDFInput;
export type MeGetInvoicePDFResponse = Uint8Array;
export type MeGetOrderInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
};
export type MeGetPackageInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
};
export type MeGetPaymentInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
};
