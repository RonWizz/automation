"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Section3.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-120":{"id":"e-120","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-119"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1701177482522},"e-149":{"id":"e-149","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-150"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"715faa29-8c45-d832-dec6-70aeee2d983d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":80,"direction":"RIGHT","effectIn":true},"createdOn":1701316918142},"e-151":{"id":"e-151","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-152"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d9844","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"715faa29-8c45-d832-dec6-70aeee2d9844","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":90,"direction":"RIGHT","effectIn":true},"createdOn":1701319000411},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-154"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d9845","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"715faa29-8c45-d832-dec6-70aeee2d9845","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":90,"direction":"RIGHT","effectIn":true},"createdOn":1701319751144},"e-155":{"id":"e-155","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-156"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d9849","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"715faa29-8c45-d832-dec6-70aeee2d9849","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":40,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1701320183309},"e-157":{"id":"e-157","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d9869","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"715faa29-8c45-d832-dec6-70aeee2d9869","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":40,"scrollOffsetUnit":"%","delay":0,"direction":"RIGHT","effectIn":true},"createdOn":1701320353553}},"actionLists":{"a-34":{"id":"a-34","title":"Service Headline","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f96"},"xValue":80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f96"},"value":0,"unit":""}},{"id":"a-34-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983e"},"xValue":-80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983e"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f96"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983e"},"value":1,"unit":""}},{"id":"a-34-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983e"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f96"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701177489063},"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Section3({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_home_benefits", "black")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global", "mob")}
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
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-xsmall",
                    "mobscape"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    data-w-id="715faa29-8c45-d832-dec6-70aeee2d983d"
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-weight-semibold",
                        "mobscape"
                      )}
                      data-w-id="715faa29-8c45-d832-dec6-70aeee2d983e"
                      tag="div"
                    >
                      <_Builtin.Strong
                        className={_utils.cx(_styles, "bold-text-4")}
                      >
                        <_Builtin.Emphasized
                          className={_utils.cx(
                            _styles,
                            "italic-text-2",
                            "why-us"
                          )}
                        >
                          {"WHY US"}
                        </_Builtin.Emphasized>
                      </_Builtin.Strong>
                      {""}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-4")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "mob")}
                      data-w-id="715faa29-8c45-d832-dec6-70aeee2d9844"
                      loading="lazy"
                      height="auto"
                      width="75"
                      alt=""
                      src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/655ac7e055c5599d1d61725b_Line%2021.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "paragraph-3", "white")}
                      data-w-id="715faa29-8c45-d832-dec6-70aeee2d9845"
                    >
                      <_Builtin.Strong>
                        <_Builtin.Emphasized
                          className={_utils.cx(_styles, "italic-text-3", "mob")}
                        >
                          {"WHY US"}
                        </_Builtin.Emphasized>
                      </_Builtin.Strong>
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small",
                    "bottommargin"
                  )}
                  data-w-id="715faa29-8c45-d832-dec6-70aeee2d9849"
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "", "heading-46")}
                    tag="h2"
                  >
                    <_Builtin.Emphasized
                      className={_utils.cx(_styles, "", "italic-text", "mob")}
                    >
                      {"WHAT MAKES US DIFFERENT?"}
                    </_Builtin.Emphasized>
                    {""}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-medium"
                  )}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "text-size-medium", "mob")}
                  >
                    {
                      "At vitae commodo amet libero tortor blandit risus condiment mauris. Cras arcu tortor aenean turpis massa maurisac."
                    }
                  </_Builtin.Paragraph>
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
                        "margin-xsmall",
                        "mobscape"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "div-block-2",
                          "mobscape"
                        )}
                        tag="div"
                      >
                        <_Builtin.Image
                          loading="lazy"
                          width="auto"
                          height="auto"
                          alt=""
                          src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/654b8c7e693fe1dc25ef9324_image%201.svg"
                        />
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-5",
                            "why-head",
                            "tabpad",
                            "mob_scap"
                          )}
                          tag="h6"
                        >
                          {"10+ YEARS OF EXPERIENCE"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "paragraph",
                        "mobscap",
                        "mob"
                      )}
                    >
                      {
                        " At vitae commodo amet libero tortor blandit risusolm condiment mauris. Cras arcu tortor aenean."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home_benefits_text-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "margin-bottom",
                        "margin-xsmall",
                        "mobscape"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "div-block-2",
                          "mobscape"
                        )}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-12")}
                          loading="lazy"
                          height="auto"
                          width="auto"
                          alt=""
                          src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/654c6645544659a9c84af2ac_Vector.svg"
                        />
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-5",
                            "why-head",
                            "tabpad",
                            "mob_scap"
                          )}
                          tag="h6"
                        >
                          {"BEST QUALITY PARTS"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "paragraph-2",
                        "mobscap",
                        "mob"
                      )}
                    >
                      {
                        "At vitae commodo amet libero tortor blandit risusolm condiment mauris. Cras arcu tortor aenean."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Grid>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-top",
                    "margin-medium",
                    "tabtop",
                    "mobscapes"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-group")}
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
                      {"SCHEDULE AN "}
                      <_Builtin.Span>{"APPOINTMENT"}</_Builtin.Span>
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
                  data-w-id="715faa29-8c45-d832-dec6-70aeee2d9869"
                  loading="lazy"
                  width="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/65688fc5d6c52eb95639773f_Group%2036.png"
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
