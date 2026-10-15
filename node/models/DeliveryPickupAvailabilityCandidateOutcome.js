import { d558 as c0, d559 as c1, d590 as c2, d592 as c3, d625 as c4, d724 as c5, d323 as c6, d591 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d625 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d625;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryInputConstraint"]:c2(),["DeliveryInputRequirement"]:c3(),["DeliveryPickupAvailabilityCandidateOutcome"]:c4(),["DeliveryWindowResource"]:c5(),["MoneyValue"]:c6(),["SharedCodec186"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityCandidateOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
