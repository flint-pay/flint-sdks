import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7714 as c1, d7718 as c2, d7721 as c4, d7722 as c5, d7726 as c9, d7727 as c10, d7728 as c11, d7729 as c12, d7730 as c13, d7731 as c14, d7732 as c15 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1098 as c3 } from '../descriptors/data/54.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7816 as c6, d7817 as c8, d7818 as c43 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6130 as c7 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7739 as c16, d7740 as c17, d7741 as c18, d7742 as c19, d7743 as c20, d7744 as c21, d7745 as c22, d7746 as c23, d7747 as c24, d7748 as c25, d7749 as c26, d7750 as c27, d7751 as c28, d7752 as c29, d7753 as c30, d7754 as c31, d7755 as c32, d7756 as c33, d7757 as c34, d7758 as c35, d7759 as c36, d7760 as c37, d7761 as c38 } from '../descriptors/data/373.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7762 as c39, d7763 as c40, d7764 as c41 } from '../descriptors/data/374.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c42 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1098 as d1098 } from '../descriptors/data/54.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1098;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialToken"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1074"]:c9(),["SharedCodec1075"]:c10(),["SharedCodec1088"]:c11(),["SharedCodec1089"]:c12(),["SharedCodec1090"]:c13(),["SharedCodec1091"]:c14(),["SharedCodec1092"]:c15(),["SharedCodec1237"]:c16(),["SharedCodec1238"]:c17(),["SharedCodec1239"]:c18(),["SharedCodec1240"]:c19(),["SharedCodec1248"]:c20(),["SharedCodec1249"]:c21(),["SharedCodec1250"]:c22(),["SharedCodec1251"]:c23(),["SharedCodec1252"]:c24(),["SharedCodec1253"]:c25(),["SharedCodec1254"]:c26(),["SharedCodec1255"]:c27(),["SharedCodec1256"]:c28(),["SharedCodec1257"]:c29(),["SharedCodec1258"]:c30(),["SharedCodec1259"]:c31(),["SharedCodec1260"]:c32(),["SharedCodec1261"]:c33(),["SharedCodec1262"]:c34(),["SharedCodec1263"]:c35(),["SharedCodec1264"]:c36(),["SharedCodec1265"]:c37(),["SharedCodec1266"]:c38(),["SharedCodec1267"]:c39(),["SharedCodec1268"]:c40(),["SharedCodec1269"]:c41(),["SharedCodec141"]:c42(),["SharedCodec186"]:c43()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
