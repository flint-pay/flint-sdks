import { d778 as c0 } from '../descriptors/data/33.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4456 as c1, d4457 as c2 } from '../descriptors/data/195.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d778 as d778 } from '../descriptors/data/33.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d778;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionCreateRequest"]:c0(),["SharedCodec961"]:c1(),["SharedCodec962"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
