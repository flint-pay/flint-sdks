import { d3069 as c0 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3069 as d3069 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3069;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeImageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
