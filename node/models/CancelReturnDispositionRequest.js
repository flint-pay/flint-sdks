import { d149 as c0 } from '../descriptors/data/7.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d149 as d149 } from '../descriptors/data/7.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
