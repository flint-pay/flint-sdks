import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { Package, PackageCreateRequestInput, PackageResponse } from '../declarations/types-36.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type {
    Shipment,
    ShipmentListResponse,
    ShipmentResponse,
    ShipmentsCreatePackageInput,
    ShipmentsGetInput,
    ShipmentsListInput,
    ShipmentsUpdateInput,
    ShipmentsVoidResourceInput
} from '../declarations/types-47.js';
import type { UpdateShipmentRequestInput } from '../declarations/types-52.js';
import type { VoidShipmentRequestInput, VoidShipmentResponse, VoidShipmentResult } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    PackageCreateRequestInput,
    Package,
    PackageResponse,
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput
} from '../declarations/types-36.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { _SdkWithoutIdempotency, WeightInput, Weight } from '../declarations/types-65.js';
export type {
    Shipment,
    ShipmentResponse,
    ShipmentListResponse,
    ShipmentsCreatePackageInput,
    ShipmentsGetInput,
    ShipmentsListInput,
    ShipmentsUpdateInput,
    ShipmentsVoidResourceInput,
    SettlementAmounts
} from '../declarations/types-47.js';
export type { UpdateShipmentRequestInput } from '../declarations/types-52.js';
export type { VoidShipmentRequestInput, VoidShipmentResult, VoidShipmentResponse, VoidPackageRequestInput } from '../declarations/types-53.js';
export type { ClientOptions, CheckoutBuyerContact } from '../declarations/types-4.js';
export type { DimensionsInput, Dimensions } from '../declarations/types-17.js';
export type { CreatePackageItemRequestInput } from '../declarations/types-8.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { ReturnShipmentLineItemAllocationRequestRequestInput, ReturnResolutionLineItemRequest } from '../declarations/types-44.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ExpandedOrderSummary, ExpandedPackageSummary } from '../declarations/types-18.js';
export type { PricingAmounts } from '../declarations/types-39.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export { makeCreatePackageItemRequest } from '../declarations/types-68.js';
export { makeDimensions } from '../declarations/types-70.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export {
    makeMoneyValue,
    makePackageCreateInputCreated,
    makePackageCreateInputShipped,
    makePackageCreateRequest
} from '../declarations/types-73.js';
export { makeReturnResolutionLineItemRequest, makeReturnShipmentLineItemAllocationRequestRequest } from '../declarations/types-75.js';
export { makeUpdateShipmentRequest, makeVoidPackageRequest, makeVoidShipmentRequest, makeWeight } from '../declarations/types-78.js';
export interface ShipmentsResource {
    /**
 * Creates a package record under a shipment. Change package status with POST
 * /v1/packages/{package_id}/transitions; this endpoint records package-level carrier, tracking,
 * label, measurement, and external correlation fields. Read timeline events with GET
 * /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications
 * with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.
 * @see reference/shipments.md#shipmentscreatepackage
 * POST /v1/shipments/{shipment_id}/packages
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.createPackage("example", {status: "created"}, { idempotencyKey: idempotencyKey
 * })
 */
    createPackage(shipment_id: InputValue<string>, params: (InputValue<PackageCreateRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Package>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/shipments.md#shipmentscreatepackage
     */
    createPackageWithResponse(shipment_id: InputValue<string>, params: (InputValue<PackageCreateRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PackageResponse>>;
    /**
 * Retrieves one shipment execution record by ID.
 * @see reference/shipments.md#shipmentsget
 * GET /v1/shipments/{shipment_id}
 * @example
 * client.shipments.get("example")
 */
    get(shipment_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order" | "packages">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Shipment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/shipments.md#shipmentsget
     */
    getWithResponse(shipment_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order" | "packages">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ShipmentResponse>>;
    /**
 * Lists shipment execution records, newest created first. Default order: created_at descending,
 * then shipment_id descending.
 * @see reference/shipments.md#shipmentslist
 * GET /v1/shipments
 * @example
 * client.shipments.list()
 */
    list(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
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
        "direction"?: InputValue<Array<"outbound" | "return">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ShipmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/shipments.md#shipmentslist
     */
    listWithResponse(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
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
        "direction"?: InputValue<Array<"outbound" | "return">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ShipmentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/shipments.md#shipmentslist
     */
    listPages(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
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
        "direction"?: InputValue<Array<"outbound" | "return">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ShipmentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/shipments.md#shipmentslist
     */
    listPagesWithResponse(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
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
        "direction"?: InputValue<Array<"outbound" | "return">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ShipmentListResponse>>;
    /** Iterate items lazily.
     * @see reference/shipments.md#shipmentslist
     */
    listItems(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_system"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
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
        "direction"?: InputValue<Array<"outbound" | "return">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Shipment>;
    /**
 * Updates shipment metadata and caller-owned external references. Shipment status is derived from
 * package statuses and cannot be patched directly. expected_version is optional and rejects a
 * stale resource version when supplied.
 * @see reference/shipments.md#shipmentsupdate
 * PATCH /v1/shipments/{shipment_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(shipment_id: InputValue<string>, params: (InputValue<UpdateShipmentRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Shipment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/shipments.md#shipmentsupdate
     */
    updateWithResponse(shipment_id: InputValue<string>, params: (InputValue<UpdateShipmentRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<ShipmentResponse>>;
    /**
 * Voids a shipment before carrier handoff and voids all child packages that have not shipped. The
 * action appends timeline events for the shipment and affected packages. expected_version is
 * optional and rejects a stale resource version when supplied. Read timeline events with GET
 * /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications
 * with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.
 * @see reference/shipments.md#shipmentsvoidresource
 * POST /v1/shipments/{shipment_id}/void
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.voidResource("example", undefined, { idempotencyKey: idempotencyKey })
 */
    voidResource(shipment_id: InputValue<string>, params?: (InputValue<VoidShipmentRequestInput>
        | {
        "buyer_notification_behavior"?: never;
        "expected_version"?: never;
        "occurred_at"?: never;
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<VoidShipmentResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/shipments.md#shipmentsvoidresource
     */
    voidResourceWithResponse(shipment_id: InputValue<string>, params?: (InputValue<VoidShipmentRequestInput>
        | {
        "buyer_notification_behavior"?: never;
        "expected_version"?: never;
        "occurred_at"?: never;
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<VoidShipmentResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly shipments: ShipmentsResource;
}
