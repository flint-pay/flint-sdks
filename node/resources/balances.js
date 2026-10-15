import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/balances.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';

const _sdkDescriptors = new DescriptorSource(settings, {["listBalances"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.balances = Object.freeze({
      list: async (params, options) => this.#runtime.request("listBalances", _sdkRequestInput([], [], [
  "currency",
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listBalances", _sdkRequestInput([], [], [
  "currency",
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeBalanceListResponse } from '../models/BalanceListResponse.js';
export { makeBalance } from '../models/Balance.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeMoneyMovementListMeta } from '../models/MoneyMovementListMeta.js';
export { makeMoneyMovementHistoryMeta } from '../models/MoneyMovementHistoryMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
