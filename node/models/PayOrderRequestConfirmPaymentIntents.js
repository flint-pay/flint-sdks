import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9864 as c1, d9868 as c2 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1440 as c3 } from '../descriptors/data/71.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9957 as c4, d9959 as c5, d9960 as c8, d9961 as c9, d9962 as c10, d9963 as c11, d9964 as c21, d9965 as c22 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9875 as c6, d9876 as c7, d9884 as c12, d9885 as c13, d9886 as c14, d9894 as c15, d9895 as c16, d9896 as c17, d9897 as c18, d9898 as c19, d9899 as c20 } from '../descriptors/data/454.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1440 as d1440 } from '../descriptors/data/71.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1924"]:c6(),["SharedCodec1925"]:c7(),["SharedCodec2249"]:c8(),["SharedCodec2250"]:c9(),["SharedCodec2251"]:c10(),["SharedCodec2252"]:c11(),["SharedCodec2272"]:c12(),["SharedCodec2273"]:c13(),["SharedCodec2274"]:c14(),["SharedCodec2282"]:c15(),["SharedCodec2283"]:c16(),["SharedCodec2284"]:c17(),["SharedCodec2285"]:c18(),["SharedCodec2286"]:c19(),["SharedCodec2287"]:c20(),["SharedCodec331"]:c21(),["SharedCodec333"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
