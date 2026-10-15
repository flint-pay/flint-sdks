import { d416 as c0, d417 as c1, d421 as c2, d854 as c3, d871 as c4, d896 as c5, d1604 as c6, d323 as c7, d2071 as c8, d2073 as c9, d419 as c10, d418 as c11, d420 as c12, d853 as c13 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d421 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d421;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantRequest"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["SharedCodec138"]:c10(),["SharedCodec139"]:c11(),["SharedCodec140"]:c12(),["SharedCodec247"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
