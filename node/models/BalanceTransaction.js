import { d51 as c0, d42 as c1, d74 as c2, d1996 as c3, d2283 as c4, d45 as c5, d46 as c6, d47 as c7, d48 as c8, d49 as c9, d37 as c10, d41 as c11, d43 as c12, d50 as c13, d44 as c14, d1806 as c15 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d51 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d51;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec10"]:c5(),["SharedCodec11"]:c6(),["SharedCodec12"]:c7(),["SharedCodec13"]:c8(),["SharedCodec14"]:c9(),["SharedCodec4"]:c10(),["SharedCodec6"]:c11(),["SharedCodec7"]:c12(),["SharedCodec8"]:c13(),["SharedCodec9"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransaction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
