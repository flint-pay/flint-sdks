import { d4734 as c0, d4735 as c1 } from '../descriptors/data/212.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4734 as d4734 } from '../descriptors/data/212.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateProductOptionRequest"]:c0(),["UpdateProductOptionValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
