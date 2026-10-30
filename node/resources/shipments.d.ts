import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { Package } from '../declarations/types-38.js';
import type { PackageResponse } from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    Shipment,
    ShipmentListResponse,
    ShipmentResponse,
    ShipmentsCreatePackageParams,
    ShipmentsGetParams,
    ShipmentsListParams,
    ShipmentsUpdateParams,
    ShipmentsVoidParams
} from '../declarations/types-53.js';
import type { VoidShipmentResponse, VoidShipmentResult } from '../declarations/types-60.js';
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
    ShipmentsCreatePackageParams,
    ShipmentsGetParams,
    Shipment,
    ShipmentResponse,
    ShipmentsListParams,
    ShipmentListResponse,
    ShipmentsUpdateParams,
    ShipmentsVoidParams,
    SettlementAmounts
} from '../declarations/types-53.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    Package,
    PackageCreateRequestInput,
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput
} from '../declarations/types-38.js';
export type { PackageResponse } from '../declarations/types-39.js';
export type { _SdkWithoutIdempotency, WeightInput, Weight } from '../declarations/types-61.js';
export type {
    VoidShipmentResult,
    VoidShipmentResponse,
    UpdateShipmentRequestInput,
    VoidShipmentRequestInput,
    VoidPackageRequestInput
} from '../declarations/types-60.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { DimensionsInput, Dimensions } from '../declarations/types-20.js';
export type { CreatePackageItemRequestInput } from '../declarations/types-9.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { ReturnShipmentLineItemAllocationRequestInput, ReturnResolutionLineItemRequest } from '../declarations/types-50.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ExpandedOrderSummary, ExpandedPackageSummary } from '../declarations/types-21.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts } from '../declarations/types-43.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreatePackageItemRequest } from '../declarations/types-64.js';
export { makeDimensions } from '../declarations/types-67.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makePackageCreateInputCreated, makePackageCreateInputShipped, makePackageCreateRequest } from '../declarations/types-70.js';
export { makeReturnResolutionLineItemRequest, makeReturnShipmentLineItemAllocationRequest } from '../declarations/types-72.js';
export { makeUpdateShipmentRequest, makeVoidPackageRequest, makeVoidShipmentRequest } from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
export interface ShipmentsResource {
    /**
 * Creates a package record under a shipment. Change package status with
 * `client.packages.transition`; this endpoint records package-level carrier, tracking, label,
 * measurement, and external correlation fields. Read timeline events with
 * `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or fulfillment_id, and
 * notifications with `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or
 * fulfillment_id.
 *
 * `POST /v1/shipments/{shipment_id}/packages`
 * @param shipment_id Flint shipment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#createPackage
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.createPackage("shp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {carrier: "ups", dimensions:
 * {height: 4, length: 8, unit: "inch", width: 6}, expected_delivery_at: "2026-05-15T18:00:00Z",
 * external_reference_id: "pkg_789", external_system: "merchant_wms", metadata: {box: "small"},
 * service_code: "ground", status: "shipped", tracking_number: "1Z999AA10123456784", tracking_url:
 * "https://track.example.com/1Z999AA10123456784", weight: {unit: "pound", value: 1.2}}, {
 * idempotencyKey: idempotencyKey })
 */
    createPackage(shipment_id: InputValue<string>, params: ShipmentsCreatePackageParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Package, PackageResponse>>;
    /**
 * Retrieves one shipment execution record by ID.
 *
 * `GET /v1/shipments/{shipment_id}`
 * @param shipment_id Flint shipment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getShipment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.shipments.get("shp_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(shipment_id: InputValue<string>, params?: ShipmentsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Shipment, ShipmentResponse>>;
    /**
 * Lists shipment execution records, newest created first. Default order: created_at descending,
 * then shipment_id descending.
 *
 * `GET /v1/shipments`
 * @see https://developers.withflintpay.com/docs/api/fulfillment#listShipments
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.shipments.list()
 */
    list(params?: ShipmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ShipmentListResponse, ShipmentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listShipments
     */
    listPages(params?: ShipmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ShipmentListResponse, ShipmentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listShipments
     */
    listItems(params?: ShipmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Shipment>;
    /**
 * Updates shipment metadata and caller-owned external references. Shipment status is derived from
 * package statuses and cannot be patched directly. expected_version is optional and rejects a
 * stale resource version when supplied.
 *
 * `PATCH /v1/shipments/{shipment_id}`
 * @param shipment_id Flint shipment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#updateShipment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.update("shp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {route: "A7"}}, {
 * idempotencyKey: idempotencyKey })
 */
    update(shipment_id: InputValue<string>, params: ShipmentsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Shipment, ShipmentResponse>>;
    /**
 * Voids a shipment before carrier handoff and voids all child packages that have not shipped. The
 * action appends timeline events for the shipment and affected packages. expected_version is
 * optional and rejects a stale resource version when supplied. Read timeline events with
 * `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or fulfillment_id, and
 * notifications with `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or
 * fulfillment_id.
 *
 * `POST /v1/shipments/{shipment_id}/void`
 * @param shipment_id Flint shipment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#voidShipment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.void("shp_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    void(shipment_id: InputValue<string>, params?: ShipmentsVoidParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<VoidShipmentResult, VoidShipmentResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly shipments: ShipmentsResource;
}
