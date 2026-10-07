import { d54 as c0, d45 as c1, d1293 as c2, d936 as c3, d77 as c4, d2041 as c5, d2327 as c6, d47 as c7, d48 as c8, d49 as c9, d50 as c10, d51 as c11, d52 as c12, d526 as c13, d935 as c14, d40 as c15, d44 as c16, d46 as c17, d53 as c18, d227 as c19, d2538 as c20 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1293 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["IncomingWebhook89b737dd7119Payload"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PricingAmounts"]:c5(),["SettlementAmounts"]:c6(),["SharedCodec10"]:c7(),["SharedCodec11"]:c8(),["SharedCodec12"]:c9(),["SharedCodec13"]:c10(),["SharedCodec14"]:c11(),["SharedCodec15"]:c12(),["SharedCodec199"]:c13(),["SharedCodec286"]:c14(),["SharedCodec5"]:c15(),["SharedCodec7"]:c16(),["SharedCodec8"]:c17(),["SharedCodec9"]:c18(),["SignedMoney"]:c19(),["Webhook_balance_transaction_updated_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook89b737dd7119Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
