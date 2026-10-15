import { d207 as c0, d205 as c1, d206 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d207 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d207;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLITokenResponse"]:c0(),["SharedCodec36"]:c1(),["SharedCodec37"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLITokenResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
