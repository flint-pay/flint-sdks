import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreatePackageItemRequestInput } from '../declarations/types-7.js';
import type {
    Package,
    PackageItem,
    PackageItemListResponse,
    PackageItemResponse,
    PackageListResponse,
    PackageResponse,
    PackagesCreateItemInput,
    PackagesDeleteItemInput,
    PackagesGetInput,
    PackagesGetItemInput,
    PackagesListInput,
    PackagesListPackageItemsInput,
    PackagesTransitionInput,
    PackagesUpdateInput,
    PackagesUpdateItemInput,
    PackagesVoidResourceInput
} from '../declarations/types-34.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdatePackageItemRequestInput, UpdatePackageRequestInput } from '../declarations/types-48.js';
import type { VoidPackageRequestInput } from '../declarations/types-49.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type { CreatePackageItemRequestInput } from '../declarations/types-7.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    PackageItem,
    PackageItemResponse,
    Package,
    PackageResponse,
    PackageItemListResponse,
    PackageListResponse,
    PackagesTransitionInput,
    PackagesCreateItemInput,
    PackagesDeleteItemInput,
    PackagesGetInput,
    PackagesGetItemInput,
    PackagesListPackageItemsInput,
    PackagesListInput,
    PackagesUpdateInput,
    PackagesUpdateItemInput,
    PackagesVoidResourceInput,
    PackageTransitionRequestInput,
    PackageTransitionRequestMarkDeliveredInput,
    PackageTransitionRequestMarkDeliveryAttemptedInput,
    PackageTransitionRequestMarkExceptionInput,
    PackageTransitionRequestMarkInTransitInput,
    PackageTransitionRequestMarkOutForDeliveryInput,
    PackageTransitionRequestMarkPackedInput,
    PackageTransitionRequestMarkReturnedInput,
    PackageTransitionRequestMarkShippedInput
} from '../declarations/types-34.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency, Weight, WeightInput } from '../declarations/types-61.js';
export type { UpdatePackageRequestInput, UpdatePackageItemRequestInput } from '../declarations/types-48.js';
export type { VoidPackageRequestInput } from '../declarations/types-49.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { ExpandedOrderSummary, Dimensions, DimensionsInput } from '../declarations/types-16.js';
export type { CheckoutBuyerContact } from '../declarations/types-3.js';
export type { PricingAmounts } from '../declarations/types-37.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { SettlementAmounts } from '../declarations/types-44.js';
export type { ReturnResolutionLineItemRequest } from '../declarations/types-41.js';
export type { FulfillmentTransitionRequestMarkPackedInput } from '../declarations/types-17.js';
export { makeCreatePackageItemRequest } from '../declarations/types-64.js';
export { makeDimensions, makeFulfillmentTransitionRequestMarkPacked } from '../declarations/types-66.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export {
    makePackageTransitionRequest,
    makePackageTransitionRequestMarkDelivered,
    makePackageTransitionRequestMarkDeliveryAttempted,
    makePackageTransitionRequestMarkException,
    makePackageTransitionRequestMarkInTransit,
    makePackageTransitionRequestMarkOutForDelivery,
    makePackageTransitionRequestMarkPacked,
    makePackageTransitionRequestMarkReturned,
    makePackageTransitionRequestMarkShipped
} from '../declarations/types-69.js';
export { makeReturnResolutionLineItemRequest } from '../declarations/types-70.js';
export { makeUpdatePackageItemRequest, makeUpdatePackageRequest } from '../declarations/types-72.js';
export { makeVoidPackageRequest, makeWeight } from '../declarations/types-73.js';
export interface PackagesResource {
    /**
 * Adds an order line quantity to a package. Total active package item quantities cannot exceed the
 * parent fulfillment line-item quantity.
 * @see reference/packages.md#packagescreateitem
 * POST /v1/packages/{package_id}/items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.createItem("example", {order_line_item_id: "example", quantity: "100"}, {
 * idempotencyKey: idempotencyKey })
 */
    createItem(package_id: InputValue<string>, params: (InputValue<CreatePackageItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PackageItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packagescreateitem
     */
    createItemWithResponse(package_id: InputValue<string>, params: (InputValue<CreatePackageItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PackageItemResponse>>;
    /**
 * Removes an order line quantity from a package while the package is still mutable.
 * @see reference/packages.md#packagesdeleteitem
 * DELETE /v1/packages/{package_id}/items/{package_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.deleteItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteItem(package_id: InputValue<string>, package_item_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PackageItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packagesdeleteitem
     */
    deleteItemWithResponse(package_id: InputValue<string>, package_item_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PackageItemResponse>>;
    /**
 * Retrieves one package by ID.
 * @see reference/packages.md#packagesget
 * GET /v1/packages/{package_id}
 * @example
 * client.packages.get("example")
 */
    get(package_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<Package>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packagesget
     */
    getWithResponse(package_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PackageResponse>>;
    /**
 * Retrieves one package item by ID.
 * @see reference/packages.md#packagesgetitem
 * GET /v1/packages/{package_id}/items/{package_item_id}
 * @example
 * client.packages.getItem("example", "example")
 */
    getItem(package_id: InputValue<string>, package_item_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PackageItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packagesgetitem
     */
    getItemWithResponse(package_id: InputValue<string>, package_item_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PackageItemResponse>>;
    /**
 * Lists order line quantities contained in packages.
 * @see reference/packages.md#packageslistpackageitems
 * GET /v1/packages/{package_id}/items
 * @example
 * client.packages.listPackageItems("example")
 */
    listPackageItems(package_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PackageItemListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packageslistpackageitems
     */
    listPackageItemsWithResponse(package_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PackageItemListResponse>>;
    /** Iterate pages lazily.
     * @see reference/packages.md#packageslistpackageitems
     */
    listPackageItemsPages(package_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PackageItemListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/packages.md#packageslistpackageitems
     */
    listPackageItemsPagesWithResponse(package_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PackageItemListResponse>>;
    /** Iterate items lazily.
     * @see reference/packages.md#packageslistpackageitems
     */
    listPackageItemsItems(package_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PackageItem>;
    /**
 * Lists package records, newest created first.
 * @see reference/packages.md#packageslist
 * GET /v1/packages
 * @example
 * client.packages.list()
 */
    list(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "status"?: InputValue<Array<"created"
            | "packed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "exception"
            | "returned"
            | "voided">>;
        "tracking_number"?: InputValue<string>;
        "carrier"?: InputValue<string>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PackageListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packageslist
     */
    listWithResponse(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "status"?: InputValue<Array<"created"
            | "packed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "exception"
            | "returned"
            | "voided">>;
        "tracking_number"?: InputValue<string>;
        "carrier"?: InputValue<string>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PackageListResponse>>;
    /** Iterate pages lazily.
     * @see reference/packages.md#packageslist
     */
    listPages(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "status"?: InputValue<Array<"created"
            | "packed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "exception"
            | "returned"
            | "voided">>;
        "tracking_number"?: InputValue<string>;
        "carrier"?: InputValue<string>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PackageListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/packages.md#packageslist
     */
    listPagesWithResponse(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "status"?: InputValue<Array<"created"
            | "packed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "exception"
            | "returned"
            | "voided">>;
        "tracking_number"?: InputValue<string>;
        "carrier"?: InputValue<string>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PackageListResponse>>;
    /** Iterate items lazily.
     * @see reference/packages.md#packageslist
     */
    listItems(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "status"?: InputValue<Array<"created"
            | "packed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "exception"
            | "returned"
            | "voided">>;
        "tracking_number"?: InputValue<string>;
        "carrier"?: InputValue<string>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Package>;
    /**
 * Performs one action from the package's supported_actions. mark_shipped accepts carrier,
 * service_code, tracking_number, and tracking_url; present fields replace tracking before the
 * status change and shipped email in one transaction. Omitted tracking is unchanged and null is
 * invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and
 * mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery
 * preserves the estimate as history. expected_version is optional and rejects a stale resource
 * version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with GET
 * /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.
 * @see reference/packages.md#packagestransition
 * POST /v1/packages/{package_id}/transitions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.transition({package_id: "example", body: {action: "mark_delivered"}}, {
 * idempotencyKey: idempotencyKey })
 */
    transition(input: PackagesTransitionInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<Package>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packagestransition
     */
    transitionWithResponse(input: PackagesTransitionInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PackageResponse>>;
    /**
 * Updates non-lifecycle package fields such as carrier, tracking, expected_delivery_at, label
 * access, measurements, metadata, and caller-owned external references. Descriptive fields can be
 * corrected until the package is voided, regardless of shipment or fulfillment status. Corrections
 * never email the buyer. Package status cannot be patched directly. expected_version is optional
 * and rejects a stale resource version when supplied. Read timeline events with GET
 * /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications
 * with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.
 * @see reference/packages.md#packagesupdate
 * PATCH /v1/packages/{package_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(package_id: InputValue<string>, params: (InputValue<UpdatePackageRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<Package>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packagesupdate
     */
    updateWithResponse(package_id: InputValue<string>, params: (InputValue<UpdatePackageRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PackageResponse>>;
    /**
 * Updates a package item quantity or metadata while the package is still mutable.
 * @see reference/packages.md#packagesupdateitem
 * PATCH /v1/packages/{package_id}/items/{package_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.updateItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateItem(package_id: InputValue<string>, package_item_id: InputValue<string>, params: (InputValue<UpdatePackageItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PackageItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packagesupdateitem
     */
    updateItemWithResponse(package_id: InputValue<string>, package_item_id: InputValue<string>, params: (InputValue<UpdatePackageItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PackageItemResponse>>;
    /**
 * Voids a package before carrier handoff and appends a package timeline event. Voided package
 * items no longer count against fulfillment package allocation capacity. expected_version is
 * optional and rejects a stale resource version when supplied. Read timeline events with GET
 * /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications
 * with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.
 * @see reference/packages.md#packagesvoidresource
 * POST /v1/packages/{package_id}/void
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.voidResource("example", undefined, { idempotencyKey: idempotencyKey })
 */
    voidResource(package_id: InputValue<string>, params?: (InputValue<VoidPackageRequestInput>
        | {
        "buyer_notification_behavior"?: never;
        "expected_version"?: never;
        "occurred_at"?: never;
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<Package>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/packages.md#packagesvoidresource
     */
    voidResourceWithResponse(package_id: InputValue<string>, params?: (InputValue<VoidPackageRequestInput>
        | {
        "buyer_notification_behavior"?: never;
        "expected_version"?: never;
        "occurred_at"?: never;
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PackageResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly packages: PackagesResource;
}
