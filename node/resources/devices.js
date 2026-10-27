import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/devices.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createDevice"]:r0,["deleteDevice"]:r0,["getDevice"]:r0,["listDevices"]:r0,["updateDevice"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.devices = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDevice", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDevice", result, path))),
      removeWithResponse: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDevice", result, path))),
      getWithResponse: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDevices", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDevices", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options),
      update: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDevice", result, path))),
      updateWithResponse: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateDeviceRequest } from '../models/CreateDeviceRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateDeviceRequest } from '../models/UpdateDeviceRequest.js';
