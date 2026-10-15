import { d36 as c0, d37 as c1, d38 as c2, d323 as c3, d2429 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d37 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d37;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AvailableModifier"]:c0(),["AvailableModifierGroup"]:c1(),["AvailableModifierSelection"]:c2(),["MoneyValue"]:c3(),["TextModifierConfig"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAvailableModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
