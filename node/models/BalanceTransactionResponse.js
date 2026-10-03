import { d51 as c0, d54 as c1, d42 as c2, d74 as c3, d1786 as c4, d1785 as c5, d1996 as c6, d2121 as c7, d2122 as c8, d2283 as c9, d45 as c10, d46 as c11, d47 as c12, d48 as c13, d49 as c14, d37 as c15, d41 as c16, d43 as c17, d50 as c18, d44 as c19, d1806 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d54 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d54;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionResponse"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec10"]:c10(),["SharedCodec11"]:c11(),["SharedCodec12"]:c12(),["SharedCodec13"]:c13(),["SharedCodec14"]:c14(),["SharedCodec4"]:c15(),["SharedCodec6"]:c16(),["SharedCodec7"]:c17(),["SharedCodec8"]:c18(),["SharedCodec9"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
