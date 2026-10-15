import { d6 as c0, d66 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Address"]:c0(),["PostalAddress"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
