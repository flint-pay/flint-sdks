import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7675 as c1, d7679 as c2, d7684 as c4, d7685 as c5, d7689 as c9, d7690 as c10, d7691 as c11, d7692 as c12, d7693 as c13, d7694 as c14, d7695 as c15 } from '../descriptors/data/366.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1093 as c3 } from '../descriptors/data/54.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7784 as c6, d7785 as c8 } from '../descriptors/data/370.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6085 as c7 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7702 as c16, d7703 as c17, d7704 as c18, d7705 as c19, d7706 as c20, d7707 as c21, d7708 as c22, d7709 as c23, d7710 as c24, d7711 as c25, d7712 as c26, d7713 as c27, d7714 as c28, d7715 as c29, d7716 as c30, d7717 as c31, d7718 as c32, d7719 as c33, d7720 as c34, d7721 as c35, d7722 as c36, d7723 as c37, d7724 as c38 } from '../descriptors/data/367.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7725 as c39, d7726 as c40, d7727 as c41 } from '../descriptors/data/368.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6862 as c42 } from '../descriptors/data/319.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7789 as c43 } from '../descriptors/data/371.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1093 as d1093 } from '../descriptors/data/54.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1093;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialToken"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1072"]:c9(),["SharedCodec1073"]:c10(),["SharedCodec1086"]:c11(),["SharedCodec1087"]:c12(),["SharedCodec1088"]:c13(),["SharedCodec1089"]:c14(),["SharedCodec1090"]:c15(),["SharedCodec1236"]:c16(),["SharedCodec1237"]:c17(),["SharedCodec1238"]:c18(),["SharedCodec1239"]:c19(),["SharedCodec1247"]:c20(),["SharedCodec1248"]:c21(),["SharedCodec1249"]:c22(),["SharedCodec1250"]:c23(),["SharedCodec1251"]:c24(),["SharedCodec1252"]:c25(),["SharedCodec1253"]:c26(),["SharedCodec1254"]:c27(),["SharedCodec1255"]:c28(),["SharedCodec1256"]:c29(),["SharedCodec1257"]:c30(),["SharedCodec1258"]:c31(),["SharedCodec1259"]:c32(),["SharedCodec1260"]:c33(),["SharedCodec1261"]:c34(),["SharedCodec1262"]:c35(),["SharedCodec1263"]:c36(),["SharedCodec1264"]:c37(),["SharedCodec1265"]:c38(),["SharedCodec1266"]:c39(),["SharedCodec1267"]:c40(),["SharedCodec1268"]:c41(),["SharedCodec141"]:c42(),["SharedCodec187"]:c43()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
