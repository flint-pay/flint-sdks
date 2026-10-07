import { d54 as c0, d45 as c1, d77 as c2, d2035 as c3, d2321 as c4, d47 as c5, d48 as c6, d49 as c7, d50 as c8, d51 as c9, d52 as c10, d40 as c11, d44 as c12, d46 as c13, d53 as c14, d226 as c15 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d54 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d54;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec10"]:c5(),["SharedCodec11"]:c6(),["SharedCodec12"]:c7(),["SharedCodec13"]:c8(),["SharedCodec14"]:c9(),["SharedCodec15"]:c10(),["SharedCodec5"]:c11(),["SharedCodec7"]:c12(),["SharedCodec8"]:c13(),["SharedCodec9"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransaction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
