import { d8045 as c0, d8046 as c1, d8052 as c2, d8057 as c19 } from '../descriptors/data/353.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8684 as c3, d8681 as c7, d8682 as c8, d8683 as c9 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c4, d8037 as c16, d8038 as c17, d8036 as c18 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c5 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8256 as c6 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8822 as c10, d8818 as c11 } from '../descriptors/data/396.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10900 as c12, d10901 as c13, d10902 as c14, d10903 as c15, d10907 as c21, d10908 as c22, d10909 as c23, d10910 as c24, d10899 as c38 } from '../descriptors/data/519.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8380 as c20 } from '../descriptors/data/372.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8711 as c25, d8712 as c27, d8713 as c30, d8714 as c31, d8715 as c32 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8703 as c26, d8704 as c28, d8705 as c29 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10915 as c33, d10916 as c34, d10917 as c35, d10918 as c36, d10920 as c37 } from '../descriptors/data/520.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10923 as c39, d10925 as c41 } from '../descriptors/data/521.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7965 as c40 } from '../descriptors/data/347.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7804 as c42 } from '../descriptors/data/331.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7804 as d7804 } from '../descriptors/data/331.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7804;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1454"]:c7(),["SharedCodec1455"]:c8(),["SharedCodec1456"]:c9(),["SharedCodec189"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2948"]:c12(),["SharedCodec2949"]:c13(),["SharedCodec2950"]:c14(),["SharedCodec2951"]:c15(),["SharedCodec3063"]:c16(),["SharedCodec3064"]:c17(),["SharedCodec3065"]:c18(),["SharedCodec3067"]:c19(),["SharedCodec3069"]:c20(),["SharedCodec3195"]:c21(),["SharedCodec3196"]:c22(),["SharedCodec3197"]:c23(),["SharedCodec3198"]:c24(),["SharedCodec481"]:c25(),["SharedCodec482"]:c26(),["SharedCodec483"]:c27(),["SharedCodec484"]:c28(),["SharedCodec485"]:c29(),["SharedCodec497"]:c30(),["SharedCodec498"]:c31(),["SharedCodec499"]:c32(),["SharedCodec581"]:c33(),["SharedCodec582"]:c34(),["SharedCodec583"]:c35(),["SharedCodec584"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
