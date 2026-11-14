import { d6125 as c0, d6123 as c3, d6124 as c4 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d209 as c1 } from '../descriptors/data/9.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6122 as c2 } from '../descriptors/data/277.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5972 as c5, d5973 as c6, d5974 as c7, d5975 as c8, d5976 as c9 } from '../descriptors/data/268.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d209 as d209 } from '../descriptors/data/9.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionInvoice"]:c1(),["SharedCodec203"]:c2(),["SharedCodec204"]:c3(),["SharedCodec205"]:c4(),["SharedCodec206"]:c5(),["SharedCodec207"]:c6(),["SharedCodec208"]:c7(),["SharedCodec209"]:c8(),["SharedCodec210"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
