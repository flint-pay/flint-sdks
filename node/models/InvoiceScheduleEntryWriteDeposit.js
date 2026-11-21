import { d9306 as c0, d9307 as c1 } from '../descriptors/data/422.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1152 as c2 } from '../descriptors/data/58.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c3 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8379 as c4, d8380 as c5, d8381 as c6, d8382 as c7, d8383 as c8, d8384 as c9, d8385 as c10 } from '../descriptors/data/371.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9326 as c11, d9327 as c12, d9328 as c13, d9329 as c14, d9330 as c15, d9332 as c16, d9333 as c17, d9334 as c18, d9335 as c19 } from '../descriptors/data/423.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9336 as c20 } from '../descriptors/data/424.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1152 as d1152 } from '../descriptors/data/58.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1152;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteDeposit"]:c2(),["MoneyValue"]:c3(),["SharedCodec1671"]:c4(),["SharedCodec1672"]:c5(),["SharedCodec1673"]:c6(),["SharedCodec1674"]:c7(),["SharedCodec1675"]:c8(),["SharedCodec1676"]:c9(),["SharedCodec1677"]:c10(),["SharedCodec1692"]:c11(),["SharedCodec1693"]:c12(),["SharedCodec1694"]:c13(),["SharedCodec1695"]:c14(),["SharedCodec1696"]:c15(),["SharedCodec1702"]:c16(),["SharedCodec1703"]:c17(),["SharedCodec1704"]:c18(),["SharedCodec1705"]:c19(),["SharedCodec1706"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteDeposit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
