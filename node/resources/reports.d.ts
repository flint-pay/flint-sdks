import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    Report,
    ReportListResponse,
    ReportResponse,
    ReportsCreateParams,
    ReportsGetParams,
    ReportsListParams,
    RequestOptions
} from '../declarations/types-47.js';
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
    ReportsCreateParams,
    RequestOptions,
    Report,
    ReportResponse,
    ReportsGetParams,
    ReportsListParams,
    ReportListResponse,
    ReportPending,
    ReportSucceeded,
    ReportFailed
} from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateReportRequestInput } from '../declarations/types-10.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { PublicDownload, ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export { makeCreateReportRequest } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface ReportsResource {
    /**
 * Creates an idempotent asynchronous CSV report. interval_end_at may be at most the same local
 * time 366 calendar days after interval_start_at in timezone, and must not be in the future. Poll
 * the returned report until it succeeds or fails.
 *
 * `POST /v1/reports`
 * @see https://developers.withflintpay.com/docs/api/reports#createReport
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.reports.create({currency: "USD", interval_end_at: "2026-01-02T00:00:00Z",
 * interval_start_at: "2026-01-01T00:00:00Z", report_type: "orders_itemized_v1"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: ReportsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Report, ReportResponse>>;
    /**
 * Returns one report and its terminal download or failure details when available.
 *
 * `GET /v1/reports/{report_id}`
 * @param report_id Flint report ID.
 * @see https://developers.withflintpay.com/docs/api/reports#getReport
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.reports.get("rep_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(report_id: InputValue<string>, params?: ReportsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Report, ReportResponse>>;
    /** Poll until a declared terminal state or deadline.
     * @see https://developers.withflintpay.com/docs/api/reports#getReport
     */
    getWait(report_id: InputValue<string>, params?: ReportsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Report, ReportResponse>>;
    /**
 * Lists reports using opaque pagination. Default order: created_at descending, then report_id
 * descending.
 *
 * `GET /v1/reports`
 * @see https://developers.withflintpay.com/docs/api/reports#listReports
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.reports.list()
 */
    list(params?: ReportsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReportListResponse, ReportListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/reports#listReports
     */
    listPages(params?: ReportsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ReportListResponse, ReportListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/reports#listReports
     */
    listItems(params?: ReportsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Report>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly reports: ReportsResource;
}
