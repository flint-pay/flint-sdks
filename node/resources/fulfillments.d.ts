import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateFulfillmentEventRequestInput } from '../declarations/types-6.js';
import type { CreateShipmentRequestInput } from '../declarations/types-10.js';
import type {
    Fulfillment,
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    FulfillmentListResponse,
    FulfillmentResponse,
    FulfillmentsCreateEventInput,
    FulfillmentsCreateShipmentInput,
    FulfillmentsGetInput,
    FulfillmentsListInput,
    FulfillmentsTransitionInput
} from '../declarations/types-19.js';
import type { FulfillmentsUpdateInput } from '../declarations/types-20.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { Shipment, ShipmentResponse } from '../declarations/types-47.js';
import type { UpdateFulfillmentRequestInput } from '../declarations/types-51.js';
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
export type { CreateFulfillmentEventRequestInput } from '../declarations/types-6.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    Fulfillment,
    FulfillmentResponse,
    FulfillmentListResponse,
    FulfillmentsTransitionInput,
    FulfillmentsCreateEventInput,
    FulfillmentsCreateShipmentInput,
    FulfillmentsGetInput,
    FulfillmentsListInput,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient,
    FulfillmentTransitionRequestInput,
    FulfillmentTransitionRequestReleaseHoldInput,
    FulfillmentTransitionRequestCompleteInput,
    FulfillmentTransitionRequestCancelInput,
    FulfillmentTransitionRequestHoldInput,
    FulfillmentTransitionRequestStartInput,
    FulfillmentTransitionRequestMarkReadyInput,
    FulfillmentTransitionRequestFailInput,
    FulfillmentTransitionRequestScheduleInput,
    FulfillmentTransitionRequestAcceptInput,
    FulfillmentTransitionRequestMarkPreparingInput,
    FulfillmentTransitionRequestMarkPickedInput,
    FulfillmentTransitionRequestMarkPackedInput,
    FulfillmentTransitionRequestDispatchInput,
    FulfillmentTransitionRequestMarkNoShowInput,
    FulfillmentRecipientRequestInput
} from '../declarations/types-19.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { CreateShipmentRequestInput, CreateShipmentRequestOutboundInput, CreateShipmentRequestReturnInput } from '../declarations/types-10.js';
export type {
    Shipment,
    ShipmentResponse,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails
} from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency, WeightInput } from '../declarations/types-65.js';
export type {
    UpdateFulfillmentRequestInput,
    UpdateDigitalFulfillmentDetailsInput,
    UpdateDeliveryFulfillmentDetailsInput
} from '../declarations/types-51.js';
export type { FulfillmentsUpdateInput } from '../declarations/types-20.js';
export type { ClientOptions, CheckoutBuyerContact } from '../declarations/types-4.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ExpandedOrderSummary, ExpandedPackageSummary, ExpandedShipmentSummary } from '../declarations/types-18.js';
export type { PricingAmounts, PickupFulfillmentDetails } from '../declarations/types-39.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { PackageCreateRequestInput, PackageCreateInputCreatedInput, PackageCreateInputShippedInput } from '../declarations/types-36.js';
export type { DimensionsInput, DigitalFulfillmentDetails } from '../declarations/types-17.js';
export type { CreatePackageItemRequestInput } from '../declarations/types-8.js';
export type { ReturnShipmentLineItemAllocationRequestRequestInput, ReturnResolutionLineItemRequest } from '../declarations/types-44.js';
export type { OrderLineItemModifier } from '../declarations/types-34.js';
export type { TextModifierRequest } from '../declarations/types-50.js';
export type { DeliveryFulfillmentDetails } from '../declarations/types-13.js';
export type { UpdatePickupFulfillmentDetailsInput, UpdateServiceFulfillmentDetailsInput } from '../declarations/types-52.js';
export { makeAddressRequest } from '../declarations/types-65.js';
export { makeCreateFulfillmentEventRequest } from '../declarations/types-67.js';
export {
    makeCreatePackageItemRequest,
    makeCreateShipmentRequest,
    makeCreateShipmentRequestOutbound,
    makeCreateShipmentRequestReturn
} from '../declarations/types-68.js';
export {
    makeDimensions,
    makeFulfillmentRecipientRequest,
    makeFulfillmentTransitionRequest,
    makeFulfillmentTransitionRequestAccept,
    makeFulfillmentTransitionRequestCancel
} from '../declarations/types-70.js';
export {
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
} from '../declarations/types-71.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export {
    makeMoneyValue,
    makePackageCreateInputCreated,
    makePackageCreateInputShipped,
    makePackageCreateRequest
} from '../declarations/types-73.js';
export { makeReturnResolutionLineItemRequest, makeReturnShipmentLineItemAllocationRequestRequest } from '../declarations/types-75.js';
export {
    makeTextModifierRequest,
    makeUpdateDeliveryFulfillmentDetails,
    makeUpdateDigitalFulfillmentDetails,
    makeUpdateFulfillmentRequest,
    makeUpdatePickupFulfillmentDetails
} from '../declarations/types-77.js';
export { makeUpdateServiceFulfillmentDetails, makeWeight } from '../declarations/types-78.js';
export interface FulfillmentsResource {
    /**
 * Records an observational event for a fulfillment or one of its shipments or packages. Read
 * timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by
 * fulfillment_event_id or fulfillment_id.
 * @see reference/fulfillments.md#fulfillmentscreateevent
 * POST /v1/fulfillments/{fulfillment_id}/events
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.createEvent("example", {event_type: "carrier_scan"}, { idempotencyKey:
 * idempotencyKey })
 */
    createEvent(fulfillment_id: InputValue<string>, params: (InputValue<CreateFulfillmentEventRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<FulfillmentEvent>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillments.md#fulfillmentscreateevent
     */
    createEventWithResponse(fulfillment_id: InputValue<string>, params: (InputValue<CreateFulfillmentEventRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<FulfillmentEventResourceResponse>>;
    /**
 * Creates a shipment under a shipment fulfillment. For outbound shipments, include 1 to 20
 * packages to create the parcels atomically and return their IDs. Set each package's status to
 * shipped to report handoff in the same call. Return shipments cannot include packages.
 * @see reference/fulfillments.md#fulfillmentscreateshipment
 * POST /v1/fulfillments/{fulfillment_id}/shipments
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.createShipment("example", {direction: "outbound"}, { idempotencyKey:
 * idempotencyKey })
 */
    createShipment(fulfillment_id: InputValue<string>, params: (InputValue<CreateShipmentRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Shipment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillments.md#fulfillmentscreateshipment
     */
    createShipmentWithResponse(fulfillment_id: InputValue<string>, params: (InputValue<CreateShipmentRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<ShipmentResponse>>;
    /**
 * Retrieves a single fulfillment by ID.
 * @see reference/fulfillments.md#fulfillmentsget
 * GET /v1/fulfillments/{fulfillment_id}
 * @example
 * client.fulfillments.get("example")
 */
    get(fulfillment_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order" | "packages" | "shipments">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Fulfillment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillments.md#fulfillmentsget
     */
    getWithResponse(fulfillment_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order" | "packages" | "shipments">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<FulfillmentResponse>>;
    /**
 * Returns a paginated list of fulfillments. Results default to created_at descending, with
 * fulfillment_id descending as the tiebreaker. scheduled_start_at uses the service scheduled start
 * or the start of the pickup, local delivery, or shipment window. For scheduled_start_at and
 * terminal_at, null values sort first ascending and last descending. Default order: created_at
 * descending, then fulfillment_id descending.
 * @see reference/fulfillments.md#fulfillmentslist
 * GET /v1/fulfillments
 * @example
 * client.fulfillments.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "order_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "on_hold"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "location_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<FulfillmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillments.md#fulfillmentslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "order_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "on_hold"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "location_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<FulfillmentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/fulfillments.md#fulfillmentslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "order_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "on_hold"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "location_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FulfillmentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/fulfillments.md#fulfillmentslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "order_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "on_hold"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "location_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<FulfillmentListResponse>>;
    /** Iterate items lazily.
     * @see reference/fulfillments.md#fulfillmentslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "order_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "on_hold"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "location_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Fulfillment>;
    /**
 * Performs one action from the fulfillment's supported_actions. Every action accepts occurred_at
 * for the transition time. For complete, occurred_at also records completion evidence. The hold
 * and mark_no_show actions accept reason plus an optional reason_message note. Each action accepts
 * only its action-specific fields. expected_version is optional and rejects a stale resource
 * version when supplied. Read timeline events with GET /v1/fulfillment-events filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with GET
 * /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.
 * @see reference/fulfillments.md#fulfillmentstransition
 * POST /v1/fulfillments/{fulfillment_id}/transitions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.transition({fulfillment_id: "example", body: {action: "release_hold"}}, {
 * idempotencyKey: idempotencyKey })
 */
    transition(input: FulfillmentsTransitionInput, options?: RequestOptions<"merchant">): Promise<Fulfillment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillments.md#fulfillmentstransition
     */
    transitionWithResponse(input: FulfillmentsTransitionInput, options?: RequestOptions<"merchant">): Promise<SdkResponse<FulfillmentResponse>>;
    /**
 * Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item
 * allocation is set when the fulfillment is created. expected_version is optional and rejects a
 * stale resource version when supplied.
 * @see reference/fulfillments.md#fulfillmentsupdate
 * PATCH /v1/fulfillments/{fulfillment_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(fulfillment_id: InputValue<string>, params: (InputValue<UpdateFulfillmentRequestInput>)
        & {
        "expand"?: InputValue<Array<"order" | "packages" | "shipments">>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Fulfillment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillments.md#fulfillmentsupdate
     */
    updateWithResponse(fulfillment_id: InputValue<string>, params: (InputValue<UpdateFulfillmentRequestInput>)
        & {
        "expand"?: InputValue<Array<"order" | "packages" | "shipments">>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<FulfillmentResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly fulfillments: FulfillmentsResource;
}
