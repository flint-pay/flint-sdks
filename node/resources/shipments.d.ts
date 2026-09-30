export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreatePackageResponse } from '../declarations/CreatePackageResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnShipmentLineItemAllocationInput } from '../declarations/ReturnShipmentLineItemAllocationInput.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { Shipment } from '../declarations/Shipment.js';
import type { ShipmentListResponse } from '../declarations/ShipmentListResponse.js';
import type { ShipmentResponse } from '../declarations/ShipmentResponse.js';
import type { ShipmentsCreatePackageInput } from '../declarations/ShipmentsCreatePackageInput.js';
import type { ShipmentsCreatePackageResponse } from '../declarations/ShipmentsCreatePackageResponse.js';
import type { ShipmentsGetInput } from '../declarations/ShipmentsGetInput.js';
import type { ShipmentsGetResponse } from '../declarations/ShipmentsGetResponse.js';
import type { ShipmentsListInput } from '../declarations/ShipmentsListInput.js';
import type { ShipmentsListResponse } from '../declarations/ShipmentsListResponse.js';
import type { ShipmentsUpdateInput } from '../declarations/ShipmentsUpdateInput.js';
import type { ShipmentsUpdateResponse } from '../declarations/ShipmentsUpdateResponse.js';
import type { ShipmentsVoidResourceInput } from '../declarations/ShipmentsVoidResourceInput.js';
import type { ShipmentsVoidResourceResponse } from '../declarations/ShipmentsVoidResourceResponse.js';
import type { ShippingDimensionsInput } from '../declarations/ShippingDimensionsInput.js';
import type { ShippingWeightInput } from '../declarations/ShippingWeightInput.js';
import type { UpdateShipmentResponse } from '../declarations/UpdateShipmentResponse.js';
import type { VoidShipmentResponse } from '../declarations/VoidShipmentResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ShipmentsResource {
    /**
 * Creates a package record under a shipment. Change package status with POST /v1/packages/{package_id}/transitions; this endpoint records package-level carrier, tracking, label, measurement, and external correlation fields.
 * POST /v1/shipments/{shipment_id}/packages
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.createPackage("example", {"Idempotency-Key": idempotencyKey})
 */
    createPackage(shipment_id: InputValue<string>, params: (InputValue<{ "buyer_notification_behavior"?: "send" | "suppress"; "carrier"?: string; "dimensions"?: ShippingDimensionsInput; "external_reference_id"?: string; "external_system"?: string; "label_url"?: string; "metadata"?: Record<string, string>; "return_line_items"?: Array<ReturnShipmentLineItemAllocationInput>; "service_code"?: string; "status_reason"?: string; "tracking_number"?: string; "tracking_url"?: string; "weight"?: ShippingWeightInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreatePackageResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createPackageWithResponse(shipment_id: InputValue<string>, params: (InputValue<{ "buyer_notification_behavior"?: "send" | "suppress"; "carrier"?: string; "dimensions"?: ShippingDimensionsInput; "external_reference_id"?: string; "external_system"?: string; "label_url"?: string; "metadata"?: Record<string, string>; "return_line_items"?: Array<ReturnShipmentLineItemAllocationInput>; "service_code"?: string; "status_reason"?: string; "tracking_number"?: string; "tracking_url"?: string; "weight"?: ShippingWeightInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ShipmentsCreatePackageResponse>>;
    /**
 * Retrieves one shipment execution record by ID.
 * GET /v1/shipments/{shipment_id}
 * @example
 * client.shipments.get("example", {})
 */
    get(shipment_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ShipmentResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(shipment_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ShipmentsGetResponse>>;
    /**
 * Lists shipment execution records, newest created first.
 * GET /v1/shipments
 * @example
 * client.shipments.list({})
 */
    list(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ShipmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ShipmentsListResponse>>;
    listPages(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ShipmentListResponse>;
    listPagesWithResponse(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ShipmentsListResponse>>;
    listItems(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Shipment>;
    /**
 * Updates shipment metadata and caller-owned external references. Shipment status is derived from package statuses and cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.
 * PATCH /v1/shipments/{shipment_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.update("example", {"Idempotency-Key": idempotencyKey})
 */
    update(shipment_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "external_reference_id"?: string | null; "external_system"?: string | null; "metadata"?: Record<string, string | null> | null; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<UpdateShipmentResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(shipment_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "external_reference_id"?: string | null; "external_system"?: string | null; "metadata"?: Record<string, string | null> | null; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ShipmentsUpdateResponse>>;
    /**
 * Voids a shipment before carrier handoff and voids all child packages that have not shipped. The action appends timeline events for the shipment and affected packages. expected_version is optional and rejects a stale resource version when supplied.
 * POST /v1/shipments/{shipment_id}/void
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shipments.voidResource("example", undefined)
 */
    voidResource(shipment_id: InputValue<string>, params?: (InputValue<{ "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string | globalThis.Date; "reason"?: string; }> | { "buyer_notification_behavior"?: never; "expected_version"?: never; "occurred_at"?: never; "reason"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<VoidShipmentResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    voidResourceWithResponse(shipment_id: InputValue<string>, params?: (InputValue<{ "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string | globalThis.Date; "reason"?: string; }> | { "buyer_notification_behavior"?: never; "expected_version"?: never; "occurred_at"?: never; "reason"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ShipmentsVoidResourceResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly shipments: ShipmentsResource;
}
export type { ShippingDimensionsInput } from '../declarations/ShippingDimensionsInput.js';
export type { ReturnShipmentLineItemAllocationInput } from '../declarations/ReturnShipmentLineItemAllocationInput.js';
export type { ShippingWeightInput } from '../declarations/ShippingWeightInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreatePackageResponse } from '../declarations/CreatePackageResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ShipmentsCreatePackageResponse } from '../declarations/ShipmentsCreatePackageResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ShipmentResponse } from '../declarations/ShipmentResponse.js';
export type { ShipmentsGetResponse } from '../declarations/ShipmentsGetResponse.js';
export type { ShipmentListResponse } from '../declarations/ShipmentListResponse.js';
export type { ShipmentsListResponse } from '../declarations/ShipmentsListResponse.js';
export type { Shipment } from '../declarations/Shipment.js';
export type { UpdateShipmentResponse } from '../declarations/UpdateShipmentResponse.js';
export type { ShipmentsUpdateResponse } from '../declarations/ShipmentsUpdateResponse.js';
export type { VoidShipmentResponse } from '../declarations/VoidShipmentResponse.js';
export type { ShipmentsVoidResourceResponse } from '../declarations/ShipmentsVoidResourceResponse.js';
export type { ShipmentsCreatePackageInput } from '../declarations/ShipmentsCreatePackageInput.js';
export type { ShipmentsGetInput } from '../declarations/ShipmentsGetInput.js';
export type { ShipmentsListInput } from '../declarations/ShipmentsListInput.js';
export type { ShipmentsUpdateInput } from '../declarations/ShipmentsUpdateInput.js';
export type { ShipmentsVoidResourceInput } from '../declarations/ShipmentsVoidResourceInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { CreatePackageResult } from '../declarations/CreatePackageResult.js';
export type { FulfillmentEvent } from '../declarations/FulfillmentEvent.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { FulfillmentNotification } from '../declarations/FulfillmentNotification.js';
export type { Package } from '../declarations/Package.js';
export type { ShippingDimensions } from '../declarations/ShippingDimensions.js';
export type { ReturnShipmentLineItemAllocation } from '../declarations/ReturnShipmentLineItemAllocation.js';
export type { ShippingWeight } from '../declarations/ShippingWeight.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { UpdateShipmentResult } from '../declarations/UpdateShipmentResult.js';
export type { VoidShipmentResult } from '../declarations/VoidShipmentResult.js';
export type { CreatePackageRequestInput } from '../declarations/CreatePackageRequestInput.js';
export type { UpdateShipmentRequestInput } from '../declarations/UpdateShipmentRequestInput.js';
export type { VoidPackageRequestInput } from '../declarations/VoidPackageRequestInput.js';
export { makeCreatePackageResponse } from '../declarations/makeCreatePackageResponse.js';
export { makeShipmentResponse } from '../declarations/makeShipmentResponse.js';
export { makeShipmentListResponse } from '../declarations/makeShipmentListResponse.js';
export { makeShipment } from '../declarations/makeShipment.js';
export { makeUpdateShipmentResponse } from '../declarations/makeUpdateShipmentResponse.js';
export { makeVoidShipmentResponse } from '../declarations/makeVoidShipmentResponse.js';
export { makeCreatePackageResult } from '../declarations/makeCreatePackageResult.js';
export { makeFulfillmentEvent } from '../declarations/makeFulfillmentEvent.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makeFulfillmentNotification } from '../declarations/makeFulfillmentNotification.js';
export { makePackage } from '../declarations/makePackage.js';
export { makeShippingDimensions } from '../declarations/makeShippingDimensions.js';
export { makeReturnShipmentLineItemAllocation } from '../declarations/makeReturnShipmentLineItemAllocation.js';
export { makeShippingWeight } from '../declarations/makeShippingWeight.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeUpdateShipmentResult } from '../declarations/makeUpdateShipmentResult.js';
export { makeVoidShipmentResult } from '../declarations/makeVoidShipmentResult.js';
