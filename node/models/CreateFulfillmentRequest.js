import { d6021 as c0, d6019 as c13, d6020 as c14 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6828 as c1, d6829 as c2, d6830 as c5, d6831 as c6, d6832 as c8, d6833 as c9 } from '../descriptors/data/320.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d252 as c3 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6880 as c4, d6881 as c12, d6882 as c22, d6883 as c26, d6884 as c27, d6876 as c28, d6877 as c29, d6878 as c30 } from '../descriptors/data/324.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6548 as c7, d6549 as c31 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6834 as c10, d6835 as c15, d6836 as c16 } from '../descriptors/data/321.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c11 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6868 as c17, d6869 as c18, d6870 as c19, d6871 as c20, d6872 as c21, d6873 as c23, d6874 as c24, d6875 as c25 } from '../descriptors/data/323.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d252 as d252 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d252;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1551"]:c15(),["SharedCodec1552"]:c16(),["SharedCodec267"]:c17(),["SharedCodec268"]:c18(),["SharedCodec269"]:c19(),["SharedCodec270"]:c20(),["SharedCodec271"]:c21(),["SharedCodec360"]:c22(),["SharedCodec746"]:c23(),["SharedCodec747"]:c24(),["SharedCodec748"]:c25(),["SharedCodec749"]:c26(),["SharedCodec750"]:c27(),["SharedCodec751"]:c28(),["SharedCodec752"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
