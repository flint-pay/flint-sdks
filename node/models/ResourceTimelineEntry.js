import { d2175 as c0, d20 as c1, d902 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2175 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2175;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimelineEntry"]:c0(),["SharedCodec2"]:c1(),["SharedCodec252"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
