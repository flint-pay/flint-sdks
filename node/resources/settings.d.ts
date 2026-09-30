export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { BrandingSettingsInput } from '../declarations/BrandingSettingsInput.js';
import type { CheckoutSettingsInput } from '../declarations/CheckoutSettingsInput.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CustomerAccountSettingsInput } from '../declarations/CustomerAccountSettingsInput.js';
import type { CustomerEmailDeliverySettingsInput } from '../declarations/CustomerEmailDeliverySettingsInput.js';
import type { DocumentTaxIDInput } from '../declarations/DocumentTaxIDInput.js';
import type { FulfillmentSettingsInput } from '../declarations/FulfillmentSettingsInput.js';
import type { InventorySettingsInput } from '../declarations/InventorySettingsInput.js';
import type { InvoicePaymentOptionLimitInput } from '../declarations/InvoicePaymentOptionLimitInput.js';
import type { InvoiceReminderRuleInput } from '../declarations/InvoiceReminderRuleInput.js';
import type { LegalSettingsInput } from '../declarations/LegalSettingsInput.js';
import type { PromotionSettingsInput } from '../declarations/PromotionSettingsInput.js';
import type { ReceiptSettingsInput } from '../declarations/ReceiptSettingsInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { Settings } from '../declarations/Settings.js';
import type { SettingsGetEffectiveInput } from '../declarations/SettingsGetEffectiveInput.js';
import type { SettingsGetEffectiveResponse } from '../declarations/SettingsGetEffectiveResponse.js';
import type { SettingsGetInput } from '../declarations/SettingsGetInput.js';
import type { SettingsGetResponse } from '../declarations/SettingsGetResponse.js';
import type { SettingsInput } from '../declarations/SettingsInput.js';
import type { SettingsResponse } from '../declarations/SettingsResponse.js';
import type { SettingsResponseInput } from '../declarations/SettingsResponseInput.js';
import type { SettingsUpdateInput } from '../declarations/SettingsUpdateInput.js';
import type { SettingsUpdateResponse } from '../declarations/SettingsUpdateResponse.js';
import type { SubscriptionSettingsInput } from '../declarations/SubscriptionSettingsInput.js';
import type { TaxSettingsInput } from '../declarations/TaxSettingsInput.js';
import type { TippingSettingsPatchInput } from '../declarations/TippingSettingsPatchInput.js';
import type { UpdateCatalogSettingsInput } from '../declarations/UpdateCatalogSettingsInput.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface SettingsResource {
    /**
 * Returns the fully resolved effective settings for the authenticated merchant. Optional device_id or location_id can be used to resolve inherited overrides.
 * GET /v1/settings/effective
 * @example
 * client.settings.getEffective({})
 */
    getEffective(params?: { "location_id"?: InputValue<string>; "device_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<SettingsResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getEffectiveWithResponse(params?: { "location_id"?: InputValue<string>; "device_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SettingsGetEffectiveResponse>>;
    /**
 * Returns the raw merchant-scoped settings record for the authenticated merchant. No inheritance is applied.
 * GET /v1/settings
 * @example
 * client.settings.get({})
 */
    get(params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<SettingsResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SettingsGetResponse>>;
    /**
 * Applies a sparse patch to merchant-scoped settings. Send catalog by itself because it has its own version fence. Fee and payment limit controls remain internal-only.
 * PATCH /v1/settings
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.settings.update({"Idempotency-Key": idempotencyKey})
 */
    update(params: (InputValue<({ "branding"?: BrandingSettingsInput; "catalog"?: UpdateCatalogSettingsInput; "checkout"?: CheckoutSettingsInput; "customer_account"?: CustomerAccountSettingsInput; "customer_email_delivery"?: CustomerEmailDeliverySettingsInput; "expected_version"?: string; "fulfillment"?: FulfillmentSettingsInput; "inventory"?: InventorySettingsInput; "invoices"?: (({ "autopay_retry_policy"?: (({ "retry_day_offsets": Array<number>; }) | (null)); "credit_note_number_prefix"?: string | null; "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null; "default_footer"?: string | null; "default_invoice_payment_term_id"?: string | null; "default_memo"?: string | null; "invoice_number_prefix"?: string | null; "payment_policy"?: (({ "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">; "payment_option_limits"?: Array<InvoicePaymentOptionLimitInput>; "show_cost_comparison"?: boolean; }) | (null)); "reminder_policy"?: (({ "rules": Array<InvoiceReminderRuleInput>; }) | (null)); "remit_to_address"?: (({ "city": string; "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); "reply_to_email"?: string | null; "timezone"?: string | null; }) | (null)); "legal"?: LegalSettingsInput; "metadata"?: Record<string, string | null> | null; "promotions"?: PromotionSettingsInput; "receipts"?: ReceiptSettingsInput; "subscriptions"?: SubscriptionSettingsInput; "tax"?: TaxSettingsInput; "tax_identity"?: (({ "legal_name"?: string | null; "registered_address"?: (({ "city": string; "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); "tax_ids"?: Array<DocumentTaxIDInput>; }) | (null)); "tipping"?: TippingSettingsPatchInput; })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SettingsResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(params: (InputValue<({ "branding"?: BrandingSettingsInput; "catalog"?: UpdateCatalogSettingsInput; "checkout"?: CheckoutSettingsInput; "customer_account"?: CustomerAccountSettingsInput; "customer_email_delivery"?: CustomerEmailDeliverySettingsInput; "expected_version"?: string; "fulfillment"?: FulfillmentSettingsInput; "inventory"?: InventorySettingsInput; "invoices"?: (({ "autopay_retry_policy"?: (({ "retry_day_offsets": Array<number>; }) | (null)); "credit_note_number_prefix"?: string | null; "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null; "default_footer"?: string | null; "default_invoice_payment_term_id"?: string | null; "default_memo"?: string | null; "invoice_number_prefix"?: string | null; "payment_policy"?: (({ "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">; "payment_option_limits"?: Array<InvoicePaymentOptionLimitInput>; "show_cost_comparison"?: boolean; }) | (null)); "reminder_policy"?: (({ "rules": Array<InvoiceReminderRuleInput>; }) | (null)); "remit_to_address"?: (({ "city": string; "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); "reply_to_email"?: string | null; "timezone"?: string | null; }) | (null)); "legal"?: LegalSettingsInput; "metadata"?: Record<string, string | null> | null; "promotions"?: PromotionSettingsInput; "receipts"?: ReceiptSettingsInput; "subscriptions"?: SubscriptionSettingsInput; "tax"?: TaxSettingsInput; "tax_identity"?: (({ "legal_name"?: string | null; "registered_address"?: (({ "city": string; "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); "tax_ids"?: Array<DocumentTaxIDInput>; }) | (null)); "tipping"?: TippingSettingsPatchInput; })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SettingsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly settings: SettingsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { SettingsResponse } from '../declarations/SettingsResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { SettingsGetEffectiveResponse } from '../declarations/SettingsGetEffectiveResponse.js';
export type { SettingsGetResponse } from '../declarations/SettingsGetResponse.js';
export type { BrandingSettingsInput } from '../declarations/BrandingSettingsInput.js';
export type { UpdateCatalogSettingsInput } from '../declarations/UpdateCatalogSettingsInput.js';
export type { CheckoutSettingsInput } from '../declarations/CheckoutSettingsInput.js';
export type { CustomerAccountSettingsInput } from '../declarations/CustomerAccountSettingsInput.js';
export type { CustomerEmailDeliverySettingsInput } from '../declarations/CustomerEmailDeliverySettingsInput.js';
export type { FulfillmentSettingsInput } from '../declarations/FulfillmentSettingsInput.js';
export type { InventorySettingsInput } from '../declarations/InventorySettingsInput.js';
export type { InvoicePaymentOptionLimitInput } from '../declarations/InvoicePaymentOptionLimitInput.js';
export type { InvoiceReminderRuleInput } from '../declarations/InvoiceReminderRuleInput.js';
export type { LegalSettingsInput } from '../declarations/LegalSettingsInput.js';
export type { PromotionSettingsInput } from '../declarations/PromotionSettingsInput.js';
export type { ReceiptSettingsInput } from '../declarations/ReceiptSettingsInput.js';
export type { SubscriptionSettingsInput } from '../declarations/SubscriptionSettingsInput.js';
export type { TaxSettingsInput } from '../declarations/TaxSettingsInput.js';
export type { DocumentTaxIDInput } from '../declarations/DocumentTaxIDInput.js';
export type { TippingSettingsPatchInput } from '../declarations/TippingSettingsPatchInput.js';
export type { SettingsUpdateResponse } from '../declarations/SettingsUpdateResponse.js';
export type { Settings } from '../declarations/Settings.js';
export type { SettingsInput } from '../declarations/SettingsInput.js';
export type { SettingsResponseInput } from '../declarations/SettingsResponseInput.js';
export type { SettingsGetEffectiveInput } from '../declarations/SettingsGetEffectiveInput.js';
export type { SettingsGetInput } from '../declarations/SettingsGetInput.js';
export type { SettingsUpdateInput } from '../declarations/SettingsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CustomerAccountPresentationInput } from '../declarations/CustomerAccountPresentationInput.js';
export type { CustomerAccountRouteTemplatesInput } from '../declarations/CustomerAccountRouteTemplatesInput.js';
export type { InventoryOriginPolicyInput } from '../declarations/InventoryOriginPolicyInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { BrandingSettings } from '../declarations/BrandingSettings.js';
export type { CatalogSettings } from '../declarations/CatalogSettings.js';
export type { CheckoutSettings } from '../declarations/CheckoutSettings.js';
export type { CustomerAccountSettings } from '../declarations/CustomerAccountSettings.js';
export type { CustomerAccountPresentation } from '../declarations/CustomerAccountPresentation.js';
export type { CustomerAccountRouteTemplates } from '../declarations/CustomerAccountRouteTemplates.js';
export type { CustomerAccountDNSRecord } from '../declarations/CustomerAccountDNSRecord.js';
export type { CustomerEmailDeliverySettings } from '../declarations/CustomerEmailDeliverySettings.js';
export type { FulfillmentSettings } from '../declarations/FulfillmentSettings.js';
export type { InventorySettings } from '../declarations/InventorySettings.js';
export type { InventoryOriginPolicy } from '../declarations/InventoryOriginPolicy.js';
export type { InvoiceSettings } from '../declarations/InvoiceSettings.js';
export type { InvoiceAutopayRetryPolicy } from '../declarations/InvoiceAutopayRetryPolicy.js';
export type { InvoicePaymentPolicy } from '../declarations/InvoicePaymentPolicy.js';
export type { InvoicePaymentOptionLimit } from '../declarations/InvoicePaymentOptionLimit.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { InvoiceReminderPolicy } from '../declarations/InvoiceReminderPolicy.js';
export type { InvoiceReminderRule } from '../declarations/InvoiceReminderRule.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { LegalSettings } from '../declarations/LegalSettings.js';
export type { PromotionSettings } from '../declarations/PromotionSettings.js';
export type { ReceiptSettings } from '../declarations/ReceiptSettings.js';
export type { SubscriptionSettings } from '../declarations/SubscriptionSettings.js';
export type { TaxSettings } from '../declarations/TaxSettings.js';
export type { DocumentTaxID } from '../declarations/DocumentTaxID.js';
export type { TippingSettings } from '../declarations/TippingSettings.js';
export type { CatalogSettingsInput } from '../declarations/CatalogSettingsInput.js';
export type { InvoiceSettingsInput } from '../declarations/InvoiceSettingsInput.js';
export type { InvoiceAutopayRetryPolicyInput } from '../declarations/InvoiceAutopayRetryPolicyInput.js';
export type { InvoicePaymentPolicyInput } from '../declarations/InvoicePaymentPolicyInput.js';
export type { InvoiceReminderPolicyInput } from '../declarations/InvoiceReminderPolicyInput.js';
export type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
export type { TippingSettingsInput } from '../declarations/TippingSettingsInput.js';
export type { ResponseMetaInput } from '../declarations/ResponseMetaInput.js';
export type { ResponseWarningInput } from '../declarations/ResponseWarningInput.js';
export type { NextActionInput } from '../declarations/NextActionInput.js';
export type { UpdateSettingsRequestInput } from '../declarations/UpdateSettingsRequestInput.js';
export { makeSettingsResponse } from '../declarations/makeSettingsResponse.js';
export { makeSettings } from '../declarations/makeSettings.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeBrandingSettings } from '../declarations/makeBrandingSettings.js';
export { makeCatalogSettings } from '../declarations/makeCatalogSettings.js';
export { makeCheckoutSettings } from '../declarations/makeCheckoutSettings.js';
export { makeCustomerAccountSettings } from '../declarations/makeCustomerAccountSettings.js';
export { makeCustomerAccountPresentation } from '../declarations/makeCustomerAccountPresentation.js';
export { makeCustomerAccountRouteTemplates } from '../declarations/makeCustomerAccountRouteTemplates.js';
export { makeCustomerAccountDNSRecord } from '../declarations/makeCustomerAccountDNSRecord.js';
export { makeCustomerEmailDeliverySettings } from '../declarations/makeCustomerEmailDeliverySettings.js';
export { makeFulfillmentSettings } from '../declarations/makeFulfillmentSettings.js';
export { makeInventorySettings } from '../declarations/makeInventorySettings.js';
export { makeInventoryOriginPolicy } from '../declarations/makeInventoryOriginPolicy.js';
export { makeInvoiceSettings } from '../declarations/makeInvoiceSettings.js';
export { makeInvoiceAutopayRetryPolicy } from '../declarations/makeInvoiceAutopayRetryPolicy.js';
export { makeInvoicePaymentPolicy } from '../declarations/makeInvoicePaymentPolicy.js';
export { makeInvoicePaymentOptionLimit } from '../declarations/makeInvoicePaymentOptionLimit.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeInvoiceReminderPolicy } from '../declarations/makeInvoiceReminderPolicy.js';
export { makeInvoiceReminderRule } from '../declarations/makeInvoiceReminderRule.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeLegalSettings } from '../declarations/makeLegalSettings.js';
export { makePromotionSettings } from '../declarations/makePromotionSettings.js';
export { makeReceiptSettings } from '../declarations/makeReceiptSettings.js';
export { makeSubscriptionSettings } from '../declarations/makeSubscriptionSettings.js';
export { makeTaxSettings } from '../declarations/makeTaxSettings.js';
export { makeDocumentTaxID } from '../declarations/makeDocumentTaxID.js';
export { makeTippingSettings } from '../declarations/makeTippingSettings.js';
