import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { Settings, SettingsGetEffectiveParams, SettingsGetParams, SettingsResponse, SettingsUpdateParams } from '../declarations/types-68.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
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
    SettingsGetEffectiveParams,
    Settings,
    SettingsResponse,
    SettingsGetParams,
    SettingsUpdateParams,
    StatementDescriptorStatus
} from '../declarations/types-68.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { ClientOptions, CheckoutSettings, CheckoutSettingsRequestInput } from '../declarations/types-7.js';
export type {
    AuthMode,
    BrandingSettings,
    BuyerCapabilities,
    BrandingSettingsRequestInput,
    BuyerCapabilitiesRequestInput
} from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type {
    CheckoutRecoveryEmailSettings,
    CheckoutSavedPaymentDetailsSettings,
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from '../declarations/types-6.js';
export type {
    CustomerAccountSettings,
    CustomerAccountPresentation,
    CustomerAccountRouteTemplates,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsRequestInput,
    CustomerAccountPresentationRequestInput,
    CustomerAccountRouteTemplatesRequestInput,
    CustomerEmailDeliverySettingsRequestInput
} from '../declarations/types-16.js';
export type {
    BuyerPauseCapability,
    BuyerRetentionOffer,
    BuyerPauseCapabilityInput,
    BuyerRetentionOfferRequestInput
} from '../declarations/types-3.js';
export type { BuyerSkipCapability, BuyerSkipCapabilityInput } from '../declarations/types-4.js';
export type { FulfillmentSettings, FulfillmentSettingsRequestInput } from '../declarations/types-28.js';
export type {
    InventorySettings,
    InvoiceAutopayRetryPolicy,
    InventorySettingsRequestInput,
    InventoryRoutingSourceRequestInput,
    InvoiceAutopayRetryPolicyInput
} from '../declarations/types-34.js';
export type {
    InventoryRoutingSource,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput
} from '../declarations/types-33.js';
export type { InventoryOriginPolicy, InventoryOriginPolicyRequestInput } from '../declarations/types-32.js';
export type { InvoiceSettings, InvoiceSettingsPatchInput } from '../declarations/types-38.js';
export type { InvoicePaymentPolicy, InvoicePaymentOptionLimit, InvoicePaymentOptionLimitRequestInput } from '../declarations/types-36.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-44.js';
export type {
    InvoiceReminderPolicy,
    InvoiceReminderRule,
    InvoicePaymentPolicyRequestInput,
    InvoiceReminderPolicyInput,
    InvoiceReminderRuleInput
} from '../declarations/types-37.js';
export type { Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { LegalSettings, LegalSettingsRequestInput, LegalSettingsRequest } from '../declarations/types-39.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-43.js';
export type { PaymentLimitSettings, PaymentLimitSettingsPatchInput } from '../declarations/types-52.js';
export type { PaymentSettings, PaymentSettingsPatchInput, PaymentSettingsPatch } from '../declarations/types-54.js';
export type { PromotionSettings, PromotionSettingsRequestInput } from '../declarations/types-59.js';
export type {
    ReceiptSettings,
    ReadinessMerchantAccountSession,
    ReceiptSettingsPatchInput,
    ReceiptSettingsPatch
} from '../declarations/types-60.js';
export type { SubscriptionSettings, SubscriptionSettingsRequestInput } from '../declarations/types-72.js';
export type {
    TaxSettings,
    TaxDefaultCalculation,
    TaxIdentity,
    TaxSettingsRequestInput,
    TaxDefaultCalculationRequestInput,
    TaxIdentityPatchInput
} from '../declarations/types-74.js';
export type { DocumentTaxID, DocumentTaxIDRequestInput, DisputesAcceptParams } from '../declarations/types-26.js';
export type { TippingSettings, TippingSettingsPatchInput } from '../declarations/types-75.js';
export type { UpdateSettingsRequestInput } from '../declarations/types-78.js';
export {
    makeAddressRequest,
    makeBrandingSettingsRequest,
    makeBuyerCapabilitiesRequest,
    makeBuyerPauseCapability,
    makeBuyerRetentionOfferRequest,
    makeBuyerSkipCapability
} from '../declarations/types-80.js';
export {
    makeCheckoutRecoveryEmailSettingsRequest,
    makeCheckoutSavedPaymentDetailsSettingsRequest,
    makeCheckoutSettingsRequest
} from '../declarations/types-81.js';
export {
    makeCustomerAccountPresentationRequest,
    makeCustomerAccountRouteTemplatesRequest,
    makeCustomerAccountSettingsRequest,
    makeCustomerEmailDeliverySettingsRequest
} from '../declarations/types-85.js';
export { makeDocumentTaxIDRequest } from '../declarations/types-86.js';
export {
    makeFulfillmentSettingsRequest,
    makeInventoryOriginPolicyRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest,
    makeInventorySettingsRequest,
    makeInvoiceAutopayRetryPolicy
} from '../declarations/types-87.js';
export {
    makeInvoicePaymentOptionLimitRequest,
    makeInvoicePaymentPolicyRequest,
    makeInvoiceReminderPolicy,
    makeInvoiceReminderRule,
    makeInvoiceSettingsPatch,
    makeLegalSettingsRequest,
    makeMetadataMap,
    makeMetadataPatchRequest
} from '../declarations/types-88.js';
export { makeMoneyValue } from '../declarations/types-89.js';
export { makePaymentLimitSettingsPatch, makePaymentSettingsPatch } from '../declarations/types-90.js';
export { makePromotionSettingsRequest, makeReceiptSettingsPatch } from '../declarations/types-91.js';
export {
    makeSubscriptionSettingsRequest,
    makeTaxDefaultCalculationRequest,
    makeTaxIdentityPatch,
    makeTaxSettingsRequest,
    makeTippingSettingsPatch
} from '../declarations/types-93.js';
export { makeUpdateSettingsRequest } from '../declarations/types-94.js';
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
 * Applies a sparse patch to merchant settings. See each field for how it is patched. A partner app
 * install token can't send `checkout.enabled_payment_options`,
 * `customer_account.buyer_capabilities`, `inventory.origin_policies`,
 * `invoices.autopay_retry_policy`, `invoices.default_collection_mode`,
 * `invoices.default_invoice_payment_term_id`, `invoices.payment_policy`,
 * `invoices.remit_to_address`, `payment_limits`, `payments.statement_descriptor`,
 * `subscriptions.default_billing_schedule_owner`, `subscriptions.dunning_end_action`,
 * `subscriptions.dunning_retry_days`, `subscriptions.external_dunning_end_action`, `tax`, or
 * `tax_identity`, or null for `checkout`, `customer_account`, `inventory`, `invoices`, or
 * `subscriptions`; each returns `400 INVALID_REQUEST` with a `NOT_ALLOWED` detail whose `param`
 * names the field.
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
