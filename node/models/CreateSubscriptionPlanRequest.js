import { d418 as c0 } from '../descriptors/data/25.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8058 as c1, d8059 as c2, d8065 as c3 } from '../descriptors/data/353.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8696 as c4, d8693 as c8, d8694 as c9, d8695 as c10 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c5 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c6 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8269 as c7 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8835 as c11, d8831 as c12 } from '../descriptors/data/396.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10931 as c13, d10932 as c14, d10933 as c15, d10934 as c16, d10935 as c17, d10930 as c33 } from '../descriptors/data/520.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10936 as c18, d10937 as c19 } from '../descriptors/data/521.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8724 as c20, d8716 as c21, d8725 as c22, d8717 as c23, d8718 as c24, d8726 as c25, d8727 as c26, d8728 as c27 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10946 as c28, d10947 as c29, d10948 as c30, d10949 as c31, d10951 as c32, d10954 as c34, d10955 as c35 } from '../descriptors/data/522.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7978 as c36 } from '../descriptors/data/347.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d418 as d418 } from '../descriptors/data/25.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec1455"]:c8(),["SharedCodec1456"]:c9(),["SharedCodec1457"]:c10(),["SharedCodec189"]:c11(),["SharedCodec190"]:c12(),["SharedCodec2956"]:c13(),["SharedCodec2957"]:c14(),["SharedCodec2958"]:c15(),["SharedCodec2959"]:c16(),["SharedCodec2961"]:c17(),["SharedCodec2962"]:c18(),["SharedCodec2963"]:c19(),["SharedCodec481"]:c20(),["SharedCodec482"]:c21(),["SharedCodec483"]:c22(),["SharedCodec484"]:c23(),["SharedCodec485"]:c24(),["SharedCodec497"]:c25(),["SharedCodec498"]:c26(),["SharedCodec499"]:c27(),["SharedCodec582"]:c28(),["SharedCodec583"]:c29(),["SharedCodec584"]:c30(),["SharedCodec585"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
