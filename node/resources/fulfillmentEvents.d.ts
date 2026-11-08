import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    FulfillmentEvent,
    FulfillmentEventListResponse,
    FulfillmentEventResourceResponse,
    FulfillmentEventsGetParams,
    FulfillmentEventsListParams
} from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-51.js';
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
    FulfillmentEventsGetParams,
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    FulfillmentEventsListParams,
    FulfillmentEventListResponse
} from '../declarations/types-24.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { ExpandedOrderSummary } from '../declarations/types-23.js';
export type { CheckoutBuyerContact } from '../declarations/types-5.js';
export type { DeferredPromotion } from '../declarations/types-16.js';
export type { PricingAmounts } from '../declarations/types-47.js';
export type { MoneyValue, NextAction } from '../declarations/types-37.js';
export type { OrderSettlementAmounts } from '../declarations/types-40.js';
export type { SettlementAmounts } from '../declarations/types-56.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export interface FulfillmentEventsResource {
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
