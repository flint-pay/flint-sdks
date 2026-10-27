import { d4743 as c0 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4743 as d4743 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionCombinesWithPatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCombinesWithPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
