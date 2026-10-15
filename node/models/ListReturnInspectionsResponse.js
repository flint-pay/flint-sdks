import { d1762 as c0, d323 as c1, d1823 as c2, d1824 as c3, d2178 as c4, d2179 as c5, d2184 as c6, d2186 as c7, d2198 as c8, d2199 as c9, d2196 as c10, d14 as c11, d1822 as c12, d2197 as c13 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1762 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1762;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnInspectionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnInspection"]:c8(),["ReturnInspectionLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec467"]:c12(),["SharedCodec529"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnInspectionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
