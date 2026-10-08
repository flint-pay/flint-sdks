import { d44 as c0, d52 as c1, d42 as c2, d888 as c3, d893 as c4, d323 as c5, d2039 as c6, d2324 as c7, d50 as c8, d51 as c9, d490 as c10, d892 as c11, d43 as c12, d46 as c13, d47 as c14, d48 as c15, d49 as c16, d2017 as c17, d2572 as c18 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2572 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2572;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["ExpandedOrderSummary"]:c2(),["HoldDetail"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PricingAmounts"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec10"]:c8(),["SharedCodec11"]:c9(),["SharedCodec170"]:c10(),["SharedCodec246"]:c11(),["SharedCodec5"]:c12(),["SharedCodec6"]:c13(),["SharedCodec7"]:c14(),["SharedCodec8"]:c15(),["SharedCodec9"]:c16(),["SignedMoney"]:c17(),["Webhook_balance_transaction_created_merchant"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_balance_transaction_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
