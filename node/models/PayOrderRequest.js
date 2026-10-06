import { d176 as c0, d77 as c1, d1838 as c2, d1852 as c3, d1980 as c4, d1969 as c5, d1835 as c6, d1837 as c7, d1836 as c8, d1976 as c9, d1975 as c10, d1974 as c11, d1977 as c12, d1978 as c13, d1979 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1980 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1980;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec491"]:c6(),["SharedCodec492"]:c7(),["SharedCodec493"]:c8(),["SharedCodec516"]:c9(),["SharedCodec517"]:c10(),["SharedCodec518"]:c11(),["SharedCodec519"]:c12(),["SharedCodec520"]:c13(),["SharedCodec521"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
