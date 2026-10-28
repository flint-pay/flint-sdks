import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CustomDomain, CustomDomainResponse } from '../declarations/types-11.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type {
    Settings,
    SettingsGetEffectiveInput,
    SettingsGetInput,
    SettingsResponse,
    SettingsUpdateInput,
    SettingsValidateCustomDomainInput
} from '../declarations/types-47.js';
import type { UpdateSettingsRequestInput } from '../declarations/types-52.js';
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
    Settings,
    SettingsResponse,
    SettingsGetEffectiveInput,
    SettingsGetInput,
    SettingsUpdateInput,
    SettingsValidateCustomDomainInput
} from '../declarations/types-47.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { UpdateSettingsRequestInput } from '../declarations/types-52.js';
export type {
    CustomDomain,
    CustomDomainResponse,
    Credentials,
    CustomerAccountSettings,
    CustomerAccountPresentation,
    CustomerAccountRouteTemplates,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsRequestRequestInput,
    CustomerAccountPresentationRequestRequestInput,
    CustomerAccountRouteTemplatesRequestRequestInput,
    CustomerEmailDeliverySettingsRequestRequestInput,
    CustomDomainDNSRecord,
    CustomDomainsRemoveInput
} from '../declarations/types-11.js';
export type {
    ClientOptions,
    CheckoutSettings,
    CheckoutRecoveryEmailSettings,
    CheckoutTaxConfig,
    CheckoutSettingsRequestRequestInput,
    CheckoutRecoveryEmailSettingsRequestRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestRequestInput
} from '../declarations/types-4.js';
export type {
    AuthMode,
    BrandingSettings,
    Address,
    BrandingSettingsRequestInput,
    AddressRequestInput,
    AddressRequest
} from '../declarations/types-0.js';
export type { BuyerCapabilities, BuyerCapabilitiesInput } from '../declarations/types-1.js';
export type { BuyerPauseCapability, BuyerRetentionOffer, BuyerPauseCapabilityInput, BuyerRetentionOfferInput } from '../declarations/types-2.js';
export type { BuyerSkipCapability, BuyerSkipCapabilityInput } from '../declarations/types-3.js';
export type { FulfillmentSettings, FulfillmentSettingsRequestRequestInput } from '../declarations/types-19.js';
export type { InventorySettings, InventorySettingsRequestRequestInput } from '../declarations/types-27.js';
export type { InventoryOriginPolicy, InventoryOriginPolicyRequestRequestInput } from '../declarations/types-26.js';
export type {
    InvoiceSettings,
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoiceReminderPolicy,
    InvoiceReminderRule,
    InvoiceSettingsPatchInput,
    InvoicePaymentPolicyInput,
    InvoicePaymentOptionLimitInput,
    InvoiceReminderPolicyInput,
    InvoiceReminderRuleInput
} from '../declarations/types-29.js';
export type { InvoiceAutopayRetryPolicy, InvoiceAutopayRetryPolicyInput } from '../declarations/types-28.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession, MoneyValueInput } from '../declarations/types-33.js';
export type { LegalSettings, LegalSettingsRequestInput, LegalSettingsRequest } from '../declarations/types-30.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { PaymentLimitSettings, PaymentLimitSettingsPatchInput } from '../declarations/types-37.js';
export type {
    PromotionSettings,
    ReceiptSettings,
    PromotionSettingsRequestRequestInput,
    ReceiptSettingsRequestInput,
    ReceiptSettingsRequest
} from '../declarations/types-41.js';
export type { SubscriptionSettings, SubscriptionSettingsRequestRequestInput } from '../declarations/types-49.js';
export type {
    TaxSettings,
    TaxIdentity,
    TippingSettings,
    TaxSettingsRequestInput,
    TaxIdentityPatchInput,
    TippingSettingsPatchInput
} from '../declarations/types-50.js';
export type { DocumentTaxID, DocumentTaxIDRequestRequestInput } from '../declarations/types-18.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export {
    makeAddressRequest,
    makeBrandingSettingsRequest,
    makeBuyerCapabilities,
    makeBuyerPauseCapability,
    makeBuyerRetentionOffer,
    makeBuyerSkipCapability
} from '../declarations/types-65.js';
export {
    makeCheckoutRecoveryEmailSettingsRequestRequest,
    makeCheckoutSavedPaymentDetailsSettingsRequestRequest,
    makeCheckoutSettingsRequestRequest
} from '../declarations/types-66.js';
export {
    makeCustomerAccountPresentationRequestRequest,
    makeCustomerAccountRouteTemplatesRequestRequest,
    makeCustomerAccountSettingsRequestRequest,
    makeCustomerEmailDeliverySettingsRequestRequest
} from '../declarations/types-69.js';
export { makeDocumentTaxIDRequestRequest, makeFulfillmentSettingsRequestRequest } from '../declarations/types-70.js';
export { makeInventoryOriginPolicyRequestRequest, makeInventorySettingsRequestRequest } from '../declarations/types-71.js';
export {
    makeInvoiceAutopayRetryPolicy,
    makeInvoicePaymentOptionLimit,
    makeInvoicePaymentPolicy,
    makeInvoiceReminderPolicy,
    makeInvoiceReminderRule,
    makeInvoiceSettingsPatch,
    makeLegalSettingsRequest,
    makeMetadataPatchRequest
} from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makePaymentLimitSettingsPatch, makePromotionSettingsRequestRequest, makeReceiptSettingsRequest } from '../declarations/types-74.js';
export { makeSubscriptionSettingsRequestRequest, makeTaxIdentityPatch } from '../declarations/types-76.js';
export { makeTaxSettingsRequest, makeTippingSettingsPatch } from '../declarations/types-77.js';
export { makeUpdateSettingsRequest } from '../declarations/types-78.js';
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
