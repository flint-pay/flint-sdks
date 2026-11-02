import { d170 as c0 } from '../descriptors/data/7.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4444 as c1, d4445 as c2, d4446 as c3, d4447 as c4 } from '../descriptors/data/189.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d170 as d170 } from '../descriptors/data/7.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d170;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionCustomerVerificationRequest"]:c0(),["SharedCodec132"]:c1(),["SharedCodec133"]:c2(),["SharedCodec134"]:c3(),["SharedCodec135"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
