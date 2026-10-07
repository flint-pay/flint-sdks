import { d44 as c0, d52 as c1, d42 as c2, d867 as c3, d1229 as c4, d872 as c5, d314 as c6, d1992 as c7, d2274 as c8, d50 as c9, d51 as c10, d469 as c11, d871 as c12, d43 as c13, d46 as c14, d47 as c15, d48 as c16, d49 as c17, d1970 as c18, d2483 as c19 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1229 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["ExpandedOrderSummary"]:c2(),["HoldDetail"]:c3(),["IncomingWebhook89b737dd7119Payload"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PricingAmounts"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec10"]:c9(),["SharedCodec11"]:c10(),["SharedCodec161"]:c11(),["SharedCodec237"]:c12(),["SharedCodec5"]:c13(),["SharedCodec6"]:c14(),["SharedCodec7"]:c15(),["SharedCodec8"]:c16(),["SharedCodec9"]:c17(),["SignedMoney"]:c18(),["Webhook_balance_transaction_updated_merchant"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook89b737dd7119Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
