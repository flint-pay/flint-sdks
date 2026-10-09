import { d44 as c0, d52 as c1, d42 as c2, d888 as c3, d323 as c4, d2039 as c5, d2324 as c6, d50 as c7, d51 as c8, d43 as c9, d46 as c10, d47 as c11, d48 as c12, d49 as c13, d2017 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d44 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d44;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["ExpandedOrderSummary"]:c2(),["HoldDetail"]:c3(),["MoneyValue"]:c4(),["PricingAmounts"]:c5(),["SettlementAmounts"]:c6(),["SharedCodec10"]:c7(),["SharedCodec11"]:c8(),["SharedCodec5"]:c9(),["SharedCodec6"]:c10(),["SharedCodec7"]:c11(),["SharedCodec8"]:c12(),["SharedCodec9"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransaction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
