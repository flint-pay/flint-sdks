import { d74 as c0, d1826 as c1, d1839 as c2, d1965 as c3, d1956 as c4, d1823 as c5, d1825 as c6, d1824 as c7, d1961 as c8, d1962 as c9, d1963 as c10, d1964 as c11 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1965 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1965;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["SharedCodec483"]:c5(),["SharedCodec484"]:c6(),["SharedCodec485"]:c7(),["SharedCodec507"]:c8(),["SharedCodec508"]:c9(),["SharedCodec509"]:c10(),["SharedCodec510"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
