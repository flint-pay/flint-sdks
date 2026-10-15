import { d323 as c0, d2282 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2282 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnResolutionLineItem"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnResolutionLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
