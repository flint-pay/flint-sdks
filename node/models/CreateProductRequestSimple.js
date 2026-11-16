import { d357 as c0 } from '../descriptors/data/21.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8496 as c1, d8497 as c15 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10089 as c2, d10090 as c3, d10091 as c7, d10086 as c12 } from '../descriptors/data/468.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7867 as c4, d7868 as c5, d7857 as c8 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7874 as c6 } from '../descriptors/data/340.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c9 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10098 as c10, d10099 as c11 } from '../descriptors/data/469.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10115 as c13, d10116 as c14 } from '../descriptors/data/470.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d357 as d357 } from '../descriptors/data/21.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductRequestSimple"]:c0(),["DimensionsRequest"]:c1(),["GiftCardCustomAmountBoundsRequest"]:c2(),["GiftCardProductConfigurationRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["ImageRequest"]:c6(),["InventoryItemCreateRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["ProductVariantRequest"]:c10(),["ProductVariantSelectedOptionRequest"]:c11(),["QuantityPriceBreakRequest"]:c12(),["SharedCodec545"]:c13(),["SharedCodec546"]:c14(),["WeightRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequestSimple(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
