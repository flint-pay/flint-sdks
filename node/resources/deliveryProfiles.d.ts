import type { InputValue } from '../runtime.js';
import type { AssignToUnconfiguredDeliveryProfileRequestInput } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateDeliveryProfileRequestInput } from '../declarations/types-6.js';
import type {
    DeliveryProfile,
    DeliveryProfileAssignment,
    DeliveryProfileAssignmentResponse,
    DeliveryProfileListResponse
} from '../declarations/types-13.js';
import type {
    DeliveryProfileResponse,
    DeliveryProfilesAssignToUnconfiguredInput,
    DeliveryProfilesCreateInput,
    DeliveryProfilesGetInput,
    DeliveryProfilesListInput,
    DeliveryProfilesRemoveInput,
    DeliveryProfilesUpdateInput
} from '../declarations/types-14.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateDeliveryProfileRequestInput } from '../declarations/types-48.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { AssignToUnconfiguredDeliveryProfileRequestInput, AuthMode } from '../declarations/types-0.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    DeliveryProfileAssignment,
    DeliveryProfileAssignmentResponse,
    DeliveryProfile,
    DeliveryProfileListResponse,
    DeliveryProfileConfigurationRequestInput,
    DeliveryProfileOriginPolicyInputFixedLocationInput,
    DeliveryProfileOriginPolicyInputInventoryRoutingInput,
    DeliveryProfileOriginPolicyInputMethodOriginInput,
    DeliveryProfileConfiguration,
    DeliveryProfileOriginPolicy,
    DeliveryProfileDiagnostics
} from '../declarations/types-13.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { CreateDeliveryProfileRequestInput } from '../declarations/types-6.js';
export type {
    DeliveryProfileResponse,
    DeliveryProfilesAssignToUnconfiguredInput,
    DeliveryProfilesCreateInput,
    DeliveryProfilesRemoveInput,
    DeliveryProfilesGetInput,
    DeliveryProfilesListInput,
    DeliveryProfilesUpdateInput,
    DeliveryProfileOriginPolicyRequestInput
} from '../declarations/types-14.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateDeliveryProfileRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeAssignToUnconfiguredDeliveryProfileRequest } from '../declarations/types-62.js';
export { makeCreateDeliveryProfileRequest } from '../declarations/types-63.js';
export {
    makeDeliveryProfileConfigurationRequest,
    makeDeliveryProfileOriginPolicyInputFixedLocation,
    makeDeliveryProfileOriginPolicyInputInventoryRouting,
    makeDeliveryProfileOriginPolicyInputMethodOrigin,
    makeDeliveryProfileOriginPolicyRequest
} from '../declarations/types-66.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateDeliveryProfileRequest } from '../declarations/types-72.js';
export interface DeliveryProfilesResource {
    /**
 * Assigns this active delivery profile to physical product variants and bundle components that do
 * not have a delivery profile.
 * @see reference/deliveryProfiles.md#deliveryprofilesassigntounconfigured
 * POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.assignToUnconfigured("example", {}, { idempotencyKey: idempotencyKey })
 */
    assignToUnconfigured(delivery_profile_id: InputValue<string>, params: (InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryProfileAssignment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryProfiles.md#deliveryprofilesassigntounconfigured
     */
    assignToUnconfiguredWithResponse(delivery_profile_id: InputValue<string>, params: (InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryProfileAssignmentResponse>>;
    /**
 * Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation
 * publishes immutable revision 1. It starts active.
 * @see reference/deliveryProfiles.md#deliveryprofilescreate
 * POST /v1/delivery-profiles
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.create({name: "example", configuration: {requirement: "none"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateDeliveryProfileRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryProfile>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryProfiles.md#deliveryprofilescreate
     */
    createWithResponse(params: (InputValue<CreateDeliveryProfileRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryProfileResponse>>;
    /**
 * Retires the delivery profile after checking current dependencies. The retired resource remains
 * available by ID for historical records. Deleting an already archived resource returns it without
 * changing its version or repeating effects.
 * @see reference/deliveryProfiles.md#deliveryprofilesremove
 * DELETE /v1/delivery-profiles/{delivery_profile_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(delivery_profile_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryProfile>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryProfiles.md#deliveryprofilesremove
     */
    removeWithResponse(delivery_profile_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryProfileResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery profile.
 * @see reference/deliveryProfiles.md#deliveryprofilesget
 * GET /v1/delivery-profiles/{delivery_profile_id}
 * @example
 * client.deliveryProfiles.get("example")
 */
    get(delivery_profile_id: InputValue<string>, params?: {
        "include_diagnostics"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryProfile>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryProfiles.md#deliveryprofilesget
     */
    getWithResponse(delivery_profile_id: InputValue<string>, params?: {
        "include_diagnostics"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryProfileResponse>>;
    /**
 * Returns delivery profiles in a stable, cursor-paginated order. Archived resources are excluded
 * by default.
 * @see reference/deliveryProfiles.md#deliveryprofileslist
 * GET /v1/delivery-profiles
 * @example
 * client.deliveryProfiles.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "is_default"?: InputValue<boolean>;
        "resolution_mode"?: InputValue<Array<"quote" | "manual">>;
        "include_diagnostics"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryProfileListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryProfiles.md#deliveryprofileslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "is_default"?: InputValue<boolean>;
        "resolution_mode"?: InputValue<Array<"quote" | "manual">>;
        "include_diagnostics"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryProfileListResponse>>;
    /** Iterate pages lazily.
     * @see reference/deliveryProfiles.md#deliveryprofileslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "is_default"?: InputValue<boolean>;
        "resolution_mode"?: InputValue<Array<"quote" | "manual">>;
        "include_diagnostics"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryProfileListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/deliveryProfiles.md#deliveryprofileslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "is_default"?: InputValue<boolean>;
        "resolution_mode"?: InputValue<Array<"quote" | "manual">>;
        "include_diagnostics"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<DeliveryProfileListResponse>>;
    /** Iterate items lazily.
     * @see reference/deliveryProfiles.md#deliveryprofileslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "is_default"?: InputValue<boolean>;
        "resolution_mode"?: InputValue<Array<"quote" | "manual">>;
        "include_diagnostics"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryProfile>;
    /**
 * Sparsely updates mutable fields. Send is_default true to make this active profile the physical
 * catalog default, together with any other mutable fields in one atomic update. Sending only
 * is_default true for the current default leaves its version unchanged and emits no events. A
 * change to pinned configuration publishes a new immutable revision and requires expected_version.
 * Archived resources can't be changed; create a new resource instead.
 * @see reference/deliveryProfiles.md#deliveryprofilesupdate
 * PATCH /v1/delivery-profiles/{delivery_profile_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.update("example", {name: "example"}, { idempotencyKey: idempotencyKey })
 */
    update(delivery_profile_id: InputValue<string>, params: (InputValue<UpdateDeliveryProfileRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryProfile>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryProfiles.md#deliveryprofilesupdate
     */
    updateWithResponse(delivery_profile_id: InputValue<string>, params: (InputValue<UpdateDeliveryProfileRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryProfileResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryProfiles: DeliveryProfilesResource;
}
