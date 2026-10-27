import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4924 as c1, d4916 as c2, d4917 as c3, d4918 as c4, d4919 as c5, d4920 as c6 } from '../descriptors/data/223.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4926 as c7, d4927 as c8, d4928 as c9 } from '../descriptors/data/224.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3250 as c10 } from '../descriptors/data/130.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4924 as d4924 } from '../descriptors/data/223.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4924;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemRequest"]:c1(),["SharedCodec1104"]:c2(),["SharedCodec1105"]:c3(),["SharedCodec1106"]:c4(),["SharedCodec1107"]:c5(),["SharedCodec1108"]:c6(),["SharedCodec1109"]:c7(),["SharedCodec1110"]:c8(),["SharedCodec1111"]:c9(),["SharedCodec38"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
