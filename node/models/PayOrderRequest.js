import { d74 as c0, d1826 as c1, d1839 as c2, d1964 as c3, d1955 as c4, d1823 as c5, d1825 as c6, d1824 as c7, d1960 as c8, d1961 as c9, d1962 as c10, d1963 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1964 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1964;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["SharedCodec483"]:c5(),["SharedCodec484"]:c6(),["SharedCodec485"]:c7(),["SharedCodec507"]:c8(),["SharedCodec508"]:c9(),["SharedCodec509"]:c10(),["SharedCodec510"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
