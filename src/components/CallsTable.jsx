/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { DataTable, Box, Meter, Text } from "grommet";

import { epochTimeToDate } from "../server/libs/epochTimeToDate";
import { CallsContext } from "../ContextProvider";


const columns = [
  {
    property: "Id",
    header: <Text> Id </Text>,
    primary: true
  },
  {
    property: "Room",
    header: <Text> Habitación </Text>,
  },
  {
    property: "codeAlarm",
    header: "Código de Alarma"
  },
  {
    property: "epochTime",
    header: "Hora del evento"
  }
];


const CallsTable = () => {
  const [data, setData] = useState([]);
  const calls = useContext(CallsContext);

  useEffect(() => {
      setData(newData);
  }, [calls]);

  const newData = calls.map((call) => {
    const newCall = {
      Id: calls.indexOf(call) + 1,
      Room: call.data.Room,
      epochTime: epochTimeToDate((call.data.epochTime)*1000),
      codeAlarm: call.data.codeAlarm,
      activateTime: epochTimeToDate((call.data.activateTime)*1000),
      unactivateTime: epochTimeToDate((call.data.unactivateTime)*1000),
    };
    return newCall;
  });

  return ( 
    <Box align = "center" >
      <DataTable 
        resizeable = { true }
        sortable = { true }
        columns = { columns }
        data = { data }
        background={{ 
          header: "dark-2",
          body: ["white", "light-2"],
          footer: { 
            dark: "light-2", 
            light: "dark-3" 
          }
        }}
      /> 
    </Box>
  );
}

export default CallsTable
