import { d323 as c0, d1820 as c1, d1821 as c2, d2158 as c3, d2159 as c4, d2160 as c5, d2162 as c6, d2163 as c7, d14 as c8, d20 as c9, d900 as c10, d1819 as c11, d2157 as c12 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2160 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2160;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResourceTimeline"]:c3(),["ResourceTimelineEntry"]:c4(),["ResourceTimelineResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec2"]:c9(),["SharedCodec251"]:c10(),["SharedCodec466"]:c11(),["SharedCodec521"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
