import { d4743 as c0 } from '../descriptors/data/207.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4748 as c2, d4749 as c3, d4750 as c4, d4751 as c5, d4752 as c6, d4753 as c7, d4754 as c8 } from '../descriptors/data/208.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4743 as d4743 } from '../descriptors/data/207.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["MoneyValue"]:c1(),["SharedCodec805"]:c2(),["SharedCodec806"]:c3(),["SharedCodec807"]:c4(),["SharedCodec808"]:c5(),["SharedCodec809"]:c6(),["SharedCodec810"]:c7(),["SharedCodec811"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecification(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
