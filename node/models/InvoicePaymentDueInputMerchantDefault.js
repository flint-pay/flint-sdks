import { d730 as c0 } from '../descriptors/data/31.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3355 as c1 } from '../descriptors/data/135.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4167 as c2 } from '../descriptors/data/177.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d730 as d730 } from '../descriptors/data/31.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d730;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputMerchantDefault"]:c0(),["SharedCodec899"]:c1(),["SharedCodec905"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputMerchantDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
