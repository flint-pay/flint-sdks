import { d1592 as c0, d69 as c1, d1646 as c2, d1645 as c3, d1959 as c4, d1960 as c5, d2020 as c6, d2018 as c7, d2034 as c8, d2070 as c9, d2072 as c10, d2073 as c11, d2019 as c12, d2032 as c13, d2033 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1592 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1592;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnPoliciesResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec515"]:c12(),["SharedCodec523"]:c13(),["SharedCodec524"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnPoliciesResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
