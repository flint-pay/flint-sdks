import { d4491 as c0, d4487 as c1, d4489 as c6 } from '../descriptors/data/197.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d183 as c2 } from '../descriptors/data/9.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3086 as c3, d3089 as c5 } from '../descriptors/data/121.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c4 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d183 as d183 } from '../descriptors/data/9.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d183;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupInputInline"]:c2(),["ModifierOverride"]:c3(),["MoneyValue"]:c4(),["SharedCodec165"]:c5(),["TextModifierConfigRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetGroupInputInline(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
