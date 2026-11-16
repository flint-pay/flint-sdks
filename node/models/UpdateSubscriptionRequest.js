import { d6844 as c0, d6842 as c2, d6843 as c3 } from '../descriptors/data/306.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7534 as c1 } from '../descriptors/data/344.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8371 as c4, d8373 as c27 } from '../descriptors/data/393.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6953 as c5, d6954 as c6, d6963 as c20 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9600 as c7, d9601 as c8 } from '../descriptors/data/466.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8291 as c9, d8292 as c10 } from '../descriptors/data/389.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9575 as c11, d9576 as c12, d9579 as c22, d9580 as c23, d9581 as c24 } from '../descriptors/data/465.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6746 as c13, d6747 as c14, d6745 as c15 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9604 as c16, d9605 as c17, d9606 as c18, d9607 as c19 } from '../descriptors/data/467.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6964 as c21 } from '../descriptors/data/313.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9632 as c25 } from '../descriptors/data/469.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8293 as c26 } from '../descriptors/data/390.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6539 as c28 } from '../descriptors/data/285.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6539 as d6539 } from '../descriptors/data/285.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6539;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec136"]:c4(),["SharedCodec188"]:c5(),["SharedCodec189"]:c6(),["SharedCodec2250"]:c7(),["SharedCodec2251"]:c8(),["SharedCodec2267"]:c9(),["SharedCodec2268"]:c10(),["SharedCodec2332"]:c11(),["SharedCodec2333"]:c12(),["SharedCodec2404"]:c13(),["SharedCodec2405"]:c14(),["SharedCodec2406"]:c15(),["SharedCodec2539"]:c16(),["SharedCodec2540"]:c17(),["SharedCodec2541"]:c18(),["SharedCodec2542"]:c19(),["SharedCodec259"]:c20(),["SharedCodec260"]:c21(),["SharedCodec527"]:c22(),["SharedCodec528"]:c23(),["SharedCodec529"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
