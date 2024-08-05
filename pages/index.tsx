// import Header from "../devlink/Header";
import Script from 'next/script';
import { loadStripe } from '@stripe/stripe-js';
import {Section1} from "@/devlink";
import {Section2} from "@/devlink";
import {Section3} from "@/devlink";
import {Section4} from "@/devlink";
import {Section5} from "@/devlink";
import {Section6} from "@/devlink";
import {Footer} from "@/devlink";
import { useState, useEffect } from "react";
import { createAuth0Client } from '@auth0/auth0-spa-js';
import { UserProvider } from "../contexts/user.context";

export default function Jobs() {
  const copyYear = new Date().getFullYear();
  const [jobsData, setJobsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const stripePromise = loadStripe('your-publishable-key-here');
  const init = async()=>{
    const client = await createAuth0Client({
      clientId: 'aolyX1K624Bl2uqJxkrCqItNhVZbC20H',
      domain: 'dev-ql2ny8s6avac68p6.us.auth0.com'
    });
    console.log(client);
  };
  init();
  
  useEffect(() => {
    fetch("api/jobs/featured")
      .then((response) => response.json())
      .then((data) => {
        setJobsData(data.records);
      })
      .catch((e) => {
        setError(e);
        console.error(`An error occurred: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>

    <UserProvider>
      <Script
        id="webflow-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (window.Webflow) {
              window.Webflow.destroy();
              window.Webflow.ready();
              window.Webflow.require('ix2').init();
              document.dispatchEvent(new Event('readystatechange'));
            }
          `,
        }}
      />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
      </UserProvider>

    </>
  );
}