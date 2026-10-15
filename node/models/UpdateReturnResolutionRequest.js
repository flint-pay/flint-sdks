import { d323 as c0, d2275 as c1, d2279 as c2, d2280 as c3, d2283 as c4, d1994 as c5, d2271 as c6, d2270 as c7, d2273 as c8, d2272 as c9, d2274 as c10, d2529 as c11, d2553 as c12, d2554 as c13, d2555 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2555 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2555;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec501"]:c5(),["SharedCodec574"]:c6(),["SharedCodec575"]:c7(),["SharedCodec576"]:c8(),["SharedCodec577"]:c9(),["SharedCodec578"]:c10(),["SharedCodec643"]:c11(),["SharedCodec649"]:c12(),["SharedCodec650"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
