import { d426 as c0, d77 as c1, d1881 as c2, d1882 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d426 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderPaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["OrderPaymentSourceCardSelection"]:c2(),["OrderPaymentSourceSelection"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
