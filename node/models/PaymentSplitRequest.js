import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10018 as c1 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9042 as c2 } from '../descriptors/data/409.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10018 as d10018 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10018;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PaymentSplitRequest"]:c1(),["SharedCodec217"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSplitRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
