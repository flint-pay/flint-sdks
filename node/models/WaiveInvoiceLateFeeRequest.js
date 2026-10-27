import { d2508 as c0 } from '../descriptors/data/102.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2508 as d2508 } from '../descriptors/data/102.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2508;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WaiveInvoiceLateFeeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
