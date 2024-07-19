"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Section5.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9efe2a81-583f-46d9-3038-fad288dd82b2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9efe2a81-583f-46d9-3038-fad288dd82b2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1701321390227},"e-167":{"id":"e-167","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9efe2a81-583f-46d9-3038-fad288dd82b8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9efe2a81-583f-46d9-3038-fad288dd82b8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1701321412897},"e-171":{"id":"e-171","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9efe2a81-583f-46d9-3038-fad288dd82b9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9efe2a81-583f-46d9-3038-fad288dd82b9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1701321796520},"e-173":{"id":"e-173","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9efe2a81-583f-46d9-3038-fad288dd82c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9efe2a81-583f-46d9-3038-fad288dd82c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1701321954323},"e-175":{"id":"e-175","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9efe2a81-583f-46d9-3038-fad288dd82dc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9efe2a81-583f-46d9-3038-fad288dd82dc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1701321971184}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Section5({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_home_how-it-works")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "home_how-it-works_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "margin-bottom",
                  "margin-xxlarge",
                  "mob"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "div-block-3",
                    "landscape",
                    "mob"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-7", "mob")}
                    data-w-id="9efe2a81-583f-46d9-3038-fad288dd82b2"
                    tag="h1"
                  >
                    <_Builtin.Strong>
                      <_Builtin.Emphasized
                        className={_utils.cx(
                          _styles,
                          "italic-text-2",
                          "service_head",
                          "lanndscape",
                          "mob"
                        )}
                      >
                        {"LOCATIONS"}
                      </_Builtin.Emphasized>
                    </_Builtin.Strong>
                    {""}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-4", "mob")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "landscape", "mob")}
                      data-w-id="9efe2a81-583f-46d9-3038-fad288dd82b8"
                      loading="lazy"
                      height="auto"
                      width="147"
                      alt=""
                      src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/655ac7e055c5599d1d61725b_Line%2021.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "paragraph-3")}
                      data-w-id="9efe2a81-583f-46d9-3038-fad288dd82b9"
                    >
                      <_Builtin.Strong>
                        <_Builtin.Emphasized
                          className={_utils.cx(
                            _styles,
                            "italic-text-3",
                            "landscape"
                          )}
                          data-w-id="9efe2a81-583f-46d9-3038-fad288dd82bb"
                        >
                          {"LOCATIONS"}
                        </_Builtin.Emphasized>
                      </_Builtin.Strong>
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-5", "tabsize", "mob")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-9", "mob")}
                  tag="h1"
                >
                  <_Builtin.Emphasized
                    className={_utils.cx(_styles, "mobtext")}
                  >
                    {"WE HAVE A CAR WORKSHOP NEAR YOU"}
                  </_Builtin.Emphasized>
                  {""}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-4")}
                >
                  {
                    "At vitae commodo amet libero tortor blandit risus condimentum mauris. Cras arcu tortor aenean turpis massa mauris ac mi facilisi cursus."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Grid
                className={_utils.cx(_styles, "home_how-it-works_list")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "home_how-it-works_item")}
                  data-w-id="9efe2a81-583f-46d9-3038-fad288dd82c5"
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "home4-features_image-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "home_how-it-works_image"
                        )}
                        loading="lazy"
                        height="auto"
                        width="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/654c759f824c04859c7cdf05_Group%2026.png"
                      />
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "margin-bottom",
                          "margin-xsmall",
                          "location-margin",
                          "dropdown-tab",
                          "landscape",
                          "mob"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-32")}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(_styles, "heading-style-h5")}
                            tag="h3"
                          >
                            {"‍"}
                            <_Builtin.Strong>
                              <_Builtin.Emphasized
                                className={_utils.cx(_styles, "tabsize")}
                              >
                                {"SANTA MONICA, LA"}
                              </_Builtin.Emphasized>
                            </_Builtin.Strong>
                            {""}
                          </_Builtin.Heading>
                        </_Builtin.Block>
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-5",
                            "tab",
                            "mob"
                          )}
                        >
                          {
                            "Suspendisse facilisis mattis tellus augue risus nunc viverra eget sit ipsum nisl est sagittis adipiscing ornare at."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-8", "mob")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "div-block-6",
                              "tab",
                              "mob"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image")}
                              loading="lazy"
                              height="auto"
                              width="17.5"
                              alt=""
                              src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/654f17eecebe3e29b3a4fc9b_Vector.svg"
                            />
                            <_Builtin.Heading
                              className={_utils.cx(
                                _styles,
                                "heading-10",
                                "tab",
                                "mob"
                              )}
                              tag="h1"
                            >
                              {"987 L Woodland Hills St,Los Angeles, CA, 90012"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "div-block-7",
                              "tabview"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image-2")}
                              loading="lazy"
                              height="auto"
                              width="auto"
                              alt=""
                              src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/654f1a99d33458e14a2e1c81_Vector2.svg"
                            />
                            <_Builtin.Heading
                              className={_utils.cx(
                                _styles,
                                "heading-12",
                                "tab",
                                "mob"
                              )}
                              tag="h1"
                            >
                              {"(213) 427-0570"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "home_how-it-works_item")}
                  data-w-id="9efe2a81-583f-46d9-3038-fad288dd82dc"
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "home4-features_image-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "home_how-it-works_image"
                        )}
                        loading="lazy"
                        width="400"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/654c75ea26a9d252dad1aac3_Group%2027.png"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-xsmall",
                      "location-margin",
                      "landscape",
                      "mob"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-h5")}
                      tag="h3"
                    >
                      <_Builtin.Emphasized
                        className={_utils.cx(_styles, "tabsize")}
                      >
                        {"WOODLAND HILLS, LA"}
                      </_Builtin.Emphasized>
                      {""}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "paragraph-6",
                        "tab",
                        "mob"
                      )}
                    >
                      {
                        "Suspendisse facilisis mattis tellus augue risus nunc viverra eget sit ipsum nisl est sagittis adipiscing ornare at."
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-8", "mob")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-6", "mob")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image")}
                          loading="lazy"
                          height="auto"
                          width="17.5"
                          alt=""
                          src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/654f17eecebe3e29b3a4fc9b_Vector.svg"
                        />
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-10",
                            "tab",
                            "mob"
                          )}
                          tag="h1"
                        >
                          {"987 L Woodland Hills St,Los Angeles, CA, 90012"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-7")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-2")}
                          loading="lazy"
                          height="auto"
                          width="auto"
                          alt=""
                          src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/654f1a99d33458e14a2e1c81_Vector2.svg"
                        />
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-12",
                            "tab",
                            "mob"
                          )}
                          tag="h1"
                        >
                          {"(213) 427-0570"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
