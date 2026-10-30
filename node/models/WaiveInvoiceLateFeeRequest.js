import { d4232 as c0 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4232 as d4232 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WaiveInvoiceLateFeeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
