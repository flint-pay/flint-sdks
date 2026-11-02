import { d852 as c0 } from '../descriptors/data/40.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5631 as c1 } from '../descriptors/data/254.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d852 as d852 } from '../descriptors/data/40.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d852;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWriteInvoiceDueDate"]:c0(),["SharedCodec819"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWriteInvoiceDueDate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
