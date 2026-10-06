import { d881 as c0, d904 as c1, d928 as c2, d1615 as c3, d77 as c4, d2052 as c5, d2054 as c6, d412 as c7 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2052 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2052;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["ImageRequest"]:c2(),["InventoryItemCreateRequest"]:c3(),["MoneyValue"]:c4(),["ProductVariantRequest"]:c5(),["ProductVariantSelectedOptionRequest"]:c6(),["SharedCodec149"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
