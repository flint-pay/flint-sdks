import { d778 as c0, d779 as c1, d74 as c2, d1977 as c3, d38 as c4, d1972 as c5, d1973 as c6, d1974 as c7, d1975 as c8, d1976 as c9, d1804 as c10 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1977 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1977;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["SharedCodec5"]:c4(),["SharedCodec511"]:c5(),["SharedCodec512"]:c6(),["SharedCodec513"]:c7(),["SharedCodec514"]:c8(),["SharedCodec515"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
