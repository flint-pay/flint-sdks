import { d786 as c0, d787 as c1, d77 as c2, d1797 as c3, d1796 as c4, d1991 as c5, d1998 as c6, d2131 as c7, d2132 as c8, d14 as c9, d875 as c10, d1795 as c11, d1987 as c12, d1988 as c13, d1989 as c14, d1990 as c15, d41 as c16, d223 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1998 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1998;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["Payout"]:c5(),["PayoutResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec273"]:c10(),["SharedCodec485"]:c11(),["SharedCodec522"]:c12(),["SharedCodec523"]:c13(),["SharedCodec524"]:c14(),["SharedCodec525"]:c15(),["SharedCodec6"]:c16(),["SignedMoney"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
