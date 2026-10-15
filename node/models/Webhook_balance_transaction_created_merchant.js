import { d44 as c0, d52 as c1, d42 as c2, d893 as c3, d898 as c4, d323 as c5, d2056 as c6, d2340 as c7, d50 as c8, d51 as c9, d500 as c10, d897 as c11, d43 as c12, d46 as c13, d47 as c14, d48 as c15, d49 as c16, d2034 as c17, d2588 as c18 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2588 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2588;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["ExpandedOrderSummary"]:c2(),["HoldDetail"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PricingAmounts"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec10"]:c8(),["SharedCodec11"]:c9(),["SharedCodec176"]:c10(),["SharedCodec250"]:c11(),["SharedCodec5"]:c12(),["SharedCodec6"]:c13(),["SharedCodec7"]:c14(),["SharedCodec8"]:c15(),["SharedCodec9"]:c16(),["SignedMoney"]:c17(),["Webhook_balance_transaction_created_merchant"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_balance_transaction_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
