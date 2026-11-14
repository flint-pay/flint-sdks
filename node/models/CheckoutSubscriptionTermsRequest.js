import { d5954 as c0 } from '../descriptors/data/267.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6127 as c1, d6128 as c2, d6136 as c3, d6137 as c4 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5954 as d5954 } from '../descriptors/data/267.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5954;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["SharedCodec151"]:c1(),["SharedCodec152"]:c2(),["SharedCodec176"]:c3(),["SharedCodec177"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
