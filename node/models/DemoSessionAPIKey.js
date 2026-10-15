import { d733 as c0, d15 as c1, d14 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d733 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d733;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DemoSessionAPIKey"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDemoSessionAPIKey(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
