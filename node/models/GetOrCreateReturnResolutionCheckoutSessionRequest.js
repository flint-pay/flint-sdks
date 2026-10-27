import { d3232 as c0, d3239 as c2, d3240 as c3, d3241 as c4 } from '../descriptors/data/129.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d387 as c1 } from '../descriptors/data/21.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d387 as d387 } from '../descriptors/data/21.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["GetOrCreateReturnResolutionCheckoutSessionRequest"]:c1(),["SharedCodec63"]:c2(),["SharedCodec64"]:c3(),["SharedCodec65"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetOrCreateReturnResolutionCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
