import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryLocationSets.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryLocationSet"]:r0,["deleteDeliveryLocationSet"]:r0,["getDeliveryLocationSet"]:r0,["listDeliveryLocationSets"]:r0,["updateDeliveryLocationSet"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryLocationSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryLocationSet", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryLocationSet", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryLocationSet", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_location_set_id, params, options) => this.#runtime.request("deleteDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryLocationSet", result, path))),
      removeWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("deleteDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_location_set_id, params, options) => this.#runtime.request("getDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryLocationSet", result, path))),
      getWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("getDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryLocationSets", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryLocationSets", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options),
      update: async (delivery_location_set_id, params, options) => this.#runtime.request("updateDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryLocationSet", result, path))),
      updateWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("updateDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateDeliveryLocationSetRequest } from '../models/CreateDeliveryLocationSetRequest.js';
export { makeDeliveryLocationSetConfiguration } from '../models/DeliveryLocationSetConfiguration.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateDeliveryLocationSetRequest } from '../models/UpdateDeliveryLocationSetRequest.js';
