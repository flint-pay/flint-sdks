import { d77 as c0, d2088 as c1, d2089 as c2, d2090 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2088 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2088;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublicResolvedModifierGroup"]:c1(),["PublicResolvedModifierOption"]:c2(),["PublicResolvedTextModifier"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
