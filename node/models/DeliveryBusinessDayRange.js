import { d3547 as c0 } from '../descriptors/data/145.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3547 as d3547 } from '../descriptors/data/145.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3547;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBusinessDayRange"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBusinessDayRange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
