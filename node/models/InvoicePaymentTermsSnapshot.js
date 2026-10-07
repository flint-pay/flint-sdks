import { d1701 as c0, d1719 as c1, d1722 as c2, d77 as c3, d1699 as c4, d1700 as c5, d1711 as c6, d1710 as c7, d1712 as c8, d1713 as c9, d1714 as c10, d1715 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1722 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1722;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["InvoicePaymentTermsSnapshot"]:c2(),["MoneyValue"]:c3(),["SharedCodec461"]:c4(),["SharedCodec462"]:c5(),["SharedCodec464"]:c6(),["SharedCodec465"]:c7(),["SharedCodec466"]:c8(),["SharedCodec467"]:c9(),["SharedCodec468"]:c10(),["SharedCodec469"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermsSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
