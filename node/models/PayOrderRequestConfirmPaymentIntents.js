import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7743 as c1, d7747 as c2 } from '../descriptors/data/371.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1102 as c3 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7836 as c4, d7838 as c5, d7839 as c8, d7840 as c9, d7841 as c10 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7754 as c6, d7755 as c7, d7763 as c12, d7764 as c13, d7765 as c14 } from '../descriptors/data/372.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7842 as c11, d7843 as c21, d7844 as c22 } from '../descriptors/data/376.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7773 as c15, d7774 as c16, d7775 as c17, d7776 as c18, d7777 as c19, d7778 as c20 } from '../descriptors/data/373.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1102 as d1102 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1080"]:c6(),["SharedCodec1081"]:c7(),["SharedCodec1235"]:c8(),["SharedCodec1236"]:c9(),["SharedCodec1237"]:c10(),["SharedCodec1238"]:c11(),["SharedCodec1247"]:c12(),["SharedCodec1248"]:c13(),["SharedCodec1249"]:c14(),["SharedCodec1257"]:c15(),["SharedCodec1258"]:c16(),["SharedCodec1259"]:c17(),["SharedCodec1260"]:c18(),["SharedCodec1261"]:c19(),["SharedCodec1262"]:c20(),["SharedCodec178"]:c21(),["SharedCodec180"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
