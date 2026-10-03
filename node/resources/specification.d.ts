export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SpecificationGetInput } from '../declarations/SpecificationGetInput.js';
import type { SpecificationGetResponse } from '../declarations/SpecificationGetResponse.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface SpecificationResource {
    /**
 * Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.
 * GET /v1/openapi.json
 * @example
 * client.specification.get()
 */
    get(params?: { "version"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<Result<SpecificationGetResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly specification: SpecificationResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { SpecificationGetResponse } from '../declarations/SpecificationGetResponse.js';
export type { SpecificationGetInput } from '../declarations/SpecificationGetInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
