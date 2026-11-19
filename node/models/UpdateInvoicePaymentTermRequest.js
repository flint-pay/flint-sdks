import { d9273 as c0, d9274 as c17, d9275 as c18 } from '../descriptors/data/420.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c1 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8324 as c2, d8325 as c3, d8326 as c4, d8327 as c5, d8328 as c6, d8329 as c7 } from '../descriptors/data/367.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8330 as c8, d8331 as c9, d8332 as c10, d8333 as c11, d8334 as c12, d8335 as c13, d8336 as c14, d8337 as c15, d8338 as c16 } from '../descriptors/data/368.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7759 as c19 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7759 as d7759 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7759;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec119"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5(),["SharedCodec1635"]:c6(),["SharedCodec1636"]:c7(),["SharedCodec1637"]:c8(),["SharedCodec1638"]:c9(),["SharedCodec1639"]:c10(),["SharedCodec1640"]:c11(),["SharedCodec1641"]:c12(),["SharedCodec1642"]:c13(),["SharedCodec1643"]:c14(),["SharedCodec1644"]:c15(),["SharedCodec1645"]:c16(),["SharedCodec3103"]:c17(),["SharedCodec3104"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
