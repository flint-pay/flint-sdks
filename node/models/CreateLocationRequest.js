import { d179 as c0 } from '../descriptors/data/9.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4232 as c1, d4233 as c2, d4240 as c3 } from '../descriptors/data/180.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d179 as d179 } from '../descriptors/data/9.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d179;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateLocationRequest"]:c0(),["LocationAddressRequest"]:c1(),["LocationCoordinate"]:c2(),["SharedCodec161"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
