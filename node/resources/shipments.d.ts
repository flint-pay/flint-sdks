import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type {
    Shipment,
    ShipmentListResponse,
    ShipmentResponse,
    ShipmentsCreateParams,
    ShipmentsGetParams,
    ShipmentsListParams,
    ShipmentsUpdateParams,
    ShipmentsVoidParams
} from '../declarations/types-68.js';
import type { VoidShipmentResponse, VoidShipmentResult } from '../declarations/types-78.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
    ShipmentsCreateParams,
    Shipment,
    ShipmentResponse,
    ShipmentsGetParams,
    ShipmentsListParams,
    ShipmentListResponse,
    ShipmentsUpdateParams,
    ShipmentsVoidParams,
    SettlementAmounts
} from '../declarations/types-68.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { _SdkWithoutIdempotency, WeightRequestInput, Weight } from '../declarations/types-79.js';
export type {
    VoidShipmentResult,
    VoidShipmentResponse,
    UpdateShipmentRequestInput,
    VoidShipmentRequestInput,
    VoidPackageRequestInput
} from '../declarations/types-78.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type {
    CreateShipmentRequestInput,
    CreateShipmentRequestOutboundInput,
    CreateShipmentRequestReturnInput,
    Credentials
} from '../declarations/types-14.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-43.js';
export type {
    PackageCreateRequestInput,
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput,
    Package
} from '../declarations/types-48.js';
export type { DimensionsRequestInput, Dimensions } from '../declarations/types-25.js';
export type { CreatePackageItemRequestInput } from '../declarations/types-12.js';
export type { ReturnShipmentLineItemAllocationRequestInput } from '../declarations/types-65.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { ExpandedOrderSummary, ExpandedPackageSummary } from '../declarations/types-26.js';
export type { CheckoutBuyerContact } from '../declarations/types-6.js';
export type { DeferredPromotion } from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-56.js';
export type { MoneyValue, NextAction } from '../declarations/types-44.js';
export type { OrderSettlementAmounts } from '../declarations/types-47.js';
export type { ReturnHandoffRequirementLineItem } from '../declarations/types-63.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export { makeCreatePackageItemRequest } from '../declarations/types-83.js';
export { makeCreateShipmentRequest, makeCreateShipmentRequestOutbound, makeCreateShipmentRequestReturn } from '../declarations/types-84.js';
export { makeDimensionsRequest } from '../declarations/types-86.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-88.js';
export { makePackageCreateInputCreated, makePackageCreateInputShipped, makePackageCreateRequest } from '../declarations/types-89.js';
export { makeReturnShipmentLineItemAllocationRequest } from '../declarations/types-91.js';
export { makeUpdateShipmentRequest, makeVoidPackageRequest, makeVoidShipmentRequest, makeWeightRequest } from '../declarations/types-94.js';
export interface ShipmentsResource {
    /**
 * Creates an outbound shipment for fulfillment_id or a return shipment for return_id. For outbound
 * shipments, include 1 to 20 packages to create the parcels atomically and return their IDs. Set
 * each package's status to shipped to report handoff in the same call. Return shipments cannot
 * include packages.
 *
 * `POST /v1/shipments`
 * @see https://developers.withflintpay.com/docs/api/fulfillment#createShipment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.create({direction: "outbound", external_reference_id: "ship_789",
 * external_system: "merchant_wms", fulfillment_id: "ful_01KEZF7C009TD0XN8YPHHHXQFR", metadata:
 * {warehouse: "east"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: ShipmentsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Shipment, ShipmentResponse>>;
    /**
 * Retrieves one shipment execution record by ID.
 *
 * `GET /v1/shipments/{shipment_id}`
 * @param shipment_id Flint shipment ID. Must be a valid ID with prefix shp_. Malformed IDs return
 * 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getShipment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.shipments.get("shp_01KEZF7C00Q2AFXWXHMCDR3F68")
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
 * @param shipment_id Flint shipment ID. Must be a valid ID with prefix shp_. Malformed IDs return
 * 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
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
 * @param shipment_id Flint shipment ID. Must be a valid ID with prefix shp_. Malformed IDs return
 * 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#voidShipment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.void("shp_01KEZF7C00Q2AFXWXHMCDR3F68", undefined, { idempotencyKey:
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
