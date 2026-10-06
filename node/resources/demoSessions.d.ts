export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { DemoSessionResponse } from '../declarations/DemoSessionResponse.js';
import type { DemoSessionsCreateInput } from '../declarations/DemoSessionsCreateInput.js';
import type { DemoSessionsCreateResponse } from '../declarations/DemoSessionsCreateResponse.js';
import type { DemoSessionsResetInput } from '../declarations/DemoSessionsResetInput.js';
import type { DemoSessionsResetResponse } from '../declarations/DemoSessionsResetResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DemoSessionsResource {
    /**
 * Creates a temporary demo sandbox and returns a short-lived test API key. The secret key is displayed only at creation time and for a short idempotent retry window.
 * POST /v1/demo-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.demoSessions.create({}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "template"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Turnstile-Token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<never>): Promise<_SdkPayloadAt<DemoSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "template"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Turnstile-Token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<never>): Promise<SdkResponse<DemoSessionsCreateResponse>>;
    /**
 * Ends the caller's current demo sandbox (if any) and provisions a fresh one, returning a new temporary API key. Useful when the original one-time secret was lost. Subject to the same per-client email failure limit as creation.
 * POST /v1/demo-sessions/reset
 * @example
 * client.demoSessions.reset({})
 */
    reset(params: (InputValue<{ "template"?: string; }>) & { "X-Turnstile-Token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<_SdkPayloadAt<DemoSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resetWithResponse(params: (InputValue<{ "template"?: string; }>) & { "X-Turnstile-Token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<SdkResponse<DemoSessionsResetResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly demoSessions: DemoSessionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DemoSessionResponse } from '../declarations/DemoSessionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DemoSessionsCreateResponse } from '../declarations/DemoSessionsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { DemoSessionsResetResponse } from '../declarations/DemoSessionsResetResponse.js';
export type { DemoSessionsCreateInput } from '../declarations/DemoSessionsCreateInput.js';
export type { DemoSessionsResetInput } from '../declarations/DemoSessionsResetInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { DemoSession } from '../declarations/DemoSession.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CreateDemoSessionRequestInput } from '../declarations/CreateDemoSessionRequestInput.js';
export { makeDemoSessionResponse } from '../declarations/makeDemoSessionResponse.js';
export { makeDemoSession } from '../declarations/makeDemoSession.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
