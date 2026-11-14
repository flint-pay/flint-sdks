import { d6590 as c0 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6610 as c1, d6611 as c2, d6612 as c3, d6613 as c4, d6614 as c5 } from '../descriptors/data/303.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6590 as d6590 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyRequest"]:c0(),["SharedCodec608"]:c1(),["SharedCodec609"]:c2(),["SharedCodec610"]:c3(),["SharedCodec611"]:c4(),["SharedCodec612"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
