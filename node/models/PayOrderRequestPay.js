import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9867 as c1 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1440 as c2 } from '../descriptors/data/72.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9960 as c3, d9961 as c4, d9962 as c7, d9963 as c11, d9964 as c12, d9965 as c13, d9966 as c14, d9967 as c24, d9968 as c25 } from '../descriptors/data/458.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8228 as c5, d8227 as c6 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9878 as c8, d9879 as c9, d9887 as c15, d9888 as c16 } from '../descriptors/data/454.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8995 as c10 } from '../descriptors/data/403.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9889 as c17, d9890 as c18, d9891 as c19, d9892 as c20, d9893 as c21, d9894 as c22, d9895 as c23 } from '../descriptors/data/455.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1440 as d1440 } from '../descriptors/data/72.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeMoney"]:c5(),["PlatformFeeRequest"]:c6(),["ReaderPaymentSourceTip"]:c7(),["SharedCodec1925"]:c8(),["SharedCodec1926"]:c9(),["SharedCodec216"]:c10(),["SharedCodec2249"]:c11(),["SharedCodec2250"]:c12(),["SharedCodec2251"]:c13(),["SharedCodec2252"]:c14(),["SharedCodec2272"]:c15(),["SharedCodec2273"]:c16(),["SharedCodec2274"]:c17(),["SharedCodec2275"]:c18(),["SharedCodec2276"]:c19(),["SharedCodec2277"]:c20(),["SharedCodec2278"]:c21(),["SharedCodec2279"]:c22(),["SharedCodec2280"]:c23(),["SharedCodec332"]:c24(),["SharedCodec334"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
