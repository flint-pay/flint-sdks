export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { DeliveryProfile } from '../declarations/DeliveryProfile.js';
import type { DeliveryProfileAssignmentResponse } from '../declarations/DeliveryProfileAssignmentResponse.js';
import type { DeliveryProfileConfigurationRequestInput } from '../declarations/DeliveryProfileConfigurationRequestInput.js';
import type { DeliveryProfileListResponse } from '../declarations/DeliveryProfileListResponse.js';
import type { DeliveryProfileResponse } from '../declarations/DeliveryProfileResponse.js';
import type { DeliveryProfilesAssignToUnconfiguredInput } from '../declarations/DeliveryProfilesAssignToUnconfiguredInput.js';
import type { DeliveryProfilesAssignToUnconfiguredResponse } from '../declarations/DeliveryProfilesAssignToUnconfiguredResponse.js';
import type { DeliveryProfilesCreateInput } from '../declarations/DeliveryProfilesCreateInput.js';
import type { DeliveryProfilesCreateResponse } from '../declarations/DeliveryProfilesCreateResponse.js';
import type { DeliveryProfilesGetInput } from '../declarations/DeliveryProfilesGetInput.js';
import type { DeliveryProfilesGetResponse } from '../declarations/DeliveryProfilesGetResponse.js';
import type { DeliveryProfilesListInput } from '../declarations/DeliveryProfilesListInput.js';
import type { DeliveryProfilesListResponse } from '../declarations/DeliveryProfilesListResponse.js';
import type { DeliveryProfilesRemoveInput } from '../declarations/DeliveryProfilesRemoveInput.js';
import type { DeliveryProfilesRemoveResponse } from '../declarations/DeliveryProfilesRemoveResponse.js';
import type { DeliveryProfilesUpdateInput } from '../declarations/DeliveryProfilesUpdateInput.js';
import type { DeliveryProfilesUpdateResponse } from '../declarations/DeliveryProfilesUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DeliveryProfilesResource {
    /**
 * Assigns this active delivery profile to physical product variants and bundle components that do not have a delivery profile.
 * POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.assignToUnconfigured("example", {"Idempotency-Key": idempotencyKey})
 */
    assignToUnconfigured(delivery_profile_id: InputValue<string>, params: (InputValue<{ "expected_catalog_default_version"?: string; "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryProfileAssignmentResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    assignToUnconfiguredWithResponse(delivery_profile_id: InputValue<string>, params: (InputValue<{ "expected_catalog_default_version"?: string; "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryProfilesAssignToUnconfiguredResponse>>;
    /**
 * Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation publishes immutable revision 1. It starts active.
 * POST /v1/delivery-profiles
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.create({name: "example", configuration: {requirement: "none"}, "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "configuration": DeliveryProfileConfigurationRequestInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryProfileResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "configuration": DeliveryProfileConfigurationRequestInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryProfilesCreateResponse>>;
    /**
 * Retires the delivery profile after checking current dependencies. The retired resource remains available by ID for historical records.
 * DELETE /v1/delivery-profiles/{delivery_profile_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(delivery_profile_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryProfileResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(delivery_profile_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryProfilesRemoveResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery profile.
 * GET /v1/delivery-profiles/{delivery_profile_id}
 * @example
 * client.deliveryProfiles.get("example", {})
 */
    get(delivery_profile_id: InputValue<string>, params?: { "include_diagnostics"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeliveryProfileResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(delivery_profile_id: InputValue<string>, params?: { "include_diagnostics"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryProfilesGetResponse>>;
    /**
 * Returns delivery profiles in a stable, cursor-paginated order.
 * GET /v1/delivery-profiles
 * @example
 * client.deliveryProfiles.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "resolution_mode"?: InputValue<"quote" | "manual">; "include_diagnostics"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryProfileListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "resolution_mode"?: InputValue<"quote" | "manual">; "include_diagnostics"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryProfilesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "resolution_mode"?: InputValue<"quote" | "manual">; "include_diagnostics"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryProfileListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "resolution_mode"?: InputValue<"quote" | "manual">; "include_diagnostics"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DeliveryProfilesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "resolution_mode"?: InputValue<"quote" | "manual">; "include_diagnostics"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryProfile>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.
 * PATCH /v1/delivery-profiles/{delivery_profile_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.update("example", {name: "example", "Idempotency-Key": idempotencyKey})
 */
    update(delivery_profile_id: InputValue<string>, params: (InputValue<({ "configuration"?: DeliveryProfileConfigurationRequestInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; }))) & (({ "name": unknown; }) | ({ "external_reference_id": unknown; }) | ({ "configuration": unknown; }) | ({ "metadata": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryProfileResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(delivery_profile_id: InputValue<string>, params: (InputValue<({ "configuration"?: DeliveryProfileConfigurationRequestInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; }))) & (({ "name": unknown; }) | ({ "external_reference_id": unknown; }) | ({ "configuration": unknown; }) | ({ "metadata": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryProfilesUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly deliveryProfiles: DeliveryProfilesResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DeliveryProfileAssignmentResponse } from '../declarations/DeliveryProfileAssignmentResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DeliveryProfilesAssignToUnconfiguredResponse } from '../declarations/DeliveryProfilesAssignToUnconfiguredResponse.js';
export type { DeliveryProfileConfigurationRequestInput } from '../declarations/DeliveryProfileConfigurationRequestInput.js';
export type { DeliveryProfileResponse } from '../declarations/DeliveryProfileResponse.js';
export type { DeliveryProfilesCreateResponse } from '../declarations/DeliveryProfilesCreateResponse.js';
export type { DeliveryProfilesRemoveResponse } from '../declarations/DeliveryProfilesRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { DeliveryProfilesGetResponse } from '../declarations/DeliveryProfilesGetResponse.js';
export type { DeliveryProfileListResponse } from '../declarations/DeliveryProfileListResponse.js';
export type { DeliveryProfilesListResponse } from '../declarations/DeliveryProfilesListResponse.js';
export type { DeliveryProfile } from '../declarations/DeliveryProfile.js';
export type { DeliveryProfilesUpdateResponse } from '../declarations/DeliveryProfilesUpdateResponse.js';
export type { DeliveryProfilesAssignToUnconfiguredInput } from '../declarations/DeliveryProfilesAssignToUnconfiguredInput.js';
export type { DeliveryProfilesCreateInput } from '../declarations/DeliveryProfilesCreateInput.js';
export type { DeliveryProfilesRemoveInput } from '../declarations/DeliveryProfilesRemoveInput.js';
export type { DeliveryProfilesGetInput } from '../declarations/DeliveryProfilesGetInput.js';
export type { DeliveryProfilesListInput } from '../declarations/DeliveryProfilesListInput.js';
export type { DeliveryProfilesUpdateInput } from '../declarations/DeliveryProfilesUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { DeliveryProfileAssignment } from '../declarations/DeliveryProfileAssignment.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { AssignToUnconfiguredDeliveryProfileRequestInput } from '../declarations/AssignToUnconfiguredDeliveryProfileRequestInput.js';
export type { CreateDeliveryProfileRequestInput } from '../declarations/CreateDeliveryProfileRequestInput.js';
export type { UpdateDeliveryProfileRequestInput } from '../declarations/UpdateDeliveryProfileRequestInput.js';
export { makeDeliveryProfileAssignmentResponse } from '../declarations/makeDeliveryProfileAssignmentResponse.js';
export { makeDeliveryProfileResponse } from '../declarations/makeDeliveryProfileResponse.js';
export { makeDeliveryProfileListResponse } from '../declarations/makeDeliveryProfileListResponse.js';
export { makeDeliveryProfile } from '../declarations/makeDeliveryProfile.js';
export { makeDeliveryProfileAssignment } from '../declarations/makeDeliveryProfileAssignment.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
