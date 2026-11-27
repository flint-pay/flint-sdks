import { d8237 as c0, d8235 as c3, d8236 as c8 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d328 as c1 } from '../descriptors/data/18.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8964 as c2 } from '../descriptors/data/403.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8349 as c4, d8350 as c5 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9735 as c6, d9736 as c7, d9737 as c14, d9722 as c17 } from '../descriptors/data/449.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9714 as c9, d9715 as c10, d9716 as c11, d9717 as c12, d9718 as c13 } from '../descriptors/data/448.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9831 as c15, d9833 as c16 } from '../descriptors/data/455.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d328 as d328 } from '../descriptors/data/18.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d328;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec235"]:c4(),["SharedCodec236"]:c5(),["SharedCodec2948"]:c6(),["SharedCodec2949"]:c7(),["SharedCodec3"]:c8(),["SharedCodec480"]:c9(),["SharedCodec481"]:c10(),["SharedCodec482"]:c11(),["SharedCodec483"]:c12(),["SharedCodec484"]:c13(),["SubscriptionDeliveryDestinationRequest"]:c14(),["SubscriptionDeliveryRequest"]:c15(),["SubscriptionQuantityChangeLineItemRequest"]:c16(),["SubscriptionSwapPreviewRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
