import { d9306 as c0 } from '../descriptors/data/422.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8379 as c2, d8380 as c3, d8381 as c4, d8382 as c5, d8383 as c6, d8384 as c7, d8385 as c8 } from '../descriptors/data/371.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9306 as d9306 } from '../descriptors/data/422.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1671"]:c2(),["SharedCodec1672"]:c3(),["SharedCodec1673"]:c4(),["SharedCodec1674"]:c5(),["SharedCodec1675"]:c6(),["SharedCodec1676"]:c7(),["SharedCodec1677"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
