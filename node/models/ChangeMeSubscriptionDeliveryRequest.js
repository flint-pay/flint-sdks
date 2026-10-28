import { d88 as c0 } from '../descriptors/data/3.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3293 as c1 } from '../descriptors/data/131.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4206 as c2, d4207 as c5, d4208 as c6 } from '../descriptors/data/179.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4432 as c3, d4433 as c4, d4435 as c7, d4436 as c8 } from '../descriptors/data/194.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d88 as d88 } from '../descriptors/data/3.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d88;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeMeSubscriptionDeliveryRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["OrderDeliveryDestinationAddressRequest"]:c2(),["SharedCodec1146"]:c3(),["SharedCodec1147"]:c4(),["SharedCodec973"]:c5(),["SharedCodec974"]:c6(),["SubscriptionDeliveryDestinationRequest"]:c7(),["SubscriptionDeliveryRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeMeSubscriptionDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
