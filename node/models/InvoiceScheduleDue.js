import { d1701 as c0, d1699 as c1, d1700 as c2 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1701 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1701;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDue"]:c0(),["SharedCodec468"]:c1(),["SharedCodec469"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
