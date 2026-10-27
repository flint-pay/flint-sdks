import { d4488 as c0 } from '../descriptors/data/197.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4488 as d4488 } from '../descriptors/data/197.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ModifierRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
