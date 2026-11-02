import { d5861 as c0, d5862 as c1, d5863 as c2, d5864 as c3, d5865 as c4, d5866 as c5 } from '../descriptors/data/269.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5861 as d5861 } from '../descriptors/data/269.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5861;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrence"]:c0(),["SharedCodec1074"]:c1(),["SharedCodec1075"]:c2(),["SharedCodec1076"]:c3(),["SharedCodec1077"]:c4(),["SharedCodec1078"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrence(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
