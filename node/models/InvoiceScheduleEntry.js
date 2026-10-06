import { d1723 as c0, d1726 as c1, d1727 as c2, d77 as c3, d1719 as c4, d1720 as c5, d1722 as c6, d1721 as c7, d1724 as c8, d1725 as c9, d41 as c10 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1727 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1727;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntry"]:c2(),["MoneyValue"]:c3(),["SharedCodec466"]:c4(),["SharedCodec467"]:c5(),["SharedCodec468"]:c6(),["SharedCodec469"]:c7(),["SharedCodec470"]:c8(),["SharedCodec471"]:c9(),["SharedCodec6"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
