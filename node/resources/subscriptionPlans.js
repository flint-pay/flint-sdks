import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptionPlans.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createSubscriptionPlan"]:r0,["deleteSubscriptionPlan"]:r0,["getSubscriptionPlan"]:r0,["listSubscriptionPlans"]:r0,["updateSubscriptionPlan"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptionPlans = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPlan", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionPlan", result, path))),
      removeWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPlan", result, path))),
      getWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [], false, false, params), options).then(_sdkResponse),
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
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPlans", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptionPlans", _sdkRequestInput([], [], [
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
  "updated_before"
], false, false, params), options).then(_sdkResponse),
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
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPlans", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionPlans", _sdkRequestInput([], [], [
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
  "updated_before"
], false, false, params), options)),
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
  "updated_before"
], false, false, params), options),
      update: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionPlan", result, path))),
      updateWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateSubscriptionPlanRequest } from '../models/CreateSubscriptionPlanRequest.js';
export { makeImageRequest } from '../models/ImageRequest.js';
export { makeInventoryRoutingSourceInputFixedLocation } from '../models/InventoryRoutingSourceInputFixedLocation.js';
export { makeInventoryRoutingSourceInputPolicy } from '../models/InventoryRoutingSourceInputPolicy.js';
export { makeInventoryRoutingSourceInputPolicyRevision } from '../models/InventoryRoutingSourceInputPolicyRevision.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderLineItemModifierRequest } from '../models/OrderLineItemModifierRequest.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeSubscriptionPlanLineItemRequest } from '../models/SubscriptionPlanLineItemRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateSubscriptionPlanLineItemRequest } from '../models/UpdateSubscriptionPlanLineItemRequest.js';
export { makeUpdateSubscriptionPlanRequest } from '../models/UpdateSubscriptionPlanRequest.js';
