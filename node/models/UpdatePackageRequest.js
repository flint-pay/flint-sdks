import { d2986 as c0 } from '../descriptors/data/112.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4607 as c1, d4608 as c2 } from '../descriptors/data/204.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2455 as c3 } from '../descriptors/data/97.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3031 as c4 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2455 as d2455 } from '../descriptors/data/97.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2455;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dimensions"]:c0(),["SharedCodec1199"]:c1(),["SharedCodec1200"]:c2(),["UpdatePackageRequest"]:c3(),["Weight"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
