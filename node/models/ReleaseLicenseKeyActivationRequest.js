import { d1741 as c0 } from '../descriptors/data/86.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1741 as d1741 } from '../descriptors/data/86.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1741;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseLicenseKeyActivationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseLicenseKeyActivationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
