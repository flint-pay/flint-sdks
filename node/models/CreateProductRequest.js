import { d456 as c0, d457 as c1, d461 as c2, d887 as c3, d910 as c4, d934 as c5, d1622 as c6, d77 as c7, d2059 as c8, d2061 as c9, d413 as c10, d459 as c11, d458 as c12, d460 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d461 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantRequest"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["SharedCodec149"]:c10(),["SharedCodec169"]:c11(),["SharedCodec170"]:c12(),["SharedCodec171"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
