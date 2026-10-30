import { d833 as c0 } from '../descriptors/data/39.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4715 as c1 } from '../descriptors/data/206.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d833 as d833 } from '../descriptors/data/39.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d833;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationNetDays"]:c0(),["SharedCodec792"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationNetDays(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
