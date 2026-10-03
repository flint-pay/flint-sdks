import { d51 as c0, d42 as c1, d911 as c2, d74 as c3, d1996 as c4, d2283 as c5, d45 as c6, d46 as c7, d47 as c8, d48 as c9, d49 as c10, d517 as c11, d910 as c12, d37 as c13, d41 as c14, d43 as c15, d50 as c16, d44 as c17, d1806 as c18, d2493 as c19 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2493 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2493;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PricingAmounts"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec10"]:c6(),["SharedCodec11"]:c7(),["SharedCodec12"]:c8(),["SharedCodec13"]:c9(),["SharedCodec14"]:c10(),["SharedCodec197"]:c11(),["SharedCodec275"]:c12(),["SharedCodec4"]:c13(),["SharedCodec6"]:c14(),["SharedCodec7"]:c15(),["SharedCodec8"]:c16(),["SharedCodec9"]:c17(),["SignedMoney"]:c18(),["Webhook_balance_transaction_updated_merchant"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_balance_transaction_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
