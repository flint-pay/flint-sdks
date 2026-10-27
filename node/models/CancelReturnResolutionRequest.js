import { d76 as c0 } from '../descriptors/data/3.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d76 as d76 } from '../descriptors/data/3.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d76;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnResolutionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
