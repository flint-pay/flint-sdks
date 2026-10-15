import { d1847 as c0, d1846 as c1, d2034 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1847 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1847;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderActivity"]:c0(),["SharedCodec473"]:c1(),["SignedMoney"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderActivity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
