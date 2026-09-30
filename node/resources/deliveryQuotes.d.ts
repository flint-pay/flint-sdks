export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { DeliveryQuote } from '../declarations/DeliveryQuote.js';
import type { DeliveryQuoteListResponse } from '../declarations/DeliveryQuoteListResponse.js';
import type { DeliveryQuotesListInput } from '../declarations/DeliveryQuotesListInput.js';
import type { DeliveryQuotesListResponse } from '../declarations/DeliveryQuotesListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DeliveryQuotesResource {
    /**
 * Returns persisted delivery quote diagnostics in stable creation order.
 * GET /v1/delivery-quotes
 * @example
 * client.deliveryQuotes.list({})
 */
    list(params?: { "checkout_session_id"?: InputValue<string>; "order_id"?: InputValue<string>; "status"?: InputValue<"active" | "consumed" | "stale" | "expired" | "revoked">; "evaluation_status"?: InputValue<"complete" | "incomplete" | "degraded">; "created_after"?: InputValue<string>; "created_before"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryQuoteListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "checkout_session_id"?: InputValue<string>; "order_id"?: InputValue<string>; "status"?: InputValue<"active" | "consumed" | "stale" | "expired" | "revoked">; "evaluation_status"?: InputValue<"complete" | "incomplete" | "degraded">; "created_after"?: InputValue<string>; "created_before"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryQuotesListResponse>>;
    listPages(params?: { "checkout_session_id"?: InputValue<string>; "order_id"?: InputValue<string>; "status"?: InputValue<"active" | "consumed" | "stale" | "expired" | "revoked">; "evaluation_status"?: InputValue<"complete" | "incomplete" | "degraded">; "created_after"?: InputValue<string>; "created_before"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryQuoteListResponse>;
    listPagesWithResponse(params?: { "checkout_session_id"?: InputValue<string>; "order_id"?: InputValue<string>; "status"?: InputValue<"active" | "consumed" | "stale" | "expired" | "revoked">; "evaluation_status"?: InputValue<"complete" | "incomplete" | "degraded">; "created_after"?: InputValue<string>; "created_before"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DeliveryQuotesListResponse>>;
    listItems(params?: { "checkout_session_id"?: InputValue<string>; "order_id"?: InputValue<string>; "status"?: InputValue<"active" | "consumed" | "stale" | "expired" | "revoked">; "evaluation_status"?: InputValue<"complete" | "incomplete" | "degraded">; "created_after"?: InputValue<string>; "created_before"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryQuote>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly deliveryQuotes: DeliveryQuotesResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { DeliveryQuoteListResponse } from '../declarations/DeliveryQuoteListResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DeliveryQuotesListResponse } from '../declarations/DeliveryQuotesListResponse.js';
export type { DeliveryQuote } from '../declarations/DeliveryQuote.js';
export type { DeliveryQuotesListInput } from '../declarations/DeliveryQuotesListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { DeliveryBuyerLocationResource } from '../declarations/DeliveryBuyerLocationResource.js';
export type { DeliveryAddressResource } from '../declarations/DeliveryAddressResource.js';
export type { DeliveryCoordinateRequest } from '../declarations/DeliveryCoordinateRequest.js';
export type { DeliveryQuoteChoiceGroupResource } from '../declarations/DeliveryQuoteChoiceGroupResource.js';
export type { DeliveryCandidateOutcomeResource } from '../declarations/DeliveryCandidateOutcomeResource.js';
export type { DeliveryAddressAdvisoryResource } from '../declarations/DeliveryAddressAdvisoryResource.js';
export type { DeliveryAddressRequest } from '../declarations/DeliveryAddressRequest.js';
export type { DeliveryInputRequirement } from '../declarations/DeliveryInputRequirement.js';
export type { DeliveryInputConstraint } from '../declarations/DeliveryInputConstraint.js';
export type { DeliveryWindowResource } from '../declarations/DeliveryWindowResource.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { DeliveryOptionProjection } from '../declarations/DeliveryOptionProjection.js';
export type { DeliveryArrivalEstimate } from '../declarations/DeliveryArrivalEstimate.js';
export type { BuyerInstructionsConfig } from '../declarations/BuyerInstructionsConfig.js';
export type { DeliveryPlan } from '../declarations/DeliveryPlan.js';
export type { DeliveryQuoteExecutionLegResource } from '../declarations/DeliveryQuoteExecutionLegResource.js';
export type { DeliveryShipmentDetails } from '../declarations/DeliveryShipmentDetails.js';
export type { DeliveryPickupDetails } from '../declarations/DeliveryPickupDetails.js';
export type { DeliveryLocationSummaryResource } from '../declarations/DeliveryLocationSummaryResource.js';
export type { DeliveryRecipientRequirement } from '../declarations/DeliveryRecipientRequirement.js';
export type { DeliveryQuoteLineItemResource } from '../declarations/DeliveryQuoteLineItemResource.js';
export type { DeliveryMerchantDiagnostic } from '../declarations/DeliveryMerchantDiagnostic.js';
export type { DeliveryEligibilityMismatch } from '../declarations/DeliveryEligibilityMismatch.js';
export type { DeliveryQuoteMethodResource } from '../declarations/DeliveryQuoteMethodResource.js';
export type { DeliveryPendingCallerRateRequest } from '../declarations/DeliveryPendingCallerRateRequest.js';
export { makeDeliveryQuoteListResponse } from '../declarations/makeDeliveryQuoteListResponse.js';
export { makeDeliveryQuote } from '../declarations/makeDeliveryQuote.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeDeliveryBuyerLocationResource } from '../declarations/makeDeliveryBuyerLocationResource.js';
export { makeDeliveryAddressResource } from '../declarations/makeDeliveryAddressResource.js';
export { makeDeliveryCoordinateRequest } from '../declarations/makeDeliveryCoordinateRequest.js';
export { makeDeliveryQuoteChoiceGroupResource } from '../declarations/makeDeliveryQuoteChoiceGroupResource.js';
export { makeDeliveryCandidateOutcomeResource } from '../declarations/makeDeliveryCandidateOutcomeResource.js';
export { makeDeliveryAddressAdvisoryResource } from '../declarations/makeDeliveryAddressAdvisoryResource.js';
export { makeDeliveryAddressRequest } from '../declarations/makeDeliveryAddressRequest.js';
export { makeDeliveryInputRequirement } from '../declarations/makeDeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../declarations/makeDeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../declarations/makeDeliveryWindowResource.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeDeliveryOptionProjection } from '../declarations/makeDeliveryOptionProjection.js';
export { makeDeliveryArrivalEstimate } from '../declarations/makeDeliveryArrivalEstimate.js';
export { makeBuyerInstructionsConfig } from '../declarations/makeBuyerInstructionsConfig.js';
export { makeDeliveryPlan } from '../declarations/makeDeliveryPlan.js';
export { makeDeliveryQuoteExecutionLegResource } from '../declarations/makeDeliveryQuoteExecutionLegResource.js';
export { makeDeliveryShipmentDetails } from '../declarations/makeDeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../declarations/makeDeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../declarations/makeDeliveryLocationSummaryResource.js';
export { makeDeliveryRecipientRequirement } from '../declarations/makeDeliveryRecipientRequirement.js';
export { makeDeliveryQuoteLineItemResource } from '../declarations/makeDeliveryQuoteLineItemResource.js';
export { makeDeliveryMerchantDiagnostic } from '../declarations/makeDeliveryMerchantDiagnostic.js';
export { makeDeliveryEligibilityMismatch } from '../declarations/makeDeliveryEligibilityMismatch.js';
export { makeDeliveryQuoteMethodResource } from '../declarations/makeDeliveryQuoteMethodResource.js';
export { makeDeliveryPendingCallerRateRequest } from '../declarations/makeDeliveryPendingCallerRateRequest.js';
