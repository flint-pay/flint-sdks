import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["getEffectiveSettings"]:r0,["getSettings"]:r0,["updateSettings"]:r0,["validateCustomDomain"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.settings = Object.freeze({
      getEffective: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getEffectiveSettings", result, path))),
      getEffectiveWithResponse: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSettings", result, path))),
      getWithResponse: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSettings", result, path))),
      updateWithResponse: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      validateCustomDomain: async (custom_domain_id, params, options) => this.#runtime.request("validateCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("validateCustomDomain", result, path))),
      validateCustomDomainWithResponse: async (custom_domain_id, params, options) => this.#runtime.request("validateCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeBrandingSettingsRequest } from '../models/BrandingSettingsRequest.js';
export { makeBuyerCapabilities } from '../models/BuyerCapabilities.js';
export { makeBuyerPauseCapability } from '../models/BuyerPauseCapability.js';
export { makeBuyerRetentionOffer } from '../models/BuyerRetentionOffer.js';
export { makeBuyerSkipCapability } from '../models/BuyerSkipCapability.js';
export { makeCheckoutRecoveryEmailSettings } from '../models/CheckoutRecoveryEmailSettings.js';
export { makeCheckoutSavedPaymentDetailsSettings } from '../models/CheckoutSavedPaymentDetailsSettings.js';
export { makeCheckoutSettings } from '../models/CheckoutSettings.js';
export { makeCheckoutTaxConfig } from '../models/CheckoutTaxConfig.js';
export { makeCustomerAccountPresentation } from '../models/CustomerAccountPresentation.js';
export { makeCustomerAccountRouteTemplates } from '../models/CustomerAccountRouteTemplates.js';
export { makeCustomerAccountSettings } from '../models/CustomerAccountSettings.js';
export { makeCustomerEmailDeliverySettings } from '../models/CustomerEmailDeliverySettings.js';
export { makeDocumentTaxID } from '../models/DocumentTaxID.js';
export { makeFulfillmentSettings } from '../models/FulfillmentSettings.js';
export { makeInventoryOriginPolicy } from '../models/InventoryOriginPolicy.js';
export { makeInventorySettings } from '../models/InventorySettings.js';
export { makeInvoiceAutopayRetryPolicy } from '../models/InvoiceAutopayRetryPolicy.js';
export { makeInvoicePaymentOptionLimit } from '../models/InvoicePaymentOptionLimit.js';
export { makeInvoicePaymentPolicy } from '../models/InvoicePaymentPolicy.js';
export { makeInvoiceReminderPolicy } from '../models/InvoiceReminderPolicy.js';
export { makeInvoiceReminderRule } from '../models/InvoiceReminderRule.js';
export { makeInvoiceSettingsPatch } from '../models/InvoiceSettingsPatch.js';
export { makeLegalSettingsRequest } from '../models/LegalSettingsRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePaymentLimitSettingsPatch } from '../models/PaymentLimitSettingsPatch.js';
export { makePromotionSettings } from '../models/PromotionSettings.js';
export { makeReceiptSettingsRequest } from '../models/ReceiptSettingsRequest.js';
export { makeSubscriptionSettings } from '../models/SubscriptionSettings.js';
export { makeTaxIdentityPatch } from '../models/TaxIdentityPatch.js';
export { makeTaxSettingsRequest } from '../models/TaxSettingsRequest.js';
export { makeTippingSettingsPatch } from '../models/TippingSettingsPatch.js';
export { makeUpdateSettingsRequest } from '../models/UpdateSettingsRequest.js';
