import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
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
    MerchantResponse,
    MerchantUpdateParams,
    MerchantWebhookEnvelope
} from '../declarations/types-34.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    MerchantUpdateParams,
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
    MerchantWebhookEnvelope,
    MerchantAccountSessionsCreateParams,
    MerchantBillingBalancesGetParams,
    MerchantBillingInvoicesGetParams,
    MerchantBillingBalancesListParams,
    MerchantBillingEntriesListParams,
    MerchantBillingInvoicesListParams,
    MerchantAccountSessionsRefreshParams,
    MetadataMap,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-34.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ImageAttachment, ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput } from '../declarations/types-25.js';
export type { ExpandedOrganizationSummary } from '../declarations/types-21.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession, ReadinessAction, ReadinessRequirements, ReadinessAxis } from '../declarations/types-46.js';
export type { UpdateMerchantRequestInput } from '../declarations/types-59.js';
export type { DisputeResponseSessionStripeAccountSession } from '../declarations/types-20.js';
export type { CapabilityReadiness } from '../declarations/types-4.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export { makeImageInputFile, makeImageInputSourceURL } from '../declarations/types-67.js';
export { makeImageRequest } from '../declarations/types-68.js';
export {
    makeMerchantAccountSessionCreateRequest,
    makeMerchantAccountSessionRefreshRequest,
    makeMetadataPatchRequest,
    makeMoneyValue
} from '../declarations/types-69.js';
export { makeUpdateMerchantRequest } from '../declarations/types-74.js';
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
 * selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required and
 * one detail per supplied shared field, including nulls and metadata changes. Nothing is saved on
 * refusal.
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
