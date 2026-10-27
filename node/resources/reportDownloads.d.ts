import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { ReportDownloadsGetInput, ReportDownloadsGetResponse } from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-40.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions } from '../declarations/types-40.js';
export type { ReportDownloadsGetResponse, ReportDownloadsGetInput } from '../declarations/types-39.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export interface ReportDownloadsResource {
    /**
 * Authorizes the stable Flint download URL and redirects to a short-lived private file URL.
 * @see reference/reportDownloads.md#reportdownloadsget
 * GET /v1/report-downloads/{report_download_id}
 * @example
 * client.reportDownloads.get("example")
 */
    get(report_download_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Result<ReportDownloadsGetResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly reportDownloads: ReportDownloadsResource;
}
