import { d304 as c0, d305 as c1, d699 as c2, d701 as c3, d66 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d305 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliverySelectionChoiceRequest"]:c0(),["CreateDeliverySelectionRequest"]:c1(),["DeliverySelectionInstructionsRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["PostalAddress"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
