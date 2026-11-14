import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    Merchant,
    MerchantAccountSession,
    MerchantAccountSessionClientSession,
    MerchantAccountSessionCreateRequest,
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSessionEffectivePolicy,
    MerchantAccountSessionRefreshRequest,
    MerchantAccountSessionRefreshRequestInput,
    MerchantAccountSessionResponse,
    MerchantAccountSessionStripe,
    MerchantAccountSessionStripeCollectionOptions,
    MerchantAccountSessionStripeComponent,
    MerchantAccountSessionStripeRequirements,
    MerchantAccountSessionsCreateParams,
    MerchantAccountSessionsRefreshParams,
    MerchantBillingBalance,
    MerchantBillingBalanceListResponse,
    MerchantBillingBalanceResponse,
    MerchantBillingBalancesGetParams,
    MerchantBillingBalancesListParams,
    MerchantBillingEntriesListParams,
    MerchantBillingEntry,
    MerchantBillingEntryListResponse,
    MerchantBillingInvoice,
    MerchantBillingInvoiceLineItem,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantBillingInvoicesGetParams,
    MerchantBillingInvoicesListParams,
    MerchantGetParams,
    MerchantReadiness,
    MerchantReadinessUpdatedInstalledMerchantsEvent,
    MerchantReadinessUpdatedMerchantEvent,
    MerchantResponse,
    MerchantSignup,
    MerchantSignupListResponse,
    MerchantSignupOwner,
    MerchantSignupOwnerRequestInput,
    MerchantSignupPermission
} from '../declarations/types-37.js';
import type {
    MerchantSignupResponse,
    MerchantSignupTerms,
    MerchantSignupTermsAcceptance,
    MerchantSignupTermsAcceptanceRequest,
    MerchantSignupTermsAcceptanceRequestInput,
    MerchantSignupVersionRequestInput,
    MerchantSignupWithAuthorizationCodes,
    MerchantSignupWithAuthorizationCodesResponse,
    MerchantSignupsCancelParams,
    MerchantSignupsCreateParams,
    MerchantSignupsGetParams,
    MerchantSignupsListParams,
    MerchantSignupsResendCodeParams,
    MerchantSignupsRotateAuthorizationCodesParams,
    MerchantSignupsVerifyParams,
    MerchantUpdateParams,
    MerchantUpdatedInstalledMerchantsEvent,
    MerchantUpdatedMerchantEvent,
    MerchantWebhookEnvelope
} from '../declarations/types-38.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    MerchantGetParams,
    Merchant,
    MerchantResponse,
    MerchantAccountSession,
    MerchantAccountSessionClientSession,
    MerchantAccountSessionCreateRequest,
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSessionEffectivePolicy,
    MerchantAccountSessionRefreshRequest,
    MerchantAccountSessionRefreshRequestInput,
    MerchantAccountSessionResponse,
    MerchantAccountSessionStripe,
    MerchantAccountSessionStripeCollectionOptions,
    MerchantAccountSessionStripeComponent,
    MerchantAccountSessionStripeRequirements,
    MerchantBillingBalance,
    MerchantBillingBalanceListResponse,
    MerchantBillingBalanceResponse,
    MerchantBillingEntry,
    MerchantBillingEntryListResponse,
    MerchantBillingInvoice,
    MerchantBillingInvoiceLineItem,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantReadiness,
    MerchantReadinessUpdatedInstalledMerchantsEvent,
    MerchantReadinessUpdatedMerchantEvent,
    MerchantSignup,
    MerchantSignupListResponse,
    MerchantSignupOwner,
    MerchantSignupOwnerRequestInput,
    MerchantSignupPermission,
    MerchantAccountSessionsCreateParams,
    MerchantBillingBalancesGetParams,
    MerchantBillingInvoicesGetParams,
    MerchantBillingBalancesListParams,
    MerchantBillingEntriesListParams,
    MerchantBillingInvoicesListParams,
    MerchantAccountSessionsRefreshParams
} from '../declarations/types-37.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type {
    MerchantUpdateParams,
    MerchantSignupResponse,
    MerchantSignupTerms,
    MerchantSignupTermsAcceptance,
    MerchantSignupTermsAcceptanceRequest,
    MerchantSignupTermsAcceptanceRequestInput,
    MerchantSignupVersionRequestInput,
    MerchantSignupWithAuthorizationCodes,
    MerchantSignupWithAuthorizationCodesResponse,
    MerchantUpdatedInstalledMerchantsEvent,
    MerchantUpdatedMerchantEvent,
    MerchantWebhookEnvelope,
    MerchantSignupsCancelParams,
    MerchantSignupsCreateParams,
    MerchantSignupsGetParams,
    MerchantSignupsListParams,
    MerchantSignupsResendCodeParams,
    MerchantSignupsRotateAuthorizationCodesParams,
    MerchantSignupsVerifyParams,
    MetadataMap,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-38.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { ImageAttachment, ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput } from '../declarations/types-28.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession, ReadinessAction, ReadinessRequirements, ReadinessAxis } from '../declarations/types-52.js';
export type { UpdateMerchantRequestInput } from '../declarations/types-67.js';
export type { DisputeResponseSessionStripeAccountSession } from '../declarations/types-23.js';
export type { CapabilityReadiness } from '../declarations/types-5.js';
export type { PartnerWebhookEnvelope } from '../declarations/types-44.js';
export type { WebhookEventSource, VerifyMerchantSignupRequestInput } from '../declarations/types-69.js';
export type { PlatformFeeCap } from '../declarations/types-49.js';
export type { CreateMerchantSignupRequestInput } from '../declarations/types-10.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeAddressRequest } from '../declarations/types-70.js';
export { makeCreateMerchantSignupRequest } from '../declarations/types-73.js';
export { makeImageInputFile, makeImageInputSourceURL, makeImageRequest } from '../declarations/types-77.js';
export {
    makeMerchantAccountSessionCreateRequest,
    makeMerchantAccountSessionRefreshRequest,
    makeMerchantSignupOwnerRequest,
    makeMerchantSignupTermsAcceptanceRequest,
    makeMerchantSignupVersionRequest,
    makeMetadataPatchRequest,
    makeMoneyValue
} from '../declarations/types-78.js';
export { makeUpdateMerchantRequest } from '../declarations/types-84.js';
export { makeVerifyMerchantSignupRequest } from '../declarations/types-85.js';
export interface MerchantResource {
    /**
 * Returns the authenticated merchant.
 *
 * `GET /v1/merchant`
 * @see https://developers.withflintpay.com/docs/api/merchants#getMerchant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchant.get()
 */
    get(params?: MerchantGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<WithResponseInfo<Merchant, MerchantResponse>>;
    /**
 * Applies a sparse update to the authenticated merchant's profile, shared across live and all
 * sandboxes. Every mutable field requires a live-mode credential or a Dashboard session in any
 * selected environment. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`,
 * with one detail per supplied shared field, including nulls and metadata changes. Nothing is
 * saved on refusal. A partner app install token can change only `business_name`, `icon`, and
 * `logo`; another field returns `400 INVALID_REQUEST` with a `NOT_ALLOWED` detail whose `param`
 * names it.
 *
 * `PATCH /v1/merchant`
 * @see https://developers.withflintpay.com/docs/api/merchants#updateMerchant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchant.update({business_name: "Example Shop"}, { idempotencyKey: idempotencyKey })
 */
    update(params: MerchantUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Merchant, MerchantResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchant: MerchantResource;
}
