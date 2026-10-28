import { d3086 as c0 } from '../descriptors/data/121.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3086 as d3086 } from '../descriptors/data/121.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3086;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ModifierOverride"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierOverride(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
