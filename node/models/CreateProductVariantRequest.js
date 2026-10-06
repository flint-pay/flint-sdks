import { d456 as c0, d868 as c1, d891 as c2, d914 as c3, d1590 as c4, d77 as c5, d2026 as c6, d2028 as c7, d407 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d456 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d456;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductVariantRequest"]:c0(),["GiftCardCustomAmountBounds"]:c1(),["GiftCardProductConfiguration"]:c2(),["ImageRequest"]:c3(),["InventoryItemCreateRequest"]:c4(),["MoneyValue"]:c5(),["ProductVariantRequest"]:c6(),["ProductVariantSelectedOptionRequest"]:c7(),["SharedCodec149"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
