import { d849 as c0, d866 as c1, d891 as c2, d1602 as c3, d323 as c4, d848 as c5, d2433 as c6, d2525 as c7 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2525 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2525;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["ImageRequest"]:c2(),["InventoryItemCreateRequest"]:c3(),["MoneyValue"]:c4(),["SharedCodec243"]:c5(),["SharedCodec602"]:c6(),["UpdateProductVariantRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
