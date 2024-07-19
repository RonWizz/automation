"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-97":{"id":"e-97","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-98"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e25b1118-c1e4-1720-09e0-7df9302336a6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e25b1118-c1e4-1720-09e0-7df9302336a6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1674844196282}},"actionLists":{"a-19":{"id":"a-19","title":"👻 Fade In - 0.3s","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"654f58b299e3f7cbb42f8ca8|f281aa50-9525-c3c5-6b9a-1ac0732007b7"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"654f58b299e3f7cbb42f8ca8|f281aa50-9525-c3c5-6b9a-1ac0732007b7"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637118496510}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "footer1_component")}
      tag="footer"
    >
      <_Builtin.Block
        data-w-id="e25b1118-c1e4-1720-09e0-7df9302336a6"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-wrapper")}
          tag="footer"
        >
          <_Builtin.Container
            className={_utils.cx(_styles, "container-default-3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-top")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "grid-footer-v1---5-column")}
                tag="div"
              >
                <_Builtin.Block
                  id={_utils.cx(
                    _styles,
                    "w-node-e25b1118-c1e4-1720-09e0-7df9302336ab-302336a5"
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-logo-wrapper")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="auto"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/6553daa579664cc0ddc7d621_62727e0fad3368b9f9fe1adb_logo-autocar-webflow-ecommerce-template.svg"
                    />
                  </_Builtin.Link>
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "mg-bottom-40px")}
                  >
                    {
                      "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma"
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "social-media-grid-top")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "social-icon-square")}
                      button={false}
                      block="inline"
                      options={{
                        href: "https://facebook.com/",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "social-icon-font")}
                        tag="div"
                      >
                        {""}
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "social-icon-square")}
                      button={false}
                      block="inline"
                      options={{
                        href: "https://twitter.com/",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "social-icon-font")}
                        tag="div"
                      >
                        {""}
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "social-icon-square")}
                      button={false}
                      block="inline"
                      options={{
                        href: "https://www.instagram.com/",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "social-icon-font")}
                        tag="div"
                      >
                        {""}
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "social-icon-square")}
                      button={false}
                      block="inline"
                      options={{
                        href: "https://www.linkedin.com/",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "social-icon-font")}
                        tag="div"
                      >
                        {""}
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "social-icon-square")}
                      button={false}
                      block="inline"
                      options={{
                        href: "http://youtube.com/",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "social-icon-font")}
                        tag="div"
                      >
                        {""}
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Grid>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-300",
                      "bold",
                      "footer-title"
                    )}
                    tag="div"
                  >
                    {"Product"}
                  </_Builtin.Block>
                  <_Builtin.List
                    className={_utils.cx(_styles, "footer-list-wrapper")}
                    tag="ul"
                    unstyled={false}
                  >
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Features"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Pricing"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Case studies"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Reviews"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Updates"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-300",
                      "bold",
                      "footer-title"
                    )}
                    tag="div"
                  >
                    {"Company"}
                  </_Builtin.Block>
                  <_Builtin.List
                    className={_utils.cx(_styles, "footer-list-wrapper")}
                    tag="ul"
                    unstyled={false}
                  >
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"About"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Contact us"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Careers"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Culture"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Blog"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-300",
                      "bold",
                      "footer-title"
                    )}
                    tag="div"
                  >
                    {"Support"}
                  </_Builtin.Block>
                  <_Builtin.List
                    className={_utils.cx(_styles, "footer-list-wrapper")}
                    tag="ul"
                    unstyled={false}
                  >
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Getting started"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Help center"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Server status"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Report a bug"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Chat support"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-300",
                      "bold",
                      "footer-title"
                    )}
                    tag="div"
                  >
                    {"Downloads"}
                  </_Builtin.Block>
                  <_Builtin.List
                    className={_utils.cx(_styles, "footer-list-wrapper")}
                    tag="ul"
                    unstyled={false}
                  >
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"iOS"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Android"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Mac"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Windows"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "footer-list-item")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Chrome"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-bottom")}
              tag="div"
            />
          </_Builtin.Container>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
