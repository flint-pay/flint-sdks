import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7711 as c1, d7715 as c2 } from '../descriptors/data/370.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1093 as c3 } from '../descriptors/data/54.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7802 as c4, d7804 as c5, d7805 as c8, d7806 as c9, d7807 as c10, d7808 as c11, d7809 as c21, d7810 as c22 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7722 as c6, d7723 as c7, d7731 as c12, d7732 as c13, d7733 as c14, d7741 as c15, d7742 as c16, d7743 as c17, d7744 as c18, d7745 as c19, d7746 as c20 } from '../descriptors/data/371.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1093 as d1093 } from '../descriptors/data/54.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1093;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1073"]:c6(),["SharedCodec1074"]:c7(),["SharedCodec1228"]:c8(),["SharedCodec1229"]:c9(),["SharedCodec1230"]:c10(),["SharedCodec1231"]:c11(),["SharedCodec1240"]:c12(),["SharedCodec1241"]:c13(),["SharedCodec1242"]:c14(),["SharedCodec1250"]:c15(),["SharedCodec1251"]:c16(),["SharedCodec1252"]:c17(),["SharedCodec1253"]:c18(),["SharedCodec1254"]:c19(),["SharedCodec1255"]:c20(),["SharedCodec178"]:c21(),["SharedCodec180"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
