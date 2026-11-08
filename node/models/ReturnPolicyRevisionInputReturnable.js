import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1305 as c1 } from '../descriptors/data/60.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7914 as c2, d7916 as c3, d7918 as c4, d7920 as c5 } from '../descriptors/data/378.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7925 as c6, d7926 as c7, d7927 as c8, d7928 as c9, d7929 as c10, d7930 as c11, d7931 as c12, d7934 as c13, d7935 as c14, d7936 as c15, d7937 as c16 } from '../descriptors/data/379.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1305 as d1305 } from '../descriptors/data/60.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1370"]:c6(),["SharedCodec1371"]:c7(),["SharedCodec1372"]:c8(),["SharedCodec1373"]:c9(),["SharedCodec1374"]:c10(),["SharedCodec1375"]:c11(),["SharedCodec1376"]:c12(),["SharedCodec1379"]:c13(),["SharedCodec1380"]:c14(),["SharedCodec1381"]:c15(),["SharedCodec1382"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
