import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7714 as c1, d7718 as c2, d7726 as c5, d7727 as c6, d7728 as c7, d7729 as c8, d7730 as c9, d7731 as c10, d7732 as c11 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1099 as c3 } from '../descriptors/data/54.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7817 as c4, d7818 as c21 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7744 as c12, d7745 as c13, d7746 as c14, d7755 as c15, d7756 as c16, d7757 as c17, d7758 as c18, d7759 as c19, d7760 as c20 } from '../descriptors/data/373.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1099 as d1099 } from '../descriptors/data/54.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1099;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["ReaderPaymentSourceTip"]:c4(),["SharedCodec1074"]:c5(),["SharedCodec1075"]:c6(),["SharedCodec1088"]:c7(),["SharedCodec1089"]:c8(),["SharedCodec1090"]:c9(),["SharedCodec1091"]:c10(),["SharedCodec1092"]:c11(),["SharedCodec1249"]:c12(),["SharedCodec1250"]:c13(),["SharedCodec1251"]:c14(),["SharedCodec1260"]:c15(),["SharedCodec1261"]:c16(),["SharedCodec1262"]:c17(),["SharedCodec1263"]:c18(),["SharedCodec1264"]:c19(),["SharedCodec1265"]:c20(),["SharedCodec186"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
