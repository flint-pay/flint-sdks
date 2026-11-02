import { d318 as c0 } from '../descriptors/data/18.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4567 as c2 } from '../descriptors/data/197.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d318 as d318 } from '../descriptors/data/18.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionOfferRequest"]:c0(),["MetadataRequest"]:c1(),["SubscriptionIntervalOption"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
