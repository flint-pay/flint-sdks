import { d74 as c0, d1828 as c1, d1841 as c2, d1967 as c3, d1958 as c4, d1825 as c5, d1827 as c6, d1826 as c7, d1963 as c8, d1964 as c9, d1965 as c10, d1966 as c11 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1967 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1967;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["SharedCodec483"]:c5(),["SharedCodec484"]:c6(),["SharedCodec485"]:c7(),["SharedCodec507"]:c8(),["SharedCodec508"]:c9(),["SharedCodec509"]:c10(),["SharedCodec510"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
