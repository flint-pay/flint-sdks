import { d8272 as c0, d8271 as c1 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8271 as d8271 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PlatformFeeMoney"]:c0(),["PlatformFeeRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePlatformFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
