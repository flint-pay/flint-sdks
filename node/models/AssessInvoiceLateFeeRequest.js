import { d34 as c0 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d34 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d34;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AssessInvoiceLateFeeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAssessInvoiceLateFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
