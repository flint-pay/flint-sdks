import { d837 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2162 as c4, d2163 as c5, d2168 as c6, d2170 as c7, d2182 as c8, d2183 as c9, d2180 as c10, d14 as c11, d1819 as c12, d2181 as c13 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d837 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d837;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnInspectionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnInspection"]:c8(),["ReturnInspectionLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec466"]:c12(),["SharedCodec524"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnInspectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
