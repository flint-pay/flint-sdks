import { d942 as c0 } from '../descriptors/data/41.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4300 as c1, d4301 as c2, d4302 as c3, d4303 as c4, d4304 as c5 } from '../descriptors/data/188.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d942 as d942 } from '../descriptors/data/41.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d942;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1124"]:c1(),["SharedCodec1125"]:c2(),["SharedCodec1126"]:c3(),["SharedCodec1127"]:c4(),["SharedCodec1128"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
