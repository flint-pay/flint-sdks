export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { Report } from '../declarations/Report.js';
import type { ReportListResponse } from '../declarations/ReportListResponse.js';
import type { ReportResponse } from '../declarations/ReportResponse.js';
import type { ReportsCreateInput } from '../declarations/ReportsCreateInput.js';
import type { ReportsCreateResponse } from '../declarations/ReportsCreateResponse.js';
import type { ReportsGetInput } from '../declarations/ReportsGetInput.js';
import type { ReportsGetResponse } from '../declarations/ReportsGetResponse.js';
import type { ReportsListInput } from '../declarations/ReportsListInput.js';
import type { ReportsListResponse } from '../declarations/ReportsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReportsResource {
    /**
 * Creates an idempotent asynchronous CSV report. Poll the returned report until it succeeds or fails.
 * POST /v1/reports
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.reports.create({currency: "USD", interval_end_at: "2026-01-02T00:00:00Z", interval_start_at: "2026-01-01T00:00:00Z", report_type: "orders_itemized_v1", "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "currency": string; "interval_end_at": string | globalThis.Date; "interval_start_at": string | globalThis.Date; "report_type": "orders_itemized_v1" | "payments_itemized_v1" | "balance_transactions_itemized_v1" | "payouts_itemized_v1" | "tax_itemized_v1" | "tax_summarized_v1" | "merchant_billing_itemized_v1" | "tax_transactions_itemized_v1"; "timezone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ReportResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "currency": string; "interval_end_at": string | globalThis.Date; "interval_start_at": string | globalThis.Date; "report_type": "orders_itemized_v1" | "payments_itemized_v1" | "balance_transactions_itemized_v1" | "payouts_itemized_v1" | "tax_itemized_v1" | "tax_summarized_v1" | "merchant_billing_itemized_v1" | "tax_transactions_itemized_v1"; "timezone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReportsCreateResponse>>;
    /**
 * Returns one report and its terminal download or failure details when available.
 * GET /v1/reports/{report_id}
 * @example
 * client.reports.get("example", {})
 */
    get(report_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ReportResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(report_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReportsGetResponse>>;
    getWait(report_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ReportResponse, ["data"]>>;
    getWaitWithResponse(report_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReportsGetResponse>>;
    /**
 * Lists reports in descending creation order using opaque pagination.
 * GET /v1/reports
 * @example
 * client.reports.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ReportListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReportsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReportListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReportsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Report>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly reports: ReportsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { ReportResponse } from '../declarations/ReportResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReportsCreateResponse } from '../declarations/ReportsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ReportsGetResponse } from '../declarations/ReportsGetResponse.js';
export type { ReportListResponse } from '../declarations/ReportListResponse.js';
export type { ReportsListResponse } from '../declarations/ReportsListResponse.js';
export type { Report } from '../declarations/Report.js';
export type { ReportsCreateInput } from '../declarations/ReportsCreateInput.js';
export type { ReportsGetInput } from '../declarations/ReportsGetInput.js';
export type { ReportsListInput } from '../declarations/ReportsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CreateReportRequestInput } from '../declarations/CreateReportRequestInput.js';
export { makeReportResponse } from '../declarations/makeReportResponse.js';
export { makeReportListResponse } from '../declarations/makeReportListResponse.js';
export { makeReport } from '../declarations/makeReport.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
