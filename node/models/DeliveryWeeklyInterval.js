import { d3565 as c0 } from '../descriptors/data/146.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3565 as d3565 } from '../descriptors/data/146.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWeeklyInterval"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWeeklyInterval(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
