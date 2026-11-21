import { d8056 as c0 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8279 as c2 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8847 as c3, d8843 as c4 } from '../descriptors/data/396.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10947 as c5, d10948 as c6, d10949 as c7, d10950 as c8, d10954 as c9, d10955 as c10, d10956 as c11 } from '../descriptors/data/520.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8736 as c12, d8728 as c13, d8737 as c14, d8729 as c15, d8730 as c16, d8738 as c17, d8739 as c18, d8740 as c19 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7986 as c20 } from '../descriptors/data/347.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10972 as c21 } from '../descriptors/data/522.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10972 as d10972 } from '../descriptors/data/522.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10972;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec190"]:c3(),["SharedCodec191"]:c4(),["SharedCodec2964"]:c5(),["SharedCodec2965"]:c6(),["SharedCodec2966"]:c7(),["SharedCodec2967"]:c8(),["SharedCodec3218"]:c9(),["SharedCodec3219"]:c10(),["SharedCodec3220"]:c11(),["SharedCodec485"]:c12(),["SharedCodec486"]:c13(),["SharedCodec487"]:c14(),["SharedCodec488"]:c15(),["SharedCodec489"]:c16(),["SharedCodec501"]:c17(),["SharedCodec502"]:c18(),["SharedCodec503"]:c19(),["TextModifierRequest"]:c20(),["UpdateSubscriptionPlanLineItemRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
