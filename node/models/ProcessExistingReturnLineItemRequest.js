import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4931 as c1 } from '../descriptors/data/224.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4939 as c2, d4940 as c3, d4941 as c4, d4943 as c5 } from '../descriptors/data/225.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4902 as c6 } from '../descriptors/data/222.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4949 as c7, d4950 as c8 } from '../descriptors/data/226.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4894 as c9, d4895 as c10, d4896 as c11, d4897 as c12, d4898 as c13 } from '../descriptors/data/221.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4978 as c14 } from '../descriptors/data/227.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3236 as c15 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4931 as d4931 } from '../descriptors/data/224.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4931;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ProcessExistingReturnLineItemRequest"]:c1(),["ReturnProcessDecision"]:c2(),["ReturnProcessDispositionRequest"]:c3(),["ReturnProcessInspectionRequest"]:c4(),["ReturnProcessResolutionRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["SharedCodec1073"]:c7(),["SharedCodec1074"]:c8(),["SharedCodec1096"]:c9(),["SharedCodec1097"]:c10(),["SharedCodec1098"]:c11(),["SharedCodec1099"]:c12(),["SharedCodec1100"]:c13(),["SharedCodec205"]:c14(),["SharedCodec34"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
