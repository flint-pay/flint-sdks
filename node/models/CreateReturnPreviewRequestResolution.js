import { d4384 as c0, d4385 as c4, d4386 as c5, d4388 as c9, d4389 as c10, d4390 as c11, d4391 as c12 } from '../descriptors/data/191.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d210 as c1 } from '../descriptors/data/11.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4879 as c2 } from '../descriptors/data/220.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c3 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4902 as c6, d4903 as c7, d4904 as c20, d4905 as c22, d4906 as c23 } from '../descriptors/data/222.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4396 as c8, d4397 as c25 } from '../descriptors/data/192.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4894 as c13, d4895 as c14, d4896 as c15, d4897 as c16, d4898 as c17, d4888 as c18, d4891 as c19, d4892 as c21 } from '../descriptors/data/221.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3236 as c24 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d210 as d210 } from '../descriptors/data/11.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec1065"]:c9(),["SharedCodec1066"]:c10(),["SharedCodec1067"]:c11(),["SharedCodec1068"]:c12(),["SharedCodec1096"]:c13(),["SharedCodec1097"]:c14(),["SharedCodec1098"]:c15(),["SharedCodec1099"]:c16(),["SharedCodec1100"]:c17(),["SharedCodec197"]:c18(),["SharedCodec200"]:c19(),["SharedCodec201"]:c20(),["SharedCodec202"]:c21(),["SharedCodec203"]:c22(),["SharedCodec204"]:c23(),["SharedCodec34"]:c24(),["SharedCodec9"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
