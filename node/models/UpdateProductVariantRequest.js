import { d8148 as c0, d8150 as c1, d8151 as c5, d8145 as c9 } from '../descriptors/data/397.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5929 as c2, d5930 as c3, d5919 as c6, d5921 as c10, d5922 as c11, d5920 as c12 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c4, d5941 as c13 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c7 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8159 as c8 } from '../descriptors/data/398.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7840 as c14, d7841 as c15, d7842 as c16, d7843 as c17 } from '../descriptors/data/378.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5683 as c18 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5683 as d5683 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5683;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantSelectedOptionRequest"]:c8(),["QuantityPriceBreakRequest"]:c9(),["SharedCodec1690"]:c10(),["SharedCodec1691"]:c11(),["SharedCodec1692"]:c12(),["SharedCodec1694"]:c13(),["SharedCodec1755"]:c14(),["SharedCodec1756"]:c15(),["SharedCodec1757"]:c16(),["SharedCodec1758"]:c17(),["UpdateProductVariantRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
