import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateFeedbackReportRequestInput } from '../declarations/types-6.js';
import type {
    FeedbackReport,
    FeedbackReportListResponse,
    FeedbackReportResponse,
    FeedbackReportsCreateInput,
    FeedbackReportsGetInput,
    FeedbackReportsListInput
} from '../declarations/types-17.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type {
    CreateFeedbackReportRequestInput,
    CreateFeedbackReportRatingInput,
    CreateFeedbackReportNarrativeInput
} from '../declarations/types-6.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    FeedbackReport,
    FeedbackReportResponse,
    FeedbackReportListResponse,
    FeedbackReportsCreateInput,
    FeedbackReportsGetInput,
    FeedbackReportsListInput,
    FeedbackReportingClientInput,
    FeedbackReportingClient,
    FeedbackReportRating,
    FeedbackReportNarrative
} from '../declarations/types-17.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export {
    makeCreateFeedbackReportNarrative,
    makeCreateFeedbackReportRating,
    makeCreateFeedbackReportRequest
} from '../declarations/types-63.js';
export { makeFeedbackReportingClient } from '../declarations/types-66.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface FeedbackReportsResource {
    /**
 * Stores one immutable occurrence of Flint feedback. Use one report per root cause and include
 * only the evidence needed to describe Flint's behavior.
 * @see reference/feedbackReports.md#feedbackreportscreate
 * POST /v1/feedback-reports
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.feedbackReports.create({kind: "rating", surface: "api", sentiment: "positive"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateFeedbackReportRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<FeedbackReport>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/feedbackReports.md#feedbackreportscreate
     */
    createWithResponse(params: (InputValue<CreateFeedbackReportRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<FeedbackReportResponse>>;
    /**
 * Returns one immutable feedback report in the credential's merchant and environment.
 * @see reference/feedbackReports.md#feedbackreportsget
 * GET /v1/feedback-reports/{feedback_report_id}
 * @example
 * client.feedbackReports.get("example")
 */
    get(feedback_report_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<FeedbackReport>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/feedbackReports.md#feedbackreportsget
     */
    getWithResponse(feedback_report_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<FeedbackReportResponse>>;
    /**
 * Lists feedback reports in descending creation order for the credential's merchant and
 * environment.
 * @see reference/feedbackReports.md#feedbackreportslist
 * GET /v1/feedback-reports
 * @example
 * client.feedbackReports.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<FeedbackReportListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/feedbackReports.md#feedbackreportslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<FeedbackReportListResponse>>;
    /** Iterate pages lazily.
     * @see reference/feedbackReports.md#feedbackreportslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FeedbackReportListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/feedbackReports.md#feedbackreportslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<FeedbackReportListResponse>>;
    /** Iterate items lazily.
     * @see reference/feedbackReports.md#feedbackreportslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FeedbackReport>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly feedbackReports: FeedbackReportsResource;
}
