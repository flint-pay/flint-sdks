import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/settings.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';

const _sdkDescriptors = new DescriptorSource(settings, {["getEffectiveSettings"]:r0,["getSettings"]:r0,["updateSettings"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.settings = Object.freeze({
      getEffective: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [
  "location_id",
  "device_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getEffectiveWithResponse: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [
  "location_id",
  "device_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeSettingsResponse } from '../models/SettingsResponse.js';
export { makeSettings } from '../models/Settings.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeBrandingSettings } from '../models/BrandingSettings.js';
export { makeCatalogSettings } from '../models/CatalogSettings.js';
export { makeCheckoutSettings } from '../models/CheckoutSettings.js';
export { makeCustomerAccountSettings } from '../models/CustomerAccountSettings.js';
export { makeCustomerAccountPresentation } from '../models/CustomerAccountPresentation.js';
export { makeCustomerAccountRouteTemplates } from '../models/CustomerAccountRouteTemplates.js';
export { makeCustomerAccountDNSRecord } from '../models/CustomerAccountDNSRecord.js';
export { makeCustomerEmailDeliverySettings } from '../models/CustomerEmailDeliverySettings.js';
export { makeFulfillmentSettings } from '../models/FulfillmentSettings.js';
export { makeInventorySettings } from '../models/InventorySettings.js';
export { makeInventoryOriginPolicy } from '../models/InventoryOriginPolicy.js';
export { makeInvoiceSettings } from '../models/InvoiceSettings.js';
export { makeInvoiceAutopayRetryPolicy } from '../models/InvoiceAutopayRetryPolicy.js';
export { makeInvoicePaymentPolicy } from '../models/InvoicePaymentPolicy.js';
export { makeInvoicePaymentOptionLimit } from '../models/InvoicePaymentOptionLimit.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeInvoiceReminderPolicy } from '../models/InvoiceReminderPolicy.js';
export { makeInvoiceReminderRule } from '../models/InvoiceReminderRule.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeLegalSettings } from '../models/LegalSettings.js';
export { makePromotionSettings } from '../models/PromotionSettings.js';
export { makeReceiptSettings } from '../models/ReceiptSettings.js';
export { makeSubscriptionSettings } from '../models/SubscriptionSettings.js';
export { makeTaxSettings } from '../models/TaxSettings.js';
export { makeDocumentTaxID } from '../models/DocumentTaxID.js';
export { makeTippingSettings } from '../models/TippingSettings.js';
