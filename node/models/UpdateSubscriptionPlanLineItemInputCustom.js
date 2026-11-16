import { d7857 as c0 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8075 as c2 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8637 as c3, d8633 as c4 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8525 as c5, d8526 as c6, d8527 as c7, d8528 as c8, d8529 as c9, d8530 as c10, d8531 as c11, d8532 as c12 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7788 as c13 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7648 as c14 } from '../descriptors/data/323.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7648 as d7648 } from '../descriptors/data/323.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7648;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec194"]:c3(),["SharedCodec195"]:c4(),["SharedCodec494"]:c5(),["SharedCodec495"]:c6(),["SharedCodec496"]:c7(),["SharedCodec497"]:c8(),["SharedCodec498"]:c9(),["SharedCodec510"]:c10(),["SharedCodec511"]:c11(),["SharedCodec512"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputCustom"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
