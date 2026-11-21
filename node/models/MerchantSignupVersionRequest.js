import { d1257 as c0 } from '../descriptors/data/62.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1257 as d1257 } from '../descriptors/data/62.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSignupVersionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantSignupVersionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
