import { d417 as c0 } from '../descriptors/data/25.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10946 as c2 } from '../descriptors/data/520.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d417 as d417 } from '../descriptors/data/25.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d417;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionOfferRequest"]:c0(),["MetadataRequest"]:c1(),["SubscriptionIntervalOptionRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
