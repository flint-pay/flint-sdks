import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/capabilities.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';

const _sdkDescriptors = new DescriptorSource(settings, {["listCapabilities"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.capabilities = Object.freeze({
      list: async (params, options) => this.#runtime.request("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCapabilityListResponse } from '../models/CapabilityListResponse.js';
export { makeCapability } from '../models/Capability.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeMoneyMovementBlockedReason } from '../models/MoneyMovementBlockedReason.js';
