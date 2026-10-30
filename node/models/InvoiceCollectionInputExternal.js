import { d767 as c0 } from '../descriptors/data/37.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4759 as c1, d4760 as c2 } from '../descriptors/data/208.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c3 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4731 as c4, d4732 as c5 } from '../descriptors/data/207.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d767 as d767 } from '../descriptors/data/37.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d767;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionInputExternal"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["MoneyValue"]:c3(),["SharedCodec715"]:c4(),["SharedCodec716"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionInputExternal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
