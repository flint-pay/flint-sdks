import { d77 as c0, d1823 as c1, d1822 as c2, d2153 as c3, d2154 as c4, d2155 as c5, d2157 as c6, d2158 as c7, d14 as c8, d20 as c9, d937 as c10, d1821 as c11, d2152 as c12 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2155 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2155;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResourceTimeline"]:c3(),["ResourceTimelineEntry"]:c4(),["ResourceTimelineResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec2"]:c9(),["SharedCodec287"]:c10(),["SharedCodec487"]:c11(),["SharedCodec544"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
