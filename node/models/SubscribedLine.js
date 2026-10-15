import { d323 as c0, d2352 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2352 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SubscribedLine"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscribedLine(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
