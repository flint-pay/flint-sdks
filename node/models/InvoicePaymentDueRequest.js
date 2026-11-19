import { d9290 as c0 } from '../descriptors/data/421.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8352 as c1, d8353 as c2, d8355 as c3, d8357 as c4 } from '../descriptors/data/369.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9305 as c5, d9306 as c6, d9307 as c7, d9308 as c8, d9309 as c9, d9310 as c10, d9311 as c11 } from '../descriptors/data/422.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9290 as d9290 } from '../descriptors/data/421.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1611"]:c1(),["SharedCodec1612"]:c2(),["SharedCodec1614"]:c3(),["SharedCodec1616"]:c4(),["SharedCodec1619"]:c5(),["SharedCodec1620"]:c6(),["SharedCodec1627"]:c7(),["SharedCodec1628"]:c8(),["SharedCodec1629"]:c9(),["SharedCodec1630"]:c10(),["SharedCodec1631"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
