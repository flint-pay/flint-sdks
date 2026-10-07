import { d455 as c0, d456 as c1, d460 as c2, d881 as c3, d904 as c4, d928 as c5, d1616 as c6, d77 as c7, d2053 as c8, d2055 as c9, d412 as c10, d458 as c11, d457 as c12, d459 as c13 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d460 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d460;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantRequest"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["SharedCodec149"]:c10(),["SharedCodec169"]:c11(),["SharedCodec170"]:c12(),["SharedCodec171"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
