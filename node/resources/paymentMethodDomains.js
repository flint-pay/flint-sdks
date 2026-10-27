import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentMethodDomains.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';

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
