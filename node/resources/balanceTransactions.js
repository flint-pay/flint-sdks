import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/balanceTransactions.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';

const _sdkDescriptors = new DescriptorSource(settings, {["getBalanceTransaction"]:r0,["listBalanceTransactions"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.balanceTransactions = Object.freeze({
      get: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand",
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand",
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeBalanceTransactionResponse } from '../models/BalanceTransactionResponse.js';
export { makeBalanceTransactionListResponse } from '../models/BalanceTransactionListResponse.js';
export { makeBalanceTransaction } from '../models/BalanceTransaction.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeMoneyMovementListMeta } from '../models/MoneyMovementListMeta.js';
export { makeMoneyMovementHistoryMeta } from '../models/MoneyMovementHistoryMeta.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makeHoldDetail } from '../models/HoldDetail.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeBalanceTransactionRelatedResource } from '../models/BalanceTransactionRelatedResource.js';
