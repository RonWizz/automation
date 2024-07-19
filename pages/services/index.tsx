import React from 'react';
import { Service1 } from "../../devlink/Service1";
import { Service3 } from "@/devlink/Service3";
import Link from "next/link";
import * as _Builtin from "../../devlink/_Builtin";
import * as _utils from "../../devlink/utils";
import _styles from "../../devlink/Service2.module.css";
import service from "../data/services.json";
import { useState } from "react";



export default function Home({ as: _Component = _Builtin.Container }) {
  const [search, setSearch] = useState('')
    return (
      <>
        <Service1 />
        <_Component className={_utils.cx(_styles, "padding-global")} tag="div">
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
                      onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setSearch(e.target.value)}
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
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
          <_Builtin.Grid
            className={_utils.cx(_styles, "collection-list-3")}
            tag="div"
          >
            {service.filter((item)=>{
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase());
            }).map((item) => (
              <li key={item.id} className={_utils.cx(_styles, "margin-bottom margin-small")}>
                <Link href={`/services/${item.id}`} className={_utils.cx(_styles, "link-block-2")}>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-25")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-8")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Daily Digest"
                      src={item.url}
                    />
                    <div className={_utils.cx(_styles, "div-block-27")}>
                      <div className={_utils.cx(_styles, "heading-40")}>
                        {item.name}
                      </div>
                    </div>
                    <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-17", "mob")}>
                      {item.description}
                    </_Builtin.Paragraph>
  
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-8")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Daily Digest"
                      src={item.url1}
                    />
                    <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-18")}>
                      {item.learnmore}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </Link>
              </li>
            ))}
          </_Builtin.Grid>
        </_Component>
        <Service3 />
      </>
    );
  }
  
  