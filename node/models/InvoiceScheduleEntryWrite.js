import { d3363 as c0 } from '../descriptors/data/135.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4130 as c1 } from '../descriptors/data/175.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4131 as c2 } from '../descriptors/data/176.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c3 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3368 as c4, d3369 as c5, d3370 as c6, d3371 as c7, d3372 as c8, d3373 as c9, d3374 as c10 } from '../descriptors/data/136.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4173 as c11, d4174 as c12, d4175 as c13, d4176 as c14, d4177 as c15, d4178 as c16, d4179 as c17, d4180 as c18, d4181 as c19, d4182 as c20, d4183 as c21, d4184 as c22 } from '../descriptors/data/177.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4185 as c23, d4186 as c24, d4187 as c25, d4188 as c26 } from '../descriptors/data/178.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4131 as d4131 } from '../descriptors/data/176.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4131;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec922"]:c4(),["SharedCodec923"]:c5(),["SharedCodec924"]:c6(),["SharedCodec925"]:c7(),["SharedCodec926"]:c8(),["SharedCodec927"]:c9(),["SharedCodec928"]:c10(),["SharedCodec932"]:c11(),["SharedCodec933"]:c12(),["SharedCodec934"]:c13(),["SharedCodec935"]:c14(),["SharedCodec936"]:c15(),["SharedCodec937"]:c16(),["SharedCodec938"]:c17(),["SharedCodec939"]:c18(),["SharedCodec940"]:c19(),["SharedCodec941"]:c20(),["SharedCodec942"]:c21(),["SharedCodec943"]:c22(),["SharedCodec944"]:c23(),["SharedCodec945"]:c24(),["SharedCodec946"]:c25(),["SharedCodec947"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
