import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    DeliveryProfile,
    DeliveryProfileAssignment,
    DeliveryProfileAssignmentResponse,
    DeliveryProfileListResponse,
    DeliveryProfileResponse,
    DeliveryProfilesAssignToUnconfiguredParams,
    DeliveryProfilesCreateParams,
    DeliveryProfilesDeleteParams,
    DeliveryProfilesGetParams,
    DeliveryProfilesListParams,
    DeliveryProfilesUpdateParams
} from '../declarations/types-19.js';
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
export type {
    DeliveryProfilesAssignToUnconfiguredParams,
    DeliveryProfileAssignment,
    DeliveryProfileAssignmentResponse,
    DeliveryProfilesCreateParams,
    DeliveryProfile,
    DeliveryProfileResponse,
    DeliveryProfilesDeleteParams,
    DeliveryProfilesGetParams,
    DeliveryProfilesListParams,
    DeliveryProfileListResponse,
    DeliveryProfilesUpdateParams,
    DeliveryProfileConfigurationRequestInput,
    DeliveryProfileOriginPolicyRequestInput,
    DeliveryProfileOriginPolicyInputFixedLocationInput,
    DeliveryProfileOriginPolicyInputInventoryRoutingInput,
    DeliveryProfileOriginPolicyInputMethodOriginInput,
    DeliveryProfileConfigurationInputNoneInput,
    DeliveryProfileConfigurationInputRequiredInput,
    DeliveryProfileConfigurationInputQuoteInput,
    DeliveryProfileConfigurationInputManualInput,
    DeliveryProfileConfiguration,
    DeliveryProfileOriginPolicy,
    DeliveryProfileDiagnostics
} from '../declarations/types-19.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AssignToUnconfiguredDeliveryProfileRequestInput, AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { NextAction, MoneyValue } from '../declarations/types-37.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export type { CreateDeliveryProfileRequestInput } from '../declarations/types-8.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-36.js';
export type { UpdateDeliveryProfileRequestInput } from '../declarations/types-63.js';
export type { DeliveryLocationSetsDeleteParams } from '../declarations/types-17.js';
export { makeAssignToUnconfiguredDeliveryProfileRequest } from '../declarations/types-67.js';
export { makeCreateDeliveryProfileRequest } from '../declarations/types-68.js';
export {
    makeDeliveryProfileConfigurationInputManual,
    makeDeliveryProfileConfigurationInputNone,
    makeDeliveryProfileConfigurationInputQuote,
    makeDeliveryProfileConfigurationInputRequired,
    makeDeliveryProfileConfigurationRequest,
    makeDeliveryProfileOriginPolicyInputFixedLocation,
    makeDeliveryProfileOriginPolicyInputInventoryRouting,
    makeDeliveryProfileOriginPolicyInputMethodOrigin,
    makeDeliveryProfileOriginPolicyRequest
} from '../declarations/types-72.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export { makeUpdateDeliveryProfileRequest } from '../declarations/types-79.js';
export interface DeliveryProfilesResource {
    /**
 * Assigns this active delivery profile to physical product variants and bundle components that do
 * not have a delivery profile.
 *
 * `POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`
 * @param delivery_profile_id Flint delivery profile ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#assignToUnconfiguredDeliveryProfile
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.assignToUnconfigured("dprof_01KEZF7C0020J13FQYNY9854R0", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    assignToUnconfigured(delivery_profile_id: InputValue<string>, params?: DeliveryProfilesAssignToUnconfiguredParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryProfileAssignment, DeliveryProfileAssignmentResponse>>;
    /**
 * Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation
 * publishes immutable revision 1. It starts active.
 *
 * `POST /v1/delivery-profiles`
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#createDeliveryProfile
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.create({configuration: {requirement: "none"}, name: "Standard
 * delivery"}, { idempotencyKey: idempotencyKey })
 */
    create(params: DeliveryProfilesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryProfile, DeliveryProfileResponse>>;
    /**
 * Retires the delivery profile after checking current dependencies. The retired resource remains
 * available by ID for historical records. Deleting an already archived resource returns it without
 * changing its version or repeating effects.
 *
 * `DELETE /v1/delivery-profiles/{delivery_profile_id}`
 * @param delivery_profile_id Flint delivery profile ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#deleteDeliveryProfile
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.delete("dprof_01KEZF7C0020J13FQYNY9854R0", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(delivery_profile_id: InputValue<string>, params?: DeliveryProfilesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryProfile, DeliveryProfileResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery profile.
 *
 * `GET /v1/delivery-profiles/{delivery_profile_id}`
 * @param delivery_profile_id Flint delivery profile ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#getDeliveryProfile
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryProfiles.get("dprof_01KEZF7C0020J13FQYNY9854R0")
 */
    get(delivery_profile_id: InputValue<string>, params?: DeliveryProfilesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryProfile, DeliveryProfileResponse>>;
    /**
 * Returns delivery profiles in a stable, cursor-paginated order. Archived resources are excluded
 * by default. Default order: created_at ascending, then delivery_profile_id ascending.
 *
 * `GET /v1/delivery-profiles`
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryProfiles
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryProfiles.list()
 */
    list(params?: DeliveryProfilesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryProfileListResponse, DeliveryProfileListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryProfiles
     */
    listPages(params?: DeliveryProfilesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeliveryProfileListResponse, DeliveryProfileListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryProfiles
     */
    listItems(params?: DeliveryProfilesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryProfile>;
    /**
 * Sparsely updates mutable fields. Send is_default true to make this active profile the physical
 * catalog default, together with any other mutable fields in one atomic update. Sending only
 * is_default true for the current default leaves its version unchanged and emits no events. A
 * change to pinned configuration publishes a new immutable revision and requires expected_version.
 * Archived resources can't be changed; create a new resource instead.
 *
 * `PATCH /v1/delivery-profiles/{delivery_profile_id}`
 * @param delivery_profile_id Flint delivery profile ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#updateDeliveryProfile
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryProfiles.update("dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Standard delivery"},
 * { idempotencyKey: idempotencyKey })
 */
    update(delivery_profile_id: InputValue<string>, params: DeliveryProfilesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryProfile, DeliveryProfileResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryProfiles: DeliveryProfilesResource;
}
