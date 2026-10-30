import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["getEffectiveSettings"]:r0,["getSettings"]:r0,["updateSettings"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.settings = Object.freeze({
      getEffective: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getEffectiveSettings", result, path))),
      get: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSettings", result, path))),
      update: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSettings", result, path))),
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
export { makeCheckoutRecoveryEmailSettingsRequest } from '../models/CheckoutRecoveryEmailSettingsRequest.js';
export { makeCheckoutSavedPaymentDetailsSettingsRequest } from '../models/CheckoutSavedPaymentDetailsSettingsRequest.js';
export { makeCheckoutSettingsRequest } from '../models/CheckoutSettingsRequest.js';
export { makeCustomerAccountPresentationRequest } from '../models/CustomerAccountPresentationRequest.js';
export { makeCustomerAccountRouteTemplatesRequest } from '../models/CustomerAccountRouteTemplatesRequest.js';
export { makeCustomerAccountSettingsRequest } from '../models/CustomerAccountSettingsRequest.js';
export { makeCustomerEmailDeliverySettingsRequest } from '../models/CustomerEmailDeliverySettingsRequest.js';
export { makeDocumentTaxIDRequest } from '../models/DocumentTaxIDRequest.js';
export { makeFulfillmentSettingsRequest } from '../models/FulfillmentSettingsRequest.js';
export { makeInventoryOriginPolicyRequest } from '../models/InventoryOriginPolicyRequest.js';
export { makeInventorySettingsRequest } from '../models/InventorySettingsRequest.js';
export { makeInvoiceAutopayRetryPolicy } from '../models/InvoiceAutopayRetryPolicy.js';
export { makeInvoicePaymentOptionLimit } from '../models/InvoicePaymentOptionLimit.js';
export { makeInvoicePaymentPolicy } from '../models/InvoicePaymentPolicy.js';
export { makeInvoiceReminderPolicy } from '../models/InvoiceReminderPolicy.js';
export { makeInvoiceReminderRule } from '../models/InvoiceReminderRule.js';
export { makeInvoiceSettingsPatch } from '../models/InvoiceSettingsPatch.js';
export { makeLegalSettingsRequest } from '../models/LegalSettingsRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePaymentLimitSettingsPatch } from '../models/PaymentLimitSettingsPatch.js';
export { makePromotionSettingsRequest } from '../models/PromotionSettingsRequest.js';
export { makeReceiptSettingsRequest } from '../models/ReceiptSettingsRequest.js';
export { makeSubscriptionSettingsRequest } from '../models/SubscriptionSettingsRequest.js';
export { makeTaxIdentityPatch } from '../models/TaxIdentityPatch.js';
export { makeTaxSettingsRequest } from '../models/TaxSettingsRequest.js';
export { makeTippingSettingsPatch } from '../models/TippingSettingsPatch.js';
export { makeUpdateSettingsRequest } from '../models/UpdateSettingsRequest.js';
