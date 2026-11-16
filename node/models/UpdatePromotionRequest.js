import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10149 as c1, d10152 as c2, d10156 as c3, d10157 as c4, d10158 as c5, d10160 as c6, d10161 as c7, d10162 as c8, d10163 as c9, d10164 as c10, d10165 as c11, d10166 as c12, d10167 as c13 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9435 as c14, d9436 as c15, d9437 as c16, d9438 as c17, d9439 as c18 } from '../descriptors/data/430.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10173 as c19, d10174 as c20, d10175 as c21, d10176 as c22, d10177 as c25, d10178 as c26, d10179 as c27, d10180 as c28, d10181 as c29, d10182 as c30 } from '../descriptors/data/473.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7858 as c23 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7954 as c24 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7624 as c31 } from '../descriptors/data/321.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7624 as d7624 } from '../descriptors/data/321.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7624;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2416"]:c6(),["SharedCodec2417"]:c7(),["SharedCodec2418"]:c8(),["SharedCodec2419"]:c9(),["SharedCodec2420"]:c10(),["SharedCodec2421"]:c11(),["SharedCodec2422"]:c12(),["SharedCodec2423"]:c13(),["SharedCodec2424"]:c14(),["SharedCodec2425"]:c15(),["SharedCodec2426"]:c16(),["SharedCodec2427"]:c17(),["SharedCodec2428"]:c18(),["SharedCodec2494"]:c19(),["SharedCodec2495"]:c20(),["SharedCodec2496"]:c21(),["SharedCodec2497"]:c22(),["SharedCodec3068"]:c23(),["SharedCodec3071"]:c24(),["SharedCodec3159"]:c25(),["SharedCodec3160"]:c26(),["SharedCodec3161"]:c27(),["SharedCodec3162"]:c28(),["SharedCodec3163"]:c29(),["SharedCodec3164"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
