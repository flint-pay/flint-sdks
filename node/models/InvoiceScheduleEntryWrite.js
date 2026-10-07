import { d1730 as c0, d1733 as c1, d1743 as c2, d77 as c3, d1726 as c4, d1727 as c5, d1729 as c6, d1728 as c7, d1731 as c8, d1732 as c9, d1737 as c10, d1735 as c11, d1736 as c12, d1739 as c13, d1738 as c14, d1742 as c15, d1740 as c16, d1741 as c17 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1743 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec471"]:c4(),["SharedCodec472"]:c5(),["SharedCodec473"]:c6(),["SharedCodec474"]:c7(),["SharedCodec475"]:c8(),["SharedCodec476"]:c9(),["SharedCodec477"]:c10(),["SharedCodec478"]:c11(),["SharedCodec479"]:c12(),["SharedCodec480"]:c13(),["SharedCodec481"]:c14(),["SharedCodec482"]:c15(),["SharedCodec483"]:c16(),["SharedCodec484"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
