import { d6844 as c0, d6842 as c3, d6843 as c4 } from '../descriptors/data/306.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d287 as c1 } from '../descriptors/data/15.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7534 as c2 } from '../descriptors/data/344.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6953 as c5, d6954 as c6 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8291 as c7, d8292 as c8, d8273 as c9, d8274 as c10, d8275 as c11, d8276 as c12, d8279 as c16 } from '../descriptors/data/389.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8293 as c13 } from '../descriptors/data/390.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8373 as c14, d8375 as c15 } from '../descriptors/data/393.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d287 as d287 } from '../descriptors/data/15.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec188"]:c5(),["SharedCodec189"]:c6(),["SharedCodec2267"]:c7(),["SharedCodec2268"]:c8(),["SharedCodec406"]:c9(),["SharedCodec407"]:c10(),["SharedCodec408"]:c11(),["SharedCodec409"]:c12(),["SubscriptionDeliveryDestinationRequest"]:c13(),["SubscriptionDeliveryRequest"]:c14(),["SubscriptionQuantityChangeLineItemRequest"]:c15(),["SubscriptionSwapPreviewRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
