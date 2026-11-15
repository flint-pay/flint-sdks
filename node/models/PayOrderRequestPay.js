import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7714 as c1 } from '../descriptors/data/370.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1095 as c2 } from '../descriptors/data/53.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7805 as c3, d7806 as c4, d7807 as c6, d7808 as c9, d7809 as c10, d7810 as c11, d7811 as c12, d7812 as c23, d7813 as c24 } from '../descriptors/data/374.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6124 as c5 } from '../descriptors/data/279.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7725 as c7, d7726 as c8, d7734 as c13, d7735 as c14, d7736 as c15, d7737 as c16, d7738 as c17, d7739 as c18, d7740 as c19, d7741 as c20, d7742 as c21 } from '../descriptors/data/371.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6900 as c22 } from '../descriptors/data/324.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1095 as d1095 } from '../descriptors/data/53.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1095;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1073"]:c7(),["SharedCodec1074"]:c8(),["SharedCodec1228"]:c9(),["SharedCodec1229"]:c10(),["SharedCodec1230"]:c11(),["SharedCodec1231"]:c12(),["SharedCodec1240"]:c13(),["SharedCodec1241"]:c14(),["SharedCodec1242"]:c15(),["SharedCodec1243"]:c16(),["SharedCodec1244"]:c17(),["SharedCodec1245"]:c18(),["SharedCodec1246"]:c19(),["SharedCodec1247"]:c20(),["SharedCodec1248"]:c21(),["SharedCodec136"]:c22(),["SharedCodec178"]:c23(),["SharedCodec180"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
