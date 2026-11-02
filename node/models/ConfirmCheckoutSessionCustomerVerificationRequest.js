import { d148 as c0 } from '../descriptors/data/6.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d148 as d148 } from '../descriptors/data/6.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmCheckoutSessionCustomerVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
