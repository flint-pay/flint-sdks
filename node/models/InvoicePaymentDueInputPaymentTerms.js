import { d735 as c0 } from '../descriptors/data/31.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3373 as c1 } from '../descriptors/data/136.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d735 as d735 } from '../descriptors/data/31.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputPaymentTerms"]:c0(),["SharedCodec908"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputPaymentTerms(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
