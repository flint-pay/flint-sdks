import { d117 as c0 } from '../descriptors/data/4.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3130 as c1, d3131 as c2, d3132 as c3, d3133 as c4 } from '../descriptors/data/123.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d117 as d117 } from '../descriptors/data/4.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d117;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionCustomerVerificationRequest"]:c0(),["SharedCodec59"]:c1(),["SharedCodec60"]:c2(),["SharedCodec61"]:c3(),["SharedCodec62"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
