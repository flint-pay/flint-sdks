import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/taxConnection.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["connectTaxConnection"]:r0,["createTaxRegistration"]:r0,["deleteTaxRegistration"]:r0,["disconnectTaxConnection"]:r0,["getTaxConnection"]:r0,["getTaxRegistration"]:r0,["listTaxRegistrations"]:r0,["updateTaxRegistration"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.taxConnection = Object.freeze({
      connect: async (params, options) => this.#runtime.request("connectTaxConnection", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("connectTaxConnection", result, path))),
      createRegistration: async (params, options) => this.#runtime.request("createTaxRegistration", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createTaxRegistration", result, path))),
      deleteRegistration: async (tax_registration_id, params, options) => this.#runtime.request("deleteTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteTaxRegistration", result, path))),
      disconnect: async (params, options) => this.#runtime.request("disconnectTaxConnection", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("disconnectTaxConnection", result, path))),
      get: async (params, options) => this.#runtime.request("getTaxConnection", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTaxConnection", result, path))),
      getRegistration: async (tax_registration_id, params, options) => this.#runtime.request("getTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTaxRegistration", result, path))),
      listRegistrations: async (params, options) => this.#runtime.request("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listTaxRegistrations", result, path))),
      listRegistrationsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listTaxRegistrations", result, path)),
      listRegistrationsItems: (params, options) => this.#runtime.items("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      updateRegistration: async (tax_registration_id, params, options) => this.#runtime.request("updateTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateTaxRegistration", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeBuyerCapabilities } from '../models/BuyerCapabilities.js';
export { makeBuyerPauseCapability } from '../models/BuyerPauseCapability.js';
export { makeBuyerRetentionOffer } from '../models/BuyerRetentionOffer.js';
export { makeBuyerSkipCapability } from '../models/BuyerSkipCapability.js';
export { makeConnectTaxConnectionRequest } from '../models/ConnectTaxConnectionRequest.js';
export { makeCreateTaxRegistrationRequest } from '../models/CreateTaxRegistrationRequest.js';
export { makeDisconnectTaxConnectionRequest } from '../models/DisconnectTaxConnectionRequest.js';
export { makeInvoiceAutopayRetryPolicy } from '../models/InvoiceAutopayRetryPolicy.js';
export { makeInvoicePaymentOptionLimit } from '../models/InvoicePaymentOptionLimit.js';
export { makeInvoicePaymentPolicy } from '../models/InvoicePaymentPolicy.js';
export { makeInvoiceReminderPolicy } from '../models/InvoiceReminderPolicy.js';
export { makeInvoiceReminderRule } from '../models/InvoiceReminderRule.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSellerTaxAttestationRequest } from '../models/SellerTaxAttestationRequest.js';
export { makeUpdateTaxRegistrationRequest } from '../models/UpdateTaxRegistrationRequest.js';
