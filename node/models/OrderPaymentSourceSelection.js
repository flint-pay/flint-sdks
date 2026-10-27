import { d4519 as c0, d4520 as c1 } from '../descriptors/data/199.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4520 as d4520 } from '../descriptors/data/199.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4520;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentSourceCardSelection"]:c0(),["OrderPaymentSourceSelection"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentSourceSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
