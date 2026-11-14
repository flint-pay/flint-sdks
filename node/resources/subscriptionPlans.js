import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptionPlans.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';

const _sdkDescriptors = new DescriptorSource(settings, {["createSubscriptionPlan"]:r0,["deleteSubscriptionPlan"]:r0,["getSubscriptionPlan"]:r0,["listSubscriptionPlans"]:r0,["updateSubscriptionPlan"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptionPlans = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPlan", result, path))),
      delete: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionPlan", result, path))),
      get: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPlan", result, path))),
      list: async (params, options) => this.#runtime.request("listSubscriptionPlans", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
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
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPlans", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPlans", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
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
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPlans", result, path)),
      listItems: (params, options) => this.#runtime.items("listSubscriptionPlans", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
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
      update: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionPlan", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateSubscriptionPlanRequest } from '../models/CreateSubscriptionPlanRequest.js';
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
export { makeOrderLineItemModifierInputCatalogRequest } from '../models/OrderLineItemModifierInputCatalogRequest.js';
export { makeOrderLineItemModifierInputTextRequest } from '../models/OrderLineItemModifierInputTextRequest.js';
export { makeOrderLineItemModifierRequestModel } from '../models/OrderLineItemModifierRequestModel.js';
export { makeOrderLineItemTaxRequest } from '../models/OrderLineItemTaxRequest.js';
export { makeSubscriptionEndAfterCyclesRequest } from '../models/SubscriptionEndAfterCyclesRequest.js';
export { makeSubscriptionIntervalOptionRequest } from '../models/SubscriptionIntervalOptionRequest.js';
export { makeSubscriptionPlanChangeOptionRequest } from '../models/SubscriptionPlanChangeOptionRequest.js';
export { makeSubscriptionPlanLineItemInputBundle } from '../models/SubscriptionPlanLineItemInputBundle.js';
export { makeSubscriptionPlanLineItemInputCustom } from '../models/SubscriptionPlanLineItemInputCustom.js';
export { makeSubscriptionPlanLineItemInputVariant } from '../models/SubscriptionPlanLineItemInputVariant.js';
export { makeSubscriptionPlanLineItemRequest } from '../models/SubscriptionPlanLineItemRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateSubscriptionPlanLineItemInputBundle } from '../models/UpdateSubscriptionPlanLineItemInputBundle.js';
export { makeUpdateSubscriptionPlanLineItemInputCustom } from '../models/UpdateSubscriptionPlanLineItemInputCustom.js';
export { makeUpdateSubscriptionPlanLineItemInputVariant } from '../models/UpdateSubscriptionPlanLineItemInputVariant.js';
export { makeUpdateSubscriptionPlanLineItemRequest } from '../models/UpdateSubscriptionPlanLineItemRequest.js';
export { makeUpdateSubscriptionPlanRequest } from '../models/UpdateSubscriptionPlanRequest.js';
