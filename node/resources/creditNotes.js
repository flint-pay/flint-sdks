import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/creditNotes.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';

const _sdkDescriptors = new DescriptorSource(settings, {["createCreditNote"]:r0,["createCreditNoteAllocation"]:r0,["getCreditNote"]:r0,["getCreditNoteAllocation"]:r0,["getCreditNotePDF"]:r0,["issueCreditNote"]:r0,["listCreditNoteAllocations"]:r0,["listCreditNotes"]:r0,["reverseCreditNoteAllocation"]:r0,["updateCreditNote"]:r0,["voidCreditNote"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.creditNotes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNote", result, path))),
      createAllocation: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNoteAllocation", result, path))),
      get: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNote", result, path))),
      getAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNoteAllocation", result, path))),
      getPDF: async (credit_note_id, params, options) => this.#runtime.request("getCreditNotePDF", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      issue: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("issueCreditNote", result, path))),
      listAllocations: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path))),
      listAllocationsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path)),
      listAllocationsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNotes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCreditNotes", result, path)),
      listItems: (params, options) => this.#runtime.items("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      reverseAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reverseCreditNoteAllocation", result, path))),
      update: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCreditNote", result, path))),
      void: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidCreditNote", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeConfirmReturnResolutionRequest } from '../models/ConfirmReturnResolutionRequest.js';
export { makeCreateCreditNoteAllocationRequest } from '../models/CreateCreditNoteAllocationRequest.js';
export { makeCreateCreditNoteRequest } from '../models/CreateCreditNoteRequest.js';
export { makeCreditNoteCorrectionRequestAmountRequest } from '../models/CreditNoteCorrectionRequestAmountRequest.js';
export { makeCreditNoteCorrectionRequestModel } from '../models/CreditNoteCorrectionRequestModel.js';
export { makeCreditNoteCorrectionRequestQuantityRequest } from '../models/CreditNoteCorrectionRequestQuantityRequest.js';
export { makeCreditNoteIssueAllocationRequest } from '../models/CreditNoteIssueAllocationRequest.js';
export { makeCreditNoteLineItemRequest } from '../models/CreditNoteLineItemRequest.js';
export { makeCreditNoteRefundRequest } from '../models/CreditNoteRefundRequest.js';
export { makeIssueCreditNoteRequest } from '../models/IssueCreditNoteRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeResourceVersionRequest } from '../models/ResourceVersionRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateCreditNoteRequest } from '../models/UpdateCreditNoteRequest.js';
