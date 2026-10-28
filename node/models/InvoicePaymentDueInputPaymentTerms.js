import { d735 as c0 } from '../descriptors/data/31.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3373 as c1 } from '../descriptors/data/136.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d735 as d735 } from '../descriptors/data/31.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputPaymentTerms"]:c0(),["SharedCodec908"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputPaymentTerms(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
