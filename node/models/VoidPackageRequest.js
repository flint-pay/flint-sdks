import { d2505 as c0, d2506 as c1 } from '../descriptors/data/102.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2505 as d2505 } from '../descriptors/data/102.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2505;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["VoidPackageRequest"]:c0(),["VoidShipmentRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
