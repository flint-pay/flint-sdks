import { d8135 as c0, d8133 as c3, d8134 as c8 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d325 as c1 } from '../descriptors/data/17.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8859 as c2 } from '../descriptors/data/398.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8246 as c4, d8247 as c5 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9617 as c6, d9618 as c7, d9619 as c14 } from '../descriptors/data/443.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9597 as c9, d9598 as c10, d9599 as c11, d9600 as c12, d9601 as c13, d9604 as c17 } from '../descriptors/data/442.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9711 as c15, d9713 as c16 } from '../descriptors/data/449.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d325 as d325 } from '../descriptors/data/17.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2885"]:c6(),["SharedCodec2886"]:c7(),["SharedCodec3"]:c8(),["SharedCodec469"]:c9(),["SharedCodec470"]:c10(),["SharedCodec471"]:c11(),["SharedCodec472"]:c12(),["SharedCodec473"]:c13(),["SubscriptionDeliveryDestinationRequest"]:c14(),["SubscriptionDeliveryRequest"]:c15(),["SubscriptionQuantityChangeLineItemRequest"]:c16(),["SubscriptionSwapPreviewRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
