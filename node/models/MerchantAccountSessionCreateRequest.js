import { d775 as c0 } from '../descriptors/data/33.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4436 as c1, d4437 as c2 } from '../descriptors/data/193.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d775 as d775 } from '../descriptors/data/33.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d775;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionCreateRequest"]:c0(),["SharedCodec956"]:c1(),["SharedCodec957"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
