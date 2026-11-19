import { d364 as c0 } from '../descriptors/data/21.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8658 as c1, d8659 as c21 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10309 as c2, d10310 as c3, d10311 as c7, d10318 as c11 } from '../descriptors/data/480.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8024 as c4, d8025 as c5, d8014 as c8 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8031 as c6 } from '../descriptors/data/348.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c9 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8228 as c10 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10319 as c12, d10322 as c15, d10323 as c16, d10326 as c17, d10327 as c18 } from '../descriptors/data/481.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10306 as c13 } from '../descriptors/data/479.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9034 as c14 } from '../descriptors/data/405.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10343 as c19, d10344 as c20 } from '../descriptors/data/482.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d364 as d364 } from '../descriptors/data/21.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d364;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductRequestSimple"]:c0(),["DimensionsRequest"]:c1(),["GiftCardCustomAmountBoundsRequest"]:c2(),["GiftCardProductConfigurationRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["ImageRequest"]:c6(),["InventoryItemCreateRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["PlatformFeeMoney"]:c10(),["ProductVariantRequest"]:c11(),["ProductVariantSelectedOptionRequest"]:c12(),["QuantityPriceBreakRequest"]:c13(),["SharedCodec137"]:c14(),["SharedCodec1744"]:c15(),["SharedCodec1745"]:c16(),["SharedCodec2411"]:c17(),["SharedCodec2412"]:c18(),["SharedCodec533"]:c19(),["SharedCodec534"]:c20(),["WeightRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequestSimple(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
