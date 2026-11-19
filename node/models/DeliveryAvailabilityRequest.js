import { d8577 as c0, d8578 as c1 } from '../descriptors/data/381.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8602 as c2 } from '../descriptors/data/382.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8577 as d8577 } from '../descriptors/data/381.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8577;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequest"]:c0(),["DeliveryBlackoutIntervalRequest"]:c1(),["DeliveryWeeklyIntervalRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryAvailabilityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
