"use client";
import React from "react";
import { useContext } from 'react';
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Section1.module.css";

import { UserContext } from '../contexts/user.context';
import { signOutUser } from '../pages/utils/firebase/firebase.utils';

const _interactionsData = JSON.parse(
  '{"events":{"e-107":{"id":"e-107","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-108"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701143940825},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701151322333},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701176012449},"e-185":{"id":"e-185","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6547e1150d1404495b9400d5|e6d404f7-61bb-0987-42f7-afdde718b18b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6547e1150d1404495b9400d5|e6d404f7-61bb-0987-42f7-afdde718b18b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718742535803},"e-186":{"id":"e-186","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-185"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6547e1150d1404495b9400d5|e6d404f7-61bb-0987-42f7-afdde718b18b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6547e1150d1404495b9400d5|e6d404f7-61bb-0987-42f7-afdde718b18b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718742535803},"e-187":{"id":"e-187","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-188"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fef6a7ef-a6be-4e7a-734c-e68d55d6e84f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fef6a7ef-a6be-4e7a-734c-e68d55d6e84f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718782400031},"e-188":{"id":"e-188","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-187"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fef6a7ef-a6be-4e7a-734c-e68d55d6e84f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fef6a7ef-a6be-4e7a-734c-e68d55d6e84f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718782400031},"e-189":{"id":"e-189","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-46","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d403bb6d-d383-e311-e620-f094d65c8626","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d403bb6d-d383-e311-e620-f094d65c8626","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718782896668},"e-190":{"id":"e-190","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-47","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d403bb6d-d383-e311-e620-f094d65c8626","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d403bb6d-d383-e311-e620-f094d65c8626","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718782896668},"e-191":{"id":"e-191","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6547e33d5fd8fa6155acfa58|ff6b4ea9-ded0-8f36-a4c1-3a1272b8ae1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6547e33d5fd8fa6155acfa58|ff6b4ea9-ded0-8f36-a4c1-3a1272b8ae1c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718825396624},"e-192":{"id":"e-192","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-191"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6547e33d5fd8fa6155acfa58|ff6b4ea9-ded0-8f36-a4c1-3a1272b8ae1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6547e33d5fd8fa6155acfa58|ff6b4ea9-ded0-8f36-a4c1-3a1272b8ae1c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718825396624},"e-193":{"id":"e-193","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-194"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6547e3860c63c2742eadd2a3|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6547e3860c63c2742eadd2a3|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718825412994},"e-194":{"id":"e-194","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-193"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6547e3860c63c2742eadd2a3|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6547e3860c63c2742eadd2a3|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718825412994},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-196"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6564b243a469a975b462aee9|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6564b243a469a975b462aee9|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718825426114},"e-196":{"id":"e-196","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-195"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6564b243a469a975b462aee9|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6564b243a469a975b462aee9|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718825426114},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-198"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6564b500c04d7ad7e0f6f4f6|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6564b500c04d7ad7e0f6f4f6|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718825469910},"e-198":{"id":"e-198","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-197"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6564b500c04d7ad7e0f6f4f6|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6564b500c04d7ad7e0f6f4f6|933d3ee1-dfe5-59fe-56c4-aa1a80d3acc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718825469910}},"actionLists":{"a-28":{"id":"a-28","title":"Home Head 1","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b192"},"xValue":-80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b192"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b192"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b192"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701143950339},"a-29":{"id":"a-29","title":"Head 2","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b196"},"xValue":-80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b196"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b196"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b196"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701151325703},"a-30":{"id":"a-30","title":"Head 3","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b19a"},"xValue":-80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-30-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b19a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b19a"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-30-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e6d404f7-61bb-0987-42f7-afdde718b19a"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701176015672},"a-42":{"id":"a-42","title":"Navbar 1 menu [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-42-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-42-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-42-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-43":{"id":"a-43","title":"Navbar 1 menu [Open] 2","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-43-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-43-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-43-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-43-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-44":{"id":"a-44","title":"Navbar 1 menu [Close] 3","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-44-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-44-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-44-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-44-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-45":{"id":"a-45","title":"Navbar 1 menu [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-45-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-45-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-45-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-45-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-46":{"id":"a-46","title":"Navbar 1 menu [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-46-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-46-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-46-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-46-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-46-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-47":{"id":"a-47","title":"Navbar 1 menu [Open] 4","actionItemGroups":[{"actionItems":[{"id":"a-47-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-47-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-47-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-47-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-47-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-48":{"id":"a-48","title":"Navbar 1 menu [Close] 5","actionItemGroups":[{"actionItems":[{"id":"a-48-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-48-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-48-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-48-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-48-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-49":{"id":"a-49","title":"Navbar 1 menu [Open] 5","actionItemGroups":[{"actionItems":[{"id":"a-49-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-49-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-49-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-49-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-49-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-50":{"id":"a-50","title":"Navbar 1 menu [Close] 6","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-50-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-50-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-50-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-50-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-51":{"id":"a-51","title":"Navbar 1 menu [Open] 6","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-51-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-51-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-51-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-51-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-52":{"id":"a-52","title":"Navbar 1 menu [Close] 7","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-52-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-52-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-52-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-52-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-53":{"id":"a-53","title":"Navbar 1 menu [Open] 7","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-53-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-53-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-54":{"id":"a-54","title":"Navbar 1 menu [Close] 8","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-54-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-54-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-54-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-54-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-55":{"id":"a-55","title":"Navbar 1 menu [Open] 8","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-55-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-55-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68ec"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-55-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68e2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-55-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["0ba0f337-c033-0123-5e32-761f1ecc68f1"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Section1({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);
  const { currentUser } = useContext(UserContext);
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section_home_hero-header",
        "tab",
        "mobscape",
        "mob"
      )}
      tag="header"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navbar1_component")}
        data-w-id="e6d404f7-61bb-0987-42f7-afdde718b18b"
        tag="div"
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        fs-scrolldisable-element="smart-nav"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: false,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar1_container")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "navbar1_logo-link")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "navbar1_logo")}
              width="247"
              height="auto"
              loading="lazy"
              alt=""
              src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/6553daa579664cc0ddc7d621_62727e0fad3368b9f9fe1adb_logo-autocar-webflow-ecommerce-template.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.NavbarMenu
            className={_utils.cx(
              _styles,
              "navbar1_menu",
              "is-page-height-tablet",
              "tavb",
              "landscape"
            )}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "underline-link-block", "tab")}
              button={false}
              block="inline"
              options={{
                href: "/",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block")}
                tag="div"
              >
                {"HOME"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "underline-link-block", "tab")}
              button={false}
              block="inline"
              options={{
                href: "/about",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block")}
                tag="div"
              >
                {"ABOUT"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "underline-link-block", "tab")}
              button={false}
              block="inline"
              options={{
                href: "/services",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block")}
                tag="div"
              >
                {"SERVICES"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar1_menu-buttons", "tab")}
              tag="div"
            >
            
            {currentUser ? (
              <span className={_utils.cx(_styles, 'button-5')}
              button={true}
              block=""
              options={{
              href: '/'
              }}
              onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <_Builtin.Link
                className={_utils.cx(_styles, 'button-3')}
                button={true}
                block=""
                options={{
                  href: '/authentication',
                }}
              >
                <span className='nav-link' onClick={signOutUser}>
                  SIGN IN
                </span>
              </_Builtin.Link>
            )}
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "navbar1_menu-button")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon1_line-top")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon1_line-middle")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon_line-middle-inner")}
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon1_line-bottom")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global", "mob")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-section-large",
              "padding-section",
              "mobscape",
              "tab"
            )}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(
                _styles,
                "home_hero-header_component",
                "mob"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "home_hero-header_content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small",
                    "mobscape",
                    "mob"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "hero-heading",
                      "mob",
                      "mobilescape"
                    )}
                    data-w-id="e6d404f7-61bb-0987-42f7-afdde718b192"
                    tag="h1"
                  >
                    <_Builtin.Emphasized
                      className={_utils.cx(
                        _styles,
                        "tab_head",
                        "mobscape",
                        "mob"
                      )}
                    >
                      {"AUTO "}
                    </_Builtin.Emphasized>
                    <br />
                  </_Builtin.Heading>
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "hero-heading",
                      "mob",
                      "mobilescape"
                    )}
                    data-w-id="e6d404f7-61bb-0987-42f7-afdde718b196"
                    tag="h1"
                  >
                    <_Builtin.Emphasized
                      className={_utils.cx(
                        _styles,
                        "tab_head",
                        "mobscape",
                        "mob"
                      )}
                    >
                      {"MAINTENANCE,"}
                    </_Builtin.Emphasized>
                    <br />
                  </_Builtin.Heading>
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "hero-heading",
                      "mob",
                      "mobilescape"
                    )}
                    data-w-id="e6d404f7-61bb-0987-42f7-afdde718b19a"
                    tag="h1"
                  >
                    <_Builtin.Emphasized
                      className={_utils.cx(
                        _styles,
                        "tab_head",
                        "mobscape",
                        "mob"
                      )}
                    >
                      {"SERVICE & REPAIR"}
                    </_Builtin.Emphasized>
                    <br />
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-size-medium",
                    "descrip",
                    "tabpad",
                    "mobscape",
                    "mob",
                    "mob-hero-text"
                  )}
                >
                  {
                    "At vitae commodo amet libero tortor blandit risus condimentum mauris. Cras arcu tortor aenean turpis massa mauris ac mi facilisi cursus aliquam a ac maecenas purus amet sapien id suspendisse porttitor tempor at donec massa nibh massa urna et."
                  }
                  <br />
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-top",
                    "margin-medium",
                    "homemargin"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "button-group",
                      "homebtn",
                      "mob"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "button-4",
                        "tablet",
                        "mob",
                        "mob-scape"
                      )}
                      button={true}
                      block=""
                      options={{
                        href: "/contact",
                      }}
                    >
                      {"SCHEDULE AN APPOINTMENT"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "button-4",
                        "tablet",
                        "mob",
                        "mob-scape"
                      )}
                      button={true}
                      block=""
                      options={{
                        href: "/services",
                      }}
                    >
                      {"BROWSE SERVICES"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
