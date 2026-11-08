import { d5596 as c0 } from '../descriptors/data/251.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4299 as c1 } from '../descriptors/data/180.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5064 as c2, d5065 as c3, d5066 as c4, d5067 as c5, d5068 as c6, d5069 as c10, d5070 as c11, d5071 as c12, d5072 as c13, d5082 as c18, d5083 as c20, d5084 as c21, d5073 as c22, d5074 as c23, d5075 as c24, d5076 as c25, d5077 as c26, d5078 as c27, d5079 as c28, d5080 as c29, d5081 as c34 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c7 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c8 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5058 as c9, d5059 as c14, d5060 as c15, d5061 as c16, d5062 as c17, d5063 as c19 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5638 as c30, d5639 as c31, d5640 as c32 } from '../descriptors/data/254.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4578 as c33 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c35, d4362 as c36 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5596 as d5596 } from '../descriptors/data/251.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5596;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["Dimensions"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequest"]:c5(),["LineItemFulfillmentRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequest"]:c10(),["OrderDraftLineItemTaxRequest"]:c11(),["OrderDraftTaxComponentRequest"]:c12(),["OrderDraftTaxJurisdictionRequest"]:c13(),["SharedCodec252"]:c14(),["SharedCodec253"]:c15(),["SharedCodec254"]:c16(),["SharedCodec255"]:c17(),["SharedCodec256"]:c18(),["SharedCodec257"]:c19(),["SharedCodec258"]:c20(),["SharedCodec259"]:c21(),["SharedCodec261"]:c22(),["SharedCodec262"]:c23(),["SharedCodec263"]:c24(),["SharedCodec264"]:c25(),["SharedCodec266"]:c26(),["SharedCodec267"]:c27(),["SharedCodec269"]:c28(),["SharedCodec270"]:c29(),["SharedCodec271"]:c30(),["SharedCodec272"]:c31(),["SharedCodec273"]:c32(),["SharedCodec604"]:c33(),["SubscribedLineRequest"]:c34(),["TextModifierRequest"]:c35(),["Weight"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
