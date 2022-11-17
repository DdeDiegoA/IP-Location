import React, { useState } from "react";
import IpForm from "../components/ipForm";
import Results from "../components/results";
import "../styles/mainPage.css";

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();

    const OPTIONS = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "9ac73332d1msh31527f5ab690a25p1bee64jsn3d736ad83b99",
            "X-RapidAPI-Host": "ip-to-location1.p.rapidapi.com",
        },
    };

    /**
     * *It takes an IP address as an argument and returns a promise that resolves to a JSON object
     * *containing the IP address's location information.
     *  @returns The fetchIpInfo function is returning a promise.
     */
    const fetchIpInfo = (ip) => {
        return fetch(
            `https://ip-to-location1.p.rapidapi.com/myip?ip=${ip}`,
            OPTIONS
        )
            .then((res) => res.json())
            .catch((err) => console.error(err));
    };

    /**
     * *If the value is not empty, then set the loading state to true, fetch the ipInfo, set the loading
     * *state to false, and if the ipInfo is not empty, then set the data state to the finalData.
     * @returns The data is being returned as a string.
     */
    const submitForm = async (value) => {
        if (!value) return;

        setIsLoading(true);

        const ipInfo = await fetchIpInfo(value);

        setIsLoading(false);

        if (ipInfo) {
            const finalData = JSON.stringify(ipInfo, null, 3);
            setData(finalData);
        }
    };
    /* Returning the IpForm and Results components. */
    return (
        <div className="bodyPage">
            <IpForm submitForm={submitForm} isLoading={isLoading}></IpForm>
            <Results data={data}></Results>
        </div>
    );
};

export default MainPage;
