import { d8057 as c0 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8155 as c1 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10047 as c2, d10048 as c3, d10049 as c4, d10050 as c5 } from '../descriptors/data/466.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7785 as c6 } from '../descriptors/data/328.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7785 as d7785 } from '../descriptors/data/328.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7785;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3081"]:c0(),["SharedCodec3084"]:c1(),["SharedCodec3150"]:c2(),["SharedCodec3151"]:c3(),["SharedCodec3152"]:c4(),["SharedCodec3153"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
