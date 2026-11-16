import { d6844 as c0, d6842 as c3, d6843 as c4 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d287 as c1 } from '../descriptors/data/15.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7534 as c2 } from '../descriptors/data/347.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6953 as c5, d6954 as c6 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8291 as c7, d8292 as c8, d8293 as c13 } from '../descriptors/data/393.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8273 as c9, d8274 as c10, d8275 as c11, d8276 as c12, d8279 as c16 } from '../descriptors/data/392.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8373 as c14, d8375 as c15 } from '../descriptors/data/397.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d287 as d287 } from '../descriptors/data/15.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec188"]:c5(),["SharedCodec189"]:c6(),["SharedCodec2267"]:c7(),["SharedCodec2268"]:c8(),["SharedCodec406"]:c9(),["SharedCodec407"]:c10(),["SharedCodec408"]:c11(),["SharedCodec409"]:c12(),["SubscriptionDeliveryDestinationRequest"]:c13(),["SubscriptionDeliveryRequest"]:c14(),["SubscriptionQuantityChangeLineItemRequest"]:c15(),["SubscriptionSwapPreviewRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
