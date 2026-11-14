import { d235 as c0 } from '../descriptors/data/11.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6587 as c1, d6590 as c2 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c3 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6601 as c4, d6602 as c5, d6603 as c6, d6604 as c7, d6605 as c8, d6606 as c9, d6607 as c10, d6608 as c11, d6609 as c12, d6610 as c13, d6611 as c14, d6612 as c15, d6613 as c16, d6614 as c17 } from '../descriptors/data/303.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d235 as d235 } from '../descriptors/data/11.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec596"]:c4(),["SharedCodec597"]:c5(),["SharedCodec598"]:c6(),["SharedCodec599"]:c7(),["SharedCodec600"]:c8(),["SharedCodec601"]:c9(),["SharedCodec602"]:c10(),["SharedCodec603"]:c11(),["SharedCodec604"]:c12(),["SharedCodec608"]:c13(),["SharedCodec609"]:c14(),["SharedCodec610"]:c15(),["SharedCodec611"]:c16(),["SharedCodec612"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
