import { d4404 as c0, d4405 as c4, d4406 as c5 } from '../descriptors/data/192.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d210 as c1 } from '../descriptors/data/12.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4901 as c2, d4908 as c21 } from '../descriptors/data/222.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4924 as c6, d4916 as c13, d4917 as c14, d4918 as c15, d4919 as c16, d4920 as c17, d4913 as c22, d4914 as c24 } from '../descriptors/data/223.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4925 as c7, d4926 as c18, d4927 as c19, d4928 as c20, d4929 as c23, d4930 as c25, d4931 as c26 } from '../descriptors/data/224.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4416 as c8, d4408 as c9, d4409 as c10, d4410 as c11, d4411 as c12, d4417 as c28 } from '../descriptors/data/193.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3250 as c27 } from '../descriptors/data/130.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d210 as d210 } from '../descriptors/data/12.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestEligibility"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec1070"]:c9(),["SharedCodec1071"]:c10(),["SharedCodec1072"]:c11(),["SharedCodec1073"]:c12(),["SharedCodec1104"]:c13(),["SharedCodec1105"]:c14(),["SharedCodec1106"]:c15(),["SharedCodec1107"]:c16(),["SharedCodec1108"]:c17(),["SharedCodec1109"]:c18(),["SharedCodec1110"]:c19(),["SharedCodec1111"]:c20(),["SharedCodec200"]:c21(),["SharedCodec205"]:c22(),["SharedCodec206"]:c23(),["SharedCodec207"]:c24(),["SharedCodec208"]:c25(),["SharedCodec209"]:c26(),["SharedCodec38"]:c27(),["SharedCodec9"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
