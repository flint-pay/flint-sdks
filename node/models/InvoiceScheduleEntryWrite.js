import { d1691 as c0, d1694 as c1, d1704 as c2, d74 as c3, d1687 as c4, d1688 as c5, d1690 as c6, d1689 as c7, d1692 as c8, d1693 as c9, d1698 as c10, d1696 as c11, d1697 as c12, d1700 as c13, d1699 as c14, d1703 as c15, d1701 as c16, d1702 as c17 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1704 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1704;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec458"]:c4(),["SharedCodec459"]:c5(),["SharedCodec460"]:c6(),["SharedCodec461"]:c7(),["SharedCodec462"]:c8(),["SharedCodec463"]:c9(),["SharedCodec464"]:c10(),["SharedCodec465"]:c11(),["SharedCodec466"]:c12(),["SharedCodec467"]:c13(),["SharedCodec468"]:c14(),["SharedCodec469"]:c15(),["SharedCodec470"]:c16(),["SharedCodec471"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
