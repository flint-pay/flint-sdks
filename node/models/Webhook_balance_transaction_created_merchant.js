import { d54 as c0, d45 as c1, d930 as c2, d77 as c3, d2034 as c4, d2320 as c5, d47 as c6, d48 as c7, d49 as c8, d50 as c9, d51 as c10, d52 as c11, d525 as c12, d929 as c13, d40 as c14, d44 as c15, d46 as c16, d53 as c17, d226 as c18, d2530 as c19 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2530 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2530;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PricingAmounts"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec10"]:c6(),["SharedCodec11"]:c7(),["SharedCodec12"]:c8(),["SharedCodec13"]:c9(),["SharedCodec14"]:c10(),["SharedCodec15"]:c11(),["SharedCodec199"]:c12(),["SharedCodec282"]:c13(),["SharedCodec5"]:c14(),["SharedCodec7"]:c15(),["SharedCodec8"]:c16(),["SharedCodec9"]:c17(),["SignedMoney"]:c18(),["Webhook_balance_transaction_created_merchant"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_balance_transaction_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
