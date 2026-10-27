import { d2432 as c0 } from '../descriptors/data/96.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2432 as d2432 } from '../descriptors/data/96.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2432;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateCategoryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
