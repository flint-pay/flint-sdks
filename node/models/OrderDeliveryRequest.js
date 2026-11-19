import { d8135 as c0, d8133 as c4, d8134 as c7 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8859 as c1 } from '../descriptors/data/398.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c2 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9884 as c3 } from '../descriptors/data/459.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9617 as c5, d9618 as c6, d9619 as c8 } from '../descriptors/data/443.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9884 as d9884 } from '../descriptors/data/459.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9884;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["MoneyValue"]:c2(),["OrderDeliveryRequest"]:c3(),["SharedCodec2"]:c4(),["SharedCodec2885"]:c5(),["SharedCodec2886"]:c6(),["SharedCodec3"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
