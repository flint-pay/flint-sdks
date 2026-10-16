import { d323 as c0, d1823 as c1, d1824 as c2, d2174 as c3, d2175 as c4, d2176 as c5, d2178 as c6, d2179 as c7, d14 as c8, d20 as c9, d902 as c10, d1822 as c11, d2173 as c12 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2176 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResourceTimeline"]:c3(),["ResourceTimelineEntry"]:c4(),["ResourceTimelineResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec2"]:c9(),["SharedCodec252"]:c10(),["SharedCodec467"]:c11(),["SharedCodec526"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
