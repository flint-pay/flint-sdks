import { d77 as c0, d1927 as c1 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1927 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1927;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PaymentAddOnFee"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentAddOnFee(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
