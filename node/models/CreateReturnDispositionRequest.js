import { d200 as c0 } from '../descriptors/data/11.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d200 as d200 } from '../descriptors/data/11.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d200;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
