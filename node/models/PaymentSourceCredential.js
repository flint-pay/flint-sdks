import { d7836 as c0, d7838 as c1, d7839 as c2, d7840 as c3, d7841 as c4 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7842 as c5 } from '../descriptors/data/376.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7836 as d7836 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7836;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec1235"]:c2(),["SharedCodec1236"]:c3(),["SharedCodec1237"]:c4(),["SharedCodec1238"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
