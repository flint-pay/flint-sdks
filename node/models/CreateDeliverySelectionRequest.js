import { d323 as c0, d324 as c1, d710 as c2, d712 as c3, d70 as c4 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d324 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d324;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliverySelectionChoiceRequest"]:c0(),["CreateDeliverySelectionRequest"]:c1(),["DeliverySelectionInstructionsRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["PostalAddress"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
