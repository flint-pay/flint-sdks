import { d447 as c0, d448 as c1, d452 as c2, d863 as c3, d885 as c4, d909 as c5, d1586 as c6, d74 as c7, d2014 as c8, d2016 as c9, d403 as c10, d450 as c11, d449 as c12, d451 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d452 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantRequest"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["SharedCodec146"]:c10(),["SharedCodec167"]:c11(),["SharedCodec168"]:c12(),["SharedCodec169"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
