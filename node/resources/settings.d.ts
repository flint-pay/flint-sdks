import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-48.js';
import type { Settings, SettingsGetEffectiveParams, SettingsGetParams, SettingsResponse, SettingsUpdateParams } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { SettingsGetEffectiveParams, Settings, SettingsResponse, SettingsGetParams, SettingsUpdateParams } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type {
    ClientOptions,
    CheckoutSettings,
    CheckoutRecoveryEmailSettings,
    CheckoutTaxConfig,
    CheckoutSettingsRequestInput,
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from '../declarations/types-5.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { BrandingSettings, BuyerCapabilities, BrandingSettingsRequestInput, BuyerCapabilitiesInput } from '../declarations/types-1.js';
export type {
    CustomerAccountSettings,
    CustomerAccountPresentation,
    CustomerAccountRouteTemplates,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsRequestInput,
    CustomerAccountPresentationRequestInput,
    CustomerAccountRouteTemplatesRequestInput,
    CustomerEmailDeliverySettingsRequestInput
} from '../declarations/types-13.js';
export type { BuyerPauseCapability, BuyerRetentionOffer, BuyerPauseCapabilityInput, BuyerRetentionOfferInput } from '../declarations/types-2.js';
export type { BuyerSkipCapability, BuyerSkipCapabilityInput } from '../declarations/types-3.js';
export type { FulfillmentSettings, FulfillmentSettingsRequestInput } from '../declarations/types-22.js';
export type {
    InventorySettings,
    InvoiceAutopayRetryPolicy,
    InventorySettingsRequestInput,
    InvoiceAutopayRetryPolicyInput
} from '../declarations/types-28.js';
export type { InventoryOriginPolicy, InventoryOriginPolicyRequestInput } from '../declarations/types-26.js';
export type {
    InvoiceSettings,
    LegalSettings,
    InvoiceSettingsPatchInput,
    LegalSettingsRequestInput,
    LegalSettingsRequest
} from '../declarations/types-32.js';
export type {
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoicePaymentPolicyInput,
    InvoicePaymentOptionLimitInput
} from '../declarations/types-30.js';
export type {
    MoneyValue,
    MetadataMap,
    NextAction,
    MoneyValueInput,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-35.js';
export type { InvoiceReminderPolicy, InvoiceReminderRule, InvoiceReminderPolicyInput, InvoiceReminderRuleInput } from '../declarations/types-31.js';
export type { PaymentLimitSettings, PaymentLimitSettingsPatchInput } from '../declarations/types-41.js';
export type {
    PromotionSettings,
    ReceiptSettings,
    ReadinessMerchantAccountSession,
    PromotionSettingsRequestInput,
    ReceiptSettingsRequestInput,
    ReceiptSettingsRequest
} from '../declarations/types-46.js';
export type { SubscriptionSettings, SubscriptionSettingsRequestInput } from '../declarations/types-56.js';
export type { TaxSettings, TaxIdentity, TaxSettingsRequestInput, TaxIdentityPatchInput } from '../declarations/types-57.js';
export type { DocumentTaxID, DocumentTaxIDRequestInput } from '../declarations/types-21.js';
export type { TippingSettings, TippingSettingsPatchInput } from '../declarations/types-58.js';
export type { UpdateSettingsRequestInput } from '../declarations/types-60.js';
export {
    makeAddressRequest,
    makeBrandingSettingsRequest,
    makeBuyerCapabilities,
    makeBuyerPauseCapability,
    makeBuyerRetentionOffer,
    makeBuyerSkipCapability
} from '../declarations/types-62.js';
export {
    makeCheckoutRecoveryEmailSettingsRequest,
    makeCheckoutSavedPaymentDetailsSettingsRequest,
    makeCheckoutSettingsRequest
} from '../declarations/types-63.js';
export {
    makeCustomerAccountPresentationRequest,
    makeCustomerAccountRouteTemplatesRequest,
    makeCustomerAccountSettingsRequest,
    makeCustomerEmailDeliverySettingsRequest
} from '../declarations/types-66.js';
export { makeDocumentTaxIDRequest, makeFulfillmentSettingsRequest } from '../declarations/types-67.js';
export { makeInventoryOriginPolicyRequest, makeInventorySettingsRequest } from '../declarations/types-68.js';
export {
    makeInvoiceAutopayRetryPolicy,
    makeInvoicePaymentOptionLimit,
    makeInvoicePaymentPolicy,
    makeInvoiceReminderPolicy,
    makeInvoiceReminderRule,
    makeInvoiceSettingsPatch,
    makeLegalSettingsRequest,
    makeMetadataPatchRequest
} from '../declarations/types-69.js';
export { makeMoneyValue } from '../declarations/types-70.js';
export { makePaymentLimitSettingsPatch, makePromotionSettingsRequest } from '../declarations/types-71.js';
export { makeReceiptSettingsRequest } from '../declarations/types-72.js';
export { makeSubscriptionSettingsRequest } from '../declarations/types-73.js';
export { makeTaxIdentityPatch, makeTaxSettingsRequest, makeTippingSettingsPatch } from '../declarations/types-74.js';
export { makeUpdateSettingsRequest } from '../declarations/types-75.js';
export interface SettingsResource {
    /**
 * Returns the authenticated merchant's settings for this environment with Flint's defaults filled
 * in.
 *
 * `GET /v1/settings/effective`
 * @see https://developers.withflintpay.com/docs/api/settings#getEffectiveSettings
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.settings.getEffective()
 */
    getEffective(params?: SettingsGetEffectiveParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Settings, SettingsResponse>>;
    /**
 * Returns the settings stored for the authenticated merchant in this environment.
 *
 * `GET /v1/settings`
 * @see https://developers.withflintpay.com/docs/api/settings#getSettings
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.settings.get()
 */
    get(params?: SettingsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Settings, SettingsResponse>>;
    /**
 * Applies a sparse patch to merchant settings. See each field for how it is patched.
 *
 * `PATCH /v1/settings`
 * @see https://developers.withflintpay.com/docs/api/settings#updateSettings
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.settings.update({metadata: {channel: "sdk-example"}}, { idempotencyKey: idempotencyKey })
 */
    update(params: SettingsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Settings, SettingsResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly settings: SettingsResource;
}
