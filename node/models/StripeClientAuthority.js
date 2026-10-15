import { d2346 as c0 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2346 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["StripeClientAuthority"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeStripeClientAuthority(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
