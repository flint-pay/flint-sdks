import { d1686 as c0, d1688 as c1, d77 as c2, d1797 as c3, d1796 as c4, d2131 as c5, d2132 as c6, d14 as c7, d1667 as c8, d1668 as c9, d1684 as c10, d1679 as c11, d1678 as c12, d1680 as c13, d1681 as c14, d1682 as c15, d1683 as c16, d1685 as c17, d1795 as c18 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1688 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1688;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["InvoicePaymentTermListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec454"]:c8(),["SharedCodec455"]:c9(),["SharedCodec456"]:c10(),["SharedCodec457"]:c11(),["SharedCodec458"]:c12(),["SharedCodec459"]:c13(),["SharedCodec460"]:c14(),["SharedCodec461"]:c15(),["SharedCodec462"]:c16(),["SharedCodec463"]:c17(),["SharedCodec485"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
