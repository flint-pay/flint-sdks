import { d316 as c0 } from '../descriptors/data/16.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9271 as c1, d9273 as c2 } from '../descriptors/data/420.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c3 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8324 as c4, d8325 as c5, d8326 as c6, d8327 as c7, d8328 as c8, d8329 as c9 } from '../descriptors/data/367.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8330 as c10, d8331 as c11, d8332 as c12, d8333 as c13, d8334 as c14, d8335 as c15, d8336 as c16, d8337 as c17, d8338 as c18 } from '../descriptors/data/368.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d316 as d316 } from '../descriptors/data/16.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d316;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec119"]:c4(),["SharedCodec120"]:c5(),["SharedCodec121"]:c6(),["SharedCodec122"]:c7(),["SharedCodec1635"]:c8(),["SharedCodec1636"]:c9(),["SharedCodec1637"]:c10(),["SharedCodec1638"]:c11(),["SharedCodec1639"]:c12(),["SharedCodec1640"]:c13(),["SharedCodec1641"]:c14(),["SharedCodec1642"]:c15(),["SharedCodec1643"]:c16(),["SharedCodec1644"]:c17(),["SharedCodec1645"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
