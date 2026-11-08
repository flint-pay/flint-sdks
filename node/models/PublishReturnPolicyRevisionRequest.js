import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1227 as c1 } from '../descriptors/data/56.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7912 as c2, d7914 as c3, d7916 as c4, d7918 as c5, d7920 as c6 } from '../descriptors/data/378.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7923 as c7, d7924 as c8, d7925 as c9, d7926 as c10, d7927 as c11, d7928 as c12, d7929 as c13, d7930 as c14, d7931 as c15, d7932 as c16, d7933 as c17, d7934 as c18, d7935 as c19, d7936 as c20, d7937 as c21 } from '../descriptors/data/379.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1227 as d1227 } from '../descriptors/data/56.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec1368"]:c7(),["SharedCodec1369"]:c8(),["SharedCodec1370"]:c9(),["SharedCodec1371"]:c10(),["SharedCodec1372"]:c11(),["SharedCodec1373"]:c12(),["SharedCodec1374"]:c13(),["SharedCodec1375"]:c14(),["SharedCodec1376"]:c15(),["SharedCodec1377"]:c16(),["SharedCodec1378"]:c17(),["SharedCodec1379"]:c18(),["SharedCodec1380"]:c19(),["SharedCodec1381"]:c20(),["SharedCodec1382"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
