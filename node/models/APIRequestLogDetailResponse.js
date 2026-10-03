import { d19 as c0, d20 as c1, d23 as c2, d24 as c3, d21 as c4, d25 as c5, d74 as c6, d1786 as c7, d1785 as c8, d2121 as c9, d2122 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d20 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d20;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLogDetail"]:c0(),["APIRequestLogDetailResponse"]:c1(),["APIRequestLogQueryParam"]:c2(),["APIRequestLogReproduction"]:c3(),["ApiRequestLogExpansionShape"]:c4(),["ApiRequestLogResponseShapeMetadata"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogDetailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
