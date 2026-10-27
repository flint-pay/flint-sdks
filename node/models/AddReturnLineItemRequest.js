import { d7 as c0 } from '../descriptors/data/0.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4422 as c1 } from '../descriptors/data/193.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d7 as d7 } from '../descriptors/data/0.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddReturnLineItemRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
