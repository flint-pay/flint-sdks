import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7675 as c1, d7684 as c3, d7689 as c7, d7690 as c8 } from '../descriptors/data/366.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1095 as c2 } from '../descriptors/data/54.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7784 as c4, d7785 as c6 } from '../descriptors/data/370.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6085 as c5 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7702 as c9, d7703 as c10, d7704 as c11, d7705 as c12, d7707 as c13, d7708 as c14, d7709 as c15, d7710 as c16, d7711 as c17, d7712 as c18, d7713 as c19, d7714 as c20, d7715 as c21, d7716 as c22 } from '../descriptors/data/367.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6862 as c23 } from '../descriptors/data/319.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7789 as c24 } from '../descriptors/data/371.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1095 as d1095 } from '../descriptors/data/54.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1095;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1072"]:c7(),["SharedCodec1073"]:c8(),["SharedCodec1236"]:c9(),["SharedCodec1237"]:c10(),["SharedCodec1238"]:c11(),["SharedCodec1239"]:c12(),["SharedCodec1248"]:c13(),["SharedCodec1249"]:c14(),["SharedCodec1250"]:c15(),["SharedCodec1251"]:c16(),["SharedCodec1252"]:c17(),["SharedCodec1253"]:c18(),["SharedCodec1254"]:c19(),["SharedCodec1255"]:c20(),["SharedCodec1256"]:c21(),["SharedCodec1257"]:c22(),["SharedCodec141"]:c23(),["SharedCodec187"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
