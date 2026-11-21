import { d9306 as c0, d9307 as c1, d9308 as c2 } from '../descriptors/data/422.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c3 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8379 as c4, d8380 as c5, d8381 as c6, d8382 as c7, d8383 as c8, d8384 as c9, d8385 as c10 } from '../descriptors/data/371.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9326 as c11, d9327 as c12, d9328 as c13, d9329 as c14, d9330 as c15, d9331 as c16, d9332 as c17, d9333 as c18, d9334 as c19, d9335 as c20 } from '../descriptors/data/423.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9336 as c21, d9337 as c22, d9338 as c23, d9339 as c24, d9340 as c25, d9341 as c26, d9342 as c27, d9343 as c28 } from '../descriptors/data/424.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9308 as d9308 } from '../descriptors/data/422.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec1671"]:c4(),["SharedCodec1672"]:c5(),["SharedCodec1673"]:c6(),["SharedCodec1674"]:c7(),["SharedCodec1675"]:c8(),["SharedCodec1676"]:c9(),["SharedCodec1677"]:c10(),["SharedCodec1692"]:c11(),["SharedCodec1693"]:c12(),["SharedCodec1694"]:c13(),["SharedCodec1695"]:c14(),["SharedCodec1696"]:c15(),["SharedCodec1701"]:c16(),["SharedCodec1702"]:c17(),["SharedCodec1703"]:c18(),["SharedCodec1704"]:c19(),["SharedCodec1705"]:c20(),["SharedCodec1706"]:c21(),["SharedCodec1707"]:c22(),["SharedCodec1708"]:c23(),["SharedCodec1709"]:c24(),["SharedCodec1710"]:c25(),["SharedCodec1711"]:c26(),["SharedCodec1712"]:c27(),["SharedCodec1713"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
