import { d7857 as c0 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8075 as c2 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8637 as c3, d8633 as c4 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10639 as c5, d10640 as c6, d10641 as c7, d10642 as c8, d10643 as c9, d10644 as c10, d10645 as c11 } from '../descriptors/data/500.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8525 as c12, d8526 as c13, d8527 as c14, d8528 as c15, d8529 as c16, d8530 as c17, d8531 as c18, d8532 as c19 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10663 as c20 } from '../descriptors/data/502.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7788 as c21 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10663 as d10663 } from '../descriptors/data/502.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10663;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec194"]:c3(),["SharedCodec195"]:c4(),["SharedCodec2942"]:c5(),["SharedCodec2943"]:c6(),["SharedCodec2944"]:c7(),["SharedCodec2945"]:c8(),["SharedCodec2947"]:c9(),["SharedCodec2948"]:c10(),["SharedCodec2949"]:c11(),["SharedCodec494"]:c12(),["SharedCodec495"]:c13(),["SharedCodec496"]:c14(),["SharedCodec497"]:c15(),["SharedCodec498"]:c16(),["SharedCodec510"]:c17(),["SharedCodec511"]:c18(),["SharedCodec512"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
