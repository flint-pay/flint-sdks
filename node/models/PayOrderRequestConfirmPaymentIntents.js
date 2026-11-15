import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7714 as c1, d7718 as c2 } from '../descriptors/data/370.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1094 as c3 } from '../descriptors/data/53.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7805 as c4, d7807 as c5, d7808 as c8, d7809 as c9, d7810 as c10, d7811 as c11, d7812 as c21, d7813 as c22 } from '../descriptors/data/374.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7725 as c6, d7726 as c7, d7734 as c12, d7735 as c13, d7736 as c14, d7744 as c15, d7745 as c16, d7746 as c17, d7747 as c18, d7748 as c19, d7749 as c20 } from '../descriptors/data/371.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1094 as d1094 } from '../descriptors/data/53.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1094;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1073"]:c6(),["SharedCodec1074"]:c7(),["SharedCodec1228"]:c8(),["SharedCodec1229"]:c9(),["SharedCodec1230"]:c10(),["SharedCodec1231"]:c11(),["SharedCodec1240"]:c12(),["SharedCodec1241"]:c13(),["SharedCodec1242"]:c14(),["SharedCodec1250"]:c15(),["SharedCodec1251"]:c16(),["SharedCodec1252"]:c17(),["SharedCodec1253"]:c18(),["SharedCodec1254"]:c19(),["SharedCodec1255"]:c20(),["SharedCodec178"]:c21(),["SharedCodec180"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
