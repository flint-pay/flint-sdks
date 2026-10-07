import { d1718 as c0, d1721 as c1, d77 as c2, d1830 as c3, d1829 as c4, d2164 as c5, d2165 as c6, d14 as c7, d1699 as c8, d1700 as c9, d1716 as c10, d1711 as c11, d1710 as c12, d1712 as c13, d1713 as c14, d1714 as c15, d1715 as c16, d1717 as c17, d1828 as c18 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1721 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1721;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["InvoicePaymentTermResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec461"]:c8(),["SharedCodec462"]:c9(),["SharedCodec463"]:c10(),["SharedCodec464"]:c11(),["SharedCodec465"]:c12(),["SharedCodec466"]:c13(),["SharedCodec467"]:c14(),["SharedCodec468"]:c15(),["SharedCodec469"]:c16(),["SharedCodec470"]:c17(),["SharedCodec492"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
