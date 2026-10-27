import { d3218 as c0 } from '../descriptors/data/127.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d384 as c1 } from '../descriptors/data/21.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3225 as c2, d3226 as c3, d3227 as c4 } from '../descriptors/data/128.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d384 as d384 } from '../descriptors/data/21.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["GetOrCreateReturnResolutionCheckoutSessionRequest"]:c1(),["SharedCodec58"]:c2(),["SharedCodec59"]:c3(),["SharedCodec60"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetOrCreateReturnResolutionCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
