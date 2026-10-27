import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { Merchant } from '../declarations/types-30.js';
import type { MerchantResponse, MerchantsGetInput, MerchantsUpdateInput } from '../declarations/types-31.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateMerchantRequestInput } from '../declarations/types-48.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { Merchant } from '../declarations/types-30.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type {
    MerchantResponse,
    MerchantsGetInput,
    MerchantsUpdateInput,
    MerchantReadiness,
    NextAction,
    NextActionMerchantAccountSession,
    MoneyValue
} from '../declarations/types-31.js';
export type { UpdateMerchantRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { ImageAttachment } from '../declarations/types-19.js';
export type { ExpandedOrganizationSummary } from '../declarations/types-16.js';
export type { CapabilityReadiness } from '../declarations/types-3.js';
export type { ReadinessAction, ReadinessMerchantAccountSession, ReadinessRequirements, ReadinessAxis } from '../declarations/types-39.js';
export type { ImageRequestInput } from '../declarations/types-20.js';
export { makeAddressRequest } from '../declarations/types-62.js';
export { makeImageRequest } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateMerchantRequest } from '../declarations/types-73.js';
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
