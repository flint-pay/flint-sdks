import { d54 as c0, d45 as c1, d77 as c2, d2041 as c3, d2327 as c4, d47 as c5, d48 as c6, d49 as c7, d50 as c8, d51 as c9, d52 as c10, d40 as c11, d44 as c12, d46 as c13, d53 as c14, d227 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d54 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d54;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec10"]:c5(),["SharedCodec11"]:c6(),["SharedCodec12"]:c7(),["SharedCodec13"]:c8(),["SharedCodec14"]:c9(),["SharedCodec15"]:c10(),["SharedCodec5"]:c11(),["SharedCodec7"]:c12(),["SharedCodec8"]:c13(),["SharedCodec9"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransaction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
