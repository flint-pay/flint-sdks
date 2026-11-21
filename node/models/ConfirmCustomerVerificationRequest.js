import { d230 as c0 } from '../descriptors/data/10.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d230 as d230 } from '../descriptors/data/10.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmCustomerVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
