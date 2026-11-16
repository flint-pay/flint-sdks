import { d7867 as c0, d7865 as c20, d7866 as c23 } from '../descriptors/data/342.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8682 as c1, d8683 as c2, d8684 as c5, d8685 as c6, d8686 as c8, d8687 as c9 } from '../descriptors/data/388.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d282 as c3 } from '../descriptors/data/13.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8734 as c4, d8735 as c12, d8737 as c16, d8738 as c17, d8731 as c28, d8736 as c29, d8732 as c30 } from '../descriptors/data/392.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8406 as c7, d8407 as c31 } from '../descriptors/data/371.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8688 as c10, d8689 as c13, d8690 as c14, d8691 as c15, d8692 as c18, d8693 as c19, d8694 as c21, d8695 as c22 } from '../descriptors/data/389.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7767 as c11 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8727 as c24, d8728 as c25, d8729 as c26, d8730 as c27 } from '../descriptors/data/391.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d282 as d282 } from '../descriptors/data/13.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1244"]:c13(),["SharedCodec1245"]:c14(),["SharedCodec1246"]:c15(),["SharedCodec1247"]:c16(),["SharedCodec1248"]:c17(),["SharedCodec1252"]:c18(),["SharedCodec1253"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2741"]:c21(),["SharedCodec2742"]:c22(),["SharedCodec3"]:c23(),["SharedCodec408"]:c24(),["SharedCodec409"]:c25(),["SharedCodec410"]:c26(),["SharedCodec411"]:c27(),["SharedCodec412"]:c28(),["SharedCodec501"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
