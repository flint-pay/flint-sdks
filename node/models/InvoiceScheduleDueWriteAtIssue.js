import { d749 as c0 } from '../descriptors/data/32.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4174 as c1 } from '../descriptors/data/177.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d749 as d749 } from '../descriptors/data/32.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWriteAtIssue"]:c0(),["SharedCodec933"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWriteAtIssue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
