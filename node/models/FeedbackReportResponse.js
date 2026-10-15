import { d782 as c0, d785 as c1, d783 as c2, d323 as c3, d1823 as c4, d1824 as c5, d2178 as c6, d2179 as c7, d14 as c8, d1822 as c9 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d785 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d785;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FeedbackReport"]:c0(),["FeedbackReportResponse"]:c1(),["FeedbackReportingClient"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec467"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFeedbackReportResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
