import { d4432 as c0, d4439 as c1 } from '../descriptors/data/189.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4646 as c2, d4647 as c3 } from '../descriptors/data/200.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4399 as c4 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4511 as c5 } from '../descriptors/data/193.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4145 as c6 } from '../descriptors/data/171.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4145 as d4145 } from '../descriptors/data/171.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["CheckoutSubscriptionTermsRequest"]:c1(),["SharedCodec101"]:c2(),["SharedCodec102"]:c3(),["SharedCodec1350"]:c4(),["SharedCodec1353"]:c5(),["UpdateCheckoutSessionRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
