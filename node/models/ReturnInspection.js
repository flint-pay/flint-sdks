import { d2184 as c0, d2186 as c1, d2198 as c2, d2199 as c3, d2196 as c4, d2197 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2198 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnInspection"]:c2(),["ReturnInspectionLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["SharedCodec529"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInspection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
