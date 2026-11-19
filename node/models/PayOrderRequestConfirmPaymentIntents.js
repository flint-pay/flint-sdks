import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9867 as c1 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9871 as c2, d9878 as c6, d9879 as c7, d9887 as c12, d9888 as c13 } from '../descriptors/data/454.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1439 as c3 } from '../descriptors/data/71.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9960 as c4, d9962 as c5, d9963 as c8, d9964 as c9, d9965 as c10, d9966 as c11, d9967 as c21, d9968 as c22 } from '../descriptors/data/458.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9889 as c14, d9897 as c15, d9898 as c16, d9899 as c17, d9900 as c18, d9901 as c19, d9902 as c20 } from '../descriptors/data/455.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1439 as d1439 } from '../descriptors/data/71.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1925"]:c6(),["SharedCodec1926"]:c7(),["SharedCodec2249"]:c8(),["SharedCodec2250"]:c9(),["SharedCodec2251"]:c10(),["SharedCodec2252"]:c11(),["SharedCodec2272"]:c12(),["SharedCodec2273"]:c13(),["SharedCodec2274"]:c14(),["SharedCodec2282"]:c15(),["SharedCodec2283"]:c16(),["SharedCodec2284"]:c17(),["SharedCodec2285"]:c18(),["SharedCodec2286"]:c19(),["SharedCodec2287"]:c20(),["SharedCodec332"]:c21(),["SharedCodec334"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
