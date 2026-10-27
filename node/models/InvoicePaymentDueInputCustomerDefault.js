import { d731 as c0 } from '../descriptors/data/31.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3369 as c1 } from '../descriptors/data/136.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4181 as c2 } from '../descriptors/data/178.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d731 as d731 } from '../descriptors/data/31.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d731;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputCustomerDefault"]:c0(),["SharedCodec904"]:c1(),["SharedCodec909"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputCustomerDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
