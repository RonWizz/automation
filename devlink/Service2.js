"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Service2.module.css";

export function Service2({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_services_2_services")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "mob-pad",
          "mobland",
          "mob",
          "mobpad"
        )}
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
              className={_utils.cx(_styles, "services_2_services_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "margin-bottom",
                  "margin-xxlarge",
                  "mobscape"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "max-width-large")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-15", "mob-scspe")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "heading-29",
                        "ombscape",
                        "mob"
                      )}
                      tag="h1"
                    >
                      {"SERVICES"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-16", "px")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-30", "heading", "mob")}
                  tag="h1"
                >
                  <_Builtin.Emphasized className={_utils.cx(_styles, "mob")}>
                    {"EXPLORE SERVICES"}
                  </_Builtin.Emphasized>
                  {""}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-14", "para")}
                >
                  {
                    "At vitae commodo amet libero tortor blandit risus condimentum mauris. Cras arcu tortor aenean turpis massa mauris ac mi facilisi cursus aliquam"
                  }
                </_Builtin.Paragraph>
                <_Builtin.FormWrapper>
                  <_Builtin.FormForm
                    className={_utils.cx(_styles, "form")}
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    id="email-form"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "text-field")}
                      autoFocus={false}
                      maxLength={256}
                      name="field-2"
                      data-name="Field 2"
                      placeholder="Search our services"
                      type="text"
                      disabled={false}
                      required={true}
                      id="field-2"
                    />
                  </_Builtin.FormForm>
                  <_Builtin.FormSuccessMessage>
                    <_Builtin.Block tag="div">
                      {"Thank you! Your submission has been received!"}
                    </_Builtin.Block>
                  </_Builtin.FormSuccessMessage>
                  <_Builtin.FormErrorMessage>
                    <_Builtin.Block tag="div">
                      {"Oops! Something went wrong while submitting the form."}
                    </_Builtin.Block>
                  </_Builtin.FormErrorMessage>
                </_Builtin.FormWrapper>
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
