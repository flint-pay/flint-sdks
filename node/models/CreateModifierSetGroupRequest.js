import { d347 as c0, d363 as c1, d366 as c2, d1811 as c3, d323 as c4, d364 as c5, d365 as c6, d2430 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d366 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d366;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["ModifierOverride"]:c3(),["MoneyValue"]:c4(),["SharedCodec112"]:c5(),["SharedCodec113"]:c6(),["TextModifierConfigRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
