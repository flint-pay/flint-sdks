import { d10360 as c0, d10361 as c1, d10362 as c5 } from '../descriptors/data/487.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8058 as c2, d8059 as c3, d8065 as c4, d8070 as c19 } from '../descriptors/data/353.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c6, d8050 as c16, d8051 as c17, d8049 as c18 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c7 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8262 as c8 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10370 as c9, d10373 as c12, d10374 as c13, d10377 as c14, d10378 as c15 } from '../descriptors/data/488.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10357 as c10 } from '../descriptors/data/486.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9069 as c11 } from '../descriptors/data/411.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10035 as c20, d10036 as c21, d10037 as c22, d10038 as c23 } from '../descriptors/data/467.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7787 as c24 } from '../descriptors/data/329.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7787 as d7787 } from '../descriptors/data/329.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["PlatformFeeMoney"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["QuantityPriceBreakRequest"]:c10(),["SharedCodec137"]:c11(),["SharedCodec1745"]:c12(),["SharedCodec1746"]:c13(),["SharedCodec2407"]:c14(),["SharedCodec2408"]:c15(),["SharedCodec3071"]:c16(),["SharedCodec3072"]:c17(),["SharedCodec3073"]:c18(),["SharedCodec3075"]:c19(),["SharedCodec3142"]:c20(),["SharedCodec3143"]:c21(),["SharedCodec3144"]:c22(),["SharedCodec3145"]:c23(),["UpdateProductVariantRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
