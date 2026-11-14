import { d5657 as c0 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5657 as d5657 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5657;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateInventoryReservationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
