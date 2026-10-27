import { d4515 as c0 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4566 as c1, d4567 as c2, d4568 as c3 } from '../descriptors/data/202.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4515 as d4515 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4515;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderGiftCardAllocationAcceptance"]:c0(),["SharedCodec970"]:c1(),["SharedCodec971"]:c2(),["SharedCodec972"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderGiftCardAllocationAcceptance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
