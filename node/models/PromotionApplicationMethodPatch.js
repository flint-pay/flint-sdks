import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10149 as c1, d10156 as c2, d10157 as c3, d10158 as c4, d10160 as c5, d10161 as c6, d10162 as c7, d10163 as c8, d10164 as c9, d10165 as c10, d10166 as c11, d10167 as c12 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9435 as c13, d9436 as c14, d9437 as c15, d9438 as c16, d9439 as c17 } from '../descriptors/data/430.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10173 as c18, d10174 as c19, d10175 as c20, d10176 as c21 } from '../descriptors/data/473.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10149 as d10149 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec2416"]:c5(),["SharedCodec2417"]:c6(),["SharedCodec2418"]:c7(),["SharedCodec2419"]:c8(),["SharedCodec2420"]:c9(),["SharedCodec2421"]:c10(),["SharedCodec2422"]:c11(),["SharedCodec2423"]:c12(),["SharedCodec2424"]:c13(),["SharedCodec2425"]:c14(),["SharedCodec2426"]:c15(),["SharedCodec2427"]:c16(),["SharedCodec2428"]:c17(),["SharedCodec2494"]:c18(),["SharedCodec2495"]:c19(),["SharedCodec2496"]:c20(),["SharedCodec2497"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
