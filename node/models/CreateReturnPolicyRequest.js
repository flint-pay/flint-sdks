import { d323 as c0 } from '../descriptors/data/18.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c1 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c2 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7912 as c3, d7914 as c4, d7916 as c5, d7918 as c6, d7920 as c7 } from '../descriptors/data/378.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7923 as c8, d7924 as c9, d7925 as c10, d7926 as c11, d7927 as c12, d7928 as c13, d7929 as c14, d7930 as c15, d7931 as c16, d7932 as c17, d7933 as c18, d7934 as c19, d7935 as c20, d7936 as c21, d7937 as c22 } from '../descriptors/data/379.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d323 as d323 } from '../descriptors/data/18.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec1368"]:c8(),["SharedCodec1369"]:c9(),["SharedCodec1370"]:c10(),["SharedCodec1371"]:c11(),["SharedCodec1372"]:c12(),["SharedCodec1373"]:c13(),["SharedCodec1374"]:c14(),["SharedCodec1375"]:c15(),["SharedCodec1376"]:c16(),["SharedCodec1377"]:c17(),["SharedCodec1378"]:c18(),["SharedCodec1379"]:c19(),["SharedCodec1380"]:c20(),["SharedCodec1381"]:c21(),["SharedCodec1382"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
