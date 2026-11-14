import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/settings.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';

const _sdkDescriptors = new DescriptorSource(settings, {["getEffectiveSettings"]:r0,["getSettings"]:r0,["updateSettings"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.settings = Object.freeze({
      getEffective: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getEffectiveSettings", result, path))),
      get: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSettings", result, path))),
      update: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
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
export { makeBuyerCapabilitiesRequest } from '../models/BuyerCapabilitiesRequest.js';
export { makeBuyerPauseCapability } from '../models/BuyerPauseCapability.js';
export { makeBuyerRetentionOfferRequest } from '../models/BuyerRetentionOfferRequest.js';
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
export { makeInventoryRoutingSourceInputFixedLocation } from '../models/InventoryRoutingSourceInputFixedLocation.js';
export { makeInventoryRoutingSourceInputPolicy } from '../models/InventoryRoutingSourceInputPolicy.js';
export { makeInventoryRoutingSourceInputPolicyRevision } from '../models/InventoryRoutingSourceInputPolicyRevision.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
export { makeInventorySettingsRequest } from '../models/InventorySettingsRequest.js';
export { makeInvoiceAutopayRetryPolicy } from '../models/InvoiceAutopayRetryPolicy.js';
export { makeInvoicePaymentOptionLimitRequest } from '../models/InvoicePaymentOptionLimitRequest.js';
export { makeInvoicePaymentPolicyRequest } from '../models/InvoicePaymentPolicyRequest.js';
export { makeInvoiceReminderPolicy } from '../models/InvoiceReminderPolicy.js';
export { makeInvoiceReminderRule } from '../models/InvoiceReminderRule.js';
export { makeInvoiceSettingsPatch } from '../models/InvoiceSettingsPatch.js';
export { makeLegalSettingsRequest } from '../models/LegalSettingsRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePaymentLimitSettingsPatch } from '../models/PaymentLimitSettingsPatch.js';
export { makePaymentSettingsPatch } from '../models/PaymentSettingsPatch.js';
export { makePromotionSettingsRequest } from '../models/PromotionSettingsRequest.js';
export { makeSubscriptionSettingsRequest } from '../models/SubscriptionSettingsRequest.js';
export { makeTaxDefaultCalculationRequest } from '../models/TaxDefaultCalculationRequest.js';
export { makeTaxIdentityPatch } from '../models/TaxIdentityPatch.js';
export { makeTaxSettingsRequest } from '../models/TaxSettingsRequest.js';
export { makeTippingSettingsPatch } from '../models/TippingSettingsPatch.js';
export { makeUpdateSettingsRequest } from '../models/UpdateSettingsRequest.js';
