import { d3069 as c0 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3081 as c1 } from '../descriptors/data/120.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4720 as c2 } from '../descriptors/data/211.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4734 as c3, d4735 as c4 } from '../descriptors/data/212.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2462 as c5 } from '../descriptors/data/98.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2462 as d2462 } from '../descriptors/data/98.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["SharedCodec1162"]:c1(),["SharedCodec1207"]:c2(),["UpdateProductOptionRequest"]:c3(),["UpdateProductOptionValueRequest"]:c4(),["UpdateProductRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
