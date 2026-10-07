import { d1718 as c0, d77 as c1, d1699 as c2, d1700 as c3, d1716 as c4, d1711 as c5, d1710 as c6, d1712 as c7, d1713 as c8, d1714 as c9, d1715 as c10, d1717 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1718 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1718;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["MoneyValue"]:c1(),["SharedCodec461"]:c2(),["SharedCodec462"]:c3(),["SharedCodec463"]:c4(),["SharedCodec464"]:c5(),["SharedCodec465"]:c6(),["SharedCodec466"]:c7(),["SharedCodec467"]:c8(),["SharedCodec468"]:c9(),["SharedCodec469"]:c10(),["SharedCodec470"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTerm(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
