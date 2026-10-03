import { d861 as c0, d883 as c1, d905 as c2, d1768 as c3, d1769 as c4, d1772 as c5, d57 as c6, d1775 as c7, d74 as c8, d2008 as c9, d2272 as c10, d397 as c11, d401 as c12, d58 as c13, d1774 as c14, d2337 as c15 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2008 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2008;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["ProductVariant"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec145"]:c11(),["SharedCodec146"]:c12(),["SharedCodec15"]:c13(),["SharedCodec478"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
