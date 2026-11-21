import { d1112 as c0 } from '../descriptors/data/56.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8346 as c1 } from '../descriptors/data/369.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1112 as d1112 } from '../descriptors/data/56.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1112;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationDaysAfterMonthEndRequest"]:c0(),["SharedCodec1646"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationDaysAfterMonthEndRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
