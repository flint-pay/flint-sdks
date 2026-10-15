import { d1690 as c0, d1706 as c1, d1713 as c2, d1715 as c3, d323 as c4, d1823 as c5, d1824 as c6, d2178 as c7, d2179 as c8, d14 as c9, d1688 as c10, d1689 as c11, d1708 as c12, d1707 as c13, d1709 as c14, d1710 as c15, d1711 as c16, d1712 as c17, d1822 as c18 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1715 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1715;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTerm"]:c1(),["InvoicePaymentTermCalculation"]:c2(),["InvoicePaymentTermResponse"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec434"]:c10(),["SharedCodec435"]:c11(),["SharedCodec442"]:c12(),["SharedCodec443"]:c13(),["SharedCodec444"]:c14(),["SharedCodec445"]:c15(),["SharedCodec446"]:c16(),["SharedCodec447"]:c17(),["SharedCodec467"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
