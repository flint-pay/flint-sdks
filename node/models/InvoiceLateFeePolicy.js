import { d1690 as c0, d323 as c1, d1688 as c2, d1689 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1690 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MoneyValue"]:c1(),["SharedCodec434"]:c2(),["SharedCodec435"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
