import { d6020 as c0, d6018 as c5, d6019 as c6 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6669 as c1 } from '../descriptors/data/306.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d242 as c2 } from '../descriptors/data/12.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6673 as c3 } from '../descriptors/data/307.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6692 as c4 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d242 as d242 } from '../descriptors/data/12.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliverySelectionChoiceRequest"]:c1(),["CreateDeliverySelectionRequest"]:c2(),["DeliverySelectionInstructionsRequest"]:c3(),["DeliverySelectionRecipientRequest"]:c4(),["SharedCodec0"]:c5(),["SharedCodec1"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
