import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7711 as c1 } from '../descriptors/data/370.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1094 as c2 } from '../descriptors/data/54.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7802 as c3, d7803 as c4, d7804 as c6, d7805 as c9, d7806 as c10, d7807 as c11, d7808 as c12, d7809 as c23, d7810 as c24 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6122 as c5 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7722 as c7, d7723 as c8, d7731 as c13, d7732 as c14, d7733 as c15, d7734 as c16, d7735 as c17, d7736 as c18, d7737 as c19, d7738 as c20, d7739 as c21 } from '../descriptors/data/371.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6898 as c22 } from '../descriptors/data/324.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1094 as d1094 } from '../descriptors/data/54.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1094;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1073"]:c7(),["SharedCodec1074"]:c8(),["SharedCodec1228"]:c9(),["SharedCodec1229"]:c10(),["SharedCodec1230"]:c11(),["SharedCodec1231"]:c12(),["SharedCodec1240"]:c13(),["SharedCodec1241"]:c14(),["SharedCodec1242"]:c15(),["SharedCodec1243"]:c16(),["SharedCodec1244"]:c17(),["SharedCodec1245"]:c18(),["SharedCodec1246"]:c19(),["SharedCodec1247"]:c20(),["SharedCodec1248"]:c21(),["SharedCodec136"]:c22(),["SharedCodec178"]:c23(),["SharedCodec180"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
