export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { ReportDownloadsGetInput } from '../declarations/ReportDownloadsGetInput.js';
import type { ReportDownloadsGetResponse } from '../declarations/ReportDownloadsGetResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReportDownloadsResource {
    /**
 * Authorizes the stable Flint download URL and redirects to a short-lived private file URL.
 * GET /v1/report-downloads/{report_download_id}
 * @example
 * client.reportDownloads.get("example", {})
 */
    get(report_download_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<Result<ReportDownloadsGetResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly reportDownloads: ReportDownloadsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { ReportDownloadsGetResponse } from '../declarations/ReportDownloadsGetResponse.js';
export type { ReportDownloadsGetInput } from '../declarations/ReportDownloadsGetInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
