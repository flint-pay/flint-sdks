import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7675 as c1, d7679 as c2, d7689 as c5, d7690 as c6, d7691 as c7, d7692 as c8, d7693 as c9, d7694 as c10, d7695 as c11 } from '../descriptors/data/366.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1094 as c3 } from '../descriptors/data/54.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7785 as c4 } from '../descriptors/data/370.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7707 as c12, d7708 as c13, d7709 as c14, d7718 as c15, d7719 as c16, d7720 as c17, d7721 as c18, d7722 as c19, d7723 as c20 } from '../descriptors/data/367.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7789 as c21 } from '../descriptors/data/371.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1094 as d1094 } from '../descriptors/data/54.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1094;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["ReaderPaymentSourceTip"]:c4(),["SharedCodec1072"]:c5(),["SharedCodec1073"]:c6(),["SharedCodec1086"]:c7(),["SharedCodec1087"]:c8(),["SharedCodec1088"]:c9(),["SharedCodec1089"]:c10(),["SharedCodec1090"]:c11(),["SharedCodec1248"]:c12(),["SharedCodec1249"]:c13(),["SharedCodec1250"]:c14(),["SharedCodec1259"]:c15(),["SharedCodec1260"]:c16(),["SharedCodec1261"]:c17(),["SharedCodec1262"]:c18(),["SharedCodec1263"]:c19(),["SharedCodec1264"]:c20(),["SharedCodec187"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
