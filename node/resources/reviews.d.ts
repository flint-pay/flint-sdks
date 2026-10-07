export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { Review } from '../declarations/Review.js';
import type { ReviewListResponse } from '../declarations/ReviewListResponse.js';
import type { ReviewResponse } from '../declarations/ReviewResponse.js';
import type { ReviewsApproveInput } from '../declarations/ReviewsApproveInput.js';
import type { ReviewsApproveResponse } from '../declarations/ReviewsApproveResponse.js';
import type { ReviewsDeclineInput } from '../declarations/ReviewsDeclineInput.js';
import type { ReviewsDeclineResponse } from '../declarations/ReviewsDeclineResponse.js';
import type { ReviewsGetInput } from '../declarations/ReviewsGetInput.js';
import type { ReviewsGetResponse } from '../declarations/ReviewsGetResponse.js';
import type { ReviewsListInput } from '../declarations/ReviewsListInput.js';
import type { ReviewsListResponse } from '../declarations/ReviewsListResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReviewsResource {
    /**
 * Approve a payment review for the authenticated merchant environment.
 * POST /v1/reviews/{review_id}/approve
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.reviews.approve("example", {}, { idempotencyKey: idempotencyKey })
 */
    approve(review_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ReviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    approveWithResponse(review_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReviewsApproveResponse>>;
    /**
 * Decline a payment review for the authenticated merchant environment.
 * POST /v1/reviews/{review_id}/decline
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.reviews.decline("example", undefined, { idempotencyKey: idempotencyKey })
 */
    decline(review_id: InputValue<string>, params?: (InputValue<{ "add_to_block_list"?: boolean; }> | { "add_to_block_list"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ReviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    declineWithResponse(review_id: InputValue<string>, params?: (InputValue<{ "add_to_block_list"?: boolean; }> | { "add_to_block_list"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReviewsDeclineResponse>>;
    /**
 * Get a payment review for the authenticated merchant environment.
 * GET /v1/reviews/{review_id}
 * @example
 * client.reviews.get("example")
 */
    get(review_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ReviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(review_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReviewsGetResponse>>;
    /**
 * List payment reviews for the authenticated merchant environment.
 * GET /v1/reviews
 * @example
 * client.reviews.list()
 */
    list(params?: { "status"?: InputValue<Array<"open" | "resolving" | "closed">>; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ReviewListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "status"?: InputValue<Array<"open" | "resolving" | "closed">>; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReviewsListResponse>>;
    listPages(params?: { "status"?: InputValue<Array<"open" | "resolving" | "closed">>; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReviewListResponse>;
    listPagesWithResponse(params?: { "status"?: InputValue<Array<"open" | "resolving" | "closed">>; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReviewsListResponse>>;
    listItems(params?: { "status"?: InputValue<Array<"open" | "resolving" | "closed">>; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Review>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly reviews: ReviewsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { ReviewResponse } from '../declarations/ReviewResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReviewsApproveResponse } from '../declarations/ReviewsApproveResponse.js';
export type { ReviewsDeclineResponse } from '../declarations/ReviewsDeclineResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ReviewsGetResponse } from '../declarations/ReviewsGetResponse.js';
export type { ReviewListResponse } from '../declarations/ReviewListResponse.js';
export type { ReviewsListResponse } from '../declarations/ReviewsListResponse.js';
export type { Review } from '../declarations/Review.js';
export type { ReviewsApproveInput } from '../declarations/ReviewsApproveInput.js';
export type { ReviewsDeclineInput } from '../declarations/ReviewsDeclineInput.js';
export type { ReviewsGetInput } from '../declarations/ReviewsGetInput.js';
export type { ReviewsListInput } from '../declarations/ReviewsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export type { PublicRiskPaymentSummary } from '../declarations/PublicRiskPaymentSummary.js';
export type { PublicReviewRisk } from '../declarations/PublicReviewRisk.js';
export type { DeclineReviewRequestInput } from '../declarations/DeclineReviewRequestInput.js';
export { makeReviewResponse } from '../declarations/makeReviewResponse.js';
export { makeReviewListResponse } from '../declarations/makeReviewListResponse.js';
export { makeReview } from '../declarations/makeReview.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
export { makePublicRiskPaymentSummary } from '../declarations/makePublicRiskPaymentSummary.js';
export { makePublicReviewRisk } from '../declarations/makePublicReviewRisk.js';
