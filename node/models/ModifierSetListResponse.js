import { d1780 as c0, d1781 as c1, d1784 as c2, d60 as c3, d1787 as c4, d1789 as c5, d77 as c6, d1797 as c7, d1796 as c8, d2131 as c9, d2132 as c10, d14 as c11, d403 as c12, d1786 as c13, d1795 as c14, d2352 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1789 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1789;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSet"]:c3(),["ModifierSetGroup"]:c4(),["ModifierSetListResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec148"]:c12(),["SharedCodec484"]:c13(),["SharedCodec485"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
