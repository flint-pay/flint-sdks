import { d1583 as c0, d1811 as c1, d1812 as c2, d1815 as c3, d323 as c4, d364 as c5, d365 as c6, d2430 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1815 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["ModifierOverride"]:c1(),["ModifierRequest"]:c2(),["ModifierSetGroupRequest"]:c3(),["MoneyValue"]:c4(),["SharedCodec112"]:c5(),["SharedCodec113"]:c6(),["TextModifierConfigRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
