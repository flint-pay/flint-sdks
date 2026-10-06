import { d461 as c0, d881 as c1, d904 as c2, d928 as c3, d1615 as c4, d77 as c5, d2052 as c6, d2054 as c7, d412 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d461 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductVariantRequest"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["ImageRequest"]:c3(),["InventoryItemCreateRequest"]:c4(),["MoneyValue"]:c5(),["ProductVariantRequest"]:c6(),["ProductVariantSelectedOptionRequest"]:c7(),["SharedCodec149"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
