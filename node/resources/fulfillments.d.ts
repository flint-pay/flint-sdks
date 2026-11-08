import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    Fulfillment,
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    FulfillmentListResponse,
    FulfillmentResponse,
    FulfillmentsAcceptParams,
    FulfillmentsCancelParams,
    FulfillmentsCompleteParams,
    FulfillmentsCreateEventParams,
    FulfillmentsCreateShipmentParams,
    FulfillmentsDispatchParams,
    FulfillmentsFailParams,
    FulfillmentsGetParams,
    FulfillmentsHoldParams,
    FulfillmentsListParams,
    FulfillmentsMarkNoShowParams,
    FulfillmentsMarkPackedParams,
    FulfillmentsMarkPickedParams,
    FulfillmentsMarkPreparingParams,
    FulfillmentsMarkReadyParams,
    FulfillmentsReleaseHoldParams
} from '../declarations/types-24.js';
import type { FulfillmentsScheduleParams, FulfillmentsStartParams, FulfillmentsUpdateParams } from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { Shipment, ShipmentResponse } from '../declarations/types-56.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
    FulfillmentsAcceptParams,
    Fulfillment,
    FulfillmentResponse,
    FulfillmentsCancelParams,
    FulfillmentsCompleteParams,
    FulfillmentsCreateEventParams,
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    FulfillmentsCreateShipmentParams,
    FulfillmentsDispatchParams,
    FulfillmentsFailParams,
    FulfillmentsGetParams,
    FulfillmentsHoldParams,
    FulfillmentsListParams,
    FulfillmentListResponse,
    FulfillmentsMarkNoShowParams,
    FulfillmentsMarkPackedParams,
    FulfillmentsMarkPickedParams,
    FulfillmentsMarkPreparingParams,
    FulfillmentsMarkReadyParams,
    FulfillmentsReleaseHoldParams,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient,
    FulfillmentRecipientRequestInput
} from '../declarations/types-24.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type {
    Shipment,
    ShipmentResponse,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    ScheduleFulfillmentRequestInput
} from '../declarations/types-56.js';
export type { _SdkWithoutIdempotency, WeightRequestInput } from '../declarations/types-66.js';
export type { FulfillmentsScheduleParams, FulfillmentsStartParams, FulfillmentsUpdateParams } from '../declarations/types-25.js';
export type { ClientOptions, CompleteFulfillmentRequestInput } from '../declarations/types-6.js';
export type { AcceptFulfillmentRequestInput, AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { DigitalFulfillmentDetails, DimensionsRequestInput, DispatchFulfillmentRequestInput } from '../declarations/types-22.js';
export type { OrderLineItemModifier } from '../declarations/types-39.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-36.js';
export type { TextModifierRequest } from '../declarations/types-62.js';
export type { MoneyValue, NextAction } from '../declarations/types-37.js';
export type { DeliveryFulfillmentDetails, DeferredPromotion } from '../declarations/types-16.js';
export type {
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    FailFulfillmentRequestInput
} from '../declarations/types-23.js';
export type { CheckoutBuyerContact } from '../declarations/types-5.js';
export type { PricingAmounts, PickupFulfillmentDetails } from '../declarations/types-47.js';
export type { OrderSettlementAmounts } from '../declarations/types-40.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export type { CancelFulfillmentRequestInput } from '../declarations/types-4.js';
export type { CreateFulfillmentEventRequestInput } from '../declarations/types-8.js';
export type { CreateShipmentRequestInput, CreateShipmentRequestOutboundInput, CreateShipmentRequestReturnInput } from '../declarations/types-12.js';
export type { PackageCreateRequestInput, PackageCreateInputCreatedInput, PackageCreateInputShippedInput } from '../declarations/types-41.js';
export type { CreatePackageItemRequestInput } from '../declarations/types-10.js';
export type { ReturnShipmentLineItemAllocationRequestInput, ReturnResolutionLineItemRequest } from '../declarations/types-54.js';
export type { HoldFulfillmentRequestInput } from '../declarations/types-27.js';
export type {
    MarkFulfillmentNoShowRequestInput,
    MarkFulfillmentPackedRequestInput,
    MarkFulfillmentPickedRequestInput,
    MarkFulfillmentPreparingRequestInput,
    MarkFulfillmentReadyRequestInput
} from '../declarations/types-34.js';
export type { ReleaseFulfillmentHoldRequestInput } from '../declarations/types-50.js';
export type { StartFulfillmentRequestInput } from '../declarations/types-57.js';
export type {
    UpdateFulfillmentRequestInput,
    UpdateDigitalFulfillmentDetailsInput,
    UpdateDeliveryFulfillmentDetailsInput
} from '../declarations/types-63.js';
export type { UpdatePickupFulfillmentDetailsInput } from '../declarations/types-64.js';
export type { UpdateServiceFulfillmentDetailsInput } from '../declarations/types-65.js';
export { makeAcceptFulfillmentRequest, makeAddressRequest } from '../declarations/types-66.js';
export { makeCancelFulfillmentRequest } from '../declarations/types-67.js';
export { makeCompleteFulfillmentRequest } from '../declarations/types-68.js';
export { makeCreateFulfillmentEventRequest } from '../declarations/types-69.js';
export {
    makeCreatePackageItemRequest,
    makeCreateShipmentRequest,
    makeCreateShipmentRequestOutbound,
    makeCreateShipmentRequestReturn
} from '../declarations/types-70.js';
export { makeDimensionsRequest, makeDispatchFulfillmentRequest } from '../declarations/types-72.js';
export { makeFailFulfillmentRequest, makeFulfillmentRecipientRequest, makeHoldFulfillmentRequest } from '../declarations/types-73.js';
export {
    makeMarkFulfillmentNoShowRequest,
    makeMarkFulfillmentPackedRequest,
    makeMarkFulfillmentPickedRequest,
    makeMarkFulfillmentPreparingRequest,
    makeMarkFulfillmentReadyRequest,
    makeMetadataPatchRequest,
    makeMetadataRequest
} from '../declarations/types-74.js';
export {
    makeMoneyValue,
    makePackageCreateInputCreated,
    makePackageCreateInputShipped,
    makePackageCreateRequest
} from '../declarations/types-75.js';
export { makeReleaseFulfillmentHoldRequest, makeReturnResolutionLineItemRequest } from '../declarations/types-77.js';
export {
    makeReturnShipmentLineItemAllocationRequest,
    makeScheduleFulfillmentRequest,
    makeStartFulfillmentRequest
} from '../declarations/types-78.js';
export {
    makeTextModifierRequest,
    makeUpdateDeliveryFulfillmentDetails,
    makeUpdateDigitalFulfillmentDetails,
    makeUpdateFulfillmentRequest
} from '../declarations/types-79.js';
export { makeUpdatePickupFulfillmentDetails, makeUpdateServiceFulfillmentDetails, makeWeightRequest } from '../declarations/types-80.js';
export interface FulfillmentsResource {
    /**
 * Accepts pending fulfillment work so preparation can begin. Read supported_actions for actions
 * available now. occurred_at records when the action occurred; on complete it also records
 * completion evidence. expected_version optionally rejects a stale fulfillment version. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/accept`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#acceptFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.accept("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    accept(fulfillment_id: InputValue<string>, params?: FulfillmentsAcceptParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Cancels fulfillment work that has not completed. Read supported_actions for actions available
 * now. occurred_at records when the action occurred; on complete it also records completion
 * evidence. expected_version optionally rejects a stale fulfillment version. Read timeline events
 * with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or fulfillment_id, and
 * notifications with `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or
 * fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/cancel`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#cancelFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.cancel("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(fulfillment_id: InputValue<string>, params?: FulfillmentsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Completes the fulfillment and records its completion time. Read supported_actions for actions
 * available now. occurred_at records when the action occurred; on complete it also records
 * completion evidence. expected_version optionally rejects a stale fulfillment version. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/complete`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#completeFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.complete("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    complete(fulfillment_id: InputValue<string>, params?: FulfillmentsCompleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
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
 * client.fulfillments.createEvent("ful_01KEZF7C00F24WVSTTWR1FQX5T", {custom_details: {facility:
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
 * client.fulfillments.createShipment("ful_01KEZF7C00F24WVSTTWR1FQX5T", {direction: "outbound",
 * external_reference_id: "ship_789", external_system: "merchant_wms", metadata: {warehouse:
 * "east"}}, { idempotencyKey: idempotencyKey })
 */
    createShipment(fulfillment_id: InputValue<string>, params: FulfillmentsCreateShipmentParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Shipment, ShipmentResponse>>;
    /**
 * Records that a shipment or local delivery fulfillment has left for its destination. Read
 * supported_actions for actions available now. occurred_at records when the action occurred; on
 * complete it also records completion evidence. expected_version optionally rejects a stale
 * fulfillment version. Read timeline events with `client.fulfillmentEvents.list` filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with
 * `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/dispatch`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#dispatchFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.dispatch("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    dispatch(fulfillment_id: InputValue<string>, params?: FulfillmentsDispatchParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Records fulfillment failure and explicitly releases or preserves the allocated quantities. Read
 * supported_actions for actions available now. occurred_at records when the action occurred; on
 * complete it also records completion evidence. expected_version optionally rejects a stale
 * fulfillment version. Read timeline events with `client.fulfillmentEvents.list` filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with
 * `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/fail`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#failFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.fail("ful_01KEZF7C00F24WVSTTWR1FQX5T", {expected_version: 4, occurred_at:
 * "2026-05-13T11:00:00Z", release_quantity: false}, { idempotencyKey: idempotencyKey })
 */
    fail(fulfillment_id: InputValue<string>, params: FulfillmentsFailParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Retrieves a single fulfillment by ID.
 *
 * `GET /v1/fulfillments/{fulfillment_id}`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillments.get("ful_01KEZF7C00F24WVSTTWR1FQX5T")
 */
    get(fulfillment_id: InputValue<string>, params?: FulfillmentsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Pauses fulfillment work with a required merchant hold reason. Read supported_actions for actions
 * available now. occurred_at records when the action occurred; on complete it also records
 * completion evidence. expected_version optionally rejects a stale fulfillment version. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/hold`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#holdFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.hold("ful_01KEZF7C00F24WVSTTWR1FQX5T", {expected_version: 4, occurred_at:
 * "2026-05-13T11:00:00Z", reason: "inventory_issue"}, { idempotencyKey: idempotencyKey })
 */
    hold(fulfillment_id: InputValue<string>, params: FulfillmentsHoldParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
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
 * Records a missed service appointment with a required no-show reason. Read supported_actions for
 * actions available now. occurred_at records when the action occurred; on complete it also records
 * completion evidence. expected_version optionally rejects a stale fulfillment version. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/mark-no-show`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markFulfillmentNoShow
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.markNoShow("ful_01KEZF7C00F24WVSTTWR1FQX5T", {expected_version: 4,
 * occurred_at: "2026-05-13T11:00:00Z", reason: "customer_no_show"}, { idempotencyKey:
 * idempotencyKey })
 */
    markNoShow(fulfillment_id: InputValue<string>, params: FulfillmentsMarkNoShowParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Records that the items for a shipment fulfillment have been packed. Read supported_actions for
 * actions available now. occurred_at records when the action occurred; on complete it also records
 * completion evidence. expected_version optionally rejects a stale fulfillment version. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/mark-packed`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markFulfillmentPacked
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.markPacked("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markPacked(fulfillment_id: InputValue<string>, params?: FulfillmentsMarkPackedParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Records that the items for a shipment fulfillment have been picked. Read supported_actions for
 * actions available now. occurred_at records when the action occurred; on complete it also records
 * completion evidence. expected_version optionally rejects a stale fulfillment version. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/mark-picked`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markFulfillmentPicked
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.markPicked("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markPicked(fulfillment_id: InputValue<string>, params?: FulfillmentsMarkPickedParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Records that preparation of a pickup or delivery fulfillment has begun. Read supported_actions
 * for actions available now. occurred_at records when the action occurred; on complete it also
 * records completion evidence. expected_version optionally rejects a stale fulfillment version.
 * Read timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id,
 * or fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/mark-preparing`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markFulfillmentPreparing
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.markPreparing("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markPreparing(fulfillment_id: InputValue<string>, params?: FulfillmentsMarkPreparingParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Records that a pickup is ready for collection or a delivery is ready for dispatch. Read
 * supported_actions for actions available now. occurred_at records when the action occurred; on
 * complete it also records completion evidence. expected_version optionally rejects a stale
 * fulfillment version. Read timeline events with `client.fulfillmentEvents.list` filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with
 * `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/mark-ready`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#markFulfillmentReady
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.markReady("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markReady(fulfillment_id: InputValue<string>, params?: FulfillmentsMarkReadyParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Releases a merchant hold and restores the previous fulfillment status. An active payment hold
 * must lift first. Schedules and progress timestamps are preserved and no buyer notification is
 * sent. Read supported_actions for actions available now. occurred_at records when the action
 * occurred; on complete it also records completion evidence. expected_version optionally rejects a
 * stale fulfillment version. Read timeline events with `client.fulfillmentEvents.list` filtered by
 * package_id, shipment_id, or fulfillment_id, and notifications with
 * `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/release-hold`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#releaseFulfillmentHold
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.releaseHold("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    releaseHold(fulfillment_id: InputValue<string>, params?: FulfillmentsReleaseHoldParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Sets the start and end of a service fulfillment's appointment window. Read supported_actions for
 * actions available now. occurred_at records when the action occurred; on complete it also records
 * completion evidence. expected_version optionally rejects a stale fulfillment version. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/schedule`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#scheduleFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.schedule("ful_01KEZF7C00F24WVSTTWR1FQX5T", {expected_version: 4,
 * occurred_at: "2026-05-13T11:00:00Z", scheduled_end_at: "2026-05-14T12:00:00Z",
 * scheduled_start_at: "2026-05-14T11:00:00Z", timezone: "America/New_York"}, { idempotencyKey:
 * idempotencyKey })
 */
    schedule(fulfillment_id: InputValue<string>, params: FulfillmentsScheduleParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Starts fulfillment work. Read supported_actions for actions available now. occurred_at records
 * when the action occurred; on complete it also records completion evidence. expected_version
 * optionally rejects a stale fulfillment version. Read timeline events with
 * `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or fulfillment_id, and
 * notifications with `client.fulfillmentNotifications.list` filtered by fulfillment_event_id or
 * fulfillment_id.
 *
 * `POST /v1/fulfillments/{fulfillment_id}/start`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#startFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillments.start("ful_01KEZF7C00F24WVSTTWR1FQX5T", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    start(fulfillment_id: InputValue<string>, params?: FulfillmentsStartParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
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
