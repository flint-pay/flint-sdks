import { d343 as c0, d323 as c1, d336 as c2, d342 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d343 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d343;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRedemptionRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec104"]:c2(),["SharedCodec108"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRedemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
