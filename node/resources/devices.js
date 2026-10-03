import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/devices.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';

const _sdkDescriptors = new DescriptorSource(settings, {["createDevice"]:r0,["deleteDevice"]:r0,["getDevice"]:r0,["listDevices"]:r0,["updateDevice"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.devices = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options),
      update: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCreateDeviceResponse } from '../models/CreateDeviceResponse.js';
export { makeDeviceResponse } from '../models/DeviceResponse.js';
export { makeDeviceListResponse } from '../models/DeviceListResponse.js';
export { makeDevice } from '../models/Device.js';
export { makeCreateDeviceResult } from '../models/CreateDeviceResult.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
