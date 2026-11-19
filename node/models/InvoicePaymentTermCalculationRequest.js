import { d9273 as c0 } from '../descriptors/data/420.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8328 as c1, d8329 as c2 } from '../descriptors/data/367.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8330 as c3, d8331 as c4, d8332 as c5, d8333 as c6, d8334 as c7, d8335 as c8, d8336 as c9, d8337 as c10, d8338 as c11 } from '../descriptors/data/368.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9273 as d9273 } from '../descriptors/data/420.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9273;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1635"]:c1(),["SharedCodec1636"]:c2(),["SharedCodec1637"]:c3(),["SharedCodec1638"]:c4(),["SharedCodec1639"]:c5(),["SharedCodec1640"]:c6(),["SharedCodec1641"]:c7(),["SharedCodec1642"]:c8(),["SharedCodec1643"]:c9(),["SharedCodec1644"]:c10(),["SharedCodec1645"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
