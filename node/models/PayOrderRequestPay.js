import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7743 as c1 } from '../descriptors/data/371.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1103 as c2 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7836 as c3, d7837 as c4, d7838 as c6, d7839 as c9, d7840 as c10, d7841 as c11 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6152 as c5 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7754 as c7, d7755 as c8, d7763 as c13, d7764 as c14, d7765 as c15, d7766 as c16, d7767 as c17, d7768 as c18, d7769 as c19, d7770 as c20, d7771 as c21 } from '../descriptors/data/372.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7842 as c12, d7843 as c23, d7844 as c24 } from '../descriptors/data/376.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c22 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1103 as d1103 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1103;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1080"]:c7(),["SharedCodec1081"]:c8(),["SharedCodec1235"]:c9(),["SharedCodec1236"]:c10(),["SharedCodec1237"]:c11(),["SharedCodec1238"]:c12(),["SharedCodec1247"]:c13(),["SharedCodec1248"]:c14(),["SharedCodec1249"]:c15(),["SharedCodec1250"]:c16(),["SharedCodec1251"]:c17(),["SharedCodec1252"]:c18(),["SharedCodec1253"]:c19(),["SharedCodec1254"]:c20(),["SharedCodec1255"]:c21(),["SharedCodec136"]:c22(),["SharedCodec178"]:c23(),["SharedCodec180"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
