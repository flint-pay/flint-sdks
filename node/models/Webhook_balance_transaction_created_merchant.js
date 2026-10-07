import { d54 as c0, d45 as c1, d936 as c2, d77 as c3, d2041 as c4, d2327 as c5, d47 as c6, d48 as c7, d49 as c8, d50 as c9, d51 as c10, d52 as c11, d526 as c12, d935 as c13, d40 as c14, d44 as c15, d46 as c16, d53 as c17, d227 as c18, d2537 as c19 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2537 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2537;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PricingAmounts"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec10"]:c6(),["SharedCodec11"]:c7(),["SharedCodec12"]:c8(),["SharedCodec13"]:c9(),["SharedCodec14"]:c10(),["SharedCodec15"]:c11(),["SharedCodec199"]:c12(),["SharedCodec286"]:c13(),["SharedCodec5"]:c14(),["SharedCodec7"]:c15(),["SharedCodec8"]:c16(),["SharedCodec9"]:c17(),["SignedMoney"]:c18(),["Webhook_balance_transaction_created_merchant"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_balance_transaction_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
