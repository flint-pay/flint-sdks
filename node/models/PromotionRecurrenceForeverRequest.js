import { d1672 as c0 } from '../descriptors/data/83.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9700 as c1 } from '../descriptors/data/448.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1672 as d1672 } from '../descriptors/data/83.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1672;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceForeverRequest"]:c0(),["SharedCodec2438"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceForeverRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
