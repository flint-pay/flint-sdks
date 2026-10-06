import { d1698 as c0, d1701 as c1, d1711 as c2, d77 as c3, d1694 as c4, d1695 as c5, d1697 as c6, d1696 as c7, d1699 as c8, d1700 as c9, d1705 as c10, d1703 as c11, d1704 as c12, d1707 as c13, d1706 as c14, d1710 as c15, d1708 as c16, d1709 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1711 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec464"]:c4(),["SharedCodec465"]:c5(),["SharedCodec466"]:c6(),["SharedCodec467"]:c7(),["SharedCodec468"]:c8(),["SharedCodec469"]:c9(),["SharedCodec470"]:c10(),["SharedCodec471"]:c11(),["SharedCodec472"]:c12(),["SharedCodec473"]:c13(),["SharedCodec474"]:c14(),["SharedCodec475"]:c15(),["SharedCodec476"]:c16(),["SharedCodec477"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
