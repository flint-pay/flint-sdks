import { d77 as c0, d1797 as c1, d1796 as c2, d1992 as c3, d1994 as c4, d2131 as c5, d2132 as c6, d14 as c7, d1795 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1994 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1994;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PayoutDestination"]:c3(),["PayoutDestinationResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec485"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutDestinationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
