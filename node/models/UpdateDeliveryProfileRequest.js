import { d6587 as c0, d6590 as c1 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5919 as c2 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c3 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6336 as c4 } from '../descriptors/data/288.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6601 as c5, d6602 as c6, d6603 as c7, d6604 as c8, d6605 as c9, d6606 as c10, d6607 as c11, d6608 as c12, d6609 as c13, d6610 as c14, d6611 as c15, d6612 as c16, d6613 as c17, d6614 as c18 } from '../descriptors/data/303.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5658 as c19 } from '../descriptors/data/247.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5658 as d5658 } from '../descriptors/data/247.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5658;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1697"]:c2(),["SharedCodec1700"]:c3(),["SharedCodec1708"]:c4(),["SharedCodec596"]:c5(),["SharedCodec597"]:c6(),["SharedCodec598"]:c7(),["SharedCodec599"]:c8(),["SharedCodec600"]:c9(),["SharedCodec601"]:c10(),["SharedCodec602"]:c11(),["SharedCodec603"]:c12(),["SharedCodec604"]:c13(),["SharedCodec608"]:c14(),["SharedCodec609"]:c15(),["SharedCodec610"]:c16(),["SharedCodec611"]:c17(),["SharedCodec612"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
