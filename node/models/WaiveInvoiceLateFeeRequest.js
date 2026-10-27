import { d2508 as c0 } from '../descriptors/data/102.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2508 as d2508 } from '../descriptors/data/102.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2508;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WaiveInvoiceLateFeeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
