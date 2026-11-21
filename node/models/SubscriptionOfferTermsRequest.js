import { d11008 as c0 } from '../descriptors/data/524.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7611 as c1 } from '../descriptors/data/318.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7611 as d7611 } from '../descriptors/data/318.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7611;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionOfferLineItemRequest"]:c0(),["SubscriptionOfferTermsRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOfferTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
