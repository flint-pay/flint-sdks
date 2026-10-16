import { d403 as c0, d323 as c1, d399 as c2, d398 as c3, d397 as c4, d402 as c5, d401 as c6, d400 as c7 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d403 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d403;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec128"]:c2(),["SharedCodec129"]:c3(),["SharedCodec130"]:c4(),["SharedCodec131"]:c5(),["SharedCodec132"]:c6(),["SharedCodec133"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
