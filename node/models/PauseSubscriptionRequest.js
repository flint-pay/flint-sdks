import { d836 as c0 } from '../descriptors/data/36.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d836 as d836 } from '../descriptors/data/36.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d836;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PauseSubscriptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePauseSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
