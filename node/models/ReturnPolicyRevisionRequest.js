import { d69 as c0, d2031 as c1, d2034 as c2, d2070 as c3, d2072 as c4, d2073 as c5, d1985 as c6, d1984 as c7, d2025 as c8, d2024 as c9, d2030 as c10, d2028 as c11, d2027 as c12, d2026 as c13, d2029 as c14, d2032 as c15, d2033 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2031 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2031;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec489"]:c6(),["SharedCodec490"]:c7(),["SharedCodec516"]:c8(),["SharedCodec517"]:c9(),["SharedCodec518"]:c10(),["SharedCodec519"]:c11(),["SharedCodec520"]:c12(),["SharedCodec521"]:c13(),["SharedCodec522"]:c14(),["SharedCodec523"]:c15(),["SharedCodec524"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
