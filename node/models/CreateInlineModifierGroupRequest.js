import { d4491 as c0, d4487 as c1, d4489 as c3 } from '../descriptors/data/197.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4491 as d4491 } from '../descriptors/data/197.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4491;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["MoneyValue"]:c2(),["TextModifierConfigRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInlineModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
