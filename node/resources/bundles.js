import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/bundles.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createBundle"]:r0,["deleteBundle"]:r0,["getBundle"]:r0,["listBundleComponents"]:r0,["listBundles"]:r0,["updateBundle"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.bundles = Object.freeze({
      create: async (params, options) => this.#runtime.request("createBundle", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createBundle", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createBundle", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (bundle_id, params, options) => this.#runtime.request("deleteBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteBundle", result, path))),
      removeWithResponse: async (bundle_id, params, options) => this.#runtime.request("deleteBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (bundle_id, params, options) => this.#runtime.request("getBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getBundle", result, path))),
      getWithResponse: async (bundle_id, params, options) => this.#runtime.request("getBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      listComponents: async (bundle_id, params, options) => this.#runtime.request("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBundleComponents", result, path))),
      listComponentsWithResponse: async (bundle_id, params, options) => this.#runtime.request("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options).then(_sdkResponse),
      listComponentsPages: (bundle_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listBundleComponents", result, path)),
      listComponentsPagesWithResponse: (bundle_id, params, options) => _sdkResponsePages(this.#runtime.pages("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options)),
      listComponentsItems: (bundle_id, params, options) => this.#runtime.items("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBundles", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listBundles", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      update: async (bundle_id, params, options) => this.#runtime.request("updateBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateBundle", result, path))),
      updateWithResponse: async (bundle_id, params, options) => this.#runtime.request("updateBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateBundleComponentRequest } from '../models/CreateBundleComponentRequest.js';
export { makeCreateBundleRequest } from '../models/CreateBundleRequest.js';
export { makeImageRequest } from '../models/ImageRequest.js';
export { makeModifierOverride } from '../models/ModifierOverride.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateBundleComponentRequest } from '../models/UpdateBundleComponentRequest.js';
export { makeUpdateBundleRequest } from '../models/UpdateBundleRequest.js';
