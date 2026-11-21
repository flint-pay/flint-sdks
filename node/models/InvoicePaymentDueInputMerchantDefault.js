import { d1094 as c0 } from '../descriptors/data/55.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8365 as c1 } from '../descriptors/data/370.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9320 as c2 } from '../descriptors/data/423.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1094 as d1094 } from '../descriptors/data/55.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1094;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputMerchantDefault"]:c0(),["SharedCodec1617"]:c1(),["SharedCodec1625"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputMerchantDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
