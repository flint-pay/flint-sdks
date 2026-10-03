import { d2138 as c0, d2233 as c1 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2138 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2138;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnHandoffRequirementLineItem"]:c0(),["ReturnShipmentLineItemAllocation"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnHandoffRequirementLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
