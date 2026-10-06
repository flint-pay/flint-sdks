import { d488 as c0, d77 as c1, d2230 as c2, d2233 as c3, d2238 as c4, d485 as c5, d487 as c6, d486 as c7, d1949 as c8, d2225 as c9, d2224 as c10, d2227 as c11, d2226 as c12, d2228 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d488 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec179"]:c5(),["SharedCodec180"]:c6(),["SharedCodec181"]:c7(),["SharedCodec513"]:c8(),["SharedCodec590"]:c9(),["SharedCodec591"]:c10(),["SharedCodec592"]:c11(),["SharedCodec593"]:c12(),["SharedCodec594"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
