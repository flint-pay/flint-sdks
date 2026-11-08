import type { Result } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { OpenapiGetSpecParams, OpenapiGetSpecResponse } from '../declarations/types-38.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
export type { OpenapiGetSpecParams, OpenapiGetSpecResponse } from '../declarations/types-38.js';
export type { _SdkWithoutIdempotency, WebhookPreviousAttributes } from '../declarations/types-66.js';
export type { RequestOptions } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export interface OpenapiResource {
    /**
 * Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.
 * The document describes one API version: the `version` query parameter if you send it, otherwise
 * the `Flint-Version` header, otherwise Flint's current version. The route takes no credential.
 * The body is gzip-compressed when the request's `Accept-Encoding` header accepts gzip.
 *
 * `GET /v1/openapi.json`
 * @see https://developers.withflintpay.com/docs/api/openapi#getOpenAPISpec
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.openapi.getSpec()
 */
    getSpec(params?: OpenapiGetSpecParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<Result<OpenapiGetSpecResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly openapi: OpenapiResource;
}
