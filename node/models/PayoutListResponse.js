import { d778 as c0, d779 as c1, d1781 as c2, d1782 as c3, d74 as c4, d1784 as c5, d1783 as c6, d1977 as c7, d1983 as c8, d2120 as c9, d38 as c10, d1972 as c11, d1973 as c12, d1974 as c13, d1975 as c14, d1976 as c15, d1804 as c16 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1983 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1983;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["ResponseWarning"]:c9(),["SharedCodec5"]:c10(),["SharedCodec511"]:c11(),["SharedCodec512"]:c12(),["SharedCodec513"]:c13(),["SharedCodec514"]:c14(),["SharedCodec515"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
