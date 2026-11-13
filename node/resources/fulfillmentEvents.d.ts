import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    FulfillmentEvent,
    FulfillmentEventListResponse,
    FulfillmentEventResourceResponse,
    FulfillmentEventsCreateParams,
    FulfillmentEventsGetParams,
    FulfillmentEventsListParams
} from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    FulfillmentEventsCreateParams,
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    FulfillmentEventsGetParams,
    FulfillmentEventsListParams,
    FulfillmentEventListResponse
} from '../declarations/types-25.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateFulfillmentEventRequestInput } from '../declarations/types-9.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ExpandedOrderSummary } from '../declarations/types-24.js';
export type { CheckoutBuyerContact } from '../declarations/types-5.js';
export type { DeferredPromotion } from '../declarations/types-16.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type { MoneyValue, NextAction } from '../declarations/types-38.js';
export type { OrderSettlementAmounts } from '../declarations/types-41.js';
export type { SettlementAmounts } from '../declarations/types-59.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeCreateFulfillmentEventRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface FulfillmentEventsResource {
    /**
 * Records an observational event for a fulfillment or one of its shipments or packages. Read
 * timeline events with `client.fulfillmentEvents.list` filtered by package_id, shipment_id, or
 * fulfillment_id, and notifications with `client.fulfillmentNotifications.list` filtered by
 * fulfillment_event_id or fulfillment_id.
 *
 * `POST /v1/fulfillment-events`
 * @see https://developers.withflintpay.com/docs/api/fulfillment#createFulfillmentEvent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.fulfillmentEvents.create({custom_details: {facility: "east"}, event_type: "custom",
 * external_event_id: "evt_7f3df2", external_status: "work_started", external_system: "shippo",
 * fulfillment_id: "ful_01KEZF7C009TD0XN8YPHHHXQFR", message: "The fulfillment partner started
 * work.", occurred_at: "2026-05-13T16:05:00Z", package_id: "pkg_01KEZF7C008VJBE6BT0CWZT296",
 * shipment_id: "shp_01KEZF7C006DZPA7FGH42HTBY8"}, { idempotencyKey: idempotencyKey })
 */
    create(params: FulfillmentEventsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<FulfillmentEvent, FulfillmentEventResourceResponse>>;
    /**
 * Retrieves one provider-neutral fulfillment event by ID.
 *
 * `GET /v1/fulfillment-events/{fulfillment_event_id}`
 * @param fulfillment_event_id Flint fulfillment event ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getFulfillmentEvent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillmentEvents.get("fev_01KEZF7C002XK9D7X3239ERT51")
 */
    get(fulfillment_event_id: InputValue<string>, params?: FulfillmentEventsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FulfillmentEvent, FulfillmentEventResourceResponse>>;
    /**
 * Lists provider-neutral fulfillment events. sort_direction applies to both the selected timestamp
 * and the ID tiebreaker. Default order: received_at descending, then fulfillment_event_id
 * descending.
 *
 * `GET /v1/fulfillment-events`
 * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillmentEvents
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillmentEvents.list()
 */
    list(params?: FulfillmentEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FulfillmentEventListResponse, FulfillmentEventListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillmentEvents
     */
    listPages(params?: FulfillmentEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<FulfillmentEventListResponse, FulfillmentEventListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillmentEvents
     */
    listItems(params?: FulfillmentEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FulfillmentEvent>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly fulfillmentEvents: FulfillmentEventsResource;
}
