import { d6548 as c0, d6549 as c12 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8148 as c1, d8150 as c2, d8151 as c6, d8145 as c11 } from '../descriptors/data/397.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5929 as c3, d5930 as c4, d5919 as c7 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c5 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c8 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8158 as c9, d8159 as c10 } from '../descriptors/data/398.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8158 as d8158 } from '../descriptors/data/398.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8158;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["GiftCardCustomAmountBoundsRequest"]:c1(),["GiftCardProductConfigurationRequest"]:c2(),["ImageInputFile"]:c3(),["ImageInputSourceURL"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["ProductVariantRequest"]:c9(),["ProductVariantSelectedOptionRequest"]:c10(),["QuantityPriceBreakRequest"]:c11(),["WeightRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
