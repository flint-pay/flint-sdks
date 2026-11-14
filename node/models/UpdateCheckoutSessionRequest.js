import { d5946 as c0 } from '../descriptors/data/266.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5954 as c1 } from '../descriptors/data/267.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6127 as c2, d6128 as c3, d6136 as c6, d6137 as c7 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5919 as c4 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c5 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5650 as c8 } from '../descriptors/data/246.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5650 as d5650 } from '../descriptors/data/246.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5650;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["CheckoutSubscriptionTermsRequest"]:c1(),["SharedCodec151"]:c2(),["SharedCodec152"]:c3(),["SharedCodec1697"]:c4(),["SharedCodec1700"]:c5(),["SharedCodec176"]:c6(),["SharedCodec177"]:c7(),["UpdateCheckoutSessionRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
