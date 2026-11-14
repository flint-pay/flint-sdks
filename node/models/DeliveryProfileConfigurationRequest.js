import { d6587 as c0, d6590 as c1 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6601 as c2, d6602 as c3, d6603 as c4, d6604 as c5, d6605 as c6, d6606 as c7, d6607 as c8, d6608 as c9, d6609 as c10, d6610 as c11, d6611 as c12, d6612 as c13, d6613 as c14, d6614 as c15 } from '../descriptors/data/303.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6587 as d6587 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6587;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec596"]:c2(),["SharedCodec597"]:c3(),["SharedCodec598"]:c4(),["SharedCodec599"]:c5(),["SharedCodec600"]:c6(),["SharedCodec601"]:c7(),["SharedCodec602"]:c8(),["SharedCodec603"]:c9(),["SharedCodec604"]:c10(),["SharedCodec608"]:c11(),["SharedCodec609"]:c12(),["SharedCodec610"]:c13(),["SharedCodec611"]:c14(),["SharedCodec612"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
