import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4931 as c1 } from '../descriptors/data/224.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d858 as c2 } from '../descriptors/data/37.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4939 as c3, d4940 as c4, d4941 as c5, d4942 as c6, d4943 as c7 } from '../descriptors/data/225.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4902 as c8 } from '../descriptors/data/222.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4842 as c9, d4844 as c10, d4845 as c11, d4846 as c12 } from '../descriptors/data/218.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4949 as c13, d4950 as c14 } from '../descriptors/data/226.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4894 as c15, d4895 as c16, d4896 as c17, d4897 as c18, d4898 as c19 } from '../descriptors/data/221.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3996 as c20 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4978 as c21 } from '../descriptors/data/227.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3236 as c22 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d858 as d858 } from '../descriptors/data/37.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d858;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ProcessExistingReturnLineItemRequest"]:c1(),["ProcessExistingReturnRequest"]:c2(),["ReturnProcessDecision"]:c3(),["ReturnProcessDispositionRequest"]:c4(),["ReturnProcessInspectionRequest"]:c5(),["ReturnProcessReceiptRequest"]:c6(),["ReturnProcessResolutionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnSourceSystem"]:c9(),["SharedCodec1070"]:c10(),["SharedCodec1071"]:c11(),["SharedCodec1072"]:c12(),["SharedCodec1073"]:c13(),["SharedCodec1074"]:c14(),["SharedCodec1096"]:c15(),["SharedCodec1097"]:c16(),["SharedCodec1098"]:c17(),["SharedCodec1099"]:c18(),["SharedCodec1100"]:c19(),["SharedCodec145"]:c20(),["SharedCodec205"]:c21(),["SharedCodec34"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
