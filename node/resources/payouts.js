import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/payouts.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelPayout"]:r0,["createPayout"]:r0,["getPayout"]:r0,["listPayouts"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.payouts = Object.freeze({
      cancel: async (payout_id, params, options) => this.#runtime.request("cancelPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelPayout", result, path))),
      cancelWithResponse: async (payout_id, params, options) => this.#runtime.request("cancelPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createPayout", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPayout", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPayout", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (payout_id, params, options) => this.#runtime.request("getPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPayout", result, path))),
      getWithResponse: async (payout_id, params, options) => this.#runtime.request("getPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "expand",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_date_from",
  "arrival_date_to",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPayouts", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "expand",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_date_from",
  "arrival_date_to",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "expand",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_date_from",
  "arrival_date_to",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPayouts", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "expand",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_date_from",
  "arrival_date_to",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "expand",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_date_from",
  "arrival_date_to",
  "page_size",
  "page_token"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCancelPayoutRequest } from '../models/CancelPayoutRequest.js';
export { makeCreatePayoutRequest } from '../models/CreatePayoutRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
