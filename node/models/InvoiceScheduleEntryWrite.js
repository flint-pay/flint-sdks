import { d1723 as c0, d1726 as c1, d1736 as c2, d77 as c3, d1719 as c4, d1720 as c5, d1722 as c6, d1721 as c7, d1724 as c8, d1725 as c9, d1730 as c10, d1728 as c11, d1729 as c12, d1732 as c13, d1731 as c14, d1735 as c15, d1733 as c16, d1734 as c17 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1736 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1736;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec466"]:c4(),["SharedCodec467"]:c5(),["SharedCodec468"]:c6(),["SharedCodec469"]:c7(),["SharedCodec470"]:c8(),["SharedCodec471"]:c9(),["SharedCodec472"]:c10(),["SharedCodec473"]:c11(),["SharedCodec474"]:c12(),["SharedCodec475"]:c13(),["SharedCodec476"]:c14(),["SharedCodec477"]:c15(),["SharedCodec478"]:c16(),["SharedCodec479"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
