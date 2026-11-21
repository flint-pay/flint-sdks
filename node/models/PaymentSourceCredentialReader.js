import { d1543 as c0 } from '../descriptors/data/78.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10019 as c1 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1543 as d1543 } from '../descriptors/data/78.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredentialReader"]:c0(),["ReaderPaymentSourceTip"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredentialReader(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
