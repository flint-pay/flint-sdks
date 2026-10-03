export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { DeliveryRevocationResponse } from '../declarations/DeliveryRevocationResponse.js';
import type { DeliveryRevocationTargetInput } from '../declarations/DeliveryRevocationTargetInput.js';
import type { DeliveryRevocationsGetInput } from '../declarations/DeliveryRevocationsGetInput.js';
import type { DeliveryRevocationsGetResponse } from '../declarations/DeliveryRevocationsGetResponse.js';
import type { DeliveryRevocationsRevokeDeliveryDependencyInput } from '../declarations/DeliveryRevocationsRevokeDeliveryDependencyInput.js';
import type { DeliveryRevocationsRevokeDeliveryDependencyResponse } from '../declarations/DeliveryRevocationsRevokeDeliveryDependencyResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DeliveryRevocationsResource {
    /**
 * Returns one permanent delivery revocation and its estimated impact at creation time.
 * GET /v1/delivery-revocations/{delivery_revocation_id}
 * @example
 * client.deliveryRevocations.get("example")
 */
    get(delivery_revocation_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeliveryRevocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(delivery_revocation_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryRevocationsGetResponse>>;
    /**
 * Permanently fences one exact method, endpoint, signing key, revision, or Location geography version. Issued quotes are revoked immediately. Current selections are released the next time they are read. Stable method and callback-endpoint targets require expected_version so a concurrent publication cannot broaden the revocation.
 * POST /v1/delivery-revocations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRevocations.revokeDeliveryDependency({reason: "unsafe_configuration", target: {target_type: "location_geography", location_id: "example", location_geography_revision: "100"}}, { idempotencyKey: idempotencyKey })
 */
    revokeDeliveryDependency(params: (InputValue<{ "merchant_note"?: string; "reason": "unsafe_configuration" | "location_unavailable" | "credential_compromise" | "legal_requirement" | "other"; "target": DeliveryRevocationTargetInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryRevocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    revokeDeliveryDependencyWithResponse(params: (InputValue<{ "merchant_note"?: string; "reason": "unsafe_configuration" | "location_unavailable" | "credential_compromise" | "legal_requirement" | "other"; "target": DeliveryRevocationTargetInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryRevocationsRevokeDeliveryDependencyResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly deliveryRevocations: DeliveryRevocationsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DeliveryRevocationResponse } from '../declarations/DeliveryRevocationResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DeliveryRevocationsGetResponse } from '../declarations/DeliveryRevocationsGetResponse.js';
export type { DeliveryRevocationTargetInput } from '../declarations/DeliveryRevocationTargetInput.js';
export type { DeliveryRevocationsRevokeDeliveryDependencyResponse } from '../declarations/DeliveryRevocationsRevokeDeliveryDependencyResponse.js';
export type { DeliveryRevocationsGetInput } from '../declarations/DeliveryRevocationsGetInput.js';
export type { DeliveryRevocationsRevokeDeliveryDependencyInput } from '../declarations/DeliveryRevocationsRevokeDeliveryDependencyInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { DeliveryRevocation } from '../declarations/DeliveryRevocation.js';
export type { DeliveryRevocationImpact } from '../declarations/DeliveryRevocationImpact.js';
export type { DeliveryRevocationTarget } from '../declarations/DeliveryRevocationTarget.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { RevokeDeliveryDependencyRequestInput } from '../declarations/RevokeDeliveryDependencyRequestInput.js';
export { makeDeliveryRevocationResponse } from '../declarations/makeDeliveryRevocationResponse.js';
export { makeDeliveryRevocation } from '../declarations/makeDeliveryRevocation.js';
export { makeDeliveryRevocationImpact } from '../declarations/makeDeliveryRevocationImpact.js';
export { makeDeliveryRevocationTarget } from '../declarations/makeDeliveryRevocationTarget.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
