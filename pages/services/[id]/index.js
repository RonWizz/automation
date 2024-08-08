import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import * as _Builtin from "../../../devlink/_Builtin";
import * as _interactions from "../../../devlink/interactions";
import * as _utils from "../../../devlink/utils";
import _styles from "../../../devlink/DynamicPage.module.css";
import Product from "../../Product";
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';


const service = [
  {

  id: "1",
  price: 100,
  quantity: 0,
  name: "Routine Vehicle Maintenance Checks",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f591aeab34305db32765_62727e0fad336888bbfe1ae2_alignment-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg"
  },


  {
  id: "2",
  price: 200,
  quantity: 0,
  name: "Timing Belt and Chain Replacement",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f39c84ae9bda7facb070_62727e0fad3368c019fe1ade_maintenance-service-image-autocar-webflow-ecommerce-template%20(1).jpg"
  },


  {
  id: "3",
  price: 600,
  quantity: 0,
  name: "Fuel System Cleaning and Repair",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f607bd95ad0ca47428b8_62727e0fad3368d173fe1ae0_powder-coatin.jpeg"
  },


  {
  id: "4",
  price: 300,
  quantity: 0,
  name: "Radiator and Cooling System Services",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f4f683ff0fa1fa6e1394_62727e0fad33683183fe1adf_wheels-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg"
  },


  {
  "id": "5",
  price: 1500,
  quantity: 0,
  name: "Suspension and Steering Repair",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f607bd95ad0ca47428b8_62727e0fad3368d173fe1ae0_powder-coatin.jpeg"
  },


  {
  id: "6",
  price: 800,
  quantity: 0,
  name: "Exhaust System Repair",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f591aeab34305db32765_62727e0fad336888bbfe1ae2_alignment-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg"
  },


  {
  id: "7",
  price: 700,
  quantity: 0,
  name: "Air Conditioning and Heating Repair",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f39c84ae9bda7facb070_62727e0fad3368c019fe1ade_maintenance-service-image-autocar-webflow-ecommerce-template%20(1).jpg"
  },


  {
  id: "8",
  price: 400,
  quantity: 0,
  name: "Engine Diagnostics and Repair",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f4f683ff0fa1fa6e1394_62727e0fad33683183fe1adf_wheels-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg"
  },


  {
  id: "9",
  price: 600,
  quantity: 0,
  name: "Battery Testing and Replacement",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f39c84ae9bda7facb070_62727e0fad3368c019fe1ade_maintenance-service-image-autocar-webflow-ecommerce-template%20(1).jpg"
  },


  {
  id: "10",
  price: 500,
  quantity: 0,
  name: "Wheel Alignment",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f607bd95ad0ca47428b8_62727e0fad3368d173fe1ae0_powder-coatin.jpeg"
  },


  {
  id: "11",
  price: 100,
  quantity: 0,
  name: "Tire Rotation and Balancing",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f4f683ff0fa1fa6e1394_62727e0fad33683183fe1adf_wheels-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg"
  },


  {
  id: "12",
  price: 300,
  quantity: 0,
  name: "Transmission Services",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f591aeab34305db32765_62727e0fad336888bbfe1ae2_alignment-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg"
  },


  {
  id: "13",
  price: 900,
  quantity: 0,
  name: "Brake Inspection and Repair",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f39c84ae9bda7facb070_62727e0fad3368c019fe1ade_maintenance-service-image-autocar-webflow-ecommerce-template%20(1).jpg"
  },


  {
  id: "14",
  price: 1700,
  quantity: 0,
  name: "Oil Change and Filter Replacement",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f607bd95ad0ca47428b8_62727e0fad3368d173fe1ae0_powder-coatin.jpeg"
  },


  {
  id: "15",
  price: 1500,
  quantity: 0,
  name: "Electrical System Services",
  description: "Autocar X Webflow Template MAINTENANCE At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f39c84ae9bda7facb070_62727e0fad3368c019fe1ade_maintenance-service-image-autocar-webflow-ecommerce-template%20(1).jpg",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg"
  },


  {
  id: "16",
  price: 200,
  quantity: 0,
  name: "Windshield Wiper Replacement",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f4f683ff0fa1fa6e1394_62727e0fad33683183fe1adf_wheels-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg"
  },


  {
  id: "17",
  price: 1600,
  quantity: 0,
  name: "Headlight and Taillight Replacement",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f607bd95ad0ca47428b8_62727e0fad3368d173fe1ae0_powder-coatin.jpeg",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg"
  },


  {
  id: "18",
  price: 1800,
  quantity: 0,
  name: "Pre-purchase Vehicle Inspection",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f6394314b2ea43c66143_62727e0fad3368411ffe1ae3_brakes-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg",
  },


  {
  id: "19",
  price: 600,
  quantity: 0,
  name: "Fleet Services for Business Vehicles",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f67a878527715055e26a_62727e0fad33688147fe1ae1_engine-service-image-autocar-webflow-ecommerce-template.jpg",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg"
  },


  {
  id: "20",
  price: 100,
  quantity: 0,
  name: "State Emissions Testing and Repair",
  description: "Autocar X Webflow Template WHEELS At vitae commodo amet libero tortor blandit risus condimentum mauris.",
  learnmore: "LEARN MORE",
  url: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6556f591aeab34305db32765_62727e0fad336888bbfe1ae2_alignment-service-image-autocar-webflow-ecommerce-template-p-500%20(1).jpeg",
  url1: "https://uploads-ssl.webflow.com/6556748320a5361aa757e440/6565609b4ecc4dede74beb2e_dash%2020.svg"
  }
]
const destiIdData = service.reduce((acc, item) => {
  acc[item.id.toString()] = {
    id: item.id,
    name: item.name,
    description: item.description,
    url: item.url,
    price: Number(item.price),
  };
  return acc;
}, {});

