import { d3377 as c0 } from '../descriptors/data/136.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4145 as c1 } from '../descriptors/data/176.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d756 as c2 } from '../descriptors/data/32.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3382 as c4, d3383 as c5, d3384 as c6, d3385 as c7, d3386 as c8, d3387 as c9, d3388 as c10 } from '../descriptors/data/137.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4188 as c11, d4189 as c12, d4190 as c13, d4191 as c14, d4192 as c15, d4194 as c16, d4195 as c17, d4196 as c18 } from '../descriptors/data/178.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d756 as d756 } from '../descriptors/data/32.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d756;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteDeposit"]:c2(),["MoneyValue"]:c3(),["SharedCodec927"]:c4(),["SharedCodec928"]:c5(),["SharedCodec929"]:c6(),["SharedCodec930"]:c7(),["SharedCodec931"]:c8(),["SharedCodec932"]:c9(),["SharedCodec933"]:c10(),["SharedCodec937"]:c11(),["SharedCodec938"]:c12(),["SharedCodec939"]:c13(),["SharedCodec940"]:c14(),["SharedCodec941"]:c15(),["SharedCodec943"]:c16(),["SharedCodec944"]:c17(),["SharedCodec945"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteDeposit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
