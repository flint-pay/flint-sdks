import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7713 as c1, d7717 as c2, d7727 as c5, d7728 as c6, d7729 as c7, d7730 as c8, d7731 as c9, d7732 as c10, d7733 as c11 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1100 as c3 } from '../descriptors/data/54.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7823 as c4 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7745 as c12, d7746 as c13, d7747 as c14, d7756 as c15, d7757 as c16, d7758 as c17, d7759 as c18, d7760 as c19, d7761 as c20 } from '../descriptors/data/370.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7827 as c21 } from '../descriptors/data/374.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1100 as d1100 } from '../descriptors/data/54.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["ReaderPaymentSourceTip"]:c4(),["SharedCodec1074"]:c5(),["SharedCodec1075"]:c6(),["SharedCodec1088"]:c7(),["SharedCodec1089"]:c8(),["SharedCodec1090"]:c9(),["SharedCodec1091"]:c10(),["SharedCodec1092"]:c11(),["SharedCodec1250"]:c12(),["SharedCodec1251"]:c13(),["SharedCodec1252"]:c14(),["SharedCodec1261"]:c15(),["SharedCodec1262"]:c16(),["SharedCodec1263"]:c17(),["SharedCodec1264"]:c18(),["SharedCodec1265"]:c19(),["SharedCodec1266"]:c20(),["SharedCodec188"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
