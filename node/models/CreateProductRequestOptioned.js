import { d10371 as c0, d10372 as c1, d10373 as c4, d10374 as c5, d10375 as c9, d10370 as c15 } from '../descriptors/data/486.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d365 as c2 } from '../descriptors/data/21.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8704 as c3, d8705 as c22 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8066 as c6, d8067 as c7, d8073 as c8 } from '../descriptors/data/353.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c10 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c11 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8272 as c12 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10382 as c13, d10383 as c14, d10386 as c17, d10387 as c18, d10390 as c19, d10391 as c20 } from '../descriptors/data/487.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9081 as c16 } from '../descriptors/data/411.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10410 as c21 } from '../descriptors/data/489.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d365 as d365 } from '../descriptors/data/21.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequestOptioned"]:c2(),["DimensionsRequest"]:c3(),["GiftCardCustomAmountBoundsRequest"]:c4(),["GiftCardProductConfigurationRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryItemCreateRequest"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["PlatformFeeMoney"]:c12(),["ProductVariantRequest"]:c13(),["ProductVariantSelectedOptionRequest"]:c14(),["QuantityPriceBreakRequest"]:c15(),["SharedCodec138"]:c16(),["SharedCodec1750"]:c17(),["SharedCodec1751"]:c18(),["SharedCodec2412"]:c19(),["SharedCodec2413"]:c20(),["SharedCodec541"]:c21(),["WeightRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequestOptioned(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
