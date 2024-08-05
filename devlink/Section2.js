"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Section2.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-114":{"id":"e-114","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1701177125237},"e-116":{"id":"e-116","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-115"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1701177181520},"e-118":{"id":"e-118","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-117"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1701177290328},"e-120":{"id":"e-120","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-119"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1701177482522},"e-122":{"id":"e-122","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-121"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":55,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1701177631510},"e-124":{"id":"e-124","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-123"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":65,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1701177726765}},"actionLists":{"a-31":{"id":"a-31","title":"1st features","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f79"},"yValue":80,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-31-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f79"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f79"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-31-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f79"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701177136736},"a-32":{"id":"a-32","title":"2nd feature","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f81"},"yValue":80,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-32-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f81"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-32-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f81"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-32-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f81"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701177190009},"a-33":{"id":"a-33","title":"3rd feature","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f8a"},"yValue":80,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f8a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-33-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f8a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f8a"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701177298476},"a-34":{"id":"a-34","title":"Service Headline","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f96"},"xValue":80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f96"},"value":0,"unit":""}},{"id":"a-34-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983e"},"xValue":-80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983e"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f96"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983e"},"value":1,"unit":""}},{"id":"a-34-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"id":"715faa29-8c45-d832-dec6-70aeee2d983e"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f96"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701177489063},"a-35":{"id":"a-35","title":"Service Dash Img","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f9c"},"xValue":50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-35-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f9c"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-35-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f9c"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-35-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f9c"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701177650744},"a-36":{"id":"a-36","title":"Service Para","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f9d"},"xValue":50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-36-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f9d"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-36-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":620,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f9d"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-36-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"13a9e79d-ba2a-fc3d-d340-1c7930702f9d"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701177733054}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Section2({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_home_gallery")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global", "tab")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2", "tabletpad", "mob")}
            data-w-id="13a9e79d-ba2a-fc3d-d340-1c7930702f79"
            tag="h1"
          >
            <_Builtin.Strong className={_utils.cx(_styles, "mob-scape", "mob")}>
              <_Builtin.Emphasized
                className={_utils.cx(_styles, "italic", "mob-scape", "mob")}
              >
                {"10+"}
                <br />
                {"‍"}
              </_Builtin.Emphasized>
              {"YEARS OF SERVICE"}
            </_Builtin.Strong>
            {""}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2", "tabletpad", "mob")}
            data-w-id="13a9e79d-ba2a-fc3d-d340-1c7930702f81"
            tag="h1"
          >
            <_Builtin.Strong className={_utils.cx(_styles, "mob-scape", "mob")}>
              <_Builtin.Emphasized
                className={_utils.cx(_styles, "italic-2", "mob-scape", "mob")}
              >
                {"50K+"}
                <br />
                {"‍"}
                {"‍"}
              </_Builtin.Emphasized>
              {"HAPPY CLIENTS"}
            </_Builtin.Strong>
            {""}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2", "tabletpad", "mob")}
            data-w-id="13a9e79d-ba2a-fc3d-d340-1c7930702f8a"
            tag="h1"
          >
            <_Builtin.Strong className={_utils.cx(_styles, "mob-scape", "mob")}>
              <_Builtin.Emphasized
                className={_utils.cx(_styles, "italic-3", "mob-scape", "mob")}
              >
                {"99%"}
                <br />
                {"‍"}
                {"‍"}
              </_Builtin.Emphasized>
              {"CUSTOMER SATISFACTION"}
            </_Builtin.Strong>
            {""}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-section-large",
              "tablettoppad"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-3", "landscape")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-7", "mob")}
                data-w-id="13a9e79d-ba2a-fc3d-d340-1c7930702f96"
                tag="h1"
              >
                <_Builtin.Strong>
                  <_Builtin.Emphasized
                    className={_utils.cx(
                      _styles,
                      "italic-text-2",
                      "service_head",
                      "mobscape",
                      "mob"
                    )}
                  >
                    {"SERVICES"}
                  </_Builtin.Emphasized>
                </_Builtin.Strong>
                {""}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-4", "mobscape")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "tab-size", "mobscape", "mob")}
                  data-w-id="13a9e79d-ba2a-fc3d-d340-1c7930702f9c"
                  loading="lazy"
                  height="auto"
                  width="110"
                  alt=""
                  src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/655ac7e055c5599d1d61725b_Line%2021.svg"
                />
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-3")}
                  data-w-id="13a9e79d-ba2a-fc3d-d340-1c7930702f9d"
                >
                  <_Builtin.Strong>
                    <_Builtin.Emphasized
                      className={_utils.cx(
                        _styles,
                        "italic-text-3",
                        "mobscape"
                      )}
                    >
                      {"SERVICES"}
                    </_Builtin.Emphasized>
                  </_Builtin.Strong>
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-xxlarge")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-align-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "max-width-large",
                    "align-center"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-8", "tab-head")}
                      tag="h2"
                    >
                      <_Builtin.Emphasized
                        className={_utils.cx(_styles, "mob_scap")}
                      >
                        {"WE OFFER A WIDE RANGE OF CAR SERVICES"}
                      </_Builtin.Emphasized>
                      {""}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "home_gallery_component")}
              tag="div"
            >
              <_Builtin.SliderWrapper
                className={_utils.cx(_styles, "home_gallery_slider")}
                data-animation="slide"
                data-duration="500"
                data-infinite="1"
                id="gallery13_slider"
                navSpacing={3}
                navShadow={false}
                autoplay={false}
                delay={4000}
                iconArrows={true}
                animation="slide"
                navNumbers={false}
                easing="ease"
                navRound={true}
                hideArrows={false}
                disableSwipe={false}
                duration={500}
                infinite={false}
                autoMax={0}
                navInvert={true}
              >
                <_Builtin.SliderMask
                  className={_utils.cx(_styles, "home_gallery_mask")}
                >
                  <_Builtin.SliderSlide
                    className={_utils.cx(_styles, "slide")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-card",
                        "card1"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-39")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "heading-47")}
                          tag="h1"
                        >
                          <_Builtin.Emphasized
                            className={_utils.cx(_styles, "italic-text-7")}
                          >
                            {"MAINTENANCE"}
                          </_Builtin.Emphasized>
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.SliderSlide>
                  <_Builtin.SliderSlide
                    className={_utils.cx(_styles, "slide")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-card",
                        "card2"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-39")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "heading-47")}
                          tag="h1"
                        >
                          <_Builtin.Emphasized
                            className={_utils.cx(_styles, "italic-text-7")}
                          >
                            {"WHEELS"}
                          </_Builtin.Emphasized>
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.SliderSlide>
                  <_Builtin.SliderSlide
                    className={_utils.cx(_styles, "slide")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-card",
                        "card3"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-39")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "heading-47")}
                          tag="h1"
                        >
                          <_Builtin.Emphasized
                            className={_utils.cx(_styles, "italic-text-7")}
                          >
                            {"ALIGNMENTS"}
                          </_Builtin.Emphasized>
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.SliderSlide>
                  <_Builtin.SliderSlide
                    className={_utils.cx(_styles, "slide")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-card",
                        "card4"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-39")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "heading-47")}
                          tag="h1"
                        >
                          <_Builtin.Emphasized
                            className={_utils.cx(_styles, "italic-text-7")}
                          >
                            {"POWDER COATING"}
                          </_Builtin.Emphasized>
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.SliderSlide>
                  <_Builtin.SliderSlide
                    className={_utils.cx(_styles, "slide")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-card",
                        "card4",
                        "card-de"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-39")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "heading-47")}
                          tag="h1"
                        >
                          <_Builtin.Emphasized
                            className={_utils.cx(_styles, "italic-text-7")}
                          >
                            {"BREAKS"}
                          </_Builtin.Emphasized>
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.SliderSlide>
                </_Builtin.SliderMask>
                <_Builtin.SliderArrow
                  className={_utils.cx(
                    _styles,
                    "home_gallery_arrow",
                    "hide-mobile-landscape",
                    "mob"
                  )}
                  dir="left"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "home_gallery_arrow-icon")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.31066%208.75001L9.03033%2014.4697L7.96967%2015.5303L0.439339%208.00001L7.96967%200.469676L9.03033%201.53034L3.31066%207.25001L15.5%207.25L15.5%208.75L3.31066%208.75001Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.SliderArrow>
                <_Builtin.SliderArrow
                  className={_utils.cx(
                    _styles,
                    "home_gallery_arrow",
                    "hide-mobile-landscape",
                    "mob"
                  )}
                  dir="right"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "home_gallery_arrow-icon")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.6893%207.25L6.96967%201.53033L8.03033%200.469666L15.5607%208L8.03033%2015.5303L6.96967%2014.4697L12.6893%208.75H0.5V7.25H12.6893Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.SliderArrow>
                <_Builtin.SliderNav
                  className={_utils.cx(_styles, "home_gallery_slide-nav")}
                />
              </_Builtin.SliderWrapper>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "margin-top",
                "margin-medium",
                "tab-margin"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button-group", "mob")}
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
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
