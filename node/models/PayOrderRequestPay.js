import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9864 as c1 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1441 as c2 } from '../descriptors/data/72.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9957 as c3, d9958 as c4, d9959 as c7, d9960 as c11, d9961 as c12, d9962 as c13, d9963 as c14, d9964 as c24, d9965 as c25 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c5, d8226 as c6 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9875 as c8, d9876 as c9, d9884 as c15, d9885 as c16, d9886 as c17, d9887 as c18, d9888 as c19, d9889 as c20, d9890 as c21, d9891 as c22, d9892 as c23 } from '../descriptors/data/454.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8994 as c10 } from '../descriptors/data/403.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1441 as d1441 } from '../descriptors/data/72.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeMoney"]:c5(),["PlatformFeeRequest"]:c6(),["ReaderPaymentSourceTip"]:c7(),["SharedCodec1924"]:c8(),["SharedCodec1925"]:c9(),["SharedCodec216"]:c10(),["SharedCodec2249"]:c11(),["SharedCodec2250"]:c12(),["SharedCodec2251"]:c13(),["SharedCodec2252"]:c14(),["SharedCodec2272"]:c15(),["SharedCodec2273"]:c16(),["SharedCodec2274"]:c17(),["SharedCodec2275"]:c18(),["SharedCodec2276"]:c19(),["SharedCodec2277"]:c20(),["SharedCodec2278"]:c21(),["SharedCodec2279"]:c22(),["SharedCodec2280"]:c23(),["SharedCodec331"]:c24(),["SharedCodec333"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
