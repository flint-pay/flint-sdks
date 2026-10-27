import { d5135 as c0, d5136 as c1, d5140 as c4 } from '../descriptors/data/235.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3280 as c2, d3281 as c3 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5142 as c5 } from '../descriptors/data/236.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5142 as d5142 } from '../descriptors/data/236.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5142;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1149"]:c0(),["SharedCodec1150"]:c1(),["SharedCodec43"]:c2(),["SharedCodec44"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionTermsRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
