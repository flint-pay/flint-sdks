import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/shops.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';

const _sdkDescriptors = new DescriptorSource(settings, {["createShop"]:r0,["deleteShop"]:r0,["getShop"]:r0,["getShopListingPublic"]:r0,["getShopPublic"]:r0,["listShopListings"]:r0,["listShops"]:r0,["resolveShop"]:r0,["updateShop"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.shops = Object.freeze({
      create: async (params, options) => this.#runtime.request("createShop", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createShop", result, path))),
      delete: async (shop_id, params, options) => this.#runtime.request("deleteShop", _sdkRequestInput([
  "shop_id"
], [shop_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteShop", result, path))),
      get: async (shop_id, params, options) => this.#runtime.request("getShop", _sdkRequestInput([
  "shop_id"
], [shop_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getShop", result, path))),
      getListingPublic: async (shop_id, shop_listing_id, params, options) => this.#runtime.request("getShopListingPublic", _sdkRequestInput([
  "shop_id",
  "shop_listing_id"
], [shop_id, shop_listing_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getShopListingPublic", result, path))),
      getPublic: async (shop_id, params, options) => this.#runtime.request("getShopPublic", _sdkRequestInput([
  "shop_id"
], [shop_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getShopPublic", result, path))),
      listListings: async (shop_id, params, options) => this.#runtime.request("listShopListings", _sdkRequestInput([
  "shop_id"
], [shop_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listShopListings", result, path))),
      listListingsPages: (shop_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listShopListings", _sdkRequestInput([
  "shop_id"
], [shop_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listShopListings", result, path)),
      listListingsItems: (shop_id, params, options) => this.#runtime.items("listShopListings", _sdkRequestInput([
  "shop_id"
], [shop_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listShops", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
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
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listShops", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listShops", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
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
]), options), [], (result, path) => this.#runtime.decodePayload("listShops", result, path)),
      listItems: (params, options) => this.#runtime.items("listShops", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
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
      resolve: async (shop_id, params, options) => this.#runtime.request("resolveShop", _sdkRequestInput([
  "shop_id"
], [shop_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolveShop", result, path))),
      update: async (shop_id, params, options) => this.#runtime.request("updateShop", _sdkRequestInput([
  "shop_id"
], [shop_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateShop", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCheckoutBuyerFieldsRequest } from '../models/CheckoutBuyerFieldsRequest.js';
export { makeCheckoutCustomTextWriteConfig } from '../models/CheckoutCustomTextWriteConfig.js';
export { makeCheckoutLegalConfigRequest } from '../models/CheckoutLegalConfigRequest.js';
export { makeCheckoutPaymentConfigRequest } from '../models/CheckoutPaymentConfigRequest.js';
export { makeCheckoutPromotionConfigRequest } from '../models/CheckoutPromotionConfigRequest.js';
export { makeCheckoutRedirectsRequest } from '../models/CheckoutRedirectsRequest.js';
export { makeCheckoutTaxCalculationRequest } from '../models/CheckoutTaxCalculationRequest.js';
export { makeCheckoutTaxConfigRequest } from '../models/CheckoutTaxConfigRequest.js';
export { makeCheckoutTipConfigRequest } from '../models/CheckoutTipConfigRequest.js';
export { makeCreateShopRequest } from '../models/CreateShopRequest.js';
export { makeImageInputFile } from '../models/ImageInputFile.js';
export { makeImageInputSourceURL } from '../models/ImageInputSourceURL.js';
export { makeImageRequest } from '../models/ImageRequest.js';
export { makeInventoryRoutingSourceInputFixedLocation } from '../models/InventoryRoutingSourceInputFixedLocation.js';
export { makeInventoryRoutingSourceInputPolicy } from '../models/InventoryRoutingSourceInputPolicy.js';
export { makeInventoryRoutingSourceInputPolicyRevision } from '../models/InventoryRoutingSourceInputPolicyRevision.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePaymentLinkResolvePrefillRequest } from '../models/PaymentLinkResolvePrefillRequest.js';
export { makePublicCatalogModifierInputCatalog } from '../models/PublicCatalogModifierInputCatalog.js';
export { makePublicCatalogModifierInputText } from '../models/PublicCatalogModifierInputText.js';
export { makePublicCatalogModifierRequest } from '../models/PublicCatalogModifierRequest.js';
export { makePublicCatalogTextModifierRequest } from '../models/PublicCatalogTextModifierRequest.js';
export { makeResolveShopLineItemRequest } from '../models/ResolveShopLineItemRequest.js';
export { makeResolveShopRequest } from '../models/ResolveShopRequest.js';
export { makeShopListingInputBundle } from '../models/ShopListingInputBundle.js';
export { makeShopListingInputProduct } from '../models/ShopListingInputProduct.js';
export { makeShopListingPatchInputBundle } from '../models/ShopListingPatchInputBundle.js';
export { makeShopListingPatchInputProduct } from '../models/ShopListingPatchInputProduct.js';
export { makeShopListingPatchRequest } from '../models/ShopListingPatchRequest.js';
export { makeShopListingRequest } from '../models/ShopListingRequest.js';
export { makeTextModifierConfigRequest } from '../models/TextModifierConfigRequest.js';
export { makeUpdateShopRequest } from '../models/UpdateShopRequest.js';
