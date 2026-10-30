import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { PaymentReview, PaymentReviewListResponse } from '../declarations/types-42.js';
import type {
    PaymentReviewResponse,
    PaymentReviewsApproveParams,
    PaymentReviewsDeclineParams,
    PaymentReviewsGetParams,
    PaymentReviewsListParams
} from '../declarations/types-43.js';
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
    PaymentReviewsApproveParams,
    PaymentReviewResponse,
    PaymentReviewsDeclineParams,
    PaymentReviewsGetParams,
    PaymentReviewsListParams,
    PaymentReviewResolutionFailure,
    PricingAmounts,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentReviewPaymentSummary,
    PaymentReviewRisk
} from '../declarations/types-43.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { PaymentReview, PaymentReviewListResponse } from '../declarations/types-42.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from '../declarations/types-21.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { SettlementAmounts } from '../declarations/types-53.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { DeclinePaymentReviewRequestInput, DeclinePaymentReviewRequest } from '../declarations/types-14.js';
export { makeDeclinePaymentReviewRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface PaymentReviewsResource {
    /**
 * Approves the payment and closes the review with `closed_reason: approved`. Approving never
 * captures: capture a manual-capture payment yourself before `authorization_expires_at`. Approving
 * a review you already approved returns it unchanged.
 *
 * `POST /v1/payment-reviews/{payment_review_id}/approve`
 * @param payment_review_id Flint payment review ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#approvePaymentReview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentReviews.approve("rev_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    approve(payment_review_id: InputValue<string>, params?: PaymentReviewsApproveParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentReview, PaymentReviewResponse>>;
    /**
 * Declines the payment and closes the review with `closed_reason: declined`. Flint cancels an
 * uncaptured authorization, or refunds the remaining captured amount (captured minus earlier
 * refunds) to the original payment method with reason `fraudulent`. Returns `200` when the review
 * is closed, or when the refund already failed and the review is `open` again with
 * `last_resolution_failure` set. Returns `202` while the refund is processing; wait for
 * `payment_review.closed` or `payment_review.reopened`.
 *
 * `POST /v1/payment-reviews/{payment_review_id}/decline`
 * @param payment_review_id Flint payment review ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#declinePaymentReview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentReviews.decline("rev_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    decline(payment_review_id: InputValue<string>, params?: PaymentReviewsDeclineParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentReview, PaymentReviewResponse>>;
    /**
 * Retrieves a payment review. Expand `payment_intent`, `order`, or `customer` to include them.
 *
 * `GET /v1/payment-reviews/{payment_review_id}`
 * @param payment_review_id Flint payment review ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#getPaymentReview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentReviews.get("rev_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(payment_review_id: InputValue<string>, params?: PaymentReviewsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentReview, PaymentReviewResponse>>;
    /**
 * Lists payment reviews, most recently opened first. A review opens when a `review` rule matches a
 * payment the bank approved. Every status is included unless you filter by `status`. Default
 * order: opened_at descending, then payment_review_id descending.
 *
 * `GET /v1/payment-reviews`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#listPaymentReviews
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentReviews.list()
 */
    list(params?: PaymentReviewsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentReviewListResponse, PaymentReviewListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listPaymentReviews
     */
    listPages(params?: PaymentReviewsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PaymentReviewListResponse, PaymentReviewListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listPaymentReviews
     */
    listItems(params?: PaymentReviewsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentReview>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentReviews: PaymentReviewsResource;
}
