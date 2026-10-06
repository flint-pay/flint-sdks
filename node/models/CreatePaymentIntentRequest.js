import { d442 as c0, d77 as c1, d438 as c2, d437 as c3, d436 as c4, d441 as c5, d440 as c6, d439 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d442 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d442;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec162"]:c2(),["SharedCodec163"]:c3(),["SharedCodec164"]:c4(),["SharedCodec165"]:c5(),["SharedCodec166"]:c6(),["SharedCodec167"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
