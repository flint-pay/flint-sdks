import { d849 as c0, d866 as c1, d889 as c2, d1804 as c3, d1805 as c4, d1808 as c5, d56 as c6, d1811 as c7, d323 as c8, d2051 as c9, d2318 as c10, d365 as c11, d57 as c12, d848 as c13, d1810 as c14, d2413 as c15 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2051 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2051;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["ProductVariant"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec113"]:c11(),["SharedCodec12"]:c12(),["SharedCodec243"]:c13(),["SharedCodec465"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
