import { d114 as c0 } from '../descriptors/data/4.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d114 as d114 } from '../descriptors/data/4.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d114;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCategoryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
