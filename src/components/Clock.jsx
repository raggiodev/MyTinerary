import React, { useEffect, useState } from "react";

const moon = new Date();
moon.setHours(19);
moon.setMinutes(30);
const sun = new Date();
sun.setHours(7);
sun.setMinutes(30);
const Clock = () => {
  const [hour, setHour] = useState(new Date());
  const [day, setDay] = useState(true);

  useEffect(() => {
    // console.log('CLOCK MOUNTED')

    let intervalID = setInterval(() => {
      const date = new Date();
      // date.setHours(7)
      // date.setMinutes(30)
      setHour(date);
    }, 1000);

    return () => {
      console.log("CLOCK DISMOUNTED");
      console.log("last time: " + hour);
      clearInterval(intervalID);
    };
  }, []);

  useEffect(() => {
    // console.log('CLOCK UPDATED')
    // console.log(hour)

    // 19:31 a 23:59
    // 00:00 a 07:29:59
    if (hour > moon || hour < sun) {
      setDay(false);
    }
    else {
      setDay(true);
    }
  }, [hour]);

  // useEffect(() => {
  //     return () => {
  //         console.log('CLOCK DISMOUNTED')
  //         console.log('last time: ' + hour)
  //         clearInterval()
  //     }
  // }, [])

  // const handleDayChange = () => {
  // setDay(!day)
  // }

  if (day) {
    return (
      <div className="min-w-40 h-40 flex items-center justify-center ">
        ☀️{" "}
        <h1 className="text-white text-xl">
          {hour.toLocaleTimeString("es-ES")}
        </h1>
      </div>
    );
  }

  return (
    <div className="min-w-40 h-40 flex items-center justify-center ">
      🌙{" "}
      <h1 className="text-white text-xl">{hour.toLocaleTimeString("es-ES")}</h1>
    </div>
  );
};

export default Clock;