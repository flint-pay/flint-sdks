import { d4774 as c0 } from '../descriptors/data/208.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5604 as c1, d5605 as c2 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c3 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4779 as c4, d4780 as c5, d4781 as c6, d4782 as c7, d4783 as c8, d4784 as c9, d4785 as c10 } from '../descriptors/data/209.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5658 as c11, d5659 as c12, d5660 as c13, d5661 as c14, d5662 as c15, d5663 as c16, d5664 as c17, d5665 as c18, d5666 as c19, d5667 as c20, d5668 as c21, d5669 as c22, d5670 as c23, d5671 as c24, d5672 as c25, d5673 as c26, d5674 as c27, d5675 as c28 } from '../descriptors/data/255.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5605 as d5605 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5605;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec807"]:c4(),["SharedCodec808"]:c5(),["SharedCodec809"]:c6(),["SharedCodec810"]:c7(),["SharedCodec811"]:c8(),["SharedCodec812"]:c9(),["SharedCodec813"]:c10(),["SharedCodec817"]:c11(),["SharedCodec818"]:c12(),["SharedCodec819"]:c13(),["SharedCodec820"]:c14(),["SharedCodec821"]:c15(),["SharedCodec822"]:c16(),["SharedCodec823"]:c17(),["SharedCodec824"]:c18(),["SharedCodec825"]:c19(),["SharedCodec826"]:c20(),["SharedCodec827"]:c21(),["SharedCodec828"]:c22(),["SharedCodec829"]:c23(),["SharedCodec830"]:c24(),["SharedCodec831"]:c25(),["SharedCodec832"]:c26(),["SharedCodec833"]:c27(),["SharedCodec834"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
