import { d739 as c0 } from '../descriptors/data/31.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3332 as c1, d3333 as c2 } from '../descriptors/data/134.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d739 as d739 } from '../descriptors/data/31.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d739;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationOnReceipt"]:c0(),["SharedCodec912"]:c1(),["SharedCodec913"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationOnReceipt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
