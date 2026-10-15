import { d487 as c0, d486 as c1, d2571 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2571 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2571;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec167"]:c0(),["SharedCodec168"]:c1(),["UpdateSubscriptionOfferRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
