import { d645 as c0 } from '../descriptors/data/37.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8827 as c1, d8829 as c2, d8830 as c3, d8833 as c4, d8834 as c5, d8835 as c6, d8838 as c7, d8839 as c8, d8840 as c9, d8841 as c10, d8842 as c11 } from '../descriptors/data/396.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d645 as d645 } from '../descriptors/data/37.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d645;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1004"]:c2(),["SharedCodec1005"]:c3(),["SharedCodec1008"]:c4(),["SharedCodec1009"]:c5(),["SharedCodec1010"]:c6(),["SharedCodec1021"]:c7(),["SharedCodec1022"]:c8(),["SharedCodec1024"]:c9(),["SharedCodec1025"]:c10(),["SharedCodec1026"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
