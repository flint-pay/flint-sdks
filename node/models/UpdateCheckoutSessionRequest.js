import { d3282 as c0, d3280 as c2, d3281 as c3 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3095 as c1 } from '../descriptors/data/121.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2423 as c4 } from '../descriptors/data/95.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2423 as d2423 } from '../descriptors/data/95.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2423;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["CheckoutSubscriptionTermsRequest"]:c1(),["SharedCodec43"]:c2(),["SharedCodec44"]:c3(),["UpdateCheckoutSessionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
