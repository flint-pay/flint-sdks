import { d10460 as c0, d10461 as c1, d10462 as c5, d10457 as c10 } from '../descriptors/data/492.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8141 as c2, d8142 as c3, d8148 as c4 } from '../descriptors/data/358.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c6, d8133 as c16, d8134 as c17, d8132 as c18 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c7 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8352 as c8 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10470 as c9, d10473 as c12, d10474 as c13, d10477 as c14, d10478 as c15 } from '../descriptors/data/493.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9161 as c11 } from '../descriptors/data/416.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8153 as c19 } from '../descriptors/data/359.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10134 as c20, d10135 as c21, d10136 as c22, d10137 as c23 } from '../descriptors/data/472.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7870 as c24 } from '../descriptors/data/334.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7870 as d7870 } from '../descriptors/data/334.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7870;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["PlatformFeeMoney"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["QuantityPriceBreakRequest"]:c10(),["SharedCodec138"]:c11(),["SharedCodec1775"]:c12(),["SharedCodec1776"]:c13(),["SharedCodec2442"]:c14(),["SharedCodec2443"]:c15(),["SharedCodec3126"]:c16(),["SharedCodec3127"]:c17(),["SharedCodec3128"]:c18(),["SharedCodec3130"]:c19(),["SharedCodec3198"]:c20(),["SharedCodec3199"]:c21(),["SharedCodec3200"]:c22(),["SharedCodec3201"]:c23(),["UpdateProductVariantRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
