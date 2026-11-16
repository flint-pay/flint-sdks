import { d7957 as c0, d7955 as c20, d7956 as c23 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8772 as c1, d8773 as c2, d8774 as c5, d8775 as c6, d8776 as c8, d8777 as c9 } from '../descriptors/data/391.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d284 as c3 } from '../descriptors/data/14.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8824 as c4, d8825 as c12, d8827 as c16, d8828 as c17, d8826 as c24, d8822 as c25 } from '../descriptors/data/395.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8496 as c7, d8497 as c26 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8778 as c10, d8779 as c13, d8780 as c14, d8781 as c15, d8782 as c18, d8783 as c19, d8784 as c21, d8785 as c22 } from '../descriptors/data/392.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c11 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d284 as d284 } from '../descriptors/data/14.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d284;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestLocalDelivery"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1275"]:c13(),["SharedCodec1276"]:c14(),["SharedCodec1277"]:c15(),["SharedCodec1278"]:c16(),["SharedCodec1279"]:c17(),["SharedCodec1283"]:c18(),["SharedCodec1284"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2818"]:c21(),["SharedCodec2819"]:c22(),["SharedCodec3"]:c23(),["SharedCodec521"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestLocalDelivery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
