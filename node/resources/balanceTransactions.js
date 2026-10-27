import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/balanceTransactions.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["getBalanceTransaction"]:r0,["listBalanceTransactions"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.balanceTransactions = Object.freeze({
      get: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getBalanceTransaction", result, path))),
      getWithResponse: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "payout_id",
  "order_id",
  "expand",
  "type",
  "related_resource_type",
  "related_resource_id",
  "status",
  "occurred_after",
  "occurred_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBalanceTransactions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "payout_id",
  "order_id",
  "expand",
  "type",
  "related_resource_type",
  "related_resource_id",
  "status",
  "occurred_after",
  "occurred_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "payout_id",
  "order_id",
  "expand",
  "type",
  "related_resource_type",
  "related_resource_id",
  "status",
  "occurred_after",
  "occurred_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listBalanceTransactions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "payout_id",
  "order_id",
  "expand",
  "type",
  "related_resource_type",
  "related_resource_id",
  "status",
  "occurred_after",
  "occurred_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "payout_id",
  "order_id",
  "expand",
  "type",
  "related_resource_type",
  "related_resource_id",
  "status",
  "occurred_after",
  "occurred_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
