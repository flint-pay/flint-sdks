import { d2463 as c0 } from '../descriptors/data/99.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2463 as d2463 } from '../descriptors/data/99.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2463;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateOrganizationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrganizationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
