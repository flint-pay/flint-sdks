import { d10306 as c0, d10307 as c1, d10308 as c5, d10303 as c10 } from '../descriptors/data/478.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8024 as c2, d8025 as c3, d8014 as c6, d8016 as c16, d8017 as c17, d8015 as c18 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8031 as c4, d8036 as c19 } from '../descriptors/data/348.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c7 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c8 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10316 as c9, d10319 as c12, d10320 as c13 } from '../descriptors/data/479.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9033 as c11 } from '../descriptors/data/405.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10323 as c14, d10324 as c15 } from '../descriptors/data/480.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9987 as c20, d9988 as c21, d9989 as c22, d9990 as c23 } from '../descriptors/data/459.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7775 as c24 } from '../descriptors/data/328.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7775 as d7775 } from '../descriptors/data/328.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7775;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["PlatformFeeMoney"]:c8(),["ProductVariantSelectedOptionRequest"]:c9(),["QuantityPriceBreakRequest"]:c10(),["SharedCodec137"]:c11(),["SharedCodec1743"]:c12(),["SharedCodec1744"]:c13(),["SharedCodec2411"]:c14(),["SharedCodec2412"]:c15(),["SharedCodec3069"]:c16(),["SharedCodec3070"]:c17(),["SharedCodec3071"]:c18(),["SharedCodec3073"]:c19(),["SharedCodec3134"]:c20(),["SharedCodec3135"]:c21(),["SharedCodec3136"]:c22(),["SharedCodec3137"]:c23(),["UpdateProductVariantRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
