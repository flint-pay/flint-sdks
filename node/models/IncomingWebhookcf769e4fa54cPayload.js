import { d44 as c0, d52 as c1, d42 as c2, d867 as c3, d1400 as c4, d872 as c5, d314 as c6, d1992 as c7, d2274 as c8, d50 as c9, d51 as c10, d469 as c11, d871 as c12, d43 as c13, d46 as c14, d47 as c15, d48 as c16, d49 as c17, d1970 as c18, d2482 as c19 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1400 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1400;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["ExpandedOrderSummary"]:c2(),["HoldDetail"]:c3(),["IncomingWebhookcf769e4fa54cPayload"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PricingAmounts"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec10"]:c9(),["SharedCodec11"]:c10(),["SharedCodec161"]:c11(),["SharedCodec237"]:c12(),["SharedCodec5"]:c13(),["SharedCodec6"]:c14(),["SharedCodec7"]:c15(),["SharedCodec8"]:c16(),["SharedCodec9"]:c17(),["SignedMoney"]:c18(),["Webhook_balance_transaction_created_merchant"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcf769e4fa54cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
