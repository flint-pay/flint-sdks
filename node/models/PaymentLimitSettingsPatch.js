import { d1135 as c0 } from '../descriptors/data/55.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8625 as c1, d8626 as c2 } from '../descriptors/data/424.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1135 as d1135 } from '../descriptors/data/55.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLimitSettingsPatch"]:c0(),["SharedCodec1184"]:c1(),["SharedCodec1185"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLimitSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
