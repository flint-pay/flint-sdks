import { d10304 as c0, d10305 as c1, d10306 as c4, d10307 as c5, d10308 as c9, d10303 as c15 } from '../descriptors/data/478.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d362 as c2 } from '../descriptors/data/21.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8657 as c3, d8658 as c26 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8024 as c6, d8025 as c7, d8014 as c10 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8031 as c8 } from '../descriptors/data/348.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c11 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c12 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10315 as c13, d10316 as c14, d10319 as c17, d10320 as c18 } from '../descriptors/data/479.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9033 as c16 } from '../descriptors/data/405.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10323 as c19, d10324 as c20 } from '../descriptors/data/480.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10339 as c21, d10340 as c22, d10341 as c23, d10342 as c24, d10343 as c25 } from '../descriptors/data/481.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d362 as d362 } from '../descriptors/data/21.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d362;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["DimensionsRequest"]:c3(),["GiftCardCustomAmountBoundsRequest"]:c4(),["GiftCardProductConfigurationRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryItemCreateRequest"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["PlatformFeeMoney"]:c12(),["ProductVariantRequest"]:c13(),["ProductVariantSelectedOptionRequest"]:c14(),["QuantityPriceBreakRequest"]:c15(),["SharedCodec137"]:c16(),["SharedCodec1743"]:c17(),["SharedCodec1744"]:c18(),["SharedCodec2411"]:c19(),["SharedCodec2412"]:c20(),["SharedCodec530"]:c21(),["SharedCodec531"]:c22(),["SharedCodec532"]:c23(),["SharedCodec533"]:c24(),["SharedCodec534"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
