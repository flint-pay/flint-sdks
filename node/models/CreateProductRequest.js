import { d8146 as c0, d8147 as c1, d8148 as c4, d8150 as c5, d8151 as c9, d8145 as c14 } from '../descriptors/data/397.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d325 as c2 } from '../descriptors/data/19.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6548 as c3, d6549 as c20 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5929 as c6, d5930 as c7, d5919 as c10 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c8 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c11 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8158 as c12, d8159 as c13 } from '../descriptors/data/398.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8174 as c15, d8175 as c16, d8176 as c17, d8177 as c18, d8178 as c19 } from '../descriptors/data/399.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d325 as d325 } from '../descriptors/data/19.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["DimensionsRequest"]:c3(),["GiftCardCustomAmountBoundsRequest"]:c4(),["GiftCardProductConfigurationRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryItemCreateRequest"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["ProductVariantRequest"]:c12(),["ProductVariantSelectedOptionRequest"]:c13(),["QuantityPriceBreakRequest"]:c14(),["SharedCodec383"]:c15(),["SharedCodec384"]:c16(),["SharedCodec385"]:c17(),["SharedCodec386"]:c18(),["SharedCodec387"]:c19(),["WeightRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
