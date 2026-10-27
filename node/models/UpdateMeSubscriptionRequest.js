import { d3293 as c0, d3294 as c4, d3295 as c5 } from '../descriptors/data/131.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4206 as c1, d4207 as c6, d4208 as c7 } from '../descriptors/data/179.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4432 as c2, d4433 as c3, d4435 as c8, d4436 as c9 } from '../descriptors/data/194.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2457 as c10 } from '../descriptors/data/98.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2457 as d2457 } from '../descriptors/data/98.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2457;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliverySelectionRecipientRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec1146"]:c2(),["SharedCodec1147"]:c3(),["SharedCodec47"]:c4(),["SharedCodec48"]:c5(),["SharedCodec973"]:c6(),["SharedCodec974"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8(),["SubscriptionDeliveryRequest"]:c9(),["UpdateMeSubscriptionRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMeSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
