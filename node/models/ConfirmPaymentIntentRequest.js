import { d106 as c0 } from '../descriptors/data/4.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4628 as c1, d4629 as c2, d4630 as c3 } from '../descriptors/data/205.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d106 as d106 } from '../descriptors/data/4.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d106;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["SharedCodec49"]:c1(),["SharedCodec50"]:c2(),["SharedCodec51"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
