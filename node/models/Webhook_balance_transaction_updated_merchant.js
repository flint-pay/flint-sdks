import { d51 as c0, d42 as c1, d909 as c2, d74 as c3, d1994 as c4, d2281 as c5, d45 as c6, d46 as c7, d47 as c8, d48 as c9, d49 as c10, d515 as c11, d908 as c12, d37 as c13, d41 as c14, d43 as c15, d50 as c16, d44 as c17, d1804 as c18, d2491 as c19 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2491 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2491;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PricingAmounts"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec10"]:c6(),["SharedCodec11"]:c7(),["SharedCodec12"]:c8(),["SharedCodec13"]:c9(),["SharedCodec14"]:c10(),["SharedCodec197"]:c11(),["SharedCodec275"]:c12(),["SharedCodec4"]:c13(),["SharedCodec6"]:c14(),["SharedCodec7"]:c15(),["SharedCodec8"]:c16(),["SharedCodec9"]:c17(),["SignedMoney"]:c18(),["Webhook_balance_transaction_updated_merchant"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_balance_transaction_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
