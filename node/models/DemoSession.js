import { d732 as c0, d733 as c1, d15 as c2, d14 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d732 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DemoSession"]:c0(),["DemoSessionAPIKey"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDemoSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
