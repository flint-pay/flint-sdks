import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/demoSessions.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';

const _sdkDescriptors = new DescriptorSource(settings, {["createDemoSession"]:r0,["resetDemoSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.demoSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Turnstile-Token",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Turnstile-Token",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      reset: async (params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([], [], [
  "X-Turnstile-Token",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      resetWithResponse: async (params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([], [], [
  "X-Turnstile-Token",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeDemoSessionResponse } from '../models/DemoSessionResponse.js';
export { makeDemoSession } from '../models/DemoSession.js';
export { makeDemoSessionAPIKey } from '../models/DemoSessionAPIKey.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
