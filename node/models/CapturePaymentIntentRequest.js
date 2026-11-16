import { d141 as c0 } from '../descriptors/data/6.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7947 as c1 } from '../descriptors/data/382.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6152 as c3 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c4 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d141 as d141 } from '../descriptors/data/6.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentIntentRequest"]:c0(),["CapturePaymentSplitRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeRequest"]:c3(),["SharedCodec136"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
