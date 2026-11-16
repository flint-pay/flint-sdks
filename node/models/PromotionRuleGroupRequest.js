import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10156 as c1, d10157 as c2, d10158 as c3, d10161 as c4, d10162 as c5, d10163 as c6, d10164 as c7, d10165 as c8 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10173 as c9, d10174 as c10, d10175 as c11, d10176 as c12 } from '../descriptors/data/473.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10156 as d10156 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10156;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2417"]:c4(),["SharedCodec2418"]:c5(),["SharedCodec2419"]:c6(),["SharedCodec2420"]:c7(),["SharedCodec2421"]:c8(),["SharedCodec2494"]:c9(),["SharedCodec2495"]:c10(),["SharedCodec2496"]:c11(),["SharedCodec2497"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
