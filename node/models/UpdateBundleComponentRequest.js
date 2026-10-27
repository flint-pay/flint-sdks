import { d3076 as c0 } from '../descriptors/data/120.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3076 as d3076 } from '../descriptors/data/120.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3076;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateBundleComponentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleComponentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
