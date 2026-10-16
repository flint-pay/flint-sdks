import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/devices.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';

const _sdkDescriptors = new DescriptorSource(settings, {["createDevice"]:r0,["deleteDevice"]:r0,["getDevice"]:r0,["listDevices"]:r0,["updateDevice"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.devices = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
      remove: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      get: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction"
], false, false, params), options),
      update: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id"
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
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeCreateDeviceRequest } from '../models/CreateDeviceRequest.js';
export { makeUpdateDeviceRequest } from '../models/UpdateDeviceRequest.js';
