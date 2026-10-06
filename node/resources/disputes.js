import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/disputes.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';

const _sdkDescriptors = new DescriptorSource(settings, {["getDispute"]:r0,["listDisputes"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.disputes = Object.freeze({
      get: async (dispute_id, params, options) => this.#runtime.request("getDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (dispute_id, params, options) => this.#runtime.request("getDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeDisputeResponse } from '../models/DisputeResponse.js';
export { makeDisputeListResponse } from '../models/DisputeListResponse.js';
export { makeDispute } from '../models/Dispute.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makePaymentSourceSummary } from '../models/PaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../models/PaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../models/PaymentSourceCardSummary.js';
