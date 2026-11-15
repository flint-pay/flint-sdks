import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7714 as c1, d7718 as c2, d7721 as c5 } from '../descriptors/data/370.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1093 as c3 } from '../descriptors/data/53.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7805 as c4, d7806 as c6, d7807 as c8, d7808 as c11, d7809 as c12, d7810 as c13, d7811 as c14, d7812 as c37, d7813 as c38 } from '../descriptors/data/374.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6124 as c7 } from '../descriptors/data/279.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7725 as c9, d7726 as c10, d7733 as c15, d7734 as c16, d7735 as c17, d7736 as c18, d7737 as c19, d7738 as c20, d7739 as c21, d7740 as c22, d7741 as c23, d7742 as c24, d7743 as c25, d7744 as c26, d7745 as c27, d7746 as c28, d7747 as c29, d7748 as c30, d7749 as c31 } from '../descriptors/data/371.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7750 as c32, d7751 as c33, d7752 as c34, d7753 as c35 } from '../descriptors/data/372.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6900 as c36 } from '../descriptors/data/324.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1093 as d1093 } from '../descriptors/data/53.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1093;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1073"]:c9(),["SharedCodec1074"]:c10(),["SharedCodec1228"]:c11(),["SharedCodec1229"]:c12(),["SharedCodec1230"]:c13(),["SharedCodec1231"]:c14(),["SharedCodec1239"]:c15(),["SharedCodec1240"]:c16(),["SharedCodec1241"]:c17(),["SharedCodec1242"]:c18(),["SharedCodec1243"]:c19(),["SharedCodec1244"]:c20(),["SharedCodec1245"]:c21(),["SharedCodec1246"]:c22(),["SharedCodec1247"]:c23(),["SharedCodec1248"]:c24(),["SharedCodec1249"]:c25(),["SharedCodec1250"]:c26(),["SharedCodec1251"]:c27(),["SharedCodec1252"]:c28(),["SharedCodec1253"]:c29(),["SharedCodec1254"]:c30(),["SharedCodec1255"]:c31(),["SharedCodec1256"]:c32(),["SharedCodec1257"]:c33(),["SharedCodec1258"]:c34(),["SharedCodec1259"]:c35(),["SharedCodec136"]:c36(),["SharedCodec178"]:c37(),["SharedCodec180"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
