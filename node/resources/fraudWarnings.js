import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/fraudWarnings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["getFraudWarning"]:r0,["listFraudWarnings"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.fraudWarnings = Object.freeze({
      get: async (fraud_warning_id, params, options) => this.#runtime.request("getFraudWarning", _sdkRequestInput([
  "fraud_warning_id"
], [fraud_warning_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFraudWarning", result, path))),
      getWithResponse: async (fraud_warning_id, params, options) => this.#runtime.request("getFraudWarning", _sdkRequestInput([
  "fraud_warning_id"
], [fraud_warning_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFraudWarnings", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listFraudWarnings", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
