import { d164 as c0, d185 as c1, d188 as c2, d191 as c3, d194 as c4, d205 as c5, d206 as c6, d394 as c7, d813 as c8, d1472 as c9, d1582 as c10, d69 as c11, d1687 as c12, d1781 as c13, d1778 as c14, d1782 as c15, d1790 as c16, d367 as c17, d366 as c18, d1469 as c19, d1470 as c20, d1471 as c21, d1784 as c22, d1783 as c23, d1786 as c24, d1785 as c25, d1787 as c26, d1894 as c27 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d394 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec134"]:c17(),["SharedCodec135"]:c18(),["SharedCodec382"]:c19(),["SharedCodec383"]:c20(),["SharedCodec384"]:c21(),["SharedCodec454"]:c22(),["SharedCodec455"]:c23(),["SharedCodec456"]:c24(),["SharedCodec457"]:c25(),["SharedCodec458"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
