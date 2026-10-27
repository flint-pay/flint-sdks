import { d5031 as c0, d5032 as c1, d5033 as c2, d5034 as c3 } from '../descriptors/data/230.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5031 as d5031 } from '../descriptors/data/230.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5031;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCapabilities"]:c0(),["BuyerPauseCapability"]:c1(),["BuyerRetentionOffer"]:c2(),["BuyerSkipCapability"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCapabilities(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
