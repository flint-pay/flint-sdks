import { d6125 as c0, d6123 as c3, d6124 as c4 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d286 as c1 } from '../descriptors/data/15.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6122 as c2 } from '../descriptors/data/277.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7429 as c5, d7430 as c6, d7431 as c7, d7432 as c8 } from '../descriptors/data/353.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7433 as c9 } from '../descriptors/data/354.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d286 as d286 } from '../descriptors/data/15.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec203"]:c2(),["SharedCodec204"]:c3(),["SharedCodec205"]:c4(),["SharedCodec319"]:c5(),["SharedCodec320"]:c6(),["SharedCodec321"]:c7(),["SharedCodec322"]:c8(),["SharedCodec323"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
