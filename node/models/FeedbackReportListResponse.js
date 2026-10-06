import { d789 as c0, d791 as c1, d790 as c2, d77 as c3, d1797 as c4, d1796 as c5, d2131 as c6, d2132 as c7, d14 as c8, d1795 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d791 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d791;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FeedbackReport"]:c0(),["FeedbackReportListResponse"]:c1(),["FeedbackReportingClient"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec485"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFeedbackReportListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
