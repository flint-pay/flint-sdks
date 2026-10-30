import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { ReportDownloadsGetParams, ReportDownloadsGetResponse, RequestOptions } from '../declarations/types-47.js';
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
export type { ReportDownloadsGetParams, RequestOptions, ReportDownloadsGetResponse } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export interface ReportDownloadsResource {
    /**
 * Authorizes the stable Flint download URL and redirects to a short-lived private file URL.
 *
 * `GET /v1/report-downloads/{report_download_id}`
 * @param report_download_id Flint report download ID.
 * @see https://developers.withflintpay.com/docs/api/reports#getReportDownload
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.reportDownloads.get("rdl_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(report_download_id: InputValue<string>, params?: ReportDownloadsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Result<ReportDownloadsGetResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly reportDownloads: ReportDownloadsResource;
}
