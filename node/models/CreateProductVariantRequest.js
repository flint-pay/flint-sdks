import { d451 as c0, d861 as c1, d883 as c2, d907 as c3, d1584 as c4, d74 as c5, d2012 as c6, d2014 as c7, d401 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d451 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d451;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductVariantRequest"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["ImageRequest"]:c3(),["InventoryItemCreateRequest"]:c4(),["MoneyValue"]:c5(),["ProductVariantRequest"]:c6(),["ProductVariantSelectedOptionRequest"]:c7(),["SharedCodec146"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
