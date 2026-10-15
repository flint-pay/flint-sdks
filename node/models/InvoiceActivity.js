import { d1672 as c0, d323 as c1, d1671 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1672 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1672;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceActivity"]:c0(),["MoneyValue"]:c1(),["SharedCodec428"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceActivity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
