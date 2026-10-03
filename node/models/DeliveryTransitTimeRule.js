import { d574 as c0, d718 as c1 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d718 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d718;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBusinessDayRange"]:c0(),["DeliveryTransitTimeRule"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTransitTimeRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
