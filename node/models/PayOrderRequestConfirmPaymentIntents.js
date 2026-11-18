import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9865 as c1, d9869 as c2 } from '../descriptors/data/452.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1440 as c3 } from '../descriptors/data/71.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9958 as c4, d9960 as c5, d9961 as c8, d9962 as c9, d9963 as c10, d9964 as c11, d9965 as c21, d9966 as c22 } from '../descriptors/data/456.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9876 as c6, d9877 as c7, d9885 as c12, d9886 as c13, d9887 as c14, d9895 as c15, d9896 as c16, d9897 as c17, d9898 as c18, d9899 as c19, d9900 as c20 } from '../descriptors/data/453.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1440 as d1440 } from '../descriptors/data/71.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1925"]:c6(),["SharedCodec1926"]:c7(),["SharedCodec2250"]:c8(),["SharedCodec2251"]:c9(),["SharedCodec2252"]:c10(),["SharedCodec2253"]:c11(),["SharedCodec2273"]:c12(),["SharedCodec2274"]:c13(),["SharedCodec2275"]:c14(),["SharedCodec2283"]:c15(),["SharedCodec2284"]:c16(),["SharedCodec2285"]:c17(),["SharedCodec2286"]:c18(),["SharedCodec2287"]:c19(),["SharedCodec2288"]:c20(),["SharedCodec331"]:c21(),["SharedCodec333"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
