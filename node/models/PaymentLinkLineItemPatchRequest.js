import { d8003 as c0 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8359 as c1 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10291 as c2 } from '../descriptors/data/479.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8352 as c3 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10308 as c4, d10313 as c5 } from '../descriptors/data/481.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10314 as c6, d10317 as c7, d10318 as c8, d10319 as c9, d10320 as c10, d10321 as c11, d10322 as c12, d10323 as c13 } from '../descriptors/data/482.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10324 as c14, d10325 as c15 } from '../descriptors/data/483.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10291 as d10291 } from '../descriptors/data/479.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2173"]:c4(),["SharedCodec2178"]:c5(),["SharedCodec2179"]:c6(),["SharedCodec2197"]:c7(),["SharedCodec2198"]:c8(),["SharedCodec2199"]:c9(),["SharedCodec2200"]:c10(),["SharedCodec2201"]:c11(),["SharedCodec2202"]:c12(),["SharedCodec2203"]:c13(),["SharedCodec2204"]:c14(),["SharedCodec2205"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
