import { d10328 as c0, d10327 as c15 } from '../descriptors/data/485.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10329 as c1, d10330 as c4, d10331 as c5, d10332 as c9, d10339 as c13 } from '../descriptors/data/486.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d363 as c2 } from '../descriptors/data/21.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8679 as c3, d8680 as c22 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8045 as c6, d8046 as c7, d8052 as c8 } from '../descriptors/data/353.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c10 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c11 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c12 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10340 as c14, d10343 as c17, d10344 as c18, d10347 as c19, d10348 as c20 } from '../descriptors/data/487.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9055 as c16 } from '../descriptors/data/411.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10367 as c21 } from '../descriptors/data/488.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d363 as d363 } from '../descriptors/data/21.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d363;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequestOptioned"]:c2(),["DimensionsRequest"]:c3(),["GiftCardCustomAmountBoundsRequest"]:c4(),["GiftCardProductConfigurationRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryItemCreateRequest"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["PlatformFeeMoney"]:c12(),["ProductVariantRequest"]:c13(),["ProductVariantSelectedOptionRequest"]:c14(),["QuantityPriceBreakRequest"]:c15(),["SharedCodec137"]:c16(),["SharedCodec1744"]:c17(),["SharedCodec1745"]:c18(),["SharedCodec2404"]:c19(),["SharedCodec2405"]:c20(),["SharedCodec536"]:c21(),["WeightRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequestOptioned(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
