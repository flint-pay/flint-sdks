import { d109 as c0 } from '../descriptors/data/4.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d109 as d109 } from '../descriptors/data/4.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmReturnResolutionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
