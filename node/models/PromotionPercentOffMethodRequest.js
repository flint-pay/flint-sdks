import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1617 as c1 } from '../descriptors/data/80.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10155 as c2, d10156 as c3, d10157 as c4, d10158 as c5, d10161 as c6, d10162 as c7, d10163 as c8, d10164 as c9, d10165 as c10 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9435 as c11, d9436 as c12, d9437 as c13, d9438 as c14, d9439 as c15 } from '../descriptors/data/430.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10173 as c16, d10174 as c17, d10175 as c18, d10176 as c19 } from '../descriptors/data/473.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1617 as d1617 } from '../descriptors/data/80.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1617;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionPercentOffMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2417"]:c6(),["SharedCodec2418"]:c7(),["SharedCodec2419"]:c8(),["SharedCodec2420"]:c9(),["SharedCodec2421"]:c10(),["SharedCodec2424"]:c11(),["SharedCodec2425"]:c12(),["SharedCodec2426"]:c13(),["SharedCodec2427"]:c14(),["SharedCodec2428"]:c15(),["SharedCodec2494"]:c16(),["SharedCodec2495"]:c17(),["SharedCodec2496"]:c18(),["SharedCodec2497"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
