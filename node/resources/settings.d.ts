import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { Settings, SettingsGetEffectiveParams, SettingsGetParams, SettingsResponse, SettingsUpdateParams } from '../declarations/types-56.js';
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
export type { SettingsGetEffectiveParams, Settings, SettingsResponse, SettingsGetParams, SettingsUpdateParams } from '../declarations/types-56.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { ClientOptions, CheckoutSettings, CheckoutTaxConfig, CheckoutSettingsRequestInput } from '../declarations/types-6.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { BrandingSettings, BuyerCapabilities, BrandingSettingsRequestInput, BuyerCapabilitiesRequestInput } from '../declarations/types-1.js';
export type {
    CheckoutRecoveryEmailSettings,
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from '../declarations/types-5.js';
export type {
    CustomerAccountSettings,
    CustomerAccountPresentation,
    CustomerAccountRouteTemplates,
    CustomerAccountSettingsRequestInput,
    CustomerAccountPresentationRequestInput,
    CustomerAccountRouteTemplatesRequestInput
} from '../declarations/types-14.js';
export type { BuyerPauseCapability, BuyerPauseCapabilityInput } from '../declarations/types-2.js';
export type {
    BuyerRetentionOffer,
    BuyerSkipCapability,
    BuyerRetentionOfferRequestInput,
    BuyerSkipCapabilityInput
} from '../declarations/types-3.js';
export type { CustomerEmailDeliverySettings, CustomerEmailDeliverySettingsRequestInput } from '../declarations/types-15.js';
export type { FulfillmentSettings, FulfillmentSettingsRequestInput } from '../declarations/types-24.js';
export type {
    InventorySettings,
    InventoryRoutingSource,
    InventorySettingsRequestInput,
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput
} from '../declarations/types-29.js';
export type { InventoryOriginPolicy, InventoryOriginPolicyRequestInput } from '../declarations/types-28.js';
export type { InvoiceSettings, InvoiceSettingsPatchInput } from '../declarations/types-33.js';
export type { InvoiceAutopayRetryPolicy, InvoiceAutopayRetryPolicyInput } from '../declarations/types-30.js';
export type {
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoiceReminderPolicy,
    InvoiceReminderRule,
    InvoicePaymentPolicyRequestInput,
    InvoicePaymentOptionLimitRequestInput,
    InvoiceReminderPolicyInput,
    InvoiceReminderRuleInput
} from '../declarations/types-32.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-37.js';
export type { LegalSettings, LegalSettingsRequestInput, LegalSettingsRequest } from '../declarations/types-34.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-36.js';
export type { PaymentLimitSettings, PaymentLimitSettingsPatchInput } from '../declarations/types-44.js';
export type { PaymentSettings, PaymentSettingsPatchInput, PaymentSettingsPatch } from '../declarations/types-45.js';
export type { PromotionSettings, ReadinessMerchantAccountSession, PromotionSettingsRequestInput } from '../declarations/types-49.js';
export type { SubscriptionSettings, SubscriptionSettingsRequestInput } from '../declarations/types-60.js';
export type { TaxSettings, TippingSettings, TaxSettingsRequestInput, TippingSettingsPatchInput } from '../declarations/types-62.js';
export type { TaxIdentity, TaxIdentityPatchInput } from '../declarations/types-61.js';
export type { DocumentTaxID, DocumentTaxIDRequestInput } from '../declarations/types-23.js';
export type { UpdateSettingsRequestInput } from '../declarations/types-65.js';
export type { DisputesAcceptParams } from '../declarations/types-22.js';
export { makeAddressRequest } from '../declarations/types-66.js';
export {
    makeBrandingSettingsRequest,
    makeBuyerCapabilitiesRequest,
    makeBuyerPauseCapability,
    makeBuyerRetentionOfferRequest,
    makeBuyerSkipCapability,
    makeCheckoutRecoveryEmailSettingsRequest,
    makeCheckoutSavedPaymentDetailsSettingsRequest,
    makeCheckoutSettingsRequest
} from '../declarations/types-67.js';
export {
    makeCustomerAccountPresentationRequest,
    makeCustomerAccountRouteTemplatesRequest,
    makeCustomerAccountSettingsRequest,
    makeCustomerEmailDeliverySettingsRequest
} from '../declarations/types-71.js';
export {
    makeDocumentTaxIDRequest,
    makeFulfillmentSettingsRequest,
    makeInventoryOriginPolicyRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest,
    makeInventorySettingsRequest,
    makeInvoiceAutopayRetryPolicy
} from '../declarations/types-73.js';
export {
    makeInvoicePaymentOptionLimitRequest,
    makeInvoicePaymentPolicyRequest,
    makeInvoiceReminderPolicy,
    makeInvoiceReminderRule,
    makeInvoiceSettingsPatch,
    makeLegalSettingsRequest,
    makeMetadataPatchRequest
} from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export { makePaymentLimitSettingsPatch, makePaymentSettingsPatch, makePromotionSettingsRequest } from '../declarations/types-76.js';
export {
    makeSubscriptionSettingsRequest,
    makeTaxIdentityPatch,
    makeTaxSettingsRequest,
    makeTippingSettingsPatch
} from '../declarations/types-79.js';
export { makeUpdateSettingsRequest } from '../declarations/types-80.js';
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
