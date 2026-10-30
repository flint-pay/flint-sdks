import { d4743 as c0 } from '../descriptors/data/207.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5573 as c1, d5574 as c2 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c3 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4748 as c4, d4749 as c5, d4750 as c6, d4751 as c7, d4752 as c8, d4753 as c9, d4754 as c10 } from '../descriptors/data/208.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5627 as c11, d5628 as c12, d5629 as c13, d5630 as c14, d5631 as c15, d5632 as c16, d5633 as c17, d5634 as c18, d5635 as c19, d5636 as c20, d5637 as c21, d5638 as c22, d5639 as c23, d5640 as c24, d5641 as c25, d5642 as c26, d5643 as c27, d5644 as c28 } from '../descriptors/data/254.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5574 as d5574 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5574;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec805"]:c4(),["SharedCodec806"]:c5(),["SharedCodec807"]:c6(),["SharedCodec808"]:c7(),["SharedCodec809"]:c8(),["SharedCodec810"]:c9(),["SharedCodec811"]:c10(),["SharedCodec815"]:c11(),["SharedCodec816"]:c12(),["SharedCodec817"]:c13(),["SharedCodec818"]:c14(),["SharedCodec819"]:c15(),["SharedCodec820"]:c16(),["SharedCodec821"]:c17(),["SharedCodec822"]:c18(),["SharedCodec823"]:c19(),["SharedCodec824"]:c20(),["SharedCodec825"]:c21(),["SharedCodec826"]:c22(),["SharedCodec827"]:c23(),["SharedCodec828"]:c24(),["SharedCodec829"]:c25(),["SharedCodec830"]:c26(),["SharedCodec831"]:c27(),["SharedCodec832"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
