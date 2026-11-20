import { d8148 as c0, d8146 as c3, d8147 as c12 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8872 as c1 } from '../descriptors/data/398.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9732 as c2, d9734 as c27 } from '../descriptors/data/450.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8259 as c4, d8260 as c5, d8270 as c16, d8271 as c17 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d11003 as c6, d11004 as c7 } from '../descriptors/data/525.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9639 as c8, d9640 as c9, d9641 as c26 } from '../descriptors/data/444.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10980 as c10, d10981 as c11, d10984 as c22, d10985 as c23, d10986 as c24 } from '../descriptors/data/524.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8050 as c13, d8051 as c14, d8049 as c15 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d11009 as c18, d11010 as c19, d11011 as c20, d11012 as c21 } from '../descriptors/data/526.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d11038 as c25 } from '../descriptors/data/528.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7816 as c28 } from '../descriptors/data/331.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7816 as d7816 } from '../descriptors/data/331.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7816;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec169"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2874"]:c6(),["SharedCodec2875"]:c7(),["SharedCodec2893"]:c8(),["SharedCodec2894"]:c9(),["SharedCodec2980"]:c10(),["SharedCodec2981"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3071"]:c13(),["SharedCodec3072"]:c14(),["SharedCodec3073"]:c15(),["SharedCodec314"]:c16(),["SharedCodec315"]:c17(),["SharedCodec3214"]:c18(),["SharedCodec3215"]:c19(),["SharedCodec3216"]:c20(),["SharedCodec3217"]:c21(),["SharedCodec593"]:c22(),["SharedCodec594"]:c23(),["SharedCodec595"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
