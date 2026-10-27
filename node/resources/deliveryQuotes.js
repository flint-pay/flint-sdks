import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryQuotes.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';

const _sdkDescriptors = new DescriptorSource(settings, {["getDeliveryQuote"]:r0,["listDeliveryQuotes"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryQuotes = Object.freeze({
      get: async (delivery_quote_id, params, options) => this.#runtime.request("getDeliveryQuote", _sdkRequestInput([
  "delivery_quote_id"
], [delivery_quote_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryQuote", result, path))),
      getWithResponse: async (delivery_quote_id, params, options) => this.#runtime.request("getDeliveryQuote", _sdkRequestInput([
  "delivery_quote_id"
], [delivery_quote_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryQuotes", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryQuotes", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryBuyerLocationInputAddress } from '../models/DeliveryBuyerLocationInputAddress.js';
export { makeDeliveryBuyerLocationInputCoordinate } from '../models/DeliveryBuyerLocationInputCoordinate.js';
export { makeDeliveryBuyerLocationRequest } from '../models/DeliveryBuyerLocationRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeLocationCoordinate } from '../models/LocationCoordinate.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
