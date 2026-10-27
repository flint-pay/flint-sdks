import { d222 as c0 } from '../descriptors/data/13.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4924 as c2, d4916 as c5, d4917 as c6, d4918 as c7, d4919 as c8, d4920 as c9 } from '../descriptors/data/223.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4925 as c3, d4926 as c10, d4927 as c11, d4928 as c12, d4929 as c13 } from '../descriptors/data/224.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4416 as c4, d4417 as c16 } from '../descriptors/data/193.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5007 as c14 } from '../descriptors/data/229.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3250 as c15 } from '../descriptors/data/130.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d222 as d222 } from '../descriptors/data/13.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestStandard"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec1104"]:c5(),["SharedCodec1105"]:c6(),["SharedCodec1106"]:c7(),["SharedCodec1107"]:c8(),["SharedCodec1108"]:c9(),["SharedCodec1109"]:c10(),["SharedCodec1110"]:c11(),["SharedCodec1111"]:c12(),["SharedCodec206"]:c13(),["SharedCodec210"]:c14(),["SharedCodec38"]:c15(),["SharedCodec9"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
