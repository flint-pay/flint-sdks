import { d44 as c0, d52 as c1, d42 as c2, d888 as c3, d1445 as c4, d893 as c5, d323 as c6, d2039 as c7, d2324 as c8, d50 as c9, d51 as c10, d490 as c11, d892 as c12, d43 as c13, d46 as c14, d47 as c15, d48 as c16, d49 as c17, d2017 as c18, d2572 as c19 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1445 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1445;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["ExpandedOrderSummary"]:c2(),["HoldDetail"]:c3(),["IncomingWebhookcf769e4fa54cPayload"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PricingAmounts"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec10"]:c9(),["SharedCodec11"]:c10(),["SharedCodec170"]:c11(),["SharedCodec246"]:c12(),["SharedCodec5"]:c13(),["SharedCodec6"]:c14(),["SharedCodec7"]:c15(),["SharedCodec8"]:c16(),["SharedCodec9"]:c17(),["SignedMoney"]:c18(),["Webhook_balance_transaction_created_merchant"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcf769e4fa54cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
