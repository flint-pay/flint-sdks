import { d778 as c0, d779 as c1, d74 as c2, d1784 as c3, d1783 as c4, d1977 as c5, d1984 as c6, d2119 as c7, d2120 as c8, d38 as c9, d1972 as c10, d1973 as c11, d1974 as c12, d1975 as c13, d1976 as c14, d1804 as c15 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1984 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1984;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["Payout"]:c5(),["PayoutResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec5"]:c9(),["SharedCodec511"]:c10(),["SharedCodec512"]:c11(),["SharedCodec513"]:c12(),["SharedCodec514"]:c13(),["SharedCodec515"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
