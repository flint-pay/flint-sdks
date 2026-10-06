import { d1687 as c0, d1679 as c1, d1678 as c2, d1680 as c3, d1681 as c4, d1682 as c5, d1683 as c6 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1687 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec457"]:c1(),["SharedCodec458"]:c2(),["SharedCodec459"]:c3(),["SharedCodec460"]:c4(),["SharedCodec461"]:c5(),["SharedCodec462"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
