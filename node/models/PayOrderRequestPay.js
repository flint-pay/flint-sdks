import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7714 as c1, d7721 as c3, d7726 as c7, d7727 as c8 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1100 as c2 } from '../descriptors/data/54.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7816 as c4, d7817 as c6, d7818 as c24 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6130 as c5 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7739 as c9, d7740 as c10, d7741 as c11, d7742 as c12, d7744 as c13, d7745 as c14, d7746 as c15, d7747 as c16, d7748 as c17, d7749 as c18, d7750 as c19, d7751 as c20, d7752 as c21, d7753 as c22 } from '../descriptors/data/373.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c23 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1100 as d1100 } from '../descriptors/data/54.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1074"]:c7(),["SharedCodec1075"]:c8(),["SharedCodec1237"]:c9(),["SharedCodec1238"]:c10(),["SharedCodec1239"]:c11(),["SharedCodec1240"]:c12(),["SharedCodec1249"]:c13(),["SharedCodec1250"]:c14(),["SharedCodec1251"]:c15(),["SharedCodec1252"]:c16(),["SharedCodec1253"]:c17(),["SharedCodec1254"]:c18(),["SharedCodec1255"]:c19(),["SharedCodec1256"]:c20(),["SharedCodec1257"]:c21(),["SharedCodec1258"]:c22(),["SharedCodec141"]:c23(),["SharedCodec186"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
