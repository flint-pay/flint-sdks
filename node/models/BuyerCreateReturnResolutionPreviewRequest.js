import { d4233 as c0 } from '../descriptors/data/180.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4279 as c1 } from '../descriptors/data/186.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4396 as c2, d4397 as c3 } from '../descriptors/data/192.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4233 as d4233 } from '../descriptors/data/180.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnResolutionPreviewRequest"]:c0(),["BuyerReturnReplacementLineItemRequest"]:c1(),["ReturnResolutionLineItemRequest"]:c2(),["SharedCodec9"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
