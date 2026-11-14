import { d6021 as c0, d6019 as c5, d6020 as c6 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6670 as c1 } from '../descriptors/data/309.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d242 as c2 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6674 as c3 } from '../descriptors/data/310.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6693 as c4 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d242 as d242 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliverySelectionChoiceRequest"]:c1(),["CreateDeliverySelectionRequest"]:c2(),["DeliverySelectionInstructionsRequest"]:c3(),["DeliverySelectionRecipientRequest"]:c4(),["SharedCodec0"]:c5(),["SharedCodec1"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
