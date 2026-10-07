import { d140 as c0, d314 as c1, d1822 as c2, d1836 as c3, d1963 as c4, d1952 as c5, d1819 as c6, d1821 as c7, d1820 as c8, d1959 as c9, d1958 as c10, d1957 as c11, d1960 as c12, d1961 as c13, d1962 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1963 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1963;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec456"]:c6(),["SharedCodec457"]:c7(),["SharedCodec458"]:c8(),["SharedCodec480"]:c9(),["SharedCodec481"]:c10(),["SharedCodec482"]:c11(),["SharedCodec483"]:c12(),["SharedCodec484"]:c13(),["SharedCodec485"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
