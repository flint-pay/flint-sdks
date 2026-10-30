import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/promotions.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createPromotion"]:r0,["createPromotionCode"]:r0,["deletePromotion"]:r0,["deletePromotionCode"]:r0,["getPromotion"]:r0,["getPromotionCode"]:r0,["listPromotions"]:r0,["updatePromotion"]:r0,["updatePromotionCode"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.promotions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotion", result, path))),
      createCode: async (promotion_id, params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotionCode", result, path))),
      delete: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotion", result, path))),
      deleteCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotionCode", result, path))),
      get: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotion", result, path))),
      getCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("getPromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotionCode", result, path))),
      list: async (params, options) => this.#runtime.request("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPromotions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPromotions", result, path)),
      listItems: (params, options) => this.#runtime.items("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotion", result, path))),
      updateCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotionCode", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePromotionCodeRequest } from '../models/CreatePromotionCodeRequest.js';
export { makeCreatePromotionRequest } from '../models/CreatePromotionRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePromotionAmountOffMethodRequest } from '../models/PromotionAmountOffMethodRequest.js';
export { makePromotionApplicationMethodPatch } from '../models/PromotionApplicationMethodPatch.js';
export { makePromotionApplicationMethodRequest } from '../models/PromotionApplicationMethodRequest.js';
export { makePromotionBuyXGetYMethodRequest } from '../models/PromotionBuyXGetYMethodRequest.js';
export { makePromotionCombinesWithPatch } from '../models/PromotionCombinesWithPatch.js';
export { makePromotionCombinesWithRequest } from '../models/PromotionCombinesWithRequest.js';
export { makePromotionExclusivityPatch } from '../models/PromotionExclusivityPatch.js';
export { makePromotionExclusivityRequest } from '../models/PromotionExclusivityRequest.js';
export { makePromotionPercentOffMethodRequest } from '../models/PromotionPercentOffMethodRequest.js';
export { makePromotionRecurrence } from '../models/PromotionRecurrence.js';
export { makePromotionRecurrenceForever } from '../models/PromotionRecurrenceForever.js';
export { makePromotionRecurrenceOnce } from '../models/PromotionRecurrenceOnce.js';
export { makePromotionRecurrenceRepeating } from '../models/PromotionRecurrenceRepeating.js';
export { makePromotionRuleGroupRequest } from '../models/PromotionRuleGroupRequest.js';
export { makePromotionRuleRequest } from '../models/PromotionRuleRequest.js';
export { makePromotionRuleValueRequest } from '../models/PromotionRuleValueRequest.js';
export { makePromotionSchedulePatch } from '../models/PromotionSchedulePatch.js';
export { makePromotionScheduleRequest } from '../models/PromotionScheduleRequest.js';
export { makeUpdatePromotionCodeRequest } from '../models/UpdatePromotionCodeRequest.js';
export { makeUpdatePromotionRequest } from '../models/UpdatePromotionRequest.js';
