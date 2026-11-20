import { d8048 as c0 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c1 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8269 as c2 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8835 as c3, d8831 as c4 } from '../descriptors/data/396.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10931 as c5, d10932 as c6, d10933 as c7, d10934 as c8 } from '../descriptors/data/520.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10938 as c9, d10939 as c10, d10940 as c11 } from '../descriptors/data/521.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8724 as c12, d8716 as c13, d8725 as c14, d8717 as c15, d8718 as c16, d8726 as c17, d8727 as c18, d8728 as c19 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7978 as c20 } from '../descriptors/data/347.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10956 as c21 } from '../descriptors/data/522.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10956 as d10956 } from '../descriptors/data/522.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10956;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec189"]:c3(),["SharedCodec190"]:c4(),["SharedCodec2956"]:c5(),["SharedCodec2957"]:c6(),["SharedCodec2958"]:c7(),["SharedCodec2959"]:c8(),["SharedCodec3210"]:c9(),["SharedCodec3211"]:c10(),["SharedCodec3212"]:c11(),["SharedCodec481"]:c12(),["SharedCodec482"]:c13(),["SharedCodec483"]:c14(),["SharedCodec484"]:c15(),["SharedCodec485"]:c16(),["SharedCodec497"]:c17(),["SharedCodec498"]:c18(),["SharedCodec499"]:c19(),["TextModifierRequest"]:c20(),["UpdateSubscriptionPlanLineItemRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
