import { d450 as c0, d451 as c1, d455 as c2, d868 as c3, d891 as c4, d914 as c5, d1590 as c6, d77 as c7, d2026 as c8, d2028 as c9, d407 as c10, d453 as c11, d452 as c12, d454 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d455 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d455;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantRequest"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["SharedCodec149"]:c10(),["SharedCodec169"]:c11(),["SharedCodec170"]:c12(),["SharedCodec171"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
