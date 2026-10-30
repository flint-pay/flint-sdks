import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/products.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createProduct"]:r0,["createProductVariant"]:r0,["deleteProduct"]:r0,["deleteProductVariant"]:r0,["getProduct"]:r0,["getProductOption"]:r0,["getProductVariant"]:r0,["listProductOptions"]:r0,["listProducts"]:r0,["listProductVariants"]:r0,["updateProduct"]:r0,["updateProductVariant"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.products = Object.freeze({
      create: async (params, options) => this.#runtime.request("createProduct", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createProduct", result, path))),
      createVariant: async (product_id, params, options) => this.#runtime.request("createProductVariant", _sdkRequestInput([
  "product_id"
], [product_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createProductVariant", result, path))),
      delete: async (product_id, params, options) => this.#runtime.request("deleteProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteProduct", result, path))),
      deleteVariant: async (product_id, variant_id, params, options) => this.#runtime.request("deleteProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteProductVariant", result, path))),
      get: async (product_id, params, options) => this.#runtime.request("getProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProduct", result, path))),
      getOption: async (product_id, option_id, params, options) => this.#runtime.request("getProductOption", _sdkRequestInput([
  "product_id",
  "option_id"
], [product_id, option_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProductOption", result, path))),
      getVariant: async (product_id, variant_id, params, options) => this.#runtime.request("getProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProductVariant", result, path))),
      listOptions: async (product_id, params, options) => this.#runtime.request("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProductOptions", result, path))),
      listOptionsPages: (product_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listProductOptions", result, path)),
      listOptionsItems: (product_id, params, options) => this.#runtime.items("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "variant_external_reference_id",
  "inventory_item_id",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProducts", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "variant_external_reference_id",
  "inventory_item_id",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listProducts", result, path)),
      listItems: (params, options) => this.#runtime.items("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "variant_external_reference_id",
  "inventory_item_id",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listVariants: async (product_id, params, options) => this.#runtime.request("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "sku",
  "inventory_item_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProductVariants", result, path))),
      listVariantsPages: (product_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "sku",
  "inventory_item_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listProductVariants", result, path)),
      listVariantsItems: (product_id, params, options) => this.#runtime.items("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "sku",
  "inventory_item_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (product_id, params, options) => this.#runtime.request("updateProduct", _sdkRequestInput([
  "product_id"
], [product_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateProduct", result, path))),
      updateVariant: async (product_id, variant_id, params, options) => this.#runtime.request("updateProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateProductVariant", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateProductOptionRequest } from '../models/CreateProductOptionRequest.js';
export { makeCreateProductOptionValueRequest } from '../models/CreateProductOptionValueRequest.js';
export { makeCreateProductRequest } from '../models/CreateProductRequest.js';
export { makeCreateProductRequestOptioned } from '../models/CreateProductRequestOptioned.js';
export { makeCreateProductRequestSimple } from '../models/CreateProductRequestSimple.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeGiftCardCustomAmountBoundsRequest } from '../models/GiftCardCustomAmountBoundsRequest.js';
export { makeGiftCardProductConfigurationRequest } from '../models/GiftCardProductConfigurationRequest.js';
export { makeImageInputFile } from '../models/ImageInputFile.js';
export { makeImageInputSourceURL } from '../models/ImageInputSourceURL.js';
export { makeImageRequest } from '../models/ImageRequest.js';
export { makeInventoryItemCreateRequest } from '../models/InventoryItemCreateRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeModifierOverride } from '../models/ModifierOverride.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeProductVariantRequest } from '../models/ProductVariantRequest.js';
export { makeProductVariantSelectedOptionRequest } from '../models/ProductVariantSelectedOptionRequest.js';
export { makeUpdateProductOptionRequest } from '../models/UpdateProductOptionRequest.js';
export { makeUpdateProductOptionValueRequest } from '../models/UpdateProductOptionValueRequest.js';
export { makeUpdateProductRequest } from '../models/UpdateProductRequest.js';
export { makeUpdateProductVariantRequest } from '../models/UpdateProductVariantRequest.js';
export { makeWeight } from '../models/Weight.js';
