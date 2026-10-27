import { d16 as c0 } from '../descriptors/data/0.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d16 as d16 } from '../descriptors/data/0.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d16;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AssessInvoiceLateFeeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAssessInvoiceLateFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
