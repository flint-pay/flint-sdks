import { d831 as c0 } from '../descriptors/data/39.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4721 as c1 } from '../descriptors/data/206.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d831 as d831 } from '../descriptors/data/39.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d831;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationDayOfNextMonth"]:c0(),["SharedCodec798"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationDayOfNextMonth(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
