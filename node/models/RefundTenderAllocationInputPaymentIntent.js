import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1734 as c1 } from '../descriptors/data/85.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9042 as c2 } from '../descriptors/data/409.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10507 as c3 } from '../descriptors/data/493.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1734 as d1734 } from '../descriptors/data/85.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundTenderAllocationInputPaymentIntent"]:c1(),["SharedCodec217"]:c2(),["SharedCodec2573"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocationInputPaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
