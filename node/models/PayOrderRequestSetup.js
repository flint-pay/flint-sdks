import { d176 as c0, d77 as c1, d1984 as c2, d1975 as c3, d1974 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1984 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1984;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["PayOrderRequestSetup"]:c2(),["SharedCodec517"]:c3(),["SharedCodec518"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestSetup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
