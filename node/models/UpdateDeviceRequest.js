import { d8058 as c0, d8059 as c1, d8057 as c2 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7760 as c3 } from '../descriptors/data/326.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7760 as d7760 } from '../descriptors/data/326.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3079"]:c0(),["SharedCodec3080"]:c1(),["SharedCodec3081"]:c2(),["UpdateDeviceRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeviceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
