import { d1723 as c0, d77 as c1, d1719 as c2, d1720 as c3, d1722 as c4, d1721 as c5 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1723 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1723;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["MoneyValue"]:c1(),["SharedCodec466"]:c2(),["SharedCodec467"]:c3(),["SharedCodec468"]:c4(),["SharedCodec469"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecification(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
