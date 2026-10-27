import { d4130 as c0 } from '../descriptors/data/175.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4173 as c1, d4174 as c2, d4175 as c3, d4176 as c4, d4177 as c5 } from '../descriptors/data/177.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4130 as d4130 } from '../descriptors/data/175.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec932"]:c1(),["SharedCodec933"]:c2(),["SharedCodec934"]:c3(),["SharedCodec935"]:c4(),["SharedCodec936"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
