import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7713 as c1, d7717 as c2, d7722 as c4, d7723 as c5, d7727 as c9, d7728 as c10, d7729 as c11, d7730 as c12, d7731 as c13, d7732 as c14, d7733 as c15 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1099 as c3 } from '../descriptors/data/54.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7822 as c6, d7823 as c8 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6129 as c7 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7740 as c16, d7741 as c17, d7742 as c18, d7743 as c19, d7744 as c20, d7745 as c21, d7746 as c22, d7747 as c23, d7748 as c24, d7749 as c25, d7750 as c26, d7751 as c27, d7752 as c28, d7753 as c29, d7754 as c30, d7755 as c31, d7756 as c32, d7757 as c33, d7758 as c34, d7759 as c35, d7760 as c36, d7761 as c37, d7762 as c38 } from '../descriptors/data/370.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7763 as c39, d7764 as c40, d7765 as c41 } from '../descriptors/data/371.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c42 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7827 as c43 } from '../descriptors/data/374.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1099 as d1099 } from '../descriptors/data/54.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1099;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialToken"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1074"]:c9(),["SharedCodec1075"]:c10(),["SharedCodec1088"]:c11(),["SharedCodec1089"]:c12(),["SharedCodec1090"]:c13(),["SharedCodec1091"]:c14(),["SharedCodec1092"]:c15(),["SharedCodec1238"]:c16(),["SharedCodec1239"]:c17(),["SharedCodec1240"]:c18(),["SharedCodec1241"]:c19(),["SharedCodec1249"]:c20(),["SharedCodec1250"]:c21(),["SharedCodec1251"]:c22(),["SharedCodec1252"]:c23(),["SharedCodec1253"]:c24(),["SharedCodec1254"]:c25(),["SharedCodec1255"]:c26(),["SharedCodec1256"]:c27(),["SharedCodec1257"]:c28(),["SharedCodec1258"]:c29(),["SharedCodec1259"]:c30(),["SharedCodec1260"]:c31(),["SharedCodec1261"]:c32(),["SharedCodec1262"]:c33(),["SharedCodec1263"]:c34(),["SharedCodec1264"]:c35(),["SharedCodec1265"]:c36(),["SharedCodec1266"]:c37(),["SharedCodec1267"]:c38(),["SharedCodec1268"]:c39(),["SharedCodec1269"]:c40(),["SharedCodec1270"]:c41(),["SharedCodec142"]:c42(),["SharedCodec188"]:c43()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
