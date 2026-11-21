import { d8704 as c0, d8705 as c18 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10373 as c1, d10374 as c2, d10375 as c6, d10370 as c12 } from '../descriptors/data/486.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8066 as c3, d8067 as c4, d8073 as c5 } from '../descriptors/data/353.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c7 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c8 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8272 as c9 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10382 as c10, d10383 as c11, d10386 as c14, d10387 as c15, d10390 as c16, d10391 as c17 } from '../descriptors/data/487.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9081 as c13 } from '../descriptors/data/411.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10382 as d10382 } from '../descriptors/data/487.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["GiftCardCustomAmountBoundsRequest"]:c1(),["GiftCardProductConfigurationRequest"]:c2(),["ImageInputFile"]:c3(),["ImageInputSourceURL"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["PlatformFeeMoney"]:c9(),["ProductVariantRequest"]:c10(),["ProductVariantSelectedOptionRequest"]:c11(),["QuantityPriceBreakRequest"]:c12(),["SharedCodec138"]:c13(),["SharedCodec1750"]:c14(),["SharedCodec1751"]:c15(),["SharedCodec2412"]:c16(),["SharedCodec2413"]:c17(),["WeightRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
