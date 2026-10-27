import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptionOffers.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createSubscriptionOffer"]:r0,["deleteSubscriptionOffer"]:r0,["getSubscriptionOffer"]:r0,["listSubscriptionOffers"]:r0,["updateSubscriptionOffer"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptionOffers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionOffer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionOffer", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscriptionOffer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (subscription_offer_id, params, options) => this.#runtime.request("deleteSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionOffer", result, path))),
      removeWithResponse: async (subscription_offer_id, params, options) => this.#runtime.request("deleteSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (subscription_offer_id, params, options) => this.#runtime.request("getSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionOffer", result, path))),
      getWithResponse: async (subscription_offer_id, params, options) => this.#runtime.request("getSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionOffers", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptionOffers", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionOffers", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionOffers", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (subscription_offer_id, params, options) => this.#runtime.request("updateSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionOffer", result, path))),
      updateWithResponse: async (subscription_offer_id, params, options) => this.#runtime.request("updateSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateSubscriptionOfferRequest } from '../models/CreateSubscriptionOfferRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeUpdateSubscriptionOfferRequest } from '../models/UpdateSubscriptionOfferRequest.js';
