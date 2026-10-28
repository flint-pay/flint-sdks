import { d3751 as c0, d3752 as c1, d3753 as c2, d3754 as c3, d3755 as c4, d3767 as c5 } from '../descriptors/data/159.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3768 as c6, d3769 as c7, d3770 as c8, d3771 as c9, d3772 as c10, d3773 as c11, d3774 as c12, d3775 as c13 } from '../descriptors/data/160.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3755 as d3755 } from '../descriptors/data/159.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3755;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec118"]:c5(),["SharedCodec119"]:c6(),["SharedCodec120"]:c7(),["SharedCodec121"]:c8(),["SharedCodec122"]:c9(),["SharedCodec123"]:c10(),["SharedCodec124"]:c11(),["SharedCodec125"]:c12(),["SharedCodec126"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
