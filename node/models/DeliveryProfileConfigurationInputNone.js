import { d643 as c0 } from '../descriptors/data/37.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8827 as c1, d8831 as c2, d8832 as c3, d8838 as c4, d8839 as c5, d8840 as c6, d8841 as c7, d8842 as c8 } from '../descriptors/data/395.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d643 as d643 } from '../descriptors/data/37.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d643;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputNone"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1006"]:c2(),["SharedCodec1007"]:c3(),["SharedCodec1021"]:c4(),["SharedCodec1022"]:c5(),["SharedCodec1024"]:c6(),["SharedCodec1025"]:c7(),["SharedCodec1026"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
