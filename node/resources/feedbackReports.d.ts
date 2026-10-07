export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { FeedbackReport } from '../declarations/FeedbackReport.js';
import type { FeedbackReportListResponse } from '../declarations/FeedbackReportListResponse.js';
import type { FeedbackReportResponse } from '../declarations/FeedbackReportResponse.js';
import type { FeedbackReportingClientInput } from '../declarations/FeedbackReportingClientInput.js';
import type { FeedbackReportsCreateInput } from '../declarations/FeedbackReportsCreateInput.js';
import type { FeedbackReportsCreateResponse } from '../declarations/FeedbackReportsCreateResponse.js';
import type { FeedbackReportsGetInput } from '../declarations/FeedbackReportsGetInput.js';
import type { FeedbackReportsGetResponse } from '../declarations/FeedbackReportsGetResponse.js';
import type { FeedbackReportsListInput } from '../declarations/FeedbackReportsListInput.js';
import type { FeedbackReportsListResponse } from '../declarations/FeedbackReportsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface FeedbackReportsResource {
    /**
 * Stores one immutable occurrence of Flint feedback. Use one report per root cause and include only the evidence needed to describe Flint's behavior.
 * POST /v1/feedback-reports
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.feedbackReports.create({kind: "rating", surface: "api", sentiment: "positive"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<({ "actual_behavior"?: string; "canonical_command"?: string; "code_location"?: string; "component"?: string; "description"?: string; "expected_behavior"?: string; "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other"; "related_request_id"?: string; "related_resource_ids"?: Array<string>; "reporter_kind"?: "human" | "ai_agent"; "reporting_client"?: FeedbackReportingClientInput; "reproduction_steps"?: Array<string>; "sentiment"?: "positive" | "negative" | "neutral"; "summary"?: string; "surface": "api" | "cli" | "mcp" | "sdk" | "docs" | "dashboard" | "checkout" | "payment_links" | "webhooks" | "onboarding" | "mobile" | "other"; "surface_route"?: string; }) & (({ "kind": "rating"; "surface": unknown; "sentiment": unknown; }) | ({ "kind": "papercut" | "bug" | "feature_request" | "praise" | "other"; "surface": unknown; "summary": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<FeedbackReportResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "actual_behavior"?: string; "canonical_command"?: string; "code_location"?: string; "component"?: string; "description"?: string; "expected_behavior"?: string; "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other"; "related_request_id"?: string; "related_resource_ids"?: Array<string>; "reporter_kind"?: "human" | "ai_agent"; "reporting_client"?: FeedbackReportingClientInput; "reproduction_steps"?: Array<string>; "sentiment"?: "positive" | "negative" | "neutral"; "summary"?: string; "surface": "api" | "cli" | "mcp" | "sdk" | "docs" | "dashboard" | "checkout" | "payment_links" | "webhooks" | "onboarding" | "mobile" | "other"; "surface_route"?: string; }) & (({ "kind": "rating"; "surface": unknown; "sentiment": unknown; }) | ({ "kind": "papercut" | "bug" | "feature_request" | "praise" | "other"; "surface": unknown; "summary": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<FeedbackReportsCreateResponse>>;
    /**
 * Returns one immutable feedback report in the credential's merchant and environment.
 * GET /v1/feedback-reports/{feedback_report_id}
 * @example
 * client.feedbackReports.get("example")
 */
    get(feedback_report_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<FeedbackReportResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(feedback_report_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FeedbackReportsGetResponse>>;
    /**
 * Lists feedback reports in descending creation order for the credential's merchant and environment.
 * GET /v1/feedback-reports
 * @example
 * client.feedbackReports.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<FeedbackReportListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FeedbackReportsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FeedbackReportListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<FeedbackReportsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FeedbackReport>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly feedbackReports: FeedbackReportsResource;
}
export type { FeedbackReportingClientInput } from '../declarations/FeedbackReportingClientInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { FeedbackReportResponse } from '../declarations/FeedbackReportResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { FeedbackReportsCreateResponse } from '../declarations/FeedbackReportsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { FeedbackReportsGetResponse } from '../declarations/FeedbackReportsGetResponse.js';
export type { FeedbackReportListResponse } from '../declarations/FeedbackReportListResponse.js';
export type { FeedbackReportsListResponse } from '../declarations/FeedbackReportsListResponse.js';
export type { FeedbackReport } from '../declarations/FeedbackReport.js';
export type { FeedbackReportsCreateInput } from '../declarations/FeedbackReportsCreateInput.js';
export type { FeedbackReportsGetInput } from '../declarations/FeedbackReportsGetInput.js';
export type { FeedbackReportsListInput } from '../declarations/FeedbackReportsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { FeedbackReportingClient } from '../declarations/FeedbackReportingClient.js';
export type { CreateFeedbackReportRequestInput } from '../declarations/CreateFeedbackReportRequestInput.js';
export { makeFeedbackReportResponse } from '../declarations/makeFeedbackReportResponse.js';
export { makeFeedbackReportListResponse } from '../declarations/makeFeedbackReportListResponse.js';
export { makeFeedbackReport } from '../declarations/makeFeedbackReport.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeFeedbackReportingClient } from '../declarations/makeFeedbackReportingClient.js';
