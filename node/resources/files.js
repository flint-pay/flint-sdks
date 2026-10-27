import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/files.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["completeFile"]:r0,["createFile"]:r0,["getFile"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.files = Object.freeze({
      complete: async (file_id, params, options) => this.#runtime.request("completeFile", _sdkRequestInput([
  "file_id"
], [file_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeFile", result, path))),
      completeWithResponse: async (file_id, params, options) => this.#runtime.request("completeFile", _sdkRequestInput([
  "file_id"
], [file_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createFile", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFile", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createFile", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (file_id, params, options) => this.#runtime.request("getFile", _sdkRequestInput([
  "file_id"
], [file_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFile", result, path))),
      getWithResponse: async (file_id, params, options) => this.#runtime.request("getFile", _sdkRequestInput([
  "file_id"
], [file_id], [], false, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateFileRequest } from '../models/CreateFileRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
