import { d3232 as c0, d3239 as c2, d3240 as c3, d3241 as c4 } from '../descriptors/data/129.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d712 as c1 } from '../descriptors/data/30.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d712 as d712 } from '../descriptors/data/30.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["InvoiceCheckoutSessionRequest"]:c1(),["SharedCodec63"]:c2(),["SharedCodec64"]:c3(),["SharedCodec65"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
