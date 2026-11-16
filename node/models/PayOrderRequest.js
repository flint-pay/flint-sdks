import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7743 as c1, d7747 as c2 } from '../descriptors/data/371.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1101 as c3 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7836 as c4, d7837 as c6, d7838 as c8, d7839 as c11, d7840 as c12, d7841 as c13 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7750 as c5, d7754 as c9, d7755 as c10, d7762 as c15, d7763 as c16, d7764 as c17, d7765 as c18, d7766 as c19, d7767 as c20, d7768 as c21, d7769 as c22, d7770 as c23, d7771 as c24, d7772 as c25 } from '../descriptors/data/372.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6152 as c7 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7842 as c14, d7843 as c37, d7844 as c38 } from '../descriptors/data/376.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7773 as c26, d7774 as c27, d7775 as c28, d7776 as c29, d7777 as c30, d7778 as c31, d7779 as c32, d7780 as c33, d7781 as c34, d7782 as c35 } from '../descriptors/data/373.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c36 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1101 as d1101 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1080"]:c9(),["SharedCodec1081"]:c10(),["SharedCodec1235"]:c11(),["SharedCodec1236"]:c12(),["SharedCodec1237"]:c13(),["SharedCodec1238"]:c14(),["SharedCodec1246"]:c15(),["SharedCodec1247"]:c16(),["SharedCodec1248"]:c17(),["SharedCodec1249"]:c18(),["SharedCodec1250"]:c19(),["SharedCodec1251"]:c20(),["SharedCodec1252"]:c21(),["SharedCodec1253"]:c22(),["SharedCodec1254"]:c23(),["SharedCodec1255"]:c24(),["SharedCodec1256"]:c25(),["SharedCodec1257"]:c26(),["SharedCodec1258"]:c27(),["SharedCodec1259"]:c28(),["SharedCodec1260"]:c29(),["SharedCodec1261"]:c30(),["SharedCodec1262"]:c31(),["SharedCodec1263"]:c32(),["SharedCodec1264"]:c33(),["SharedCodec1265"]:c34(),["SharedCodec1266"]:c35(),["SharedCodec136"]:c36(),["SharedCodec178"]:c37(),["SharedCodec180"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
