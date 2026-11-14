import { d532 as c0 } from '../descriptors/data/31.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6590 as c1 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6601 as c2, d6602 as c3, d6605 as c4, d6606 as c5, d6607 as c6, d6610 as c7, d6611 as c8, d6612 as c9, d6613 as c10, d6614 as c11 } from '../descriptors/data/303.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d532 as d532 } from '../descriptors/data/31.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec596"]:c2(),["SharedCodec597"]:c3(),["SharedCodec600"]:c4(),["SharedCodec601"]:c5(),["SharedCodec602"]:c6(),["SharedCodec608"]:c7(),["SharedCodec609"]:c8(),["SharedCodec610"]:c9(),["SharedCodec611"]:c10(),["SharedCodec612"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
