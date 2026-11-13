import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/priceLists.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';

const _sdkDescriptors = new DescriptorSource(settings, {["createPriceList"]:r0,["createPriceListPrices"]:r0,["deletePriceList"]:r0,["deletePriceListPrice"]:r0,["getPriceList"]:r0,["getPriceListPrice"]:r0,["listPriceListPrices"]:r0,["listPriceLists"]:r0,["updatePriceList"]:r0,["updatePriceListPrice"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.priceLists = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPriceList", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPriceList", result, path))),
      createPrices: async (price_list_id, params, options) => this.#runtime.request("createPriceListPrices", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPriceListPrices", result, path))),
      delete: async (price_list_id, params, options) => this.#runtime.request("deletePriceList", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePriceList", result, path))),
      deletePrice: async (price_list_id, price_list_price_id, params, options) => this.#runtime.request("deletePriceListPrice", _sdkRequestInput([
  "price_list_id",
  "price_list_price_id"
], [price_list_id, price_list_price_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePriceListPrice", result, path))),
      get: async (price_list_id, params, options) => this.#runtime.request("getPriceList", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPriceList", result, path))),
      getPrice: async (price_list_id, price_list_price_id, params, options) => this.#runtime.request("getPriceListPrice", _sdkRequestInput([
  "price_list_id",
  "price_list_price_id"
], [price_list_id, price_list_price_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPriceListPrice", result, path))),
      listPrices: async (price_list_id, params, options) => this.#runtime.request("listPriceListPrices", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "page_size",
  "page_token",
  "variant_id",
  "product_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPriceListPrices", result, path))),
      listPricesPages: (price_list_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPriceListPrices", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "page_size",
  "page_token",
  "variant_id",
  "product_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPriceListPrices", result, path)),
      listPricesItems: (price_list_id, params, options) => this.#runtime.items("listPriceListPrices", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "page_size",
  "page_token",
  "variant_id",
  "product_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listPriceLists", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_segment",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPriceLists", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPriceLists", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_segment",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPriceLists", result, path)),
      listItems: (params, options) => this.#runtime.items("listPriceLists", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_segment",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (price_list_id, params, options) => this.#runtime.request("updatePriceList", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePriceList", result, path))),
      updatePrice: async (price_list_id, price_list_price_id, params, options) => this.#runtime.request("updatePriceListPrice", _sdkRequestInput([
  "price_list_id",
  "price_list_price_id"
], [price_list_id, price_list_price_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePriceListPrice", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePriceListPricesRequest } from '../models/CreatePriceListPricesRequest.js';
export { makeCreatePriceListRequest } from '../models/CreatePriceListRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePriceListPriceRequest } from '../models/PriceListPriceRequest.js';
export { makeQuantityPriceBreakRequest } from '../models/QuantityPriceBreakRequest.js';
export { makeUpdatePriceListPriceRequest } from '../models/UpdatePriceListPriceRequest.js';
export { makeUpdatePriceListRequest } from '../models/UpdatePriceListRequest.js';
