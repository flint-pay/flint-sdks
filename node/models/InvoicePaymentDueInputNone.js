import { d731 as c0 } from '../descriptors/data/31.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3354 as c1, d3355 as c2 } from '../descriptors/data/135.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d731 as d731 } from '../descriptors/data/31.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d731;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputNone"]:c0(),["SharedCodec898"]:c1(),["SharedCodec899"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
