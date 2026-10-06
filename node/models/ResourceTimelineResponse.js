import { d77 as c0, d1797 as c1, d1796 as c2, d2127 as c3, d2128 as c4, d2129 as c5, d2131 as c6, d2132 as c7, d14 as c8, d20 as c9, d923 as c10, d1795 as c11, d2126 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2129 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2129;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResourceTimeline"]:c3(),["ResourceTimelineEntry"]:c4(),["ResourceTimelineResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec2"]:c9(),["SharedCodec286"]:c10(),["SharedCodec485"]:c11(),["SharedCodec542"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
