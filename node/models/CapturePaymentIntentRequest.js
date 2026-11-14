import { d138 as c0 } from '../descriptors/data/6.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7913 as c1 } from '../descriptors/data/380.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c2 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6122 as c3 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6898 as c4 } from '../descriptors/data/324.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d138 as d138 } from '../descriptors/data/6.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d138;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentIntentRequest"]:c0(),["CapturePaymentSplitRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeRequest"]:c3(),["SharedCodec136"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
