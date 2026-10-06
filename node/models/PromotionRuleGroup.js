import { d77 as c0, d463 as c1, d2075 as c2, d2076 as c3, d468 as c4, d466 as c5, d465 as c6, d464 as c7, d467 as c8, d2073 as c9, d2072 as c10, d2071 as c11, d2074 as c12 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2075 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2075;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec172"]:c4(),["SharedCodec173"]:c5(),["SharedCodec174"]:c6(),["SharedCodec175"]:c7(),["SharedCodec176"]:c8(),["SharedCodec534"]:c9(),["SharedCodec535"]:c10(),["SharedCodec536"]:c11(),["SharedCodec537"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
