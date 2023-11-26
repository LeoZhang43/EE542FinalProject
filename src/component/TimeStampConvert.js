import React from "react";
export default function TimeStampConvert(time){
    // Create a new Date object with the provided timestamp (in milliseconds)
    const date = new Date(timestamp);
    // Get individual components of the date (year, month, day, hours, minutes, seconds)
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedDateTime = `${hours}:${minutes}`;
    console.log(formattedDateTime); // Output the formatted date and time
}