const services = ({ as: _Component = _Builtin.Block }) => {
  const { currentUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const { id } = router.query;
  const items = destiIdData[id] || {};
  return (
    <>

      <_Component className={_utils.cx(_styles, "main-wrapper")} tag="main">
        <_Builtin.Block
          className={_utils.cx(_styles, "section_pricing_1_header", "service2")}
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
                <span
                  className={_utils.cx(_styles, 'button-5')}
                  button={true}
                  block=""
                  options={{ href: '/' }}
                  onClick={signOutUser}
                >
                  SIGN OUT
                </span>
              ) : (
                <_Builtin.Link
                  className={_utils.cx(_styles, 'button-3')}
                  button={true}
                  block=""
                  options={{ href: '/authentication' }}
                >
                  <span className='nav-link'>
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
              className={_utils.cx(_styles, "padding-section-large")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "pricing_1_header_component")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "pricing_1_header_content-left"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading tag="h1">
                    <_Builtin.Emphasized
                      className={_utils.cx(
                        _styles,
                        "tab-text",
                        "scape-text",
                        "mobtext"
                      )}
                    >
                      {items.name}
                    </_Builtin.Emphasized>
                  </_Builtin.Heading>
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "paragraph-19",
                      "scape-text",
                      "mob-text"
                    )}
                  >
                    {items.description}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div_services")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-13")}
                    loading="lazy"
                    width="551.5"
                    height="auto"
                    alt=""
                    src={items.url}
                  />
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>

      <_Builtin.Block
        className={_utils.cx(_styles, "section_pricing_2_pricing")}
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
                className={_utils.cx(_styles, "pricing_2_pricing_component")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "pricing_2_pricing_content")}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(
                      _styles,
                      "pricing_2_pricing_content-list"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      id={_utils.cx(
                        _styles,
                        "w-node-d403bb6d-d383-e311-e620-f094d65c864f-d65c8623"
                      )}
                      tag="div"
                    >
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-28")}
                      id={_utils.cx(
                        _styles,
                        "w-node-d403bb6d-d383-e311-e620-f094d65c8653-d65c8623"
                      )}
                      tag="div"
                    >
                      
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image-10", "imgscape")}
                        id={_utils.cx(
                          _styles,
                          "w-node-d403bb6d-d383-e311-e620-f094d65c8654-d65c8623"
                        )}
                        loading="lazy"
                        width="20"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/65597c0e55605f3084fb44b6_check.svg"
                      />
                      <_Builtin.Heading
                        className={_utils.cx(
                          _styles,
                          "heading-43",
                          "headnig-head"
                        )}
                        tag="h3"
                      >
                        <_Builtin.Strong
                          className={_utils.cx(_styles, "mob-para")}
                        >
                          {"AIR CONDITIONING"}
                        </_Builtin.Strong>
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-28")}
                      id={_utils.cx(
                        _styles,
                        "w-node-d403bb6d-d383-e311-e620-f094d65c8653-d65c8623"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image-10", "imgscape")}
                        id={_utils.cx(
                          _styles,
                          "w-node-d403bb6d-d383-e311-e620-f094d65c8654-d65c8623"
                        )}
                        loading="lazy"
                        width="20"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/65597c0e55605f3084fb44b6_check.svg"
                      />
                      <_Builtin.Heading
                        className={_utils.cx(
                          _styles,
                          "heading-43",
                          "headnig-head"
                        )}
                        tag="h3"
                      >
                        <_Builtin.Strong
                          className={_utils.cx(_styles, "mob-para")}
                        >
                          {"BREAK SERVICE"}
                        </_Builtin.Strong>
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-28")}
                      id={_utils.cx(
                        _styles,
                        "w-node-d403bb6d-d383-e311-e620-f094d65c8653-d65c8623"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image-10", "imgscape")}
                        id={_utils.cx(
                          _styles,
                          "w-node-d403bb6d-d383-e311-e620-f094d65c8654-d65c8623"
                        )}
                        loading="lazy"
                        width="20"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/65597c0e55605f3084fb44b6_check.svg"
                      />
                      <_Builtin.Heading
                        className={_utils.cx(
                          _styles,
                          "heading-43",
                          "headnig-head"
                        )}
                        tag="h3"
                      >
                        <_Builtin.Strong
                          className={_utils.cx(_styles, "mob-para")}
                        >
                          {"CABIN FILTERS"}
                        </_Builtin.Strong>
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-28")}
                      id={_utils.cx(
                        _styles,
                        "w-node-d403bb6d-d383-e311-e620-f094d65c8653-d65c8623"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image-10", "imgscape")}
                        id={_utils.cx(
                          _styles,
                          "w-node-d403bb6d-d383-e311-e620-f094d65c8654-d65c8623"
                        )}
                        loading="lazy"
                        width="20"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/6547e1150d1404495b9400cd/65597c0e55605f3084fb44b6_check.svg"
                      />
                      <_Builtin.Heading
                        className={_utils.cx(
                          _styles,
                          "heading-43",
                          "headnig-head"
                        )}
                        tag="h3"
                      >
                        <_Builtin.Strong
                          className={_utils.cx(_styles, "mob-para")}
                        >
                          {"WHEEL BALANCING"}
                        </_Builtin.Strong>
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <h2>
                        <strong className="mob-head">
                            <Product key={items.id} product={items} />
                        </strong>
                    </h2>
                    <button className={_utils.cx(_styles, "button")} type="submit" onClick={() => router.push('/Cart')}>
                          Go to cart
                    </button>  
                  </_Builtin.Grid>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>  
    </>
  );

};

export default services;