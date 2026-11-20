import { d8058 as c0, d8059 as c1, d8065 as c2, d8070 as c19 } from '../descriptors/data/353.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8696 as c3, d8693 as c7, d8694 as c8, d8695 as c9 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c4, d8050 as c16, d8051 as c17, d8049 as c18 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c5 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8269 as c6 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8835 as c10, d8831 as c11 } from '../descriptors/data/396.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10931 as c12, d10932 as c13, d10933 as c14, d10934 as c15, d10930 as c38 } from '../descriptors/data/520.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8393 as c20 } from '../descriptors/data/372.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10938 as c21, d10939 as c22, d10940 as c23, d10941 as c24 } from '../descriptors/data/521.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8724 as c25, d8716 as c26, d8725 as c27, d8717 as c28, d8718 as c29, d8726 as c30, d8727 as c31, d8728 as c32 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10946 as c33, d10947 as c34, d10948 as c35, d10949 as c36, d10951 as c37, d10954 as c39, d10956 as c41 } from '../descriptors/data/522.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7978 as c40 } from '../descriptors/data/347.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7815 as c42 } from '../descriptors/data/331.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7815 as d7815 } from '../descriptors/data/331.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1455"]:c7(),["SharedCodec1456"]:c8(),["SharedCodec1457"]:c9(),["SharedCodec189"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2956"]:c12(),["SharedCodec2957"]:c13(),["SharedCodec2958"]:c14(),["SharedCodec2959"]:c15(),["SharedCodec3071"]:c16(),["SharedCodec3072"]:c17(),["SharedCodec3073"]:c18(),["SharedCodec3075"]:c19(),["SharedCodec3077"]:c20(),["SharedCodec3210"]:c21(),["SharedCodec3211"]:c22(),["SharedCodec3212"]:c23(),["SharedCodec3213"]:c24(),["SharedCodec481"]:c25(),["SharedCodec482"]:c26(),["SharedCodec483"]:c27(),["SharedCodec484"]:c28(),["SharedCodec485"]:c29(),["SharedCodec497"]:c30(),["SharedCodec498"]:c31(),["SharedCodec499"]:c32(),["SharedCodec582"]:c33(),["SharedCodec583"]:c34(),["SharedCodec584"]:c35(),["SharedCodec585"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
