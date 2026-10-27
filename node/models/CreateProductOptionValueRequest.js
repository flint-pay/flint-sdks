import { d4710 as c0 } from '../descriptors/data/210.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4710 as d4710 } from '../descriptors/data/210.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4710;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionValueRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductOptionValueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
