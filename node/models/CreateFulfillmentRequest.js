import { d6844 as c0, d6842 as c13, d6843 as c14 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7659 as c1, d7660 as c2, d7661 as c5, d7662 as c6, d7663 as c8, d7664 as c9 } from '../descriptors/data/355.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d251 as c3 } from '../descriptors/data/12.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7711 as c4, d7712 as c12, d7713 as c22, d7714 as c26, d7715 as c27, d7707 as c28, d7708 as c29, d7709 as c30 } from '../descriptors/data/359.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7383 as c7, d7384 as c31 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7665 as c10, d7666 as c15, d7667 as c16 } from '../descriptors/data/356.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c11 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7699 as c17, d7700 as c18, d7701 as c19, d7702 as c20, d7703 as c21, d7704 as c23, d7705 as c24, d7706 as c25 } from '../descriptors/data/358.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d251 as d251 } from '../descriptors/data/12.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d251;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec2202"]:c15(),["SharedCodec2203"]:c16(),["SharedCodec351"]:c17(),["SharedCodec352"]:c18(),["SharedCodec353"]:c19(),["SharedCodec354"]:c20(),["SharedCodec355"]:c21(),["SharedCodec444"]:c22(),["SharedCodec970"]:c23(),["SharedCodec971"]:c24(),["SharedCodec972"]:c25(),["SharedCodec973"]:c26(),["SharedCodec974"]:c27(),["SharedCodec975"]:c28(),["SharedCodec976"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
