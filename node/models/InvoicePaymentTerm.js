import { d1711 as c0, d77 as c1, d1692 as c2, d1693 as c3, d1709 as c4, d1704 as c5, d1703 as c6, d1705 as c7, d1706 as c8, d1707 as c9, d1708 as c10, d1710 as c11 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1711 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["MoneyValue"]:c1(),["SharedCodec456"]:c2(),["SharedCodec457"]:c3(),["SharedCodec458"]:c4(),["SharedCodec459"]:c5(),["SharedCodec460"]:c6(),["SharedCodec461"]:c7(),["SharedCodec462"]:c8(),["SharedCodec463"]:c9(),["SharedCodec464"]:c10(),["SharedCodec465"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTerm(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
