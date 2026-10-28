import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/taxConnection.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';

const _sdkDescriptors = new DescriptorSource(settings, {["connectTaxConnection"]:r0,["createTaxRegistration"]:r0,["deleteTaxRegistration"]:r0,["disconnectTaxConnection"]:r0,["getTaxConnection"]:r0,["getTaxRegistration"]:r0,["listTaxRegistrations"]:r0,["updateTaxRegistration"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.taxConnection = Object.freeze({
      connect: async (params, options) => this.#runtime.request("connectTaxConnection", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("connectTaxConnection", result, path))),
      connectWithResponse: async (params, options) => this.#runtime.request("connectTaxConnection", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createRegistration: async (params, options) => this.#runtime.request("createTaxRegistration", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createTaxRegistration", result, path))),
      createRegistrationWithResponse: async (params, options) => this.#runtime.request("createTaxRegistration", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteRegistration: async (tax_registration_id, params, options) => this.#runtime.request("deleteTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteTaxRegistration", result, path))),
      deleteRegistrationWithResponse: async (tax_registration_id, params, options) => this.#runtime.request("deleteTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      disconnect: async (params, options) => this.#runtime.request("disconnectTaxConnection", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("disconnectTaxConnection", result, path))),
      disconnectWithResponse: async (params, options) => this.#runtime.request("disconnectTaxConnection", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getTaxConnection", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTaxConnection", result, path))),
      getWithResponse: async (params, options) => this.#runtime.request("getTaxConnection", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      getRegistration: async (tax_registration_id, params, options) => this.#runtime.request("getTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTaxRegistration", result, path))),
      getRegistrationWithResponse: async (tax_registration_id, params, options) => this.#runtime.request("getTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [], false, false, params), options).then(_sdkResponse),
      listRegistrations: async (params, options) => this.#runtime.request("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listTaxRegistrations", result, path))),
      listRegistrationsWithResponse: async (params, options) => this.#runtime.request("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params), options).then(_sdkResponse),
      listRegistrationsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listTaxRegistrations", result, path)),
      listRegistrationsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params), options)),
      listRegistrationsItems: (params, options) => this.#runtime.items("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params), options),
      updateRegistration: async (tax_registration_id, params, options) => this.#runtime.request("updateTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateTaxRegistration", result, path))),
      updateRegistrationWithResponse: async (tax_registration_id, params, options) => this.#runtime.request("updateTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
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
