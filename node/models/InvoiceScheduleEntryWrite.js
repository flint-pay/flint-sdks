import { d1724 as c0, d1728 as c1, d1738 as c2, d323 as c3, d1720 as c4, d1721 as c5, d1723 as c6, d1722 as c7, d1726 as c8, d1727 as c9, d1732 as c10, d1730 as c11, d1731 as c12, d1734 as c13, d1733 as c14, d1737 as c15, d1735 as c16, d1736 as c17 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1738 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1738;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec448"]:c4(),["SharedCodec449"]:c5(),["SharedCodec450"]:c6(),["SharedCodec451"]:c7(),["SharedCodec452"]:c8(),["SharedCodec453"]:c9(),["SharedCodec454"]:c10(),["SharedCodec455"]:c11(),["SharedCodec456"]:c12(),["SharedCodec457"]:c13(),["SharedCodec458"]:c14(),["SharedCodec459"]:c15(),["SharedCodec460"]:c16(),["SharedCodec461"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
