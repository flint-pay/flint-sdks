import { d8824 as c0, d8827 as c1, d8829 as c2, d8830 as c3, d8831 as c4, d8832 as c5, d8833 as c6, d8834 as c7, d8835 as c8, d8836 as c9, d8837 as c10, d8838 as c11, d8839 as c12, d8840 as c13, d8841 as c14, d8842 as c15 } from '../descriptors/data/395.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8132 as c16 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8234 as c17 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8571 as c18 } from '../descriptors/data/381.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7831 as c19 } from '../descriptors/data/330.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7831 as d7831 } from '../descriptors/data/330.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7831;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1004"]:c2(),["SharedCodec1005"]:c3(),["SharedCodec1006"]:c4(),["SharedCodec1007"]:c5(),["SharedCodec1008"]:c6(),["SharedCodec1009"]:c7(),["SharedCodec1010"]:c8(),["SharedCodec1017"]:c9(),["SharedCodec1018"]:c10(),["SharedCodec1021"]:c11(),["SharedCodec1022"]:c12(),["SharedCodec1024"]:c13(),["SharedCodec1025"]:c14(),["SharedCodec1026"]:c15(),["SharedCodec3128"]:c16(),["SharedCodec3131"]:c17(),["SharedCodec3139"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
