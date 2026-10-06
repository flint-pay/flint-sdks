import { d786 as c0, d787 as c1, d77 as c2, d1991 as c3, d875 as c4, d1987 as c5, d1988 as c6, d1989 as c7, d1990 as c8, d41 as c9, d223 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1991 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["SharedCodec273"]:c4(),["SharedCodec522"]:c5(),["SharedCodec523"]:c6(),["SharedCodec524"]:c7(),["SharedCodec525"]:c8(),["SharedCodec6"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
