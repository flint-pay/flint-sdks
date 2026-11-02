import { d5182 as c0, d5183 as c1 } from '../descriptors/data/231.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5576 as c2 } from '../descriptors/data/251.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5576 as d5576 } from '../descriptors/data/251.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5576;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefInputPromotionCode"]:c0(),["PromotionRefInputPromotionID"]:c1(),["PromotionRefRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
