import { d77 as c0, d2255 as c1, d2259 as c2, d2260 as c3, d2263 as c4, d1975 as c5, d2251 as c6, d2250 as c7, d2253 as c8, d2252 as c9, d2254 as c10, d2474 as c11, d2498 as c12, d2499 as c13, d2500 as c14 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2500 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec515"]:c5(),["SharedCodec592"]:c6(),["SharedCodec593"]:c7(),["SharedCodec594"]:c8(),["SharedCodec595"]:c9(),["SharedCodec596"]:c10(),["SharedCodec659"]:c11(),["SharedCodec665"]:c12(),["SharedCodec666"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
