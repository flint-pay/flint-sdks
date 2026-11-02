import { d4584 as c0 } from '../descriptors/data/197.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d756 as c1 } from '../descriptors/data/37.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4590 as c2, d4591 as c3, d4592 as c4 } from '../descriptors/data/198.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d756 as d756 } from '../descriptors/data/37.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d756;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["InvoiceCheckoutSessionRequest"]:c1(),["SharedCodec136"]:c2(),["SharedCodec137"]:c3(),["SharedCodec138"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
