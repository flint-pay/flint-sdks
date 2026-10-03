import { d51 as c0, d42 as c1, d1259 as c2, d909 as c3, d74 as c4, d1993 as c5, d2280 as c6, d45 as c7, d46 as c8, d47 as c9, d48 as c10, d49 as c11, d515 as c12, d908 as c13, d37 as c14, d41 as c15, d43 as c16, d50 as c17, d44 as c18, d1804 as c19, d2490 as c20 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1259 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1259;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["IncomingWebhook89b737dd7119Payload"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PricingAmounts"]:c5(),["SettlementAmounts"]:c6(),["SharedCodec10"]:c7(),["SharedCodec11"]:c8(),["SharedCodec12"]:c9(),["SharedCodec13"]:c10(),["SharedCodec14"]:c11(),["SharedCodec197"]:c12(),["SharedCodec275"]:c13(),["SharedCodec4"]:c14(),["SharedCodec6"]:c15(),["SharedCodec7"]:c16(),["SharedCodec8"]:c17(),["SharedCodec9"]:c18(),["SignedMoney"]:c19(),["Webhook_balance_transaction_updated_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook89b737dd7119Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
