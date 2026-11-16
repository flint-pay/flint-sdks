import { d7867 as c0, d7868 as c1, d7857 as c4, d7859 as c16, d7860 as c17, d7858 as c18 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7874 as c2, d7879 as c19 } from '../descriptors/data/340.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8501 as c3, d8498 as c7, d8499 as c8, d8500 as c9 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c5 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8075 as c6 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8637 as c10, d8633 as c11 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10639 as c12, d10640 as c13, d10641 as c14, d10642 as c15, d10638 as c38 } from '../descriptors/data/500.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8198 as c20 } from '../descriptors/data/358.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10646 as c21, d10647 as c22, d10648 as c23, d10649 as c24 } from '../descriptors/data/501.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8525 as c25, d8526 as c26, d8527 as c27, d8528 as c28, d8529 as c29, d8530 as c30, d8531 as c31, d8532 as c32 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10654 as c33, d10655 as c34, d10656 as c35, d10657 as c36, d10659 as c37, d10662 as c39, d10664 as c41 } from '../descriptors/data/502.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7788 as c40 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7650 as c42 } from '../descriptors/data/323.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7650 as d7650 } from '../descriptors/data/323.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7650;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1479"]:c7(),["SharedCodec1480"]:c8(),["SharedCodec1481"]:c9(),["SharedCodec194"]:c10(),["SharedCodec195"]:c11(),["SharedCodec2942"]:c12(),["SharedCodec2943"]:c13(),["SharedCodec2944"]:c14(),["SharedCodec2945"]:c15(),["SharedCodec3066"]:c16(),["SharedCodec3067"]:c17(),["SharedCodec3068"]:c18(),["SharedCodec3070"]:c19(),["SharedCodec3072"]:c20(),["SharedCodec3197"]:c21(),["SharedCodec3198"]:c22(),["SharedCodec3199"]:c23(),["SharedCodec3200"]:c24(),["SharedCodec494"]:c25(),["SharedCodec495"]:c26(),["SharedCodec496"]:c27(),["SharedCodec497"]:c28(),["SharedCodec498"]:c29(),["SharedCodec510"]:c30(),["SharedCodec511"]:c31(),["SharedCodec512"]:c32(),["SharedCodec593"]:c33(),["SharedCodec594"]:c34(),["SharedCodec595"]:c35(),["SharedCodec596"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
