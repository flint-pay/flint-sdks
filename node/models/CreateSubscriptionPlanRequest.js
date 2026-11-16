import { d409 as c0 } from '../descriptors/data/25.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7867 as c1, d7868 as c2, d7857 as c5 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7874 as c3 } from '../descriptors/data/340.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8501 as c4, d8498 as c8, d8499 as c9, d8500 as c10 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c6 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8075 as c7 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8637 as c11, d8633 as c12 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10639 as c13, d10640 as c14, d10641 as c15, d10642 as c16, d10643 as c17, d10644 as c18, d10645 as c19, d10638 as c33 } from '../descriptors/data/500.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8525 as c20, d8526 as c21, d8527 as c22, d8528 as c23, d8529 as c24, d8530 as c25, d8531 as c26, d8532 as c27 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10654 as c28, d10655 as c29, d10656 as c30, d10657 as c31, d10659 as c32, d10662 as c34, d10663 as c35 } from '../descriptors/data/502.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7788 as c36 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d409 as d409 } from '../descriptors/data/25.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d409;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec1479"]:c8(),["SharedCodec1480"]:c9(),["SharedCodec1481"]:c10(),["SharedCodec194"]:c11(),["SharedCodec195"]:c12(),["SharedCodec2942"]:c13(),["SharedCodec2943"]:c14(),["SharedCodec2944"]:c15(),["SharedCodec2945"]:c16(),["SharedCodec2947"]:c17(),["SharedCodec2948"]:c18(),["SharedCodec2949"]:c19(),["SharedCodec494"]:c20(),["SharedCodec495"]:c21(),["SharedCodec496"]:c22(),["SharedCodec497"]:c23(),["SharedCodec498"]:c24(),["SharedCodec510"]:c25(),["SharedCodec511"]:c26(),["SharedCodec512"]:c27(),["SharedCodec593"]:c28(),["SharedCodec594"]:c29(),["SharedCodec595"]:c30(),["SharedCodec596"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
