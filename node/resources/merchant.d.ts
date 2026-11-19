import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
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
    MerchantBillingInvoiceLineItemPreviousAttributes,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantBillingInvoicesGetParams,
    MerchantBillingInvoicesListParams,
    MerchantGetParams,
    MerchantReadiness,
    MerchantReadinessPreviousAttributes,
    MerchantReadinessUpdatedInstalledMerchantsEvent
} from '../declarations/types-42.js';
import type {
    MerchantReadinessUpdatedMerchantEvent,
    MerchantResponse,
    MerchantSignup,
    MerchantSignupListResponse,
    MerchantSignupOwner,
    MerchantSignupOwnerRequestInput,
    MerchantSignupPermission,
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
} from '../declarations/types-43.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
    MerchantBillingInvoiceLineItemPreviousAttributes,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantReadiness,
    MerchantReadinessPreviousAttributes,
    MerchantReadinessUpdatedInstalledMerchantsEvent,
    MerchantAccountSessionsCreateParams,
    MerchantBillingBalancesGetParams,
    MerchantBillingInvoicesGetParams,
    MerchantBillingBalancesListParams,
    MerchantBillingEntriesListParams,
    MerchantBillingInvoicesListParams,
    MerchantAccountSessionsRefreshParams
} from '../declarations/types-42.js';
export type { _SdkWithoutIdempotency, WebhookEventSource, WebhookMerchant } from '../declarations/types-79.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type {
    MerchantResponse,
    MerchantUpdateParams,
    MerchantReadinessUpdatedMerchantEvent,
    MerchantSignup,
    MerchantSignupListResponse,
    MerchantSignupOwner,
    MerchantSignupOwnerRequestInput,
    MerchantSignupPermission,
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
} from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { Address, AddressRequestInput, AddressPreviousAttributes, AddressRequest } from '../declarations/types-0.js';
export type {
    ImageAttachment,
    ImageRequestInput,
    ImageInputSourceURLInput,
    ImageInputFileInput,
    ImageAttachmentPreviousAttributes
} from '../declarations/types-31.js';
export type { NextAction, MoneyValue, MoneyValuePreviousAttributes } from '../declarations/types-44.js';
export type {
    ReadinessMerchantAccountSession,
    ReadinessAction,
    ReadinessRequirements,
    ReadinessRequirementError,
    ReadinessAxis,
    ReadinessActionPreviousAttributes,
    ReadinessMerchantAccountSessionPreviousAttributes,
    ReadinessRequirementsPreviousAttributes,
    ReadinessRequirementErrorPreviousAttributes,
    ReadinessAxisPreviousAttributes
} from '../declarations/types-60.js';
export type { UpdateMerchantRequestInput } from '../declarations/types-76.js';
export type { DisputeResponseSessionStripeAccountSession, DisputesAcceptParams } from '../declarations/types-26.js';
export type { CapabilityReadiness, CapabilityReadinessPreviousAttributes } from '../declarations/types-5.js';
export type { PartnerWebhookEnvelope } from '../declarations/types-50.js';
export type { PlatformFeeCap } from '../declarations/types-55.js';
export type { CreateMerchantSignupRequestInput } from '../declarations/types-11.js';
export type { VerifyMerchantSignupRequestInput } from '../declarations/types-78.js';
export type { LicenseKeyVersionRequestInput } from '../declarations/types-40.js';
export { makeAddressRequest } from '../declarations/types-80.js';
export { makeCreateMerchantSignupRequest } from '../declarations/types-83.js';
export { makeImageInputFile, makeImageInputSourceURL, makeImageRequest } from '../declarations/types-86.js';
export { makeLicenseKeyVersionRequest } from '../declarations/types-87.js';
export {
    makeMerchantAccountSessionCreateRequest,
    makeMerchantAccountSessionRefreshRequest,
    makeMerchantSignupOwnerRequest,
    makeMerchantSignupTermsAcceptanceRequest,
    makeMerchantSignupVersionRequest,
    makeMetadataPatchRequest,
    makeMoneyValue
} from '../declarations/types-88.js';
export { makeUpdateMerchantRequest } from '../declarations/types-93.js';
export { makeVerifyMerchantSignupRequest } from '../declarations/types-94.js';
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
