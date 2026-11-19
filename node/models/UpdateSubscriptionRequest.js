import { d8135 as c0, d8133 as c3, d8134 as c12 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8859 as c1 } from '../descriptors/data/398.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9709 as c2, d9711 as c27 } from '../descriptors/data/449.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8246 as c4, d8247 as c5, d8257 as c16, d8258 as c17 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10972 as c6, d10973 as c7, d10953 as c22, d10954 as c23, d10955 as c24 } from '../descriptors/data/523.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9617 as c8, d9618 as c9, d9619 as c26 } from '../descriptors/data/443.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10949 as c10, d10950 as c11 } from '../descriptors/data/522.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8037 as c13, d8038 as c14, d8036 as c15 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10978 as c18, d10979 as c19, d10980 as c20, d10981 as c21 } from '../descriptors/data/524.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d11007 as c25 } from '../descriptors/data/526.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7805 as c28 } from '../descriptors/data/331.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7805 as d7805 } from '../descriptors/data/331.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7805;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec169"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2866"]:c6(),["SharedCodec2867"]:c7(),["SharedCodec2885"]:c8(),["SharedCodec2886"]:c9(),["SharedCodec2972"]:c10(),["SharedCodec2973"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3063"]:c13(),["SharedCodec3064"]:c14(),["SharedCodec3065"]:c15(),["SharedCodec314"]:c16(),["SharedCodec315"]:c17(),["SharedCodec3199"]:c18(),["SharedCodec3200"]:c19(),["SharedCodec3201"]:c20(),["SharedCodec3202"]:c21(),["SharedCodec592"]:c22(),["SharedCodec593"]:c23(),["SharedCodec594"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
