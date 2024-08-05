"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./About3.module.css";

export function About3({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_home_benefits")}
      tag="section"
      id="learn-more"
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
              className={_utils.cx(_styles, "home_benefits_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "home_benefits_content",
                  "laandscape"
                )}
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
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "heading-25",
                      "resizetext",
                      "mob"
                    )}
                    tag="h1"
                  >
                    {"WHY US ?"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-4")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "landscape", "mob")}
                    loading="lazy"
                    height="auto"
                    width="121"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/655ac7e055c5599d1d61725b_Line%2021.svg"
                  />
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "paragraph-3")}
                  >
                    <_Builtin.Strong>
                      <_Builtin.Emphasized
                        className={_utils.cx(
                          _styles,
                          "italic-text-3",
                          "landscape",
                          "mobtext"
                        )}
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
                    "mob"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "mobhead")}
                    tag="h2"
                  >
                    <_Builtin.Emphasized>
                      {"WHAT MAKES OUR SERVICES BETTER?"}
                    </_Builtin.Emphasized>
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
                        className={_utils.cx(_styles, "paragraph-12", "mob")}
                      >
                        {
                          "At vitae commodo amet libero tortor blandit risus condimentum mauris. Cras arcu tortor aenean turpis massa mauris ac mi facilisi cursus aliquam a ac maecenas purus amet sapien id suspendisse porttitor tempor at donec massa nibh massa urna et. At vitae commodo amet libero tortor blandit risus condimentum mauris. Cras arcu tortor aenean turpis massa mauris ac mi facilisi cursus aliquam a ac maecenas purus amet sapien id suspendisse porttitor tempor at donec massa nibh massa urna et."
                        }
                        <_Builtin.Link
                          button={false}
                          block=""
                          options={{
                            href: "https://autocartemplate-showcase.webflow.io/contact",
                          }}
                        >
                          <_Builtin.Strong>
                            <_Builtin.Emphasized>
                              <br />
                            </_Builtin.Emphasized>
                          </_Builtin.Strong>
                        </_Builtin.Link>
                        {""}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Grid>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-top",
                    "margin-medium",
                    "mob"
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
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "home_benefits_image-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "home_benefits_image", "land")}
                  loading="lazy"
                  width="333"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/655670ace17cbf92ea28ec90_62727e0fad33680bdafe1b34_why-us-image-2-autocar-webflow-ecommerce-template.png"
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
