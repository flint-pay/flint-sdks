import { d421 as c0, d69 as c1, d2031 as c2, d2034 as c3, d2070 as c4, d2072 as c5, d2073 as c6, d1985 as c7, d1984 as c8, d2025 as c9, d2024 as c10, d2030 as c11, d2028 as c12, d2027 as c13, d2026 as c14, d2029 as c15, d2032 as c16, d2033 as c17 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d421 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d421;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MoneyValue"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec489"]:c7(),["SharedCodec490"]:c8(),["SharedCodec516"]:c9(),["SharedCodec517"]:c10(),["SharedCodec518"]:c11(),["SharedCodec519"]:c12(),["SharedCodec520"]:c13(),["SharedCodec521"]:c14(),["SharedCodec522"]:c15(),["SharedCodec523"]:c16(),["SharedCodec524"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
