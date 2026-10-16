import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnPolicies.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';

const _sdkDescriptors = new DescriptorSource(settings, {["createReturnPolicy"]:r0,["deleteReturnPolicy"]:r0,["getReturnPolicy"]:r0,["getReturnPolicyRevision"]:r0,["listReturnPolicies"]:r0,["listReturnPolicyRevisions"]:r0,["publishReturnPolicyRevision"]:r0,["updateReturnPolicy"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (return_policy_id, params, options) => this.#runtime.request("deleteReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (return_policy_id, params, options) => this.#runtime.request("deleteReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (return_policy_id, params, options) => this.#runtime.request("getReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_policy_id, params, options) => this.#runtime.request("getReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getRevision: async (return_policy_id, return_policy_revision_id, params, options) => this.#runtime.request("getReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id",
  "return_policy_revision_id"
], [return_policy_id, return_policy_revision_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getRevisionWithResponse: async (return_policy_id, return_policy_revision_id, params, options) => this.#runtime.request("getReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id",
  "return_policy_revision_id"
], [return_policy_id, return_policy_revision_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status"
], false, false, params), options),
      listRevisions: async (return_policy_id, params, options) => this.#runtime.request("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listRevisionsWithResponse: async (return_policy_id, params, options) => this.#runtime.request("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listRevisionsPages: (return_policy_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options), []),
      listRevisionsPagesWithResponse: (return_policy_id, params, options) => _sdkResponsePages(this.#runtime.pages("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listRevisionsItems: (return_policy_id, params, options) => this.#runtime.items("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      publishRevision: async (return_policy_id, params, options) => this.#runtime.request("publishReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      publishRevisionWithResponse: async (return_policy_id, params, options) => this.#runtime.request("publishReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (return_policy_id, params, options) => this.#runtime.request("updateReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (return_policy_id, params, options) => this.#runtime.request("updateReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCreateReturnPolicyResponse } from '../models/CreateReturnPolicyResponse.js';
export { makeDeleteReturnPolicyResponse } from '../models/DeleteReturnPolicyResponse.js';
export { makeGetReturnPolicyResponse } from '../models/GetReturnPolicyResponse.js';
export { makeGetReturnPolicyRevisionResponse } from '../models/GetReturnPolicyRevisionResponse.js';
export { makeListReturnPoliciesResponse } from '../models/ListReturnPoliciesResponse.js';
export { makeReturnPolicy } from '../models/ReturnPolicy.js';
export { makeListReturnPolicyRevisionsResponse } from '../models/ListReturnPolicyRevisionsResponse.js';
export { makeReturnPolicyRevision } from '../models/ReturnPolicyRevision.js';
export { makePublishReturnPolicyRevisionResponse } from '../models/PublishReturnPolicyRevisionResponse.js';
export { makeUpdateReturnPolicyResponse } from '../models/UpdateReturnPolicyResponse.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReturnRestockingFeePolicy } from '../models/ReturnRestockingFeePolicy.js';
export { makeReturnShippingPolicy } from '../models/ReturnShippingPolicy.js';
export { makeReturnWindow } from '../models/ReturnWindow.js';
export { makeReturnPolicyScope } from '../models/ReturnPolicyScope.js';
