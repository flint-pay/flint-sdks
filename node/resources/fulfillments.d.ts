import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { Fulfillment } from '../declarations/types-21.js';
import type { FulfillmentEvent, FulfillmentEventResourceResponse, FulfillmentListResponse, FulfillmentResponse } from '../declarations/types-22.js';
import type {
    FulfillmentsCreateEventParams,
    FulfillmentsCreateShipmentParams,
    FulfillmentsGetParams,
    FulfillmentsListParams,
    FulfillmentsTransitionParams,
    FulfillmentsUpdateParams
} from '../declarations/types-23.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { Shipment, ShipmentResponse } from '../declarations/types-53.js';
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
    FulfillmentsCreateEventParams,
    FulfillmentsCreateShipmentParams,
    FulfillmentsGetParams,
    FulfillmentsListParams,
    FulfillmentsTransitionParams,
    FulfillmentsUpdateParams,
    FulfillmentTransitionRequestReleaseHoldInput,
    FulfillmentTransitionRequestStartInput,
    FulfillmentTransitionRequestScheduleInput
} from '../declarations/types-23.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    FulfillmentResponse,
    FulfillmentListResponse,
    FulfillmentHold,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient,
    FulfillmentTransitionRequestInput,
    FulfillmentTransitionRequestCompleteInput,
    FulfillmentTransitionRequestCancelInput,
    FulfillmentTransitionRequestHoldInput,
    FulfillmentTransitionRequestMarkReadyInput,
    FulfillmentTransitionRequestFailInput,
    FulfillmentTransitionRequestAcceptInput,
    FulfillmentTransitionRequestMarkPreparingInput,
    FulfillmentTransitionRequestMarkPickedInput,
    FulfillmentTransitionRequestMarkPackedInput,
    FulfillmentTransitionRequestDispatchInput,
    FulfillmentTransitionRequestMarkNoShowInput,
    FulfillmentRecipientRequestInput
} from '../declarations/types-22.js';
export type {
    Shipment,
    ShipmentResponse,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails
} from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency, WeightInput } from '../declarations/types-61.js';
export type {
    Fulfillment,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    FulfillmentChargeLink,
    ExpandedShipmentSummary
} from '../declarations/types-21.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateFulfillmentEventRequestInput } from '../declarations/types-7.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts, PickupFulfillmentDetails } from '../declarations/types-43.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CreateShipmentRequestInput, CreateShipmentRequestOutboundInput, CreateShipmentRequestReturnInput } from '../declarations/types-11.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { PackageCreateRequestInput, PackageCreateInputCreatedInput, PackageCreateInputShippedInput } from '../declarations/types-38.js';
export type { DimensionsInput, DigitalFulfillmentDetails } from '../declarations/types-20.js';
export type { CreatePackageItemRequestInput } from '../declarations/types-9.js';
export type { ReturnShipmentLineItemAllocationRequestInput, ReturnResolutionLineItemRequest } from '../declarations/types-50.js';
export type { OrderLineItemModifier } from '../declarations/types-37.js';
export type { TextModifierRequest } from '../declarations/types-57.js';
export type { DeliveryFulfillmentDetails } from '../declarations/types-15.js';
export type {
    UpdateFulfillmentRequestInput,
    UpdateDigitalFulfillmentDetailsInput,
    UpdateDeliveryFulfillmentDetailsInput
} from '../declarations/types-58.js';
export type { UpdatePickupFulfillmentDetailsInput } from '../declarations/types-59.js';
export type { UpdateServiceFulfillmentDetailsInput } from '../declarations/types-60.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export { makeCreateFulfillmentEventRequest } from '../declarations/types-63.js';
export { makeCreatePackageItemRequest } from '../declarations/types-64.js';
export { makeCreateShipmentRequest, makeCreateShipmentRequestOutbound, makeCreateShipmentRequestReturn } from '../declarations/types-65.js';
export {
    makeDimensions,
    makeFulfillmentRecipientRequest,
    makeFulfillmentTransitionRequest,
    makeFulfillmentTransitionRequestAccept,
    makeFulfillmentTransitionRequestCancel,
    makeFulfillmentTransitionRequestComplete,
    makeFulfillmentTransitionRequestDispatch,
    makeFulfillmentTransitionRequestFail,
    makeFulfillmentTransitionRequestHold,
    makeFulfillmentTransitionRequestMarkNoShow,
    makeFulfillmentTransitionRequestMarkPacked,
    makeFulfillmentTransitionRequestMarkPicked,
    makeFulfillmentTransitionRequestMarkPreparing,
    makeFulfillmentTransitionRequestMarkReady,
    makeFulfillmentTransitionRequestReleaseHold,
    makeFulfillmentTransitionRequestSchedule,
    makeFulfillmentTransitionRequestStart
} from '../declarations/types-67.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makePackageCreateInputCreated, makePackageCreateInputShipped, makePackageCreateRequest } from '../declarations/types-70.js';
export { makeReturnResolutionLineItemRequest, makeReturnShipmentLineItemAllocationRequest } from '../declarations/types-72.js';
export {
    makeTextModifierRequest,
    makeUpdateDeliveryFulfillmentDetails,
    makeUpdateDigitalFulfillmentDetails,
    makeUpdateFulfillmentRequest
} from '../declarations/types-73.js';
export { makeUpdatePickupFulfillmentDetails, makeUpdateServiceFulfillmentDetails } from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
export interface FulfillmentsResource {
    /**
 * Records an observational event for a fulfillment or one of its shipments or packages. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/events`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#createFulfillmentEvent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.createEvent("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {custom_details: {facility:
 * "east"}, event_type: "custom", external_event_id: "evt_7f3df2", external_status: "work_started",
 * external_system: "shippo", message: "The fulfillment partner started work.", occurred_at:
 * "2026-05-13T16:05:00Z", package_id: "pkg_01KEZF7C008VJBE6BT0CWZT296", shipment_id:
 * "shp_01KEZF7C006DZPA7FGH42HTBY8"}, { idempotencyKey: idempotencyKey })
 */
    createEvent(fulfillment_id: InputValue<string>, params: FulfillmentsCreateEventParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<FulfillmentEvent, FulfillmentEventResourceResponse>>;
    /**
 * Creates a shipment under a shipment fulfillment. For outbound shipments, include 1 to 20
 * packages to create the parcels atomically and return their IDs. Set each package's status to
 * shipped to report handoff in the same call. Return shipments cannot include packages.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/shipments`
 * @param fulfillment_id Flint shipment fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#createShipment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.createShipment("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {direction: "outbound",
 * external_reference_id: "ship_789", external_system: "merchant_wms", metadata: {warehouse:
 * "east"}}, { idempotencyKey: idempotencyKey })
 */
    createShipment(fulfillment_id: InputValue<string>, params: FulfillmentsCreateShipmentParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Shipment, ShipmentResponse>>;
    /**
 * Retrieves a single fulfillment by ID.
 *
 * `GET /v1/fulfillments/{fulfillment_id}`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillments.get("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(fulfillment_id: InputValue<string>, params?: FulfillmentsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Returns a paginated list of fulfillments. scheduled_start_at uses the service scheduled start or
 * the start of the pickup, local delivery, or shipment window. For scheduled_start_at and
 * terminal_at, null values sort first ascending and last descending. Default order: created_at
 * descending, then fulfillment_id descending.
 *
 * `GET /v1/fulfillments`
 * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillments
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillments.list()
 */
    list(params?: FulfillmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FulfillmentListResponse, FulfillmentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillments
     */
    listPages(params?: FulfillmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<FulfillmentListResponse, FulfillmentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillments
     */
    listItems(params?: FulfillmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Fulfillment>;
    /**
 * Performs one action from the fulfillment's supported_actions. Every action accepts occurred_at
 * for the transition time. For complete, occurred_at also records completion evidence. The hold
 * and mark_no_show actions accept reason plus an optional reason_message note. Each action accepts
 * only its action-specific fields. expected_version is optional and rejects a stale resource
 * version when supplied. Read timeline events with `client.fulfillmentEvents.list` filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with
 * `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/transitions`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#transitionFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.transition("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "mark_packed",
 * buyer_notification_behavior: "send", expected_version: 4, occurred_at: "2026-05-13T11:00:00Z"},
 * { idempotencyKey: idempotencyKey })
 */
    transition(fulfillment_id: InputValue<string>, params: FulfillmentsTransitionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item
 * allocation is set when the fulfillment is created. expected_version is optional and rejects a
 * stale resource version when supplied.
 *
 * `PATCH /v1/fulfillments/{fulfillment_id}`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#updateFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.update("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {shipping_batch:
 * "batch-001"}}, { idempotencyKey: idempotencyKey })
 */
    update(fulfillment_id: InputValue<string>, params: FulfillmentsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly fulfillments: FulfillmentsResource;
}
