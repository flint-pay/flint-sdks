import { d4584 as c0 } from '../descriptors/data/197.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d756 as c1 } from '../descriptors/data/37.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4590 as c2, d4591 as c3, d4592 as c4 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d756 as d756 } from '../descriptors/data/37.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d756;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["InvoiceCheckoutSessionRequest"]:c1(),["SharedCodec136"]:c2(),["SharedCodec137"]:c3(),["SharedCodec138"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
