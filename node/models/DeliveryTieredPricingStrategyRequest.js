import { d8608 as c0, d8612 as c1 } from '../descriptors/data/383.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8618 as c3, d8619 as c4, d8620 as c5 } from '../descriptors/data/384.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8612 as d8612 } from '../descriptors/data/383.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBandRequest"]:c0(),["DeliveryTieredPricingStrategyRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec1076"]:c3(),["SharedCodec1083"]:c4(),["SharedCodec1084"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTieredPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
