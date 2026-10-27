import { d3549 as c0 } from '../descriptors/data/145.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3549 as d3549 } from '../descriptors/data/145.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3549;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCallbackPricingStrategyRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCallbackPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
