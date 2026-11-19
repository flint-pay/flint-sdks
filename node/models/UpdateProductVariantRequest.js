import { d10309 as c0, d10310 as c1, d10311 as c5 } from '../descriptors/data/480.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8024 as c2, d8025 as c3, d8014 as c6, d8016 as c16, d8017 as c17, d8015 as c18 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8031 as c4, d8036 as c19 } from '../descriptors/data/348.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c7 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8228 as c8 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10319 as c9, d10322 as c12, d10323 as c13, d10326 as c14, d10327 as c15 } from '../descriptors/data/481.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10306 as c10 } from '../descriptors/data/479.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9034 as c11 } from '../descriptors/data/405.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9990 as c20, d9991 as c21, d9992 as c22, d9993 as c23 } from '../descriptors/data/460.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7775 as c24 } from '../descriptors/data/328.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7775 as d7775 } from '../descriptors/data/328.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7775;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["PlatformFeeMoney"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["QuantityPriceBreakRequest"]:c10(),["SharedCodec137"]:c11(),["SharedCodec1744"]:c12(),["SharedCodec1745"]:c13(),["SharedCodec2411"]:c14(),["SharedCodec2412"]:c15(),["SharedCodec3070"]:c16(),["SharedCodec3071"]:c17(),["SharedCodec3072"]:c18(),["SharedCodec3074"]:c19(),["SharedCodec3135"]:c20(),["SharedCodec3136"]:c21(),["SharedCodec3137"]:c22(),["SharedCodec3138"]:c23(),["UpdateProductVariantRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
