import { d757 as c0, d753 as c1, d754 as c2, d755 as c3, d756 as c4, d233 as c5 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d757 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d757;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["SharedCodec242"]:c1(),["SharedCodec243"]:c2(),["SharedCodec244"]:c3(),["SharedCodec245"]:c4(),["SharedCodec59"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContext(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
