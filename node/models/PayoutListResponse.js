import { d786 as c0, d787 as c1, d1793 as c2, d1794 as c3, d77 as c4, d1797 as c5, d1796 as c6, d1991 as c7, d1997 as c8, d2132 as c9, d14 as c10, d875 as c11, d1795 as c12, d1987 as c13, d1988 as c14, d1989 as c15, d1990 as c16, d41 as c17, d223 as c18 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1997 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1997;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec273"]:c11(),["SharedCodec485"]:c12(),["SharedCodec522"]:c13(),["SharedCodec523"]:c14(),["SharedCodec524"]:c15(),["SharedCodec525"]:c16(),["SharedCodec6"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
