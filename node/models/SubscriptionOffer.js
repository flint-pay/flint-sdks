import { d487 as c0, d486 as c1, d2385 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2385 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2385;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec167"]:c0(),["SharedCodec168"]:c1(),["SubscriptionOffer"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOffer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
