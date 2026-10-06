import { d1686 as c0, d77 as c1, d1667 as c2, d1668 as c3, d1684 as c4, d1679 as c5, d1678 as c6, d1680 as c7, d1681 as c8, d1682 as c9, d1683 as c10, d1685 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1686 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1686;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["MoneyValue"]:c1(),["SharedCodec454"]:c2(),["SharedCodec455"]:c3(),["SharedCodec456"]:c4(),["SharedCodec457"]:c5(),["SharedCodec458"]:c6(),["SharedCodec459"]:c7(),["SharedCodec460"]:c8(),["SharedCodec461"]:c9(),["SharedCodec462"]:c10(),["SharedCodec463"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTerm(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
