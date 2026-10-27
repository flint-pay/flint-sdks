import { d5071 as c0 } from '../descriptors/data/232.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5071 as d5071 } from '../descriptors/data/232.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5071;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentSettings"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
