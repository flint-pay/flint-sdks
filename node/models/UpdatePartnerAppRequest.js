import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9810 as c1 } from '../descriptors/data/451.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9834 as c2, d9835 as c3, d9836 as c4, d9837 as c5, d9838 as c6, d9839 as c7, d9840 as c8, d9841 as c9, d9842 as c10, d9843 as c11, d9844 as c12, d9845 as c13 } from '../descriptors/data/452.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7612 as c14 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7612 as d7612 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3135"]:c2(),["SharedCodec3136"]:c3(),["SharedCodec3137"]:c4(),["SharedCodec3138"]:c5(),["SharedCodec3139"]:c6(),["SharedCodec3140"]:c7(),["SharedCodec3141"]:c8(),["SharedCodec3142"]:c9(),["SharedCodec3143"]:c10(),["SharedCodec3144"]:c11(),["SharedCodec3145"]:c12(),["SharedCodec3146"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
