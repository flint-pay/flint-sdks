import { d8347 as c0, d8344 as c2, d8345 as c3, d8346 as c4 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d254 as c1 } from '../descriptors/data/12.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8186 as c5, d8187 as c6, d8188 as c7, d8191 as c8, d8192 as c9 } from '../descriptors/data/360.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8204 as c10, d8211 as c11 } from '../descriptors/data/361.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d254 as d254 } from '../descriptors/data/12.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d254;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec355"]:c2(),["SharedCodec356"]:c3(),["SharedCodec357"]:c4(),["SharedCodec358"]:c5(),["SharedCodec359"]:c6(),["SharedCodec360"]:c7(),["SharedCodec363"]:c8(),["SharedCodec364"]:c9(),["SharedCodec375"]:c10(),["SharedCodec376"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
