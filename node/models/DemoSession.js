import { d750 as c0, d15 as c1, d14 as c2, d749 as c3 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d750 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d750;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DemoSession"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec241"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDemoSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
