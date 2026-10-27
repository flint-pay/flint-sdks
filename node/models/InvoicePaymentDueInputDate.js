import { d732 as c0 } from '../descriptors/data/31.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3371 as c1 } from '../descriptors/data/136.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d732 as d732 } from '../descriptors/data/31.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputDate"]:c0(),["SharedCodec906"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputDate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
