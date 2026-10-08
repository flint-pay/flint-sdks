import { d401 as c0, d323 as c1, d397 as c2, d396 as c3, d395 as c4, d400 as c5, d399 as c6, d398 as c7 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d401 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d401;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec126"]:c2(),["SharedCodec127"]:c3(),["SharedCodec128"]:c4(),["SharedCodec129"]:c5(),["SharedCodec130"]:c6(),["SharedCodec131"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
