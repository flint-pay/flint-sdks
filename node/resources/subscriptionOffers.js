import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptionOffers.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createSubscriptionOffer"]:r0,["deleteSubscriptionOffer"]:r0,["getSubscriptionOffer"]:r0,["listSubscriptionOffers"]:r0,["updateSubscriptionOffer"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptionOffers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionOffer", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionOffer", result, path))),
      delete: async (subscription_offer_id, params, options) => this.#runtime.request("deleteSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionOffer", result, path))),
      get: async (subscription_offer_id, params, options) => this.#runtime.request("getSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionOffer", result, path))),
      list: async (params, options) => this.#runtime.request("listSubscriptionOffers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "product_id",
  "variant_id",
  "query",
  "external_reference_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionOffers", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionOffers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "product_id",
  "variant_id",
  "query",
  "external_reference_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionOffers", result, path)),
      listItems: (params, options) => this.#runtime.items("listSubscriptionOffers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "product_id",
  "variant_id",
  "query",
  "external_reference_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (subscription_offer_id, params, options) => this.#runtime.request("updateSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionOffer", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateSubscriptionOfferRequest } from '../models/CreateSubscriptionOfferRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeUpdateSubscriptionOfferRequest } from '../models/UpdateSubscriptionOfferRequest.js';
