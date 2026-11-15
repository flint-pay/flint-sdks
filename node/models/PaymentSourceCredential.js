import { d7802 as c0, d7804 as c1, d7805 as c2, d7806 as c3, d7807 as c4, d7808 as c5 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7802 as d7802 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7802;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec1228"]:c2(),["SharedCodec1229"]:c3(),["SharedCodec1230"]:c4(),["SharedCodec1231"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
