import { d5082 as c0, d5087 as c1, d5088 as c2 } from '../descriptors/data/233.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5082 as d5082 } from '../descriptors/data/233.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5082;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLimitSettingsPatch"]:c0(),["SharedCodec1001"]:c1(),["SharedCodec1002"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLimitSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
