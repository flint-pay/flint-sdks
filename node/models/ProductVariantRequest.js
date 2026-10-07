import { d887 as c0, d910 as c1, d934 as c2, d1622 as c3, d77 as c4, d2059 as c5, d2061 as c6, d413 as c7 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2059 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["ImageRequest"]:c2(),["InventoryItemCreateRequest"]:c3(),["MoneyValue"]:c4(),["ProductVariantRequest"]:c5(),["ProductVariantSelectedOptionRequest"]:c6(),["SharedCodec149"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
