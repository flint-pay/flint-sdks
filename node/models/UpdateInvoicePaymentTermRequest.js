import { d1701 as c0, d1719 as c1, d77 as c2, d1699 as c3, d1700 as c4, d1711 as c5, d1710 as c6, d1712 as c7, d1713 as c8, d1714 as c9, d1715 as c10, d2454 as c11, d2455 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2455 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2455;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec461"]:c3(),["SharedCodec462"]:c4(),["SharedCodec464"]:c5(),["SharedCodec465"]:c6(),["SharedCodec466"]:c7(),["SharedCodec467"]:c8(),["SharedCodec468"]:c9(),["SharedCodec469"]:c10(),["SharedCodec655"]:c11(),["UpdateInvoicePaymentTermRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
