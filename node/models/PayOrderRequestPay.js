import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7713 as c1, d7722 as c3, d7727 as c7, d7728 as c8 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1101 as c2 } from '../descriptors/data/54.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7822 as c4, d7823 as c6 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6129 as c5 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7740 as c9, d7741 as c10, d7742 as c11, d7743 as c12, d7745 as c13, d7746 as c14, d7747 as c15, d7748 as c16, d7749 as c17, d7750 as c18, d7751 as c19, d7752 as c20, d7753 as c21, d7754 as c22 } from '../descriptors/data/370.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c23 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7827 as c24 } from '../descriptors/data/374.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1101 as d1101 } from '../descriptors/data/54.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1074"]:c7(),["SharedCodec1075"]:c8(),["SharedCodec1238"]:c9(),["SharedCodec1239"]:c10(),["SharedCodec1240"]:c11(),["SharedCodec1241"]:c12(),["SharedCodec1250"]:c13(),["SharedCodec1251"]:c14(),["SharedCodec1252"]:c15(),["SharedCodec1253"]:c16(),["SharedCodec1254"]:c17(),["SharedCodec1255"]:c18(),["SharedCodec1256"]:c19(),["SharedCodec1257"]:c20(),["SharedCodec1258"]:c21(),["SharedCodec1259"]:c22(),["SharedCodec142"]:c23(),["SharedCodec188"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
