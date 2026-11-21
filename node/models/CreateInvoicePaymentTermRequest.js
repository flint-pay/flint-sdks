import { d317 as c0 } from '../descriptors/data/16.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9285 as c1, d9287 as c2 } from '../descriptors/data/421.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c3 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8336 as c4, d8337 as c5, d8338 as c6, d8339 as c7, d8340 as c8, d8341 as c9, d8342 as c10, d8343 as c11, d8344 as c12, d8345 as c13, d8346 as c14, d8347 as c15, d8348 as c16, d8349 as c17, d8350 as c18 } from '../descriptors/data/369.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d317 as d317 } from '../descriptors/data/16.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec120"]:c4(),["SharedCodec121"]:c5(),["SharedCodec122"]:c6(),["SharedCodec123"]:c7(),["SharedCodec1640"]:c8(),["SharedCodec1641"]:c9(),["SharedCodec1642"]:c10(),["SharedCodec1643"]:c11(),["SharedCodec1644"]:c12(),["SharedCodec1645"]:c13(),["SharedCodec1646"]:c14(),["SharedCodec1647"]:c15(),["SharedCodec1648"]:c16(),["SharedCodec1649"]:c17(),["SharedCodec1650"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
