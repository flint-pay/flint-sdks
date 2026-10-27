import { d4378 as c0, d4379 as c1, d4380 as c2, d4381 as c3, d4382 as c4, d4383 as c5 } from '../descriptors/data/191.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4378 as d4378 } from '../descriptors/data/191.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrence"]:c0(),["SharedCodec1024"]:c1(),["SharedCodec1025"]:c2(),["SharedCodec1026"]:c3(),["SharedCodec1027"]:c4(),["SharedCodec1028"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrence(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
