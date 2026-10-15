import { d1583 as c0, d1812 as c1, d323 as c2, d2430 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1583 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1583;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["ModifierRequest"]:c1(),["MoneyValue"]:c2(),["TextModifierConfigRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInlineModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
