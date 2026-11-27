import { d275 as c0 } from '../descriptors/data/14.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8824 as c1, d8827 as c2, d8829 as c4, d8830 as c5, d8831 as c6, d8832 as c7, d8833 as c8, d8834 as c9, d8835 as c10, d8836 as c11, d8837 as c12, d8838 as c13, d8839 as c14, d8840 as c15, d8841 as c16, d8842 as c17 } from '../descriptors/data/396.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c3 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d275 as d275 } from '../descriptors/data/14.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec1004"]:c4(),["SharedCodec1005"]:c5(),["SharedCodec1006"]:c6(),["SharedCodec1007"]:c7(),["SharedCodec1008"]:c8(),["SharedCodec1009"]:c9(),["SharedCodec1010"]:c10(),["SharedCodec1017"]:c11(),["SharedCodec1018"]:c12(),["SharedCodec1021"]:c13(),["SharedCodec1022"]:c14(),["SharedCodec1024"]:c15(),["SharedCodec1025"]:c16(),["SharedCodec1026"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
