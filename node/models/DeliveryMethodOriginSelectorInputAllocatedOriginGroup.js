import { d499 as c0 } from '../descriptors/data/29.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7282 as c1, d7283 as c2 } from '../descriptors/data/333.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7309 as c3, d7310 as c4, d7311 as c5 } from '../descriptors/data/334.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d499 as d499 } from '../descriptors/data/29.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d499;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroup"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c2(),["SharedCodec337"]:c3(),["SharedCodec338"]:c4(),["SharedCodec339"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
