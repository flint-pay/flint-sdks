import { d4653 as c0 } from '../descriptors/data/207.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4653 as d4653 } from '../descriptors/data/207.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4653;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkCustomTextConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkCustomTextConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
