import { d51 as c0, d42 as c1, d74 as c2, d1993 as c3, d2280 as c4, d45 as c5, d46 as c6, d47 as c7, d48 as c8, d49 as c9, d37 as c10, d41 as c11, d43 as c12, d50 as c13, d44 as c14, d1804 as c15 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d51 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d51;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec10"]:c5(),["SharedCodec11"]:c6(),["SharedCodec12"]:c7(),["SharedCodec13"]:c8(),["SharedCodec14"]:c9(),["SharedCodec4"]:c10(),["SharedCodec6"]:c11(),["SharedCodec7"]:c12(),["SharedCodec8"]:c13(),["SharedCodec9"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransaction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
