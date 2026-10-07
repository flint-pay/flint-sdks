import { d881 as c0, d904 as c1, d928 as c2, d1616 as c3, d77 as c4, d412 as c5, d2398 as c6, d2487 as c7 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2487 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2487;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["ImageRequest"]:c2(),["InventoryItemCreateRequest"]:c3(),["MoneyValue"]:c4(),["SharedCodec149"]:c5(),["SharedCodec626"]:c6(),["UpdateProductVariantRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
