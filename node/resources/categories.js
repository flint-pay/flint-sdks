import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/categories.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["createCategory"]:r0,["deleteCategory"]:r0,["getCategory"]:r0,["listCategories"]:r0,["updateCategory"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.categories = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCategory", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCategory", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCategory", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (category_id, params, options) => this.#runtime.request("deleteCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCategory", result, path))),
      removeWithResponse: async (category_id, params, options) => this.#runtime.request("deleteCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (category_id, params, options) => this.#runtime.request("getCategory", _sdkRequestInput([
  "category_id"
], [category_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCategory", result, path))),
      getWithResponse: async (category_id, params, options) => this.#runtime.request("getCategory", _sdkRequestInput([
  "category_id"
], [category_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "handle",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCategories", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "handle",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "handle",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCategories", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "handle",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "handle",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      update: async (category_id, params, options) => this.#runtime.request("updateCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCategory", result, path))),
      updateWithResponse: async (category_id, params, options) => this.#runtime.request("updateCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateCategoryRequest } from '../models/CreateCategoryRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateCategoryRequest } from '../models/UpdateCategoryRequest.js';
