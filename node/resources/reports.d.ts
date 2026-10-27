import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateReportRequestInput } from '../declarations/types-8.js';
import type { Report, ReportListResponse, ReportResponse } from '../declarations/types-39.js';
import type { ReportsCreateInput, ReportsGetInput, ReportsListInput, RequestOptions } from '../declarations/types-40.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreateReportRequestInput } from '../declarations/types-8.js';
export type {
    RequestOptions,
    ReportsCreateInput,
    ReportsGetInput,
    ReportsListInput,
    ReportSucceeded,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-40.js';
export type { Report, ReportResponse, ReportListResponse, ReportPending, ReportFailed } from '../declarations/types-39.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { PublicDownload } from '../declarations/types-38.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateReportRequest } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface ReportsResource {
    /**
 * Creates an idempotent asynchronous CSV report. interval_end_at may be at most the same local
 * time 366 calendar days after interval_start_at in timezone, and must not be in the future. Poll
 * the returned report until it succeeds or fails.
 * @see reference/reports.md#reportscreate
 * POST /v1/reports
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.reports.create({currency: "USD", interval_end_at: "2026-01-02T00:00:00Z",
 * interval_start_at: "2026-01-01T00:00:00Z", report_type: "orders_itemized_v1"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateReportRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Report>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/reports.md#reportscreate
     */
    createWithResponse(params: (InputValue<CreateReportRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<ReportResponse>>;
    /**
 * Returns one report and its terminal download or failure details when available.
 * @see reference/reports.md#reportsget
 * GET /v1/reports/{report_id}
 * @example
 * client.reports.get("example")
 */
    get(report_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Report>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/reports.md#reportsget
     */
    getWithResponse(report_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ReportResponse>>;
    /** Poll until a declared terminal state or deadline.
     * @see reference/reports.md#reportsget
     */
    getWait(report_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Report>;
    /** Poll for completion and return the full body with HTTP metadata.
     * @see reference/reports.md#reportsget
     */
    getWaitWithResponse(report_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ReportResponse>>;
    /**
 * Lists reports newest first by created_at, with report_id descending as the tiebreak, using
 * opaque pagination.
 * @see reference/reports.md#reportslist
 * GET /v1/reports
 * @example
 * client.reports.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "report_type"?: InputValue<Array<"gift_card_liability_v1"
            | "orders_itemized_v1"
            | "orders_itemized_v2"
            | "payments_itemized_v1"
            | "balance_transactions_itemized_v1"
            | "payouts_itemized_v1"
            | "tax_itemized_v1"
            | "tax_summarized_v1"
            | "merchant_billing_itemized_v1"
            | "tax_transactions_itemized_v1">>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ReportListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/reports.md#reportslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "report_type"?: InputValue<Array<"gift_card_liability_v1"
            | "orders_itemized_v1"
            | "orders_itemized_v2"
            | "payments_itemized_v1"
            | "balance_transactions_itemized_v1"
            | "payouts_itemized_v1"
            | "tax_itemized_v1"
            | "tax_summarized_v1"
            | "merchant_billing_itemized_v1"
            | "tax_transactions_itemized_v1">>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ReportListResponse>>;
    /** Iterate pages lazily.
     * @see reference/reports.md#reportslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "report_type"?: InputValue<Array<"gift_card_liability_v1"
            | "orders_itemized_v1"
            | "orders_itemized_v2"
            | "payments_itemized_v1"
            | "balance_transactions_itemized_v1"
            | "payouts_itemized_v1"
            | "tax_itemized_v1"
            | "tax_summarized_v1"
            | "merchant_billing_itemized_v1"
            | "tax_transactions_itemized_v1">>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReportListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/reports.md#reportslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "report_type"?: InputValue<Array<"gift_card_liability_v1"
            | "orders_itemized_v1"
            | "orders_itemized_v2"
            | "payments_itemized_v1"
            | "balance_transactions_itemized_v1"
            | "payouts_itemized_v1"
            | "tax_itemized_v1"
            | "tax_summarized_v1"
            | "merchant_billing_itemized_v1"
            | "tax_transactions_itemized_v1">>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ReportListResponse>>;
    /** Iterate items lazily.
     * @see reference/reports.md#reportslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "report_type"?: InputValue<Array<"gift_card_liability_v1"
            | "orders_itemized_v1"
            | "orders_itemized_v2"
            | "payments_itemized_v1"
            | "balance_transactions_itemized_v1"
            | "payouts_itemized_v1"
            | "tax_itemized_v1"
            | "tax_summarized_v1"
            | "merchant_billing_itemized_v1"
            | "tax_transactions_itemized_v1">>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Report>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly reports: ReportsResource;
}
