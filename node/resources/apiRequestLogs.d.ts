import type { WithResponseInfo, InputValue } from '../runtime.js';
import type {
    APIRequestLog,
    APIRequestLogDetail,
    APIRequestLogDetailResponse,
    APIRequestLogListResponse,
    ApiRequestLogsGetParams,
    ApiRequestLogsListParams
} from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-5.js';
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
    ApiRequestLogsGetParams,
    APIRequestLogDetail,
    APIRequestLogDetailResponse,
    ApiRequestLogsListParams,
    APIRequestLogListResponse,
    APIRequestLog,
    AuthMode,
    APIRequestLogQueryParam,
    APIRequestLogReproduction
} from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface ApiRequestLogsResource {
    /**
 * Returns one request with redacted headers, the redacted request and response bodies for write
 * routes that capture them, and a curl reproduction. Detail older than 14 days has no headers or
 * bodies.
 *
 * `GET /v1/api-request-logs/{api_request_log_id}`
 * @param api_request_log_id Flint API request log ID.
 * @see https://developers.withflintpay.com/docs/api/api-request-logs#getAPIRequestLog
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.apiRequestLogs.get("rlog_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(api_request_log_id: InputValue<string>, params?: ApiRequestLogsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<APIRequestLogDetail, APIRequestLogDetailResponse>>;
    /**
 * Returns request summaries, newest first. With developer.request_logs.read the list covers every
 * caller in the credential's environment. With developer.request_logs.self.read it covers only the
 * calling credential's requests. Headers, bodies and a reproduction are on the detail route.
 * Default order: created_at descending, then api_request_log_id descending.
 *
 * `GET /v1/api-request-logs`
 * @see https://developers.withflintpay.com/docs/api/api-request-logs#listAPIRequestLogs
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.apiRequestLogs.list()
 */
    list(params?: ApiRequestLogsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<APIRequestLogListResponse, APIRequestLogListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/api-request-logs#listAPIRequestLogs
     */
    listPages(params?: ApiRequestLogsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<APIRequestLogListResponse, APIRequestLogListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/api-request-logs#listAPIRequestLogs
     */
    listItems(params?: ApiRequestLogsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<APIRequestLog>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly apiRequestLogs: ApiRequestLogsResource;
}
