import { d39 as c0, d2429 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d39 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d39;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AvailableTextModifierConfig"]:c0(),["TextModifierConfig"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAvailableTextModifierConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
