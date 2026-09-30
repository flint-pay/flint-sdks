import { d164 as c0, d188 as c1, d811 as c2, d1582 as c3, d69 as c4, d1687 as c5, d1779 as c6, d1782 as c7, d1788 as c8, d1892 as c9, d367 as c10, d366 as c11, d1784 as c12, d1783 as c13, d1786 as c14, d1785 as c15, d1787 as c16, d37 as c17, d1894 as c18 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1892 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1892;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PublicPaymentLink"]:c9(),["SharedCodec134"]:c10(),["SharedCodec135"]:c11(),["SharedCodec454"]:c12(),["SharedCodec455"]:c13(),["SharedCodec456"]:c14(),["SharedCodec457"]:c15(),["SharedCodec458"]:c16(),["SharedCodec5"]:c17(),["ThemeConfig"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
