import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentMethodDomains.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createPaymentMethodDomain"]:r0,["getPaymentMethodDomain"]:r0,["listPaymentMethodDomains"]:r0,["updatePaymentMethodDomain"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentMethodDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentMethodDomain", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentMethodDomain", result, path))),
      getWithResponse: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentMethodDomains", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPaymentMethodDomains", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options),
      update: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentMethodDomain", result, path))),
      updateWithResponse: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePaymentMethodDomainRequest } from '../models/CreatePaymentMethodDomainRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdatePaymentMethodDomainRequest } from '../models/UpdatePaymentMethodDomainRequest.js';
