import { d191 as c0 } from '../descriptors/data/8.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7836 as c1, d7838 as c2, d7839 as c3, d7840 as c4, d7841 as c5 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7842 as c6, d7843 as c11, d7844 as c13 } from '../descriptors/data/376.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7963 as c7, d7964 as c8, d7965 as c9, d7966 as c10, d7967 as c12 } from '../descriptors/data/383.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d191 as d191 } from '../descriptors/data/8.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d191;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec1235"]:c3(),["SharedCodec1236"]:c4(),["SharedCodec1237"]:c5(),["SharedCodec1238"]:c6(),["SharedCodec174"]:c7(),["SharedCodec175"]:c8(),["SharedCodec176"]:c9(),["SharedCodec177"]:c10(),["SharedCodec178"]:c11(),["SharedCodec179"]:c12(),["SharedCodec180"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
