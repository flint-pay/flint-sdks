import { d8237 as c0, d8235 as c3, d8236 as c4, d8234 as c6 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8551 as c1, d8552 as c2 } from '../descriptors/data/380.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8132 as c5 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9064 as c7, d9065 as c8, d9066 as c9, d9067 as c10, d9068 as c11, d9069 as c12, d9070 as c13, d9071 as c14, d9072 as c15, d9073 as c16 } from '../descriptors/data/409.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7836 as c17 } from '../descriptors/data/330.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7836 as d7836 } from '../descriptors/data/330.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7836;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1747"]:c1(),["SharedCodec1748"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3128"]:c5(),["SharedCodec3131"]:c6(),["SharedCodec3147"]:c7(),["SharedCodec3148"]:c8(),["SharedCodec3149"]:c9(),["SharedCodec3150"]:c10(),["SharedCodec3151"]:c11(),["SharedCodec3152"]:c12(),["SharedCodec3153"]:c13(),["SharedCodec3154"]:c14(),["SharedCodec3155"]:c15(),["SharedCodec3156"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
