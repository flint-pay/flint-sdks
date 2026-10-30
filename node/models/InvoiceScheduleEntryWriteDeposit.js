import { d4743 as c0 } from '../descriptors/data/207.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5573 as c1 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d854 as c2 } from '../descriptors/data/40.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c3 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4748 as c4, d4749 as c5, d4750 as c6, d4751 as c7, d4752 as c8, d4753 as c9, d4754 as c10 } from '../descriptors/data/208.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5627 as c11, d5628 as c12, d5629 as c13, d5630 as c14, d5631 as c15, d5633 as c16, d5634 as c17, d5635 as c18, d5636 as c19, d5637 as c20 } from '../descriptors/data/254.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d854 as d854 } from '../descriptors/data/40.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d854;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteDeposit"]:c2(),["MoneyValue"]:c3(),["SharedCodec805"]:c4(),["SharedCodec806"]:c5(),["SharedCodec807"]:c6(),["SharedCodec808"]:c7(),["SharedCodec809"]:c8(),["SharedCodec810"]:c9(),["SharedCodec811"]:c10(),["SharedCodec815"]:c11(),["SharedCodec816"]:c12(),["SharedCodec817"]:c13(),["SharedCodec818"]:c14(),["SharedCodec819"]:c15(),["SharedCodec821"]:c16(),["SharedCodec822"]:c17(),["SharedCodec823"]:c18(),["SharedCodec824"]:c19(),["SharedCodec825"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteDeposit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
