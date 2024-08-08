import React from 'react';
import Product from "../Product";
import { Service1 } from "../../devlink/Service1";
import { Service3 } from "@/devlink/Service3";
import Link from "next/link";
import * as _Builtin from "../../devlink/_Builtin";
import * as _utils from "../../devlink/utils";
import _styles from "../../devlink/Service2.module.css";
import { Footer } from "@/devlink";
import { useState } from "react";
import { UserProvider } from "../../contexts/user.context";
const service: Product[] = [
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


export default function Home({ as: _Component = _Builtin.Container }) {
  const [search, setSearch] = useState('')
    return (
      <>
      <UserProvider>
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
            {service.filter((item) => {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase());
            }).map((product) => (
                <div key={product.id}>
                    {/* <Product product={product} /> */}
                    <li className={_utils.cx(_styles, "margin-bottom margin-small")}>
                        <Link href={`/services/${product.id}`} className={_utils.cx(_styles, "link-block-2")}>
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
                                    src={product.url}
                                />
                                <div className={_utils.cx(_styles, "div-block-27")}>
                                    <div className={_utils.cx(_styles, "heading-40")}>
                                        {product.name}
                                    </div>
                                </div>
                                <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-17", "mob")}>
                                    {product.description}
                                </_Builtin.Paragraph>

                                <_Builtin.Image
                                    className={_utils.cx(_styles, "image-8")}
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                    alt="Daily Digest"
                                    src={product.url1}
                                />
                                <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-18")}>
                                    {product.learnmore}
                                </_Builtin.Paragraph>
                            </_Builtin.Block>
                        </Link>
                    </li>
                </div>
            ))}

          </_Builtin.Grid>
        </_Component>
        <Service3 />
        <Footer/>
      </UserProvider>
      </>
    );
  }
  
  