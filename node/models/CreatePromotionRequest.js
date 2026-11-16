import { d359 as c0 } from '../descriptors/data/21.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c1 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10150 as c3, d10151 as c4, d10153 as c5, d10154 as c6, d10155 as c7, d10156 as c8, d10157 as c9, d10158 as c10, d10159 as c11, d10161 as c12, d10162 as c13, d10163 as c14, d10164 as c15, d10165 as c16, d10168 as c22, d10169 as c23 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9435 as c17, d9436 as c18, d9437 as c19, d9438 as c20, d9439 as c21 } from '../descriptors/data/430.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10170 as c24, d10173 as c25, d10174 as c26, d10175 as c27, d10176 as c28 } from '../descriptors/data/473.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d359 as d359 } from '../descriptors/data/21.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec2417"]:c12(),["SharedCodec2418"]:c13(),["SharedCodec2419"]:c14(),["SharedCodec2420"]:c15(),["SharedCodec2421"]:c16(),["SharedCodec2424"]:c17(),["SharedCodec2425"]:c18(),["SharedCodec2426"]:c19(),["SharedCodec2427"]:c20(),["SharedCodec2428"]:c21(),["SharedCodec2430"]:c22(),["SharedCodec2431"]:c23(),["SharedCodec2432"]:c24(),["SharedCodec2494"]:c25(),["SharedCodec2495"]:c26(),["SharedCodec2496"]:c27(),["SharedCodec2497"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
