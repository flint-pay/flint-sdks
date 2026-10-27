import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CustomDomain, CustomDomainResponse } from '../declarations/types-10.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type {
    SdkResponse,
    Settings,
    SettingsGetEffectiveInput,
    SettingsGetInput,
    SettingsResponse,
    SettingsUpdateInput,
    SettingsValidateCustomDomainInput
} from '../declarations/types-44.js';
import type { UpdateSettingsRequestInput } from '../declarations/types-49.js';
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
export type {
    Settings,
    SdkResponse,
    SettingsResponse,
    SettingsGetEffectiveInput,
    SettingsGetInput,
    SettingsUpdateInput,
    SettingsValidateCustomDomainInput
} from '../declarations/types-44.js';
export type { UpdateSettingsRequestInput } from '../declarations/types-49.js';
export type {
    CustomDomain,
    CustomDomainResponse,
    CustomerAccountSettings,
    CustomerAccountPresentation,
    CustomerAccountRouteTemplates,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsInput,
    CustomerAccountPresentationInput,
    CustomerAccountRouteTemplatesInput,
    CustomerEmailDeliverySettingsInput,
    CustomDomainDNSRecord,
    CustomDomainsRemoveInput
} from '../declarations/types-10.js';
export type {
    ClientOptions,
    CheckoutSettings,
    CheckoutRecoveryEmailSettings,
    CheckoutTaxConfig,
    CheckoutSettingsInput,
    CheckoutRecoveryEmailSettingsInput,
    CheckoutSavedPaymentDetailsSettingsInput
} from '../declarations/types-4.js';
export type {
    AuthMode,
    BrandingSettings,
    Address,
    BrandingSettingsRequestInput,
    AddressRequestInput,
    AddressRequest
} from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { BuyerCapabilities, BuyerPauseCapability, BuyerCapabilitiesInput, BuyerPauseCapabilityInput } from '../declarations/types-1.js';
export type { BuyerRetentionOffer, BuyerSkipCapability, BuyerRetentionOfferInput, BuyerSkipCapabilityInput } from '../declarations/types-2.js';
export type { FulfillmentSettings, FulfillmentSettingsInput } from '../declarations/types-17.js';
export type { InventorySettings, InventoryOriginPolicy, InventorySettingsInput, InventoryOriginPolicyInput } from '../declarations/types-25.js';
export type {
    InvoiceSettings,
    LegalSettings,
    InvoiceSettingsPatchInput,
    LegalSettingsRequestInput,
    LegalSettingsRequest
} from '../declarations/types-28.js';
export type { InvoiceAutopayRetryPolicy, InvoiceAutopayRetryPolicyInput } from '../declarations/types-26.js';
export type {
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoiceReminderPolicy,
    InvoiceReminderRule,
    InvoicePaymentPolicyInput,
    InvoicePaymentOptionLimitInput,
    InvoiceReminderPolicyInput,
    InvoiceReminderRuleInput
} from '../declarations/types-27.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession, MoneyValueInput } from '../declarations/types-31.js';
export type { PaymentLimitSettings, PaymentLimitSettingsPatchInput } from '../declarations/types-35.js';
export type { PromotionSettings, PromotionSettingsInput } from '../declarations/types-38.js';
export type { ReceiptSettings, ReceiptSettingsRequestInput, ReceiptSettingsRequest } from '../declarations/types-39.js';
export type { SubscriptionSettings, SubscriptionSettingsInput } from '../declarations/types-46.js';
export type {
    TaxSettings,
    TaxIdentity,
    TippingSettings,
    TaxSettingsRequestInput,
    TaxIdentityPatchInput,
    TippingSettingsPatchInput
} from '../declarations/types-47.js';
export type { DocumentTaxID, DocumentTaxIDInput } from '../declarations/types-16.js';
export {
    makeAddressRequest,
    makeBrandingSettingsRequest,
    makeBuyerCapabilities,
    makeBuyerPauseCapability,
    makeBuyerRetentionOffer,
    makeBuyerSkipCapability,
    makeCheckoutRecoveryEmailSettings,
    makeCheckoutSavedPaymentDetailsSettings,
    makeCheckoutSettings,
    makeCheckoutTaxConfig
} from '../declarations/types-62.js';
export {
    makeCustomerAccountPresentation,
    makeCustomerAccountRouteTemplates,
    makeCustomerAccountSettings,
    makeCustomerEmailDeliverySettings
} from '../declarations/types-65.js';
export { makeDocumentTaxID, makeFulfillmentSettings } from '../declarations/types-66.js';
export { makeInventoryOriginPolicy, makeInventorySettings } from '../declarations/types-67.js';
export {
    makeInvoiceAutopayRetryPolicy,
    makeInvoicePaymentOptionLimit,
    makeInvoicePaymentPolicy,
    makeInvoiceReminderPolicy,
    makeInvoiceReminderRule,
    makeInvoiceSettingsPatch,
    makeLegalSettingsRequest,
    makeMoneyValue
} from '../declarations/types-68.js';
export { makePaymentLimitSettingsPatch } from '../declarations/types-69.js';
export { makePromotionSettings, makeReceiptSettingsRequest } from '../declarations/types-70.js';
export { makeSubscriptionSettings, makeTaxIdentityPatch, makeTaxSettingsRequest, makeTippingSettingsPatch } from '../declarations/types-72.js';
export { makeUpdateSettingsRequest } from '../declarations/types-73.js';
export interface SettingsResource {
    /**
 * Returns the authenticated merchant's settings for this environment with Flint's defaults filled
 * in.
 * @see reference/settings.md#settingsgeteffective
 * GET /v1/settings/effective
 * @example
 * client.settings.getEffective()
 */
    getEffective(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Settings>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/settings.md#settingsgeteffective
     */
    getEffectiveWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SettingsResponse>>;
    /**
 * Returns the settings stored for the authenticated merchant in this environment.
 * @see reference/settings.md#settingsget
 * GET /v1/settings
 * @example
 * client.settings.get()
 */
    get(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Settings>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/settings.md#settingsget
     */
    getWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SettingsResponse>>;
    /**
 * Applies a sparse patch to merchant settings. See each field for how it is patched.
 * @see reference/settings.md#settingsupdate
 * PATCH /v1/settings
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.settings.update({}, { idempotencyKey: idempotencyKey })
 */
    update(params: (InputValue<UpdateSettingsRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Settings>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/settings.md#settingsupdate
     */
    updateWithResponse(params: (InputValue<UpdateSettingsRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SettingsResponse>>;
    /**
 * Starts provider and DNS checks for this domain. Send no body or an empty JSON object. Checks are
 * limited to once every 60 seconds per domain; rate limited responses include Retry-After.
 * @see reference/settings.md#settingsvalidatecustomdomain
 * POST /v1/custom-domains/{custom_domain_id}/validate
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.settings.validateCustomDomain("example", {}, { idempotencyKey: idempotencyKey })
 */
    validateCustomDomain(custom_domain_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomDomain>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/settings.md#settingsvalidatecustomdomain
     */
    validateCustomDomainWithResponse(custom_domain_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomDomainResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly settings: SettingsResource;
}
