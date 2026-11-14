import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    FeedbackReport,
    FeedbackReportListResponse,
    FeedbackReportResponse,
    FeedbackReportsCreateParams,
    FeedbackReportsGetParams,
    FeedbackReportsListParams
} from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    FeedbackReportsCreateParams,
    FeedbackReport,
    FeedbackReportResponse,
    FeedbackReportsGetParams,
    FeedbackReportsListParams,
    FeedbackReportListResponse,
    FeedbackReportingClientRequestInput,
    FeedbackReportingClient,
    FeedbackReportRating,
    FeedbackReportNarrative
} from '../declarations/types-24.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions, CheckoutSessionsListCustomerVerificationsParams } from '../declarations/types-6.js';
export type {
    CreateFeedbackReportRequestInput,
    CreateFeedbackReportRatingInput,
    CreateFeedbackReportNarrativeInput
} from '../declarations/types-9.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export {
    makeCreateFeedbackReportNarrative,
    makeCreateFeedbackReportRating,
    makeCreateFeedbackReportRequest
} from '../declarations/types-73.js';
export { makeFeedbackReportingClientRequest } from '../declarations/types-77.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export interface FeedbackReportsResource {
    /**
 * Stores one immutable occurrence of Flint feedback. Use one report per root cause and include
 * only the evidence needed to describe Flint's behavior.
 *
 * `POST /v1/feedback-reports`
 * @see https://developers.withflintpay.com/docs/api/feedback-reports#createFeedbackReport
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.feedbackReports.create({kind: "feature_request", reporter_kind: "human", summary: "Show
 * the remaining credit before a refund", surface: "api"}, { idempotencyKey: idempotencyKey })
 */
    create(params: FeedbackReportsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<FeedbackReport, FeedbackReportResponse>>;
    /**
 * Returns one immutable feedback report in the credential's merchant and environment.
 *
 * `GET /v1/feedback-reports/{feedback_report_id}`
 * @param feedback_report_id Flint feedback report ID.
 * @see https://developers.withflintpay.com/docs/api/feedback-reports#getFeedbackReport
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.feedbackReports.get("fbr_01KEZF7C00CFKWW2MH94F39D7B")
 */
    get(feedback_report_id: InputValue<string>, params?: FeedbackReportsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FeedbackReport, FeedbackReportResponse>>;
    /**
 * Lists feedback reports in descending creation order for the credential's merchant and
 * environment. Default order: created_at descending, then feedback_report_id descending.
 *
 * `GET /v1/feedback-reports`
 * @see https://developers.withflintpay.com/docs/api/feedback-reports#listFeedbackReports
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.feedbackReports.list()
 */
    list(params?: FeedbackReportsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FeedbackReportListResponse, FeedbackReportListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/feedback-reports#listFeedbackReports
     */
    listPages(params?: FeedbackReportsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<FeedbackReportListResponse, FeedbackReportListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/feedback-reports#listFeedbackReports
     */
    listItems(params?: FeedbackReportsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FeedbackReport>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly feedbackReports: FeedbackReportsResource;
}
