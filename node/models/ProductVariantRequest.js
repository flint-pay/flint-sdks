import { d8679 as c0, d8680 as c18 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10330 as c1, d10331 as c2, d10332 as c6, d10339 as c10 } from '../descriptors/data/486.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8045 as c3, d8046 as c4, d8052 as c5 } from '../descriptors/data/353.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c7 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c8 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c9 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10340 as c11, d10343 as c14, d10344 as c15, d10347 as c16, d10348 as c17 } from '../descriptors/data/487.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10327 as c12 } from '../descriptors/data/485.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9055 as c13 } from '../descriptors/data/411.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10339 as d10339 } from '../descriptors/data/486.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["GiftCardCustomAmountBoundsRequest"]:c1(),["GiftCardProductConfigurationRequest"]:c2(),["ImageInputFile"]:c3(),["ImageInputSourceURL"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["PlatformFeeMoney"]:c9(),["ProductVariantRequest"]:c10(),["ProductVariantSelectedOptionRequest"]:c11(),["QuantityPriceBreakRequest"]:c12(),["SharedCodec137"]:c13(),["SharedCodec1744"]:c14(),["SharedCodec1745"]:c15(),["SharedCodec2404"]:c16(),["SharedCodec2405"]:c17(),["WeightRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
