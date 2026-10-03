import { d861 as c0, d883 as c1, d907 as c2, d1584 as c3, d74 as c4, d401 as c5, d2357 as c6, d2446 as c7 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2446 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2446;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["ImageRequest"]:c2(),["InventoryItemCreateRequest"]:c3(),["MoneyValue"]:c4(),["SharedCodec146"]:c5(),["SharedCodec611"]:c6(),["UpdateProductVariantRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
