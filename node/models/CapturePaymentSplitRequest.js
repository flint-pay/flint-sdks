import { d7947 as c0 } from '../descriptors/data/382.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c2 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8319 as c3 } from '../descriptors/data/405.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7947 as d7947 } from '../descriptors/data/382.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7947;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentSplitRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec136"]:c2(),["SplitReversalRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentSplitRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
