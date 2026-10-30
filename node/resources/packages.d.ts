import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { Package } from '../declarations/types-38.js';
import type {
    PackageItem,
    PackageItemListResponse,
    PackageItemResponse,
    PackageListResponse,
    PackageResponse,
    PackagesCreateItemParams,
    PackagesDeleteItemParams,
    PackagesGetItemParams,
    PackagesGetParams,
    PackagesListPackageItemsParams,
    PackagesListParams,
    PackagesTransitionParams,
    PackagesUpdateItemParams,
    PackagesUpdateParams,
    PackagesVoidParams
} from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    PackagesCreateItemParams,
    PackageItem,
    PackageItemResponse,
    PackagesDeleteItemParams,
    PackagesGetParams,
    PackageResponse,
    PackagesGetItemParams,
    PackagesListPackageItemsParams,
    PackageItemListResponse,
    PackagesListParams,
    PackageListResponse,
    PackagesTransitionParams,
    PackagesUpdateParams,
    PackagesUpdateItemParams,
    PackagesVoidParams,
    PackageTransitionRequestInput,
    PackageTransitionRequestMarkDeliveredInput,
    PackageTransitionRequestMarkDeliveryAttemptedInput,
    PackageTransitionRequestMarkExceptionInput,
    PackageTransitionRequestMarkInTransitInput,
    PackageTransitionRequestMarkOutForDeliveryInput,
    PackageTransitionRequestMarkPackedInput,
    PackageTransitionRequestMarkReturnedInput,
    PackageTransitionRequestMarkShippedInput
} from '../declarations/types-39.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency, Weight, WeightInput } from '../declarations/types-61.js';
export type { Package } from '../declarations/types-38.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreatePackageItemRequestInput } from '../declarations/types-9.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ExpandedOrderSummary } from '../declarations/types-21.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts } from '../declarations/types-43.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { SettlementAmounts } from '../declarations/types-53.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { Dimensions, DimensionsInput } from '../declarations/types-20.js';
export type { ReturnResolutionLineItemRequest } from '../declarations/types-50.js';
export type { UpdatePackageRequestInput, UpdatePackageItemRequestInput } from '../declarations/types-59.js';
export type { VoidPackageRequestInput } from '../declarations/types-60.js';
export type { FulfillmentEventsGetParams, FulfillmentTransitionRequestMarkPackedInput } from '../declarations/types-22.js';
export { makeCreatePackageItemRequest } from '../declarations/types-64.js';
export { makeDimensions, makeFulfillmentTransitionRequestMarkPacked } from '../declarations/types-67.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
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
} from '../declarations/types-70.js';
export { makeReturnResolutionLineItemRequest } from '../declarations/types-72.js';
export { makeUpdatePackageItemRequest, makeUpdatePackageRequest, makeVoidPackageRequest } from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
export interface PackagesResource {
    /**
 * Adds an order line quantity to a package. Total active package item quantities cannot exceed the
 * parent fulfillment line-item quantity.
 *
 * `POST /v1/packages/{package_id}/items`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#createPackageItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.createItem("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {slot: "A"},
 * order_line_item_id: "li_01KEZF7C0003GP5Y88KW1687AP", quantity: 1}, { idempotencyKey:
 * idempotencyKey })
 */
    createItem(package_id: InputValue<string>, params: PackagesCreateItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PackageItem, PackageItemResponse>>;
    /**
 * Removes an order line quantity from a package while the package is still mutable.
 *
 * `DELETE /v1/packages/{package_id}/items/{package_item_id}`
 * @param package_id Flint package ID.
 * @param package_item_id Flint package item ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#deletePackageItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.deleteItem("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pki_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {}, { idempotencyKey: idempotencyKey })
 */
    deleteItem(package_id: InputValue<string>, package_item_id: InputValue<string>, params?: PackagesDeleteItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PackageItem, PackageItemResponse>>;
    /**
 * Retrieves one package by ID.
 *
 * `GET /v1/packages/{package_id}`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getPackage
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.packages.get("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(package_id: InputValue<string>, params?: PackagesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Package, PackageResponse>>;
    /**
 * Retrieves one package item by ID.
 *
 * `GET /v1/packages/{package_id}/items/{package_item_id}`
 * @param package_id Flint package ID.
 * @param package_item_id Flint package item ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getPackageItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.packages.getItem("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pki_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getItem(package_id: InputValue<string>, package_item_id: InputValue<string>, params?: PackagesGetItemParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PackageItem, PackageItemResponse>>;
    /**
 * Lists order line quantities contained in packages. Default order: created_at descending, then
 * package_item_id descending.
 *
 * `GET /v1/packages/{package_id}/items`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#listPackageItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.packages.listPackageItems("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listPackageItems(package_id: InputValue<string>, params?: PackagesListPackageItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PackageItemListResponse, PackageItemListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listPackageItems
     */
    listPackageItemsPages(package_id: InputValue<string>, params?: PackagesListPackageItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PackageItemListResponse, PackageItemListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listPackageItems
     */
    listPackageItemsItems(package_id: InputValue<string>, params?: PackagesListPackageItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PackageItem>;
    /**
 * Lists package records, newest created first. Default order: created_at descending, then
 * package_id descending.
 *
 * `GET /v1/packages`
 * @see https://developers.withflintpay.com/docs/api/fulfillment#listPackages
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.packages.list()
 */
    list(params?: PackagesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PackageListResponse, PackageListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listPackages
     */
    listPages(params?: PackagesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PackageListResponse, PackageListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listPackages
     */
    listItems(params?: PackagesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Package>;
    /**
 * Performs one action from the package's supported_actions. mark_shipped accepts carrier,
 * service_code, tracking_number, and tracking_url; present fields replace tracking before the
 * status change and shipped email in one transaction. Omitted tracking is unchanged and null is
 * invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and
 * mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery
 * preserves the estimate as history. expected_version is optional and rejects a stale resource
 * version when supplied. Read timeline events with `client.fulfillmentEvents.list` filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with
 * `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/packages/{package_id}/transitions`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#transitionPackage
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.transition("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "mark_out_for_delivery",
 * buyer_notification_behavior: "send", expected_delivery_at: "2026-05-15T18:00:00Z",
 * expected_version: 3}, { idempotencyKey: idempotencyKey })
 */
    transition(package_id: InputValue<string>, params: PackagesTransitionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
    /**
 * Updates non-lifecycle package fields such as carrier, tracking, expected_delivery_at, label
 * access, measurements, metadata, and caller-owned external references. Descriptive fields can be
 * corrected until the package is voided, regardless of shipment or fulfillment status. Corrections
 * never email the buyer. Package status cannot be patched directly. expected_version is optional
 * and rejects a stale resource version when supplied. Read timeline events with
 * `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or fulfillment_id, and
 * notifications with `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or
 * fulfillment_id.
 *
 * `PATCH /v1/packages/{package_id}`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#updatePackage
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.update("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {tracking_number:
 * "SYNTHETIC-TRACKING-001"}, { idempotencyKey: idempotencyKey })
 */
    update(package_id: InputValue<string>, params: PackagesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
    /**
 * Updates a package item quantity or metadata while the package is still mutable.
 *
 * `PATCH /v1/packages/{package_id}/items/{package_item_id}`
 * @param package_id Flint package ID.
 * @param package_item_id Flint package item ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#updatePackageItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.updateItem("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pki_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {quantity: 1}, { idempotencyKey: idempotencyKey })
 */
    updateItem(package_id: InputValue<string>, package_item_id: InputValue<string>, params: PackagesUpdateItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PackageItem, PackageItemResponse>>;
    /**
 * Voids a package before carrier handoff and appends a package timeline event. Voided package
 * items no longer count against fulfillment package allocation capacity. expected_version is
 * optional and rejects a stale resource version when supplied. Read timeline events with
 * `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or fulfillment_id, and
 * notifications with `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or
 * fulfillment_id.
 *
 * `POST /v1/packages/{package_id}/void`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#voidPackage
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.void("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    void(package_id: InputValue<string>, params?: PackagesVoidParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly packages: PackagesResource;
}
