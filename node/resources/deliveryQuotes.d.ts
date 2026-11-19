import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type {
    DeliveryQuote,
    DeliveryQuoteListResponse,
    DeliveryQuoteResponse,
    DeliveryQuotesCreateParams,
    DeliveryQuotesGetParams,
    DeliveryQuotesListParams
} from '../declarations/types-22.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
    DeliveryQuotesCreateParams,
    DeliveryQuote,
    DeliveryQuoteResponse,
    DeliveryQuotesGetParams,
    DeliveryQuotesListParams,
    DeliveryQuoteListResponse,
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource,
    DeliveryQuoteMethodResource
} from '../declarations/types-22.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { CreateCheckoutDeliveryQuoteRequestInput } from '../declarations/types-8.js';
export type {
    DeliveryBuyerLocationRequestInput,
    DeliveryAddressRequestInput,
    DeliveryCoordinateRequestInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryAddressRequest
} from '../declarations/types-18.js';
export type {
    DeliveryInventoryAssignmentRequestInput,
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch,
    DeliveryInventoryAssignmentRequest
} from '../declarations/types-19.js';
export type {
    CallerSuppliedDeliveryMethodResultRequestInput,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput,
    CallerSuppliedDeliveryOutcomeRequestUnavailableInput,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput
} from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-44.js';
export type { DeliveryWindowRequestInput, DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-24.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { Address } from '../declarations/types-0.js';
export type { LocationCoordinate } from '../declarations/types-40.js';
export type { DeliveryAddressAdvisoryResource } from '../declarations/types-17.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails, DeliveryPendingCallerRateRequest } from '../declarations/types-20.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { DeliveryRecipientRequirement } from '../declarations/types-23.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { DisputesAcceptParams } from '../declarations/types-26.js';
export {
    makeCallerSuppliedDeliveryMethodResultRequest,
    makeCallerSuppliedDeliveryOutcomeRequest,
    makeCallerSuppliedDeliveryOutcomeRequestAvailable,
    makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate,
    makeCallerSuppliedDeliveryOutcomeRequestUnavailable
} from '../declarations/types-80.js';
export { makeCreateCheckoutDeliveryQuoteRequest } from '../declarations/types-81.js';
export {
    makeDeliveryAddressRequest,
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest
} from '../declarations/types-84.js';
export { makeDeliveryCoordinateRequest, makeDeliveryInventoryAssignmentRequest } from '../declarations/types-85.js';
export { makeDeliveryWindowRequest } from '../declarations/types-86.js';
export { makeMoneyValue } from '../declarations/types-88.js';
export interface DeliveryQuotesResource {
    /**
 * Creates an exact delivery quote for the checkout session named by checkout_session_id, without
 * holding inventory. A checkout credential can quote only its own checkout session.
 *
 * `POST /v1/delivery-quotes`
 * @see https://developers.withflintpay.com/docs/api/delivery-quotes#createDeliveryQuote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryQuotes.create({checkout_session_id: "cs_01KEZF7C004JRWFW43H037MQRN"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: DeliveryQuotesCreateParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<DeliveryQuote, DeliveryQuoteResponse>>;
    /**
 * Returns a delivery quote by its ID. API keys receive the same merchant view as the quote list. A
 * checkout credential reads only quotes of its own checkout session and receives the buyer view;
 * any other quote is refused as not found.
 *
 * `GET /v1/delivery-quotes/{delivery_quote_id}`
 * @param delivery_quote_id Delivery quote ID. Must be a valid ID with prefix dqt_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/delivery-quotes#getDeliveryQuote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryQuotes.get("dqt_01KEZF7C009EB1AVCDJBN4BBVV")
 */
    get(delivery_quote_id: InputValue<string>, params?: DeliveryQuotesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<DeliveryQuote, DeliveryQuoteResponse>>;
    /**
 * Returns delivery quotes with status derived identically to individual quote reads. A checkout
 * credential must send its own checkout_session_id and receives the buyer view. Quotes are ordered
 * by created_at and delivery_quote_id ascending. Each page scans at most 500 rows and may contain
 * fewer than page_size items while next_page_token is present. Default order: created_at
 * ascending, then delivery_quote_id ascending.
 *
 * `GET /v1/delivery-quotes`
 * @see https://developers.withflintpay.com/docs/api/delivery-quotes#listDeliveryQuotes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryQuotes.list()
 */
    list(params?: DeliveryQuotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<DeliveryQuoteListResponse, DeliveryQuoteListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-quotes#listDeliveryQuotes
     */
    listPages(params?: DeliveryQuotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<WithResponseInfo<DeliveryQuoteListResponse, DeliveryQuoteListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-quotes#listDeliveryQuotes
     */
    listItems(params?: DeliveryQuotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<DeliveryQuote>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryQuotes: DeliveryQuotesResource;
}
