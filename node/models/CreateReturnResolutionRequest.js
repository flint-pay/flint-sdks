import { d494 as c0, d77 as c1, d2256 as c2, d2259 as c3, d2264 as c4, d490 as c5, d492 as c6, d491 as c7, d1975 as c8, d2251 as c9, d2250 as c10, d2253 as c11, d2252 as c12, d2254 as c13 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d494 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec179"]:c5(),["SharedCodec180"]:c6(),["SharedCodec181"]:c7(),["SharedCodec515"]:c8(),["SharedCodec592"]:c9(),["SharedCodec593"]:c10(),["SharedCodec594"]:c11(),["SharedCodec595"]:c12(),["SharedCodec596"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
