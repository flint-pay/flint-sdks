import { d4096 as c0, d4097 as c1, d4098 as c2 } from '../descriptors/data/174.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2450 as c3 } from '../descriptors/data/98.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2450 as d2450 } from '../descriptors/data/98.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1192"]:c0(),["SharedCodec1193"]:c1(),["SharedCodec1194"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
