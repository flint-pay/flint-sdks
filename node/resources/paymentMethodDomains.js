import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentMethodDomains.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';

const _sdkDescriptors = new DescriptorSource(settings, {["createPaymentMethodDomain"]:r0,["getPaymentMethodDomain"]:r0,["listPaymentMethodDomains"]:r0,["updatePaymentMethodDomain"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentMethodDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      update: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makePaymentMethodDomainResponse } from '../models/PaymentMethodDomainResponse.js';
export { makePaymentMethodDomainListResponse } from '../models/PaymentMethodDomainListResponse.js';
export { makePaymentMethodDomain } from '../models/PaymentMethodDomain.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makePaymentMethodDomainPaymentOption } from '../models/PaymentMethodDomainPaymentOption.js';
