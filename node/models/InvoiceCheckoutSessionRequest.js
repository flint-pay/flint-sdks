import { d3232 as c0, d3239 as c2, d3240 as c3, d3241 as c4 } from '../descriptors/data/129.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d712 as c1 } from '../descriptors/data/30.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d712 as d712 } from '../descriptors/data/30.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["InvoiceCheckoutSessionRequest"]:c1(),["SharedCodec63"]:c2(),["SharedCodec64"]:c3(),["SharedCodec65"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
