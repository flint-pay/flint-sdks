import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9864 as c1, d9868 as c2, d9871 as c5 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1439 as c3 } from '../descriptors/data/71.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9957 as c4, d9958 as c6, d9959 as c9, d9960 as c13, d9961 as c14, d9962 as c15, d9963 as c16, d9964 as c38, d9965 as c39 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c7, d8226 as c8 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9875 as c10, d9876 as c11, d9883 as c17, d9884 as c18, d9885 as c19, d9886 as c20, d9887 as c21, d9888 as c22, d9889 as c23, d9890 as c24, d9891 as c25, d9892 as c26, d9893 as c27, d9894 as c28, d9895 as c29, d9896 as c30, d9897 as c31, d9898 as c32, d9899 as c33, d9900 as c34 } from '../descriptors/data/454.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8994 as c12 } from '../descriptors/data/403.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9901 as c35, d9902 as c36, d9903 as c37 } from '../descriptors/data/455.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1439 as d1439 } from '../descriptors/data/71.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeMoney"]:c7(),["PlatformFeeRequest"]:c8(),["ReaderPaymentSourceTip"]:c9(),["SharedCodec1924"]:c10(),["SharedCodec1925"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2249"]:c13(),["SharedCodec2250"]:c14(),["SharedCodec2251"]:c15(),["SharedCodec2252"]:c16(),["SharedCodec2271"]:c17(),["SharedCodec2272"]:c18(),["SharedCodec2273"]:c19(),["SharedCodec2274"]:c20(),["SharedCodec2275"]:c21(),["SharedCodec2276"]:c22(),["SharedCodec2277"]:c23(),["SharedCodec2278"]:c24(),["SharedCodec2279"]:c25(),["SharedCodec2280"]:c26(),["SharedCodec2281"]:c27(),["SharedCodec2282"]:c28(),["SharedCodec2283"]:c29(),["SharedCodec2284"]:c30(),["SharedCodec2285"]:c31(),["SharedCodec2286"]:c32(),["SharedCodec2287"]:c33(),["SharedCodec2288"]:c34(),["SharedCodec2289"]:c35(),["SharedCodec2290"]:c36(),["SharedCodec2291"]:c37(),["SharedCodec331"]:c38(),["SharedCodec333"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
