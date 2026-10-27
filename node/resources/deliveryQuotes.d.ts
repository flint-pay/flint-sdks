import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    DeliveryQuote,
    DeliveryQuoteListResponse,
    DeliveryQuoteResponse,
    DeliveryQuotesGetInput,
    DeliveryQuotesListInput
} from '../declarations/types-14.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    DeliveryQuote,
    DeliveryQuoteResponse,
    DeliveryQuoteListResponse,
    DeliveryQuotesGetInput,
    DeliveryQuotesListInput,
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryRecipientRequirement,
    DeliveryQuoteLineItemResource,
    DeliveryQuoteMethodResource
} from '../declarations/types-14.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type {
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequest,
    DeliveryBuyerLocationInputAddress,
    DeliveryBuyerLocationInputCoordinate,
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch
} from '../declarations/types-11.js';
export type { LocationCoordinate } from '../declarations/types-29.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryOptionProjection,
    DeliveryPlan,
    DeliveryPickupDetails,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryPendingCallerRateRequest
} from '../declarations/types-12.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-15.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { BuyerInstructionsConfig } from '../declarations/types-1.js';
export { makeBuyerInstructionsConfig } from '../declarations/types-61.js';
export {
    makeDeliveryAddressRequest,
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest
} from '../declarations/types-65.js';
export { makeDeliveryRecipientRequirement, makeDeliveryWindowRequest } from '../declarations/types-66.js';
export { makeLocationCoordinate, makeMoneyValue } from '../declarations/types-68.js';
export interface DeliveryQuotesResource {
    /**
 * Returns a persisted delivery quote for diagnostics and recovery by its ID, using the same
 * merchant view as the quote list.
 * @see reference/deliveryQuotes.md#deliveryquotesget
 * GET /v1/delivery-quotes/{delivery_quote_id}
 * @example
 * client.deliveryQuotes.get("example")
 */
    get(delivery_quote_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryQuote>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryQuotes.md#deliveryquotesget
     */
    getWithResponse(delivery_quote_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryQuoteResponse>>;
    /**
 * Returns persisted delivery quote diagnostics in stable creation order.
 * @see reference/deliveryQuotes.md#deliveryquoteslist
 * GET /v1/delivery-quotes
 * @example
 * client.deliveryQuotes.list()
 */
    list(params?: {
        "checkout_session_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "consumed" | "stale" | "expired" | "revoked">>;
        "evaluation_status"?: InputValue<Array<"complete" | "incomplete" | "degraded">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryQuoteListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryQuotes.md#deliveryquoteslist
     */
    listWithResponse(params?: {
        "checkout_session_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "consumed" | "stale" | "expired" | "revoked">>;
        "evaluation_status"?: InputValue<Array<"complete" | "incomplete" | "degraded">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryQuoteListResponse>>;
    /** Iterate pages lazily.
     * @see reference/deliveryQuotes.md#deliveryquoteslist
     */
    listPages(params?: {
        "checkout_session_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "consumed" | "stale" | "expired" | "revoked">>;
        "evaluation_status"?: InputValue<Array<"complete" | "incomplete" | "degraded">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryQuoteListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/deliveryQuotes.md#deliveryquoteslist
     */
    listPagesWithResponse(params?: {
        "checkout_session_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "consumed" | "stale" | "expired" | "revoked">>;
        "evaluation_status"?: InputValue<Array<"complete" | "incomplete" | "degraded">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DeliveryQuoteListResponse>>;
    /** Iterate items lazily.
     * @see reference/deliveryQuotes.md#deliveryquoteslist
     */
    listItems(params?: {
        "checkout_session_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "consumed" | "stale" | "expired" | "revoked">>;
        "evaluation_status"?: InputValue<Array<"complete" | "incomplete" | "degraded">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryQuote>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryQuotes: DeliveryQuotesResource;
}
