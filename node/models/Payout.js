import { d778 as c0, d779 as c1, d74 as c2, d1976 as c3, d38 as c4, d1971 as c5, d1972 as c6, d1973 as c7, d1974 as c8, d1975 as c9, d1804 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1976 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1976;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["SharedCodec5"]:c4(),["SharedCodec511"]:c5(),["SharedCodec512"]:c6(),["SharedCodec513"]:c7(),["SharedCodec514"]:c8(),["SharedCodec515"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
