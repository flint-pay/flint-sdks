import { d188 as c0 } from '../descriptors/data/8.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7802 as c1, d7804 as c2, d7805 as c3, d7806 as c4, d7807 as c5, d7808 as c6, d7809 as c11, d7810 as c13 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7929 as c7, d7930 as c8, d7931 as c9 } from '../descriptors/data/381.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7932 as c10, d7933 as c12 } from '../descriptors/data/382.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d188 as d188 } from '../descriptors/data/8.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d188;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec1228"]:c3(),["SharedCodec1229"]:c4(),["SharedCodec1230"]:c5(),["SharedCodec1231"]:c6(),["SharedCodec174"]:c7(),["SharedCodec175"]:c8(),["SharedCodec176"]:c9(),["SharedCodec177"]:c10(),["SharedCodec178"]:c11(),["SharedCodec179"]:c12(),["SharedCodec180"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
