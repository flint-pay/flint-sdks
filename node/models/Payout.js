import { d767 as c0, d768 as c1, d323 as c2, d2021 as c3, d2031 as c4, d855 as c5, d2018 as c6, d2019 as c7, d2020 as c8, d2017 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2021 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2021;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["PayoutTraceID"]:c4(),["SharedCodec244"]:c5(),["SharedCodec504"]:c6(),["SharedCodec505"]:c7(),["SharedCodec506"]:c8(),["SignedMoney"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
