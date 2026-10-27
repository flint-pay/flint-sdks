import { d4842 as c0, d4844 as c1, d4845 as c2, d4846 as c3 } from '../descriptors/data/218.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3996 as c4 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4842 as d4842 } from '../descriptors/data/218.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnSourceSystem"]:c0(),["SharedCodec1070"]:c1(),["SharedCodec1071"]:c2(),["SharedCodec1072"]:c3(),["SharedCodec145"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnSourceSystem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
