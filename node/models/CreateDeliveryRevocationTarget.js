import { d8815 as c0 } from '../descriptors/data/394.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8822 as c1, d8823 as c2, d8824 as c3, d8825 as c4 } from '../descriptors/data/395.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8815 as d8815 } from '../descriptors/data/394.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationTarget"]:c0(),["SharedCodec414"]:c1(),["SharedCodec415"]:c2(),["SharedCodec416"]:c3(),["SharedCodec417"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
