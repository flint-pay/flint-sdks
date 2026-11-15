import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7711 as c1, d7715 as c2, d7718 as c5 } from '../descriptors/data/370.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1092 as c3 } from '../descriptors/data/54.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7802 as c4, d7803 as c6, d7804 as c8, d7805 as c11, d7806 as c12, d7807 as c13, d7808 as c14, d7809 as c37, d7810 as c38 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6122 as c7 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7722 as c9, d7723 as c10, d7730 as c15, d7731 as c16, d7732 as c17, d7733 as c18, d7734 as c19, d7735 as c20, d7736 as c21, d7737 as c22, d7738 as c23, d7739 as c24, d7740 as c25, d7741 as c26, d7742 as c27, d7743 as c28, d7744 as c29, d7745 as c30, d7746 as c31 } from '../descriptors/data/371.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7747 as c32, d7748 as c33, d7749 as c34, d7750 as c35 } from '../descriptors/data/372.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6898 as c36 } from '../descriptors/data/324.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1092 as d1092 } from '../descriptors/data/54.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1092;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1073"]:c9(),["SharedCodec1074"]:c10(),["SharedCodec1228"]:c11(),["SharedCodec1229"]:c12(),["SharedCodec1230"]:c13(),["SharedCodec1231"]:c14(),["SharedCodec1239"]:c15(),["SharedCodec1240"]:c16(),["SharedCodec1241"]:c17(),["SharedCodec1242"]:c18(),["SharedCodec1243"]:c19(),["SharedCodec1244"]:c20(),["SharedCodec1245"]:c21(),["SharedCodec1246"]:c22(),["SharedCodec1247"]:c23(),["SharedCodec1248"]:c24(),["SharedCodec1249"]:c25(),["SharedCodec1250"]:c26(),["SharedCodec1251"]:c27(),["SharedCodec1252"]:c28(),["SharedCodec1253"]:c29(),["SharedCodec1254"]:c30(),["SharedCodec1255"]:c31(),["SharedCodec1256"]:c32(),["SharedCodec1257"]:c33(),["SharedCodec1258"]:c34(),["SharedCodec1259"]:c35(),["SharedCodec136"]:c36(),["SharedCodec178"]:c37(),["SharedCodec180"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
