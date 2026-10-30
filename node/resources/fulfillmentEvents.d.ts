import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    FulfillmentEvent,
    FulfillmentEventListResponse,
    FulfillmentEventResourceResponse,
    FulfillmentEventsGetParams,
    FulfillmentEventsListParams
} from '../declarations/types-22.js';
import type { RequestOptions } from '../declarations/types-47.js';
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
    FulfillmentEventsGetParams,
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    FulfillmentEventsListParams,
    FulfillmentEventListResponse
} from '../declarations/types-22.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ExpandedOrderSummary } from '../declarations/types-21.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts } from '../declarations/types-43.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { SettlementAmounts } from '../declarations/types-53.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface FulfillmentEventsResource {
    /**
 * Retrieves one provider-neutral fulfillment event by ID.
 *
 * `GET /v1/fulfillment-events/{fulfillment_event_id}`
 * @param fulfillment_event_id Flint fulfillment event ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getFulfillmentEvent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillmentEvents.get("fev_01ARZ3NDEKTSV4RRFFQ69G5FAV")
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
