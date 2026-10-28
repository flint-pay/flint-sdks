import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnResolutions.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelReturnResolution"]:r0,["confirmReturnResolution"]:r0,["getOrCreateReturnResolutionCheckoutSession"]:r0,["getReturnResolution"]:r0,["listReturnResolutions"]:r0,["releaseReturnResolution"]:r0,["retryReturnResolution"]:r0,["updateReturnResolution"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnResolutions = Object.freeze({
      cancel: async (return_resolution_id, params, options) => this.#runtime.request("cancelReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnResolution", result, path))),
      cancelWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("cancelReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      confirm: async (return_resolution_id, params, options) => this.#runtime.request("confirmReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmReturnResolution", result, path))),
      confirmWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("confirmReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      getOrCreateCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("getOrCreateReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrCreateReturnResolutionCheckoutSession", result, path))),
      getOrCreateCheckoutSessionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("getOrCreateReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      get: async (return_resolution_id, params, options) => this.#runtime.request("getReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnResolution", result, path))),
      getWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("getReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnResolutions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnResolutions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      release: async (return_resolution_id, params, options) => this.#runtime.request("releaseReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("releaseReturnResolution", result, path))),
      releaseWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("releaseReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      retry: async (return_resolution_id, params, options) => this.#runtime.request("retryReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryReturnResolution", result, path))),
      retryWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("retryReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (return_resolution_id, params, options) => this.#runtime.request("updateReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnResolution", result, path))),
      updateWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("updateReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeCancelReturnRequest } from '../models/CancelReturnRequest.js';
export { makeCancelReturnResolutionRequest } from '../models/CancelReturnResolutionRequest.js';
export { makeCheckoutBuyerFields } from '../models/CheckoutBuyerFields.js';
export { makeCheckoutPromotionConfig } from '../models/CheckoutPromotionConfig.js';
export { makeCheckoutRedirectsRequest } from '../models/CheckoutRedirectsRequest.js';
export { makeCheckoutTipConfig } from '../models/CheckoutTipConfig.js';
export { makeConfirmReturnResolutionRequest } from '../models/ConfirmReturnResolutionRequest.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeGetOrCreateReturnResolutionCheckoutSessionRequest } from '../models/GetOrCreateReturnResolutionCheckoutSessionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReleaseReturnResolutionRequest } from '../models/ReleaseReturnResolutionRequest.js';
export { makeRetryReturnResolutionRequest } from '../models/RetryReturnResolutionRequest.js';
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeUpdateReturnReplacementLineItemInputBundle } from '../models/UpdateReturnReplacementLineItemInputBundle.js';
export { makeUpdateReturnReplacementLineItemInputCustom } from '../models/UpdateReturnReplacementLineItemInputCustom.js';
export { makeUpdateReturnReplacementLineItemInputVariant } from '../models/UpdateReturnReplacementLineItemInputVariant.js';
export { makeUpdateReturnReplacementLineItemRequest } from '../models/UpdateReturnReplacementLineItemRequest.js';
export { makeUpdateReturnResolutionAdjustmentRequest } from '../models/UpdateReturnResolutionAdjustmentRequest.js';
export { makeUpdateReturnResolutionLineItemRequest } from '../models/UpdateReturnResolutionLineItemRequest.js';
export { makeUpdateReturnResolutionRequest } from '../models/UpdateReturnResolutionRequest.js';
