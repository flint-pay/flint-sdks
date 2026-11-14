import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/tickets.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';

const _sdkDescriptors = new DescriptorSource(settings, {["checkInTicket"]:r0,["getTicket"]:r0,["listTickets"]:r0,["lookupTicket"]:r0,["rotateTicketCode"]:r0,["undoTicketCheckIn"]:r0,["updateTicket"]:r0,["voidTicket"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.tickets = Object.freeze({
      checkIn: async (ticket_id, params, options) => this.#runtime.request("checkInTicket", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("checkInTicket", result, path))),
      get: async (ticket_id, params, options) => this.#runtime.request("getTicket", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTicket", result, path))),
      list: async (params, options) => this.#runtime.request("listTickets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_link_id",
  "order_id",
  "status",
  "query",
  "sort_by",
  "sort_direction",
  "checked_in_after",
  "checked_in_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listTickets", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listTickets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_link_id",
  "order_id",
  "status",
  "query",
  "sort_by",
  "sort_direction",
  "checked_in_after",
  "checked_in_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listTickets", result, path)),
      listItems: (params, options) => this.#runtime.items("listTickets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_link_id",
  "order_id",
  "status",
  "query",
  "sort_by",
  "sort_direction",
  "checked_in_after",
  "checked_in_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      lookup: async (params, options) => this.#runtime.request("lookupTicket", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupTicket", result, path))),
      rotateCode: async (ticket_id, params, options) => this.#runtime.request("rotateTicketCode", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateTicketCode", result, path))),
      undoCheckIn: async (ticket_id, params, options) => this.#runtime.request("undoTicketCheckIn", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("undoTicketCheckIn", result, path))),
      update: async (ticket_id, params, options) => this.#runtime.request("updateTicket", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateTicket", result, path))),
      void: async (ticket_id, params, options) => this.#runtime.request("voidTicket", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidTicket", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCheckInTicketRequest } from '../models/CheckInTicketRequest.js';
export { makeLookupTicketRequest } from '../models/LookupTicketRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeTicketVersionRequest } from '../models/TicketVersionRequest.js';
export { makeUpdateTicketRequest } from '../models/UpdateTicketRequest.js';
