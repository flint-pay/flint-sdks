import { d1784 as c0 } from '../descriptors/data/88.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1784 as d1784 } from '../descriptors/data/88.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1784;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RetryReturnResolutionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
