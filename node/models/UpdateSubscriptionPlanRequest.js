import { d8066 as c0, d8067 as c1, d8073 as c2, d8078 as c19 } from '../descriptors/data/353.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8709 as c3, d8706 as c7, d8707 as c8, d8708 as c9 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c4, d8058 as c16, d8059 as c17, d8057 as c18 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c5 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8279 as c6 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8847 as c10, d8843 as c11 } from '../descriptors/data/396.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10947 as c12, d10948 as c13, d10949 as c14, d10950 as c15, d10954 as c21, d10955 as c22, d10956 as c23, d10957 as c24, d10946 as c38 } from '../descriptors/data/520.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8403 as c20 } from '../descriptors/data/372.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8736 as c25, d8728 as c26, d8737 as c27, d8729 as c28, d8730 as c29, d8738 as c30, d8739 as c31, d8740 as c32 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10962 as c33, d10963 as c34, d10964 as c35, d10965 as c36, d10967 as c37 } from '../descriptors/data/521.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10970 as c39, d10972 as c41 } from '../descriptors/data/522.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7986 as c40 } from '../descriptors/data/347.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7824 as c42 } from '../descriptors/data/331.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7824 as d7824 } from '../descriptors/data/331.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7824;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1460"]:c7(),["SharedCodec1461"]:c8(),["SharedCodec1462"]:c9(),["SharedCodec190"]:c10(),["SharedCodec191"]:c11(),["SharedCodec2964"]:c12(),["SharedCodec2965"]:c13(),["SharedCodec2966"]:c14(),["SharedCodec2967"]:c15(),["SharedCodec3079"]:c16(),["SharedCodec3080"]:c17(),["SharedCodec3081"]:c18(),["SharedCodec3083"]:c19(),["SharedCodec3085"]:c20(),["SharedCodec3218"]:c21(),["SharedCodec3219"]:c22(),["SharedCodec3220"]:c23(),["SharedCodec3221"]:c24(),["SharedCodec485"]:c25(),["SharedCodec486"]:c26(),["SharedCodec487"]:c27(),["SharedCodec488"]:c28(),["SharedCodec489"]:c29(),["SharedCodec501"]:c30(),["SharedCodec502"]:c31(),["SharedCodec503"]:c32(),["SharedCodec586"]:c33(),["SharedCodec587"]:c34(),["SharedCodec588"]:c35(),["SharedCodec589"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
