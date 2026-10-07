import { d44 as c0, d52 as c1, d42 as c2, d867 as c3, d872 as c4, d314 as c5, d1992 as c6, d2274 as c7, d50 as c8, d51 as c9, d469 as c10, d871 as c11, d43 as c12, d46 as c13, d47 as c14, d48 as c15, d49 as c16, d1970 as c17, d2483 as c18 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2483 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["ExpandedOrderSummary"]:c2(),["HoldDetail"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PricingAmounts"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec10"]:c8(),["SharedCodec11"]:c9(),["SharedCodec161"]:c10(),["SharedCodec237"]:c11(),["SharedCodec5"]:c12(),["SharedCodec6"]:c13(),["SharedCodec7"]:c14(),["SharedCodec8"]:c15(),["SharedCodec9"]:c16(),["SignedMoney"]:c17(),["Webhook_balance_transaction_updated_merchant"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_balance_transaction_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
