import { d854 as c0, d871 as c1, d894 as c2, d1807 as c3, d1808 as c4, d1811 as c5, d56 as c6, d1814 as c7, d323 as c8, d2068 as c9, d2334 as c10, d365 as c11, d57 as c12, d853 as c13, d1813 as c14, d2429 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2068 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2068;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["ProductVariant"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec113"]:c11(),["SharedCodec12"]:c12(),["SharedCodec247"]:c13(),["SharedCodec466"]:c14(),["TextModifierConfig"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
