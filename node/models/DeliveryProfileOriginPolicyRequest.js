import { d8827 as c0, d8838 as c1, d8839 as c2, d8840 as c3, d8841 as c4, d8842 as c5 } from '../descriptors/data/395.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8827 as d8827 } from '../descriptors/data/395.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8827;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyRequest"]:c0(),["SharedCodec1021"]:c1(),["SharedCodec1022"]:c2(),["SharedCodec1024"]:c3(),["SharedCodec1025"]:c4(),["SharedCodec1026"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
