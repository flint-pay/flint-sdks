import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7912 as c1, d7914 as c2, d7916 as c3, d7918 as c4, d7920 as c5 } from '../descriptors/data/378.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7923 as c6, d7924 as c7, d7925 as c8, d7926 as c9, d7927 as c10, d7928 as c11, d7929 as c12, d7930 as c13, d7931 as c14, d7932 as c15, d7933 as c16, d7934 as c17, d7935 as c18, d7936 as c19, d7937 as c20 } from '../descriptors/data/379.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7912 as d7912 } from '../descriptors/data/378.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7912;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1368"]:c6(),["SharedCodec1369"]:c7(),["SharedCodec1370"]:c8(),["SharedCodec1371"]:c9(),["SharedCodec1372"]:c10(),["SharedCodec1373"]:c11(),["SharedCodec1374"]:c12(),["SharedCodec1375"]:c13(),["SharedCodec1376"]:c14(),["SharedCodec1377"]:c15(),["SharedCodec1378"]:c16(),["SharedCodec1379"]:c17(),["SharedCodec1380"]:c18(),["SharedCodec1381"]:c19(),["SharedCodec1382"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
