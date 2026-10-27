import { d4539 as c0, d4540 as c1 } from '../descriptors/data/200.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4539 as d4539 } from '../descriptors/data/200.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4539;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["SharedCodec1009"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
