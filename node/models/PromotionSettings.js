import { d5054 as c0 } from '../descriptors/data/231.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5054 as d5054 } from '../descriptors/data/231.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5054;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionSettings"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
