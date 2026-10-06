import { d447 as c0, d77 as c1, d443 as c2, d442 as c3, d441 as c4, d446 as c5, d445 as c6, d444 as c7 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d447 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec162"]:c2(),["SharedCodec163"]:c3(),["SharedCodec164"]:c4(),["SharedCodec165"]:c5(),["SharedCodec166"]:c6(),["SharedCodec167"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
