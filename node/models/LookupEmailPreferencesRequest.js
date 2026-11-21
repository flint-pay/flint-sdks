import { d1222 as c0 } from '../descriptors/data/60.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1222 as d1222 } from '../descriptors/data/60.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LookupEmailPreferencesRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLookupEmailPreferencesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
