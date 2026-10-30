import { d4510 as c0, d4508 as c5, d4509 as c6 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d197 as c1, d198 as c2 } from '../descriptors/data/9.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4650 as c3 } from '../descriptors/data/201.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4645 as c4 } from '../descriptors/data/200.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d198 as d198 } from '../descriptors/data/9.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliverySelectionChoiceRequest"]:c1(),["CreateDeliverySelectionRequest"]:c2(),["DeliverySelectionInstructionsRequest"]:c3(),["DeliverySelectionRecipientRequest"]:c4(),["SharedCodec0"]:c5(),["SharedCodec1"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
