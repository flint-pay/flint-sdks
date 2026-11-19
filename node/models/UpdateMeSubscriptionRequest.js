import { d8135 as c0, d8133 as c2, d8134 as c7 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8859 as c1 } from '../descriptors/data/398.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8246 as c3, d8247 as c4 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9617 as c5, d9618 as c6, d9619 as c8 } from '../descriptors/data/443.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9711 as c9 } from '../descriptors/data/449.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7758 as c10 } from '../descriptors/data/327.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7758 as d7758 } from '../descriptors/data/327.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec2"]:c2(),["SharedCodec232"]:c3(),["SharedCodec233"]:c4(),["SharedCodec2885"]:c5(),["SharedCodec2886"]:c6(),["SharedCodec3"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8(),["SubscriptionDeliveryRequest"]:c9(),["UpdateMeSubscriptionRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMeSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
