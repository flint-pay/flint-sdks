import { d732 as c0 } from '../descriptors/data/31.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3359 as c1 } from '../descriptors/data/135.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d732 as d732 } from '../descriptors/data/31.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputPaymentTerms"]:c0(),["SharedCodec903"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputPaymentTerms(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
