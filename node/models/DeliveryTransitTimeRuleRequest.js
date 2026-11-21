import { d8591 as c0 } from '../descriptors/data/382.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8613 as c1 } from '../descriptors/data/383.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8613 as d8613 } from '../descriptors/data/383.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8613;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBusinessDayRangeRequest"]:c0(),["DeliveryTransitTimeRuleRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTransitTimeRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
