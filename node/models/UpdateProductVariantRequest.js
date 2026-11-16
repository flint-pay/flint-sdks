import { d10089 as c0, d10090 as c1, d10091 as c5, d10086 as c9 } from '../descriptors/data/468.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7867 as c2, d7868 as c3, d7857 as c6, d7859 as c10, d7860 as c11, d7858 as c12 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7874 as c4, d7879 as c13 } from '../descriptors/data/340.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c7 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10099 as c8 } from '../descriptors/data/469.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9782 as c14, d9783 as c15, d9784 as c16, d9785 as c17 } from '../descriptors/data/449.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7622 as c18 } from '../descriptors/data/321.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7622 as d7622 } from '../descriptors/data/321.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7622;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantSelectedOptionRequest"]:c8(),["QuantityPriceBreakRequest"]:c9(),["SharedCodec3066"]:c10(),["SharedCodec3067"]:c11(),["SharedCodec3068"]:c12(),["SharedCodec3070"]:c13(),["SharedCodec3131"]:c14(),["SharedCodec3132"]:c15(),["SharedCodec3133"]:c16(),["SharedCodec3134"]:c17(),["UpdateProductVariantRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
