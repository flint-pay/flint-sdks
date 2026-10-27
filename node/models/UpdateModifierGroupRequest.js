import { d4488 as c0, d4490 as c2, d4486 as c4 } from '../descriptors/data/197.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4481 as c3 } from '../descriptors/data/196.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2459 as c5 } from '../descriptors/data/98.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2459 as d2459 } from '../descriptors/data/98.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2459;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ModifierRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1199"]:c2(),["SharedCodec1206"]:c3(),["TextModifierConfigPatchRequest"]:c4(),["UpdateModifierGroupRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
