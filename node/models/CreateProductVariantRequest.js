import { d415 as c0, d849 as c1, d866 as c2, d891 as c3, d1602 as c4, d323 as c5, d2054 as c6, d2056 as c7, d848 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d415 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d415;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductVariantRequest"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["ImageRequest"]:c3(),["InventoryItemCreateRequest"]:c4(),["MoneyValue"]:c5(),["ProductVariantRequest"]:c6(),["ProductVariantSelectedOptionRequest"]:c7(),["SharedCodec243"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
