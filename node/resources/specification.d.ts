import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SpecificationGetInput, SpecificationGetResponse } from '../declarations/types-44.js';
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
export type { SpecificationGetResponse, SpecificationGetInput } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { CancelPayoutRequest } from '../declarations/types-3.js';
export { makeCancelPayoutRequest } from '../declarations/types-62.js';
export interface SpecificationResource {
    /**
 * Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.
 * @see reference/specification.md#specificationget
 * GET /v1/openapi.json
 * @example
 * client.specification.get()
 */
    get(params?: {
        "version"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<Result<SpecificationGetResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly specification: SpecificationResource;
}
