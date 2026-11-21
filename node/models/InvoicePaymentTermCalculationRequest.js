import { d9287 as c0 } from '../descriptors/data/421.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8340 as c1, d8341 as c2, d8342 as c3, d8343 as c4, d8344 as c5, d8345 as c6, d8346 as c7, d8347 as c8, d8348 as c9, d8349 as c10, d8350 as c11 } from '../descriptors/data/369.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9287 as d9287 } from '../descriptors/data/421.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1640"]:c1(),["SharedCodec1641"]:c2(),["SharedCodec1642"]:c3(),["SharedCodec1643"]:c4(),["SharedCodec1644"]:c5(),["SharedCodec1645"]:c6(),["SharedCodec1646"]:c7(),["SharedCodec1647"]:c8(),["SharedCodec1648"]:c9(),["SharedCodec1649"]:c10(),["SharedCodec1650"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
