import { d1084 as c0 } from '../descriptors/data/52.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6018 as c1, d6019 as c2, d6020 as c3 } from '../descriptors/data/277.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1084 as d1084 } from '../descriptors/data/52.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1084;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["SharedCodec1024"]:c1(),["SharedCodec1025"]:c2(),["SharedCodec1026"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
