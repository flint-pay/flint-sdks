import { d346 as c0 } from '../descriptors/data/19.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d346 as d346 } from '../descriptors/data/19.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperInitialAPIKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperInitialAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
