import { d876 as c0 } from '../descriptors/data/38.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4380 as c1 } from '../descriptors/data/191.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d876 as d876 } from '../descriptors/data/38.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d876;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceOnce"]:c0(),["SharedCodec1025"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceOnce(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
