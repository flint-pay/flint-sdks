import { d3539 as c0, d3540 as c1 } from '../descriptors/data/145.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3539 as d3539 } from '../descriptors/data/145.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3539;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeCondition"]:c0(),["DeliveryPostalCodeValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
