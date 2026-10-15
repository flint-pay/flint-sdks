import { d391 as c0 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d391 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d391;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
