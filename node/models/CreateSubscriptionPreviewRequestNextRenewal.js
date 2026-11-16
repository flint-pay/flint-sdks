import { d6844 as c0, d6842 as c3, d6843 as c4 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d383 as c1 } from '../descriptors/data/24.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7534 as c2 } from '../descriptors/data/347.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8291 as c5, d8292 as c6, d8293 as c7 } from '../descriptors/data/393.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8373 as c8 } from '../descriptors/data/397.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d383 as d383 } from '../descriptors/data/24.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestNextRenewal"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec2267"]:c5(),["SharedCodec2268"]:c6(),["SubscriptionDeliveryDestinationRequest"]:c7(),["SubscriptionDeliveryRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestNextRenewal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
