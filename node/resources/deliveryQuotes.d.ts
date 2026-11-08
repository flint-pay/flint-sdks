import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    DeliveryQuote,
    DeliveryQuoteListResponse,
    DeliveryQuoteResponse,
    DeliveryQuotesGetParams,
    DeliveryQuotesListParams
} from '../declarations/types-19.js';
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
    DeliveryQuotesGetParams,
    DeliveryQuote,
    DeliveryQuoteResponse,
    DeliveryQuotesListParams,
    DeliveryQuoteListResponse,
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource,
    DeliveryQuoteMethodResource
} from '../declarations/types-19.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type {
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate,
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch
} from '../declarations/types-16.js';
export type { LocationCoordinate } from '../declarations/types-34.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-21.js';
export type { MoneyValue, NextAction } from '../declarations/types-37.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails, DeliveryPendingCallerRateRequest } from '../declarations/types-18.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { DeliveryLocationSummaryResource, DeliveryMerchantDiagnostic } from '../declarations/types-17.js';
export type { DeliveryRecipientRequirement } from '../declarations/types-20.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export type { DisputesAcceptParams } from '../declarations/types-22.js';
export { makeDeliveryWindowRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export interface DeliveryQuotesResource {
    /**
 * Returns a persisted delivery quote for diagnostics and recovery by its ID, using the same
 * merchant view as the quote list.
 *
 * `GET /v1/delivery-quotes/{delivery_quote_id}`
 * @param delivery_quote_id Delivery quote ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-quotes#getDeliveryQuote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryQuotes.get("dqt_01KEZF7C009EB1AVCDJBN4BBVV")
 */
    get(delivery_quote_id: InputValue<string>, params?: DeliveryQuotesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryQuote, DeliveryQuoteResponse>>;
    /**
 * Returns delivery quote diagnostics with status derived identically to individual and checkout
 * quote reads. Quotes are ordered by created_at and delivery_quote_id ascending. Each page scans
 * at most 500 rows and may contain fewer than page_size items while next_page_token is present.
 * Default order: created_at ascending, then delivery_quote_id ascending.
 *
 * `GET /v1/delivery-quotes`
 * @see https://developers.withflintpay.com/docs/api/delivery-quotes#listDeliveryQuotes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryQuotes.list()
 */
    list(params?: DeliveryQuotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryQuoteListResponse, DeliveryQuoteListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-quotes#listDeliveryQuotes
     */
    listPages(params?: DeliveryQuotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeliveryQuoteListResponse, DeliveryQuoteListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-quotes#listDeliveryQuotes
     */
    listItems(params?: DeliveryQuotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryQuote>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryQuotes: DeliveryQuotesResource;
}
