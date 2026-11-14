import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { Package } from '../declarations/types-42.js';
import type {
    PackageItem,
    PackageItemListResponse,
    PackageItemResponse,
    PackageListResponse,
    PackageResponse,
    PackagesCreateItemParams,
    PackagesCreateParams,
    PackagesDeleteItemParams,
    PackagesGetItemParams,
    PackagesGetParams,
    PackagesListPackageItemsParams,
    PackagesListParams,
    PackagesMarkDeliveredParams,
    PackagesMarkDeliveryAttemptedParams,
    PackagesMarkExceptionParams,
    PackagesMarkInTransitParams,
    PackagesMarkOutForDeliveryParams,
    PackagesMarkPackedParams,
    PackagesMarkReturnedParams,
    PackagesMarkShippedParams,
    PackagesUpdateItemParams,
    PackagesUpdateParams,
    PackagesVoidParams
} from '../declarations/types-43.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    PackagesCreateParams,
    PackageResponse,
    PackagesCreateItemParams,
    PackageItem,
    PackageItemResponse,
    PackagesDeleteItemParams,
    PackagesGetParams,
    PackagesGetItemParams,
    PackagesListPackageItemsParams,
    PackageItemListResponse,
    PackagesListParams,
    PackageListResponse,
    PackagesMarkDeliveredParams,
    PackagesMarkDeliveryAttemptedParams,
    PackagesMarkExceptionParams,
    PackagesMarkInTransitParams,
    PackagesMarkOutForDeliveryParams,
    PackagesMarkPackedParams,
    PackagesMarkReturnedParams,
    PackagesMarkShippedParams,
    PackagesUpdateParams,
    PackagesUpdateItemParams,
    PackagesVoidParams
} from '../declarations/types-43.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { Package } from '../declarations/types-42.js';
export type { _SdkWithoutIdempotency, WeightRequestInput, Weight } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    CreatePackageRequestInput,
    CreatePackageItemRequestInput,
    CreatePackageRequestCreatedInput,
    CreatePackageRequestShippedInput
} from '../declarations/types-11.js';
export type { DimensionsRequestInput, Dimensions } from '../declarations/types-23.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-38.js';
export type { ReturnShipmentLineItemAllocationRequestInput } from '../declarations/types-57.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ExpandedOrderSummary } from '../declarations/types-24.js';
export type { CheckoutBuyerContact } from '../declarations/types-5.js';
export type { DeferredPromotion } from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type { MoneyValue, NextAction } from '../declarations/types-39.js';
export type { OrderSettlementAmounts } from '../declarations/types-41.js';
export type { SettlementAmounts } from '../declarations/types-59.js';
export type { ReturnHandoffRequirementLineItem } from '../declarations/types-55.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type {
    MarkPackageDeliveredRequestInput,
    MarkPackageDeliveryAttemptedRequestInput,
    MarkPackageExceptionRequestInput
} from '../declarations/types-35.js';
export type {
    MarkPackageInTransitRequestInput,
    MarkPackageOutForDeliveryRequestInput,
    MarkPackagePackedRequestInput,
    MarkPackageReturnedRequestInput,
    MarkPackageShippedRequestInput
} from '../declarations/types-36.js';
export type { UpdatePackageRequestInput, UpdatePackageItemRequestInput } from '../declarations/types-67.js';
export type { VoidPackageRequestInput } from '../declarations/types-69.js';
export type { FulfillmentEventsGetParams } from '../declarations/types-25.js';
export {
    makeCreatePackageItemRequest,
    makeCreatePackageRequest,
    makeCreatePackageRequestCreated,
    makeCreatePackageRequestShipped
} from '../declarations/types-74.js';
export { makeDimensionsRequest } from '../declarations/types-77.js';
export {
    makeMarkPackageDeliveredRequest,
    makeMarkPackageDeliveryAttemptedRequest,
    makeMarkPackageExceptionRequest,
    makeMarkPackageInTransitRequest,
    makeMarkPackageOutForDeliveryRequest,
    makeMarkPackagePackedRequest,
    makeMarkPackageReturnedRequest,
    makeMarkPackageShippedRequest
} from '../declarations/types-78.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-79.js';
export { makeReturnShipmentLineItemAllocationRequest } from '../declarations/types-82.js';
export { makeUpdatePackageItemRequest, makeUpdatePackageRequest } from '../declarations/types-84.js';
export { makeVoidPackageRequest, makeWeightRequest } from '../declarations/types-85.js';
export interface PackagesResource {
    /**
 * Creates a package record under a shipment. Change package status through its lifecycle action
 * routes, such as `client.packages.markShipped`; this endpoint records package-level carrier,
 * tracking, label, measurement, and external correlation fields. Read timeline events with
 * `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or fulfillment_id, and
 * notifications with `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or
 * fulfillment_id.
 *
 * `POST /v1/packages`
 * @see https://developers.withflintpay.com/docs/api/fulfillment#createPackage
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.create({carrier: "ups", dimensions: {height: 4, length: 8, unit: "inch", width:
 * 6}, expected_delivery_at: "2026-05-15T18:00:00Z", external_reference_id: "pkg_789",
 * external_system: "merchant_wms", metadata: {box: "small"}, service_code: "ground", shipment_id:
 * "shp_01KEZF7C006DZPA7FGH42HTBY8", status: "shipped", tracking_number: "1Z999AA10123456784",
 * tracking_url: "https://track.example.com/1Z999AA10123456784", weight: {unit: "pound", value:
 * 1.2}}, { idempotencyKey: idempotencyKey })
 */
    create(params: PackagesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
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
 * client.packages.createItem("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", {metadata: {slot: "A"},
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
 * client.packages.deleteItem("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", "pki_01KEZF7C00CEFTYV5RD7XVYQ7B",
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
 * client.packages.get("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R")
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
 * client.packages.getItem("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", "pki_01KEZF7C00CEFTYV5RD7XVYQ7B")
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
 * client.packages.listPackageItems("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R")
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
 * `POST /v1/packages/{package_id}/mark-delivered`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markPackageDelivered
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.markDelivered("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markDelivered(package_id: InputValue<string>, params?: PackagesMarkDeliveredParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
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
 * `POST /v1/packages/{package_id}/mark-delivery-attempted`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markPackageDeliveryAttempted
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.markDeliveryAttempted("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    markDeliveryAttempted(package_id: InputValue<string>, params?: PackagesMarkDeliveryAttemptedParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
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
 * `POST /v1/packages/{package_id}/mark-exception`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markPackageException
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.markException("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markException(package_id: InputValue<string>, params?: PackagesMarkExceptionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
    /**
 * Performs one action from the package's supported_actions. mark_shipped accepts carrier,
 * service_code, tracking_number, and tracking_url; present fields replace tracking before the
 * status change and shipped email in one transaction. Omitted tracking is unchanged and null is
 * invalid. Other actions reject tracking fields. mark_shipped, mark_in_transit, and
 * mark_out_for_delivery optionally set expected_delivery_at; send null to clear it. Delivery
 * preserves the estimate as history. expected_version is optional and rejects a stale resource
 * version when supplied. Reroutes from out_for_delivery or delivery_attempted require occurred_at
 * at or after the package's latest recorded status time. An older scan is refused before any write
 * with 409 ACTION_NOT_ALLOWED, reason out_of_order, param occurred_at, current_status, and
 * latest_status_occurred_at. Discard it or send an occurred_at at or after that time; equal
 * timestamps are accepted. Read timeline events with `client.fulfillmentEvents.list` filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with
 * `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/packages/{package_id}/mark-in-transit`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markPackageInTransit
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.markInTransit("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markInTransit(package_id: InputValue<string>, params?: PackagesMarkInTransitParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
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
 * `POST /v1/packages/{package_id}/mark-out-for-delivery`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markPackageOutForDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.markOutForDelivery("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    markOutForDelivery(package_id: InputValue<string>, params?: PackagesMarkOutForDeliveryParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
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
 * `POST /v1/packages/{package_id}/mark-packed`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markPackagePacked
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.markPacked("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markPacked(package_id: InputValue<string>, params?: PackagesMarkPackedParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
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
 * `POST /v1/packages/{package_id}/mark-returned`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markPackageReturned
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.markReturned("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markReturned(package_id: InputValue<string>, params?: PackagesMarkReturnedParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
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
 * `POST /v1/packages/{package_id}/mark-shipped`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markPackageShipped
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.packages.markShipped("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markShipped(package_id: InputValue<string>, params?: PackagesMarkShippedParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
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
 * client.packages.void("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", undefined, { idempotencyKey:
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
