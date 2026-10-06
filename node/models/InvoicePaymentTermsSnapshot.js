import { d1669 as c0, d1687 as c1, d1690 as c2, d77 as c3, d1667 as c4, d1668 as c5, d1679 as c6, d1678 as c7, d1680 as c8, d1681 as c9, d1682 as c10, d1683 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1690 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["InvoicePaymentTermsSnapshot"]:c2(),["MoneyValue"]:c3(),["SharedCodec454"]:c4(),["SharedCodec455"]:c5(),["SharedCodec457"]:c6(),["SharedCodec458"]:c7(),["SharedCodec459"]:c8(),["SharedCodec460"]:c9(),["SharedCodec461"]:c10(),["SharedCodec462"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermsSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
