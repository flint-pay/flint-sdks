import { d176 as c0, d77 as c1, d1838 as c2, d1852 as c3, d1981 as c4, d1835 as c5, d1837 as c6, d1836 as c7, d1975 as c8, d1974 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1981 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1981;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequestConfirmPaymentIntents"]:c4(),["SharedCodec491"]:c5(),["SharedCodec492"]:c6(),["SharedCodec493"]:c7(),["SharedCodec517"]:c8(),["SharedCodec518"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
