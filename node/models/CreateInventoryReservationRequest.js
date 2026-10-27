import { d175 as c0 } from '../descriptors/data/9.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4064 as c1, d4066 as c2 } from '../descriptors/data/173.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4085 as c3, d4086 as c4, d4087 as c5, d4088 as c6 } from '../descriptors/data/174.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d175 as d175 } from '../descriptors/data/9.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d175;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReservationRequest"]:c0(),["InventoryReservationOwnerRequest"]:c1(),["InventoryRoutingDemand"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["SharedCodec859"]:c4(),["SharedCodec860"]:c5(),["SharedCodec861"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
