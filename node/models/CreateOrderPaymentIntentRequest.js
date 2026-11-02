import { d254 as c0 } from '../descriptors/data/14.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6013 as c3, d6014 as c4 } from '../descriptors/data/277.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d254 as d254 } from '../descriptors/data/14.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d254;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderPaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
