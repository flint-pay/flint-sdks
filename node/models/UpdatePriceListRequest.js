import { d8057 as c0 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8155 as c1 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10360 as c2 } from '../descriptors/data/485.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7794 as c3 } from '../descriptors/data/329.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7794 as d7794 } from '../descriptors/data/329.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7794;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3081"]:c0(),["SharedCodec3084"]:c1(),["SharedCodec3176"]:c2(),["UpdatePriceListRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePriceListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
