import { d3547 as c0 } from '../descriptors/data/145.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3564 as c1 } from '../descriptors/data/146.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3564 as d3564 } from '../descriptors/data/146.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBusinessDayRange"]:c0(),["DeliveryTransitTimeRule"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTransitTimeRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
