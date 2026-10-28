import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { Merchant, MerchantResponse, MerchantsGetInput, MerchantsUpdateInput } from '../declarations/types-32.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdateMerchantRequestInput } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    Merchant,
    MerchantResponse,
    MerchantsGetInput,
    MerchantsUpdateInput,
    MetadataMap,
    MerchantReadiness,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-32.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { UpdateMerchantRequestInput } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ImageAttachment, ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput } from '../declarations/types-21.js';
export type { ExpandedOrganizationSummary } from '../declarations/types-18.js';
export type { CapabilityReadiness } from '../declarations/types-3.js';
export type { ReadinessAction, ReadinessMerchantAccountSession, ReadinessRequirements, ReadinessAxis } from '../declarations/types-41.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeAddressRequest } from '../declarations/types-65.js';
export { makeImageInputFile, makeImageInputSourceURL, makeImageRequest } from '../declarations/types-71.js';
export { makeMetadataPatchRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeUpdateMerchantRequest } from '../declarations/types-77.js';
export interface MerchantsResource {
    /**
 * Returns the authenticated merchant.
 * @see reference/merchants.md#merchantsget
 * GET /v1/merchant
 * @example
 * client.merchants.get()
 */
    get(params?: {
        "expand"?: InputValue<Array<"organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<Merchant>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchants.md#merchantsget
     */
    getWithResponse(params?: {
        "expand"?: InputValue<Array<"organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<MerchantResponse>>;
    /**
 * Applies a sparse update to the authenticated merchant's public business profile fields. The
 * api_version field changes the merchant's live default and requires a live-mode API key or the
 * live dashboard environment.
 * @see reference/merchants.md#merchantsupdate
 * PATCH /v1/merchant
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchants.update({}, { idempotencyKey: idempotencyKey })
 */
    update(params: (InputValue<UpdateMerchantRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Merchant>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchants.md#merchantsupdate
     */
    updateWithResponse(params: (InputValue<UpdateMerchantRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<MerchantResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchants: MerchantsResource;
}
