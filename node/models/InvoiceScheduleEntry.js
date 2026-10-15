import { d1724 as c0, d1725 as c1, d1729 as c2, d323 as c3, d1720 as c4, d1721 as c5, d1723 as c6, d1722 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1729 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1729;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntry"]:c2(),["MoneyValue"]:c3(),["SharedCodec448"]:c4(),["SharedCodec449"]:c5(),["SharedCodec450"]:c6(),["SharedCodec451"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
