import { d44 as c0, d52 as c1, d42 as c2, d893 as c3, d1276 as c4, d898 as c5, d323 as c6, d2056 as c7, d2340 as c8, d50 as c9, d51 as c10, d500 as c11, d897 as c12, d43 as c13, d46 as c14, d47 as c15, d48 as c16, d49 as c17, d2034 as c18, d2589 as c19 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1276 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["ExpandedOrderSummary"]:c2(),["HoldDetail"]:c3(),["IncomingWebhook89b737dd7119Payload"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PricingAmounts"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec10"]:c9(),["SharedCodec11"]:c10(),["SharedCodec176"]:c11(),["SharedCodec250"]:c12(),["SharedCodec5"]:c13(),["SharedCodec6"]:c14(),["SharedCodec7"]:c15(),["SharedCodec8"]:c16(),["SharedCodec9"]:c17(),["SignedMoney"]:c18(),["Webhook_balance_transaction_updated_merchant"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook89b737dd7119Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
