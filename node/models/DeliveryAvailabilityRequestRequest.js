import { d3739 as c0, d3740 as c1 } from '../descriptors/data/158.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3763 as c2 } from '../descriptors/data/159.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3739 as d3739 } from '../descriptors/data/158.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3739;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequestRequest"]:c0(),["DeliveryBlackoutIntervalRequestRequest"]:c1(),["DeliveryWeeklyIntervalRequestRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryAvailabilityRequestRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
