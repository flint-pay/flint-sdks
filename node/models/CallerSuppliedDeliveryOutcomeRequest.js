import { d3101 as c0, d3113 as c1 } from '../descriptors/data/122.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3127 as c3, d3128 as c4, d3129 as c5 } from '../descriptors/data/123.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3101 as d3101 } from '../descriptors/data/122.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec43"]:c3(),["SharedCodec44"]:c4(),["SharedCodec45"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
