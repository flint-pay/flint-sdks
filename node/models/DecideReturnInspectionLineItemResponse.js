import { d540 as c0, d837 as c1, d323 as c2, d1820 as c3, d1821 as c4, d2162 as c5, d2163 as c6, d2168 as c7, d2170 as c8, d2182 as c9, d2183 as c10, d2180 as c11, d14 as c12, d1819 as c13, d2181 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d540 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d540;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnInspectionLineItemResponse"]:c0(),["GetReturnInspectionResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["ReturnInspection"]:c9(),["ReturnInspectionLineItem"]:c10(),["ReturnSourceSystem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec466"]:c13(),["SharedCodec524"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnInspectionLineItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
