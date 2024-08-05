"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Section4.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-159":{"id":"e-159","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"819d13fd-82fc-5d00-396a-fbdad8930b22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"819d13fd-82fc-5d00-396a-fbdad8930b22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":40,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1701320468805},"e-161":{"id":"e-161","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"819d13fd-82fc-5d00-396a-fbdad8930b29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"819d13fd-82fc-5d00-396a-fbdad8930b29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1701321207139},"e-163":{"id":"e-163","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"819d13fd-82fc-5d00-396a-fbdad8930b2a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"819d13fd-82fc-5d00-396a-fbdad8930b2a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1701321323121},"e-183":{"id":"e-183","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-184"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"819d13fd-82fc-5d00-396a-fbdad8930b3e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"819d13fd-82fc-5d00-396a-fbdad8930b3e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":40,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1701332781481}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Section4({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_home_benefits")}
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
            <_Builtin.Grid
              className={_utils.cx(
                _styles,
                "home_benefits_component",
                "mob-scape"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "home_benefits_content")}
                id={_utils.cx(
                  _styles,
                  "w-node-_819d13fd-82fc-5d00-396a-fbdad8930b21-d8930b1c"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-xsmall"
                  )}
                  data-w-id="819d13fd-82fc-5d00-396a-fbdad8930b22"
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-weight-semibold",
                      "mobscape"
                    )}
                    tag="div"
                  >
                    <_Builtin.Strong
                      className={_utils.cx(_styles, "bold-text-5")}
                    >
                      <_Builtin.Emphasized
                        className={_utils.cx(
                          _styles,
                          "italic-text-2",
                          "tab_size",
                          "mob"
                        )}
                      >
                        {"ABOUT US"}
                      </_Builtin.Emphasized>
                    </_Builtin.Strong>
                    {""}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-4", "mobscape")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "mobscsape", "mob")}
                    data-w-id="819d13fd-82fc-5d00-396a-fbdad8930b29"
                    loading="lazy"
                    height="auto"
                    width="54"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/655ac7e055c5599d1d61725b_Line%2021.svg"
                  />
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "paragraph-3")}
                    data-w-id="819d13fd-82fc-5d00-396a-fbdad8930b2a"
                  >
                    <_Builtin.Strong>
                      <_Builtin.Emphasized
                        className={_utils.cx(_styles, "italic-text-3")}
                      >
                        {"ABOUT US"}
                      </_Builtin.Emphasized>
                    </_Builtin.Strong>
                    {""}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small",
                    "tab-margin"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-44")}
                    tag="h2"
                  >
                    <_Builtin.Emphasized className={_utils.cx(_styles, "mob")}>
                      {"THE STORY BEHIND OUR CAR WORKSHOP"}
                    </_Builtin.Emphasized>
                    {""}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Grid
                  className={_utils.cx(_styles, "home_benefits_item-list")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home_benefits_text-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "margin-bottom",
                        "margin-xsmall"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "mob", "paramob")}
                      >
                        {
                          "At vitae commodo amet libero tortor blandit risus condimentum mauris. Cras arcu tortor aenean turpis massa mauris ac mi facilisi cursus aliquam a ac maecenas purus amet sapien id suspendisse porttitor tempor at donec massa nibh massa urna et."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Grid>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-top",
                    "margin-medium",
                    "tabtopmargin",
                    "mobscapes"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-group", "mobscap")}
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
                        href: "/about",
                      }}
                    >
                      {"MORE ABOUT US"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "home_benefits_image-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "home_benefits_image", "tab")}
                  data-w-id="819d13fd-82fc-5d00-396a-fbdad8930b3e"
                  loading="lazy"
                  height="auto"
                  width="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/65689791a1d3bab808697177_Group%2037.png"
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
