import { d943 as c0 } from '../descriptors/data/41.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4301 as c1, d4302 as c2 } from '../descriptors/data/188.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d943 as d943 } from '../descriptors/data/41.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d943;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequestCode"]:c0(),["SharedCodec1125"]:c1(),["SharedCodec1126"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequestCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
