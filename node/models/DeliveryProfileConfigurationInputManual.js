import { d642 as c0 } from '../descriptors/data/37.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8827 as c1, d8829 as c2, d8830 as c3, d8838 as c4, d8839 as c5, d8840 as c6, d8841 as c7, d8842 as c8 } from '../descriptors/data/396.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d642 as d642 } from '../descriptors/data/37.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d642;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1004"]:c2(),["SharedCodec1005"]:c3(),["SharedCodec1021"]:c4(),["SharedCodec1022"]:c5(),["SharedCodec1024"]:c6(),["SharedCodec1025"]:c7(),["SharedCodec1026"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
