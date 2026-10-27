import { d4818 as c0 } from '../descriptors/data/217.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4818 as d4818 } from '../descriptors/data/217.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundDestinations"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundDestinations(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
