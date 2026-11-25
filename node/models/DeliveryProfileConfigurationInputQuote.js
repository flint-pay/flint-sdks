import { d644 as c0 } from '../descriptors/data/37.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8827 as c1, d8833 as c2, d8838 as c3, d8839 as c4, d8840 as c5, d8841 as c6, d8842 as c7 } from '../descriptors/data/395.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d644 as d644 } from '../descriptors/data/37.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d644;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputQuote"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1008"]:c2(),["SharedCodec1021"]:c3(),["SharedCodec1022"]:c4(),["SharedCodec1024"]:c5(),["SharedCodec1025"]:c6(),["SharedCodec1026"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
