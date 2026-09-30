import { d50 as c0, d41 as c1, d69 as c2, d1843 as c3, d2116 as c4, d44 as c5, d45 as c6, d46 as c7, d47 as c8, d48 as c9, d36 as c10, d40 as c11, d42 as c12, d49 as c13, d43 as c14, d1666 as c15 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d50 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d50;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec10"]:c5(),["SharedCodec11"]:c6(),["SharedCodec12"]:c7(),["SharedCodec13"]:c8(),["SharedCodec14"]:c9(),["SharedCodec4"]:c10(),["SharedCodec6"]:c11(),["SharedCodec7"]:c12(),["SharedCodec8"]:c13(),["SharedCodec9"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransaction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
